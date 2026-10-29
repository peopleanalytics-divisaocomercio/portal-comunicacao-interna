function Gantt({ itens }) {
  const { fmt, addDays, daysBetween, inRange, TODAY } = window.PortalUI;
  const ts = itens.filter((t) => t.s);
  if (!ts.length) return <div style={{ color: "var(--muted)", fontSize: 13, padding: 20 }}>Sem atividades com data.</div>;
  const min = ts.reduce((m, t) => (t.s < m ? t.s : m), ts[0].s);
  const max = ts.reduce((m, t) => ((t.e || t.s) > m ? t.e || t.s : m), ts[0].e || ts[0].s);
  const total = Math.max(daysBetween(min, max), 1);
  const ticks = []; for (let d = 0; d <= total; d += 7) ticks.push(d);
  const pos = (s) => (daysBetween(min, s) / total) * 100;
  const wid = (s, e) => (Math.max(daysBetween(s, e) + 1, 1) / (total + 1)) * 100;
  const todayPos = inRange(TODAY, min, max) ? pos(TODAY) : null;
  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ minWidth: 620, position: "relative", fontFamily: "var(--font-sans)" }}>
        <div style={{ position: "relative", height: 22, marginLeft: 230, borderBottom: "1px solid var(--line)" }}>
          {ticks.map((d, i) => <div key={i} style={{ position: "absolute", left: `${(d / total) * 100}%`, fontSize: 10, color: "var(--muted)", transform: "translateX(-50%)" }}>{fmt(addDays(min, d))}</div>)}
        </div>
        <div style={{ position: "relative" }}>
          {todayPos !== null && <div style={{ position: "absolute", left: 230, right: 0, top: 0, bottom: 0, pointerEvents: "none", zIndex: 2 }}><div style={{ position: "absolute", left: `${todayPos}%`, top: 0, bottom: 0, width: 2, background: "var(--orange)", opacity: .6 }} /></div>}
          {ts.map((t) => (
            <div key={t.key} style={{ display: "flex", alignItems: "center", height: 30, borderBottom: "1px solid var(--canvas)" }}>
              <div style={{ width: 230, fontSize: 12, color: "var(--slate)", paddingLeft: 8, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.wbs}. {t.titulo}</div>
              <div style={{ position: "relative", flex: 1, height: "100%" }}>
                <div style={{ position: "absolute", top: 8, left: `${pos(t.s)}%`, width: `${wid(t.s, t.e || t.s)}%`, height: 13, background: t.atrasada ? "var(--danger)" : "var(--nat-projeto)", borderRadius: 4, opacity: t.status === "Não iniciado" ? .4 : 1 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const cellStyle = { border: "1px solid transparent", background: "transparent", padding: "6px 8px", fontSize: 13, fontFamily: "var(--font-sans)", color: "var(--ink)", width: "100%", boxSizing: "border-box", borderRadius: 6 };
const focusCell = (e) => { e.target.style.border = "1px solid var(--blue-light)"; e.target.style.background = "#fff"; };
const blurCell = (e) => { e.target.style.border = "1px solid transparent"; e.target.style.background = "transparent"; };
const respPatch = (nome, me) => (nome && nome !== me ? { resp: nome, nova: true, aceita: false, recusada: false, criadoPor: me, criadoTs: Date.now() } : { resp: nome, nova: false, aceita: true, recusada: false });

function RespSelect({ value, users, onChange, style, ausencias, s, e }) {
  const P = window.PortalUI; const aus = P.ausenteEm(ausencias, value, s, e);
  return <div><select style={{ ...cellStyle, ...style, color: aus ? "var(--danger)" : "var(--ink)" }} value={value || ""} onFocus={focusCell} onBlur={blurCell} onChange={(ev) => P.confirmaResp(ausencias, ev.target.value, s, e) && onChange(ev)}><option value="">Selecione...</option>{users.map((u) => <option key={u.id} value={u.nome}>{P.rotuloResp(u, ausencias, s, e)}</option>)}</select>{aus && <div style={{ fontSize: 9.5, color: "var(--danger)", fontWeight: 700, paddingLeft: 8 }}>{(aus.tipo || "ausente").toLowerCase()} até {P.fmt(aus.ate)}</div>}</div>;
}
function StatusSelect({ value, onChange, style }) {
  return <select style={{ ...cellStyle, ...style }} value={value} onFocus={focusCell} onBlur={blurCell} onChange={onChange}>{window.PortalUI.STATUS_ATV.map((s) => <option key={s}>{s}</option>)}</select>;
}
function CategoriaSelect({ value, onChange, style }) {
  const cs = window.PortalUI.CATEGORIAS; const cur = cs.find((c) => c.v === value);
  return <select title={cur ? cur.def : ""} style={{ ...cellStyle, ...style }} value={value || "P"} onFocus={focusCell} onBlur={blurCell} onChange={onChange}>{cs.map((c) => <option key={c.v} value={c.v} title={c.def}>{c.v} · {c.nome}</option>)}</select>;
}
function DependenciaCell({ value, options, aguardando, onChange }) {
  return (
    <div>
      <select style={{ ...cellStyle, width: 100 }} value={value || ""} onFocus={focusCell} onBlur={blurCell} onChange={onChange}>
        <option value="">—</option>
        {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
      </select>
      {value && <div style={{ fontSize: 9.5, color: aguardando ? "var(--warning)" : "var(--success)", fontWeight: 700, marginTop: 2, paddingLeft: 8 }}>{aguardando ? "Aguardando" : "Liberada"}</div>}
    </div>
  );
}
function RowActions({ a, abrirAtiv, onDelete }) {
  const { Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { Icon } = window.PortalUI;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "flex-end" }}>
      <Button variant="icon" onClick={() => abrirAtiv(a.key)} title="Abrir detalhe, aprovação e histórico"><Icon name="panel-right-open" size={15} /></Button>
      <Button variant="icon" onClick={onDelete} style={{ color: "var(--danger)" }} title="Excluir"><Icon name="trash-2" size={14} /></Button>
    </div>
  );
}

function CicloCard({ ciclo, ativsCiclo, users, user, ausencias, patchAtiv, abrirAtiv, setCiclos, onDuplicar }) {
  const { Card, ProgressBar, Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { Icon, AprovChip, uid, TODAY, concluido } = window.PortalUI;
  const lista = ativsCiclo.slice().sort((a, b) => String(a.raw.s || a.s || "9999").localeCompare(String(b.raw.s || b.s || "9999")) || String(a.raw.e || "").localeCompare(String(b.raw.e || "")) || (a.raw.criadoTs || 0) - (b.raw.criadoTs || 0));
  const conc = ativsCiclo.filter((e) => concluido(e.status)).length;
  const pct = ativsCiclo.length ? conc / ativsCiclo.length : 0;
  const pa = (a, p) => patchAtiv(a.key, p);
  const addEtapa = () => setCiclos((prev) => prev.map((c) => c.id === ciclo.id ? { ...c, etapas: [...c.etapas, { id: uid("E"), nome: "Nova atividade", resp: user.nome, s: TODAY, e: TODAY, status: "Não iniciado", cx: "P", aceita: true, criadoPor: user.nome, criadoTs: Date.now() }] } : c));
  const delEtapa = (id) => setCiclos((prev) => prev.map((c) => c.id === ciclo.id ? { ...c, etapas: c.etapas.filter((e) => e.id !== id) } : c));
  const delCiclo = () => confirm(`Excluir o ciclo "${ciclo.ciclo}" e suas atividades?`) && setCiclos((prev) => prev.filter((c) => c.id !== ciclo.id));
  const th = { fontSize: 10.5, fontWeight: 700, color: "var(--slate)", textTransform: "uppercase", letterSpacing: ".3px", padding: "6px 8px", textAlign: "left" };
  return (
    <Card style={{ padding: 18, marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
        <input style={{ ...cellStyle, fontWeight: 800, fontSize: 15, width: 220 }} value={ciclo.ciclo} onFocus={focusCell} onBlur={blurCell} onChange={(e) => setCiclos((prev) => prev.map((c) => c.id === ciclo.id ? { ...c, ciclo: e.target.value } : c))} />
        <span style={{ fontSize: 12, color: "var(--slate)" }}>{conc}/{ativsCiclo.length} concluídas</span>
        <div style={{ width: 140 }}><ProgressBar pct={pct} color="var(--nat-produto)" width={"100%"} /></div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          <Button variant="ghost" icon={<Icon name="plus" size={14} />} style={{ padding: "6px 11px", fontSize: 12 }} onClick={addEtapa}>Atividade</Button>
          <Button variant="ghost" icon={<Icon name="copy" size={14} />} style={{ padding: "6px 11px", fontSize: 12 }} onClick={() => onDuplicar(ciclo)}>Duplicar ciclo</Button>
          <Button variant="icon" onClick={delCiclo} style={{ color: "var(--danger)" }} title="Excluir ciclo"><Icon name="trash-2" size={15} /></Button>
        </div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", minWidth: 900 }}>
          <thead><tr style={{ borderBottom: "1px solid var(--line)" }}>{["ID", "Atividade", "Início", "Fim", "Responsável", "Categoria", "Depende de", "Status", ""].map((h) => <th key={h} style={th}>{h}</th>)}</tr></thead>
          <tbody>
            {lista.map((a, idx) => (
              <tr key={a.key} style={{ borderTop: "1px solid var(--canvas)", background: a.pendenteAceite ? "var(--soft-orange)" : "transparent" }}>
                <td style={{ padding: "4px 8px", fontSize: 10.5, color: "var(--muted)", fontFamily: "monospace", width: 40 }}>E{idx + 1}</td>
                <td style={{ padding: 2, minWidth: 180 }}><input style={cellStyle} value={a.titulo} onFocus={focusCell} onBlur={blurCell} onChange={(ev) => pa(a, { nome: ev.target.value })} /><div style={{ paddingLeft: 8 }}><AprovChip status={a.aprov} /></div></td>
                <td style={{ padding: 2, width: 130 }}><input type="date" style={cellStyle} value={a.raw.s || ""} onFocus={focusCell} onBlur={blurCell} onChange={(ev) => pa(a, { s: ev.target.value, e: !a.raw.e || a.raw.e < ev.target.value ? ev.target.value : a.raw.e })} /></td>
                <td style={{ padding: 2, width: 130 }}><input type="date" style={cellStyle} value={a.raw.e || ""} onFocus={focusCell} onBlur={blurCell} onChange={(ev) => pa(a, { e: ev.target.value })} /></td>
                <td style={{ padding: 2, width: 170 }}><RespSelect value={a.resp} users={users} ausencias={ausencias} s={a.s} e={a.e} onChange={(ev) => pa(a, respPatch(ev.target.value, user.nome))} /></td>
                <td style={{ padding: 2, width: 130 }}><CategoriaSelect value={a.cx} onChange={(ev) => pa(a, { cx: ev.target.value })} /></td>
                <td style={{ padding: 2, width: 110 }}><DependenciaCell value={a.raw.dependeDe} aguardando={!!a.depAguardando} options={lista.filter((x) => x.id !== a.id).map((x, i) => ({ id: x.id, label: "E" + (lista.indexOf(x) + 1) + " · " + x.titulo.slice(0, 14) }))} onChange={(ev) => pa(a, { dependeDe: ev.target.value })} /></td>
                <td style={{ padding: 2, width: 160 }}><StatusSelect value={a.status} onChange={(ev) => pa(a, { status: ev.target.value })} />{a.atrasada && <div style={{ fontSize: 9.5, color: "var(--danger)", fontWeight: 700, paddingLeft: 8 }}>prazo vencido</div>}</td>
                <td style={{ padding: 2, width: 70 }}><RowActions a={a} abrirAtiv={abrirAtiv} onDelete={() => delEtapa(a.id)} /></td>
              </tr>
            ))}
            {ativsCiclo.length === 0 && <tr><td colSpan={9} style={{ padding: 16, textAlign: "center", color: "var(--muted)", fontSize: 12.5 }}>Ciclo sem atividades.</td></tr>}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function NovoCicloModal({ iniciativa, base, users, user, ausencias, onSave, onClose }) {
  const { Modal, Field, Input, Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { ETAPAS_PADRAO, uid, TODAY, addDays, daysBetween, Icon, inputBase } = window.PortalUI;
  const sugerirNome = () => { if (!base) return ""; const m = String(base.ciclo).match(/^(\d+)(º?)(.*)$/); return m ? `${Number(m[1]) + 1}${m[2]}${m[3]}` : base.ciclo + " (cópia)"; };
  const baseIni = base && base.etapas.length ? base.etapas.reduce((m, e) => (e.s && e.s < m ? e.s : m), base.etapas[0].s || TODAY) : TODAY;
  const [label, setLabel] = React.useState(sugerirNome());
  const [inicio, setInicio] = React.useState(base ? addDays(baseIni, 7) : TODAY);
  const copiadas = base ? base.etapas.map((e) => ({ id: uid("E"), nome: e.nome, resp: e.resp, dS: e.s ? daysBetween(baseIni, e.s) : 0, dur: e.s && e.e ? daysBetween(e.s, e.e) : 0, cx: e.cx || "P", precisaAprovacao: !!e.precisaAprovacao, depIdx: e.dependeDe ? base.etapas.findIndex((x) => x.id === e.dependeDe) : -1 })) : [];
  const [modo, setModo] = React.useState(base && copiadas.length ? "copiar" : "vazio");
  const [etapas, setEtapas] = React.useState(base && copiadas.length ? copiadas : []);
  const trocarModo = (m) => { setModo(m); setEtapas(m === "copiar" ? copiadas : []); };
  const setEtapa = (id, k, v) => setEtapas((prev) => prev.map((e) => e.id === id ? { ...e, [k]: v } : e));
  const salvar = () => {
    if (!label) return;
    const rows = etapas.map((e) => ({ id: e.id, nome: e.nome, resp: e.resp, s: addDays(inicio, e.dS), e: addDays(inicio, e.dS + e.dur), status: "Não iniciado", cx: e.cx || "P", precisaAprovacao: e.precisaAprovacao, nova: e.resp !== user.nome, aceita: e.resp === user.nome, criadoPor: user.nome, criadoTs: Date.now() }));
    rows.forEach((r, i) => { const d = etapas[i].depIdx; if (d >= 0 && rows[d]) r.dependeDe = rows[d].id; });
    onSave({ id: uid("CI"), ini: iniciativa.id, ciclo: label, etapas: rows });
  };
  return (
    <Modal title={base ? "Novo ciclo a partir do anterior" : "Novo ciclo"} sub={modo === "copiar" ? `Copiamos as atividades de "${base.ciclo}". Ajuste responsáveis e a data de início — os prazos se ajustam sozinhos.` : "Cada ciclo (edição/período) tem sua lista de atividades. Elas aparecem ordenadas pela data de início."} onClose={onClose} width={680}>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}><Field label="Ciclo / edição"><Input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="ex.: 25º/2026, Ed. 44, Encontro 6" /></Field></div>
        <div style={{ flex: 1 }}><Field label="Início do ciclo"><Input type="date" value={inicio} onChange={(e) => setInicio(e.target.value)} /></Field></div>
      </div>
      {base && copiadas.length > 0 && <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>{[["copiar", `Copiar atividades de "${base.ciclo}"`], ["vazio", "Começar vazio e lançar uma a uma"]].map(([v, l]) => <button key={v} onClick={() => trocarModo(v)} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid " + (modo === v ? "var(--blue-dark)" : "var(--line)"), background: modo === v ? "var(--soft-blue)" : "#fff", color: modo === v ? "var(--blue-dark)" : "var(--slate)", fontWeight: 700, fontSize: 12.5, cursor: "pointer", fontFamily: "var(--font-sans)" }}>{l}</button>)}</div>}
      <div style={{ fontSize: 11, fontWeight: 700, color: "var(--slate)", textTransform: "uppercase", letterSpacing: ".3px", margin: "6px 0 8px" }}>Atividades do ciclo</div>
      {etapas.length === 0 && <div style={{ fontSize: 12.5, color: "var(--muted)", marginBottom: 8 }}>Nenhuma atividade ainda. Crie o ciclo e lance as atividades uma a uma pelo botão "+ Atividade" (elas ficam em ordem de data), ou adicione aqui.</div>}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,2fr) minmax(0,1.4fr) 120px 110px 28px", gap: 6, fontSize: 10.5, color: "var(--muted)", fontWeight: 700, marginBottom: 4 }}><span>Atividade</span><span>Responsável</span><span>Categoria</span><span>Datas</span><span></span></div>
      {etapas.map((e) => (
        <div key={e.id} style={{ display: "grid", gridTemplateColumns: "minmax(0,2fr) minmax(0,1.4fr) 120px 110px 28px", gap: 6, marginBottom: 6, alignItems: "center" }}>
          <input style={inputBase} value={e.nome} onChange={(ev) => setEtapa(e.id, "nome", ev.target.value)} />
          <select style={{ ...inputBase, color: window.PortalUI.ausenteEm(ausencias, e.resp, addDays(inicio, e.dS), addDays(inicio, e.dS + e.dur)) ? "var(--danger)" : "var(--ink)" }} value={e.resp} onChange={(ev) => setEtapa(e.id, "resp", ev.target.value)}><option value="">Selecione...</option>{users.map((u) => <option key={u.id} value={u.nome}>{window.PortalUI.rotuloResp(u, ausencias, addDays(inicio, e.dS), addDays(inicio, e.dS + e.dur))}</option>)}</select>
          <select style={inputBase} value={e.cx || "P"} onChange={(ev) => setEtapa(e.id, "cx", ev.target.value)}>{window.PortalUI.CATEGORIAS.map((k) => <option key={k.v} value={k.v}>{k.v} · {k.nome}</option>)}</select>
          <span style={{ fontSize: 11.5, color: "var(--slate)" }}>{window.PortalUI.fmtPeriodo(addDays(inicio, e.dS), addDays(inicio, e.dS + e.dur))}</span>
          <button onClick={() => setEtapas((p) => p.filter((x) => x.id !== e.id))} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--danger)" }} title="Remover"><Icon name="x" size={15} /></button>
        </div>
      ))}
      <button onClick={() => setEtapas((p) => [...p, { id: uid("E"), nome: "Nova atividade", resp: user.nome, dS: p.length, dur: 0, cx: "P", depIdx: -1 }])} style={{ background: "none", border: "none", color: "var(--blue-light)", fontWeight: 700, fontSize: 12.5, cursor: "pointer", padding: "4px 0", fontFamily: "var(--font-sans)" }}>+ adicionar atividade</button>
      <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
        <Button variant="primary" onClick={salvar} style={{ flex: 1, justifyContent: "center" }}>Criar ciclo</Button>
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
      </div>
    </Modal>
  );
}

function Cronograma({ inis, selIni, setSelIni, tarefas, setTarefas, ciclos, setCiclos, ativs, iniById, users, user, ausencias, abrirAtiv, patchAtiv, onBack }) {
  const { Card, Button, NatureBadge, StatusBadge, ProgressBar, Select } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const { Icon, fmtY, daysBetween, exportCSV, AprovChip, nomeCurto, uid, TODAY } = P;
  const [novoCiclo, setNovoCiclo] = React.useState(null);
  const item = iniById(selIni);
  if (!item.id) return <Card style={{ padding: 30, textAlign: "center", color: "var(--muted)" }}>Nenhuma iniciativa selecionada. <button onClick={onBack} style={{ color: "var(--blue-light)", background: "none", border: "none", fontWeight: 700, cursor: "pointer" }}>Voltar</button></Card>;
  const isCiclo = item.natureza !== "Projeto";
  const pa = (a, p) => patchAtiv(a.key, p);

  const Header = ({ titulo, desc, children }) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
      <div style={{ marginBottom: 20 }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: "var(--blue-light)", fontWeight: 700, fontSize: 12.5, fontFamily: "var(--font-sans)", padding: 0, marginBottom: 6 }}><Icon name="arrow-left" size={14} /> Voltar</button>
        <h1 style={{ fontSize: 23, fontWeight: 800, color: "var(--ink)", margin: 0, fontFamily: "var(--font-sans)" }}>{titulo}</h1>
        <div style={{ fontSize: 13.5, color: "var(--slate)", marginTop: 3 }}>{desc}</div>
      </div>
      <div style={{ marginBottom: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Select value={selIni} onChange={(e) => setSelIni(e.target.value)} style={{ width: 240 }}>{inis.map((p) => <option key={p.id} value={p.id}>{p.nome} · {P.NAT_LABEL[p.natureza]}</option>)}</Select>
        {children}
      </div>
    </div>
  );

  if (isCiclo) {
    const ciclosIni = ciclos.filter((c) => c.ini === selIni);
    const ultimo = ciclosIni[ciclosIni.length - 1];
    const exportar = () => { const rows = []; ciclosIni.forEach((c) => ativs.filter((a) => a.cicloId === c.id).forEach((a) => rows.push([c.ciclo, a.titulo, a.resp, P.catLabel(a.cx), fmtY(a.s), fmtY(a.e), a.statusView]))); exportCSV(`ciclos-${item.nome}.csv`, ["Ciclo", "Atividade", "Responsável", "Categoria", "Início", "Fim", "Status"], rows); };
    return (
      <div>
        <Header titulo="Ciclos" desc="Cada ciclo (edição, encontro, mês) tem sua lista de atividades. Para o próximo, duplique o anterior e só ajuste datas e pessoas.">
          <Button variant="ghost" icon={<Icon name="file-spreadsheet" size={15} />} onClick={exportar}>Exportar Excel</Button>
          <Button variant="primary" icon={<Icon name="plus-circle" size={15} />} onClick={() => setNovoCiclo({ base: ultimo || null })}>{ultimo ? "Novo ciclo (copiar último)" : "Novo ciclo"}</Button>
        </Header>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, fontFamily: "var(--font-sans)", flexWrap: "wrap" }}>
          <div style={{ fontWeight: 800, fontSize: 17 }}>{item.nome}</div><NatureBadge nature={item.natureza} /><StatusBadge status={item.status} /><span style={{ fontSize: 12.5, color: "var(--slate)" }}>{ciclosIni.length} ciclo(s)</span>
        </div>
        {ciclosIni.length === 0 && <Card style={{ padding: 30, textAlign: "center", color: "var(--muted)" }}>Nenhum ciclo cadastrado ainda. Clique em "Novo ciclo".</Card>}
        {ciclosIni.slice().reverse().map((c) => <CicloCard key={c.id} ciclo={c} ativsCiclo={ativs.filter((a) => a.cicloId === c.id)} users={users} user={user} ausencias={ausencias} patchAtiv={patchAtiv} abrirAtiv={abrirAtiv} setCiclos={setCiclos} onDuplicar={(base) => setNovoCiclo({ base })} />)}
        {novoCiclo && <NovoCicloModal iniciativa={item} base={novoCiclo.base} users={users} user={user} ausencias={ausencias} onSave={(c) => { setCiclos((prev) => [...prev, c]); setNovoCiclo(null); }} onClose={() => setNovoCiclo(null)} />}
      </div>
    );
  }

  const ts = ativs.filter((a) => a.kind === "tar" && a.iniId === selIni).map((a, i) => ({ ...a, wbs: i + 1 }));
  const conc = ts.filter((t) => P.concluido(t.status)).length;
  const pct = ts.length ? conc / ts.length : 0;
  const dur = item.ini && item.fim ? daysBetween(item.ini, item.fim) : 0;
  const exportar = () => exportCSV(`cronograma-${item.nome}.csv`, ["ID", "Atividade", "Status", "Responsável", "Categoria", "Início", "Fim", "Dias"], ts.map((t) => [t.wbs, t.titulo, t.statusView, t.resp, P.catLabel(t.cx), fmtY(t.s), fmtY(t.e), t.s && t.e ? daysBetween(t.s, t.e) + 1 : ""]));
  const novaLinha = () => setTarefas((prev) => [...prev, { id: uid("T"), ini: selIni, nome: "Nova atividade", resp: user.nome, cx: "P", s: TODAY, e: TODAY, status: "Não iniciado", aceita: true, criadoPor: user.nome, criadoTs: Date.now() }]);
  const Stat = ({ label, val }) => <div><div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 600 }}>{label}</div><div style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)" }}>{val}</div></div>;
  return (
    <div>
      <Header titulo="Cronograma" desc="Lista única de atividades do projeto — o código (ID) é gerado sozinho. Edite direto na linha ou abra o detalhe.">
        <Button variant="ghost" icon={<Icon name="file-spreadsheet" size={15} />} onClick={exportar}>Exportar Excel</Button>
        <Button variant="primary" icon={<Icon name="plus-circle" size={15} />} onClick={novaLinha}>Nova atividade</Button>
      </Header>
      <Card style={{ padding: 18, marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 14, fontFamily: "var(--font-sans)" }}>
          <div style={{ fontWeight: 800, fontSize: 17 }}>{item.nome}</div><NatureBadge nature="Projeto" /><StatusBadge status={item.status} />
        </div>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", fontFamily: "var(--font-sans)" }}>
          <Stat label="Início" val={fmtY(item.ini)} /><Stat label="Fim previsto" val={fmtY(item.fim)} /><Stat label="Duração" val={dur + " dias"} /><Stat label="Atividades" val={ts.length} />
          <div><div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 600 }}>Conclusão</div><ProgressBar pct={pct} color="var(--nat-projeto)" width={100} /></div>
        </div>
      </Card>
      <Card style={{ padding: 0, marginBottom: 14, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, fontFamily: "var(--font-sans)", minWidth: 960 }}>
            <thead><tr style={{ background: "var(--blue-dark)", color: "#fff", textAlign: "left" }}>{["ID", "Atividade", "Status", "Responsável", "Categoria", "Depende de", "Início", "Fim", ""].map((h) => <th key={h} style={{ padding: "9px 10px", fontSize: 11, fontWeight: 700 }}>{h}</th>)}</tr></thead>
            <tbody>
              {ts.map((t) => (
                <tr key={t.key} style={{ borderTop: "1px solid var(--line)", background: t.pendenteAceite ? "var(--soft-orange)" : "#fff" }}>
                  <td style={{ padding: "6px 10px", fontSize: 11, color: "var(--muted)", fontFamily: "monospace", width: 36 }}>{t.wbs}</td>
                  <td style={{ padding: 2, minWidth: 200 }}><input style={{ ...cellStyle, fontWeight: 500 }} value={t.titulo} onFocus={focusCell} onBlur={blurCell} onChange={(e) => pa(t, { nome: e.target.value })} /><div style={{ paddingLeft: 8 }}><AprovChip status={t.aprov} /></div></td>
                  <td style={{ padding: 2, width: 160 }}><StatusSelect value={t.status} onChange={(e) => pa(t, { status: e.target.value })} />{t.atrasada && <div style={{ fontSize: 9.5, color: "var(--danger)", fontWeight: 700, paddingLeft: 8 }}>prazo vencido</div>}</td>
                  <td style={{ padding: 2, width: 170 }}><RespSelect value={t.resp} users={users} ausencias={ausencias} s={t.s} e={t.e} onChange={(e) => pa(t, respPatch(e.target.value, user.nome))} /></td>
                  <td style={{ padding: 2, width: 130 }}><CategoriaSelect value={t.cx} onChange={(e) => pa(t, { cx: e.target.value })} /></td>
                  <td style={{ padding: 2, width: 110 }}><DependenciaCell value={t.raw.dependeDe} aguardando={!!t.depAguardando} options={ts.filter((x) => x.id !== t.id).map((x) => ({ id: x.id, label: x.wbs + " · " + x.titulo.slice(0, 14) }))} onChange={(e) => pa(t, { dependeDe: e.target.value })} /></td>
                  <td style={{ padding: 2, width: 130 }}><input type="date" style={cellStyle} value={t.raw.s || ""} onFocus={focusCell} onBlur={blurCell} onChange={(e) => pa(t, { s: e.target.value, e: !t.raw.e || t.raw.e < e.target.value ? e.target.value : t.raw.e })} /></td>
                  <td style={{ padding: 2, width: 130 }}><input type="date" style={cellStyle} value={t.raw.e || ""} onFocus={focusCell} onBlur={blurCell} onChange={(e) => pa(t, { e: e.target.value })} /></td>
                  <td style={{ padding: 2, width: 70 }}><RowActions a={t} abrirAtiv={abrirAtiv} onDelete={() => setTarefas((prev) => prev.filter((x) => x.id !== t.id))} /></td>
                </tr>
              ))}
              {ts.length === 0 && <tr><td colSpan={9} style={{ padding: 18, textAlign: "center", color: "var(--muted)" }}>Sem atividades. Use "Nova atividade".</td></tr>}
            </tbody>
          </table>
        </div>
      </Card>
      <Card style={{ padding: 16 }}><div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, fontFamily: "var(--font-sans)" }}>Gantt</div><Gantt itens={ts} /></Card>
    </div>
  );
}
window.Cronograma = Cronograma;
