function Iniciativas({ inis, setInis, ativs, users, user, onOpen, fNat, setFNat, chamados, podeAtender, onAbrirChamado }) {
  const { Card, Button, NatureBadge, StatusBadge, Input, Select } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const { Icon, exportCSV, nomeCurto, TODAY } = P;
  const [q, setQ] = React.useState("");
  const [modal, setModal] = React.useState(null);
  const [mesExp, setMesExp] = React.useState(TODAY.slice(0, 7));
  const filtered = inis.filter((i) => (fNat === "Todas" || i.natureza === fNat) && i.nome.toLowerCase().includes(q.toLowerCase()));
  const save = (rec) => { setInis((prev) => { const old = prev.find((i) => i.id === rec.id); return old ? prev.map((i) => i.id === rec.id ? P.aplicarPatch(old, rec, user.nome) : i) : [...prev, { ...rec, criadoPor: user.nome, criadoTs: Date.now(), log: [] }]; }); setModal(null); };
  const del = (i) => { if (confirm(`Excluir a iniciativa "${i.nome}"?`)) setInis((prev) => prev.filter((x) => x.id !== i.id)); };
  const TABS = [["Todas", "Todas"], ["Projeto", "Projetos"], ["Produto", "Produções"], ["Processo", "Processos"], ["Atendimento", "Atendimentos"]];
  const nextId = P.nextIniId(inis);
  const chamadosF = (chamados || []).filter((c) => (c.assunto + " " + c.area + " " + c.solicitante + " " + c.id).toLowerCase().includes(q.toLowerCase()));
  const contagem = (id) => ativs.filter((a) => a.iniId === id).length;

  const exportar = () => {
    const ini = mesExp + "-01", fim = mesExp + "-31";
    exportCSV(`iniciativas-${mesExp}.csv`, ["ID", "Iniciativa", "Natureza", "Origem", "Área demandante", "Status", "Atividades no mês", "P · Operacional", "M · Tático", "G · Estratégico", "Concluídas no mês", "Atrasadas"],
      filtered.map((i) => { const no = ativs.filter((a) => a.iniId === i.id && P.overlaps(a.s, a.e, ini, fim)); return [i.id, i.nome, P.NAT_LABEL[i.natureza], i.origem, i.area || "", i.status, no.length, no.filter((a) => a.cx === "P").length, no.filter((a) => a.cx === "M").length, no.filter((a) => a.cx === "G").length, no.filter((a) => P.concluido(a.status)).length, no.filter((a) => a.atrasada).length]; }));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontSize: 23, fontWeight: 800, color: "var(--ink)", margin: 0, fontFamily: "var(--font-sans)" }}>Iniciativas</h1>
          <div style={{ fontSize: 13.5, color: "var(--slate)", marginTop: 3 }}>Projetos têm início, meio e fim. Produções e processos se repetem em ciclos. Atendimentos são os chamados de outras áreas — e podem virar qualquer um dos três.</div>
        </div>
        <div style={{ marginBottom: 20, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <input type="month" value={mesExp} onChange={(e) => setMesExp(e.target.value)} style={{ padding: "8px 10px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 13, fontFamily: "var(--font-sans)" }} title="Mês da exportação" />
          <Button variant="ghost" icon={<Icon name="file-spreadsheet" size={15} />} onClick={exportar}>Exportar Excel</Button>
          <Button variant="primary" icon={<Icon name="plus-circle" size={16} />} onClick={() => setModal("new")}>Nova iniciativa</Button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 220px" }}><Input placeholder="Buscar iniciativa" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        {TABS.map(([n, label]) => (
          <button key={n} onClick={() => setFNat(n)} style={{ padding: "8px 14px", borderRadius: 8, border: `1px solid ${fNat === n ? "var(--blue-dark)" : "var(--line)"}`, background: fNat === n ? "var(--blue-dark)" : "#fff", color: fNat === n ? "#fff" : "var(--slate)", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-sans)" }}>{label}{n === "Atendimento" && (chamados || []).length ? ` (${chamados.length})` : ""}</button>
        ))}
      </div>
      {fNat === "Atendimento" ? (
        <Card>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: "var(--font-sans)" }}>
              <thead><tr style={{ background: "var(--canvas)", textAlign: "left", color: "var(--slate)" }}>
                {["Chamado", "Área · solicitante", "Formato", "Atividades", "Status", ""].map((h) => <th key={h} style={{ padding: "11px 12px", fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".3px" }}>{h}</th>)}
              </tr></thead>
              <tbody>
                {chamadosF.map((c) => {
                  const alvo = c.iniVinculada && inis.find((x) => x.id === c.iniVinculada);
                  const n = ativs.filter((x) => x.chamadoOrigem === c.id).length;
                  return (
                    <tr key={c.id} style={{ borderTop: "1px solid var(--line)" }}>
                      <td style={{ padding: "11px 12px" }}><div style={{ fontWeight: 700 }}>{c.assunto}</div><div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "monospace" }}>{c.id}</div></td>
                      <td style={{ padding: "11px 12px", color: "var(--slate)" }}>{c.area}<div style={{ fontSize: 11, color: "var(--muted)" }}>{c.solicitante}</div></td>
                      <td style={{ padding: "11px 12px" }}>{alvo ? <span style={{ display: "inline-flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}><NatureBadge nature={alvo.natureza} /><button onClick={() => onOpen(alvo.id)} style={{ background: "none", border: "none", padding: 0, color: "var(--blue-light)", fontWeight: 700, cursor: "pointer", fontSize: 12.5, fontFamily: "var(--font-sans)" }}>{alvo.nome} →</button></span> : <P.Chip color="var(--blue-dark)" bg="var(--soft-blue)" icon="headset">Pontual</P.Chip>}</td>
                      <td style={{ padding: "11px 12px" }}>{n}</td>
                      <td style={{ padding: "11px 12px" }}><StatusBadge status={c.status} /></td>
                      <td style={{ padding: "11px 12px", textAlign: "right" }}>{podeAtender && <button onClick={() => onAbrirChamado(c.id)} style={{ color: "var(--blue-light)", background: "none", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 12.5, fontFamily: "var(--font-sans)", whiteSpace: "nowrap" }}>Abrir chamado →</button>}</td>
                    </tr>
                  );
                })}
                {chamadosF.length === 0 && <tr><td colSpan={6} style={{ padding: 26, textAlign: "center", color: "var(--muted)" }}>Nenhum atendimento registrado.</td></tr>}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
      <Card>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: "var(--font-sans)" }}>
            <thead><tr style={{ background: "var(--canvas)", textAlign: "left", color: "var(--slate)" }}>
              {["Iniciativa", "Natureza", "Origem", "Atividades P · M · G", "Status", ""].map((h) => <th key={h} style={{ padding: "11px 12px", fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".3px" }}>{h}</th>)}
            </tr></thead>
            <tbody>
              {filtered.map((i) => (
                <tr key={i.id} style={{ borderTop: "1px solid var(--line)" }}>
                  <td style={{ padding: "11px 12px" }}><button onClick={() => onOpen(i.id)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontWeight: 700, fontSize: 13, color: "var(--ink)", fontFamily: "var(--font-sans)", textAlign: "left" }}>{i.nome}</button><div style={{ fontSize: 11, color: "var(--muted)", display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>{contagem(i.id)} atividade(s){i.chamadoOrigem && <P.Chip color="var(--blue-dark)" bg="var(--soft-blue)" icon="headset">veio do chamado {i.chamadoOrigem}</P.Chip>}</div></td>
                  <td style={{ padding: "11px 12px" }}><NatureBadge nature={i.natureza} /></td>
                  <td style={{ padding: "11px 12px" }}>{i.origem === "Outra área" ? <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--orange)", fontWeight: 600 }}><Icon name="building-2" size={13} /> Apoio · {i.area}</span> : <span style={{ color: "var(--slate)" }}>Própria</span>}</td>
                  <td style={{ padding: "11px 12px" }}>{(() => { const xs = ativs.filter((a) => a.iniId === i.id); return <span style={{ display: "inline-flex", gap: 4 }}>{["P", "M", "G"].map((k) => <span key={k} title={P.catLabel(k)} style={{ fontSize: 11, fontWeight: 700, background: "var(--canvas)", color: "var(--blue-dark)", padding: "3px 8px", borderRadius: 20 }}>{k} {xs.filter((a) => a.cx === k).length}</span>)}</span>; })()}</td>
                                    <td style={{ padding: "11px 12px" }}><StatusBadge status={i.status} /></td>
                  <td style={{ padding: "11px 12px" }}>
                    <div style={{ display: "flex", gap: 4, alignItems: "center", justifyContent: "flex-end" }}>
                      <button onClick={() => onOpen(i.id)} style={{ color: "var(--blue-light)", background: "none", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 12.5, fontFamily: "var(--font-sans)", whiteSpace: "nowrap" }}>{i.natureza === "Projeto" ? "Cronograma →" : "Ciclos →"}</button>
                      <Button variant="icon" onClick={() => setModal(i)} title="Editar"><Icon name="pencil" size={15} /></Button>
                      <Button variant="icon" onClick={() => del(i)} title="Excluir" style={{ color: "var(--danger)" }}><Icon name="trash-2" size={15} /></Button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && <tr><td colSpan={7} style={{ padding: 26, textAlign: "center", color: "var(--muted)" }}>Nenhuma iniciativa cadastrada. Clique em "Nova iniciativa".</td></tr>}
            </tbody>
          </table>
        </div>
      </Card>
      )}
      {modal && <IniciativaModal initial={modal === "new" ? null : modal} nextId={nextId} users={users} onSave={save} onClose={() => setModal(null)} />}
    </div>
  );
}

function IniciativaModal({ initial, nextId, users, onSave, onClose }) {
  const { Field, Input, Select, Modal, Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { AREAS } = window.PortalUI;
  const [f, setF] = React.useState(initial || { nome: "", natureza: "Projeto", origem: "Própria", area: "" });
  const set = (k, v) => setF({ ...f, [k]: v });
  const salvar = () => { if (!f.nome) return; onSave({ ...f, resp: "", id: initial ? initial.id : nextId, status: f.status || (f.natureza === "Projeto" ? "Não iniciado" : "Ativo") }); };
  const dica = { Projeto: "Tem começo, meio e fim. As atividades ficam num cronograma com datas.", Produto: "Se repete em ciclos/edições (ex.: podcast, revista, Ação 3x). Cada novo ciclo copia as atividades do anterior.", Processo: "Rotina fora de um projeto (ex.: atualização de grupos de e-mail, lista de aniversariantes). Também funciona em ciclos." }[f.natureza];
  return (
    <Modal title={initial ? "Editar iniciativa" : "Nova iniciativa"} sub="Só o essencial — o resto é preenchido nas atividades." onClose={onClose}>
      <Field label="Nome"><Input value={f.nome} onChange={(e) => set("nome", e.target.value)} /></Field>
      <Field label="Natureza"><Select value={f.natureza} onChange={(e) => set("natureza", e.target.value)}><option value="Projeto">Projeto</option><option value="Produto">Produção</option><option value="Processo">Processo</option></Select></Field>
      <div style={{ fontSize: 12, color: "var(--slate)", background: "var(--canvas)", borderRadius: 8, padding: "8px 11px", margin: "-4px 0 12px" }}>{dica}</div>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}><Field label="Origem"><Select value={f.origem} onChange={(e) => set("origem", e.target.value)}><option value="Própria">Própria (nasce da CI)</option><option value="Outra área">Apoio a outra área</option></Select></Field></div>
        {f.origem === "Outra área" && <div style={{ flex: 1 }}><Field label="Área de origem"><Input value={f.area || ""} maxLength={120} onChange={(e) => set("area", e.target.value)} placeholder="ex.: RH Kurumá" /></Field></div>}
      </div>
      {f.natureza === "Projeto" && (
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ flex: 1 }}><Field label="Início"><Input type="date" value={f.ini || ""} onChange={(e) => set("ini", e.target.value)} /></Field></div>
          <div style={{ flex: 1 }}><Field label="Fim previsto"><Input type="date" value={f.fim || ""} onChange={(e) => set("fim", e.target.value)} /></Field></div>
        </div>
      )}
      {initial && <Field label="Status"><Select value={f.status} onChange={(e) => set("status", e.target.value)}>{["Não iniciado", "Em andamento", "Ativo", "Pausado", "Concluído"].map((s) => <option key={s}>{s}</option>)}</Select></Field>}
      <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
        <Button variant="primary" onClick={salvar} style={{ flex: 1, justifyContent: "center" }}>Salvar</Button>
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
      </div>
    </Modal>
  );
}
window.Iniciativas = Iniciativas;
