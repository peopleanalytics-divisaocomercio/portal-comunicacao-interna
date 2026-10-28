function Usuarios({ users, setUsers }) {
  const { Card, Button, Field, Input, Select, Modal } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { Icon, uid, gerarSenha } = window.PortalUI;
  const [modal, setModal] = React.useState(null);
  const [novaSenhaGerada, setNovaSenhaGerada] = React.useState(null);
  const [erro, setErro] = React.useState("");
  const save = async (rec) => {
    const existe = users.some((u) => u.id === rec.id);
    setErro("");
    if (window.sb && existe) { const r = await window.PortalSync.saveUsuarioFields(rec.id, rec); if (r.error) { setErro(r.error); return; } setUsers((prev) => prev.map((u) => u.id === rec.id ? { ...u, ...rec } : u)); setModal(null); return; }
    if (window.sb && !existe) {
      const r = await window.PortalSync.adminCriarUsuario({ nome: rec.nome, cargo: rec.cargo, email: rec.email, login: rec.login, perfil: rec.perfil });
      if (r.error) { setErro(r.error); return; }
      const uList = await window.PortalSync.loadUsuarios(); if (uList) setUsers(uList);
      setNovaSenhaGerada({ nome: rec.nome, senha: r.senha });
      setModal(null); return;
    }
    setUsers((prev) => prev.some((u) => u.id === rec.id) ? prev.map((u) => u.id === rec.id ? rec : u) : [...prev, rec]);
    setModal(null);
  };
  const toggleAtivo = async (u) => { if (window.sb) { const r = await window.PortalSync.saveUsuarioFields(u.id, { ...u, ativo: !u.ativo }); if (r.error) return setErro(r.error); } setUsers((prev) => prev.map((x) => x.id === u.id ? { ...x, ativo: !x.ativo } : x)); };
  const resetarSenha = async (u) => {
    if (!confirm(`Gerar nova senha para ${u.nome}? A senha atual deixa de funcionar.`)) return;
    if (window.sb) { const r = await window.PortalSync.adminResetarSenha(u.id); if (r.error) return setErro(r.error); return setNovaSenhaGerada({ nome: u.nome, senha: r.senha }); }
    const nova = gerarSenha(); setUsers((prev) => prev.map((x) => x.id === u.id ? { ...x, senha: nova, precisaTrocarSenha: true } : x)); setNovaSenhaGerada({ nome: u.nome, senha: nova });
  };
  const initials = (n) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontSize: 23, fontWeight: 800, color: "var(--ink)", margin: 0, fontFamily: "var(--font-sans)" }}>Usuários</h1>
          <div style={{ fontSize: 13.5, color: "var(--slate)", marginTop: 3 }}>Visível apenas para Gestor e Administrador. Cadastro de equipe, perfis de acesso e senhas.</div>
        </div>
        <div style={{ marginBottom: 20 }}><Button variant="primary" icon={<Icon name="user-plus" size={16} />} onClick={() => setModal("new")}>Novo usuário</Button></div>
      </div>
      <Card>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: "var(--font-sans)" }}>
            <thead><tr style={{ background: "var(--canvas)", textAlign: "left", color: "var(--slate)" }}>
              {["Nome", "Cargo", "Perfil", "Login", "Senha", "Status", "Ações"].map((h) => <th key={h} style={{ padding: "11px 14px", fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".3px" }}>{h}</th>)}
            </tr></thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} style={{ borderTop: "1px solid var(--line)", opacity: u.ativo === false ? .5 : 1 }}>
                  <td style={{ padding: "11px 14px" }}><div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 32, height: 32, borderRadius: 16, background: "var(--soft-blue)", color: "var(--blue-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13 }}>{initials(u.nome)}</div><b>{u.nome}</b></div></td>
                  <td style={{ padding: "11px 14px", color: "var(--slate)" }}>{u.cargo}</td>
                  <td style={{ padding: "11px 14px" }}><span style={{ fontSize: 11, fontWeight: 700, background: "var(--soft-blue)", color: "var(--blue-dark)", padding: "3px 9px", borderRadius: 20 }}>{u.perfil}</span></td>
                  <td style={{ padding: "11px 14px", color: "var(--slate)", fontFamily: "monospace" }}>{u.login}</td>
                  <td style={{ padding: "11px 14px", color: "var(--slate)", fontFamily: "monospace" }}>{window.sb ? "••••••" : (u.senha || "••••••")}{u.precisaTrocarSenha && <div style={{ fontSize: 10, color: "var(--warning)", fontWeight: 700 }}>troca obrigatória</div>}</td>
                  <td style={{ padding: "11px 14px" }}>{u.ativo === false ? <span style={{ fontSize: 11, fontWeight: 700, color: "var(--danger)", background: "var(--danger-bg)", padding: "3px 9px", borderRadius: 6 }}>Inativo</span> : <span style={{ fontSize: 11, fontWeight: 700, color: "var(--success)", background: "var(--success-bg)", padding: "3px 9px", borderRadius: 6 }}>Ativo</span>}</td>
                  <td style={{ padding: "11px 14px" }}><div style={{ display: "flex", gap: 2 }}>
                    <Button variant="icon" onClick={() => setModal(u)} title="Editar"><Icon name="pencil" size={15} /></Button>
                    <Button variant="icon" onClick={() => resetarSenha(u)} title="Resetar senha"><Icon name="key-round" size={15} /></Button>
                    <Button variant="icon" onClick={() => toggleAtivo(u)} title={u.ativo === false ? "Ativar" : "Inativar"} style={{ color: u.ativo === false ? "var(--success)" : "var(--danger)" }}><Icon name={u.ativo === false ? "user-check" : "user-x"} size={15} /></Button>
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      {erro && <div style={{ color: "var(--danger)", fontSize: 12.5, marginTop: 10 }}>{erro}</div>}
      {modal && <UsuarioModal initial={modal === "new" ? null : modal} onSave={save} onClose={() => setModal(null)} />}
      {novaSenhaGerada && (
        <Modal title="Senha redefinida" sub={`Nova senha para ${novaSenhaGerada.nome} — o usuário deverá trocá-la no próximo login.`} onClose={() => setNovaSenhaGerada(null)} width={380}>
          <div style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 800, textAlign: "center", background: "var(--soft-blue)", padding: 16, borderRadius: 8, color: "var(--blue-dark)" }}>{novaSenhaGerada.senha}</div>
          <Button variant="primary" onClick={() => setNovaSenhaGerada(null)} style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Entendi</Button>
        </Modal>
      )}
    </div>
  );
}

function UsuarioModal({ initial, onSave, onClose }) {
  const { Field, Input, Select, Modal, Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { uid, gerarSenha } = window.PortalUI;
  const [f, setF] = React.useState(initial || { nome: "", cargo: "", email: "", login: "", perfil: "Analista", senha: gerarSenha(), ativo: true, precisaTrocarSenha: true });
  const set = (k, v) => setF({ ...f, [k]: v });
  const salvar = () => { if (!f.nome || !f.email || !f.login) return; onSave({ ...f, id: initial ? initial.id : uid("u") }); };
  return (
    <Modal title={initial ? "Editar usuário" : "Novo usuário"} sub={initial ? undefined : "Uma senha é gerada automaticamente — o usuário deverá trocá-la no primeiro acesso."} onClose={onClose} width={420}>
      <Field label="Nome"><Input value={f.nome} onChange={(e) => set("nome", e.target.value)} /></Field>
      <Field label="Cargo"><Input value={f.cargo} onChange={(e) => set("cargo", e.target.value)} placeholder="ex.: Analista de CI" /></Field>
      <Field label="E-mail"><Input value={f.email} onChange={(e) => set("email", e.target.value)} placeholder="nome@aguiabranca.com.br" /></Field>
      <Field label="Login"><Input value={f.login} onChange={(e) => set("login", e.target.value)} /></Field>
      <Field label="Perfil"><Select value={f.perfil} onChange={(e) => set("perfil", e.target.value)}><option>Administrador</option><option>Gestor</option><option>Analista</option><option>Visualizador</option></Select></Field>
      {!initial && <div style={{ fontSize: 12.5, color: "var(--slate)", marginBottom: 12 }}>{window.sb ? "A senha temporária aparece depois de salvar." : <>Senha gerada: <b style={{ fontFamily: "monospace", color: "var(--blue-dark)" }}>{f.senha}</b></>}</div>}
      <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
        <Button variant="primary" onClick={salvar} style={{ flex: 1, justifyContent: "center" }}>Salvar</Button>
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
      </div>
    </Modal>
  );
}

function AlterarSenhaModal({ user, setUsers, obrigatorio, onClose }) {
  const { Modal, Field, Input, Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const [atual, setAtual] = React.useState("");
  const [nova, setNova] = React.useState("");
  const [confirma, setConfirma] = React.useState("");
  const [erro, setErro] = React.useState("");
  const salvar = async () => {
    if (nova.length < 8 || !/[A-Za-z]/.test(nova) || !/\d/.test(nova)) return setErro("A nova senha deve ter ao menos 8 caracteres, com letras e números.");
    if (nova !== confirma) return setErro("As senhas não coincidem.");
    if (window.sb) {
      const r = await window.PortalSync.authUpdatePassword(nova);
      if (r.error) return setErro(r.error);
      setUsers((prev) => prev.map((u) => u.id === user.id ? { ...u, precisaTrocarSenha: false } : u));
      return onClose(nova);
    }
    if (atual !== user.senha) return setErro("Senha atual incorreta.");
    setUsers((prev) => prev.map((u) => u.id === user.id ? { ...u, senha: nova, precisaTrocarSenha: false } : u));
    onClose(nova);
  };
  return (
    <Modal title="Alterar senha" sub={obrigatorio ? "Sua senha foi gerada pelo gestor — defina uma nova senha para continuar." : undefined} onClose={obrigatorio ? undefined : () => onClose(null)}>
      {!window.sb && <Field label="Senha atual"><Input type="password" value={atual} onChange={(e) => setAtual(e.target.value)} /></Field>}
      <Field label="Nova senha"><Input type="password" value={nova} onChange={(e) => setNova(e.target.value)} /></Field>
      <Field label="Confirmar nova senha"><Input type="password" value={confirma} onChange={(e) => setConfirma(e.target.value)} /></Field>
      {erro && <div style={{ color: "var(--danger)", fontSize: 12.5, marginBottom: 10 }}>{erro}</div>}
      <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
        <Button variant="primary" onClick={salvar} style={{ flex: 1, justifyContent: "center" }}>Salvar nova senha</Button>
        {!obrigatorio && <Button variant="ghost" onClick={() => onClose(null)}>Cancelar</Button>}
      </div>
    </Modal>
  );
}
window.Usuarios = Usuarios;
window.AlterarSenhaModal = AlterarSenhaModal;
