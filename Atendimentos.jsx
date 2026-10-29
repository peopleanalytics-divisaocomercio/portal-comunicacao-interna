const urgChip = (u) => { const { Chip, URG_COLOR } = window.PortalUI; return u ? <Chip color="#fff" bg={URG_COLOR[u] || "var(--slate)"} icon={u === "Urgente" ? "siren" : "gauge"}>{u}</Chip> : null; };

function GuiaChamado() {
  const passos = [["file-pen-line", "Você descreve o que precisa", "Assunto, descrição e o nível de urgência."], ["search-check", "A Comunicação analisa", "A equipe avalia e define o prazo de entrega com você."], ["message-circle", "Você recebe a confirmação", "Pelo WhatsApp, com o número do chamado e um link de acompanhamento."], ["check-circle-2", "Entrega e avaliação", "Ao concluir, você avalia o atendimento."]];
  const { Icon } = window.PortalUI;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 8, marginBottom: 16 }}>
      {passos.map(([ic, t, d], i) => (
        <div key={i} style={{ background: "var(--canvas)", borderRadius: 10, padding: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--blue-dark)", fontWeight: 800, fontSize: 12 }}><Icon name={ic} size={14} /> {i + 1}. {t}</div>
          <div style={{ fontSize: 11.5, color: "var(--slate)", marginTop: 4, lineHeight: 1.4 }}>{d}</div>
        </div>
      ))}
    </div>
  );
}

function NovoChamadoModal({ onSave, onClose }) {
  const { Modal, Field, Input, Select, Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { AREAS, TIPOS_ATENDIMENTO, URGENCIAS, URG_COLOR, inputBase } = window.PortalUI;
  const [f, setF] = React.useState({ area: "", tipo: TIPOS_ATENDIMENTO[0], urgencia: "Média", assunto: "", descricao: "", whatsapp: "", solicitante: "" });
  const set = (k, v) => setF({ ...f, [k]: v });
  const ok = f.assunto && f.solicitante && f.descricao;
  return (
    <Modal title="Abrir chamado" sub="Para pedidos que chegaram pessoalmente, por telefone ou WhatsApp — preencha em nome do solicitante." onClose={onClose} width={600}>
      <GuiaChamado />
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}><Field label="Solicitante"><Input value={f.solicitante} onChange={(e) => set("solicitante", e.target.value)} /></Field></div>
        <div style={{ flex: 1 }}><Field label="WhatsApp do solicitante"><Input value={f.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="(27) 99999-9999" /></Field></div>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}><Field label="Área / empresa"><Input value={f.area} maxLength={120} onChange={(e) => set("area", e.target.value)} placeholder="ex.: RH Kurumá" /></Field></div>
        <div style={{ flex: 1 }}><Field label="Tipo de solicitação"><Select value={f.tipo} onChange={(e) => set("tipo", e.target.value)}>{TIPOS_ATENDIMENTO.map((t) => <option key={t}>{t}</option>)}</Select></Field></div>
      </div>
      <Field label="Assunto"><Input value={f.assunto} onChange={(e) => set("assunto", e.target.value)} /></Field>
      <Field label="Descrição"><textarea style={{ ...inputBase, minHeight: 90, resize: "vertical", fontSize: 13.5 }} value={f.descricao} onChange={(e) => set("descricao", e.target.value)} placeholder="O que precisa ser feito, para quem, onde será usado..." /></Field>
      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate)", marginBottom: 6 }}>Nível de urgência</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 6, marginBottom: 16 }}>
        {URGENCIAS.map(([u, d]) => (
          <button key={u} onClick={() => set("urgencia", u)} style={{ textAlign: "left", padding: "8px 10px", borderRadius: 8, border: `2px solid ${f.urgencia === u ? URG_COLOR[u] : "var(--line)"}`, background: f.urgencia === u ? "var(--canvas)" : "#fff", cursor: "pointer", fontFamily: "var(--font-sans)" }}>
            <div style={{ fontWeight: 800, fontSize: 12.5, color: URG_COLOR[u] }}>{u}</div><div style={{ fontSize: 10.5, color: "var(--slate)", marginTop: 2 }}>{d}</div>
          </button>
        ))}
      </div>
      <Button variant="primary" onClick={() => ok && onSave(f)} style={{ width: "100%", justifyContent: "center", opacity: ok ? 1 : .5 }}>Registrar chamado</Button>
    </Modal>
  );
}

function AusenciasModal({ ausencias, setAusencias, users, user, podeTodos, onClose }) {
  const { Modal, Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { uid, TODAY, addDays, fmtY, nomeCurto, inputBase, respAtendimento, GESTORA_ATENDIMENTO, TIPOS_AUSENCIA, Icon, Chip } = window.PortalUI;
  const [f, setF] = React.useState({ nome: user.nome, tipo: "Férias", de: TODAY, ate: addDays(TODAY, 4), substituto: "", obs: "" });
  const [erro, setErro] = React.useState("");
  const add = () => { if (!f.nome || !f.de || !f.ate) return; if (f.ate < f.de) { setErro("A data final precisa ser depois da inicial."); return; } setErro(""); setAusencias((p) => [...p, { ...f, id: uid("AU"), criadoPor: user.nome }]); setF({ ...f, obs: "" }); };
  const podeEditar = (a) => podeTodos || a.nome === user.nome || a.criadoPor === user.nome;
  const upd = (id, k, v) => setAusencias((p) => p.map((a) => a.id === id ? { ...a, [k]: v } : a));
  const lista = ausencias.filter((a) => a.ate >= addDays(TODAY, -30)).sort((a, b) => a.de.localeCompare(b.de));
  const lbl = (t) => <div style={{ fontSize: 11, fontWeight: 700, color: "var(--slate)", marginBottom: 4 }}>{t}</div>;
  const ehGestora = f.nome === GESTORA_ATENDIMENTO || podeTodos;
  return (
    <Modal title="Férias, folgas e ausências" sub="Cadastre os períodos em que você não estará disponível. Quem for te direcionar uma atividade nessas datas recebe um aviso." onClose={onClose} width={720}>
      <div style={{ background: "var(--canvas)", borderRadius: 10, padding: 14, marginBottom: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 10 }}>
          <div>{lbl("Quem")}<select style={inputBase} value={f.nome} disabled={!podeTodos} onChange={(e) => setF({ ...f, nome: e.target.value })}>{users.map((u) => <option key={u.id} value={u.nome}>{u.nome}</option>)}</select></div>
          <div>{lbl("Tipo")}<select style={inputBase} value={f.tipo} onChange={(e) => setF({ ...f, tipo: e.target.value })}>{TIPOS_AUSENCIA.map((x) => <option key={x}>{x}</option>)}</select></div>
          <div>{lbl("De")}<input type="date" style={inputBase} value={f.de} onChange={(e) => setF({ ...f, de: e.target.value, ate: f.ate < e.target.value ? e.target.value : f.ate })} /></div>
          <div>{lbl("Até")}<input type="date" style={inputBase} value={f.ate} min={f.de} onChange={(e) => setF({ ...f, ate: e.target.value })} /></div>
          {ehGestora && <div>{lbl("Quem cobre os atendimentos (opcional)")}<select style={inputBase} value={f.substituto} onChange={(e) => setF({ ...f, substituto: e.target.value })}><option value="">—</option>{users.filter((u) => u.nome !== f.nome).map((u) => <option key={u.id} value={u.nome}>{u.nome}</option>)}</select></div>}
          <div>{lbl("Observação (opcional)")}<input style={inputBase} value={f.obs} onChange={(e) => setF({ ...f, obs: e.target.value })} placeholder="ex.: só pela manhã" /></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
          <Button variant="primary" icon={<Icon name="plus" size={14} />} onClick={add}>Adicionar período</Button>
          {erro && <span style={{ color: "var(--danger)", fontSize: 12.5, fontWeight: 600 }}>{erro}</span>}
          <span style={{ marginLeft: "auto", fontSize: 11.5, color: "var(--slate)" }}>Atendimentos hoje com <b>{nomeCurto(respAtendimento(ausencias, TODAY))}</b></span>
        </div>
      </div>
      <div style={{ fontSize: 11, fontWeight: 800, color: "var(--slate)", textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 6 }}>Períodos da equipe</div>
      {lista.length === 0 && <div style={{ fontSize: 12.5, color: "var(--muted)" }}>Nenhum período cadastrado.</div>}
      {lista.map((a) => {
        const ed = podeEditar(a); const atual = a.de <= TODAY && a.ate >= TODAY; const passado = a.ate < TODAY;
        return (
          <div key={a.id} style={{ display: "grid", gridTemplateColumns: "minmax(0,1.3fr) 130px 128px 128px minmax(0,1.2fr) 30px", gap: 6, alignItems: "center", padding: "6px 0", borderTop: "1px solid var(--canvas)", fontSize: 12.5, opacity: passado ? .5 : 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}><b style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{nomeCurto(a.nome)}</b>{atual && <Chip color="#fff" bg="var(--orange)">agora</Chip>}</div>
            <select style={inputBase} value={a.tipo || "Férias"} disabled={!ed} onChange={(e) => upd(a.id, "tipo", e.target.value)}>{TIPOS_AUSENCIA.map((x) => <option key={x}>{x}</option>)}</select>
            <input type="date" style={inputBase} value={a.de} disabled={!ed} onChange={(e) => upd(a.id, "de", e.target.value)} />
            <input type="date" style={inputBase} value={a.ate} disabled={!ed} onChange={(e) => upd(a.id, "ate", e.target.value)} />
            <span style={{ fontSize: 11.5, color: "var(--slate)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.substituto ? "cobre: " + nomeCurto(a.substituto) : ""}{a.obs ? (a.substituto ? " · " : "") + a.obs : ""}</span>
            {ed ? <button onClick={() => setAusencias((p) => p.filter((x) => x.id !== a.id))} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--danger)" }} title="Excluir"><Icon name="trash-2" size={14} /></button> : <span />}
          </div>
        );
      })}
      <Button variant="ghost" onClick={onClose} style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Fechar</Button>
    </Modal>
  );
}

function DesdobrarModal({ users, user, ausencias, onSave, onClose }) {
  const { Modal, Field, Input, Select, Button } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const { uid, TODAY, CategoriaPicker, rotuloResp, ausenteEm, confirmaResp } = window.PortalUI;
  const [f, setF] = React.useState({ nome: "", resp: "", s: TODAY, e: TODAY, cx: "" });
  const set = (k, v) => setF((p) => ({ ...p, [k]: v, ...(k === "s" && p.e < v ? { e: v } : {}) }));
  const salvar = () => { if (!f.nome || !f.resp || !f.cx) return; if (!confirmaResp(ausencias, f.resp, f.s, f.e)) return; onSave({ id: uid("ATV"), ...f, status: "Não iniciado", nova: f.resp !== user.nome, aceita: f.resp === user.nome, criadoPor: user.nome, criadoTs: Date.now() }); };
  return (
    <Modal title="Desdobrar em atividade" sub="A atividade entra na agenda do responsável (em Atividades) com estas datas." onClose={onClose} width={600}>
      <Field label="Atividade"><Input value={f.nome} onChange={(e) => set("nome", e.target.value)} placeholder="ex.: Gravar vídeo com equipe de vendas" /></Field>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}><Field label="Responsável"><Select value={f.resp} onChange={(e) => set("resp", e.target.value)}><option value="">Selecione...</option>{users.map((u) => <option key={u.id} value={u.nome}>{rotuloResp(u, ausencias, f.s, f.e)}</option>)}</Select></Field></div>
      </div>
      {ausenteEm(ausencias, f.resp, f.s, f.e) && <div style={{ background: "var(--danger-bg)", color: "var(--danger)", borderRadius: 8, padding: "8px 11px", fontSize: 12.5, fontWeight: 600, marginBottom: 12 }}>⚠ {window.PortalUI.nomeCurto(f.resp)} estará ausente nessas datas. Escolha outra pessoa ou ajuste o período.</div>}
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}><Field label="Início"><Input type="date" value={f.s} onChange={(e) => set("s", e.target.value)} /></Field></div>
        <div style={{ flex: 1 }}><Field label="Fim"><Input type="date" value={f.e} min={f.s} onChange={(e) => set("e", e.target.value)} /></Field></div>
      </div>
      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate)", marginBottom: 6 }}>Categoria da atividade</div>
      <div style={{ marginBottom: 12 }}><CategoriaPicker value={f.cx} onChange={(v) => set("cx", v)} compact /></div>
      <div style={{ fontSize: 11.5, color: "var(--muted)", marginBottom: 12 }}>Se precisar de aprovação, quem executa marca isso no detalhe da atividade.</div>
      <Button variant="primary" onClick={salvar} style={{ width: "100%", justifyContent: "center", opacity: f.nome && f.resp && f.cx ? 1 : .5 }}>Adicionar atividade</Button>
    </Modal>
  );
}

function ConverterModal({ chamado, formato, inis, onSave, onClose }) {
  const { Modal, Field, Input, Select, Button, NatureBadge } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const existentes = inis.filter((i) => i.natureza === formato);
  const [modo, setModo] = React.useState(existentes.length && formato !== "Projeto" ? "existente" : "nova");
  const [nome, setNome] = React.useState(chamado.assunto);
  const [iniId, setIniId] = React.useState(existentes[0] ? existentes[0].id : "");
  const [cicloNome, setCicloNome] = React.useState("Chamado " + chamado.id);
  const label = window.PortalUI.NAT_LABEL[formato];
  const ok = modo === "nova" ? !!nome : !!iniId;
  const radio = (v, t, d) => <label style={{ display: "flex", gap: 9, alignItems: "flex-start", padding: "10px 12px", borderRadius: 9, border: `2px solid ${modo === v ? "var(--blue-dark)" : "var(--line)"}`, cursor: "pointer", marginBottom: 8, background: modo === v ? "var(--soft-blue)" : "#fff" }}><input type="radio" checked={modo === v} onChange={() => setModo(v)} style={{ marginTop: 3 }} /><span><b style={{ fontSize: 13 }}>{t}</b><span style={{ display: "block", fontSize: 11.5, color: "var(--slate)", marginTop: 2 }}>{d}</span></span></label>;
  return (
    <Modal title={`Transformar em ${label}`} sub={`As ${chamado.atividades.length} atividade(s) do chamado passam para a iniciativa. O solicitante continua acompanhando pelo mesmo link.`} onClose={onClose} width={520}>
      {radio("nova", `Criar nova iniciativa (${label})`, `Origem: apoio a ${chamado.area}.`)}
      {modo === "nova" && <Field label="Nome da iniciativa"><Input value={nome} onChange={(e) => setNome(e.target.value)} /></Field>}
      {radio("existente", `Vincular a ${label.toLowerCase()} que já existe`, existentes.length ? "Ex.: um pedido que é mais uma edição de algo recorrente." : "Ainda não há nenhuma cadastrada.")}
      {modo === "existente" && existentes.length > 0 && <Field label="Iniciativa"><Select value={iniId} onChange={(e) => setIniId(e.target.value)}>{existentes.map((i) => <option key={i.id} value={i.id}>{i.nome}</option>)}</Select></Field>}
      {formato !== "Projeto" && <Field label="Nome do ciclo"><Input value={cicloNome} onChange={(e) => setCicloNome(e.target.value)} /></Field>}
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <Button variant="primary" onClick={() => ok && onSave({ formato, modo, iniId, nome, cicloNome })} style={{ flex: 1, justifyContent: "center", opacity: ok ? 1 : .5 }}>Transformar em {label}</Button>
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
      </div>
    </Modal>
  );
}

function ChamadoDetalhe({ chamado, ativs, inis, users, user, ausencias, isGestao, isAdmin, onPatch, onAddAtividade, onConverter, onAbrirIni, abrirAtiv, onBack, onExcluir }) {
  const { Card, Button, StatusBadge } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const { Icon, fmtY, fmtPeriodo, nomeCurto, waLink, linkChamado, inputBase, HistoricoLista, AprovChip, Chip } = P;
  const [desdobrar, setDesdobrar] = React.useState(false);
  const [copiado, setCopiado] = React.useState(false);
  const [converter, setConverter] = React.useState(null);
  const c = chamado;
  const pode = user.perfil !== "Visualizador";
  const souResp = c.gestorResp === user.nome;
  const alvo = c.iniVinculada && inis.find((i) => i.id === c.iniVinculada);
  const link = linkChamado(c.token || c.id);
  const lista = ativs.filter((a) => a.chamadoOrigem === c.id);
  const primeiro = (c.solicitante || "").split(" ")[0];
  const msgConfirma = `Olá, ${primeiro}! Aqui é da Comunicação Interna do GAB. Recebemos seu chamado nº ${c.id} — "${c.assunto}" — e já iniciamos o atendimento.${c.prazo ? ` Previsão de entrega: ${fmtY(c.prazo)}.` : ""} Acompanhe por aqui: ${link}`;
  const resumo = lista.map((a) => `• ${a.titulo}: ${a.statusView}`).join("\n");
  const msgStatus = `Olá, ${primeiro}! Status do seu chamado nº ${c.id} — "${c.assunto}": ${c.status}.${c.prazo ? ` Previsão: ${fmtY(c.prazo)}.` : ""}${resumo ? "\n" + resumo : ""}\nAcompanhe as atualizações em: ${link}`;
  const msgConclui = `Olá, ${primeiro}! Seu chamado nº ${c.id} — "${c.assunto}" — foi concluído. Conta pra gente como foi o atendimento? Leva menos de 1 minuto: ${link}`;
  const copiar = () => { navigator.clipboard && navigator.clipboard.writeText(link); setCopiado(true); setTimeout(() => setCopiado(false), 2000); };
  const Info = ({ label, children }) => <div><div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".3px", marginBottom: 3 }}>{label}</div><div style={{ fontSize: 13.5, fontWeight: 600 }}>{children}</div></div>;
  const temWa = !!String(c.whatsapp || "").replace(/\D/g, "");
  return (
    <div>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: "var(--blue-light)", fontWeight: 700, fontSize: 12.5, fontFamily: "var(--font-sans)", padding: 0, marginBottom: 8 }}><Icon name="arrow-left" size={14} /> Voltar para Atendimentos</button>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
        <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "monospace", fontWeight: 700 }}>{c.id}</span>
        <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>{c.assunto}</h1>
        <StatusBadge status={c.status} />{urgChip(c.urgencia)}
        {isGestao && <button onClick={onExcluir} title="Excluir chamado" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8, border: "1px solid var(--danger)", background: "#fff", color: "var(--danger)", fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "var(--font-sans)" }}><Icon name="trash-2" size={14} />Excluir chamado</button>}
      </div>
      {!pode && <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--canvas)", border: "1px solid var(--line)", borderRadius: 10, padding: "10px 14px", marginBottom: 14, fontSize: 13, color: "var(--slate)" }}><Icon name="eye" size={16} />Somente visualização (perfil Visualizador).</div>}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,2fr) minmax(280px,1fr)", gap: 14, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
          <Card style={{ padding: 20, background: "var(--soft-blue)", border: "1px solid var(--soft-blue)" }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "var(--blue-dark)", textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 8 }}>O que foi pedido</div>
            <div style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink)", whiteSpace: "pre-wrap" }}>{c.descricao || "—"}</div>
            <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}><Chip color="var(--blue-dark)" bg="#fff" icon="tag">{c.tipo}</Chip><Chip color="var(--blue-dark)" bg="#fff" icon="building-2">{c.area}</Chip><Chip color="var(--blue-dark)" bg="#fff" icon="calendar">aberto em {c.criadoEm || "—"}</Chip></div>
          </Card>
          <Card style={{ padding: 18 }}>
            <div style={{ fontWeight: 800, fontSize: 14.5, marginBottom: 4 }}>Formato do atendimento</div>
            {alvo ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", fontSize: 13 }}>
                <span style={{ color: "var(--slate)" }}>Este chamado virou</span><window.PortalCIGABComRcioDesignSystem_6ad0f7.NatureBadge nature={alvo.natureza} /><b>{alvo.nome}</b>
                <Button variant="ghost" style={{ marginLeft: "auto", padding: "6px 12px", fontSize: 12 }} icon={<Icon name="arrow-right" size={14} />} onClick={() => onAbrirIni(alvo.id)}>{alvo.natureza === "Projeto" ? "Abrir cronograma" : "Abrir ciclos"}</Button>
              </div>
            ) : (
              <>
                <div style={{ fontSize: 12.5, color: "var(--slate)", marginBottom: 10 }}>Um atendimento pode ficar pontual ou se tornar um projeto, uma produção ou um processo.</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 8 }}>
                  {P.FORMATOS.map(([v, t, d]) => {
                    const on = v === "Atendimento";
                    return <button key={v} disabled={!pode} onClick={() => pode && !on && setConverter(v)} style={{ textAlign: "left", padding: "10px 12px", borderRadius: 9, border: `2px solid ${on ? "var(--blue-dark)" : "var(--line)"}`, background: on ? "var(--soft-blue)" : "#fff", cursor: on || !pode ? "default" : "pointer", opacity: pode || on ? 1 : .55, fontFamily: "var(--font-sans)", color: "var(--ink)" }}><b style={{ fontSize: 13 }}>{on ? "✓ " : ""}{t}</b><div style={{ fontSize: 11, color: "var(--slate)", marginTop: 3, lineHeight: 1.35 }}>{d}</div></button>;
                  })}
                </div>
              </>
            )}
          </Card>
          <Card style={{ padding: 18 }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
              <div style={{ fontWeight: 800, fontSize: 14.5 }}>Atividades do atendimento{alvo ? <span style={{ fontWeight: 500, fontSize: 12, color: "var(--slate)" }}> · em {alvo.nome}</span> : ""}</div>
              {pode && <div style={{ marginLeft: "auto" }}><Button variant="ghost" icon={<Icon name="split" size={14} />} style={{ padding: "6px 12px", fontSize: 12 }} onClick={() => setDesdobrar(true)}>Desdobrar atividade</Button></div>}
            </div>
            {lista.length === 0 && <div style={{ fontSize: 12.5, color: "var(--muted)", padding: "10px 0" }}>Nenhuma atividade ainda. Desdobre o chamado em atividades com responsável e datas — elas aparecem na agenda de Atividades.</div>}
            {lista.map((a) => (
              <div key={a.key} onClick={() => abrirAtiv(a.key)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderTop: "1px solid var(--line)", cursor: "pointer", flexWrap: "wrap" }}>
                <div style={{ width: 86, fontSize: 12, fontWeight: 700, color: "var(--slate)" }}>{fmtPeriodo(a.s, a.e)}</div>
                <div style={{ flex: "1 1 180px" }}><div style={{ fontWeight: 600, fontSize: 13.5 }}>{a.titulo}</div><div style={{ display: "flex", gap: 6, marginTop: 2 }}><AprovChip status={a.aprov} />{a.pendenteAceite && <Chip color="var(--orange)" bg="var(--soft-orange)">aguardando aceite</Chip>}</div></div>
                <div style={{ fontSize: 12, color: "var(--slate)", width: 120 }}>{nomeCurto(a.resp)}</div>
                <StatusBadge status={a.statusView} />
                <Icon name="chevron-right" size={16} color="var(--muted)" />
              </div>
            ))}
          </Card>
          <Card style={{ padding: 18 }}>
            <div style={{ fontWeight: 800, fontSize: 14.5, marginBottom: 8 }}>Histórico do chamado</div>
            <HistoricoLista log={c.log} />
          </Card>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Card style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
            <Info label="Solicitante">{c.solicitante}<div style={{ fontSize: 12, color: "var(--slate)", fontWeight: 500 }}>{c.area}</div></Info>
            <Info label="WhatsApp">{c.whatsapp || "—"}</Info>
            <div><div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".3px", marginBottom: 3 }}>Status</div><select style={inputBase} value={c.status} disabled={!pode} onChange={(e) => onPatch({ status: e.target.value })}>{P.STATUS_CHAMADO.map((s) => <option key={s}>{s}</option>)}</select></div>
            <div><div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".3px", marginBottom: 3 }}>Prazo de entrega (definido pela equipe)</div><input type="date" style={inputBase} value={c.prazo || ""} disabled={!pode} onChange={(e) => onPatch({ prazo: e.target.value })} /></div>
            <div><div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".3px", marginBottom: 3 }}>Responsável pelo atendimento</div><select style={inputBase} value={c.gestorResp || ""} disabled={!pode} onChange={(e) => onPatch({ gestorResp: e.target.value })}><option value="">Ninguém ainda</option>{users.map((u) => <option key={u.id} value={u.nome}>{u.nome}</option>)}</select>{pode && !souResp && <Button variant="primary" icon={<Icon name="hand" size={14} />} style={{ width: "100%", justifyContent: "center", marginTop: 8 }} onClick={() => onPatch({ gestorResp: user.nome, ...(c.status === "Novo" ? { status: "Em atendimento" } : {}) })}>Assumir chamado</Button>}</div>
          </Card>
          {pode && <Card style={{ padding: 18, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontWeight: 800, fontSize: 14.5, marginBottom: 2 }}>Falar com o solicitante</div>
            {!temWa && <div style={{ fontSize: 12, color: "var(--warning)" }}>Sem WhatsApp cadastrado.</div>}
            <a href={temWa ? waLink(c.whatsapp, msgConfirma) : undefined} target="_blank" rel="noreferrer" onClick={() => c.status === "Novo" && onPatch({ status: "Em atendimento" })} style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", padding: "10px 14px", borderRadius: 8, background: "#25D366", color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none", opacity: temWa ? 1 : .45, pointerEvents: temWa ? "auto" : "none" }}><Icon name="message-circle" size={16} /> Confirmar atendimento</a>
            <a href={temWa ? waLink(c.whatsapp, msgStatus) : undefined} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", padding: "9px 14px", borderRadius: 8, border: "1px solid #25D366", color: "#128C7E", fontWeight: 700, fontSize: 13, textDecoration: "none", opacity: temWa ? 1 : .45, pointerEvents: temWa ? "auto" : "none" }}><Icon name="file-text" size={15} /> Enviar status report</a>
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>Link de acompanhamento (permanente)</div>
            <div style={{ display: "flex", gap: 6 }}><input readOnly style={{ ...inputBase, fontSize: 11.5 }} value={link} /><Button variant="ghost" style={{ padding: "6px 10px", fontSize: 11.5 }} onClick={copiar}>{copiado ? "Copiado" : "Copiar"}</Button></div>
          </Card>}
          <Card style={{ padding: 18 }}>
            {c.status !== "Concluído" ? (!pode ? <div style={{ fontSize: 12.5, color: "var(--muted)" }}>Em andamento com {nomeCurto(c.gestorResp)}.</div> :
              <Button variant="dark" icon={<Icon name="check-circle-2" size={15} />} style={{ width: "100%", justifyContent: "center" }} onClick={() => onPatch({ status: "Concluído", concluidoEm: P.TODAY })}>Encerrar como concluído</Button>
            ) : (
              <div style={{ fontSize: 12.5 }}>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>Pesquisa de satisfação</div>
                {c.npsScore == null ? <><div style={{ color: "var(--slate)", marginBottom: 8 }}>Aguardando a nota do solicitante.</div>{pode && <a href={temWa ? waLink(c.whatsapp, msgConclui) : undefined} target="_blank" rel="noreferrer" style={{ color: "#128C7E", fontWeight: 700 }}>Enviar pesquisa pelo WhatsApp</a>}</> : <>Nota recebida: <b style={{ color: "var(--success)", fontSize: 18 }}>{c.npsScore}/10</b>{c.npsComentario && <div style={{ color: "var(--slate)", marginTop: 4 }}>"{c.npsComentario}"</div>}</>}
              </div>
            )}
          </Card>
        </div>
      </div>
      {converter && <ConverterModal chamado={c} formato={converter} inis={inis} onClose={() => setConverter(null)} onSave={(o) => { onConverter(o); setConverter(null); }} />}
      {desdobrar && <DesdobrarModal users={users} user={user} ausencias={ausencias} onSave={(a) => { onAddAtividade(a); setDesdobrar(false); }} onClose={() => setDesdobrar(false)} />}
    </div>
  );
}

function Atendimentos({ chamados, setChamados, inis, setInis, setTarefas, ciclos, setCiclos, onAbrirIni, ativs, users, user, ausencias, setAusencias, respAtual, isGestao, isAdmin, foco, setFoco, abrirAtiv }) {
  const { Card, Button, KpiCard, StatusBadge } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const { Icon, nomeCurto, fmtY, uid, agora, aplicarPatch, linkChamado, ausenciaAtiva, GESTORA_ATENDIMENTO, TODAY } = P;
  const [novo, setNovo] = React.useState(false);
  const [ausModal, setAusModal] = React.useState(false);
  const [fStatus, setFStatus] = React.useState("Abertos");
  const [copiado, setCopiado] = React.useState(false);

  const logEvento = (c, campo, valor) => ({ ...c, log: [...(c.log || []), { k: "evento", campo, valor, quando: agora(), ts: Date.now(), por: user.nome }].slice(-60) });
  const registrar = (id, campo, valor) => setChamados((prev) => prev.map((c) => c.id === id ? logEvento(c, campo, valor) : c));
  const patchChamado = (id, patch) => setChamados((prev) => prev.map((c) => c.id === id ? aplicarPatch(c, patch, user.nome) : c));
  const addChamado = (f) => { const c = { ...f, id: P.nextChamadoId(chamados), token: P.novoToken(), prazo: "", gestorResp: respAtual, status: "Novo", criadoEm: agora(), criadoTs: Date.now(), criadoPor: user.nome, atividades: [], log: [{ k: "evento", campo: "Chamado aberto", valor: "por " + nomeCurto(user.nome) + (respAtual ? " · direcionado a " + nomeCurto(respAtual) : ""), quando: agora(), ts: Date.now(), por: user.nome }] }; setChamados((prev) => [c, ...prev]); setNovo(false); setFoco(c.id); };
  const addAtividade = (chamadoId, a) => {
    const c = chamados.find((x) => x.id === chamadoId);
    const descr = (a.nome || "Atividade") + " → " + nomeCurto(a.resp);
    if (c && c.iniVinculada) {
      registrar(c.id, "Atividade desdobrada", descr);
      const nova = { ...a, chamadoOrigem: c.id };
      if (c.formato === "Projeto") setTarefas((p) => [...p, { ...nova, id: uid("T"), ini: c.iniVinculada }]);
      else if (ciclos.some((x) => x.id === c.cicloVinculado)) setCiclos((p) => p.map((x) => x.id === c.cicloVinculado ? { ...x, etapas: [...x.etapas, { ...nova, id: uid("E") }] } : x));
      else { const cid = uid("CI"); setCiclos((p) => [...p, { id: cid, ini: c.iniVinculada, ciclo: "Chamado " + c.id, chamadoOrigem: c.id, etapas: [{ ...nova, id: uid("E") }] }]); patchChamado(c.id, { cicloVinculado: cid }); }
      if (c.status === "Novo") patchChamado(c.id, { status: "Em atendimento" });
      return;
    }
    setChamados((prev) => prev.map((c) => c.id === chamadoId ? aplicarPatch(logEvento({ ...c, atividades: [...c.atividades, a] }, "Atividade desdobrada", descr), c.status === "Novo" ? { status: "Em atendimento" } : {}, user.nome) : c));
  };
  const converterChamado = (c, { formato, modo, iniId, nome, cicloNome }) => {
    let alvo = iniId;
    if (modo === "nova") { alvo = P.nextIniId(inis); setInis((p) => [...p, { id: alvo, nome, natureza: formato, origem: "Outra área", area: c.area, resp: c.gestorResp || user.nome, status: formato === "Projeto" ? "Em andamento" : "Ativo", chamadoOrigem: c.id, ...(formato === "Projeto" ? { ini: P.TODAY } : {}) }]); }
    const movidas = c.atividades.map((a) => ({ ...a, chamadoOrigem: c.id }));
    let cicloId = null;
    if (formato === "Projeto") setTarefas((p) => [...p, ...movidas.map((a) => ({ ...a, id: uid("T"), ini: alvo }))]);
    else { cicloId = uid("CI"); setCiclos((p) => [...p, { id: cicloId, ini: alvo, ciclo: cicloNome || "Chamado " + c.id, chamadoOrigem: c.id, etapas: movidas.map((a) => ({ ...a, id: uid("E") })) }]); }
    patchChamado(c.id, { formato, iniVinculada: alvo, cicloVinculado: cicloId, atividades: [], status: c.status === "Novo" ? "Em atendimento" : c.status });
  };

  const sel = foco && chamados.find((c) => c.id === foco);
  if (sel) return <ChamadoDetalhe chamado={sel} ativs={ativs} inis={inis} users={users} user={user} ausencias={ausencias} isGestao={isGestao} isAdmin={isAdmin} onPatch={(p) => user.perfil !== "Visualizador" && patchChamado(sel.id, p)} onAddAtividade={(a) => addAtividade(sel.id, a)} onConverter={(o) => converterChamado(sel, o)} onAbrirIni={onAbrirIni} abrirAtiv={abrirAtiv} onBack={() => setFoco(null)} onExcluir={() => { if (!confirm(`Excluir o chamado ${sel.id} "${sel.assunto}"?\n\nAs atividades do chamado também são apagadas e o link do solicitante deixa de funcionar.${sel.iniVinculada ? " A iniciativa criada a partir dele continua existindo." : ""}`)) return; setFoco(null); setChamados((prev) => prev.filter((x) => x.id !== sel.id)); }} />;

  const aus = ausenciaAtiva(ausencias, GESTORA_ATENDIMENTO, TODAY);
  const abertos = (c) => !["Concluído", "Cancelado"].includes(c.status);
  const filtrados = chamados.filter((c) => fStatus === "Todos" ? true : fStatus === "Abertos" ? abertos(c) : c.status === fStatus);
  const semDesdobrar = chamados.filter((c) => !ativs.some((x) => x.chamadoOrigem === c.id) && abertos(c)).length;
  const copiarLink = () => { navigator.clipboard && navigator.clipboard.writeText(linkChamado()); setCopiado(true); setTimeout(() => setCopiado(false), 2000); };
  const pill = (k) => <button key={k} onClick={() => setFStatus(k)} style={{ padding: "7px 13px", borderRadius: 8, border: `1px solid ${fStatus === k ? "var(--blue-dark)" : "var(--line)"}`, background: fStatus === k ? "var(--blue-dark)" : "#fff", color: fStatus === k ? "#fff" : "var(--slate)", fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-sans)" }}>{k}</button>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontSize: 23, fontWeight: 800, color: "var(--ink)", margin: 0, fontFamily: "var(--font-sans)" }}>Atendimentos</h1>
          <div style={{ fontSize: 13.5, color: "var(--slate)", marginTop: 3 }}>Chamados de outras áreas. A equipe analisa, define o prazo, desdobra em atividades e mantém o solicitante informado.</div>
        </div>
        <div style={{ marginBottom: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Button variant="ghost" icon={<Icon name="link" size={15} />} onClick={copiarLink}>{copiado ? "Link copiado" : "Copiar link para solicitantes"}</Button>
          {isGestao && <Button variant="ghost" icon={<Icon name="calendar-off" size={15} />} onClick={() => setAusModal(true)}>Ausências e substitutos</Button>}
          <Button variant="primary" icon={<Icon name="plus-circle" size={16} />} onClick={() => setNovo(true)}>Abrir chamado</Button>
        </div>
      </div>
      <div style={{ background: aus ? "var(--soft-orange)" : "var(--soft-blue)", borderRadius: 10, padding: "10px 14px", marginBottom: 16, fontSize: 13, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <Icon name="user-check" size={16} color={aus ? "var(--orange)" : "var(--blue-dark)"} />
        Novos chamados vão para <b>{nomeCurto(respAtual)}</b>{aus ? <> — {nomeCurto(GESTORA_ATENDIMENTO)} ausente até {fmtY(aus.ate)}</> : ""}.
        {isGestao && <button onClick={() => setAusModal(true)} style={{ marginLeft: "auto", background: "none", border: "none", color: "var(--blue-light)", fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-sans)" }}>Alterar</button>}
      </div>
      <div style={{ display: "flex", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
        <KpiCard label="Novos" value={chamados.filter((c) => c.status === "Novo").length} sub="aguardando análise" color="var(--orange)" icon={<Icon name="inbox" size={16} />} />
        <KpiCard label="Sem atividades" value={semDesdobrar} sub="faltam desdobrar" color={semDesdobrar ? "var(--warning)" : "var(--slate)"} icon={<Icon name="split" size={16} />} />
        <KpiCard label="Em atendimento" value={chamados.filter((c) => c.status === "Em atendimento").length} color="var(--info)" icon={<Icon name="clock" size={16} />} />
        <KpiCard label="Concluídos" value={chamados.filter((c) => c.status === "Concluído").length} color="var(--success)" icon={<Icon name="check-circle-2" size={16} />} />
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>{["Abertos", "Novo", "Em atendimento", "Aguardando solicitante", "Concluído", "Todos"].map(pill)}</div>
      <Card style={{ overflow: "hidden" }}>
        {filtrados.length === 0 && <div style={{ padding: 28, textAlign: "center", color: "var(--muted)", fontSize: 13 }}>Nenhum chamado aqui.</div>}
        {filtrados.map((c) => (
          <div key={c.id} onClick={() => setFoco(c.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", borderTop: "1px solid var(--line)", cursor: "pointer", flexWrap: "wrap", background: c.status === "Novo" ? "var(--soft-orange)" : "#fff" }}>
            <span style={{ fontSize: 11, color: "var(--muted)", fontFamily: "monospace", width: 54, fontWeight: 700 }}>{c.id}</span>
            <div style={{ flex: "1 1 240px", minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{c.assunto}</div>
              <div style={{ fontSize: 12, color: "var(--slate)", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.solicitante} · {c.area} · {c.tipo} · {ativs.filter((x) => x.chamadoOrigem === c.id).length} atividade(s){c.iniVinculada ? " · virou " + P.NAT_LABEL[c.formato] : ""}</div>
            </div>
            {urgChip(c.urgencia)}
            <div style={{ fontSize: 12, color: c.gestorResp ? "var(--slate)" : "var(--orange)", width: 120, textAlign: "right", fontWeight: c.gestorResp ? 500 : 700 }}>{c.gestorResp ? nomeCurto(c.gestorResp) : "sem responsável"}</div>
            <div style={{ fontSize: 12, color: "var(--slate)", width: 110, textAlign: "right" }}>{c.prazo ? "prazo " + fmtY(c.prazo) : "sem prazo"}</div>
            <div style={{ width: 150, textAlign: "right" }}><StatusBadge status={c.status} /></div>
            <Icon name="chevron-right" size={16} color="var(--muted)" />
          </div>
        ))}
      </Card>
      {novo && <NovoChamadoModal onSave={addChamado} onClose={() => setNovo(false)} />}
      {ausModal && <AusenciasModal ausencias={ausencias} setAusencias={setAusencias} users={users} user={user} podeTodos={isGestao} onClose={() => setAusModal(false)} />}
    </div>
  );
}
window.Atendimentos = Atendimentos;
window.GuiaChamado = GuiaChamado;
window.AusenciasModal = AusenciasModal;
