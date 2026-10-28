function Login({ onLogin }) {
  const { Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { Icon, USERS0 } = window.PortalUI;
  const [login, setLogin] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [erro, setErro] = React.useState("");
  const [carregando, setCarregando] = React.useState(false);
  const entrar = async () => {
    setErro("");
    if (!login.trim() || !senha) return setErro("Informe login e senha.");
    if (window.sb) {
      setCarregando(true);
      let r = {};
      try { r = await window.PortalSync.authSignIn(login, senha); } catch (e) { r = { error: "Sem conexão com o servidor. Tente novamente." }; }
      setCarregando(false);
      if (!r.error && r.user) return onLogin(r.user);
      return setErro(r.error || "Login ou senha inválidos.");
    }
    const local = USERS0.find((x) => (x.login.toLowerCase() === login.trim().toLowerCase() || x.email.toLowerCase() === login.trim().toLowerCase()) && x.senha === senha);
    if (local) onLogin(local); else setErro("Login ou senha inválidos.");
  };
  const labelStyle = { display: "block", fontSize: 11, fontWeight: 700, color: "var(--slate)", marginBottom: 6, textTransform: "uppercase", letterSpacing: ".4px" };
  const inputStyle = { width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 13.5, fontFamily: "var(--font-sans)", color: "var(--ink)", background: "var(--soft-blue)" };
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, fontFamily: "var(--font-sans)", background: "var(--blue-dark)", padding: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <img src="./assets/logo-branca.png" style={{ height: 56 }} alt="Grupo Águia Branca — Divisão Comércio" />
        <div style={{ fontSize: 13, color: "#C7D8EA", fontWeight: 600, textAlign: "center" }}>Portal Gestão Pessoas e Cultura · Comunicação Interna</div>
      </div>
      <div style={{ width: 400, maxWidth: "92%", background: "#fff", borderRadius: 16, padding: 30, boxShadow: "var(--shadow-modal)" }}>
        <div style={{ fontWeight: 800, fontSize: 19, color: "var(--blue-dark)", marginBottom: 4, textAlign: "center" }}>Entrar</div>
        <div style={{ fontSize: 12.5, color: "var(--slate)", marginBottom: 22, textAlign: "center" }}>Acesse o painel de gestão da Comunicação Interna.</div>
        <label style={{ display: "block", marginBottom: 14 }}>
          <span style={labelStyle}>Login ou e-mail</span>
          <input style={inputStyle} value={login} onChange={(e) => setLogin(e.target.value)} />
        </label>
        <label style={{ display: "block", marginBottom: 18 }}>
          <span style={labelStyle}>Senha</span>
          <input type="password" style={inputStyle} value={senha} onChange={(e) => setSenha(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !carregando && entrar()} />
        </label>
        {erro && <div style={{ color: "var(--danger)", fontSize: 12.5, marginBottom: 12 }}>{erro}</div>}
        <Button variant="primary" icon={<Icon name="log-in" size={15} />} onClick={entrar} disabled={carregando} style={{ width: "100%", justifyContent: "center", padding: 11, fontSize: 14, opacity: carregando ? .7 : 1 }}>{carregando ? "Entrando…" : "Entrar"}</Button>
        <div style={{ marginTop: 16, fontSize: 11.5, color: "var(--ink)", background: "var(--soft-blue)", padding: 10, borderRadius: 8, lineHeight: 1.5 }}>
          Colaborador de RH ou gestor(a): use o login e senha recebidos. Dúvidas, fale com <b>Pessoas &amp; Cultura</b>.
        </div>
      </div>
      <div style={{ fontSize: 11, color: "#9FB8D6" }}>Acesso restrito à gestão</div>
    </div>
  );
}
window.Login = Login;
