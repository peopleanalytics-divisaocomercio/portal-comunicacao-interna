/* Shared data model, helpers and cross-screen components for the Portal CI UI kit. */
const pad2 = (n) => String(n).padStart(2, "0");
const isoLocal = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const TODAY = isoLocal(new Date());
const AREAS = ["DHO · Pessoas e Cultura", "R&S", "Diretoria Adm. e Financeira", "Comercial", "Vitória Motors", "Presidência", "Outra"];
/* Categoria da atividade (P, M, G) — única classificação usada no portal. */
const CATEGORIAS = [
  { v: "P", nome: "Operacional", def: "Segue um processo redondo e padronizado. Execução predominantemente manual, que não exige analítico de quem executa: a decisão já está tomada pelo processo.", ex: "Lançamento de notas fiscais; arquivamento de documentos; envio de comunicados padronizados" },
  { v: "M", nome: "Tático", def: "Exige um pouco mais de analítico de quem executa, ou envolve um processo mais robusto — com mais etapas, mais sistemas ou mais interfaces com outras áreas.", ex: "Conferência e consolidação de gerenciais; cotações; análise de indicadores de rotina" },
  { v: "G", nome: "Estratégico", def: "Envolve analítico aprofundado e tomada de decisão de quem executa. O resultado depende diretamente do julgamento e da experiência do profissional.", ex: "Negociação de contratos estratégicos; definição de políticas e processos; análise de risco" },
];
const catLabel = (c) => { const x = CATEGORIAS.find((k) => k.v === c); return x ? `${x.v} · ${x.nome}` : "—"; };
const NAT_LABEL = { Projeto: "Projeto", Produto: "Produção", Processo: "Processo", Atendimento: "Atendimento" };
const STATUS_ATV = ["Não iniciado", "Em andamento", "Aguardando terceiro", "Concluído", "Atrasado"];
const URGENCIAS = [["Baixa", "Sem pressa"], ["Média", "Tem data, mas há margem"], ["Alta", "Preciso em poucos dias"], ["Urgente", "Impacta algo imediato"]];
const URG_COLOR = { Baixa: "var(--slate)", "Média": "var(--info)", Alta: "var(--orange)", Urgente: "var(--danger)" };
const STATUS_CHAMADO = ["Novo", "Em atendimento", "Aguardando solicitante", "Concluído", "Cancelado"];
const TIPOS_ATENDIMENTO = ["Vídeo", "Comunicação", "Design/Arte", "Evento", "Outro"];
const TIPOS_MARCO = ["Data comemorativa", "Aniversário", "Evento", "Lembrete"];
const concluido = (st) => ["Concluído", "Entregue", "Publicado"].includes(st);

const D = (s) => new Date(s + "T00:00:00");
const fmt = (s) => { if (!s) return "—"; const d = D(s); return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}`; };
const fmtY = (s) => { if (!s) return "—"; const d = D(s); return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`; };
const fmtPeriodo = (s, e) => (!e || e === s ? fmt(s) : `${fmt(s)} – ${fmt(e)}`);
const daysBetween = (a, b) => Math.round((D(b) - D(a)) / 86400000);
const addDays = (s, n) => { const d = D(s); d.setDate(d.getDate() + n); return isoLocal(d); };
const mondayOf = (s) => { const d = D(s); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return isoLocal(d); };
const inRange = (x, a, b) => x >= a && x <= b;
const overlaps = (s, e, a, b) => !!s && s <= b && (e || s) >= a;
const rnd = (n) => Array.from(crypto.getRandomValues(new Uint8Array(n)), (b) => b.toString(16).padStart(2, "0")).join("");
const uid = (p) => p + rnd(5);
const novoToken = () => rnd(24);
const agora = () => new Date().toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
const nomeCurto = (n) => { if (!n) return "—"; const p = n.split(" "); return p.length > 1 ? `${p[0]} ${p[p.length - 1]}` : n; };
const daysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
function monthGrid(ref) {
  const d = D(ref); const y = d.getFullYear(), m = d.getMonth();
  const first = new Date(y, m, 1); const startPad = (first.getDay() + 6) % 7;
  const cells = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth(y, m); day++) cells.push(`${y}-${pad2(m + 1)}-${pad2(day)}`);
  return { cells, label: first.toLocaleDateString("pt-BR", { month: "long", year: "numeric" }) };
}

const MICHELE = "Michele Aparecida Guss Gomes";
const JULIANA = "Juliana Barcelos Garcia";
const SARAH = "Sarah Candido Mirandola";
const ANDRE = "Andre Lovatti Coelho Koffer";
const ELIAS = "Elias Roberto";
const APROVADORES = [MICHELE, JULIANA];
const APROVADOR1 = MICHELE, APROVADOR2 = JULIANA;
const GESTORA_ATENDIMENTO = MICHELE;

const USERS0 = [
  { id: "u1", nome: ANDRE, cargo: "Analista de Comunicação Interna", email: "", login: "andrelkoffer", senha: "", perfil: "Analista", ativo: true, precisaTrocarSenha: false },
  { id: "u2", nome: SARAH, cargo: "Assistente de Comunicação Interna", email: "", login: "SarahC", senha: "", perfil: "Analista", ativo: true, precisaTrocarSenha: false },
  { id: "u3", nome: MICHELE, cargo: "Supervisor de Comunicação Interna", email: "", login: "micheleg", senha: "", perfil: "Gestor", ativo: true, precisaTrocarSenha: false },
  { id: "u4", nome: ELIAS, cargo: "Prestador de Serviço", email: "", login: "eliasroberto.ps", senha: "", perfil: "Analista", ativo: true, precisaTrocarSenha: false },
  { id: "u5", nome: "Amanda Gomes da Silva do Nascimento", cargo: "Analista de Dados e Remuneração", email: "", login: "amandagn", senha: "", perfil: "Administrador", ativo: true, precisaTrocarSenha: false },
  { id: "u6", nome: JULIANA, cargo: "Head de Pessoas e Cultura", email: "", login: "julianab", senha: "", perfil: "Administrador", ativo: true, precisaTrocarSenha: false },
];
const gerarSenha = () => rnd(6);

/* ===== Log de alterações ===== */
const LOG_LABELS = { resp: "Responsável", s: "Início", e: "Fim", status: "Status", cx: "Categoria", dependeDe: "Dependência", aceita: "Aceite", recusada: "Recusa", precisaAprovacao: "Precisa de aprovação", aprovacao: "Aprovação", prazo: "Prazo", gestorResp: "Responsável pelo atendimento", urgencia: "Urgência", formato: "Formato", nome: "Nome", pct: "% concluído", natureza: "Natureza", objetivo: "Objetivo", area: "Área" };
const fmtVal = (v) => { if (v === true) return "Sim"; if (v === false) return "Não"; if (v == null || v === "") return "—"; if (typeof v === "object") return v.status || "—"; if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return fmtY(v); return String(v); };
function aplicarPatch(obj, patch, por) {
  const log = [...(obj.log || [])];
  Object.keys(patch).forEach((k) => {
    if (!LOG_LABELS[k]) return;
    const de = obj[k], para = patch[k];
    if (JSON.stringify(de) === JSON.stringify(para)) return;
    const last = log[log.length - 1];
    if (last && last.k === k && last.por === (por || "") && Date.now() - last.ts < 60000) { log[log.length - 1] = { ...last, valor: fmtVal(para), quando: agora(), ts: Date.now() }; return; }
    log.push({ k, campo: LOG_LABELS[k], de: fmtVal(de), valor: fmtVal(para), quando: agora(), ts: Date.now(), por: por || "" });
  });
  return { ...obj, ...patch, log: log.slice(-60) };
}

/* ===== Aprovação ===== */
function aprovStatus(r) { if (!r || !r.precisaAprovacao) return null; const a = r.aprovacao; return a && a.status ? a.status : "Pendente envio"; }
const enviarAprovacao = (por) => ({ status: "Aguardando", enviadoPor: por, enviadoEm: agora(), ts: Date.now(), votos: {} });
function votar(r, aprovador, ok, por, print, comentario) {
  const a = { ...(r.aprovacao || {}), votos: { ...((r.aprovacao || {}).votos || {}) } };
  a.votos[aprovador] = { ok, por, quando: agora(), print: print || "", comentario: comentario || "" };
  a.status = !ok ? "Reprovado" : APROVADORES.every((n) => a.votos[n] && a.votos[n].ok) ? "Aprovado" : "Aguardando";
  return a;
}

/* ===== Lista unificada de atividades (projetos, ciclos, atendimentos) ===== */
function todasAtividades({ inis, tarefas, ciclos, chamados, lanc }) {
  const ini = (id) => inis.find((i) => i.id === id) || {};
  const out = [];
  (tarefas || []).forEach((t) => out.push({ key: "tar:" + t.id, kind: "tar", grupoId: t.ini, id: t.id, iniId: t.ini, titulo: t.nome, grupo: ini(t.ini).nome, sub: "", resp: t.resp, s: t.s, e: t.e || t.s, status: t.status, nat: "Projeto", cx: t.cx || "P", raw: t }));
  (ciclos || []).forEach((c) => (c.etapas || []).forEach((e) => out.push({ key: "eta:" + c.id + ":" + e.id, kind: "eta", grupoId: c.id, id: e.id, cicloId: c.id, iniId: c.ini, titulo: e.nome, grupo: ini(c.ini).nome, sub: "Ciclo " + c.ciclo, resp: e.resp, s: e.s, e: e.e || e.s, status: e.status, nat: ini(c.ini).natureza || "Produto", cx: e.cx || "P", raw: e })));
  (chamados || []).forEach((c) => (c.atividades || []).forEach((a) => out.push({ key: "cha:" + c.id + ":" + a.id, kind: "cha", grupoId: c.id, id: a.id, chamadoId: c.id, iniId: null, titulo: a.nome, grupo: "Atendimento " + c.id, sub: c.assunto, resp: a.resp, s: a.s, e: a.e || a.s, status: a.status, nat: "Atendimento", cx: a.cx || "P", raw: a })));
  (lanc || []).forEach((l) => { const s = l.pedido || l.dataPub || l.prazo; out.push({ key: "lan:" + l.id, kind: "lan", grupoId: l.ini, id: l.id, iniId: l.ini, titulo: l.titulo, grupo: ini(l.ini).nome, sub: "", resp: l.resp, s, e: l.prazo || l.dataPub || s, status: l.status, nat: ini(l.ini).natureza || "Processo", cx: l.cx || "P", raw: l }); });
  const byGroup = {};
  out.forEach((a) => { (byGroup[a.kind + a.grupoId] = byGroup[a.kind + a.grupoId] || {})[a.id] = a; });
  out.forEach((a) => {
    a.chamadoOrigem = a.raw.chamadoOrigem || a.chamadoId || null;
    a.atrasada = !concluido(a.status) && !!a.e && a.e < TODAY;
    a.statusView = a.atrasada ? "Atrasado" : a.status;
    a.aprov = aprovStatus(a.raw);
    const dep = a.raw.dependeDe && byGroup[a.kind + a.grupoId][a.raw.dependeDe];
    a.depAguardando = dep && !concluido(dep.status) ? dep : null;
    a.pendenteAceite = !!a.raw.nova && !a.raw.aceita && !a.raw.recusada;
  });
  return out;
}

/* ===== Atendimento: responsável conforme ausências ===== */
function respAtendimento(ausencias, data) {
  let r = GESTORA_ATENDIMENTO; const vistos = new Set();
  for (let i = 0; i < 6; i++) {
    vistos.add(r);
    const aus = (ausencias || []).find((a) => a.nome === r && inRange(data || TODAY, a.de, a.ate));
    if (!aus) return r;
    if (!aus.substituto || vistos.has(aus.substituto)) return JULIANA;
    r = aus.substituto;
  }
  return JULIANA;
}
const TIPOS_AUSENCIA = ["Férias", "Folga", "Licença", "Atestado", "Treinamento / curso", "Outro"];
const ausenteEm = (ausencias, nome, s, e) => (ausencias || []).find((a) => a.nome === nome && overlaps(a.de, a.ate, s || TODAY, e || s || TODAY));
const rotuloResp = (u, ausencias, s, e) => { const a = ausenteEm(ausencias, u.nome, s, e); return a ? `${u.nome} — ${(a.tipo || "ausente").toLowerCase()} ${fmt(a.de)} a ${fmt(a.ate)}` : u.nome; };
const confirmaResp = (ausencias, nome, s, e) => { const a = nome && ausenteEm(ausencias, nome, s, e); return !a || confirm(`${nomeCurto(nome)} estará ausente (${(a.tipo || "ausência").toLowerCase()}) de ${fmtY(a.de)} a ${fmtY(a.ate)}. Direcionar mesmo assim?`); };
const ausenciaAtiva = (ausencias, nome, data) => (ausencias || []).find((a) => a.nome === nome && inRange(data || TODAY, a.de, a.ate));
const seqDe = (id, p) => { const m = new RegExp("^" + p + "(\\d+)").exec(String(id)); return m ? parseInt(m[1], 10) : 0; };
const nextIniId = (inis) => "IN" + String(inis.reduce((m, i) => Math.max(m, seqDe(i.id, "IN")), 0) + 1).padStart(2, "0") + "-" + rnd(2);
const FORMATOS = [["Atendimento", "Pontual", "Fica só em Atendimentos — entrega única."], ["Projeto", "Projeto", "Tem começo, meio e fim — vira um cronograma."], ["Produto", "Produção", "Vai se repetir em ciclos/edições."], ["Processo", "Processo", "Vira uma rotina da equipe."]];
const nextChamadoId = (chamados) => "AT" + String(chamados.reduce((m, c) => Math.max(m, seqDe(c.id, "AT")), 0) + 1).padStart(4, "0") + "-" + rnd(2);
const linkChamado = (token) => new URL("chamado.html" + (token ? "?c=" + token : ""), location.href).href;
function waLink(phone, msg) {
  let d = String(phone || "").replace(/\D/g, "");
  if (d && d.length <= 11) d = "55" + d;
  return `https://wa.me/${d}?text=${encodeURIComponent(msg)}`;
}

/* ===== Notificações (derivadas do estado) ===== */
function gerarNotificacoes({ ativs, chamados, inis, user, podeAtender, ausencias }) {
  const me = user.nome, out = [], ts0 = (d) => (d ? Date.parse(d + "T08:00:00") || 0 : 0);
  const push = (n) => out.push(n);
  ativs.forEach((x) => { if (x.resp !== me || concluido(x.status)) return; const au = ausenteEm(ausencias, me, x.s, x.e); if (au) push({ id: "conf:" + x.key + ":" + au.id + ":" + x.s + x.e, icon: "calendar-x", titulo: "Atividade durante sua ausência", texto: `${x.titulo} (${fmtPeriodo(x.s, x.e)}) cai em ${(au.tipo || "ausência").toLowerCase()} — redirecione ou ajuste a data`, key: x.key, view: "atividades", ts: Date.now() - 1, destaque: true }); });
  ativs.forEach((a) => {
    const r = a.raw, minha = a.resp === me, criei = r.criadoPor === me;
    if (minha && a.pendenteAceite) push({ id: "nova:" + a.key + ":" + (r.criadoTs || 0), icon: "calendar-plus", titulo: "Nova atividade para você", texto: a.titulo + " · " + a.grupo + (r.criadoPor ? ` · por ${nomeCurto(r.criadoPor)}` : ""), key: a.key, view: "atividades", ts: r.criadoTs || 0, destaque: true });
    (r.log || []).forEach((l) => {
      if (!l.por || l.por === me) return;
      if (l.k === "resp" && l.valor === me) push({ id: "rem:" + a.key + ":" + l.ts, icon: "repeat", titulo: "Atividade direcionada a você", texto: `${a.titulo} · por ${nomeCurto(l.por)}`, key: a.key, view: "atividades", ts: l.ts, destaque: true });
      else if (l.k === "resp" && l.de === me) push({ id: "sai:" + a.key + ":" + l.ts, icon: "user-minus", titulo: "Atividade passou para outra pessoa", texto: `${a.titulo} → ${l.valor} · por ${nomeCurto(l.por)}`, key: a.key, view: "atividades", ts: l.ts });
      else if ((minha || criei) && l.k !== "aprovacao") push({ id: "upd:" + a.key + ":" + l.k + ":" + l.ts, icon: "pencil", titulo: minha ? "Alteração em atividade sua" : "Alteração em atividade que você criou", texto: `${a.titulo}: ${l.campo} ${l.de && l.de !== "—" ? l.de + " → " : "→ "}${l.valor} · ${nomeCurto(l.por)}`, key: a.key, view: "atividades", ts: l.ts });
    });
    if (minha && !concluido(a.status) && a.e === TODAY) push({ id: "hoje:" + a.key + ":" + a.e, icon: "alarm-clock", titulo: "Vence hoje", texto: a.titulo + " · " + a.grupo, key: a.key, view: "atividades", ts: ts0(a.e) });
    if (minha && a.atrasada) push({ id: "atr:" + a.key + ":" + a.e, icon: "alert-triangle", titulo: "Atividade atrasada", texto: `${a.titulo} · prazo era ${fmtY(a.e)}`, key: a.key, view: "atividades", ts: ts0(addDays(a.e, 1)), destaque: true });
    if (a.aprov === "Aguardando" && APROVADORES.includes(me) && !(r.aprovacao.votos || {})[me]) push({ id: "apr:" + a.key + ":" + r.aprovacao.ts, icon: "shield-check", titulo: "Aguardando sua aprovação", texto: a.titulo + " · enviada por " + nomeCurto(r.aprovacao.enviadoPor), key: a.key, view: "painel", ts: r.aprovacao.ts || 0, destaque: true });
    if ((minha || criei) && (a.aprov === "Aprovado" || a.aprov === "Reprovado")) push({ id: "aprres:" + a.key + ":" + a.aprov + ":" + r.aprovacao.ts, icon: a.aprov === "Aprovado" ? "check-circle-2" : "x-circle", titulo: `Atividade ${a.aprov.toLowerCase()}`, texto: a.titulo, key: a.key, view: "atividades", ts: r.aprovacao.ts || 0 });
    if (r.recusada && criei) push({ id: "rec:" + a.key + ":" + (r.recusadaTs || 0), icon: "x-circle", titulo: "Atividade recusada", texto: `${a.titulo} · ${nomeCurto(a.resp)}${r.motivoRecusa ? ": " + r.motivoRecusa : ""}`, key: a.key, view: "atividades", ts: r.recusadaTs || 0, destaque: true });
  });
  (chamados || []).forEach((c) => {
    const meu = c.gestorResp === me;
    if (c.status === "Novo" && (podeAtender || meu)) push({ id: "cham:" + c.id, icon: "headset", titulo: meu ? "Novo chamado para você" : "Novo chamado", texto: `${c.id} · ${c.assunto} (${c.area || "—"})`, view: "atendimentos", chamadoId: c.id, ts: c.criadoTs || 0, destaque: true });
    (c.log || []).forEach((l) => {
      if (!l.por || l.por === me) return;
      if (l.k === "gestorResp" && l.valor === me) push({ id: "chdir:" + c.id + ":" + l.ts, icon: "headset", titulo: "Chamado direcionado a você", texto: `${c.id} · ${c.assunto} · por ${nomeCurto(l.por)}`, view: "atendimentos", chamadoId: c.id, ts: l.ts, destaque: true });
      else if (meu && l.k !== "gestorResp") push({ id: "chupd:" + c.id + ":" + l.k + ":" + l.ts, icon: "pencil", titulo: "Alteração em chamado seu", texto: `${c.id}: ${l.campo} → ${l.valor} · ${nomeCurto(l.por)}`, view: "atendimentos", chamadoId: c.id, ts: l.ts });
    });
    if (meu && c.npsScore != null) push({ id: "nps:" + c.id, icon: "star", titulo: "Avaliação recebida", texto: `${c.id} · nota ${c.npsScore}${c.npsComentario ? ": " + c.npsComentario : ""}`, view: "atendimentos", chamadoId: c.id, ts: c.npsTs || c.criadoTs || 0 });
  });
  (inis || []).forEach((i) => {
    (i.log || []).forEach((l) => { if (l.por && l.por !== me && (l.k === "resp" && l.valor === me)) push({ id: "iniupd:" + i.id + ":" + l.k + ":" + l.ts, icon: "folder-kanban", titulo: l.k === "resp" ? "Iniciativa direcionada a você" : "Alteração em iniciativa sua", texto: `${i.nome}: ${l.campo} → ${l.valor} · ${nomeCurto(l.por)}`, view: "iniciativas", ts: l.ts }); });
  });
  (ausencias || []).forEach((a) => { if (a.substituto === me && a.criadoPor !== me && a.ate >= TODAY) push({ id: "sub:" + a.id, icon: "user-check", titulo: "Você cobre os atendimentos", texto: `${nomeCurto(a.nome)} · ${(a.tipo || "ausência").toLowerCase()} de ${fmtY(a.de)} a ${fmtY(a.ate)}`, view: "atendimentos", ts: a.criadoTs || ts0(a.de) }); });
  const vistos = new Set();
  return out.filter((n) => (vistos.has(n.id) ? false : vistos.add(n.id))).sort((x, y) => (y.ts || 0) - (x.ts || 0));
}

function Icon({ name, size = 16, color, style }) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return <i data-lucide={name} style={{ display: "inline-flex", width: size, height: size, color: color || "currentColor", ...style }}></i>;
}

function Chip({ children, color = "var(--slate)", bg = "var(--canvas)", icon }) {
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10.5, fontWeight: 700, color, background: bg, padding: "2px 8px", borderRadius: 20, whiteSpace: "nowrap", fontFamily: "var(--font-sans)" }}>{icon && <Icon name={icon} size={11} />}{children}</span>;
}
function NatChip({ nat }) {
  const { NatureBadge } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  if (nat === "Atendimento") return <Chip color="var(--blue-dark)" bg="var(--soft-blue)" icon="headset">Atendimento</Chip>;
  return <NatureBadge nature={nat} />;
}
function AprovChip({ status }) {
  if (!status) return null;
  const m = { "Pendente envio": ["var(--slate)", "var(--canvas)", "shield"], Aguardando: ["var(--orange)", "var(--soft-orange)", "clock"], Aprovado: ["var(--success)", "var(--success-bg)", "shield-check"], Reprovado: ["var(--danger)", "var(--danger-bg)", "shield-x"] }[status];
  return <Chip color={m[0]} bg={m[1]} icon={m[2]}>{status === "Aguardando" ? "Aguardando aprovação" : status === "Pendente envio" ? "Precisa aprovação" : status}</Chip>;
}

function HistoricoLista({ log }) {
  if (!log || !log.length) return <div style={{ color: "var(--muted)", fontSize: 12.5 }}>Nenhuma alteração registrada ainda.</div>;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {log.slice().reverse().map((h, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "112px 1fr", gap: 10, fontSize: 12.5, padding: "7px 0", borderBottom: "1px solid var(--canvas)" }}>
          <div style={{ color: "var(--muted)", fontSize: 11 }}>{h.quando}</div>
          <div><b>{h.campo}</b>{h.de !== undefined && <span style={{ color: "var(--muted)" }}> {h.de} →</span>} <b style={{ color: "var(--blue-dark)" }}>{h.valor}</b>{h.por && <div style={{ fontSize: 11, color: "var(--slate)" }}>por {nomeCurto(h.por)}</div>}</div>
        </div>
      ))}
    </div>
  );
}
function HistoricoModal({ titulo, log, onClose }) {
  const { Modal, Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  return <Modal title={"Histórico — " + titulo} sub="Quem alterou, o quê e quando." onClose={onClose} width={460}><div style={{ maxHeight: "55vh", overflow: "auto" }}><HistoricoLista log={log} /></div><Button variant="ghost" onClick={onClose} style={{ width: "100%", justifyContent: "center", marginTop: 12 }}>Fechar</Button></Modal>;
}

const secTitle = { fontSize: 11, fontWeight: 800, color: "var(--slate)", textTransform: "uppercase", letterSpacing: ".4px", margin: "18px 0 8px" };
const inputBase = { width: "100%", boxSizing: "border-box", padding: "8px 10px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 13, fontFamily: "var(--font-sans)", background: "#fff", color: "var(--ink)" };

function AprovacaoBloco({ r, user, onPatch }) {
  const { Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const me = user.nome; const st = aprovStatus(r);
  const [print, setPrint] = React.useState("");
  const [coment, setComent] = React.useState("");
  const votos = (r.aprovacao && r.aprovacao.votos) || {};
  if (!r.precisaAprovacao) return (
    <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, cursor: "pointer" }}><input type="checkbox" checked={false} onChange={() => onPatch({ precisaAprovacao: true })} /> Esta atividade precisa de aprovação</label>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <AprovChip status={st} />
        {r.aprovacao && r.aprovacao.enviadoEm && <span style={{ fontSize: 11.5, color: "var(--muted)" }}>enviada por {nomeCurto(r.aprovacao.enviadoPor)} em {r.aprovacao.enviadoEm}</span>}
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          {(st === "Pendente envio" || st === "Reprovado") && <Button variant="primary" icon={<Icon name="send" size={14} />} onClick={() => onPatch({ aprovacao: enviarAprovacao(me) })}>{st === "Reprovado" ? "Reenviar para aprovação" : "Enviar para aprovação"}</Button>}
          {st === "Pendente envio" && <Button variant="ghost" onClick={() => onPatch({ precisaAprovacao: false, aprovacao: null })}>Não precisa</Button>}
        </div>
      </div>
      {st !== "Pendente envio" && APROVADORES.map((n) => {
        const v = votos[n];
        return (
          <div key={n} style={{ background: "var(--canvas)", borderRadius: 8, padding: "10px 12px", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", fontSize: 12.5 }}>
            <b style={{ minWidth: 130 }}>{nomeCurto(n)}</b>
            {v ? (v.ok ? <span style={{ color: "var(--success)", fontWeight: 700 }}>✓ Aprovado em {v.quando}{v.por !== n ? ` · registrado por ${nomeCurto(v.por)}` : ""}</span> : <span style={{ color: "var(--danger)", fontWeight: 700 }}>✕ Reprovado em {v.quando}{v.comentario ? ` — ${v.comentario}` : ""}</span>) : <span style={{ color: "var(--orange)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="clock" size={13} /> Aguardando</span>}
            {v && v.print && <a href={v.print} target="_blank" rel="noreferrer" style={{ color: "var(--blue-light)", fontWeight: 700 }}>ver print</a>}
            {st === "Aguardando" && !v && me === n && (
              <div style={{ display: "flex", gap: 6, marginLeft: "auto", flexWrap: "wrap" }}>
                <input style={{ ...inputBase, width: 170, padding: "6px 9px" }} placeholder="Comentário (se reprovar)" value={coment} onChange={(e) => setComent(e.target.value)} />
                <Button variant="ghost" onClick={() => onPatch({ aprovacao: votar(r, n, false, me, "", coment) })}>Reprovar</Button>
                <Button variant="primary" onClick={() => onPatch({ aprovacao: votar(r, n, true, me) })}>Aprovar</Button>
              </div>
            )}
            {st === "Aguardando" && !v && me === MICHELE && n === JULIANA && (
              <div style={{ display: "flex", gap: 6, marginLeft: "auto", flexWrap: "wrap", alignItems: "center" }}>
                <input style={{ ...inputBase, width: 210, padding: "6px 9px" }} placeholder="Link do print da aprovação" value={print} onChange={(e) => setPrint(e.target.value)} />
                <Button variant="dark" disabled={!print} style={{ opacity: print ? 1 : .5 }} onClick={() => print && onPatch({ aprovacao: votar(r, JULIANA, true, me, print) })}>Registrar aprovação da Juliana</Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CategoriaPicker({ value, onChange, compact }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 8 }}>
      {CATEGORIAS.map((c) => {
        const on = value === c.v;
        return (
          <button key={c.v} type="button" onClick={() => onChange(c.v)} title={"Exemplos: " + c.ex} style={{ textAlign: "left", padding: compact ? "8px 10px" : "10px 12px", borderRadius: 9, border: `2px solid ${on ? "var(--blue-dark)" : "var(--line)"}`, background: on ? "var(--soft-blue)" : "#fff", cursor: "pointer", fontFamily: "var(--font-sans)", color: "var(--ink)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}><span style={{ width: 22, height: 22, borderRadius: 6, background: on ? "var(--blue-dark)" : "var(--canvas)", color: on ? "#fff" : "var(--blue-dark)", fontWeight: 800, fontSize: 12, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{c.v}</span><b style={{ fontSize: 13 }}>{c.nome}</b></div>
            <div style={{ fontSize: 11, color: "var(--slate)", marginTop: 5, lineHeight: 1.4 }}>{c.def}</div>
            {!compact && <div style={{ fontSize: 10.5, color: "var(--muted)", marginTop: 4, lineHeight: 1.35 }}><i>Ex.: {c.ex}</i></div>}
          </button>
        );
      })}
    </div>
  );
}

function F({ label, children, span }) { return <div style={{ gridColumn: span ? "1 / -1" : "auto" }}><div style={{ fontSize: 11, fontWeight: 700, color: "var(--slate)", marginBottom: 4 }}>{label}</div>{children}</div>; }

function AtividadeDetalheModal({ a, users, user, ausencias, onPatch, onClose, onDelete }) {
  const { Modal, Button, StatusBadge } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const r = a.raw; const me = user.nome;
  const [motivo, setMotivo] = React.useState("");
  const [recusando, setRecusando] = React.useState(false);
  const mudarResp = (nome) => confirmaResp(ausencias, nome, a.s, a.e) && onPatch(nome && nome !== me ? { resp: nome, nova: true, aceita: false, recusada: false, criadoPor: me, criadoTs: Date.now() } : { resp: nome, nova: false, aceita: true, recusada: false });
  return (
    <Modal title={a.titulo || "Atividade"} sub={[a.grupo, a.sub].filter(Boolean).join(" · ")} onClose={onClose} width={640}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 14 }}>
        <NatChip nat={a.nat} /><StatusBadge status={a.statusView} /><AprovChip status={a.aprov} />
        {a.depAguardando && <Chip color="var(--warning)" bg="var(--soft-orange)" icon="link">Depende de: {a.depAguardando.titulo}</Chip>}
        <span style={{ marginLeft: "auto", fontSize: 10.5, color: "var(--muted)", fontFamily: "monospace" }}>{a.id}</span>
      </div>
      {a.pendenteAceite && a.resp === me && (
        <div style={{ background: "var(--soft-orange)", borderRadius: 10, padding: 12, marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}><Icon name="bell" size={14} /> {r.criadoPor ? nomeCurto(r.criadoPor) + " direcionou" : "Direcionaram"} esta atividade para você.</div>
          {!recusando ? (
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="primary" icon={<Icon name="check" size={14} />} onClick={() => onPatch({ aceita: true, nova: false })}>Aceitar</Button>
              <Button variant="ghost" onClick={() => setRecusando(true)}>Recusar</Button>
            </div>
          ) : (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <input style={{ ...inputBase, flex: "1 1 220px" }} placeholder="Motivo da recusa (ex.: sem agenda nessa data)" value={motivo} onChange={(e) => setMotivo(e.target.value)} />
              <Button variant="dark" onClick={() => onPatch({ recusada: true, motivoRecusa: motivo, recusadaTs: Date.now() })}>Confirmar recusa</Button>
            </div>
          )}
        </div>
      )}
      {r.recusada && <div style={{ background: "var(--danger-bg)", color: "var(--danger)", borderRadius: 10, padding: 12, marginBottom: 14, fontSize: 12.5, fontWeight: 600 }}>Recusada por {nomeCurto(a.resp)}{r.motivoRecusa ? ` — "${r.motivoRecusa}"` : ""}. Redirecione para outra pessoa ou ajuste a data.</div>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 12 }}>
        <F label="Atividade" span><input style={inputBase} value={a.titulo || ""} onChange={(e) => onPatch(a.kind === "lan" ? { titulo: e.target.value } : { nome: e.target.value })} /></F>
        <F label="Responsável"><select style={inputBase} value={a.resp || ""} onChange={(e) => mudarResp(e.target.value)}><option value="">Selecione...</option>{users.map((u) => <option key={u.id} value={u.nome}>{rotuloResp(u, ausencias, a.s, a.e)}</option>)}</select>{ausenteEm(ausencias, a.resp, a.s, a.e) && <div style={{ fontSize: 11, color: "var(--danger)", fontWeight: 700, marginTop: 4 }}>⚠ Responsável ausente neste período</div>}</F>
        <F label="Status"><select style={inputBase} value={a.status} onChange={(e) => onPatch({ status: e.target.value })}>{STATUS_ATV.map((s) => <option key={s}>{s}</option>)}</select></F>
                <F label="Início"><input type="date" style={inputBase} value={a.kind === "lan" ? (r.pedido || "") : (r.s || "")} onChange={(e) => onPatch(a.kind === "lan" ? { pedido: e.target.value } : { s: e.target.value, e: !r.e || r.e < e.target.value ? e.target.value : r.e })} /></F>
        <F label="Fim"><input type="date" style={inputBase} value={a.kind === "lan" ? (r.prazo || "") : (r.e || "")} onChange={(e) => onPatch(a.kind === "lan" ? { prazo: e.target.value } : { e: e.target.value })} /></F>
      </div>
      <div style={secTitle}>Categoria</div>
      <CategoriaPicker value={a.cx} onChange={(v) => onPatch({ cx: v })} compact />
      <div style={secTitle}>Aprovação</div>
      <AprovacaoBloco r={r} user={user} onPatch={onPatch} />
      <div style={secTitle}>Histórico</div>
      <div style={{ maxHeight: 200, overflow: "auto" }}><HistoricoLista log={r.log} /></div>
      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        <Button variant="primary" onClick={onClose} style={{ flex: 1, justifyContent: "center" }}>Fechar</Button>
        {onDelete && <Button variant="ghost" style={{ color: "var(--danger)" }} onClick={() => { if (confirm("Excluir esta atividade?")) { onDelete(); onClose(); } }}>Excluir</Button>}
      </div>
    </Modal>
  );
}

function exportCSV(filename, headers, rows) {
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const lines = [headers.map(esc).join(";"), ...rows.map((r) => r.map(esc).join(";"))];
  const blob = new Blob(["\uFEFF" + lines.join("\r\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}
function parseCSV(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter((l) => l.trim());
  const sep = (lines[0] || "").includes(";") ? ";" : ",";
  const split = (l) => { const out = []; let cur = "", q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === sep && !q) { out.push(cur); cur = ""; } else cur += ch; } out.push(cur); return out.map((s) => s.trim()); };
  return lines.slice(1).map(split);
}

/* ===== Dados de exemplo (carregáveis pelo Administrador; o sistema inicia zerado) ===== */
const rel = (n) => addDays(TODAY, n);
const ETAPAS_PADRAO = ["Pauta", "Gravação", "Edição", "Publicação", "Divulgação em canais"];
function gerarExemplo() {
  const mes = (n) => { const d = D(TODAY); d.setMonth(d.getMonth() + n); return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}`; };
  return {
    inis: [
      { id: "IN01", nome: "Podcast Nosso Legado", natureza: "Produto", origem: "Própria", area: "", resp: ANDRE, status: "Ativo" },
      { id: "IN02", nome: "Revista Na Direção", natureza: "Produto", origem: "Própria", area: "", resp: SARAH, status: "Ativo" },
      { id: "IN03", nome: "Ação 3x", natureza: "Produto", origem: "Própria", area: "", resp: SARAH, status: "Ativo" },
      { id: "IN04", nome: "GAB 80 anos", natureza: "Projeto", origem: "Própria", area: "", resp: MICHELE, status: "Em andamento", ini: rel(-50), fim: rel(25) },
      { id: "IN05", nome: "Educa+ Finanças", natureza: "Projeto", origem: "Outra área", area: "DHO · Pessoas e Cultura", resp: ANDRE, status: "Em andamento", ini: rel(-10), fim: rel(30) },
      { id: "IN06", nome: "Atualização de grupos de e-mail", natureza: "Processo", origem: "Própria", area: "", resp: SARAH, status: "Ativo" },
    ],
    tarefas: [
      { id: "T1", ini: "IN04", nome: "Briefing criativo", resp: SARAH, s: rel(-45), e: rel(-38), status: "Concluído", cx: "M" },
      { id: "T2", ini: "IN04", nome: "Vídeo institucional", resp: ANDRE, s: rel(-20), e: rel(-2), status: "Em andamento", cx: "G", dependeDe: "T1" },
      { id: "T3", ini: "IN04", nome: "Contratar coffee break", resp: SARAH, s: rel(1), e: rel(3), status: "Não iniciado", cx: "P", nova: true, aceita: false, criadoPor: MICHELE, criadoTs: Date.now() - 3600000 },
      { id: "T4", ini: "IN04", nome: "Roteiro do evento", resp: MICHELE, s: rel(5), e: rel(12), status: "Não iniciado", cx: "G", dependeDe: "T2" },
      { id: "T5", ini: "IN05", nome: "Trilha de conteúdo", resp: ANDRE, s: rel(-5), e: rel(8), status: "Em andamento", cx: "M" },
    ],
    ciclos: [
      { id: "CI01", ini: "IN01", ciclo: "24º/2026", etapas: [
        { id: "E1", nome: "Pauta", resp: SARAH, s: rel(-6), e: rel(-4), status: "Concluído", cx: "G" },
        { id: "E2", nome: "Gravação", resp: ANDRE, s: rel(0), e: rel(0), status: "Em andamento", dependeDe: "E1", cx: "M" },
        { id: "E3", nome: "Edição", resp: ANDRE, s: rel(1), e: rel(4), status: "Não iniciado", dependeDe: "E2", precisaAprovacao: true, aprovacao: { status: "Aguardando", enviadoPor: ANDRE, enviadoEm: agora(), ts: Date.now() - 7200000, votos: {} } },
        { id: "E4", nome: "Publicação", resp: ANDRE, s: rel(6), e: rel(6), status: "Não iniciado", dependeDe: "E3" },
      ] },
      { id: "CI02", ini: "IN06", ciclo: mes(0), etapas: [
        { id: "E5", nome: "Aguardar relatório de ativos", resp: SARAH, s: rel(-2), e: rel(1), status: "Aguardando terceiro", cx: "P" },
        { id: "E6", nome: "Atualizar grupos das diretorias", resp: SARAH, s: rel(2), e: rel(3), status: "Não iniciado", dependeDe: "E5", cx: "P" },
      ] },
    ],
    chamados: [
      { id: "AT0001", token: novoToken(), area: "Vitória Motors", tipo: "Vídeo", urgencia: "Alta", prazo: "", assunto: "Gravação de vídeo — Ação 3x", descricao: "Precisamos gravar um vídeo curto com a equipe de vendas para a próxima edição da Ação 3x.", whatsapp: "(27) 99999-1111", solicitante: "Marina Alves", gestorResp: MICHELE, status: "Novo", criadoTs: Date.now() - 1800000, criadoEm: agora(), atividades: [] },
      { id: "AT0002", token: novoToken(), area: "R&S", tipo: "Comunicação", urgencia: "Média", prazo: rel(5), assunto: "Comunicado do Programa Trainee", descricao: "Divulgar internamente a abertura do Programa Trainee 2026.", whatsapp: "(27) 99999-2222", solicitante: "Laura Thayrine", gestorResp: MICHELE, status: "Em atendimento", criadoTs: Date.now() - 86400000 * 3, criadoEm: fmtY(rel(-3)), atividades: [
        { id: "ATV1", nome: "Redigir comunicado", resp: SARAH, s: rel(-2), e: rel(-1), status: "Concluído", aceita: true, cx: "P" },
        { id: "ATV2", nome: "Diagramar arte de divulgação", resp: ANDRE, s: rel(0), e: rel(2), status: "Em andamento", aceita: true, cx: "M" },
      ] },
    ],
    marcos: [
      { id: "M1", data: rel(4), titulo: "Aniversário do Diretor Comercial", tipo: "Aniversário" },
      { id: "M2", data: rel(9), ate: rel(10), titulo: "Convenção de vendas (sem gravações)", tipo: "Evento" },
    ],
    ausencias: [],
    canais: {
      podcast: { mensal: [{ mes: mes(-2), inscritos: 180, views: 13900, tempoMedio: "10min10s" }, { mes: mes(-1), inscritos: 197, views: 15200, tempoMedio: "10min34s" }], episodios: [{ ep: 204, entrevistado: "Layana Zacche", pub: rel(-30), views: 17300, viewsPlat: 900, imp: 12000 }, { ep: 205, entrevistado: "Bruno Guedes", pub: rel(-12), views: 2400, viewsPlat: 310, imp: 8500 }] },
      revista: { edicoes: [{ edicao: "Ed. 42", pub: rel(-40), acessos: 3200 }, { edicao: "Ed. 43", pub: rel(-8), acessos: 2100 }] },
      instagram: { mensal: [{ mes: mes(-2), seguidores: 77800, alcance: 25100, impressoes: 61000, engajamento: 5.1 }, { mes: mes(-1), seguidores: 78500, alcance: 27900, impressoes: 64000, engajamento: 5.4 }] },
      linkedin: { mensal: [{ mes: mes(-2), seguidores: 66100, visitantes: 16400, engajamento: 6.0 }, { mes: mes(-1), seguidores: 67500, visitantes: 17700, engajamento: 6.3 }] },
    },
  };
}
const CANAIS_VAZIO = { podcast: { mensal: [], episodios: [] }, revista: { edicoes: [] }, news: { edicoes: [] }, instagram: { mensal: [] }, linkedin: { mensal: [] } };

window.PortalUI = { novoToken, TODAY, AREAS, CATEGORIAS, catLabel, NAT_LABEL, STATUS_ATV, URGENCIAS, URG_COLOR, STATUS_CHAMADO, TIPOS_ATENDIMENTO, TIPOS_MARCO, concluido, D, fmt, fmtY, fmtPeriodo, daysBetween, addDays, mondayOf, inRange, overlaps, uid, agora, nomeCurto, monthGrid, exportCSV, parseCSV, ETAPAS_PADRAO, gerarSenha, USERS0, MICHELE, JULIANA, SARAH, ANDRE, APROVADORES, APROVADOR1, APROVADOR2, GESTORA_ATENDIMENTO, aplicarPatch, aprovStatus, enviarAprovacao, votar, todasAtividades, respAtendimento, ausenciaAtiva, TIPOS_AUSENCIA, ausenteEm, rotuloResp, confirmaResp, nextChamadoId, nextIniId, FORMATOS, linkChamado, waLink, gerarNotificacoes, gerarExemplo, CANAIS_VAZIO, Icon, Chip, NatChip, AprovChip, HistoricoLista, HistoricoModal, AprovacaoBloco, AtividadeDetalheModal, CategoriaPicker, F, inputBase, secTitle };
