/* Nova atividade — escolhe a iniciativa e o formulário se adapta (projeto → cronograma; produção/processo → ciclo). */
function Lancar({ inis, ciclos, setTarefas, setCiclos, users, user, ausencias, onDone, dataInicial }) {
  const { Field, Input, Select, Button, NatureBadge } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { uid, TODAY, CategoriaPicker, rotuloResp, ausenteEm, confirmaResp, nomeCurto } = window.PortalUI;
  const [iniId, setIniId] = React.useState("");
  const d0 = dataInicial || TODAY;
  const [f, setF] = React.useState({ nome: "", resp: user.nome, s: d0, e: d0, cx: "", cicloId: "", novoCiclo: "" });
  const [ok, setOk] = React.useState(false);
  const ini = inis.find((i) => i.id === iniId);
  const nat = ini ? ini.natureza : null;
  const ciclosIni = ciclos.filter((c) => c.ini === iniId);
  const natBg = { Projeto: "var(--nat-projeto-bg)", Produto: "var(--nat-produto-bg)", Processo: "var(--nat-processo-bg)" };
  const set = (k, v) => setF((p) => ({ ...p, [k]: v, ...(k === "s" && (!p.e || p.e < v) ? { e: v } : {}) }));
  const escolherIni = (id) => { setIniId(id); const cs = ciclos.filter((c) => c.ini === id); setF((p) => ({ ...p, cicloId: cs.length ? cs[cs.length - 1].id : "__novo" })); };
  const salvar = () => {
    if (!ini || !f.nome || !f.cx) return; if (!confirmaResp(ausencias, f.resp, f.s, f.e)) return;
    const base = { nome: f.nome, resp: f.resp, s: f.s, e: f.e || f.s, cx: f.cx, status: "Não iniciado", nova: f.resp !== user.nome, aceita: f.resp === user.nome, criadoPor: user.nome, criadoTs: Date.now() };
    if (nat === "Projeto") setTarefas((t) => [...t, { id: uid("T"), ini: iniId, ...base }]);
    else if (f.cicloId && f.cicloId !== "__novo") setCiclos((cs) => cs.map((c) => c.id === f.cicloId ? { ...c, etapas: [...c.etapas, { id: uid("E"), ...base }] } : c));
    else setCiclos((cs) => [...cs, { id: uid("CI"), ini: iniId, ciclo: f.novoCiclo || f.s.slice(0, 7), etapas: [{ id: uid("E"), ...base }] }]);
    setOk(true); setF((p) => ({ ...p, nome: "" })); setTimeout(() => setOk(false), 2400);
    if (onDone) onDone();
  };
  return (
    <div>
      <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 4 }}>Nova atividade</div>
      <div style={{ fontSize: 12.5, color: "var(--slate)", marginBottom: 16 }}>Escolha a iniciativa — o formulário se ajusta a ela. Se o responsável for outra pessoa, ela recebe para aceitar.</div>
      <Field label="Iniciativa">
        <Select value={iniId} onChange={(e) => escolherIni(e.target.value)}>
          <option value="">Selecione...</option>
          {inis.map((i) => <option key={i.id} value={i.id}>{i.nome} ({window.PortalUI.NAT_LABEL[i.natureza]})</option>)}
        </Select>
      </Field>
      {ini && (
        <div style={{ background: natBg[nat], borderRadius: 9, padding: "10px 13px", marginBottom: 16, display: "flex", alignItems: "center", gap: 9, fontSize: 12.5 }}>
          <NatureBadge nature={nat} />
          <span>{nat === "Projeto" ? "Entra no cronograma do projeto." : "Entra em um ciclo — escolha qual abaixo."}</span>
        </div>
      )}
      {ini && (
        <>
          {nat !== "Projeto" && (
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1 }}><Field label="Ciclo"><Select value={f.cicloId} onChange={(e) => set("cicloId", e.target.value)}>{ciclosIni.map((c) => <option key={c.id} value={c.id}>{c.ciclo}</option>)}<option value="__novo">+ Novo ciclo</option></Select></Field></div>
              {f.cicloId === "__novo" && <div style={{ flex: 1 }}><Field label="Nome do novo ciclo"><Input value={f.novoCiclo} onChange={(e) => set("novoCiclo", e.target.value)} placeholder="ex.: 25º/2026" /></Field></div>}
            </div>
          )}
          <Field label="Atividade"><Input value={f.nome} onChange={(e) => set("nome", e.target.value)} placeholder="ex.: Contratar coffee break" /></Field>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}><Field label="Responsável"><Select value={f.resp} onChange={(e) => set("resp", e.target.value)}>{users.map((u) => <option key={u.id} value={u.nome}>{rotuloResp(u, ausencias, f.s, f.e)}</option>)}</Select></Field></div>
          </div>
          {ausenteEm(ausencias, f.resp, f.s, f.e) && <div style={{ background: "var(--danger-bg)", color: "var(--danger)", borderRadius: 8, padding: "8px 11px", fontSize: 12.5, fontWeight: 600, marginBottom: 12 }}>⚠ {nomeCurto(f.resp)} estará ausente nessas datas. Escolha outra pessoa ou ajuste o período.</div>}
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}><Field label="Início"><Input type="date" value={f.s} onChange={(e) => set("s", e.target.value)} /></Field></div>
            <div style={{ flex: 1 }}><Field label="Fim"><Input type="date" value={f.e} min={f.s} onChange={(e) => set("e", e.target.value)} /></Field></div>
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate)", marginBottom: 6 }}>Categoria da atividade</div>
          <div style={{ marginBottom: 16 }}><CategoriaPicker value={f.cx} onChange={(v) => set("cx", v)} /></div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Button variant="primary" onClick={salvar} style={{ opacity: f.nome && f.cx ? 1 : .5 }}>Lançar atividade</Button>
            {ok && <span style={{ color: "var(--success)", fontWeight: 700, fontSize: 13 }}>✓ Lançada</span>}
          </div>
        </>
      )}
    </div>
  );
}
window.Lancar = Lancar;
