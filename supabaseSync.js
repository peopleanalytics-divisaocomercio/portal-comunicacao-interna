// Leitura/escrita/tempo real com Supabase para o Portal CI.
// Sem window.sb (ver supabaseClient.js) tudo vira no-op e o app roda só no navegador.

const has = () => !!window.sb;
const j = (v) => (v === "" || v === undefined ? null : v);

// ---- status para a UI (App.jsx escuta "portal-sync") ----
let pend = 0, lastWrite = 0;
const emit = (detail) => window.dispatchEvent(new CustomEvent("portal-sync", { detail }));
const ERROS = { "23505": "ID já usado por outra pessoa — recarregue a página", "23503": "registro ligado a outro que não existe mais", "42501": "sem permissão para esta ação" };
const msgErro = (e) => ERROS[e && e.code] || (e && e.message) || String(e);

// Todas as gravações passam por uma fila única, na ordem em que foram pedidas
// (ex.: a iniciativa é gravada antes das atividades dela).
let fila = Promise.resolve();
function enfileirar(fn) { pend++; lastWrite = Date.now(); emit({ state: "saving" }); const p = fila.then(fn); fila = p.catch(() => {}).then(() => { lastWrite = Date.now(); if (!--pend) emit({ state: "saved" }); }); return p; }
async function exec(q, ctx) {
  try { const r = await q; if (r && r.error) { console.error("[Supabase]", ctx, r.error); emit({ state: "error", msg: ctx + ": " + msgErro(r.error) }); } return r; }
  catch (e) { console.error("[Supabase]", ctx, e); emit({ state: "error", msg: ctx + ": " + msgErro(e) }); return { error: e }; }
}

// ---- mapeamentos ----
const mapOutIniciativa = (i) => ({ dados: i, id: i.id, nome: i.nome, natureza: i.natureza, origem: j(i.origem), area: j(i.area), resp: j(i.resp), cx: j(i.cx), status: j(i.status), objetivo: j(i.objetivo), ini: j(i.ini), fim: j(i.fim) });
const mapInIniciativa = (r) => ({ id: r.id, nome: r.nome, natureza: r.natureza, origem: r.origem, area: r.area, resp: r.resp, cx: r.cx, status: r.status, objetivo: r.objetivo, ini: r.ini, fim: r.fim, ...(r.dados || {}) });

const mapOutTarefa = (t) => ({ dados: t, id: t.id, iniciativa_id: j(t.ini), wbs: j(t.wbs), nome: t.nome || "Sem nome", resp: j(t.resp), cx: j(t.cx), s: j(t.s), e: j(t.e), pct: Number(t.pct) || 0, status: j(t.status), nivel: Number(t.nivel) || 0, dependencia: j(t.dependencia), precisa_aprovacao: !!t.precisaAprovacao, aprovador1: j(t.aprovador1), aprovador2: j(t.aprovador2), aprovado1: !!t.aprovado1, aprovado2: !!t.aprovado2, print_aprovacao: j(t.printAprovacao) });
const mapInTarefa = (r) => ({ id: r.id, ini: r.iniciativa_id, wbs: r.wbs, nome: r.nome, resp: r.resp, cx: r.cx, s: r.s, e: r.e, pct: r.pct, status: r.status, nivel: r.nivel, dependencia: r.dependencia, precisaAprovacao: r.precisa_aprovacao, aprovador1: r.aprovador1, aprovador2: r.aprovador2, aprovado1: r.aprovado1, aprovado2: r.aprovado2, printAprovacao: r.print_aprovacao, ...(r.dados || {}) });

const mapOutLanc = (l) => ({ dados: l, id: l.id, iniciativa_id: j(l.ini), titulo: l.titulo || "Sem título", resp: j(l.resp), cx: j(l.cx), vol: Number(l.vol) || 1, data_pub: j(l.dataPub), pedido: j(l.pedido), prazo: j(l.prazo), entrega: j(l.entrega), status: j(l.status) });
const mapInLanc = (r) => ({ id: r.id, ini: r.iniciativa_id, titulo: r.titulo, resp: r.resp, cx: r.cx, vol: r.vol, dataPub: r.data_pub, pedido: r.pedido, prazo: r.prazo, entrega: r.entrega, status: r.status, ...(r.dados || {}) });

const semFilhos = (o, k) => { const c = { ...o }; delete c[k]; return c; };
const mapOutCiclo = (c) => ({ id: c.id, iniciativa_id: j(c.ini), ciclo: c.ciclo || "Ciclo", dados: semFilhos(c, "etapas") });
const mapOutEtapa = (e) => ({ id: e.id, ciclo_id: e._pai, nome: e.nome || "Sem nome", resp: j(e.resp), s: j(e.s), e: j(e.e), status: j(e.status), dados: semFilhos(e, "_pai") });
const mapOutChamado = (c) => ({ id: c.id, token: j(c.token), area: j(c.area), tipo: j(c.tipo), data_prevista: j(c.dataPrevista), assunto: c.assunto || "Sem assunto", descricao: j(c.descricao), whatsapp: j(c.whatsapp), solicitante: j(c.solicitante), gestor_resp: j(c.gestorResp), status: j(c.status), nps_score: c.npsScore ?? null, dados: semFilhos(c, "atividades") });
const mapOutChamAtiv = (a) => ({ id: a.id, chamado_id: a._pai, nome: a.nome || "Sem nome", resp: j(a.resp), status: j(a.status), nova: !!a.nova, aceita: !!a.aceita, precisa_aprovacao: !!a.precisaAprovacao, aprovador1: j(a.aprovador1), aprovador2: j(a.aprovador2), aprovado: !!a.aprovado, dados: semFilhos(a, "_pai") });

const filhos = (pais, k) => pais.flatMap((p) => (p[k] || []).map((x) => ({ ...x, _pai: p.id })));

function unflattenCiclos(ciclosRows, etapasRows) {
  return ciclosRows.map((c) => ({ ...(c.dados || {}), id: c.id, ini: c.iniciativa_id, ciclo: c.ciclo,
    etapas: etapasRows.filter((e) => e.ciclo_id === c.id).map((e) => ({ id: e.id, nome: e.nome, resp: e.resp, s: e.s, e: e.e, status: e.status, ...(e.dados || {}) })) }));
}
function unflattenChamados(chamadosRows, ativRows) {
  return chamadosRows.map((c) => ({ id: c.id, token: c.token, area: c.area, tipo: c.tipo, dataPrevista: c.data_prevista, assunto: c.assunto, descricao: c.descricao, whatsapp: c.whatsapp, solicitante: c.solicitante, gestorResp: c.gestor_resp, status: c.status, ...(c.dados || {}), npsScore: c.nps_score,
    atividades: ativRows.filter((a) => a.chamado_id === c.id).map((a) => ({ id: a.id, nome: a.nome, resp: a.resp, status: a.status, nova: a.nova, aceita: a.aceita, precisaAprovacao: a.precisa_aprovacao, aprovador1: a.aprovador1, aprovador2: a.aprovador2, aprovado: a.aprovado, ...(a.dados || {}) })) }));
}

// ---- leitura ----
async function loadAll() {
  if (!has()) return null;
  const nomes = ["iniciativas", "atividades", "lancamentos", "ciclos", "ciclo_etapas", "chamados", "chamado_atividades", "app_config"];
  const rs = await Promise.all(nomes.map((t) => window.sb.from(t).select("*")));
  const falha = rs.find((r) => r.error);
  if (falha) { console.error("[Supabase] leitura", falha.error); emit({ state: "error", msg: "Leitura: " + msgErro(falha.error) }); return null; }
  const [inis, tarefas, lanc, ciclosR, etapasR, chamadosR, ativR, cfgR] = rs.map((r) => r.data || []);
  return {
    inis: inis.map(mapInIniciativa), tarefas: tarefas.map(mapInTarefa), lanc: lanc.map(mapInLanc),
    ciclos: unflattenCiclos(ciclosR, etapasR), chamados: unflattenChamados(chamadosR, ativR),
    ...Object.fromEntries(cfgR.map((r) => [r.chave, r.valor])),
  };
}

// ---- escrita: só o que mudou; novos = insert (não sobrescreve registro de outra pessoa) ----
function diff(prev, cur) {
  const pm = new Map((prev || []).map((x) => [x.id, JSON.stringify(x)]));
  const cm = new Set(cur.map((x) => x.id));
  return {
    removidos: [...pm.keys()].filter((id) => !cm.has(id)),
    novos: cur.filter((x) => !pm.has(x.id)),
    alterados: cur.filter((x) => pm.has(x.id) && pm.get(x.id) !== JSON.stringify(x)),
  };
}
async function gravar(table, d, mapOut, rotulo) {
  if (d.novos.length) await exec(window.sb.from(table).insert(d.novos.map(mapOut)), "Criar " + rotulo);
  if (d.alterados.length) await exec(window.sb.from(table).upsert(d.alterados.map(mapOut)), "Salvar " + rotulo);
}
const apagar = (table, ids, rotulo) => ids.length ? exec(window.sb.from(table).delete().in("id", ids), "Excluir " + rotulo) : null;

const saveSimples = (table, mapOut, rotulo) => (prev, cur) => { if (!has()) return; const d = diff(prev, cur); if (!d.removidos.length && !d.novos.length && !d.alterados.length) return; return enfileirar(async () => { await apagar(table, d.removidos, rotulo); await gravar(table, d, mapOut, rotulo); }); };
const saveComFilhos = (tPai, tFilho, kFilhos, mapPai, mapFilho, rPai, rFilho) => (prev, cur) => {
  if (!has()) return;
  const dp = diff((prev || []).map((x) => semFilhos(x, kFilhos)), cur.map((x) => semFilhos(x, kFilhos)));
  const df = diff(filhos(prev || [], kFilhos), filhos(cur, kFilhos));
  if (![dp, df].some((d) => d.removidos.length || d.novos.length || d.alterados.length)) return;
  return enfileirar(async () => {
    await apagar(tFilho, df.removidos, rFilho); await apagar(tPai, dp.removidos, rPai);
    await gravar(tPai, dp, mapPai, rPai); await gravar(tFilho, df, mapFilho, rFilho);
  });
};

const saveIniciativas = saveSimples("iniciativas", mapOutIniciativa, "iniciativa");
const saveTarefas = saveSimples("atividades", mapOutTarefa, "atividade");
const saveLanc = saveSimples("lancamentos", mapOutLanc, "lançamento");
const saveCiclos = saveComFilhos("ciclos", "ciclo_etapas", "etapas", mapOutCiclo, mapOutEtapa, "ciclo", "etapa");
const saveChamados = saveComFilhos("chamados", "chamado_atividades", "atividades", mapOutChamado, mapOutChamAtiv, "chamado", "atividade do chamado");
function saveConfig(chave, valor) { if (!has()) return; return enfileirar(() => exec(window.sb.from("app_config").upsert({ chave, valor }), "Salvar " + chave)); }

// ---- tempo real: recarrega quando outra pessoa altera; espera nossas gravações terminarem ----
function subscribeAll(onRemoteChange) {
  if (!has()) return () => {};
  const tables = ["iniciativas", "atividades", "lancamentos", "ciclos", "ciclo_etapas", "chamados", "chamado_atividades", "usuarios", "app_config"];
  const channel = window.sb.channel("portal-ci-live");
  let t0 = null;
  const agendar = () => { clearTimeout(t0); t0 = setTimeout(() => { if (pend || Date.now() - lastWrite < 1500) return agendar(); onRemoteChange(); }, 600); };
  tables.forEach((t) => channel.on("postgres_changes", { event: "*", schema: "public", table: t }, agendar));
  channel.subscribe();
  return () => { clearTimeout(t0); window.sb.removeChannel(channel); };
}

// ---- autenticação ----
const mapUser = (r) => ({ id: r.id, nome: r.nome, cargo: r.cargo, email: r.email, login: r.login, perfil: r.perfil, ativo: r.ativo, precisaTrocarSenha: r.precisa_trocar_senha });
async function meuCadastro(uid) { const { data } = await window.sb.from("usuarios").select("*").eq("auth_user_id", uid).maybeSingle(); return data; }

async function authRestore() {
  if (!has()) return null;
  const { data } = await window.sb.auth.getSession();
  const uid = data?.session?.user?.id; if (!uid) return null;
  const row = await meuCadastro(uid);
  if (!row || row.ativo === false) { await window.sb.auth.signOut(); return null; }
  return mapUser(row);
}
function onSignedOut(fn) { if (!has()) return () => {}; const { data } = window.sb.auth.onAuthStateChange((ev) => { if (ev === "SIGNED_OUT") fn(); }); return () => data.subscription.unsubscribe(); }

async function authSignIn(loginOuEmail, senha) {
  if (!has()) return { error: "no-supabase" };
  let email = loginOuEmail.trim();
  if (!email.includes("@")) { const { data } = await window.sb.rpc("email_do_login", { p_login: email }); if (!data) return { error: "Login ou senha inválidos." }; email = data; }
  const { data, error } = await window.sb.auth.signInWithPassword({ email: email.toLowerCase(), password: senha });
  if (error) return { error: /invalid login/i.test(error.message) ? "Login ou senha inválidos." : error.message };
  const row = await meuCadastro(data.user.id);
  if (!row) { await window.sb.auth.signOut(); return { error: "Seu login ainda não está vinculado ao cadastro. Fale com o Administrador." }; }
  if (row.ativo === false) { await window.sb.auth.signOut(); return { error: "Usuário inativo." }; }
  return { user: mapUser(row) };
}
async function authSignOut() { if (has()) await window.sb.auth.signOut(); }
async function authUpdatePassword(novaSenha) {
  if (!has()) return { error: "no-supabase" };
  const { error } = await window.sb.auth.updateUser({ password: novaSenha });
  if (error) return { error: /same/i.test(error.message) ? "A nova senha precisa ser diferente da atual." : /weak|short|least/i.test(error.message) ? "Senha fraca. Use ao menos 8 caracteres, com letras e números." : error.message };
  const r = await window.sb.rpc("marcar_senha_trocada");
  if (r.error) return { error: msgErro(r.error) };
  return { ok: true };
}
async function loadUsuarios() {
  if (!has()) return null;
  const { data, error } = await window.sb.from("usuarios").select("*").order("nome");
  if (error) return null;
  return (data || []).map(mapUser);
}
async function saveUsuarioFields(id, fields) {
  if (!has()) return {};
  const r = await enfileirar(() => exec(window.sb.from("usuarios").update({ nome: fields.nome, cargo: fields.cargo, perfil: fields.perfil, ativo: fields.ativo }).eq("id", id), "Salvar usuário"));
  return r && r.error ? { error: msgErro(r.error) } : {};
}
async function chamarAdmin(body) {
  if (!has()) return { error: "no-supabase" };
  const { data, error } = await window.sb.functions.invoke("admin-users", { body });
  if (error) { let m = error.message; try { const b = await error.context.json(); if (b && b.error) m = b.error; } catch (e) {} return { error: m }; }
  return typeof data === "string" ? JSON.parse(data) : data;
}
const adminCriarUsuario = (payload) => chamarAdmin({ action: "criar_usuario", ...payload });
const adminResetarSenha = (usuario_id) => chamarAdmin({ action: "resetar_senha", usuario_id });

window.PortalSync = { authRestore, onSignedOut, loadAll, saveConfig, saveIniciativas, saveTarefas, saveLanc, saveCiclos, saveChamados, subscribeAll, authSignIn, authSignOut, authUpdatePassword, loadUsuarios, saveUsuarioFields, adminCriarUsuario, adminResetarSenha };
