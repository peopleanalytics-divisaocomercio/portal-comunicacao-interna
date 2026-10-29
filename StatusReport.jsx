function StatusReport({ inis, lanc, tarefas, iniById, chamados, canais }) {
  const { Card, Button, StatusBadge, ProgressBar, Select } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { Icon, fmtY, fmt, addDays, TODAY, exportCSV } = window.PortalUI;
  const [fIni, setFIni] = React.useState("");
  const [fResp, setFResp] = React.useState("");
  const [fDe, setFDe] = React.useState("");
  const [fAte, setFAte] = React.useState("");

  const respostas = Array.from(new Set([...lanc, ...tarefas].map((x) => x.resp).filter(Boolean))).sort();
  const dataDe = (x) => x.dataPub || x.entrega || x.prazo || x.s || "0000-00-00";
  const passa = (x, resp) => (!fIni || x.ini === fIni) && (!fResp || resp === fResp) && (!fDe || dataDe(x) >= fDe) && (!fAte || dataDe(x) <= fAte);

  const lancF = lanc.filter((l) => passa(l, l.resp));
  const tarefasF = tarefas.filter((t) => passa(t, t.resp));
  const inisF = fIni ? inis.filter((i) => i.id === fIni) : inis;

  const projetos = inisF.filter((i) => i.natureza === "Projeto");
  const produtos = inisF.filter((i) => i.natureza === "Produto");
  const processos = inisF.filter((i) => i.natureza === "Processo");
  const fasesConcluidas = tarefasF.filter((t) => t.status === "Concluído").length;
  const fasesTotal = tarefasF.length;
  const entregasOk = lancF.filter((l) => ["Publicado", "Entregue"].includes(l.status)).length;
  const entregasTotal = lancF.length;
  const procs = lancF.filter((l) => l.prazo && l.entrega);
  const pctPrazo = procs.length ? Math.round((procs.filter((l) => l.entrega <= l.prazo).length / procs.length) * 100) : 0;
  const progressoGeral = fasesTotal ? Math.round((fasesConcluidas / fasesTotal) * 100) : 0;
  const bloqueadas = lancF.filter((l) => ["Aguardando terceiro", "Bloqueado"].includes(l.status));
  const atrasadas = [...lancF, ...tarefasF].filter((x) => x.status === "Atrasado");

  const faseStatusColor = { "Concluído": "var(--success)", "Em andamento": "var(--info)", "Não iniciado": "var(--muted)" };

  const exportarEntregaveis = () => exportCSV("status-report-entregaveis.csv", ["Entregável", "Iniciativa", "Responsável", "Status", "Data"], lancF.map((l) => [l.titulo, iniById(l.ini).nome, l.resp, l.status, l.dataPub || l.entrega || l.prazo || ""]));

  const KpiRow = ({ nome, referencia, resultado, status }) => (
    <tr style={{ borderTop: "1px solid var(--line)" }}>
      <td style={{ padding: "10px 12px", fontWeight: 700 }}>{nome}</td>
      <td style={{ padding: "10px 12px", color: "var(--slate)", fontSize: 12.5 }}>{referencia}</td>
      <td style={{ padding: "10px 12px" }}>{resultado}</td>
      <td style={{ padding: "10px 12px" }}>{status}</td>
    </tr>
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 16 }} className="no-print">
        <div>
          <h1 style={{ fontSize: 23, fontWeight: 800, color: "var(--ink)", margin: 0, fontFamily: "var(--font-sans)" }}>Status Report</h1>
          <div style={{ fontSize: 13.5, color: "var(--slate)", marginTop: 3 }}>Painel PMO consolidado · gerado automaticamente a partir das iniciativas.</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button variant="ghost" icon={<Icon name="file-spreadsheet" size={15} />} onClick={exportarEntregaveis}>Exportar Excel</Button>
          <Button variant="primary" icon={<Icon name="printer" size={15} />} onClick={() => window.print()}>Exportar PDF</Button>
        </div>
      </div>

      <Card style={{ padding: 14, marginBottom: 16 }} className="no-print">
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <Icon name="filter" size={15} color="var(--slate)" />
          <Select value={fIni} onChange={(e) => setFIni(e.target.value)} style={{ width: 200 }}>
            <option value="">Todas as iniciativas</option>
            {inis.map((i) => <option key={i.id} value={i.id}>{i.nome}</option>)}
          </Select>
          <Select value={fResp} onChange={(e) => setFResp(e.target.value)} style={{ width: 180 }}>
            <option value="">Todos os responsáveis</option>
            {respostas.map((r) => <option key={r} value={r}>{r}</option>)}
          </Select>
          <input type="date" value={fDe} onChange={(e) => setFDe(e.target.value)} style={{ padding: "8px 10px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 13, fontFamily: "var(--font-sans)" }} />
          <span style={{ color: "var(--muted)", fontSize: 12 }}>até</span>
          <input type="date" value={fAte} onChange={(e) => setFAte(e.target.value)} style={{ padding: "8px 10px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 13, fontFamily: "var(--font-sans)" }} />
          {(fIni || fResp || fDe || fAte) && <Button variant="ghost" onClick={() => { setFIni(""); setFResp(""); setFDe(""); setFAte(""); }}>Limpar</Button>}
        </div>
      </Card>

      <div id="status-report-print">
        <Card style={{ padding: 24, marginBottom: 16, background: "var(--blue-dark)", color: "#fff", border: "none" }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".5px", color: "#B9CEE6", marginBottom: 4 }}>Portal Gestão Pessoas e Cultura · Comunicação Interna</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 2 }}>Status Report — Ciclo {TODAY.slice(0, 4)}</div>
          <div style={{ fontSize: 12.5, color: "#C7D8EA", marginBottom: 20 }}>Gerado em {fmtY(TODAY)} · {inisF.length} iniciativas no filtro</div>
          <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 34, fontWeight: 800 }}>{progressoGeral}%</div><div style={{ fontSize: 11, color: "#C7D8EA", textTransform: "uppercase", letterSpacing: ".3px" }}>Progresso geral</div></div>
            <div><div style={{ fontSize: 34, fontWeight: 800 }}>{fasesConcluidas}<span style={{ fontSize: 18, opacity: .7 }}>/{fasesTotal}</span></div><div style={{ fontSize: 11, color: "#C7D8EA", textTransform: "uppercase", letterSpacing: ".3px" }}>Fases concluídas</div></div>
            <div><div style={{ fontSize: 34, fontWeight: 800 }}>{entregasOk}<span style={{ fontSize: 18, opacity: .7 }}>/{entregasTotal}</span></div><div style={{ fontSize: 11, color: "#C7D8EA", textTransform: "uppercase", letterSpacing: ".3px" }}>Entregáveis OK</div></div>
            <div><div style={{ fontSize: 34, fontWeight: 800 }}>{pctPrazo}%</div><div style={{ fontSize: 11, color: "#C7D8EA", textTransform: "uppercase", letterSpacing: ".3px" }}>KPIs no verde</div></div>
          </div>
        </Card>

        <Card style={{ padding: 20, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "var(--blue-dark)", textTransform: "uppercase", letterSpacing: ".4px", paddingBottom: 8, marginBottom: 14, borderBottom: "2px solid var(--orange)" }}>Resumo executivo</div>
          <p style={{ margin: 0, fontSize: 13.5, color: "var(--ink)", lineHeight: 1.7 }}>
            No período, a operação conduziu <b>{projetos.length}</b> projeto(s), <b>{produtos.length}</b> produto(s) contínuo(s) e <b>{processos.length}</b> processo(s) operacionais.
            {" "}<b>{pctPrazo}%</b> das entregas de processo ocorreram no prazo{bloqueadas.length ? <> e <b>{bloqueadas.length}</b> demanda(s) seguem aguardando terceiros</> : ""}.
            {atrasadas.length ? <> Há <b style={{ color: "var(--danger)" }}>{atrasadas.length}</b> item(ns) em atraso que exigem atenção.</> : " Não há itens em atraso no momento."}
          </p>
        </Card>

        {chamados && (
          <Card style={{ padding: 0, marginBottom: 14, overflow: "hidden" }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "var(--blue-dark)", textTransform: "uppercase", letterSpacing: ".4px", padding: "16px 18px 0" }}>Atendimentos no período</div>
            <div style={{ display: "flex", gap: 20, padding: "14px 18px", flexWrap: "wrap" }}>
              <div><div style={{ fontSize: 22, fontWeight: 800, color: "var(--blue-dark)" }}>{chamados.length}</div><div style={{ fontSize: 11, color: "var(--slate)" }}>chamados totais</div></div>
              <div><div style={{ fontSize: 22, fontWeight: 800, color: "var(--success)" }}>{chamados.filter((c) => c.status === "Concluído").length}</div><div style={{ fontSize: 11, color: "var(--slate)" }}>concluídos</div></div>
              <div><div style={{ fontSize: 22, fontWeight: 800, color: "var(--warning)" }}>{chamados.filter((c) => c.atividades.length === 0 && c.status !== "Concluído").length}</div><div style={{ fontSize: 11, color: "var(--slate)" }}>sem desdobrar</div></div>
            </div>
          </Card>
        )}

        {canais && (
          <Card style={{ padding: 0, marginBottom: 14, overflow: "hidden" }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "var(--blue-dark)", textTransform: "uppercase", letterSpacing: ".4px", padding: "16px 18px 0" }}>Canais de comunicação no período</div>
            <div style={{ display: "flex", gap: 20, padding: "14px 18px", flexWrap: "wrap" }}>
              <div><div style={{ fontSize: 22, fontWeight: 800, color: "var(--nat-produto)" }}>{canais.podcast.seguidores}</div><div style={{ fontSize: 11, color: "var(--slate)" }}>inscritos podcast</div></div>
              <div><div style={{ fontSize: 22, fontWeight: 800, color: "var(--nat-produto)" }}>{canais.instagram.seguidores.toLocaleString("pt-BR")}</div><div style={{ fontSize: 11, color: "var(--slate)" }}>seguidores Instagram</div></div>
              <div><div style={{ fontSize: 22, fontWeight: 800, color: "var(--nat-produto)" }}>{canais.linkedin.seguidores.toLocaleString("pt-BR")}</div><div style={{ fontSize: 11, color: "var(--slate)" }}>seguidores LinkedIn</div></div>
            </div>
          </Card>
        )}

        <div style={{ fontSize: 11, fontWeight: 800, color: "var(--blue-dark)", textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 10 }}>Cronograma por projeto</div>
        {projetos.map((p) => {
          const fases = tarefasF.filter((t) => t.ini === p.id);
          return (
            <Card key={p.id} style={{ padding: 18, marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                <div style={{ fontWeight: 800, fontSize: 15 }}>{p.nome}</div>
                <StatusBadge status={p.status} />
                <div style={{ marginLeft: "auto", fontSize: 12, color: "var(--slate)" }}>{fmt(p.ini)} → {fmt(p.fim)}</div>
              </div>
              {fases.map((f) => (
                <div key={f.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderTop: "1px solid var(--canvas)" }}>
                  <span style={{ color: faseStatusColor[f.status] || "var(--muted)" }}><Icon name={f.status === "Concluído" ? "check-circle-2" : f.status === "Em andamento" ? "clock" : "circle"} size={15} /></span>
                  <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{f.nome}</div>
                  <div style={{ fontSize: 11.5, color: "var(--muted)" }}>{fmt(f.s)} → {fmt(f.e)}</div>
                  <div style={{ width: 90 }}><ProgressBar pct={f.pct} color="var(--nat-projeto)" width={"100%"} /></div>
                </div>
              ))}
            </Card>
          );
        })}

        <Card style={{ padding: 0, marginBottom: 14, overflow: "hidden" }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "var(--blue-dark)", textTransform: "uppercase", letterSpacing: ".4px", padding: "16px 18px 0" }}>Entregáveis</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, fontFamily: "var(--font-sans)", marginTop: 10 }}>
            <thead><tr style={{ background: "var(--canvas)", textAlign: "left", color: "var(--slate)" }}>{["Entregável", "Iniciativa", "Responsável", "Status"].map((h) => <th key={h} style={{ padding: "9px 18px", fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>{h}</th>)}</tr></thead>
            <tbody>{lancF.map((l) => (
              <tr key={l.id} style={{ borderTop: "1px solid var(--line)" }}>
                <td style={{ padding: "9px 18px" }}>{l.titulo}</td>
                <td style={{ padding: "9px 18px", color: "var(--slate)" }}>{iniById(l.ini).nome}</td>
                <td style={{ padding: "9px 18px", color: "var(--slate)" }}>{l.resp}</td>
                <td style={{ padding: "9px 18px" }}><StatusBadge status={l.status} /></td>
              </tr>
            ))}</tbody>
          </table>
        </Card>

        <Card style={{ padding: 0, marginBottom: 14, overflow: "hidden" }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "var(--blue-dark)", textTransform: "uppercase", letterSpacing: ".4px", padding: "16px 18px 0" }}>Indicadores (KPIs)</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, fontFamily: "var(--font-sans)", marginTop: 10 }}>
            <thead><tr style={{ background: "var(--canvas)", textAlign: "left", color: "var(--slate)" }}>{["KPI", "Referência", "Resultado", "Status"].map((h) => <th key={h} style={{ padding: "9px 18px", fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>{h}</th>)}</tr></thead>
            <tbody>
              <KpiRow nome="% de processos no prazo" referencia="Acordo de nível de serviço (SLA)" resultado={<b>{pctPrazo}%</b>} status={<StatusBadge status={pctPrazo >= 90 ? "Ativo" : "Aguardando terceiro"} />} />
              <KpiRow nome="Progresso dos projetos" referencia="Atividades concluídas / total" resultado={<b>{fasesConcluidas}/{fasesTotal}</b>} status={<StatusBadge status={progressoGeral >= 60 ? "Em andamento" : "Não iniciado"} />} />
              <KpiRow nome="Demandas bloqueadas" referencia="Aguardando terceiros" resultado={<b>{bloqueadas.length}</b>} status={<StatusBadge status={bloqueadas.length ? "Aguardando terceiro" : "Concluído"} />} />
              <KpiRow nome="Itens em atraso" referencia="Tarefas e entregas" resultado={<b>{atrasadas.length}</b>} status={<StatusBadge status={atrasadas.length ? "Atrasado" : "Concluído"} />} />
            </tbody>
          </table>
        </Card>

        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "var(--blue-dark)", textTransform: "uppercase", letterSpacing: ".4px", padding: "16px 18px 0" }}>Próximos passos · governança</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, fontFamily: "var(--font-sans)", marginTop: 10 }}>
            <thead><tr style={{ background: "var(--canvas)", textAlign: "left", color: "var(--slate)" }}>{["Quando", "Atividade", "Iniciativa", "Responsável"].map((h) => <th key={h} style={{ padding: "9px 18px", fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>{h}</th>)}</tr></thead>
            <tbody>
              {[...tarefasF.filter((t) => t.status !== "Concluído"), ...lancF.filter((l) => !["Publicado", "Entregue"].includes(l.status))]
                .sort((a, b) => (a.s || a.dataPub || a.prazo || "").localeCompare(b.s || b.dataPub || b.prazo || ""))
                .slice(0, 8)
                .map((x) => (
                  <tr key={x.id} style={{ borderTop: "1px solid var(--line)" }}>
                    <td style={{ padding: "9px 18px", fontWeight: 700, color: "var(--slate)" }}>{fmt(x.s || x.dataPub || x.prazo)}</td>
                    <td style={{ padding: "9px 18px" }}>{x.nome || x.titulo}</td>
                    <td style={{ padding: "9px 18px", color: "var(--slate)" }}>{iniById(x.ini).nome}</td>
                    <td style={{ padding: "9px 18px", color: "var(--slate)" }}>{x.resp}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
window.StatusReport = StatusReport;
