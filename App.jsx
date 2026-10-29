const LS_KEY = "portalci-dados-v2";
const VAZIO = { inis: [], tarefas: [], lanc: [], ciclos: [], chamados: [], marcos: [], ausencias: [], canais: window.PortalUI.CANAIS_VAZIO };
// Com Supabase os dados ficam só no banco (nada sensível fica salvo no navegador).
if (window.sb) { try { localStorage.removeItem(LS_KEY); } catch (e) {} }
function loadLocal() { if (window.sb) return VAZIO; try { const d = JSON.parse(localStorage.getItem(LS_KEY)); return d ? { ...VAZIO, ...d } : VAZIO; } catch (e) { return VAZIO; } }

function SinoNotificacoes({ notifs, lidas, onOpen, onMarkAll }) {
  const { Icon } = window.PortalUI;
  const [open, setOpen] = React.useState(false);
  const naoLidas = notifs.filter((n) => !lidas.includes(n.id));
  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)} title="Notificações" style={{ position: "relative", width: 36, height: 36, borderRadius: 8, border: "none", background: open ? "rgba(255,255,255,.14)" : "transparent", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name="bell" size={18} />
        {naoLidas.length > 0 && <span style={{ position: "absolute", top: 3, right: 2, minWidth: 17, height: 17, borderRadius: 9, background: "var(--orange)", color: "#fff", fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px", boxSizing: "border-box", border: "2px solid var(--surface-header)" }}>{naoLidas.length > 9 ? "9+" : naoLidas.length}</span>}
      </button>
      {open && (
        <div style={{ position: "absolute", right: 0, top: 44, width: 360, maxWidth: "90vw", background: "#fff", color: "var(--ink)", borderRadius: 12, boxShadow: "var(--shadow-modal)", zIndex: 80, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", padding: "12px 14px", borderBottom: "1px solid var(--line)" }}>
            <b style={{ fontSize: 14 }}>Notificações</b>
            {naoLidas.length > 0 && <button onClick={onMarkAll} style={{ marginLeft: "auto", background: "none", border: "none", color: "var(--blue-light)", fontWeight: 700, fontSize: 11.5, cursor: "pointer", fontFamily: "var(--font-sans)" }}>Marcar todas como lidas</button>}
          </div>
          <div style={{ maxHeight: 420, overflow: "auto" }}>
            {notifs.length === 0 && <div style={{ padding: 22, textAlign: "center", color: "var(--muted)", fontSize: 12.5 }}>Tudo em dia por aqui.</div>}
            {notifs.slice(0, 40).map((n) => {
              const unread = !lidas.includes(n.id);
              return (
                <button key={n.id} onClick={() => { setOpen(false); onOpen(n); }} style={{ display: "flex", gap: 10, width: "100%", textAlign: "left", padding: "11px 14px", border: "none", borderBottom: "1px solid var(--canvas)", background: unread ? "var(--soft-blue)" : "#fff", cursor: "pointer", fontFamily: "var(--font-sans)", color: "var(--ink)" }}>
                  <span style={{ color: n.destaque ? "var(--orange)" : "var(--blue-light)", paddingTop: 1 }}><Icon name={n.icon} size={16} /></span>
                  <span style={{ flex: 1, minWidth: 0 }}><span style={{ display: "block", fontSize: 12.5, fontWeight: unread ? 800 : 600 }}>{n.titulo}</span><span style={{ display: "block", fontSize: 12, color: "var(--slate)", marginTop: 2 }}>{n.texto}</span></span>
                  {unread && <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--orange)", marginTop: 5, flexShrink: 0 }} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const { TopNav } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const { Icon } = P;
  const init = React.useMemo(loadLocal, []);
  const [user, setUser] = React.useState(null);
  const [view, setView] = React.useState("painel");
  const [inis, setInis] = React.useState(init.inis);
  const [tarefas, setTarefas] = React.useState(init.tarefas);
  const [lanc, setLanc] = React.useState(init.lanc);
  const [ciclos, setCiclos] = React.useState(init.ciclos);
  const [chamados, setChamados] = React.useState(init.chamados);
  const [marcos, setMarcos] = React.useState(init.marcos);
  const [ausencias, setAusencias] = React.useState(init.ausencias);
  const [canais, setCanais] = React.useState(init.canais);
  const [users, setUsers] = React.useState(window.sb ? [] : P.USERS0);
  const [detalheKey, setDetalheKey] = React.useState(null);
  const [chamadoFoco, setChamadoFoco] = React.useState(null);
  const [selIni, setSelIni] = React.useState(null);
  const [prevView, setPrevView] = React.useState("iniciativas");
  const [fNatIni, setFNatIni] = React.useState("Todas");
  const [trocarSenha, setTrocarSenha] = React.useState(false);
  const [minhaSenhaModal, setMinhaSenhaModal] = React.useState(false);
  const [lidas, setLidas] = React.useState([]);
  const [ausModal, setAusModal] = React.useState(false);

  const applyAll = (d) => { setInis(d.inis); setTarefas(d.tarefas); setLanc(d.lanc); setCiclos(d.ciclos); setChamados(d.chamados); setMarcos(d.marcos || []); setAusencias(d.ausencias || []); setCanais(d.canais || P.CANAIS_VAZIO); };

  React.useEffect(() => { if (!window.sb) localStorage.setItem(LS_KEY, JSON.stringify({ inis, tarefas, lanc, ciclos, chamados, marcos, ausencias, canais })); }, [inis, tarefas, lanc, ciclos, chamados, marcos, ausencias, canais]);
  React.useEffect(() => {
    const h = (e) => { if (e.key === LS_KEY && e.newValue && !window.sb) applyAll({ ...VAZIO, ...JSON.parse(e.newValue) }); };
    window.addEventListener("storage", h); return () => window.removeEventListener("storage", h);
  }, []);

  /* ===== Supabase (quando configurado) ===== */
  const synced = React.useRef(false);
  const applyingRemote = React.useRef(false);
  const prevRef = React.useRef({ ...init });
  const reloadFromRemote = React.useCallback(async () => {
    const d = await window.PortalSync.loadAll();
    if (!d) return false;
    applyingRemote.current = true;
    const full = { ...VAZIO, ...d };
    applyAll(full);
    prevRef.current = { ...full };
    setTimeout(() => { applyingRemote.current = false; }, 0);
    return true;
  }, []);
  const sair = () => { synced.current = false; applyingRemote.current = true; applyAll(VAZIO); prevRef.current = { ...VAZIO }; setUsers(window.sb ? [] : P.USERS0); setUser(null); setView("painel"); setTimeout(() => { applyingRemote.current = false; }, 0); };
  const [sync, setSync] = React.useState({ state: window.sb ? "idle" : "local" });
  React.useEffect(() => { const h = (e) => setSync((s) => (e.detail.state === "saved" && s.state === "error" ? s : e.detail)); window.addEventListener("portal-sync", h); return () => window.removeEventListener("portal-sync", h); }, []);
  React.useEffect(() => { if (window.sb) window.PortalSync.authRestore().then((u) => { if (u) setUser((cur) => cur || u); }); return window.PortalSync.onSignedOut(sair); }, []);
  const uid0 = user && user.id;
  React.useEffect(() => {
    if (!window.sb || !uid0) return;
    synced.current = false;
    reloadFromRemote().then((ok) => { if (ok) { synced.current = true; setSync({ state: "saved" }); } });
    const reloadUsers = async () => { const u = await window.PortalSync.loadUsuarios(); if (u && u.length) setUsers(u); };
    reloadUsers();
    const off = window.PortalSync.subscribeAll(() => { reloadFromRemote(); reloadUsers(); });
    return () => { synced.current = false; off(); };
  }, [uid0]);
  const useRemoteSave = (key, val, fn) => React.useEffect(() => { if (synced.current && !applyingRemote.current) { fn(prevRef.current[key], val); prevRef.current[key] = val; } }, [val]);
  useRemoteSave("inis", inis, (a, b) => window.PortalSync.saveIniciativas(a, b));
  useRemoteSave("tarefas", tarefas, (a, b) => window.PortalSync.saveTarefas(a, b));
  useRemoteSave("lanc", lanc, (a, b) => window.PortalSync.saveLanc(a, b));
  useRemoteSave("ciclos", ciclos, (a, b) => window.PortalSync.saveCiclos(a, b));
  useRemoteSave("chamados", chamados, (a, b) => window.PortalSync.saveChamados(a, b));
  useRemoteSave("marcos", marcos, (a, b) => window.PortalSync.saveConfig("marcos", b));
  useRemoteSave("ausencias", ausencias, (a, b) => window.PortalSync.saveConfig("ausencias", b));
  useRemoteSave("canais", canais, (a, b) => window.PortalSync.saveConfig("canais", b));

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  React.useEffect(() => { if (user && user.precisaTrocarSenha) setTrocarSenha(true); if (user) { try { setLidas(JSON.parse(localStorage.getItem("portalci-lidas-" + user.login)) || []); } catch (e) { setLidas([]); } } }, [user]);

  const ativs = React.useMemo(() => P.todasAtividades({ inis, tarefas, ciclos, chamados, lanc }), [inis, tarefas, ciclos, chamados, lanc]);

  React.useEffect(() => {
    const upd = {};
    chamados.forEach((c) => { if (!c.iniVinculada) return; const snap = ativs.filter((x) => x.raw.chamadoOrigem === c.id).map((x) => ({ nome: x.titulo, status: x.statusView, s: x.s, e: x.e })); if (JSON.stringify(snap) !== JSON.stringify(c.acompanhamento || [])) upd[c.id] = snap; });
    if (Object.keys(upd).length) setChamados((p) => p.map((c) => (upd[c.id] ? { ...c, acompanhamento: upd[c.id] } : c)));
  }, [ativs]);

  if (!user) return <window.Login onLogin={setUser} />;

  const isGestao = user.perfil === "Gestor" || user.perfil === "Administrador";
  const isAdmin = user.perfil === "Administrador";
  const respAtual = P.respAtendimento(ausencias, P.TODAY);
  const podeAtender = isGestao || user.nome === respAtual;
  const iniById = (id) => inis.find((i) => i.id === id) || {};

  const patchAtiv = (key, patch) => {
    const [kind, a, b] = key.split(":");
    const ap = (o) => P.aplicarPatch(o, patch, user.nome);
    if (kind === "tar") setTarefas((p) => p.map((t) => (t.id === a ? ap(t) : t)));
    else if (kind === "eta") setCiclos((p) => p.map((c) => (c.id === a ? { ...c, etapas: c.etapas.map((e) => (e.id === b ? ap(e) : e)) } : c)));
    else if (kind === "cha") setChamados((p) => p.map((c) => (c.id === a ? { ...c, atividades: c.atividades.map((x) => (x.id === b ? ap(x) : x)) } : c)));
    else if (kind === "lan") setLanc((p) => p.map((l) => (l.id === a ? ap(l) : l)));
  };
  const deleteAtiv = (key) => {
    const [kind, a, b] = key.split(":");
    if (kind === "tar") setTarefas((p) => p.filter((t) => t.id !== a));
    else if (kind === "eta") setCiclos((p) => p.map((c) => (c.id === a ? { ...c, etapas: c.etapas.filter((e) => e.id !== b) } : c)));
    else if (kind === "cha") setChamados((p) => p.map((c) => (c.id === a ? { ...c, atividades: c.atividades.filter((x) => x.id !== b) } : c)));
    else if (kind === "lan") setLanc((p) => p.filter((l) => l.id !== a));
  };
  const detalhe = detalheKey && ativs.find((x) => x.key === detalheKey);

  const notifs = P.gerarNotificacoes({ ativs, chamados, inis, user, podeAtender, ausencias });
  const naoLidasN = notifs.filter((n) => !lidas.includes(n.id)).length;
  document.title = (naoLidasN ? `(${naoLidasN}) ` : "") + "Portal CI";
  const salvarLidas = (l) => { setLidas(l); localStorage.setItem("portalci-lidas-" + user.login, JSON.stringify(l.slice(-400))); };
  const abrirNotif = (n) => { salvarLidas([...new Set([...lidas, n.id])]); setView(n.view); if (n.key) setDetalheKey(n.key); if (n.chamadoId) setChamadoFoco(n.chamadoId); };

  const carregarExemplo = () => { const ex = P.gerarExemplo(); applyAll({ ...VAZIO, ...ex }); };
  const zerarDados = () => { if (confirm("Apagar todas as iniciativas, atividades, chamados, marcos e dados de canais? Os usuários continuam cadastrados.")) applyAll(VAZIO); };

  const onOpen = (id) => { setPrevView(view); setSelIni(id); setView("cronograma"); };
  const navIcon = (k, name) => <Icon name={name} size={16} color={view === k ? "#fff" : "#D7E3F2"} />;
  const NAV = [
    { key: "painel", label: "Visão Geral", icon: navIcon("painel", "layout-dashboard") },
    { key: "iniciativas", label: "Iniciativas", icon: navIcon("iniciativas", "folder-kanban") },
    { key: "atividades", label: "Atividades", icon: navIcon("atividades", "calendar-days") },
    { key: "atendimentos", label: "Atendimentos", icon: navIcon("atendimentos", "headset") },
    { key: "canais", label: "Canais", icon: navIcon("canais", "radio") },
    ...(isGestao ? [{ key: "usuarios", label: "Usuários", icon: navIcon("usuarios", "users") }] : []),
    { key: "report", label: "Report", icon: navIcon("report", "file-text") },
  ];

  const reportLanc = ativs.filter((a) => a.kind === "eta" || a.kind === "lan").map((a) => ({ id: a.id, ini: a.iniId, titulo: a.titulo, resp: a.resp, cx: a.cx, vol: 1, dataPub: a.e, prazo: a.e, entrega: P.concluido(a.status) ? a.e : "", status: a.statusView }));
  const reportTarefas = ativs.filter((a) => a.kind === "tar").map((a) => ({ ...a.raw, cx: a.cx, status: a.statusView, nivel: 1 }));
  const ultimo = (arr, k) => { const v = (arr || []).slice().sort((a, b) => (a.mes || "").localeCompare(b.mes || "")).pop(); return v ? Number(v[k]) || 0 : 0; };
  const canaisResumo = { podcast: { seguidores: ultimo(canais.podcast.mensal, "inscritos") }, instagram: { seguidores: ultimo(canais.instagram.mensal, "seguidores") }, linkedin: { seguidores: ultimo(canais.linkedin.mensal, "seguidores") } };
  const usersAtivos = users.filter((u) => u.ativo !== false);
  const common = { inis, ativs, users: usersAtivos, user, iniById, abrirAtiv: setDetalheKey, patchAtiv, ausencias, setAusencias, abrirAusencias: () => setAusModal(true) };

  return (
    <div style={{ minHeight: "100vh", fontFamily: "var(--font-sans)", background: "var(--canvas)", color: "var(--ink)" }}>
      <div className="no-print"><TopNav items={NAV} active={view} onChange={setView} userName={user.nome} userRole={user.cargo} onLogout={() => { window.PortalSync.authSignOut(); sair(); setSync({ state: window.sb ? "idle" : "local" }); }} actions={<><button onClick={() => setAusModal(true)} title="Minhas férias e folgas" style={{ width: 36, height: 36, borderRadius: 8, border: "none", background: P.ausenteEm(ausencias, user.nome, P.TODAY) ? "var(--orange)" : "transparent", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="calendar-off" size={18} /></button><SinoNotificacoes notifs={notifs} lidas={lidas} onOpen={abrirNotif} onMarkAll={() => salvarLidas([...new Set([...lidas, ...notifs.map((n) => n.id)])])} /></>} /></div>
      {sync.state !== "local" && <div className="no-print" title={sync.msg || ""} onClick={() => sync.state === "error" && setSync({ state: "saved" })} style={{ position: "fixed", right: 16, bottom: 16, zIndex: 50, display: "flex", alignItems: "center", gap: 7, padding: "7px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600, boxShadow: "0 2px 10px rgba(0,0,0,.12)", cursor: sync.state === "error" ? "pointer" : "default", maxWidth: 420, background: sync.state === "error" ? "var(--danger-bg)" : "var(--surface, #fff)", color: sync.state === "error" ? "var(--danger)" : "var(--slate)" }}><span style={{ width: 8, height: 8, borderRadius: 99, flexShrink: 0, background: sync.state === "error" ? "var(--danger)" : sync.state === "saving" ? "var(--orange)" : "#2E9E5B" }}></span>{sync.state === "error" ? "Erro ao salvar — " + (sync.msg || "") : sync.state === "saving" ? "Salvando…" : sync.state === "idle" ? "Conectando…" : "Sincronizado"}</div>}
      <main style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: 26 }}>
        {view === "painel" && <window.Painel {...common} chamados={chamados} podeAtender={podeAtender} respAtual={respAtual} isAdmin={isAdmin} vazio={!inis.length && !chamados.length} onCarregarExemplo={carregarExemplo} onNavigate={(v, extra) => { if (extra && extra.chamadoId) setChamadoFoco(extra.chamadoId); setView(v); }} />}
        {view === "iniciativas" && <window.Iniciativas {...common} setInis={setInis} onOpen={onOpen} fNat={fNatIni} setFNat={setFNatIni} chamados={chamados} podeAtender={podeAtender} onAbrirChamado={(id) => { setChamadoFoco(id); setView("atendimentos"); }} />}
        {view === "atividades" && <window.Atividades {...common} tarefas={tarefas} setTarefas={setTarefas} ciclos={ciclos} setCiclos={setCiclos} marcos={marcos} setMarcos={setMarcos} />}
        {view === "cronograma" && <window.Cronograma {...common} selIni={selIni || (inis[0] || {}).id} setSelIni={setSelIni} tarefas={tarefas} setTarefas={setTarefas} ciclos={ciclos} setCiclos={setCiclos} onBack={() => setView(prevView)} />}
        {view === "atendimentos" && <window.Atendimentos {...common} chamados={chamados} setChamados={setChamados} setInis={setInis} setTarefas={setTarefas} ciclos={ciclos} setCiclos={setCiclos} onAbrirIni={onOpen} respAtual={respAtual} isGestao={isGestao} isAdmin={isAdmin} foco={chamadoFoco} setFoco={setChamadoFoco} />}
        {view === "canais" && <window.Canais canais={canais} setCanais={setCanais} />}
        {view === "usuarios" && <window.Usuarios users={users} setUsers={setUsers} />}
        {view === "usuarios" && isAdmin && (
          <div style={{ marginTop: 18, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", fontSize: 12.5, color: "var(--slate)" }}>
            <b style={{ color: "var(--ink)" }}>Dados do sistema (Administrador):</b>
            <button onClick={carregarExemplo} style={{ padding: "7px 12px", borderRadius: 8, border: "1px solid var(--line)", background: "#fff", cursor: "pointer", fontFamily: "var(--font-sans)", fontWeight: 700, color: "var(--blue-dark)" }}>Carregar dados de exemplo</button>
            <button onClick={zerarDados} style={{ padding: "7px 12px", borderRadius: 8, border: "1px solid var(--danger)", background: "#fff", cursor: "pointer", fontFamily: "var(--font-sans)", fontWeight: 700, color: "var(--danger)" }}>Zerar dados</button>
          </div>
        )}
        {view === "report" && <window.StatusReport inis={inis} lanc={reportLanc} tarefas={reportTarefas} iniById={iniById} chamados={chamados} canais={canaisResumo} />}
      </main>
      <footer className="no-print" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "20px 26px 30px", textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate)" }}>Portal Gestão de Pessoas e Cultura | Comunicação Interna</div>
        <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3 }}>Desenvolvido pela área de People Analytics · Pessoas e Cultura</div>
        <button onClick={() => setMinhaSenhaModal(true)} style={{ marginTop: 8, background: "none", border: "none", color: "var(--blue-light)", fontWeight: 700, fontSize: 11.5, cursor: "pointer", fontFamily: "var(--font-sans)" }}>Alterar minha senha</button>
      </footer>
      {ausModal && <window.AusenciasModal ausencias={ausencias} setAusencias={setAusencias} users={usersAtivos} user={user} podeTodos={isGestao} onClose={() => setAusModal(false)} />}
      {detalhe && <P.AtividadeDetalheModal a={detalhe} users={usersAtivos} user={user} ausencias={ausencias} onPatch={(p) => patchAtiv(detalhe.key, p)} onDelete={() => deleteAtiv(detalhe.key)} onClose={() => setDetalheKey(null)} />}
      {trocarSenha && <window.AlterarSenhaModal user={user} setUsers={setUsers} obrigatorio onClose={(novaSenha) => { if (novaSenha) { setUser({ ...user, senha: novaSenha, precisaTrocarSenha: false }); setTrocarSenha(false); } }} />}
      {minhaSenhaModal && <window.AlterarSenhaModal user={user} setUsers={setUsers} onClose={(novaSenha) => { if (novaSenha) setUser({ ...user, senha: novaSenha, precisaTrocarSenha: false }); setMinhaSenhaModal(false); }} />}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
