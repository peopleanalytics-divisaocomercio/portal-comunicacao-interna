const MESES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const CANAIS_DEF = {
  podcast_mensal: { titulo: "Podcast Nosso Legado · dados do mês", path: ["podcast", "mensal"], campos: [["mes", "Mês", "month"], ["inscritos", "Inscritos", "number"], ["views", "Views no mês", "number"], ["tempoMedio", "Tempo médio de visualização", "text"]] },
  podcast_ep: { titulo: "Podcast Nosso Legado · episódio", path: ["podcast", "episodios"], campos: [["ep", "Episódio", "number"], ["entrevistado", "Entrevistado", "text"], ["pub", "Data de publicação", "date"], ["views", "Views YouTube", "number"], ["viewsPlat", "Views plataformas de podcast", "number"], ["imp", "Impressões YouTube", "number"]] },
  revista: { titulo: "Revista Na Direção · edição", path: ["revista", "edicoes"], campos: [["edicao", "Edição", "text"], ["pub", "Data de publicação", "date"], ["acessos", "Acessos / leituras", "number"]] },
  news: { titulo: "Na Direção News · edição", path: ["news", "edicoes"], campos: [["edicao", "Edição", "text"], ["pub", "Data de publicação", "date"], ["vInsta", "Visualizações (Instagram)", "number"], ["vLinkedin", "Visualizações (LinkedIn)", "number"], ["vEmail", "Visualizações (E-mail)", "number"]] },
  instagram: { titulo: "Instagram · dados do mês", path: ["instagram", "mensal"], campos: [["mes", "Mês", "month"], ["seguidores", "Seguidores", "number"], ["alcance", "Alcance", "number"], ["impressoes", "Visualizações", "number"], ["engajamento", "Engajamento (%)", "number"]] },
  linkedin: { titulo: "LinkedIn · dados do mês", path: ["linkedin", "mensal"], campos: [["mes", "Mês", "month"], ["seguidores", "Seguidores", "number"], ["visitantes", "Visitantes únicos", "number"], ["engajamento", "Engajamento (%)", "number"]] },
};

function InserirDadoModal({ def, inicial, onSave, onDelete, onClose }) {
  const { Modal, Field, Input, Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const [f, setF] = React.useState(inicial || {});
  return (
    <Modal title={(inicial ? "Editar · " : "Inserir dado · ") + def.titulo} sub="Lançamento manual — para vários meses de uma vez, use Importar planilha." onClose={onClose} width={460}>
      {def.campos.map(([k, label, type]) => <Field key={k} label={label}><Input type={type === "month" ? "month" : type} step={type === "number" ? "any" : undefined} value={f[k] ?? ""} onChange={(e) => setF({ ...f, [k]: type === "number" ? (e.target.value === "" ? "" : Number(e.target.value)) : e.target.value })} /></Field>)}
      <div style={{ display: "flex", gap: 10 }}>
        <Button variant="primary" onClick={() => onSave(f)} style={{ flex: 1, justifyContent: "center" }}>Salvar</Button>
        {inicial && <Button variant="ghost" style={{ color: "var(--danger)", borderColor: "var(--danger)" }} onClick={onDelete}>Excluir</Button>}
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
      </div>
    </Modal>
  );
}

function EvolucaoMensal({ titulo, mensal, campo, color, ano, sel, onSel }) {
  const dados = MESES.map((_, i) => { const r = mensal.find((m) => m.mes === `${ano}-${String(i + 1).padStart(2, "0")}`); return r ? Number(r[campo]) || 0 : 0; });
  const max = Math.max(...dados, 1);
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8, flexWrap: "wrap" }}><div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate)" }}>{titulo} — evolução {ano}</div><div style={{ fontSize: 11, color: "var(--muted)" }}>Clique num mês para ver os dados dele</div>{sel && <button onClick={() => onSel(null)} style={{ marginLeft: "auto", background: "none", border: "none", color: "var(--blue-light)", fontWeight: 700, fontSize: 11.5, cursor: "pointer", fontFamily: "var(--font-sans)" }}>Voltar ao último mês</button>}</div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 96 }}>
        {dados.map((v, i) => { const m = `${ano}-${String(i + 1).padStart(2, "0")}`; const on = sel === m; return (
          <div key={i} onClick={() => onSel && onSel(on ? null : m)} title={MESES[i] + "/" + ano} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer" }}>
            <div style={{ fontSize: 9, color: on ? "var(--ink)" : "var(--slate)", fontWeight: on ? 800 : 400, height: 11 }}>{v ? (v >= 1000 ? Math.round(v / 100) / 10 + "k" : v) : ""}</div>
            <div style={{ width: "100%", height: Math.max((v / max) * 62, 2), background: v ? color : "var(--line)", borderRadius: 3, opacity: sel && !on ? 0.4 : 1, outline: on ? "2px solid var(--ink)" : "none", outlineOffset: 1 }} />
            <div style={{ fontSize: 9.5, color: on ? "var(--ink)" : "var(--muted)", fontWeight: on ? 800 : 400 }}>{MESES[i]}</div>
          </div>
        ); })}
      </div>
    </div>
  );
}

function Canais({ canais, setCanais }) {
  const { Card, KpiCard, SectionHeader, Button, Select } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { Icon, fmtY, exportCSV, parseCSV } = window.PortalUI;
  const [ano, setAno] = React.useState(new Date().getFullYear());
  const [modal, setModal] = React.useState(null);
  const fileRef = React.useRef(null);
  const [importDef, setImportDef] = React.useState(null);
  const [msg, setMsg] = React.useState("");
  const [sel, setSel] = React.useState({});
  const [mesF, setMesF] = React.useState("");
  const noPeriodo = (d) => { const s = String(d || ""); return s.slice(0, 4) === String(ano) && (!mesF || s.slice(5, 7) === mesF); };
  const selCanal = (canal) => (m) => setSel((s) => ({ ...s, [canal]: m }));
  const C = { podcast: { mensal: [], episodios: [] }, revista: { edicoes: [] }, news: { edicoes: [] }, instagram: { mensal: [] }, linkedin: { mensal: [] }, ...canais };
  const lista = (def) => (C[def.path[0]] || {})[def.path[1]] || [];
  const setLista = (def, fn) => setCanais((prev) => { const p = { ...C, ...prev }; return { ...p, [def.path[0]]: { ...p[def.path[0]], [def.path[1]]: fn(((p[def.path[0]] || {})[def.path[1]]) || []) } }; });
  const salvar = (key, f, idx) => { const def = CANAIS_DEF[key]; setLista(def, (arr) => { const key0 = def.campos[0][0]; let out = idx != null ? arr.map((x, i) => (i === idx ? f : x)) : [...arr.filter((x) => def.campos[0][2] !== "month" || x[key0] !== f[key0]), f]; return out.sort((a, b) => String(a[key0]).localeCompare(String(b[key0]), "pt-BR", { numeric: true })); }); setModal(null); };
  const excluir = (key, idx) => { setLista(CANAIS_DEF[key], (arr) => arr.filter((_, i) => i !== idx)); setModal(null); };
  const modelo = (key) => { const d = CANAIS_DEF[key]; exportCSV(`modelo-${key}.csv`, d.campos.map((c) => c[1] + (c[2] === "month" ? " (AAAA-MM)" : c[2] === "date" ? " (AAAA-MM-DD ou DD/MM/AAAA)" : "")), []); };
  const importar = (e) => {
    const file = e.target.files[0]; if (!file || !importDef) return;
    const reader = new FileReader();
    reader.onload = () => {
      const def = CANAIS_DEF[importDef];
      const rows = parseCSV(reader.result).map((r) => { const o = {}; def.campos.forEach(([k, , t], i) => { let v = r[i] || ""; if (t === "number") v = v === "" ? "" : Number(String(v).replace(/\./g, "").replace(",", ".")); if (t === "date" && /^\d{2}\/\d{2}\/\d{4}$/.test(v)) { const [d, m, y] = v.split("/"); v = `${y}-${m}-${d}`; } o[k] = v; }); return o; }).filter((o) => o[def.campos[0][0]] !== "");
      rows.forEach((r) => salvar(importDef, r));
      setMsg(`${rows.length} linha(s) importada(s).`); setTimeout(() => setMsg(""), 3000);
    };
    reader.readAsText(file, "utf-8"); e.target.value = "";
  };
  const ultimo = (arr) => arr.slice().sort((a, b) => String(a.mes).localeCompare(String(b.mes))).pop() || {};
  const num = (v) => (v === undefined || v === "" ? "—" : Number(v).toLocaleString("pt-BR"));
  const Acoes = ({ k, extra }) => (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {extra}
      <Button variant="primary" icon={<Icon name="plus" size={14} />} onClick={() => setModal({ key: k })} style={{ padding: "6px 12px", fontSize: 12 }}>Inserir dado</Button>
      <Button variant="ghost" icon={<Icon name="upload" size={14} />} onClick={() => { setImportDef(k); setTimeout(() => fileRef.current && fileRef.current.click(), 0); }} style={{ padding: "6px 12px", fontSize: 12 }}>Importar planilha</Button>
      <Button variant="icon" onClick={() => modelo(k)} title="Baixar modelo de importação"><Icon name="file-spreadsheet" size={15} /></Button>
    </div>
  );
  const Tabela = ({ k, cols }) => {
    const def = CANAIS_DEF[k]; const campoData = def.campos.find((c) => c[2] === "month" || c[2] === "date"); const arr = lista(def).map((r, i) => ({ r, i })).filter(({ r }) => !campoData || noPeriodo(r[campoData[0]]));
    if (!arr.length) return <div style={{ fontSize: 12.5, color: "var(--muted)", padding: "10px 0 18px" }}>{lista(def).length ? "Nenhum dado neste período." : "Nenhum dado lançado ainda."}</div>;
    return (
      <Card style={{ padding: 0, marginBottom: 12, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, fontFamily: "var(--font-sans)" }}>
            <thead><tr style={{ background: "var(--canvas)", textAlign: "left", color: "var(--slate)" }}>{def.campos.map((c) => <th key={c[0]} style={{ padding: "9px 14px", fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>{c[1]}</th>)}<th></th></tr></thead>
            <tbody>{arr.map(({ r, i }) => (
              <tr key={i} style={{ borderTop: "1px solid var(--line)" }}>
                {def.campos.map(([kk, , t]) => <td key={kk} style={{ padding: "9px 14px" }}>{t === "date" ? fmtY(r[kk]) : t === "number" ? num(r[kk]) : r[kk] || "—"}</td>)}
                <td style={{ padding: "4px 10px", textAlign: "right" }}><Button variant="icon" onClick={() => setModal({ key: k, idx: i })}><Icon name="pencil" size={14} /></Button></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </Card>
    );
  };
  const pick = (canal, arr) => { const m = sel[canal] || (mesF ? `${ano}-${mesF}` : null); if (m) return arr.find((x) => x.mes === m) || { mes: m }; const doAno = arr.filter((x) => String(x.mes || "").slice(0, 4) === String(ano)); return doAno.length ? ultimo(doAno) : { mes: "" }; };
  const acum = (arr, campo, m) => (m && m.mes ? arr.filter((x) => x.mes && x.mes.slice(0, 4) === m.mes.slice(0, 4) && x.mes <= m.mes).reduce((s, x) => s + (Number(x[campo]) || 0), 0) : undefined);
  const acumLabel = (m) => (m && m.mes ? `Jan a ${MESES[Number(m.mes.slice(5, 7)) - 1]}/${m.mes.slice(0, 4)}` : "—");
  const pM = pick("podcast", C.podcast.mensal), iM = pick("instagram", C.instagram.mensal), lM = pick("linkedin", C.linkedin.mensal);
  const mesLabel = (m) => (m && m.mes ? `${MESES[Number(m.mes.slice(5, 7)) - 1]}/${m.mes.slice(0, 4)}` : "—");
  const revP = C.revista.edicoes.filter((e) => noPeriodo(e.pub));
  const ultEd = revP.slice().sort((a, b) => String(a.pub).localeCompare(String(b.pub))).pop() || {};
  const newsEd = C.news.edicoes.filter((e) => noPeriodo(e.pub)).sort((a, b) => String(a.pub).localeCompare(String(b.pub)));
  const ultNews = newsEd[newsEd.length - 1] || {};
  const newsAno = newsEd;
  const somaNews = (arr, campo) => arr.reduce((s, e) => s + (Number(e[campo]) || 0), 0);
  const totNews = (e) => (Number(e.vInsta) || 0) + (Number(e.vLinkedin) || 0) + (Number(e.vEmail) || 0);
  const periodoLabel = mesF ? `${MESES[Number(mesF) - 1]}/${ano}` : String(ano);
  const bloco = { marginBottom: 30 };
  const head = (titulo, k, extra) => <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 8 }}><SectionHeader>{titulo}</SectionHeader><Acoes k={k} extra={extra} /></div>;

  return (
    <div>
      <input ref={fileRef} type="file" accept=".csv,text/csv" style={{ display: "none" }} onChange={importar} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
        <div>
          <h1 style={{ fontSize: 23, fontWeight: 800, color: "var(--ink)", margin: 0, fontFamily: "var(--font-sans)" }}>Canais de Comunicação</h1>
          <div style={{ fontSize: 13.5, color: "var(--slate)", marginTop: 3 }}>Indicadores dos canais próprios. Lance os dados do mês em "Inserir dado" ou importe a planilha.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {msg && <span style={{ color: "var(--success)", fontWeight: 700, fontSize: 12.5 }}>{msg}</span>}
          <select value={mesF} onChange={(e) => { setMesF(e.target.value); setSel({}); }} style={{ ...window.PortalUI.inputBase, width: 150 }}><option value="">Todos os meses</option>{MESES.map((m, i) => <option key={m} value={String(i + 1).padStart(2, "0")}>{m}</option>)}</select>
          <select value={String(ano)} onChange={(e) => { setAno(Number(e.target.value)); setSel({}); }} style={{ ...window.PortalUI.inputBase, width: 110 }}>{Array.from({ length: Math.max(new Date().getFullYear() + 1 - 2024 + 1, 3) }, (_, i) => 2024 + i).map((y) => <option key={y} value={String(y)}>{y}</option>)}</select>
        </div>
      </div>

      <div style={bloco}>
        {head("Podcast Nosso Legado", "podcast_mensal", <Button variant="ghost" icon={<Icon name="mic" size={14} />} onClick={() => setModal({ key: "podcast_ep" })} style={{ padding: "6px 12px", fontSize: 12 }}>Novo episódio</Button>)}
        <div style={{ display: "flex", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
          <KpiCard label="Inscritos" value={num(pM.inscritos)} sub={mesLabel(pM)} icon={<Icon name="mic" size={16} />} />
          <KpiCard label="Views no mês" value={num(pM.views)} sub={mesLabel(pM)} color="var(--nat-produto)" />
          <KpiCard label="Views acumuladas" value={num(acum(C.podcast.mensal, "views", pM))} sub={acumLabel(pM)} color="var(--nat-produto)" />
          <KpiCard label="Tempo médio" value={pM.tempoMedio || "—"} sub={mesLabel(pM)} color="var(--nat-produto)" />
          <KpiCard label="Episódios" value={C.podcast.episodios.filter((e) => noPeriodo(e.pub)).length} sub={periodoLabel} />
        </div>
        <Card style={{ padding: 18, marginBottom: 12 }}><EvolucaoMensal titulo="Views do podcast" mensal={C.podcast.mensal} campo="views" color="var(--nat-produto)" ano={ano} sel={sel.podcast} onSel={selCanal("podcast")} /></Card>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate)", margin: "4px 0 8px" }}>Episódios</div>
        <Tabela k="podcast_ep" />
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate)", margin: "4px 0 8px" }}>Dados mensais</div>
        <Tabela k="podcast_mensal" />
      </div>

      <div style={bloco}>
        {head("Revista Na Direção", "revista")}
        <div style={{ display: "flex", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
          <KpiCard label="Última edição" value={ultEd.edicao || "—"} sub={ultEd.pub ? fmtY(ultEd.pub) : ""} icon={<Icon name="book-open" size={16} />} />
          <KpiCard label="Acessos da última edição" value={num(ultEd.acessos)} color="var(--nat-produto)" />
          <KpiCard label="Edições" value={revP.length} sub={periodoLabel} />
          <KpiCard label="Acessos no período" value={num(revP.reduce((s, e) => s + (Number(e.acessos) || 0), 0))} sub={periodoLabel} color="var(--nat-produto)" />
        </div>
        <Tabela k="revista" />
      </div>

      <div style={bloco}>
        {head("Na Direção News", "news")}
        <div style={{ display: "flex", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
          <KpiCard label="Última edição" value={ultNews.edicao || "—"} sub={ultNews.pub ? fmtY(ultNews.pub) : ""} icon={<Icon name="newspaper" size={16} />} />
          <KpiCard label="Visualizações (Instagram)" value={num(ultNews.vInsta)} sub={ultNews.edicao ? "última edição" : ""} color="var(--blue-light)" />
          <KpiCard label="Visualizações (LinkedIn)" value={num(ultNews.vLinkedin)} sub={ultNews.edicao ? "última edição" : ""} color="var(--orange)" />
          <KpiCard label="Visualizações (E-mail)" value={num(ultNews.vEmail)} sub={ultNews.edicao ? "última edição" : ""} color="var(--nat-produto)" />
          <KpiCard label={"Total no período · " + periodoLabel} value={num(newsAno.reduce((s, e) => s + totNews(e), 0))} sub={`Insta ${num(somaNews(newsAno, "vInsta"))} · LinkedIn ${num(somaNews(newsAno, "vLinkedin"))} · E-mail ${num(somaNews(newsAno, "vEmail"))}`} color="var(--success)" />
          <KpiCard label="Edições" value={newsEd.length} sub={periodoLabel} />
        </div>
        <Tabela k="news" />
      </div>

      <div style={bloco}>
        {head("Instagram", "instagram")}
        <div style={{ display: "flex", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
          <KpiCard label="Seguidores" value={num(iM.seguidores)} sub={mesLabel(iM)} icon={<Icon name="at-sign" size={16} />} />
          <KpiCard label="Alcance" value={num(iM.alcance)} sub={mesLabel(iM)} color="var(--nat-produto)" />
          <KpiCard label="Visualizações" value={num(iM.impressoes)} sub={mesLabel(iM)} color="var(--nat-produto)" />
          <KpiCard label="Visualizações acumuladas" value={num(acum(C.instagram.mensal, "impressoes", iM))} sub={acumLabel(iM)} color="var(--nat-produto)" />
          <KpiCard label="Engajamento" value={iM.engajamento !== undefined && iM.engajamento !== "" ? iM.engajamento + "%" : "—"} sub={mesLabel(iM)} color="var(--success)" />
        </div>
        <Card style={{ padding: 18, marginBottom: 12 }}><EvolucaoMensal titulo="Seguidores Instagram" mensal={C.instagram.mensal} campo="seguidores" color="var(--blue-light)" ano={ano} sel={sel.instagram} onSel={selCanal("instagram")} /></Card>
        <Tabela k="instagram" />
      </div>

      <div style={bloco}>
        {head("LinkedIn", "linkedin")}
        <div style={{ display: "flex", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
          <KpiCard label="Seguidores" value={num(lM.seguidores)} sub={mesLabel(lM)} icon={<Icon name="briefcase" size={16} />} />
          <KpiCard label="Visitantes únicos" value={num(lM.visitantes)} sub={mesLabel(lM)} color="var(--nat-produto)" />
          <KpiCard label="Visitantes acumulados" value={num(acum(C.linkedin.mensal, "visitantes", lM))} sub={acumLabel(lM)} color="var(--nat-produto)" />
          <KpiCard label="Engajamento" value={lM.engajamento !== undefined && lM.engajamento !== "" ? lM.engajamento + "%" : "—"} sub={mesLabel(lM)} color="var(--success)" />
        </div>
        <Card style={{ padding: 18, marginBottom: 12 }}><EvolucaoMensal titulo="Seguidores LinkedIn" mensal={C.linkedin.mensal} campo="seguidores" color="var(--orange)" ano={ano} sel={sel.linkedin} onSel={selCanal("linkedin")} /></Card>
        <Tabela k="linkedin" />
      </div>

      {modal && <InserirDadoModal def={CANAIS_DEF[modal.key]} inicial={modal.idx != null ? lista(CANAIS_DEF[modal.key])[modal.idx] : null} onSave={(f) => salvar(modal.key, f, modal.idx)} onDelete={() => excluir(modal.key, modal.idx)} onClose={() => setModal(null)} />}
    </div>
  );
}
window.Canais = Canais;
