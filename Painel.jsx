function Painel({ inis, ativs, chamados, users, user, ausencias, abrirAusencias, iniById, abrirAtiv, patchAtiv, onNavigate, podeAtender, respAtual, isAdmin, vazio, onCarregarExemplo }) {
  const { Card, KpiCard, SectionHeader, ProgressBar, Select, Button, StatusBadge } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const { Icon, TODAY, nomeCurto, fmtPeriodo, NatChip, APROVADORES, MICHELE, JULIANA, votar } = P;
  const me = user.nome;
  const [fIni, setFIni] = React.useState("");
  const [fResp, setFResp] = React.useState("");
  const [fDe, setFDe] = React.useState("");
  const [fAte, setFAte] = React.useState("");

  const responsaveis = Array.from(new Set([...users.map((u) => u.nome), ...ativs.map((a) => a.resp).filter(Boolean)]));
  const passa = (a) => (!fIni || a.iniId === fIni) && (!fResp || a.resp === fResp) && (!fDe || (a.e || a.s || "") >= fDe) && (!fAte || (a.s || "") <= fAte);
  const ativsF = ativs.filter(passa);
  const inisF = fIni ? inis.filter((i) => i.id === fIni) : inis;

  const allPts = ativsF.map((a) => ({ ...a, pontos: 1 }));
  const totalAtivs = allPts.length;
  const entregues = ativsF.filter((a) => P.concluido(a.status)).length;
  const comPrazo = ativsF.filter((a) => a.e && a.e <= TODAY);
  const pctPrazo = comPrazo.length ? Math.round((comPrazo.filter((a) => P.concluido(a.status)).length / comPrazo.length) * 100) : 0;
  const bloqueadas = ativsF.filter((a) => !P.concluido(a.status) && (a.status === "Aguardando terceiro" || a.status === "Bloqueado"));
  const atrasadas = ativsF.filter((a) => a.atrasada);
  const projAtivos = inisF.filter((i) => i.natureza === "Projeto" && i.status !== "Concluído").length;
  const prodAtivos = inisF.filter((i) => i.natureza === "Produto").length;
  const procAbertos = inisF.filter((i) => i.natureza === "Processo").length;

  const mixNat = ["Projeto", "Produto", "Processo", "Atendimento"].map((n) => ({ n, v: allPts.filter((x) => x.nat === n).reduce((s, x) => s + x.pontos, 0) }));
  const natColor = { Projeto: "var(--nat-projeto)", Produto: "var(--nat-produto)", Processo: "var(--nat-processo)", Atendimento: "var(--blue-dark)" };
  const maxNat = Math.max(...mixNat.map((m) => m.v), 1);
  const mixCx = P.CATEGORIAS.map((k) => ({ c: k.v, label: P.catLabel(k.v), def: k.def, v: allPts.filter((x) => x.cx === k.v).reduce((s, x) => s + x.pontos, 0) }));
  const maxCx = Math.max(...mixCx.map((m) => m.v), 1);
  const propria = allPts.filter((x) => iniById(x.iniId).origem === "Própria").reduce((s, x) => s + x.pontos, 0);
  const outras = allPts.filter((x) => iniById(x.iniId).origem === "Outra área").reduce((s, x) => s + x.pontos, 0);
  const porArea = {}; allPts.forEach((x) => { const i = iniById(x.iniId); if (i.origem === "Outra área") porArea[i.area] = (porArea[i.area] || 0) + x.pontos; });

  const semana0 = P.mondayOf(TODAY), semana1 = P.addDays(semana0, 6);
  const pessoas = {};
  ativsF.filter((a) => !P.concluido(a.status) && P.overlaps(a.s, a.e, semana0, semana1)).forEach((a) => { const p = pessoas[a.resp || "—"] || (pessoas[a.resp || "—"] = { qtd: 0, travadas: 0, atrasadas: 0 }); p.qtd += 1; if (a.atrasada) p.atrasadas += 1; if (a.depAguardando || a.status === "Aguardando terceiro") p.travadas += 1; });
  const pessoasArr = Object.entries(pessoas).sort((a, b) => b[1].qtd - a[1].qtd);

  const aprovPendentes = ativs.filter((a) => a.aprov === "Aguardando");
  const minhasAprov = aprovPendentes.filter((a) => APROVADORES.includes(me) && !(a.raw.aprovacao.votos || {})[me]);
  const meusAceites = ativs.filter((a) => a.resp === me && a.pendenteAceite);
  const novosChamados = podeAtender ? chamados.filter((c) => c.status === "Novo") : [];

  const Linha = ({ a, children, color }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, padding: "8px 0", borderBottom: "1px solid var(--canvas)" }}>
      <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 700, color: color || "var(--ink)" }}>{a.titulo}</div><div style={{ fontSize: 11, color: "var(--muted)" }}>{a.grupo} · {nomeCurto(a.resp)} · {fmtPeriodo(a.s, a.e)}</div></div>
      {children}
      <Button variant="ghost" style={{ padding: "4px 10px", fontSize: 11.5 }} onClick={() => abrirAtiv(a.key)}>Abrir</Button>
    </div>
  );

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 23, fontWeight: 800, color: "var(--ink)", margin: 0, fontFamily: "var(--font-sans)" }}>Visão Geral</h1>
        <div style={{ fontSize: 13.5, color: "var(--slate)", marginTop: 3 }}>Tudo o que está com a equipe — quem está com o quê, o que depende de quem e o que precisa de atenção.</div>
      </div>

      {vazio && (
        <Card style={{ padding: 22, marginBottom: 16, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 320px" }}><div style={{ fontWeight: 800, fontSize: 15 }}>O portal está zerado</div><div style={{ fontSize: 13, color: "var(--slate)", marginTop: 4 }}>Comece cadastrando suas iniciativas (projetos, produções e processos) e depois lance as atividades em Atividades.</div></div>
          <Button variant="primary" icon={<Icon name="plus-circle" size={15} />} onClick={() => onNavigate("iniciativas")}>Cadastrar iniciativa</Button>
          {isAdmin && <Button variant="ghost" onClick={onCarregarExemplo}>Carregar dados de exemplo</Button>}
        </Card>
      )}

      {(minhasAprov.length > 0 || meusAceites.length > 0 || novosChamados.length > 0) && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 14, marginBottom: 16 }}>
          {minhasAprov.length > 0 && (
            <Card style={{ padding: 18, border: "2px solid var(--orange)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}><Icon name="shield-check" size={18} color="var(--orange)" /><b style={{ fontSize: 15 }}>{minhasAprov.length} item(ns) aguardando sua aprovação</b></div>
              {minhasAprov.map((a) => (
                <Linha key={a.key} a={a}>
                  <Button variant="primary" style={{ padding: "4px 10px", fontSize: 11.5 }} onClick={() => patchAtiv(a.key, { aprovacao: votar(a.raw, me, true, me) })}>Aprovar</Button>
                </Linha>
              ))}
              {me === MICHELE && <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 8 }}>Para registrar a aprovação da Juliana com print, use "Abrir".</div>}
            </Card>
          )}
          {meusAceites.length > 0 && (
            <Card style={{ padding: 18, border: "2px solid var(--blue-light)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}><Icon name="bell" size={18} color="var(--blue-light)" /><b style={{ fontSize: 15 }}>{meusAceites.length} atividade(s) nova(s) para você aceitar</b></div>
              {meusAceites.map((a) => (
                <Linha key={a.key} a={a}>
                  <Button variant="primary" style={{ padding: "4px 10px", fontSize: 11.5 }} onClick={() => patchAtiv(a.key, { aceita: true, nova: false })}>Aceitar</Button>
                </Linha>
              ))}
            </Card>
          )}
          {novosChamados.length > 0 && (
            <Card style={{ padding: 18, border: "2px solid var(--blue-dark)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}><Icon name="headset" size={18} color="var(--blue-dark)" /><b style={{ fontSize: 15 }}>{novosChamados.length} chamado(s) novo(s)</b></div>
              {respAtual !== P.GESTORA_ATENDIMENTO && <div style={{ fontSize: 11.5, color: "var(--orange)", fontWeight: 700, marginBottom: 6 }}>Atendimentos com {nomeCurto(respAtual)} enquanto {nomeCurto(P.GESTORA_ATENDIMENTO)} está ausente.</div>}
              {novosChamados.map((c) => (
                <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, padding: "8px 0", borderBottom: "1px solid var(--canvas)" }}>
                  <div style={{ flex: 1 }}><div style={{ fontWeight: 700 }}>{c.assunto}</div><div style={{ fontSize: 11, color: "var(--muted)" }}>{c.id} · {c.area} · {c.solicitante} · urgência {c.urgencia || "—"}</div></div>
                  <Button variant="ghost" style={{ padding: "4px 10px", fontSize: 11.5 }} onClick={() => onNavigate("atendimentos", { chamadoId: c.id })}>Abrir</Button>
                </div>
              ))}
            </Card>
          )}
        </div>
      )}

      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        {[["iniciativas", "Nova iniciativa", "plus-circle"], ["atividades", "Lançar atividade", "calendar-plus"], ...(podeAtender ? [["atendimentos", "Atendimentos", "headset"]] : []), ["report", "Gerar report", "file-text"]].map(([v, label, icon]) => (
          <button key={v} onClick={() => onNavigate(v)} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 14px", borderRadius: 8, border: "1px solid var(--line)", background: "#fff", color: "var(--blue-dark)", fontWeight: 700, fontSize: 12.5, cursor: "pointer", fontFamily: "var(--font-sans)" }}>
            <Icon name={icon} size={15} /> {label}
          </button>
        ))}
      </div>

      <Card style={{ padding: 14, marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <Icon name="filter" size={15} color="var(--slate)" />
          <Select value={fIni} onChange={(e) => setFIni(e.target.value)} style={{ width: 210 }}>
            <option value="">Todas as iniciativas</option>
            {inis.map((i) => <option key={i.id} value={i.id}>{i.nome}</option>)}
          </Select>
          <Select value={fResp} onChange={(e) => setFResp(e.target.value)} style={{ width: 210 }}>
            <option value="">Toda a equipe</option>
            {responsaveis.map((r) => <option key={r} value={r}>{r}</option>)}
          </Select>
          <input type="date" value={fDe} onChange={(e) => setFDe(e.target.value)} style={{ padding: "8px 10px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 13, fontFamily: "var(--font-sans)" }} />
          <span style={{ color: "var(--muted)", fontSize: 12 }}>até</span>
          <input type="date" value={fAte} onChange={(e) => setFAte(e.target.value)} style={{ padding: "8px 10px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 13, fontFamily: "var(--font-sans)" }} />
          {(fIni || fResp || fDe || fAte) && <Button variant="ghost" onClick={() => { setFIni(""); setFResp(""); setFDe(""); setFAte(""); }}>Limpar</Button>}
        </div>
      </Card>

      <Card style={{ padding: 18, marginBottom: 16, background: "var(--soft-blue)", border: "1px solid var(--soft-blue)" }}>
        <SectionHeader>Resumo executivo</SectionHeader>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
          <div style={{ fontSize: 40, fontWeight: 800, color: "var(--blue-dark)", lineHeight: 1 }}>{pctPrazo}%</div>
          <p style={{ margin: 0, fontSize: 13.5, color: "var(--ink)", lineHeight: 1.6, flex: "1 1 320px" }}>
            das atividades com prazo vencido foram concluídas. A operação mantém <b>{projAtivos}</b> projeto(s), <b>{prodAtivos}</b> produção(ões) e <b>{procAbertos}</b> processo(s), com <b>{totalAtivs}</b> atividade(s) no filtro{bloqueadas.length ? <> · <b style={{ color: "var(--orange)" }}>{bloqueadas.length}</b> aguardando terceiros</> : ""}{aprovPendentes.length ? <> · <b style={{ color: "var(--orange)" }}>{aprovPendentes.length}</b> aguardando aprovação</> : ""}.
          </p>
        </div>
      </Card>

      <div style={{ display: "flex", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
        <KpiCard label="Projetos ativos" value={projAtivos} sub="em andamento" icon={<Icon name="folder-kanban" size={16} />} />
        <KpiCard label="Produções" value={prodAtivos} sub="em ciclos" color="var(--nat-produto)" icon={<Icon name="repeat" size={16} />} />
        <KpiCard label="Processos" value={procAbertos} sub="rotinas" color="var(--nat-processo)" icon={<Icon name="list-checks" size={16} />} />
        <KpiCard label="Atrasadas" value={atrasadas.length} sub="prazo vencido" color={atrasadas.length ? "var(--danger)" : "var(--slate)"} icon={<Icon name="alert-triangle" size={16} />} />
        <KpiCard label="Concluídas" value={entregues} sub="no filtro atual" color="var(--success)" icon={<Icon name="check-circle-2" size={16} />} />
      </div>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 14 }}>
        <Card style={{ padding: 18, flex: "1 1 340px" }}>
          <SectionHeader>Quem está com o quê · esta semana</SectionHeader>
          {pessoasArr.length === 0 && <div style={{ fontSize: 12.5, color: "var(--slate)" }}>Sem atividades abertas nesta semana.</div>}
          {pessoasArr.length > 0 && (
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, fontFamily: "var(--font-sans)" }}>
              <thead><tr style={{ textAlign: "left", color: "var(--slate)" }}>{["Responsável", "Atividades", "Travadas", "Atrasadas"].map((h) => <th key={h} style={{ padding: "6px 8px 6px 0", fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".3px", borderBottom: "1px solid var(--line)" }}>{h}</th>)}</tr></thead>
              <tbody>
                {pessoasArr.map(([nome, d]) => {
                  return (
                    <tr key={nome} style={{ borderBottom: "1px solid var(--canvas)", cursor: "pointer" }} onClick={() => setFResp(nome)}>
                      <td style={{ padding: "8px 8px 8px 0", fontWeight: 600 }}>{nomeCurto(nome)}{P.ausenteEm(ausencias, nome, TODAY) && <span style={{ marginLeft: 6 }}><P.Chip color="#fff" bg="var(--slate)">{(P.ausenteEm(ausencias, nome, TODAY).tipo || "ausente").toLowerCase()}</P.Chip></span>}</td>
                      <td style={{ padding: 8 }}>{d.qtd}</td>
                      <td style={{ padding: 8, color: d.travadas ? "var(--warning)" : "var(--muted)", fontWeight: 700 }}>{d.travadas}</td>
                      <td style={{ padding: 8, fontWeight: 700, color: d.atrasadas ? "var(--danger)" : "var(--muted)" }}>{d.atrasadas}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </Card>
        <Card style={{ padding: 18, flex: "1 1 260px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><SectionHeader>Ausências · próximos 30 dias</SectionHeader><Button variant="ghost" style={{ padding: "4px 10px", fontSize: 11.5 }} onClick={abrirAusencias}>Cadastrar</Button></div>
          {(() => { const lst = (ausencias || []).filter((a) => P.overlaps(a.de, a.ate, TODAY, P.addDays(TODAY, 30))).sort((a, b) => a.de.localeCompare(b.de)); return lst.length === 0 ? <div style={{ fontSize: 12.5, color: "var(--slate)" }}>Ninguém ausente no período.</div> : lst.map((a) => (
            <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, padding: "7px 0", borderBottom: "1px solid var(--canvas)" }}>
              <b style={{ flex: 1 }}>{nomeCurto(a.nome)}</b><span style={{ color: "var(--slate)" }}>{a.tipo || "Ausente"}</span><span style={{ fontWeight: 700, color: a.de <= TODAY ? "var(--orange)" : "var(--ink)" }}>{fmtPeriodo(a.de, a.ate)}</span>
            </div>
          )); })()}
        </Card>
        <Card style={{ padding: 18, flex: "1 1 340px" }}>
          <SectionHeader>Alertas</SectionHeader>
          {bloqueadas.length === 0 && atrasadas.length === 0 && <div style={{ fontSize: 12.5, color: "var(--slate)" }}>Sem pendências críticas no momento.</div>}
          {atrasadas.map((a) => <Linha key={"a" + a.key} a={a} color="var(--danger)"><StatusBadge status="Atrasado" /></Linha>)}
          {bloqueadas.map((a) => <Linha key={"b" + a.key} a={a} color="var(--warning)"><StatusBadge status={a.status} /></Linha>)}
        </Card>
      </div>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 14 }}>
        <Card style={{ padding: 18, flex: "1 1 260px" }}>
          <SectionHeader>Atividades por natureza</SectionHeader>
          {mixNat.map((m) => (
            <div key={m.n} style={{ marginBottom: 11 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 4 }}><span style={{ fontWeight: 600, color: natColor[m.n] }}>{P.NAT_LABEL[m.n]}</span><b>{m.v}</b></div>
              <ProgressBar pct={m.v / maxNat} color={natColor[m.n]} width={"100%"} />
            </div>
          ))}
        </Card>
        <Card style={{ padding: 18, flex: "1 1 260px" }}>
          <SectionHeader>Distribuição por categoria</SectionHeader>
          <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 10 }}>Atividades classificadas em P · M · G</div>
          {mixCx.map((m) => (
            <div key={m.c} style={{ marginBottom: 11 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 4 }}><span style={{ fontWeight: 600 }} title={m.def}>{m.label}</span><b>{m.v}</b></div>
              <ProgressBar pct={m.v / maxCx} color="var(--blue-light)" width={"100%"} />
            </div>
          ))}
        </Card>
        <Card style={{ padding: 18, flex: "1 1 260px" }}>
          <SectionHeader>Origem das demandas</SectionHeader>
          <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
            <div style={{ flex: propria || 1, background: "var(--blue-dark)", color: "#fff", padding: "10px 12px", borderRadius: 8 }}><div style={{ fontSize: 20, fontWeight: 800 }}>{propria + outras ? Math.round(propria / (propria + outras) * 100) : 0}%</div><div style={{ fontSize: 11 }}>Própria</div></div>
            <div style={{ flex: outras || 1, background: "var(--orange)", color: "#fff", padding: "10px 12px", borderRadius: 8 }}><div style={{ fontSize: 20, fontWeight: 800 }}>{propria + outras ? Math.round(outras / (propria + outras) * 100) : 0}%</div><div style={{ fontSize: 11 }}>Apoio a outras áreas</div></div>
          </div>
          {Object.entries(porArea).map(([a, v]) => <div key={a} style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, padding: "4px 0", borderBottom: "1px solid var(--canvas)" }}><span style={{ color: "var(--slate)" }}>{a}</span><b>{v}</b></div>)}
        </Card>
      </div>
    </div>
  );
}
window.Painel = Painel;
