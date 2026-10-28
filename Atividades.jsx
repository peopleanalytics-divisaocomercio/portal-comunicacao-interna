function CalendarioMes({ ativs, marcos, ausencias, mesRef, setMesRef, selDia, onDia, onMarco }) {
  const { monthGrid, TODAY, D, Icon, nomeCurto } = window.PortalUI;
  const { cells, label } = monthGrid(mesRef);
  const counts = {};
  ativs.forEach((a) => { if (!a.s) return; let d = a.s; const e = a.e && a.e >= a.s ? a.e : a.s; let n = 0; while (d <= e && n < 62) { counts[d] = (counts[d] || 0) + 1; d = window.PortalUI.addDays(d, 1); n++; } });
  const marcosDia = {};
  marcos.forEach((m) => { let d = m.data; const e = m.ate && m.ate >= m.data ? m.ate : m.data; let n = 0; while (d <= e && n < 62) { (marcosDia[d] = marcosDia[d] || []).push(m); d = window.PortalUI.addDays(d, 1); n++; } });
  const ausDia = {};
  (ausencias || []).forEach((a) => { let d = a.de; let n = 0; while (d <= a.ate && n < 62) { (ausDia[d] = ausDia[d] || []).push(a); d = window.PortalUI.addDays(d, 1); n++; } });
  const max = Math.max(...Object.values(counts), 1);
  const shiftMes = (n) => { const d = D(mesRef); d.setDate(1); d.setMonth(d.getMonth() + n); setMesRef(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-01`); };
  const nb = { width: 30, height: 30, borderRadius: 8, border: "1px solid var(--line)", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--slate)" };
  return (
    <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 12, padding: 18, marginBottom: 16, boxShadow: "var(--shadow-card)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <button style={nb} onClick={() => shiftMes(-1)}><Icon name="chevron-left" size={15} /></button>
        <div style={{ fontWeight: 800, fontSize: 15, textTransform: "capitalize", minWidth: 150, textAlign: "center" }}>{label}</div>
        <button style={nb} onClick={() => shiftMes(1)}><Icon name="chevron-right" size={15} /></button>
        <div style={{ marginLeft: "auto", display: "flex", gap: 14, fontSize: 11, color: "var(--slate)", alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5, whiteSpace: "nowrap" }}><span style={{ width: 12, height: 12, borderRadius: 3, background: "rgba(15,124,185,.55)" }} /> atividades</span>
          <span style={{ display: "flex", alignItems: "center", gap: 5, whiteSpace: "nowrap" }}><span style={{ width: 12, height: 12, borderRadius: 3, background: "var(--orange)" }} /> marcos / lembretes</span>
          <span style={{ display: "flex", alignItems: "center", gap: 5, whiteSpace: "nowrap" }}><span style={{ width: 12, height: 12, borderRadius: 3, background: "var(--slate)" }} /> férias / folgas</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", gap: 6, fontSize: 10.5, color: "var(--muted)", marginBottom: 6, textAlign: "center", fontWeight: 700 }}>
        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => <div key={d}>{d}</div>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", gap: 6 }}>
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const c = counts[d] || 0;
          const bg = c === 0 ? "var(--canvas)" : `rgba(15,124,185,${0.12 + (c / max) * 0.5})`;
          const dark = c > max * 0.6;
          const ms = marcosDia[d] || [];
          return (
            <div key={i} onClick={() => onDia(d)} style={{ minHeight: 62, borderRadius: 8, background: bg, border: selDia === d ? "2px solid var(--blue-dark)" : d === TODAY ? "2px solid var(--orange)" : "2px solid transparent", padding: 5, display: "flex", flexDirection: "column", gap: 3, cursor: "pointer", minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11.5, fontWeight: d === TODAY ? 800 : 600, color: dark ? "#fff" : "var(--ink)" }}>{Number(d.slice(-2))}</span>
                {c > 0 && <span style={{ fontSize: 10, fontWeight: 800, color: dark ? "#fff" : "var(--blue-dark)" }}>{c}</span>}
              </div>
              {ms.slice(0, 2).map((m) => <div key={m.id} onClick={(e) => { e.stopPropagation(); onMarco(m); }} title={m.titulo} style={{ fontSize: 9.5, fontWeight: 700, color: "#fff", background: "var(--orange)", borderRadius: 4, padding: "1px 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.titulo}</div>)}
              {ms.length > 2 && <div style={{ fontSize: 9, color: "var(--orange)", fontWeight: 700 }}>+{ms.length - 2}</div>}
              {(ausDia[d] || []).slice(0, 2).map((a) => <div key={a.id} title={`${a.nome} · ${a.tipo || "Ausente"}`} style={{ fontSize: 9.5, fontWeight: 700, color: "#fff", background: "var(--slate)", borderRadius: 4, padding: "1px 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{nomeCurto(a.nome).split(" ")[0]} · {a.tipo || "ausente"}</div>)}
              {(ausDia[d] || []).length > 2 && <div style={{ fontSize: 9, color: "var(--slate)", fontWeight: 700 }}>+{ausDia[d].length - 2} ausentes</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MarcoModal({ marco, onSave, onDelete, onClose }) {
  const { Modal, Field, Input, Select, Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { TODAY, TIPOS_MARCO, uid } = window.PortalUI;
  const [f, setF] = React.useState(marco && marco.id ? marco : { titulo: "", data: (marco && marco.data) || TODAY, ate: "", tipo: TIPOS_MARCO[0], obs: "" });
  const set = (k, v) => setF({ ...f, [k]: v });
  return (
    <Modal title={marco && marco.id ? "Editar marco" : "Novo marco na agenda"} sub="Datas importantes que não são atividades da equipe — aniversários, eventos, datas em que não dá para marcar nada." onClose={onClose} width={460}>
      <Field label="Título"><Input value={f.titulo} onChange={(e) => set("titulo", e.target.value)} placeholder="ex.: Aniversário do presidente" /></Field>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}><Field label="Data"><Input type="date" value={f.data} onChange={(e) => set("data", e.target.value)} /></Field></div>
        <div style={{ flex: 1 }}><Field label="Até (opcional)"><Input type="date" value={f.ate || ""} min={f.data} onChange={(e) => set("ate", e.target.value)} /></Field></div>
      </div>
      <Field label="Tipo"><Select value={f.tipo} onChange={(e) => set("tipo", e.target.value)}>{TIPOS_MARCO.map((t) => <option key={t}>{t}</option>)}</Select></Field>
      <Field label="Observação"><Input value={f.obs || ""} onChange={(e) => set("obs", e.target.value)} /></Field>
      <div style={{ display: "flex", gap: 10 }}>
        <Button variant="primary" onClick={() => f.titulo && onSave({ ...f, id: f.id || uid("M") })} style={{ flex: 1, justifyContent: "center" }}>Salvar</Button>
        {marco && marco.id && <Button variant="ghost" style={{ color: "var(--danger)", borderColor: "var(--danger)" }} onClick={() => onDelete(marco.id)}>Excluir</Button>}
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
      </div>
    </Modal>
  );
}

function Atividades({ inis, ativs, tarefas, setTarefas, ciclos, setCiclos, marcos, setMarcos, ausencias, abrirAusencias, iniById, users, user, abrirAtiv, patchAtiv }) {
  const { Card, StatusBadge, Button, Select } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const { Icon, addDays, fmtY, fmtPeriodo, TODAY, D, nomeCurto, NatChip, AprovChip, Chip, mondayOf, overlaps } = P;
  const me = user.nome;
  const [period, setPeriod] = React.useState("semana");
  const [dia, setDia] = React.useState(TODAY);
  const [mesRef, setMesRef] = React.useState(TODAY.slice(0, 8) + "01");
  const [viewMode, setViewMode] = React.useState("lista");
  const [fResp, setFResp] = React.useState("");
  const [novaModal, setNovaModal] = React.useState(false);
  const [marcoModal, setMarcoModal] = React.useState(null);

  const minhasNovas = ativs.filter((a) => a.resp === me && a.pendenteAceite);
  const ativsF = ativs.filter((a) => !fResp || a.resp === fResp);
  const seg = mondayOf(TODAY);
  let start, end, titulo;
  if (period === "hoje") { start = end = TODAY; titulo = "Hoje · " + fmtY(TODAY); }
  else if (period === "semana") { start = seg; end = addDays(seg, 6); titulo = `Esta semana · ${fmtY(start)} a ${fmtY(end)}`; }
  else if (period === "proxima") { start = addDays(seg, 7); end = addDays(seg, 13); titulo = `Próxima semana · ${fmtY(start)} a ${fmtY(end)}`; }
  else if (period === "mes") { const d = D(mesRef); start = mesRef; end = `${mesRef.slice(0, 8)}${String(P.monthGrid(mesRef).cells.filter(Boolean).length).padStart(2, "0")}`; titulo = d.toLocaleDateString("pt-BR", { month: "long", year: "numeric" }); }
  else if (period === "dia") { start = end = dia; titulo = D(dia).toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" }); }
  const acts = period === "timeline" ? [] : ativsF.filter((a) => overlaps(a.s, a.e, start, end)).sort((a, b) => (a.s || "").localeCompare(b.s || ""));
  const ausP = period === "timeline" ? [] : (ausencias || []).filter((a) => (!fResp || a.nome === fResp) && overlaps(a.de, a.ate, start, end)).sort((a, b) => a.de.localeCompare(b.de));
  const marcosP = period === "timeline" ? [] : marcos.filter((m) => overlaps(m.data, m.ate || m.data, start, end)).sort((a, b) => a.data.localeCompare(b.data));
  const grupos = {};
  acts.forEach((a) => { const k = viewMode === "responsavel" ? nomeCurto(a.resp) : a.grupo || "—"; (grupos[k] = grupos[k] || []).push(a); });

  const pill = (on, onClick, label, key) => <button key={key} onClick={onClick} style={{ padding: "8px 14px", borderRadius: 8, border: `1px solid ${on ? "var(--blue-dark)" : "var(--line)"}`, background: on ? "var(--blue-dark)" : "#fff", color: on ? "#fff" : "var(--slate)", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-sans)", whiteSpace: "nowrap" }}>{label}</button>;

  const Row = ({ a }) => (
    <div onClick={() => abrirAtiv(a.key)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderTop: "1px solid var(--line)", background: a.pendenteAceite ? "var(--soft-orange)" : "transparent", cursor: "pointer", flexWrap: "wrap" }}>
      <div style={{ width: 86, fontSize: 12, fontWeight: 700, color: "var(--slate)" }}>{fmtPeriodo(a.s, a.e)}</div>
      <NatChip nat={a.nat} />
      <div style={{ flex: "1 1 220px", minWidth: 0 }}>
        <div style={{ fontSize: 13.5, fontWeight: 600 }}>{a.titulo}</div>
        <div style={{ fontSize: 11, color: "var(--muted)", display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", marginTop: 2 }}>{[a.grupo, a.sub].filter(Boolean).join(" · ")}<AprovChip status={a.aprov} />{a.depAguardando && <Chip color="var(--warning)" bg="var(--soft-orange)" icon="link">aguarda {nomeCurto(a.depAguardando.resp)}: {a.depAguardando.titulo}</Chip>}</div>
      </div>
      <div style={{ fontSize: 12, color: "var(--slate)", width: 120, textAlign: "right" }}>{nomeCurto(a.resp)}</div>
      <div style={{ width: 150, textAlign: "right" }}><StatusBadge status={a.statusView} /></div>
      {a.pendenteAceite && a.resp === me ? (
        <div style={{ display: "flex", gap: 6 }} onClick={(e) => e.stopPropagation()}>
          <Button variant="primary" style={{ padding: "5px 10px", fontSize: 11.5 }} onClick={() => patchAtiv(a.key, { aceita: true, nova: false })}>Aceitar</Button>
          <Button variant="ghost" style={{ padding: "5px 10px", fontSize: 11.5 }} onClick={() => abrirAtiv(a.key)}>Recusar</Button>
        </div>
      ) : a.raw.recusada ? <Chip color="var(--danger)" bg="var(--danger-bg)">Recusada</Chip> : <Icon name="chevron-right" size={16} color="var(--muted)" />}
    </div>
  );
  const MarcoRow = ({ m }) => (
    <div onClick={() => setMarcoModal(m)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 14px", borderTop: "1px solid var(--line)", background: "var(--soft-orange)", cursor: "pointer" }}>
      <div style={{ width: 86, fontSize: 12, fontWeight: 700, color: "var(--orange)" }}>{fmtPeriodo(m.data, m.ate)}</div>
      <Chip color="#fff" bg="var(--orange)" icon="flag">{m.tipo}</Chip>
      <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{m.titulo}{m.obs && <span style={{ color: "var(--slate)", fontWeight: 400 }}> · {m.obs}</span>}</div>
    </div>
  );

  const AusRow = ({ a }) => (
    <div onClick={abrirAusencias} style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 14px", borderTop: "1px solid var(--line)", background: "var(--canvas)", cursor: "pointer" }}>
      <div style={{ width: 86, fontSize: 12, fontWeight: 700, color: "var(--slate)" }}>{fmtPeriodo(a.de, a.ate)}</div>
      <Chip color="#fff" bg="var(--slate)" icon="calendar-off">{a.tipo || "Ausente"}</Chip>
      <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{nomeCurto(a.nome)} indisponível{a.obs ? <span style={{ color: "var(--slate)", fontWeight: 400 }}> · {a.obs}</span> : ""}</div>
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontSize: 23, fontWeight: 800, color: "var(--ink)", margin: 0, fontFamily: "var(--font-sans)" }}>Atividades</h1>
          <div style={{ fontSize: 13.5, color: "var(--slate)", marginTop: 3 }}>A agenda da equipe: o que cada um tem hoje, nesta semana e na próxima. Clique numa atividade para ver o detalhe.</div>
        </div>
        <div style={{ marginBottom: 20, display: "flex", gap: 8 }}>
          <Button variant="ghost" icon={<Icon name="calendar-off" size={15} />} onClick={abrirAusencias}>Férias e folgas</Button>
          <Button variant="ghost" icon={<Icon name="flag" size={15} />} onClick={() => setMarcoModal({ data: period === "dia" ? dia : TODAY })}>Novo marco</Button>
          <Button variant="primary" icon={<Icon name="plus-circle" size={16} />} onClick={() => setNovaModal(true)}>Nova atividade</Button>
        </div>
      </div>

      {minhasNovas.length > 0 && (
        <Card style={{ padding: 0, marginBottom: 16, overflow: "hidden", border: "2px solid var(--orange)" }}>
          <div style={{ background: "var(--orange)", color: "#fff", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 13 }}>
            <Icon name="bell" size={16} /> {minhasNovas.length} atividade{minhasNovas.length > 1 ? "s" : ""} direcionada{minhasNovas.length > 1 ? "s" : ""} para você — aceite ou recuse
          </div>
          {minhasNovas.map((a) => <Row key={a.key} a={a} />)}
        </Card>
      )}

      <CalendarioMes ativs={ativsF} marcos={marcos} ausencias={ausencias} mesRef={mesRef} setMesRef={setMesRef} selDia={period === "dia" ? dia : null} onDia={(d) => { setDia(d); setPeriod("dia"); }} onMarco={(m) => setMarcoModal(m)} />

      <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
        {[["hoje", "Hoje"], ["semana", "Esta semana"], ["proxima", "Próxima semana"], ["mes", "Mês"], ["timeline", "Timeline"]].map(([k, l]) => pill(period === k, () => setPeriod(k), l, k))}
        <div style={{ marginLeft: "auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Select value={fResp} onChange={(e) => setFResp(e.target.value)} style={{ width: 200 }}>
            <option value="">Toda a equipe</option>
            <option value={me}>Somente as minhas</option>
            {users.filter((u) => u.nome !== me).map((u) => <option key={u.id} value={u.nome}>{u.nome}</option>)}
          </Select>
          {period !== "timeline" && <Select value={viewMode} onChange={(e) => setViewMode(e.target.value)} style={{ width: 190 }}>
            <option value="lista">Lista por data</option>
            <option value="iniciativa">Agrupar por iniciativa</option>
            <option value="responsavel">Agrupar por responsável</option>
          </Select>}
        </div>
      </div>

      {period !== "timeline" && <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}><div style={{ fontWeight: 800, fontSize: 14.5, textTransform: "capitalize" }}>{titulo}</div><div style={{ marginLeft: "auto", fontSize: 12.5, color: "var(--slate)" }}>{acts.length} atividade(s){marcosP.length ? ` · ${marcosP.length} marco(s)` : ""}{ausP.length ? ` · ${ausP.length} ausência(s)` : ""}</div></div>}

      {period === "timeline" ? <AtividadesTimeline inis={inis} ativs={ativsF} /> : (
        <>
          {acts.length === 0 && marcosP.length === 0 && ausP.length === 0 && <Card style={{ padding: 30, textAlign: "center", color: "var(--muted)" }}>Nenhuma atividade neste período.</Card>}
          {viewMode === "lista" && (acts.length > 0 || marcosP.length > 0 || ausP.length > 0) && <Card style={{ overflow: "hidden" }}>{ausP.map((a) => <AusRow key={a.id} a={a} />)}{marcosP.map((m) => <MarcoRow key={m.id} m={m} />)}{acts.map((a) => <Row key={a.key} a={a} />)}</Card>}
          {viewMode !== "lista" && (marcosP.length > 0 || ausP.length > 0) && <Card style={{ overflow: "hidden", marginBottom: 12 }}>{ausP.map((a) => <AusRow key={a.id} a={a} />)}{marcosP.map((m) => <MarcoRow key={m.id} m={m} />)}</Card>}
          {viewMode !== "lista" && Object.entries(grupos).map(([nome, list]) => (
            <Card key={nome} style={{ marginBottom: 12, overflow: "hidden" }}>
              <div style={{ padding: "10px 14px", background: "var(--canvas)", display: "flex", alignItems: "center", gap: 9, fontWeight: 700, fontSize: 13.5 }}>
                {viewMode === "iniciativa" ? <NatChip nat={list[0].nat} /> : <Icon name="user" size={15} />} {nome} <span style={{ color: "var(--muted)", fontWeight: 500, fontSize: 12 }}>· {list.length} atividade(s)</span>
              </div>
              {list.map((a) => <Row key={a.key} a={a} />)}
            </Card>
          ))}
        </>
      )}

      {novaModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(22,40,61,.45)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 60, padding: 20 }} onClick={(e) => e.target === e.currentTarget && setNovaModal(false)}>
          <div style={{ background: "#fff", borderRadius: 12, padding: 24, width: 580, maxWidth: "100%", maxHeight: "90vh", overflow: "auto", boxShadow: "var(--shadow-modal)", position: "relative" }}>
            <button onClick={() => setNovaModal(false)} style={{ position: "absolute", top: 18, right: 18, background: "none", border: "none", cursor: "pointer", color: "var(--slate)", fontSize: 16 }}>✕</button>
            <window.Lancar inis={inis} ciclos={ciclos} setTarefas={setTarefas} setCiclos={setCiclos} users={users} user={user} ausencias={ausencias} dataInicial={period === "dia" ? dia : TODAY} />
          </div>
        </div>
      )}
      {marcoModal && <MarcoModal marco={marcoModal} onClose={() => setMarcoModal(null)} onSave={(m) => { setMarcos((prev) => prev.some((x) => x.id === m.id) ? prev.map((x) => x.id === m.id ? m : x) : [...prev, m]); setMarcoModal(null); }} onDelete={(id) => { setMarcos((prev) => prev.filter((x) => x.id !== id)); setMarcoModal(null); }} />}
    </div>
  );
}

function AtividadesTimeline({ inis, ativs }) {
  const { daysBetween, fmt, TODAY } = window.PortalUI;
  const ds = ativs.filter((a) => a.s);
  if (!ds.length) return <div style={{ color: "var(--muted)", fontSize: 13 }}>Sem dados para exibir.</div>;
  const min = ds.reduce((m, a) => (a.s < m ? a.s : m), ds[0].s);
  const max = ds.reduce((m, a) => ((a.e || a.s) > m ? a.e || a.s : m), ds[0].e || ds[0].s);
  const total = Math.max(daysBetween(min, max), 1);
  const natColor = { Projeto: "var(--nat-projeto)", Produto: "var(--nat-produto)", Processo: "var(--nat-processo)", Atendimento: "var(--blue-dark)" };
  const grupos = {};
  ds.forEach((a) => { const k = a.grupo || "—"; (grupos[k] = grupos[k] || { nat: a.nat, list: [] }).list.push(a); });
  return (
    <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 12, padding: 18, boxShadow: "var(--shadow-card)", overflowX: "auto" }}>
      <div style={{ minWidth: 600 }}>
        <div style={{ marginLeft: 200, display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--muted)", marginBottom: 10 }}><span>{fmt(min)}</span><span>{fmt(max)}</span></div>
        {Object.entries(grupos).map(([nome, g]) => {
          const s = g.list.reduce((m, o) => (o.s < m ? o.s : m), g.list[0].s);
          const e = g.list.reduce((m, o) => ((o.e || o.s) > m ? o.e || o.s : m), g.list[0].e || g.list[0].s);
          return (
            <div key={nome} style={{ display: "flex", alignItems: "center", height: 30, borderTop: "1px solid var(--canvas)" }}>
              <div style={{ width: 200, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{nome}</div>
              <div style={{ position: "relative", flex: 1, height: "100%" }}><div style={{ position: "absolute", top: 9, left: `${(daysBetween(min, s) / total) * 100}%`, width: `${Math.max((daysBetween(s, e) / total) * 100, 1.5)}%`, height: 12, background: natColor[g.nat], borderRadius: 4, opacity: .85 }} /></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
window.Atividades = Atividades;
