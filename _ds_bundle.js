/* @ds-bundle: {"format":4,"namespace":"PortalCIGABComRcioDesignSystem_6ad0f7","components":[{"name":"NatureBadge","sourcePath":"components/badges/NatureBadge.jsx"},{"name":"StatusBadge","sourcePath":"components/badges/StatusBadge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"SectionHeader","sourcePath":"components/cards/Card.jsx"},{"name":"KpiCard","sourcePath":"components/cards/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Field.jsx"},{"name":"Select","sourcePath":"components/forms/Field.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"Modal","sourcePath":"components/overlays/Modal.jsx"}],"sourceHashes":{"components/badges/NatureBadge.jsx":"de61d8c9cd7e","components/badges/StatusBadge.jsx":"14694d18bcd2","components/buttons/Button.jsx":"04ea0c812e80","components/cards/Card.jsx":"fb987b70c2f1","components/data/ProgressBar.jsx":"0852164e8bd8","components/forms/Field.jsx":"6eec385540e8","components/navigation/TopNav.jsx":"041e49253426","components/overlays/Modal.jsx":"38c118d1f943","ui_kits/portal-ci/App.jsx":"7995456cd493","ui_kits/portal-ci/Atendimentos.jsx":"adf2361926b0","ui_kits/portal-ci/Atividades.jsx":"5d137c3ea8da","ui_kits/portal-ci/Canais.jsx":"235e60edaf7e","ui_kits/portal-ci/Cronograma.jsx":"d1a55cb5e887","ui_kits/portal-ci/Iniciativas.jsx":"386027995b6c","ui_kits/portal-ci/Lancar.jsx":"cd94d7ea0534","ui_kits/portal-ci/Login.jsx":"6ae59af96f0a","ui_kits/portal-ci/Painel.jsx":"dae7e9a05998","ui_kits/portal-ci/StatusReport.jsx":"61de3f14de29","ui_kits/portal-ci/Usuarios.jsx":"ec754025ffd8","ui_kits/portal-ci/shared.jsx":"13b79fdd3433","ui_kits/portal-ci/supabaseClient.js":"6ab513eefce2","ui_kits/portal-ci/supabaseSync.js":"8c72205eda43"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PortalCIGABComRcioDesignSystem_6ad0f7 = window.PortalCIGABComRcioDesignSystem_6ad0f7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/NatureBadge.jsx
try { (() => {
function NatureBadge({
  nature
}) {
  const NAT = {
    Projeto: {
      color: "var(--nat-projeto)",
      bg: "var(--nat-projeto-bg)",
      label: "Projeto"
    },
    Produto: {
      color: "var(--nat-produto)",
      bg: "var(--nat-produto-bg)",
      label: "Produção"
    },
    Processo: {
      color: "var(--nat-processo)",
      bg: "var(--nat-processo-bg)",
      label: "Processo"
    }
  };
  const s = NAT[nature] || NAT.Projeto;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: s.color,
      background: s.bg,
      padding: "3px 9px",
      borderRadius: 20,
      whiteSpace: "nowrap",
      fontFamily: "var(--font-sans)"
    }
  }, s.label);
}
Object.assign(__ds_scope, { NatureBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/NatureBadge.jsx", error: String((e && e.message) || e) }); }

// components/badges/StatusBadge.jsx
try { (() => {
function StatusBadge({
  status
}) {
  const STATUS = {
    "Concluído": ["#fff", "var(--success)"],
    "Publicado": ["#fff", "var(--success)"],
    "Entregue": ["#fff", "var(--success)"],
    "Ativo": ["#fff", "var(--success)"],
    "Em andamento": ["#fff", "var(--warning)"],
    "Em produção": ["#fff", "var(--warning)"],
    "Não iniciado": ["#fff", "var(--slate)"],
    "Planejado": ["#fff", "var(--slate)"],
    "Aberto": ["#fff", "var(--slate)"],
    "Atrasado": ["#fff", "var(--danger)"],
    "Bloqueado": ["#fff", "var(--danger)"],
    "Aguardando terceiro": ["#fff", "var(--orange)"],
    "Novo": ["#fff", "var(--orange)"],
    "Em atendimento": ["#fff", "var(--warning)"],
    "Aguardando solicitante": ["#fff", "var(--orange)"],
    "Aguardando aprovação": ["#fff", "var(--orange)"],
    "Aprovado": ["#fff", "var(--success)"],
    "Reprovado": ["#fff", "var(--danger)"],
    "Cancelado": ["#fff", "var(--slate)"]
  };
  const s = STATUS[status] || ["#fff", "var(--slate)"];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 5,
      fontSize: 11.5,
      fontWeight: 700,
      color: s[0],
      background: s[1],
      padding: "4px 12px",
      borderRadius: 6,
      whiteSpace: "nowrap",
      fontFamily: "var(--font-sans)"
    }
  }, status);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = "primary",
  icon,
  style,
  ...rest
}) {
  const base = {
    fontFamily: "var(--font-sans)",
    fontSize: 13.5,
    fontWeight: 700,
    cursor: "pointer",
    borderRadius: 8,
    padding: "10px 15px",
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    border: "none",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--orange)",
      color: "#fff"
    },
    dark: {
      background: "var(--blue-dark)",
      color: "#fff"
    },
    ghost: {
      background: "#fff",
      color: "var(--blue-dark)",
      border: "1px solid var(--blue-dark)",
      fontWeight: 700
    },
    icon: {
      background: "none",
      border: "none",
      padding: 5,
      borderRadius: 6,
      color: "var(--slate)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function Card({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: 12,
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, children);
}
function SectionHeader({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "var(--blue-dark)",
      textTransform: "uppercase",
      letterSpacing: ".4px",
      paddingBottom: 8,
      marginBottom: 14,
      borderBottom: "2px solid var(--orange)",
      fontFamily: "var(--font-sans)"
    }
  }, children);
}
function KpiCard({
  label,
  value,
  sub,
  color = "var(--blue-dark)",
  icon
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 16,
      flex: 1,
      minWidth: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color,
      lineHeight: 1.1,
      fontFamily: "var(--font-sans)"
    }
  }, value), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)"
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink)",
      marginTop: 6,
      fontFamily: "var(--font-sans)"
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)"
    }
  }, sub));
}
Object.assign(__ds_scope, { Card, SectionHeader, KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function ProgressBar({
  pct,
  color = "var(--blue-light)",
  width = 90
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: 8,
      background: "var(--canvas)",
      borderRadius: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${Math.round(pct * 100)}%`,
      background: color,
      borderRadius: 5
    }
  })), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 13,
      fontFamily: "var(--font-sans)",
      color: "var(--ink)"
    }
  }, Math.round(pct * 100), "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "9px 11px",
  border: "1px solid var(--border-default)",
  borderRadius: 8,
  fontSize: 13.5,
  fontFamily: "var(--font-sans)",
  color: "var(--ink)",
  background: "#fff"
};
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 12,
      fontWeight: 700,
      color: "var(--slate)",
      marginBottom: 5,
      fontFamily: "var(--font-sans)"
    }
  }, label), children);
}
function Input(props) {
  return /*#__PURE__*/React.createElement("input", _extends({
    style: inputStyle
  }, props));
}
function Select({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    style: {
      ...inputStyle,
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      paddingRight: 34,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235A6B7B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 12px center",
      backgroundSize: "16px",
      cursor: "pointer",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Field, Input, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav(props) {
  const {
    items,
    active,
    onChange,
    userName,
    userRole,
    onLogout,
    actions
  } = props;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--surface-header)",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      borderBottom: "3px solid var(--orange)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1600,
      width: "100%",
      boxSizing: "border-box",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "10px 18px",
      gap: "8px 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/logo-branca.png",
    alt: "Grupo \xC1guia Branca",
    style: {
      height: 36,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      color: "#E4EDF7"
    }
  }, "Portal Comunica\xE7\xE3o Interna")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 3,
      flex: "1 1 auto",
      justifyContent: "flex-end"
    }
  }, items.map(function (it) {
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onChange(it.key),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "8px 12px",
        background: active === it.key ? "var(--orange)" : "transparent",
        color: active === it.key ? "#fff" : "#D7E3F2",
        border: "none",
        borderRadius: 7,
        fontSize: 12.5,
        fontWeight: active === it.key ? 700 : 500,
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        whiteSpace: "nowrap",
        flexShrink: 0
      }
    }, it.icon, it.label);
  })), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexShrink: 0
    }
  }, actions), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      paddingLeft: 10,
      borderLeft: "1px solid rgba(255,255,255,.15)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      whiteSpace: "nowrap"
    }
  }, userName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#B9CEE6",
      whiteSpace: "nowrap"
    }
  }, userRole)), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    title: "Sair",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#C7D8EA",
      flexShrink: 0
    }
  }, "\u23FB"))));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Modal.jsx
try { (() => {
function Modal({
  title,
  sub,
  children,
  onClose,
  width = 480
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(22,40,61,.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 60,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--border-default)",
      borderRadius: 12,
      padding: 24,
      width,
      maxWidth: "100%",
      maxHeight: "92vh",
      overflow: "auto",
      boxShadow: "var(--shadow-modal)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: sub ? 4 : 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      color: "var(--ink)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--slate)"
    }
  }, "\u2715")), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--slate)",
      marginBottom: 16
    }
  }, sub), children));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Modal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LS_KEY = "portalci-dados-v2";
const VAZIO = {
  inis: [],
  tarefas: [],
  lanc: [],
  ciclos: [],
  chamados: [],
  marcos: [],
  ausencias: [],
  canais: window.PortalUI.CANAIS_VAZIO
};
// Com Supabase os dados ficam só no banco (nada sensível fica salvo no navegador).
if (window.sb) {
  try {
    localStorage.removeItem(LS_KEY);
  } catch (e) {}
}
function loadLocal() {
  if (window.sb) return VAZIO;
  try {
    const d = JSON.parse(localStorage.getItem(LS_KEY));
    return d ? {
      ...VAZIO,
      ...d
    } : VAZIO;
  } catch (e) {
    return VAZIO;
  }
}
function SinoNotificacoes({
  notifs,
  lidas,
  onOpen,
  onMarkAll
}) {
  const {
    Icon
  } = window.PortalUI;
  const [open, setOpen] = React.useState(false);
  const naoLidas = notifs.filter(n => !lidas.includes(n.id));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    title: "Notifica\xE7\xF5es",
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 8,
      border: "none",
      background: open ? "rgba(255,255,255,.14)" : "transparent",
      color: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18
  }), naoLidas.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      right: 2,
      minWidth: 17,
      height: 17,
      borderRadius: 9,
      background: "var(--orange)",
      color: "#fff",
      fontSize: 10,
      fontWeight: 800,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 4px",
      boxSizing: "border-box",
      border: "2px solid var(--surface-header)"
    }
  }, naoLidas.length > 9 ? "9+" : naoLidas.length)), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 44,
      width: 360,
      maxWidth: "90vw",
      background: "#fff",
      color: "var(--ink)",
      borderRadius: 12,
      boxShadow: "var(--shadow-modal)",
      zIndex: 80,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "12px 14px",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 14
    }
  }, "Notifica\xE7\xF5es"), naoLidas.length > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: onMarkAll,
    style: {
      marginLeft: "auto",
      background: "none",
      border: "none",
      color: "var(--blue-light)",
      fontWeight: 700,
      fontSize: 11.5,
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, "Marcar todas como lidas")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 420,
      overflow: "auto"
    }
  }, notifs.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      textAlign: "center",
      color: "var(--muted)",
      fontSize: 12.5
    }
  }, "Tudo em dia por aqui."), notifs.slice(0, 40).map(n => {
    const unread = !lidas.includes(n.id);
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => {
        setOpen(false);
        onOpen(n);
      },
      style: {
        display: "flex",
        gap: 10,
        width: "100%",
        textAlign: "left",
        padding: "11px 14px",
        border: "none",
        borderBottom: "1px solid var(--canvas)",
        background: unread ? "var(--soft-blue)" : "#fff",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        color: "var(--ink)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: n.destaque ? "var(--orange)" : "var(--blue-light)",
        paddingTop: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 12.5,
        fontWeight: unread ? 800 : 600
      }
    }, n.titulo), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 12,
        color: "var(--slate)",
        marginTop: 2
      }
    }, n.texto)), unread && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 4,
        background: "var(--orange)",
        marginTop: 5,
        flexShrink: 0
      }
    }));
  }))));
}
function App() {
  const {
    TopNav
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const {
    Icon
  } = P;
  const init = React.useMemo(loadLocal, []);
  const [user, setUser] = React.useState(null);
  const [view, setView] = React.useState("painel");
  const [inis, setInis] = React.useState(init.inis);
  const [tarefas, setTarefas] = React.useState(init.tarefas);
  const [lanc, setLanc] = React.useState(init.lanc);
  const [ciclos, setCiclos] = React.useState(init.ciclos);
  const [chamados, setChamados] = React.useState(init.chamados);
  const [marcos, setMarcos] = React.useState(init.marcos);
  const [ausencias, setAusencias] = React.useState(init.ausencias);
  const [canais, setCanais] = React.useState(init.canais);
  const [users, setUsers] = React.useState(window.sb ? [] : P.USERS0);
  const [detalheKey, setDetalheKey] = React.useState(null);
  const [chamadoFoco, setChamadoFoco] = React.useState(null);
  const [selIni, setSelIni] = React.useState(null);
  const [prevView, setPrevView] = React.useState("iniciativas");
  const [fNatIni, setFNatIni] = React.useState("Todas");
  const [trocarSenha, setTrocarSenha] = React.useState(false);
  const [minhaSenhaModal, setMinhaSenhaModal] = React.useState(false);
  const [lidas, setLidas] = React.useState([]);
  const [ausModal, setAusModal] = React.useState(false);
  const applyAll = d => {
    setInis(d.inis);
    setTarefas(d.tarefas);
    setLanc(d.lanc);
    setCiclos(d.ciclos);
    setChamados(d.chamados);
    setMarcos(d.marcos || []);
    setAusencias(d.ausencias || []);
    setCanais(d.canais || P.CANAIS_VAZIO);
  };
  React.useEffect(() => {
    if (!window.sb) localStorage.setItem(LS_KEY, JSON.stringify({
      inis,
      tarefas,
      lanc,
      ciclos,
      chamados,
      marcos,
      ausencias,
      canais
    }));
  }, [inis, tarefas, lanc, ciclos, chamados, marcos, ausencias, canais]);
  React.useEffect(() => {
    const h = e => {
      if (e.key === LS_KEY && e.newValue && !window.sb) applyAll({
        ...VAZIO,
        ...JSON.parse(e.newValue)
      });
    };
    window.addEventListener("storage", h);
    return () => window.removeEventListener("storage", h);
  }, []);

  /* ===== Supabase (quando configurado) ===== */
  const synced = React.useRef(false);
  const applyingRemote = React.useRef(false);
  const prevRef = React.useRef({
    ...init
  });
  const reloadFromRemote = React.useCallback(async () => {
    const d = await window.PortalSync.loadAll();
    if (!d) return false;
    applyingRemote.current = true;
    const full = {
      ...VAZIO,
      ...d
    };
    applyAll(full);
    prevRef.current = {
      ...full
    };
    setTimeout(() => {
      applyingRemote.current = false;
    }, 0);
    return true;
  }, []);
  const sair = () => {
    synced.current = false;
    applyingRemote.current = true;
    applyAll(VAZIO);
    prevRef.current = {
      ...VAZIO
    };
    setUsers(window.sb ? [] : P.USERS0);
    setUser(null);
    setView("painel");
    setTimeout(() => {
      applyingRemote.current = false;
    }, 0);
  };
  const [sync, setSync] = React.useState({
    state: window.sb ? "idle" : "local"
  });
  React.useEffect(() => {
    const h = e => setSync(s => e.detail.state === "saved" && s.state === "error" ? s : e.detail);
    window.addEventListener("portal-sync", h);
    return () => window.removeEventListener("portal-sync", h);
  }, []);
  React.useEffect(() => {
    if (window.sb) window.PortalSync.authRestore().then(u => {
      if (u) setUser(cur => cur || u);
    });
    return window.PortalSync.onSignedOut(sair);
  }, []);
  const uid0 = user && user.id;
  React.useEffect(() => {
    if (!window.sb || !uid0) return;
    synced.current = false;
    reloadFromRemote().then(ok => {
      if (ok) {
        synced.current = true;
        setSync({
          state: "saved"
        });
      }
    });
    const reloadUsers = async () => {
      const u = await window.PortalSync.loadUsuarios();
      if (u && u.length) setUsers(u);
    };
    reloadUsers();
    const off = window.PortalSync.subscribeAll(() => {
      reloadFromRemote();
      reloadUsers();
    });
    return () => {
      synced.current = false;
      off();
    };
  }, [uid0]);
  const useRemoteSave = (key, val, fn) => React.useEffect(() => {
    if (synced.current && !applyingRemote.current) {
      fn(prevRef.current[key], val);
      prevRef.current[key] = val;
    }
  }, [val]);
  useRemoteSave("inis", inis, (a, b) => window.PortalSync.saveIniciativas(a, b));
  useRemoteSave("tarefas", tarefas, (a, b) => window.PortalSync.saveTarefas(a, b));
  useRemoteSave("lanc", lanc, (a, b) => window.PortalSync.saveLanc(a, b));
  useRemoteSave("ciclos", ciclos, (a, b) => window.PortalSync.saveCiclos(a, b));
  useRemoteSave("chamados", chamados, (a, b) => window.PortalSync.saveChamados(a, b));
  useRemoteSave("marcos", marcos, (a, b) => window.PortalSync.saveConfig("marcos", b));
  useRemoteSave("ausencias", ausencias, (a, b) => window.PortalSync.saveConfig("ausencias", b));
  useRemoteSave("canais", canais, (a, b) => window.PortalSync.saveConfig("canais", b));
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  React.useEffect(() => {
    if (user && user.precisaTrocarSenha) setTrocarSenha(true);
    if (user) {
      try {
        setLidas(JSON.parse(localStorage.getItem("portalci-lidas-" + user.login)) || []);
      } catch (e) {
        setLidas([]);
      }
    }
  }, [user]);
  const ativs = React.useMemo(() => P.todasAtividades({
    inis,
    tarefas,
    ciclos,
    chamados,
    lanc
  }), [inis, tarefas, ciclos, chamados, lanc]);
  React.useEffect(() => {
    const upd = {};
    chamados.forEach(c => {
      if (!c.iniVinculada) return;
      const snap = ativs.filter(x => x.raw.chamadoOrigem === c.id).map(x => ({
        nome: x.titulo,
        status: x.statusView,
        s: x.s,
        e: x.e
      }));
      if (JSON.stringify(snap) !== JSON.stringify(c.acompanhamento || [])) upd[c.id] = snap;
    });
    if (Object.keys(upd).length) setChamados(p => p.map(c => upd[c.id] ? {
      ...c,
      acompanhamento: upd[c.id]
    } : c));
  }, [ativs]);
  if (!user) return /*#__PURE__*/React.createElement(window.Login, {
    onLogin: setUser
  });
  const isGestao = user.perfil === "Gestor" || user.perfil === "Administrador";
  const isAdmin = user.perfil === "Administrador";
  const respAtual = P.respAtendimento(ausencias, P.TODAY);
  const podeAtender = isGestao || user.nome === respAtual;
  const iniById = id => inis.find(i => i.id === id) || {};
  const patchAtiv = (key, patch) => {
    const [kind, a, b] = key.split(":");
    const ap = o => P.aplicarPatch(o, patch, user.nome);
    if (kind === "tar") setTarefas(p => p.map(t => t.id === a ? ap(t) : t));else if (kind === "eta") setCiclos(p => p.map(c => c.id === a ? {
      ...c,
      etapas: c.etapas.map(e => e.id === b ? ap(e) : e)
    } : c));else if (kind === "cha") setChamados(p => p.map(c => c.id === a ? {
      ...c,
      atividades: c.atividades.map(x => x.id === b ? ap(x) : x)
    } : c));else if (kind === "lan") setLanc(p => p.map(l => l.id === a ? ap(l) : l));
  };
  const deleteAtiv = key => {
    const [kind, a, b] = key.split(":");
    if (kind === "tar") setTarefas(p => p.filter(t => t.id !== a));else if (kind === "eta") setCiclos(p => p.map(c => c.id === a ? {
      ...c,
      etapas: c.etapas.filter(e => e.id !== b)
    } : c));else if (kind === "cha") setChamados(p => p.map(c => c.id === a ? {
      ...c,
      atividades: c.atividades.filter(x => x.id !== b)
    } : c));else if (kind === "lan") setLanc(p => p.filter(l => l.id !== a));
  };
  const detalhe = detalheKey && ativs.find(x => x.key === detalheKey);
  const notifs = P.gerarNotificacoes({
    ativs,
    chamados,
    inis,
    user,
    podeAtender,
    ausencias
  });
  const naoLidasN = notifs.filter(n => !lidas.includes(n.id)).length;
  document.title = (naoLidasN ? `(${naoLidasN}) ` : "") + "Portal CI";
  const salvarLidas = l => {
    setLidas(l);
    localStorage.setItem("portalci-lidas-" + user.login, JSON.stringify(l.slice(-400)));
  };
  const abrirNotif = n => {
    salvarLidas([...new Set([...lidas, n.id])]);
    setView(n.view);
    if (n.key) setDetalheKey(n.key);
    if (n.chamadoId) setChamadoFoco(n.chamadoId);
  };
  const carregarExemplo = () => {
    const ex = P.gerarExemplo();
    applyAll({
      ...VAZIO,
      ...ex
    });
  };
  const zerarDados = () => {
    if (confirm("Apagar todas as iniciativas, atividades, chamados, marcos e dados de canais? Os usuários continuam cadastrados.")) applyAll(VAZIO);
  };
  const onOpen = id => {
    setPrevView(view);
    setSelIni(id);
    setView("cronograma");
  };
  const navIcon = (k, name) => /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: 16,
    color: view === k ? "#fff" : "#D7E3F2"
  });
  const NAV = [{
    key: "painel",
    label: "Visão Geral",
    icon: navIcon("painel", "layout-dashboard")
  }, {
    key: "iniciativas",
    label: "Iniciativas",
    icon: navIcon("iniciativas", "folder-kanban")
  }, {
    key: "atividades",
    label: "Atividades",
    icon: navIcon("atividades", "calendar-days")
  }, {
    key: "atendimentos",
    label: "Atendimentos",
    icon: navIcon("atendimentos", "headset")
  }, {
    key: "canais",
    label: "Canais",
    icon: navIcon("canais", "radio")
  }, ...(isGestao ? [{
    key: "usuarios",
    label: "Usuários",
    icon: navIcon("usuarios", "users")
  }] : []), {
    key: "report",
    label: "Report",
    icon: navIcon("report", "file-text")
  }];
  const reportLanc = ativs.filter(a => a.kind === "eta" || a.kind === "lan").map(a => ({
    id: a.id,
    ini: a.iniId,
    titulo: a.titulo,
    resp: a.resp,
    cx: a.cx,
    vol: 1,
    dataPub: a.e,
    prazo: a.e,
    entrega: P.concluido(a.status) ? a.e : "",
    status: a.statusView
  }));
  const reportTarefas = ativs.filter(a => a.kind === "tar").map(a => ({
    ...a.raw,
    cx: a.cx,
    status: a.statusView,
    nivel: 1
  }));
  const ultimo = (arr, k) => {
    const v = (arr || []).slice().sort((a, b) => (a.mes || "").localeCompare(b.mes || "")).pop();
    return v ? Number(v[k]) || 0 : 0;
  };
  const canaisResumo = {
    podcast: {
      seguidores: ultimo(canais.podcast.mensal, "inscritos")
    },
    instagram: {
      seguidores: ultimo(canais.instagram.mensal, "seguidores")
    },
    linkedin: {
      seguidores: ultimo(canais.linkedin.mensal, "seguidores")
    }
  };
  const usersAtivos = users.filter(u => u.ativo !== false);
  const common = {
    inis,
    ativs,
    users: usersAtivos,
    user,
    iniById,
    abrirAtiv: setDetalheKey,
    patchAtiv,
    ausencias,
    setAusencias,
    abrirAusencias: () => setAusModal(true)
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      fontFamily: "var(--font-sans)",
      background: "var(--canvas)",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "no-print"
  }, /*#__PURE__*/React.createElement(TopNav, {
    items: NAV,
    active: view,
    onChange: setView,
    userName: user.nome,
    userRole: user.cargo,
    onLogout: () => {
      window.PortalSync.authSignOut();
      sair();
      setSync({
        state: window.sb ? "idle" : "local"
      });
    },
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: () => setAusModal(true),
      title: "Minhas f\xE9rias e folgas",
      style: {
        width: 36,
        height: 36,
        borderRadius: 8,
        border: "none",
        background: P.ausenteEm(ausencias, user.nome, P.TODAY) ? "var(--orange)" : "transparent",
        color: "#fff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-off",
      size: 18
    })), /*#__PURE__*/React.createElement(SinoNotificacoes, {
      notifs: notifs,
      lidas: lidas,
      onOpen: abrirNotif,
      onMarkAll: () => salvarLidas([...new Set([...lidas, ...notifs.map(n => n.id)])])
    }))
  })), sync.state !== "local" && /*#__PURE__*/React.createElement("div", {
    className: "no-print",
    title: sync.msg || "",
    onClick: () => sync.state === "error" && setSync({
      state: "saved"
    }),
    style: {
      position: "fixed",
      right: 16,
      bottom: 16,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      gap: 7,
      padding: "7px 12px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      boxShadow: "0 2px 10px rgba(0,0,0,.12)",
      cursor: sync.state === "error" ? "pointer" : "default",
      maxWidth: 420,
      background: sync.state === "error" ? "var(--danger-bg)" : "var(--surface, #fff)",
      color: sync.state === "error" ? "var(--danger)" : "var(--slate)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      flexShrink: 0,
      background: sync.state === "error" ? "var(--danger)" : sync.state === "saving" ? "var(--orange)" : "#2E9E5B"
    }
  }), sync.state === "error" ? "Erro ao salvar — " + (sync.msg || "") : sync.state === "saving" ? "Salvando…" : sync.state === "idle" ? "Conectando…" : "Sincronizado"), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: 26
    }
  }, view === "painel" && /*#__PURE__*/React.createElement(window.Painel, _extends({}, common, {
    chamados: chamados,
    podeAtender: podeAtender,
    respAtual: respAtual,
    isAdmin: isAdmin,
    vazio: !inis.length && !chamados.length,
    onCarregarExemplo: carregarExemplo,
    onNavigate: (v, extra) => {
      if (extra && extra.chamadoId) setChamadoFoco(extra.chamadoId);
      setView(v);
    }
  })), view === "iniciativas" && /*#__PURE__*/React.createElement(window.Iniciativas, _extends({}, common, {
    setInis: setInis,
    onOpen: onOpen,
    fNat: fNatIni,
    setFNat: setFNatIni,
    chamados: chamados,
    podeAtender: podeAtender,
    onAbrirChamado: id => {
      setChamadoFoco(id);
      setView("atendimentos");
    }
  })), view === "atividades" && /*#__PURE__*/React.createElement(window.Atividades, _extends({}, common, {
    tarefas: tarefas,
    setTarefas: setTarefas,
    ciclos: ciclos,
    setCiclos: setCiclos,
    marcos: marcos,
    setMarcos: setMarcos
  })), view === "cronograma" && /*#__PURE__*/React.createElement(window.Cronograma, _extends({}, common, {
    selIni: selIni || (inis[0] || {}).id,
    setSelIni: setSelIni,
    tarefas: tarefas,
    setTarefas: setTarefas,
    ciclos: ciclos,
    setCiclos: setCiclos,
    onBack: () => setView(prevView)
  })), view === "atendimentos" && /*#__PURE__*/React.createElement(window.Atendimentos, _extends({}, common, {
    chamados: chamados,
    setChamados: setChamados,
    setInis: setInis,
    setTarefas: setTarefas,
    ciclos: ciclos,
    setCiclos: setCiclos,
    onAbrirIni: onOpen,
    respAtual: respAtual,
    isGestao: isGestao,
    isAdmin: isAdmin,
    foco: chamadoFoco,
    setFoco: setChamadoFoco
  })), view === "canais" && /*#__PURE__*/React.createElement(window.Canais, {
    canais: canais,
    setCanais: setCanais
  }), view === "usuarios" && /*#__PURE__*/React.createElement(window.Usuarios, {
    users: users,
    setUsers: setUsers
  }), view === "usuarios" && isAdmin && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexWrap: "wrap",
      fontSize: 12.5,
      color: "var(--slate)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)"
    }
  }, "Dados do sistema (Administrador):"), /*#__PURE__*/React.createElement("button", {
    onClick: carregarExemplo,
    style: {
      padding: "7px 12px",
      borderRadius: 8,
      border: "1px solid var(--line)",
      background: "#fff",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      color: "var(--blue-dark)"
    }
  }, "Carregar dados de exemplo"), /*#__PURE__*/React.createElement("button", {
    onClick: zerarDados,
    style: {
      padding: "7px 12px",
      borderRadius: 8,
      border: "1px solid var(--danger)",
      background: "#fff",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      color: "var(--danger)"
    }
  }, "Zerar dados")), view === "report" && /*#__PURE__*/React.createElement(window.StatusReport, {
    inis: inis,
    lanc: reportLanc,
    tarefas: reportTarefas,
    iniById: iniById,
    chamados: chamados,
    canais: canaisResumo
  })), /*#__PURE__*/React.createElement("footer", {
    className: "no-print",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "20px 26px 30px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--slate)"
    }
  }, "Portal Gest\xE3o de Pessoas e Cultura | Comunica\xE7\xE3o Interna"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      marginTop: 3
    }
  }, "Desenvolvido pela \xE1rea de People Analytics \xB7 Pessoas e Cultura"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMinhaSenhaModal(true),
    style: {
      marginTop: 8,
      background: "none",
      border: "none",
      color: "var(--blue-light)",
      fontWeight: 700,
      fontSize: 11.5,
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, "Alterar minha senha")), ausModal && /*#__PURE__*/React.createElement(window.AusenciasModal, {
    ausencias: ausencias,
    setAusencias: setAusencias,
    users: usersAtivos,
    user: user,
    podeTodos: isGestao,
    onClose: () => setAusModal(false)
  }), detalhe && /*#__PURE__*/React.createElement(P.AtividadeDetalheModal, {
    a: detalhe,
    users: usersAtivos,
    user: user,
    ausencias: ausencias,
    onPatch: p => patchAtiv(detalhe.key, p),
    onDelete: () => deleteAtiv(detalhe.key),
    onClose: () => setDetalheKey(null)
  }), trocarSenha && /*#__PURE__*/React.createElement(window.AlterarSenhaModal, {
    user: user,
    setUsers: setUsers,
    obrigatorio: true,
    onClose: novaSenha => {
      if (novaSenha) {
        setUser({
          ...user,
          senha: novaSenha,
          precisaTrocarSenha: false
        });
        setTrocarSenha(false);
      }
    }
  }), minhaSenhaModal && /*#__PURE__*/React.createElement(window.AlterarSenhaModal, {
    user: user,
    setUsers: setUsers,
    onClose: novaSenha => {
      if (novaSenha) setUser({
        ...user,
        senha: novaSenha,
        precisaTrocarSenha: false
      });
      setMinhaSenhaModal(false);
    }
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/Atendimentos.jsx
try { (() => {
const urgChip = u => {
  const {
    Chip,
    URG_COLOR
  } = window.PortalUI;
  return u ? /*#__PURE__*/React.createElement(Chip, {
    color: "#fff",
    bg: URG_COLOR[u] || "var(--slate)",
    icon: u === "Urgente" ? "siren" : "gauge"
  }, u) : null;
};
function GuiaChamado() {
  const passos = [["file-pen-line", "Você descreve o que precisa", "Assunto, descrição e o nível de urgência."], ["search-check", "A Comunicação analisa", "A equipe avalia e define o prazo de entrega com você."], ["message-circle", "Você recebe a confirmação", "Pelo WhatsApp, com o número do chamado e um link de acompanhamento."], ["check-circle-2", "Entrega e avaliação", "Ao concluir, você avalia o atendimento."]];
  const {
    Icon
  } = window.PortalUI;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
      gap: 8,
      marginBottom: 16
    }
  }, passos.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--canvas)",
      borderRadius: 10,
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--blue-dark)",
      fontWeight: 800,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 14
  }), " ", i + 1, ". ", t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--slate)",
      marginTop: 4,
      lineHeight: 1.4
    }
  }, d))));
}
function NovoChamadoModal({
  onSave,
  onClose
}) {
  const {
    Modal,
    Field,
    Input,
    Select,
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    AREAS,
    TIPOS_ATENDIMENTO,
    URGENCIAS,
    URG_COLOR,
    inputBase
  } = window.PortalUI;
  const [f, setF] = React.useState({
    area: "",
    tipo: TIPOS_ATENDIMENTO[0],
    urgencia: "Média",
    assunto: "",
    descricao: "",
    whatsapp: "",
    solicitante: ""
  });
  const set = (k, v) => setF({
    ...f,
    [k]: v
  });
  const ok = f.assunto && f.solicitante && f.descricao;
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Abrir chamado",
    sub: "Para pedidos que chegaram pessoalmente, por telefone ou WhatsApp \u2014 preencha em nome do solicitante.",
    onClose: onClose,
    width: 600
  }, /*#__PURE__*/React.createElement(GuiaChamado, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Solicitante"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.solicitante,
    onChange: e => set("solicitante", e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "WhatsApp do solicitante"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.whatsapp,
    onChange: e => set("whatsapp", e.target.value),
    placeholder: "(27) 99999-9999"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\xC1rea / empresa"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.area,
    maxLength: 120,
    onChange: e => set("area", e.target.value),
    placeholder: "ex.: RH Kurum\xE1"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Tipo de solicita\xE7\xE3o"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.tipo,
    onChange: e => set("tipo", e.target.value)
  }, TIPOS_ATENDIMENTO.map(t => /*#__PURE__*/React.createElement("option", {
    key: t
  }, t)))))), /*#__PURE__*/React.createElement(Field, {
    label: "Assunto"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.assunto,
    onChange: e => set("assunto", e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Descri\xE7\xE3o"
  }, /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inputBase,
      minHeight: 90,
      resize: "vertical",
      fontSize: 13.5
    },
    value: f.descricao,
    onChange: e => set("descricao", e.target.value),
    placeholder: "O que precisa ser feito, para quem, onde ser\xE1 usado..."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--slate)",
      marginBottom: 6
    }
  }, "N\xEDvel de urg\xEAncia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: 6,
      marginBottom: 16
    }
  }, URGENCIAS.map(([u, d]) => /*#__PURE__*/React.createElement("button", {
    key: u,
    onClick: () => set("urgencia", u),
    style: {
      textAlign: "left",
      padding: "8px 10px",
      borderRadius: 8,
      border: `2px solid ${f.urgencia === u ? URG_COLOR[u] : "var(--line)"}`,
      background: f.urgencia === u ? "var(--canvas)" : "#fff",
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 12.5,
      color: URG_COLOR[u]
    }
  }, u), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--slate)",
      marginTop: 2
    }
  }, d)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => ok && onSave(f),
    style: {
      width: "100%",
      justifyContent: "center",
      opacity: ok ? 1 : .5
    }
  }, "Registrar chamado"));
}
function AusenciasModal({
  ausencias,
  setAusencias,
  users,
  user,
  podeTodos,
  onClose
}) {
  const {
    Modal,
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    uid,
    TODAY,
    addDays,
    fmtY,
    nomeCurto,
    inputBase,
    respAtendimento,
    GESTORA_ATENDIMENTO,
    TIPOS_AUSENCIA,
    Icon,
    Chip
  } = window.PortalUI;
  const [f, setF] = React.useState({
    nome: user.nome,
    tipo: "Férias",
    de: TODAY,
    ate: addDays(TODAY, 4),
    substituto: "",
    obs: ""
  });
  const [erro, setErro] = React.useState("");
  const add = () => {
    if (!f.nome || !f.de || !f.ate) return;
    if (f.ate < f.de) {
      setErro("A data final precisa ser depois da inicial.");
      return;
    }
    setErro("");
    setAusencias(p => [...p, {
      ...f,
      id: uid("AU"),
      criadoPor: user.nome
    }]);
    setF({
      ...f,
      obs: ""
    });
  };
  const podeEditar = a => podeTodos || a.nome === user.nome || a.criadoPor === user.nome;
  const upd = (id, k, v) => setAusencias(p => p.map(a => a.id === id ? {
    ...a,
    [k]: v
  } : a));
  const lista = ausencias.filter(a => a.ate >= addDays(TODAY, -30)).sort((a, b) => a.de.localeCompare(b.de));
  const lbl = t => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--slate)",
      marginBottom: 4
    }
  }, t);
  const ehGestora = f.nome === GESTORA_ATENDIMENTO || podeTodos;
  return /*#__PURE__*/React.createElement(Modal, {
    title: "F\xE9rias, folgas e aus\xEAncias",
    sub: "Cadastre os per\xEDodos em que voc\xEA n\xE3o estar\xE1 dispon\xEDvel. Quem for te direcionar uma atividade nessas datas recebe um aviso.",
    onClose: onClose,
    width: 720
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--canvas)",
      borderRadius: 10,
      padding: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, lbl("Quem"), /*#__PURE__*/React.createElement("select", {
    style: inputBase,
    value: f.nome,
    disabled: !podeTodos,
    onChange: e => setF({
      ...f,
      nome: e.target.value
    })
  }, users.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.nome
  }, u.nome)))), /*#__PURE__*/React.createElement("div", null, lbl("Tipo"), /*#__PURE__*/React.createElement("select", {
    style: inputBase,
    value: f.tipo,
    onChange: e => setF({
      ...f,
      tipo: e.target.value
    })
  }, TIPOS_AUSENCIA.map(x => /*#__PURE__*/React.createElement("option", {
    key: x
  }, x)))), /*#__PURE__*/React.createElement("div", null, lbl("De"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: inputBase,
    value: f.de,
    onChange: e => setF({
      ...f,
      de: e.target.value,
      ate: f.ate < e.target.value ? e.target.value : f.ate
    })
  })), /*#__PURE__*/React.createElement("div", null, lbl("Até"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: inputBase,
    value: f.ate,
    min: f.de,
    onChange: e => setF({
      ...f,
      ate: e.target.value
    })
  })), ehGestora && /*#__PURE__*/React.createElement("div", null, lbl("Quem cobre os atendimentos (opcional)"), /*#__PURE__*/React.createElement("select", {
    style: inputBase,
    value: f.substituto,
    onChange: e => setF({
      ...f,
      substituto: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014"), users.filter(u => u.nome !== f.nome).map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.nome
  }, u.nome)))), /*#__PURE__*/React.createElement("div", null, lbl("Observação (opcional)"), /*#__PURE__*/React.createElement("input", {
    style: inputBase,
    value: f.obs,
    onChange: e => setF({
      ...f,
      obs: e.target.value
    }),
    placeholder: "ex.: s\xF3 pela manh\xE3"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }),
    onClick: add
  }, "Adicionar per\xEDodo"), erro && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      fontSize: 12.5,
      fontWeight: 600
    }
  }, erro), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: 11.5,
      color: "var(--slate)"
    }
  }, "Atendimentos hoje com ", /*#__PURE__*/React.createElement("b", null, nomeCurto(respAtendimento(ausencias, TODAY)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "var(--slate)",
      textTransform: "uppercase",
      letterSpacing: ".4px",
      marginBottom: 6
    }
  }, "Per\xEDodos da equipe"), lista.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--muted)"
    }
  }, "Nenhum per\xEDodo cadastrado."), lista.map(a => {
    const ed = podeEditar(a);
    const atual = a.de <= TODAY && a.ate >= TODAY;
    const passado = a.ate < TODAY;
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.3fr) 130px 128px 128px minmax(0,1.2fr) 30px",
        gap: 6,
        alignItems: "center",
        padding: "6px 0",
        borderTop: "1px solid var(--canvas)",
        fontSize: 12.5,
        opacity: passado ? .5 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, nomeCurto(a.nome)), atual && /*#__PURE__*/React.createElement(Chip, {
      color: "#fff",
      bg: "var(--orange)"
    }, "agora")), /*#__PURE__*/React.createElement("select", {
      style: inputBase,
      value: a.tipo || "Férias",
      disabled: !ed,
      onChange: e => upd(a.id, "tipo", e.target.value)
    }, TIPOS_AUSENCIA.map(x => /*#__PURE__*/React.createElement("option", {
      key: x
    }, x))), /*#__PURE__*/React.createElement("input", {
      type: "date",
      style: inputBase,
      value: a.de,
      disabled: !ed,
      onChange: e => upd(a.id, "de", e.target.value)
    }), /*#__PURE__*/React.createElement("input", {
      type: "date",
      style: inputBase,
      value: a.ate,
      disabled: !ed,
      onChange: e => upd(a.id, "ate", e.target.value)
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: "var(--slate)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, a.substituto ? "cobre: " + nomeCurto(a.substituto) : "", a.obs ? (a.substituto ? " · " : "") + a.obs : ""), ed ? /*#__PURE__*/React.createElement("button", {
      onClick: () => setAusencias(p => p.filter(x => x.id !== a.id)),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--danger)"
      },
      title: "Excluir"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash-2",
      size: 14
    })) : /*#__PURE__*/React.createElement("span", null));
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose,
    style: {
      width: "100%",
      justifyContent: "center",
      marginTop: 14
    }
  }, "Fechar"));
}
function DesdobrarModal({
  users,
  user,
  ausencias,
  onSave,
  onClose
}) {
  const {
    Modal,
    Field,
    Input,
    Select,
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    uid,
    TODAY,
    CategoriaPicker,
    rotuloResp,
    ausenteEm,
    confirmaResp
  } = window.PortalUI;
  const [f, setF] = React.useState({
    nome: "",
    resp: "",
    s: TODAY,
    e: TODAY,
    cx: ""
  });
  const set = (k, v) => setF(p => ({
    ...p,
    [k]: v,
    ...(k === "s" && p.e < v ? {
      e: v
    } : {})
  }));
  const salvar = () => {
    if (!f.nome || !f.resp || !f.cx) return;
    if (!confirmaResp(ausencias, f.resp, f.s, f.e)) return;
    onSave({
      id: uid("ATV"),
      ...f,
      status: "Não iniciado",
      nova: f.resp !== user.nome,
      aceita: f.resp === user.nome,
      criadoPor: user.nome,
      criadoTs: Date.now()
    });
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Desdobrar em atividade",
    sub: "A atividade entra na agenda do respons\xE1vel (em Atividades) com estas datas.",
    onClose: onClose,
    width: 600
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Atividade"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.nome,
    onChange: e => set("nome", e.target.value),
    placeholder: "ex.: Gravar v\xEDdeo com equipe de vendas"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Respons\xE1vel"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.resp,
    onChange: e => set("resp", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecione..."), users.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.nome
  }, rotuloResp(u, ausencias, f.s, f.e))))))), ausenteEm(ausencias, f.resp, f.s, f.e) && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--danger-bg)",
      color: "var(--danger)",
      borderRadius: 8,
      padding: "8px 11px",
      fontSize: 12.5,
      fontWeight: 600,
      marginBottom: 12
    }
  }, "\u26A0 ", window.PortalUI.nomeCurto(f.resp), " estar\xE1 ausente nessas datas. Escolha outra pessoa ou ajuste o per\xEDodo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "In\xEDcio"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date",
    value: f.s,
    onChange: e => set("s", e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Fim"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date",
    value: f.e,
    min: f.s,
    onChange: e => set("e", e.target.value)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--slate)",
      marginBottom: 6
    }
  }, "Categoria da atividade"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(CategoriaPicker, {
    value: f.cx,
    onChange: v => set("cx", v),
    compact: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--muted)",
      marginBottom: 12
    }
  }, "Se precisar de aprova\xE7\xE3o, quem executa marca isso no detalhe da atividade."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: salvar,
    style: {
      width: "100%",
      justifyContent: "center",
      opacity: f.nome && f.resp && f.cx ? 1 : .5
    }
  }, "Adicionar atividade"));
}
function ConverterModal({
  chamado,
  formato,
  inis,
  onSave,
  onClose
}) {
  const {
    Modal,
    Field,
    Input,
    Select,
    Button,
    NatureBadge
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const existentes = inis.filter(i => i.natureza === formato);
  const [modo, setModo] = React.useState(existentes.length && formato !== "Projeto" ? "existente" : "nova");
  const [nome, setNome] = React.useState(chamado.assunto);
  const [iniId, setIniId] = React.useState(existentes[0] ? existentes[0].id : "");
  const [cicloNome, setCicloNome] = React.useState("Chamado " + chamado.id);
  const label = window.PortalUI.NAT_LABEL[formato];
  const ok = modo === "nova" ? !!nome : !!iniId;
  const radio = (v, t, d) => /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: 9,
      alignItems: "flex-start",
      padding: "10px 12px",
      borderRadius: 9,
      border: `2px solid ${modo === v ? "var(--blue-dark)" : "var(--line)"}`,
      cursor: "pointer",
      marginBottom: 8,
      background: modo === v ? "var(--soft-blue)" : "#fff"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: modo === v,
    onChange: () => setModo(v),
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 13
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 11.5,
      color: "var(--slate)",
      marginTop: 2
    }
  }, d)));
  return /*#__PURE__*/React.createElement(Modal, {
    title: `Transformar em ${label}`,
    sub: `As ${chamado.atividades.length} atividade(s) do chamado passam para a iniciativa. O solicitante continua acompanhando pelo mesmo link.`,
    onClose: onClose,
    width: 520
  }, radio("nova", `Criar nova iniciativa (${label})`, `Origem: apoio a ${chamado.area}.`), modo === "nova" && /*#__PURE__*/React.createElement(Field, {
    label: "Nome da iniciativa"
  }, /*#__PURE__*/React.createElement(Input, {
    value: nome,
    onChange: e => setNome(e.target.value)
  })), radio("existente", `Vincular a ${label.toLowerCase()} que já existe`, existentes.length ? "Ex.: um pedido que é mais uma edição de algo recorrente." : "Ainda não há nenhuma cadastrada."), modo === "existente" && existentes.length > 0 && /*#__PURE__*/React.createElement(Field, {
    label: "Iniciativa"
  }, /*#__PURE__*/React.createElement(Select, {
    value: iniId,
    onChange: e => setIniId(e.target.value)
  }, existentes.map(i => /*#__PURE__*/React.createElement("option", {
    key: i.id,
    value: i.id
  }, i.nome)))), formato !== "Projeto" && /*#__PURE__*/React.createElement(Field, {
    label: "Nome do ciclo"
  }, /*#__PURE__*/React.createElement(Input, {
    value: cicloNome,
    onChange: e => setCicloNome(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => ok && onSave({
      formato,
      modo,
      iniId,
      nome,
      cicloNome
    }),
    style: {
      flex: 1,
      justifyContent: "center",
      opacity: ok ? 1 : .5
    }
  }, "Transformar em ", label), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancelar")));
}
function ChamadoDetalhe({
  chamado,
  ativs,
  inis,
  users,
  user,
  ausencias,
  isGestao,
  isAdmin,
  onPatch,
  onAddAtividade,
  onConverter,
  onAbrirIni,
  abrirAtiv,
  onBack,
  onExcluir
}) {
  const {
    Card,
    Button,
    StatusBadge
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const {
    Icon,
    fmtY,
    fmtPeriodo,
    nomeCurto,
    waLink,
    linkChamado,
    inputBase,
    HistoricoLista,
    AprovChip,
    Chip
  } = P;
  const [desdobrar, setDesdobrar] = React.useState(false);
  const [copiado, setCopiado] = React.useState(false);
  const [converter, setConverter] = React.useState(null);
  const c = chamado;
  const pode = user.perfil !== "Visualizador";
  const souResp = c.gestorResp === user.nome;
  const alvo = c.iniVinculada && inis.find(i => i.id === c.iniVinculada);
  const link = linkChamado(c.token || c.id);
  const lista = ativs.filter(a => a.chamadoOrigem === c.id);
  const primeiro = (c.solicitante || "").split(" ")[0];
  const msgConfirma = `Olá, ${primeiro}! Aqui é da Comunicação Interna do GAB. Recebemos seu chamado nº ${c.id} — "${c.assunto}" — e já iniciamos o atendimento.${c.prazo ? ` Previsão de entrega: ${fmtY(c.prazo)}.` : ""} Acompanhe por aqui: ${link}`;
  const resumo = lista.map(a => `• ${a.titulo}: ${a.statusView}`).join("\n");
  const msgStatus = `Olá, ${primeiro}! Status do seu chamado nº ${c.id} — "${c.assunto}": ${c.status}.${c.prazo ? ` Previsão: ${fmtY(c.prazo)}.` : ""}${resumo ? "\n" + resumo : ""}\nAcompanhe as atualizações em: ${link}`;
  const msgConclui = `Olá, ${primeiro}! Seu chamado nº ${c.id} — "${c.assunto}" — foi concluído. Conta pra gente como foi o atendimento? Leva menos de 1 minuto: ${link}`;
  const copiar = () => {
    navigator.clipboard && navigator.clipboard.writeText(link);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };
  const Info = ({
    label,
    children
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: ".3px",
      marginBottom: 3
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, children));
  const temWa = !!String(c.whatsapp || "").replace(/\D/g, "");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--blue-light)",
      fontWeight: 700,
      fontSize: 12.5,
      fontFamily: "var(--font-sans)",
      padding: 0,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), " Voltar para Atendimentos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      fontFamily: "monospace",
      fontWeight: 700
    }
  }, c.id), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      margin: 0
    }
  }, c.assunto), /*#__PURE__*/React.createElement(StatusBadge, {
    status: c.status
  }), urgChip(c.urgencia), isGestao && /*#__PURE__*/React.createElement("button", {
    onClick: onExcluir,
    title: "Excluir chamado",
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      borderRadius: 8,
      border: "1px solid var(--danger)",
      background: "#fff",
      color: "var(--danger)",
      fontWeight: 700,
      fontSize: 12,
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 14
  }), "Excluir chamado")), !pode && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "var(--canvas)",
      border: "1px solid var(--line)",
      borderRadius: 10,
      padding: "10px 14px",
      marginBottom: 14,
      fontSize: 13,
      color: "var(--slate)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 16
  }), "Somente visualiza\xE7\xE3o (perfil Visualizador)."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,2fr) minmax(280px,1fr)",
      gap: 14,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 20,
      background: "var(--soft-blue)",
      border: "1px solid var(--soft-blue)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "var(--blue-dark)",
      textTransform: "uppercase",
      letterSpacing: ".4px",
      marginBottom: 8
    }
  }, "O que foi pedido"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--ink)",
      whiteSpace: "pre-wrap"
    }
  }, c.descricao || "—"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    color: "var(--blue-dark)",
    bg: "#fff",
    icon: "tag"
  }, c.tipo), /*#__PURE__*/React.createElement(Chip, {
    color: "var(--blue-dark)",
    bg: "#fff",
    icon: "building-2"
  }, c.area), /*#__PURE__*/React.createElement(Chip, {
    color: "var(--blue-dark)",
    bg: "#fff",
    icon: "calendar"
  }, "aberto em ", c.criadoEm || "—"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      marginBottom: 4
    }
  }, "Formato do atendimento"), alvo ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--slate)"
    }
  }, "Este chamado virou"), /*#__PURE__*/React.createElement(window.PortalCIGABComRcioDesignSystem_6ad0f7.NatureBadge, {
    nature: alvo.natureza
  }), /*#__PURE__*/React.createElement("b", null, alvo.nome), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      marginLeft: "auto",
      padding: "6px 12px",
      fontSize: 12
    },
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    }),
    onClick: () => onAbrirIni(alvo.id)
  }, alvo.natureza === "Projeto" ? "Abrir cronograma" : "Abrir ciclos")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--slate)",
      marginBottom: 10
    }
  }, "Um atendimento pode ficar pontual ou se tornar um projeto, uma produ\xE7\xE3o ou um processo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
      gap: 8
    }
  }, P.FORMATOS.map(([v, t, d]) => {
    const on = v === "Atendimento";
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      disabled: !pode,
      onClick: () => pode && !on && setConverter(v),
      style: {
        textAlign: "left",
        padding: "10px 12px",
        borderRadius: 9,
        border: `2px solid ${on ? "var(--blue-dark)" : "var(--line)"}`,
        background: on ? "var(--soft-blue)" : "#fff",
        cursor: on || !pode ? "default" : "pointer",
        opacity: pode || on ? 1 : .55,
        fontFamily: "var(--font-sans)",
        color: "var(--ink)"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 13
      }
    }, on ? "✓ " : "", t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--slate)",
        marginTop: 3,
        lineHeight: 1.35
      }
    }, d));
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14.5
    }
  }, "Atividades do atendimento", alvo ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 12,
      color: "var(--slate)"
    }
  }, " \xB7 em ", alvo.nome) : ""), pode && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "split",
      size: 14
    }),
    style: {
      padding: "6px 12px",
      fontSize: 12
    },
    onClick: () => setDesdobrar(true)
  }, "Desdobrar atividade"))), lista.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--muted)",
      padding: "10px 0"
    }
  }, "Nenhuma atividade ainda. Desdobre o chamado em atividades com respons\xE1vel e datas \u2014 elas aparecem na agenda de Atividades."), lista.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.key,
    onClick: () => abrirAtiv(a.key),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 0",
      borderTop: "1px solid var(--line)",
      cursor: "pointer",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 86,
      fontSize: 12,
      fontWeight: 700,
      color: "var(--slate)"
    }
  }, fmtPeriodo(a.s, a.e)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 180px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13.5
    }
  }, a.titulo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(AprovChip, {
    status: a.aprov
  }), a.pendenteAceite && /*#__PURE__*/React.createElement(Chip, {
    color: "var(--orange)",
    bg: "var(--soft-orange)"
  }, "aguardando aceite"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--slate)",
      width: 120
    }
  }, nomeCurto(a.resp)), /*#__PURE__*/React.createElement(StatusBadge, {
    status: a.statusView
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--muted)"
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      marginBottom: 8
    }
  }, "Hist\xF3rico do chamado"), /*#__PURE__*/React.createElement(HistoricoLista, {
    log: c.log
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Info, {
    label: "Solicitante"
  }, c.solicitante, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--slate)",
      fontWeight: 500
    }
  }, c.area)), /*#__PURE__*/React.createElement(Info, {
    label: "WhatsApp"
  }, c.whatsapp || "—"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: ".3px",
      marginBottom: 3
    }
  }, "Status"), /*#__PURE__*/React.createElement("select", {
    style: inputBase,
    value: c.status,
    disabled: !pode,
    onChange: e => onPatch({
      status: e.target.value
    })
  }, P.STATUS_CHAMADO.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: ".3px",
      marginBottom: 3
    }
  }, "Prazo de entrega (definido pela equipe)"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: inputBase,
    value: c.prazo || "",
    disabled: !pode,
    onChange: e => onPatch({
      prazo: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: ".3px",
      marginBottom: 3
    }
  }, "Respons\xE1vel pelo atendimento"), /*#__PURE__*/React.createElement("select", {
    style: inputBase,
    value: c.gestorResp || "",
    disabled: !pode,
    onChange: e => onPatch({
      gestorResp: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Ningu\xE9m ainda"), users.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.nome
  }, u.nome))), pode && !souResp && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "hand",
      size: 14
    }),
    style: {
      width: "100%",
      justifyContent: "center",
      marginTop: 8
    },
    onClick: () => onPatch({
      gestorResp: user.nome,
      ...(c.status === "Novo" ? {
        status: "Em atendimento"
      } : {})
    })
  }, "Assumir chamado"))), pode && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      marginBottom: 2
    }
  }, "Falar com o solicitante"), !temWa && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--warning)"
    }
  }, "Sem WhatsApp cadastrado."), /*#__PURE__*/React.createElement("a", {
    href: temWa ? waLink(c.whatsapp, msgConfirma) : undefined,
    target: "_blank",
    rel: "noreferrer",
    onClick: () => c.status === "Novo" && onPatch({
      status: "Em atendimento"
    }),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "center",
      padding: "10px 14px",
      borderRadius: 8,
      background: "#25D366",
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      textDecoration: "none",
      opacity: temWa ? 1 : .45,
      pointerEvents: temWa ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 16
  }), " Confirmar atendimento"), /*#__PURE__*/React.createElement("a", {
    href: temWa ? waLink(c.whatsapp, msgStatus) : undefined,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "center",
      padding: "9px 14px",
      borderRadius: 8,
      border: "1px solid #25D366",
      color: "#128C7E",
      fontWeight: 700,
      fontSize: 13,
      textDecoration: "none",
      opacity: temWa ? 1 : .45,
      pointerEvents: temWa ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 15
  }), " Enviar status report"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      marginTop: 4
    }
  }, "Link de acompanhamento (permanente)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    readOnly: true,
    style: {
      ...inputBase,
      fontSize: 11.5
    },
    value: link
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      padding: "6px 10px",
      fontSize: 11.5
    },
    onClick: copiar
  }, copiado ? "Copiado" : "Copiar"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18
    }
  }, c.status !== "Concluído" ? !pode ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--muted)"
    }
  }, "Em andamento com ", nomeCurto(c.gestorResp), ".") : /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle-2",
      size: 15
    }),
    style: {
      width: "100%",
      justifyContent: "center"
    },
    onClick: () => onPatch({
      status: "Concluído",
      concluidoEm: P.TODAY
    })
  }, "Encerrar como conclu\xEDdo") : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      marginBottom: 6
    }
  }, "Pesquisa de satisfa\xE7\xE3o"), c.npsScore == null ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--slate)",
      marginBottom: 8
    }
  }, "Aguardando a nota do solicitante."), pode && /*#__PURE__*/React.createElement("a", {
    href: temWa ? waLink(c.whatsapp, msgConclui) : undefined,
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: "#128C7E",
      fontWeight: 700
    }
  }, "Enviar pesquisa pelo WhatsApp")) : /*#__PURE__*/React.createElement(React.Fragment, null, "Nota recebida: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--success)",
      fontSize: 18
    }
  }, c.npsScore, "/10"), c.npsComentario && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--slate)",
      marginTop: 4
    }
  }, "\"", c.npsComentario, "\"")))))), converter && /*#__PURE__*/React.createElement(ConverterModal, {
    chamado: c,
    formato: converter,
    inis: inis,
    onClose: () => setConverter(null),
    onSave: o => {
      onConverter(o);
      setConverter(null);
    }
  }), desdobrar && /*#__PURE__*/React.createElement(DesdobrarModal, {
    users: users,
    user: user,
    ausencias: ausencias,
    onSave: a => {
      onAddAtividade(a);
      setDesdobrar(false);
    },
    onClose: () => setDesdobrar(false)
  }));
}
function Atendimentos({
  chamados,
  setChamados,
  inis,
  setInis,
  setTarefas,
  ciclos,
  setCiclos,
  onAbrirIni,
  ativs,
  users,
  user,
  ausencias,
  setAusencias,
  respAtual,
  isGestao,
  isAdmin,
  foco,
  setFoco,
  abrirAtiv
}) {
  const {
    Card,
    Button,
    KpiCard,
    StatusBadge
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const {
    Icon,
    nomeCurto,
    fmtY,
    uid,
    agora,
    aplicarPatch,
    linkChamado,
    ausenciaAtiva,
    GESTORA_ATENDIMENTO,
    TODAY
  } = P;
  const [novo, setNovo] = React.useState(false);
  const [ausModal, setAusModal] = React.useState(false);
  const [fStatus, setFStatus] = React.useState("Abertos");
  const [copiado, setCopiado] = React.useState(false);
  const logEvento = (c, campo, valor) => ({
    ...c,
    log: [...(c.log || []), {
      k: "evento",
      campo,
      valor,
      quando: agora(),
      ts: Date.now(),
      por: user.nome
    }].slice(-60)
  });
  const registrar = (id, campo, valor) => setChamados(prev => prev.map(c => c.id === id ? logEvento(c, campo, valor) : c));
  const patchChamado = (id, patch) => setChamados(prev => prev.map(c => c.id === id ? aplicarPatch(c, patch, user.nome) : c));
  const addChamado = f => {
    const c = {
      ...f,
      id: P.nextChamadoId(chamados),
      token: P.novoToken(),
      prazo: "",
      gestorResp: respAtual,
      status: "Novo",
      criadoEm: agora(),
      criadoTs: Date.now(),
      criadoPor: user.nome,
      atividades: [],
      log: [{
        k: "evento",
        campo: "Chamado aberto",
        valor: "por " + nomeCurto(user.nome) + (respAtual ? " · direcionado a " + nomeCurto(respAtual) : ""),
        quando: agora(),
        ts: Date.now(),
        por: user.nome
      }]
    };
    setChamados(prev => [c, ...prev]);
    setNovo(false);
    setFoco(c.id);
  };
  const addAtividade = (chamadoId, a) => {
    const c = chamados.find(x => x.id === chamadoId);
    const descr = (a.nome || "Atividade") + " → " + nomeCurto(a.resp);
    if (c && c.iniVinculada) {
      registrar(c.id, "Atividade desdobrada", descr);
      const nova = {
        ...a,
        chamadoOrigem: c.id
      };
      if (c.formato === "Projeto") setTarefas(p => [...p, {
        ...nova,
        id: uid("T"),
        ini: c.iniVinculada
      }]);else if (ciclos.some(x => x.id === c.cicloVinculado)) setCiclos(p => p.map(x => x.id === c.cicloVinculado ? {
        ...x,
        etapas: [...x.etapas, {
          ...nova,
          id: uid("E")
        }]
      } : x));else {
        const cid = uid("CI");
        setCiclos(p => [...p, {
          id: cid,
          ini: c.iniVinculada,
          ciclo: "Chamado " + c.id,
          chamadoOrigem: c.id,
          etapas: [{
            ...nova,
            id: uid("E")
          }]
        }]);
        patchChamado(c.id, {
          cicloVinculado: cid
        });
      }
      if (c.status === "Novo") patchChamado(c.id, {
        status: "Em atendimento"
      });
      return;
    }
    setChamados(prev => prev.map(c => c.id === chamadoId ? aplicarPatch(logEvento({
      ...c,
      atividades: [...c.atividades, a]
    }, "Atividade desdobrada", descr), c.status === "Novo" ? {
      status: "Em atendimento"
    } : {}, user.nome) : c));
  };
  const converterChamado = (c, {
    formato,
    modo,
    iniId,
    nome,
    cicloNome
  }) => {
    let alvo = iniId;
    if (modo === "nova") {
      alvo = P.nextIniId(inis);
      setInis(p => [...p, {
        id: alvo,
        nome,
        natureza: formato,
        origem: "Outra área",
        area: c.area,
        resp: c.gestorResp || user.nome,
        status: formato === "Projeto" ? "Em andamento" : "Ativo",
        chamadoOrigem: c.id,
        ...(formato === "Projeto" ? {
          ini: P.TODAY
        } : {})
      }]);
    }
    const movidas = c.atividades.map(a => ({
      ...a,
      chamadoOrigem: c.id
    }));
    let cicloId = null;
    if (formato === "Projeto") setTarefas(p => [...p, ...movidas.map(a => ({
      ...a,
      id: uid("T"),
      ini: alvo
    }))]);else {
      cicloId = uid("CI");
      setCiclos(p => [...p, {
        id: cicloId,
        ini: alvo,
        ciclo: cicloNome || "Chamado " + c.id,
        chamadoOrigem: c.id,
        etapas: movidas.map(a => ({
          ...a,
          id: uid("E")
        }))
      }]);
    }
    patchChamado(c.id, {
      formato,
      iniVinculada: alvo,
      cicloVinculado: cicloId,
      atividades: [],
      status: c.status === "Novo" ? "Em atendimento" : c.status
    });
  };
  const sel = foco && chamados.find(c => c.id === foco);
  if (sel) return /*#__PURE__*/React.createElement(ChamadoDetalhe, {
    chamado: sel,
    ativs: ativs,
    inis: inis,
    users: users,
    user: user,
    ausencias: ausencias,
    isGestao: isGestao,
    isAdmin: isAdmin,
    onPatch: p => user.perfil !== "Visualizador" && patchChamado(sel.id, p),
    onAddAtividade: a => addAtividade(sel.id, a),
    onConverter: o => converterChamado(sel, o),
    onAbrirIni: onAbrirIni,
    abrirAtiv: abrirAtiv,
    onBack: () => setFoco(null),
    onExcluir: () => {
      if (!confirm(`Excluir o chamado ${sel.id} "${sel.assunto}"?\n\nAs atividades do chamado também são apagadas e o link do solicitante deixa de funcionar.${sel.iniVinculada ? " A iniciativa criada a partir dele continua existindo." : ""}`)) return;
      setFoco(null);
      setChamados(prev => prev.filter(x => x.id !== sel.id));
    }
  });
  const aus = ausenciaAtiva(ausencias, GESTORA_ATENDIMENTO, TODAY);
  const abertos = c => !["Concluído", "Cancelado"].includes(c.status);
  const filtrados = chamados.filter(c => fStatus === "Todos" ? true : fStatus === "Abertos" ? abertos(c) : c.status === fStatus);
  const semDesdobrar = chamados.filter(c => !ativs.some(x => x.chamadoOrigem === c.id) && abertos(c)).length;
  const copiarLink = () => {
    navigator.clipboard && navigator.clipboard.writeText(linkChamado());
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };
  const pill = k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setFStatus(k),
    style: {
      padding: "7px 13px",
      borderRadius: 8,
      border: `1px solid ${fStatus === k ? "var(--blue-dark)" : "var(--line)"}`,
      background: fStatus === k ? "var(--blue-dark)" : "#fff",
      color: fStatus === k ? "#fff" : "var(--slate)",
      fontSize: 12.5,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, k);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      color: "var(--ink)",
      margin: 0,
      fontFamily: "var(--font-sans)"
    }
  }, "Atendimentos"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--slate)",
      marginTop: 3
    }
  }, "Chamados de outras \xE1reas. A equipe analisa, define o prazo, desdobra em atividades e mant\xE9m o solicitante informado.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "link",
      size: 15
    }),
    onClick: copiarLink
  }, copiado ? "Link copiado" : "Copiar link para solicitantes"), isGestao && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-off",
      size: 15
    }),
    onClick: () => setAusModal(true)
  }, "Aus\xEAncias e substitutos"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus-circle",
      size: 16
    }),
    onClick: () => setNovo(true)
  }, "Abrir chamado"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: aus ? "var(--soft-orange)" : "var(--soft-blue)",
      borderRadius: 10,
      padding: "10px 14px",
      marginBottom: 16,
      fontSize: 13,
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-check",
    size: 16,
    color: aus ? "var(--orange)" : "var(--blue-dark)"
  }), "Novos chamados v\xE3o para ", /*#__PURE__*/React.createElement("b", null, nomeCurto(respAtual)), aus ? /*#__PURE__*/React.createElement(React.Fragment, null, " \u2014 ", nomeCurto(GESTORA_ATENDIMENTO), " ausente at\xE9 ", fmtY(aus.ate)) : "", ".", isGestao && /*#__PURE__*/React.createElement("button", {
    onClick: () => setAusModal(true),
    style: {
      marginLeft: "auto",
      background: "none",
      border: "none",
      color: "var(--blue-light)",
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, "Alterar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Novos",
    value: chamados.filter(c => c.status === "Novo").length,
    sub: "aguardando an\xE1lise",
    color: "var(--orange)",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "inbox",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Sem atividades",
    value: semDesdobrar,
    sub: "faltam desdobrar",
    color: semDesdobrar ? "var(--warning)" : "var(--slate)",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "split",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Em atendimento",
    value: chamados.filter(c => c.status === "Em atendimento").length,
    color: "var(--info)",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Conclu\xEDdos",
    value: chamados.filter(c => c.status === "Concluído").length,
    color: "var(--success)",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle-2",
      size: 16
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 12,
      flexWrap: "wrap"
    }
  }, ["Abertos", "Novo", "Em atendimento", "Aguardando solicitante", "Concluído", "Todos"].map(pill)), /*#__PURE__*/React.createElement(Card, {
    style: {
      overflow: "hidden"
    }
  }, filtrados.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      textAlign: "center",
      color: "var(--muted)",
      fontSize: 13
    }
  }, "Nenhum chamado aqui."), filtrados.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    onClick: () => setFoco(c.id),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "13px 16px",
      borderTop: "1px solid var(--line)",
      cursor: "pointer",
      flexWrap: "wrap",
      background: c.status === "Novo" ? "var(--soft-orange)" : "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      fontFamily: "monospace",
      width: 54,
      fontWeight: 700
    }
  }, c.id), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 240px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, c.assunto), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--slate)",
      marginTop: 2,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, c.solicitante, " \xB7 ", c.area, " \xB7 ", c.tipo, " \xB7 ", ativs.filter(x => x.chamadoOrigem === c.id).length, " atividade(s)", c.iniVinculada ? " · virou " + P.NAT_LABEL[c.formato] : "")), urgChip(c.urgencia), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: c.gestorResp ? "var(--slate)" : "var(--orange)",
      width: 120,
      textAlign: "right",
      fontWeight: c.gestorResp ? 500 : 700
    }
  }, c.gestorResp ? nomeCurto(c.gestorResp) : "sem responsável"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--slate)",
      width: 110,
      textAlign: "right"
    }
  }, c.prazo ? "prazo " + fmtY(c.prazo) : "sem prazo"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: c.status
  })), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--muted)"
  })))), novo && /*#__PURE__*/React.createElement(NovoChamadoModal, {
    onSave: addChamado,
    onClose: () => setNovo(false)
  }), ausModal && /*#__PURE__*/React.createElement(AusenciasModal, {
    ausencias: ausencias,
    setAusencias: setAusencias,
    users: users,
    user: user,
    podeTodos: isGestao,
    onClose: () => setAusModal(false)
  }));
}
window.Atendimentos = Atendimentos;
window.GuiaChamado = GuiaChamado;
window.AusenciasModal = AusenciasModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/Atendimentos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/Atividades.jsx
try { (() => {
function CalendarioMes({
  ativs,
  marcos,
  ausencias,
  mesRef,
  setMesRef,
  selDia,
  onDia,
  onMarco
}) {
  const {
    monthGrid,
    TODAY,
    D,
    Icon,
    nomeCurto
  } = window.PortalUI;
  const {
    cells,
    label
  } = monthGrid(mesRef);
  const counts = {};
  ativs.forEach(a => {
    if (!a.s) return;
    let d = a.s;
    const e = a.e && a.e >= a.s ? a.e : a.s;
    let n = 0;
    while (d <= e && n < 62) {
      counts[d] = (counts[d] || 0) + 1;
      d = window.PortalUI.addDays(d, 1);
      n++;
    }
  });
  const marcosDia = {};
  marcos.forEach(m => {
    let d = m.data;
    const e = m.ate && m.ate >= m.data ? m.ate : m.data;
    let n = 0;
    while (d <= e && n < 62) {
      (marcosDia[d] = marcosDia[d] || []).push(m);
      d = window.PortalUI.addDays(d, 1);
      n++;
    }
  });
  const ausDia = {};
  (ausencias || []).forEach(a => {
    let d = a.de;
    let n = 0;
    while (d <= a.ate && n < 62) {
      (ausDia[d] = ausDia[d] || []).push(a);
      d = window.PortalUI.addDays(d, 1);
      n++;
    }
  });
  const max = Math.max(...Object.values(counts), 1);
  const shiftMes = n => {
    const d = D(mesRef);
    d.setDate(1);
    d.setMonth(d.getMonth() + n);
    setMesRef(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-01`);
  };
  const nb = {
    width: 30,
    height: 30,
    borderRadius: 8,
    border: "1px solid var(--line)",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "var(--slate)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: 18,
      marginBottom: 16,
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: nb,
    onClick: () => shiftMes(-1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      textTransform: "capitalize",
      minWidth: 150,
      textAlign: "center"
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    style: nb,
    onClick: () => shiftMes(1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 14,
      fontSize: 11,
      color: "var(--slate)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: "rgba(15,124,185,.55)"
    }
  }), " atividades"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: "var(--orange)"
    }
  }), " marcos / lembretes"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: "var(--slate)"
    }
  }), " f\xE9rias / folgas"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,minmax(0,1fr))",
      gap: 6,
      fontSize: 10.5,
      color: "var(--muted)",
      marginBottom: 6,
      textAlign: "center",
      fontWeight: 700
    }
  }, ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map(d => /*#__PURE__*/React.createElement("div", {
    key: d
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,minmax(0,1fr))",
      gap: 6
    }
  }, cells.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const c = counts[d] || 0;
    const bg = c === 0 ? "var(--canvas)" : `rgba(15,124,185,${0.12 + c / max * 0.5})`;
    const dark = c > max * 0.6;
    const ms = marcosDia[d] || [];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onDia(d),
      style: {
        minHeight: 62,
        borderRadius: 8,
        background: bg,
        border: selDia === d ? "2px solid var(--blue-dark)" : d === TODAY ? "2px solid var(--orange)" : "2px solid transparent",
        padding: 5,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        cursor: "pointer",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: d === TODAY ? 800 : 600,
        color: dark ? "#fff" : "var(--ink)"
      }
    }, Number(d.slice(-2))), c > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 800,
        color: dark ? "#fff" : "var(--blue-dark)"
      }
    }, c)), ms.slice(0, 2).map(m => /*#__PURE__*/React.createElement("div", {
      key: m.id,
      onClick: e => {
        e.stopPropagation();
        onMarco(m);
      },
      title: m.titulo,
      style: {
        fontSize: 9.5,
        fontWeight: 700,
        color: "#fff",
        background: "var(--orange)",
        borderRadius: 4,
        padding: "1px 4px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, m.titulo)), ms.length > 2 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: "var(--orange)",
        fontWeight: 700
      }
    }, "+", ms.length - 2), (ausDia[d] || []).slice(0, 2).map(a => /*#__PURE__*/React.createElement("div", {
      key: a.id,
      title: `${a.nome} · ${a.tipo || "Ausente"}`,
      style: {
        fontSize: 9.5,
        fontWeight: 700,
        color: "#fff",
        background: "var(--slate)",
        borderRadius: 4,
        padding: "1px 4px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, nomeCurto(a.nome).split(" ")[0], " \xB7 ", a.tipo || "ausente")), (ausDia[d] || []).length > 2 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: "var(--slate)",
        fontWeight: 700
      }
    }, "+", ausDia[d].length - 2, " ausentes"));
  })));
}
function MarcoModal({
  marco,
  onSave,
  onDelete,
  onClose
}) {
  const {
    Modal,
    Field,
    Input,
    Select,
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    TODAY,
    TIPOS_MARCO,
    uid
  } = window.PortalUI;
  const [f, setF] = React.useState(marco && marco.id ? marco : {
    titulo: "",
    data: marco && marco.data || TODAY,
    ate: "",
    tipo: TIPOS_MARCO[0],
    obs: ""
  });
  const set = (k, v) => setF({
    ...f,
    [k]: v
  });
  return /*#__PURE__*/React.createElement(Modal, {
    title: marco && marco.id ? "Editar marco" : "Novo marco na agenda",
    sub: "Datas importantes que n\xE3o s\xE3o atividades da equipe \u2014 anivers\xE1rios, eventos, datas em que n\xE3o d\xE1 para marcar nada.",
    onClose: onClose,
    width: 460
  }, /*#__PURE__*/React.createElement(Field, {
    label: "T\xEDtulo"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.titulo,
    onChange: e => set("titulo", e.target.value),
    placeholder: "ex.: Anivers\xE1rio do presidente"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Data"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date",
    value: f.data,
    onChange: e => set("data", e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "At\xE9 (opcional)"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date",
    value: f.ate || "",
    min: f.data,
    onChange: e => set("ate", e.target.value)
  })))), /*#__PURE__*/React.createElement(Field, {
    label: "Tipo"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.tipo,
    onChange: e => set("tipo", e.target.value)
  }, TIPOS_MARCO.map(t => /*#__PURE__*/React.createElement("option", {
    key: t
  }, t)))), /*#__PURE__*/React.createElement(Field, {
    label: "Observa\xE7\xE3o"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.obs || "",
    onChange: e => set("obs", e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => f.titulo && onSave({
      ...f,
      id: f.id || uid("M")
    }),
    style: {
      flex: 1,
      justifyContent: "center"
    }
  }, "Salvar"), marco && marco.id && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: "var(--danger)",
      borderColor: "var(--danger)"
    },
    onClick: () => onDelete(marco.id)
  }, "Excluir"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancelar")));
}
function Atividades({
  inis,
  ativs,
  tarefas,
  setTarefas,
  ciclos,
  setCiclos,
  marcos,
  setMarcos,
  ausencias,
  abrirAusencias,
  iniById,
  users,
  user,
  abrirAtiv,
  patchAtiv
}) {
  const {
    Card,
    StatusBadge,
    Button,
    Select
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const {
    Icon,
    addDays,
    fmtY,
    fmtPeriodo,
    TODAY,
    D,
    nomeCurto,
    NatChip,
    AprovChip,
    Chip,
    mondayOf,
    overlaps
  } = P;
  const me = user.nome;
  const [period, setPeriod] = React.useState("semana");
  const [dia, setDia] = React.useState(TODAY);
  const [mesRef, setMesRef] = React.useState(TODAY.slice(0, 8) + "01");
  const [viewMode, setViewMode] = React.useState("lista");
  const [fResp, setFResp] = React.useState("");
  const [novaModal, setNovaModal] = React.useState(false);
  const [marcoModal, setMarcoModal] = React.useState(null);
  const minhasNovas = ativs.filter(a => a.resp === me && a.pendenteAceite);
  const ativsF = ativs.filter(a => !fResp || a.resp === fResp);
  const seg = mondayOf(TODAY);
  let start, end, titulo;
  if (period === "hoje") {
    start = end = TODAY;
    titulo = "Hoje · " + fmtY(TODAY);
  } else if (period === "semana") {
    start = seg;
    end = addDays(seg, 6);
    titulo = `Esta semana · ${fmtY(start)} a ${fmtY(end)}`;
  } else if (period === "proxima") {
    start = addDays(seg, 7);
    end = addDays(seg, 13);
    titulo = `Próxima semana · ${fmtY(start)} a ${fmtY(end)}`;
  } else if (period === "mes") {
    const d = D(mesRef);
    start = mesRef;
    end = `${mesRef.slice(0, 8)}${String(P.monthGrid(mesRef).cells.filter(Boolean).length).padStart(2, "0")}`;
    titulo = d.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric"
    });
  } else if (period === "dia") {
    start = end = dia;
    titulo = D(dia).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long"
    });
  }
  const acts = period === "timeline" ? [] : ativsF.filter(a => overlaps(a.s, a.e, start, end)).sort((a, b) => (a.s || "").localeCompare(b.s || ""));
  const ausP = period === "timeline" ? [] : (ausencias || []).filter(a => (!fResp || a.nome === fResp) && overlaps(a.de, a.ate, start, end)).sort((a, b) => a.de.localeCompare(b.de));
  const marcosP = period === "timeline" ? [] : marcos.filter(m => overlaps(m.data, m.ate || m.data, start, end)).sort((a, b) => a.data.localeCompare(b.data));
  const grupos = {};
  acts.forEach(a => {
    const k = viewMode === "responsavel" ? nomeCurto(a.resp) : a.grupo || "—";
    (grupos[k] = grupos[k] || []).push(a);
  });
  const pill = (on, onClick, label, key) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: onClick,
    style: {
      padding: "8px 14px",
      borderRadius: 8,
      border: `1px solid ${on ? "var(--blue-dark)" : "var(--line)"}`,
      background: on ? "var(--blue-dark)" : "#fff",
      color: on ? "#fff" : "var(--slate)",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      whiteSpace: "nowrap"
    }
  }, label);
  const Row = ({
    a
  }) => /*#__PURE__*/React.createElement("div", {
    onClick: () => abrirAtiv(a.key),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 14px",
      borderTop: "1px solid var(--line)",
      background: a.pendenteAceite ? "var(--soft-orange)" : "transparent",
      cursor: "pointer",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 86,
      fontSize: 12,
      fontWeight: 700,
      color: "var(--slate)"
    }
  }, fmtPeriodo(a.s, a.e)), /*#__PURE__*/React.createElement(NatChip, {
    nat: a.nat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 220px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, a.titulo), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      alignItems: "center",
      marginTop: 2
    }
  }, [a.grupo, a.sub].filter(Boolean).join(" · "), /*#__PURE__*/React.createElement(AprovChip, {
    status: a.aprov
  }), a.depAguardando && /*#__PURE__*/React.createElement(Chip, {
    color: "var(--warning)",
    bg: "var(--soft-orange)",
    icon: "link"
  }, "aguarda ", nomeCurto(a.depAguardando.resp), ": ", a.depAguardando.titulo))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--slate)",
      width: 120,
      textAlign: "right"
    }
  }, nomeCurto(a.resp)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: a.statusView
  })), a.pendenteAceite && a.resp === me ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      padding: "5px 10px",
      fontSize: 11.5
    },
    onClick: () => patchAtiv(a.key, {
      aceita: true,
      nova: false
    })
  }, "Aceitar"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      padding: "5px 10px",
      fontSize: 11.5
    },
    onClick: () => abrirAtiv(a.key)
  }, "Recusar")) : a.raw.recusada ? /*#__PURE__*/React.createElement(Chip, {
    color: "var(--danger)",
    bg: "var(--danger-bg)"
  }, "Recusada") : /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--muted)"
  }));
  const MarcoRow = ({
    m
  }) => /*#__PURE__*/React.createElement("div", {
    onClick: () => setMarcoModal(m),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "9px 14px",
      borderTop: "1px solid var(--line)",
      background: "var(--soft-orange)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 86,
      fontSize: 12,
      fontWeight: 700,
      color: "var(--orange)"
    }
  }, fmtPeriodo(m.data, m.ate)), /*#__PURE__*/React.createElement(Chip, {
    color: "#fff",
    bg: "var(--orange)",
    icon: "flag"
  }, m.tipo), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13,
      fontWeight: 600
    }
  }, m.titulo, m.obs && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--slate)",
      fontWeight: 400
    }
  }, " \xB7 ", m.obs)));
  const AusRow = ({
    a
  }) => /*#__PURE__*/React.createElement("div", {
    onClick: abrirAusencias,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "9px 14px",
      borderTop: "1px solid var(--line)",
      background: "var(--canvas)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 86,
      fontSize: 12,
      fontWeight: 700,
      color: "var(--slate)"
    }
  }, fmtPeriodo(a.de, a.ate)), /*#__PURE__*/React.createElement(Chip, {
    color: "#fff",
    bg: "var(--slate)",
    icon: "calendar-off"
  }, a.tipo || "Ausente"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13,
      fontWeight: 600
    }
  }, nomeCurto(a.nome), " indispon\xEDvel", a.obs ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--slate)",
      fontWeight: 400
    }
  }, " \xB7 ", a.obs) : ""));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      color: "var(--ink)",
      margin: 0,
      fontFamily: "var(--font-sans)"
    }
  }, "Atividades"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--slate)",
      marginTop: 3
    }
  }, "A agenda da equipe: o que cada um tem hoje, nesta semana e na pr\xF3xima. Clique numa atividade para ver o detalhe.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-off",
      size: 15
    }),
    onClick: abrirAusencias
  }, "F\xE9rias e folgas"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "flag",
      size: 15
    }),
    onClick: () => setMarcoModal({
      data: period === "dia" ? dia : TODAY
    })
  }, "Novo marco"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus-circle",
      size: 16
    }),
    onClick: () => setNovaModal(true)
  }, "Nova atividade"))), minhasNovas.length > 0 && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      marginBottom: 16,
      overflow: "hidden",
      border: "2px solid var(--orange)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--orange)",
      color: "#fff",
      padding: "10px 16px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontWeight: 700,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16
  }), " ", minhasNovas.length, " atividade", minhasNovas.length > 1 ? "s" : "", " direcionada", minhasNovas.length > 1 ? "s" : "", " para voc\xEA \u2014 aceite ou recuse"), minhasNovas.map(a => /*#__PURE__*/React.createElement(Row, {
    key: a.key,
    a: a
  }))), /*#__PURE__*/React.createElement(CalendarioMes, {
    ativs: ativsF,
    marcos: marcos,
    ausencias: ausencias,
    mesRef: mesRef,
    setMesRef: setMesRef,
    selDia: period === "dia" ? dia : null,
    onDia: d => {
      setDia(d);
      setPeriod("dia");
    },
    onMarco: m => setMarcoModal(m)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, [["hoje", "Hoje"], ["semana", "Esta semana"], ["proxima", "Próxima semana"], ["mes", "Mês"], ["timeline", "Timeline"]].map(([k, l]) => pill(period === k, () => setPeriod(k), l, k)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: fResp,
    onChange: e => setFResp(e.target.value),
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Toda a equipe"), /*#__PURE__*/React.createElement("option", {
    value: me
  }, "Somente as minhas"), users.filter(u => u.nome !== me).map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.nome
  }, u.nome))), period !== "timeline" && /*#__PURE__*/React.createElement(Select, {
    value: viewMode,
    onChange: e => setViewMode(e.target.value),
    style: {
      width: 190
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "lista"
  }, "Lista por data"), /*#__PURE__*/React.createElement("option", {
    value: "iniciativa"
  }, "Agrupar por iniciativa"), /*#__PURE__*/React.createElement("option", {
    value: "responsavel"
  }, "Agrupar por respons\xE1vel")))), period !== "timeline" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      textTransform: "capitalize"
    }
  }, titulo), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      fontSize: 12.5,
      color: "var(--slate)"
    }
  }, acts.length, " atividade(s)", marcosP.length ? ` · ${marcosP.length} marco(s)` : "", ausP.length ? ` · ${ausP.length} ausência(s)` : "")), period === "timeline" ? /*#__PURE__*/React.createElement(AtividadesTimeline, {
    inis: inis,
    ativs: ativsF
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, acts.length === 0 && marcosP.length === 0 && ausP.length === 0 && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 30,
      textAlign: "center",
      color: "var(--muted)"
    }
  }, "Nenhuma atividade neste per\xEDodo."), viewMode === "lista" && (acts.length > 0 || marcosP.length > 0 || ausP.length > 0) && /*#__PURE__*/React.createElement(Card, {
    style: {
      overflow: "hidden"
    }
  }, ausP.map(a => /*#__PURE__*/React.createElement(AusRow, {
    key: a.id,
    a: a
  })), marcosP.map(m => /*#__PURE__*/React.createElement(MarcoRow, {
    key: m.id,
    m: m
  })), acts.map(a => /*#__PURE__*/React.createElement(Row, {
    key: a.key,
    a: a
  }))), viewMode !== "lista" && (marcosP.length > 0 || ausP.length > 0) && /*#__PURE__*/React.createElement(Card, {
    style: {
      overflow: "hidden",
      marginBottom: 12
    }
  }, ausP.map(a => /*#__PURE__*/React.createElement(AusRow, {
    key: a.id,
    a: a
  })), marcosP.map(m => /*#__PURE__*/React.createElement(MarcoRow, {
    key: m.id,
    m: m
  }))), viewMode !== "lista" && Object.entries(grupos).map(([nome, list]) => /*#__PURE__*/React.createElement(Card, {
    key: nome,
    style: {
      marginBottom: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      background: "var(--canvas)",
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontWeight: 700,
      fontSize: 13.5
    }
  }, viewMode === "iniciativa" ? /*#__PURE__*/React.createElement(NatChip, {
    nat: list[0].nat
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 15
  }), " ", nome, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      fontWeight: 500,
      fontSize: 12
    }
  }, "\xB7 ", list.length, " atividade(s)")), list.map(a => /*#__PURE__*/React.createElement(Row, {
    key: a.key,
    a: a
  }))))), novaModal && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(22,40,61,.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 60,
      padding: 20
    },
    onClick: e => e.target === e.currentTarget && setNovaModal(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      padding: 24,
      width: 580,
      maxWidth: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      boxShadow: "var(--shadow-modal)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setNovaModal(false),
    style: {
      position: "absolute",
      top: 18,
      right: 18,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--slate)",
      fontSize: 16
    }
  }, "\u2715"), /*#__PURE__*/React.createElement(window.Lancar, {
    inis: inis,
    ciclos: ciclos,
    setTarefas: setTarefas,
    setCiclos: setCiclos,
    users: users,
    user: user,
    ausencias: ausencias,
    dataInicial: period === "dia" ? dia : TODAY
  }))), marcoModal && /*#__PURE__*/React.createElement(MarcoModal, {
    marco: marcoModal,
    onClose: () => setMarcoModal(null),
    onSave: m => {
      setMarcos(prev => prev.some(x => x.id === m.id) ? prev.map(x => x.id === m.id ? m : x) : [...prev, m]);
      setMarcoModal(null);
    },
    onDelete: id => {
      setMarcos(prev => prev.filter(x => x.id !== id));
      setMarcoModal(null);
    }
  }));
}
function AtividadesTimeline({
  inis,
  ativs
}) {
  const {
    daysBetween,
    fmt,
    TODAY
  } = window.PortalUI;
  const ds = ativs.filter(a => a.s);
  if (!ds.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)",
      fontSize: 13
    }
  }, "Sem dados para exibir.");
  const min = ds.reduce((m, a) => a.s < m ? a.s : m, ds[0].s);
  const max = ds.reduce((m, a) => (a.e || a.s) > m ? a.e || a.s : m, ds[0].e || ds[0].s);
  const total = Math.max(daysBetween(min, max), 1);
  const natColor = {
    Projeto: "var(--nat-projeto)",
    Produto: "var(--nat-produto)",
    Processo: "var(--nat-processo)",
    Atendimento: "var(--blue-dark)"
  };
  const grupos = {};
  ds.forEach(a => {
    const k = a.grupo || "—";
    (grupos[k] = grupos[k] || {
      nat: a.nat,
      list: []
    }).list.push(a);
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: 18,
      boxShadow: "var(--shadow-card)",
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 600
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 200,
      display: "flex",
      justifyContent: "space-between",
      fontSize: 10,
      color: "var(--muted)",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, fmt(min)), /*#__PURE__*/React.createElement("span", null, fmt(max))), Object.entries(grupos).map(([nome, g]) => {
    const s = g.list.reduce((m, o) => o.s < m ? o.s : m, g.list[0].s);
    const e = g.list.reduce((m, o) => (o.e || o.s) > m ? o.e || o.s : m, g.list[0].e || g.list[0].s);
    return /*#__PURE__*/React.createElement("div", {
      key: nome,
      style: {
        display: "flex",
        alignItems: "center",
        height: 30,
        borderTop: "1px solid var(--canvas)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200,
        fontSize: 12,
        fontWeight: 600,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, nome), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: 1,
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 9,
        left: `${daysBetween(min, s) / total * 100}%`,
        width: `${Math.max(daysBetween(s, e) / total * 100, 1.5)}%`,
        height: 12,
        background: natColor[g.nat],
        borderRadius: 4,
        opacity: .85
      }
    })));
  })));
}
window.Atividades = Atividades;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/Atividades.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/Canais.jsx
try { (() => {
const MESES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
const CANAIS_DEF = {
  podcast_mensal: {
    titulo: "Podcast Nosso Legado · dados do mês",
    path: ["podcast", "mensal"],
    campos: [["mes", "Mês", "month"], ["inscritos", "Inscritos", "number"], ["views", "Views no mês", "number"], ["tempoMedio", "Tempo médio de visualização", "text"]]
  },
  podcast_ep: {
    titulo: "Podcast Nosso Legado · episódio",
    path: ["podcast", "episodios"],
    campos: [["ep", "Episódio", "number"], ["entrevistado", "Entrevistado", "text"], ["pub", "Data de publicação", "date"], ["views", "Views YouTube", "number"], ["viewsPlat", "Views plataformas de podcast", "number"], ["imp", "Impressões YouTube", "number"]]
  },
  revista: {
    titulo: "Revista Na Direção · edição",
    path: ["revista", "edicoes"],
    campos: [["edicao", "Edição", "text"], ["pub", "Data de publicação", "date"], ["acessos", "Acessos / leituras", "number"]]
  },
  instagram: {
    titulo: "Instagram · dados do mês",
    path: ["instagram", "mensal"],
    campos: [["mes", "Mês", "month"], ["seguidores", "Seguidores", "number"], ["alcance", "Alcance", "number"], ["impressoes", "Impressões", "number"], ["engajamento", "Engajamento (%)", "number"]]
  },
  linkedin: {
    titulo: "LinkedIn · dados do mês",
    path: ["linkedin", "mensal"],
    campos: [["mes", "Mês", "month"], ["seguidores", "Seguidores", "number"], ["visitantes", "Visitantes únicos", "number"], ["engajamento", "Engajamento (%)", "number"]]
  }
};
function InserirDadoModal({
  def,
  inicial,
  onSave,
  onDelete,
  onClose
}) {
  const {
    Modal,
    Field,
    Input,
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const [f, setF] = React.useState(inicial || {});
  return /*#__PURE__*/React.createElement(Modal, {
    title: (inicial ? "Editar · " : "Inserir dado · ") + def.titulo,
    sub: "Lan\xE7amento manual \u2014 para v\xE1rios meses de uma vez, use Importar planilha.",
    onClose: onClose,
    width: 460
  }, def.campos.map(([k, label, type]) => /*#__PURE__*/React.createElement(Field, {
    key: k,
    label: label
  }, /*#__PURE__*/React.createElement(Input, {
    type: type === "month" ? "month" : type,
    step: type === "number" ? "any" : undefined,
    value: f[k] ?? "",
    onChange: e => setF({
      ...f,
      [k]: type === "number" ? e.target.value === "" ? "" : Number(e.target.value) : e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onSave(f),
    style: {
      flex: 1,
      justifyContent: "center"
    }
  }, "Salvar"), inicial && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: "var(--danger)",
      borderColor: "var(--danger)"
    },
    onClick: onDelete
  }, "Excluir"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancelar")));
}
function EvolucaoMensal({
  titulo,
  mensal,
  campo,
  color,
  ano
}) {
  const dados = MESES.map((_, i) => {
    const r = mensal.find(m => m.mes === `${ano}-${String(i + 1).padStart(2, "0")}`);
    return r ? Number(r[campo]) || 0 : 0;
  });
  const max = Math.max(...dados, 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--slate)",
      marginBottom: 8
    }
  }, titulo, " \u2014 evolu\xE7\xE3o ", ano), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 6,
      height: 96
    }
  }, dados.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "var(--slate)",
      height: 11
    }
  }, v ? v >= 1000 ? Math.round(v / 100) / 10 + "k" : v : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: Math.max(v / max * 62, 2),
      background: v ? color : "var(--line)",
      borderRadius: 3
    },
    title: v
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      color: "var(--muted)"
    }
  }, MESES[i])))));
}
function Canais({
  canais,
  setCanais
}) {
  const {
    Card,
    KpiCard,
    SectionHeader,
    Button,
    Select
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    Icon,
    fmtY,
    exportCSV,
    parseCSV
  } = window.PortalUI;
  const [ano, setAno] = React.useState(new Date().getFullYear());
  const [modal, setModal] = React.useState(null);
  const fileRef = React.useRef(null);
  const [importDef, setImportDef] = React.useState(null);
  const [msg, setMsg] = React.useState("");
  const C = {
    podcast: {
      mensal: [],
      episodios: []
    },
    revista: {
      edicoes: []
    },
    instagram: {
      mensal: []
    },
    linkedin: {
      mensal: []
    },
    ...canais
  };
  const lista = def => (C[def.path[0]] || {})[def.path[1]] || [];
  const setLista = (def, fn) => setCanais(prev => {
    const p = {
      ...C,
      ...prev
    };
    return {
      ...p,
      [def.path[0]]: {
        ...p[def.path[0]],
        [def.path[1]]: fn((p[def.path[0]] || {})[def.path[1]] || [])
      }
    };
  });
  const salvar = (key, f, idx) => {
    const def = CANAIS_DEF[key];
    setLista(def, arr => {
      const key0 = def.campos[0][0];
      let out = idx != null ? arr.map((x, i) => i === idx ? f : x) : [...arr.filter(x => def.campos[0][2] !== "month" || x[key0] !== f[key0]), f];
      return out.sort((a, b) => String(a[key0]).localeCompare(String(b[key0]), "pt-BR", {
        numeric: true
      }));
    });
    setModal(null);
  };
  const excluir = (key, idx) => {
    setLista(CANAIS_DEF[key], arr => arr.filter((_, i) => i !== idx));
    setModal(null);
  };
  const modelo = key => {
    const d = CANAIS_DEF[key];
    exportCSV(`modelo-${key}.csv`, d.campos.map(c => c[1] + (c[2] === "month" ? " (AAAA-MM)" : c[2] === "date" ? " (AAAA-MM-DD ou DD/MM/AAAA)" : "")), []);
  };
  const importar = e => {
    const file = e.target.files[0];
    if (!file || !importDef) return;
    const reader = new FileReader();
    reader.onload = () => {
      const def = CANAIS_DEF[importDef];
      const rows = parseCSV(reader.result).map(r => {
        const o = {};
        def.campos.forEach(([k,, t], i) => {
          let v = r[i] || "";
          if (t === "number") v = v === "" ? "" : Number(String(v).replace(/\./g, "").replace(",", "."));
          if (t === "date" && /^\d{2}\/\d{2}\/\d{4}$/.test(v)) {
            const [d, m, y] = v.split("/");
            v = `${y}-${m}-${d}`;
          }
          o[k] = v;
        });
        return o;
      }).filter(o => o[def.campos[0][0]] !== "");
      rows.forEach(r => salvar(importDef, r));
      setMsg(`${rows.length} linha(s) importada(s).`);
      setTimeout(() => setMsg(""), 3000);
    };
    reader.readAsText(file, "utf-8");
    e.target.value = "";
  };
  const ultimo = arr => arr.slice().sort((a, b) => String(a.mes).localeCompare(String(b.mes))).pop() || {};
  const num = v => v === undefined || v === "" ? "—" : Number(v).toLocaleString("pt-BR");
  const Acoes = ({
    k,
    extra
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, extra, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }),
    onClick: () => setModal({
      key: k
    }),
    style: {
      padding: "6px 12px",
      fontSize: 12
    }
  }, "Inserir dado"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 14
    }),
    onClick: () => {
      setImportDef(k);
      setTimeout(() => fileRef.current && fileRef.current.click(), 0);
    },
    style: {
      padding: "6px 12px",
      fontSize: 12
    }
  }, "Importar planilha"), /*#__PURE__*/React.createElement(Button, {
    variant: "icon",
    onClick: () => modelo(k),
    title: "Baixar modelo de importa\xE7\xE3o"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-spreadsheet",
    size: 15
  })));
  const Tabela = ({
    k,
    cols
  }) => {
    const def = CANAIS_DEF[k];
    const arr = lista(def);
    if (!arr.length) return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted)",
        padding: "10px 0 18px"
      }
    }, "Nenhum dado lan\xE7ado ainda.");
    return /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: 0,
        marginBottom: 12,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: 12.5,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        background: "var(--canvas)",
        textAlign: "left",
        color: "var(--slate)"
      }
    }, def.campos.map(c => /*#__PURE__*/React.createElement("th", {
      key: c[0],
      style: {
        padding: "9px 14px",
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase"
      }
    }, c[1])), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, arr.map((r, i) => /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: {
        borderTop: "1px solid var(--line)"
      }
    }, def.campos.map(([kk,, t]) => /*#__PURE__*/React.createElement("td", {
      key: kk,
      style: {
        padding: "9px 14px"
      }
    }, t === "date" ? fmtY(r[kk]) : t === "number" ? num(r[kk]) : r[kk] || "—")), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "4px 10px",
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "icon",
      onClick: () => setModal({
        key: k,
        idx: i
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: 14
    })))))))));
  };
  const pM = ultimo(C.podcast.mensal),
    iM = ultimo(C.instagram.mensal),
    lM = ultimo(C.linkedin.mensal);
  const mesLabel = m => m && m.mes ? `${MESES[Number(m.mes.slice(5, 7)) - 1]}/${m.mes.slice(0, 4)}` : "—";
  const ultEd = C.revista.edicoes.slice().sort((a, b) => String(a.pub).localeCompare(String(b.pub))).pop() || {};
  const bloco = {
    marginBottom: 30
  };
  const head = (titulo, k, extra) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, null, titulo), /*#__PURE__*/React.createElement(Acoes, {
    k: k,
    extra: extra
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: ".csv,text/csv",
    style: {
      display: "none"
    },
    onChange: importar
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      color: "var(--ink)",
      margin: 0,
      fontFamily: "var(--font-sans)"
    }
  }, "Canais de Comunica\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--slate)",
      marginTop: 3
    }
  }, "Indicadores dos canais pr\xF3prios. Lance os dados do m\xEAs em \"Inserir dado\" ou importe a planilha.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, msg && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--success)",
      fontWeight: 700,
      fontSize: 12.5
    }
  }, msg), /*#__PURE__*/React.createElement(Select, {
    value: ano,
    onChange: e => setAno(Number(e.target.value)),
    style: {
      width: 120
    }
  }, [ano - 1, ano, ano + 1].filter((v, i, a) => a.indexOf(v) === i).map(y => /*#__PURE__*/React.createElement("option", {
    key: y,
    value: y
  }, y))))), /*#__PURE__*/React.createElement("div", {
    style: bloco
  }, head("Podcast Nosso Legado", "podcast_mensal", /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mic",
      size: 14
    }),
    onClick: () => setModal({
      key: "podcast_ep"
    }),
    style: {
      padding: "6px 12px",
      fontSize: 12
    }
  }, "Novo epis\xF3dio")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Inscritos",
    value: num(pM.inscritos),
    sub: mesLabel(pM),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mic",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Views no m\xEAs",
    value: num(pM.views),
    sub: mesLabel(pM),
    color: "var(--nat-produto)"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Tempo m\xE9dio",
    value: pM.tempoMedio || "—",
    sub: "por epis\xF3dio",
    color: "var(--nat-produto)"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Epis\xF3dios",
    value: C.podcast.episodios.length,
    sub: "cadastrados"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(EvolucaoMensal, {
    titulo: "Views do podcast",
    mensal: C.podcast.mensal,
    campo: "views",
    color: "var(--nat-produto)",
    ano: ano
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--slate)",
      margin: "4px 0 8px"
    }
  }, "Epis\xF3dios"), /*#__PURE__*/React.createElement(Tabela, {
    k: "podcast_ep"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--slate)",
      margin: "4px 0 8px"
    }
  }, "Dados mensais"), /*#__PURE__*/React.createElement(Tabela, {
    k: "podcast_mensal"
  })), /*#__PURE__*/React.createElement("div", {
    style: bloco
  }, head("Revista Na Direção", "revista"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "\xDAltima edi\xE7\xE3o",
    value: ultEd.edicao || "—",
    sub: ultEd.pub ? fmtY(ultEd.pub) : "",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "book-open",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Acessos da \xFAltima edi\xE7\xE3o",
    value: num(ultEd.acessos),
    color: "var(--nat-produto)"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Edi\xE7\xF5es",
    value: C.revista.edicoes.length,
    sub: "cadastradas"
  })), /*#__PURE__*/React.createElement(Tabela, {
    k: "revista"
  })), /*#__PURE__*/React.createElement("div", {
    style: bloco
  }, head("Instagram", "instagram"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Seguidores",
    value: num(iM.seguidores),
    sub: mesLabel(iM),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "at-sign",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Alcance",
    value: num(iM.alcance),
    sub: mesLabel(iM),
    color: "var(--nat-produto)"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Engajamento",
    value: iM.engajamento !== undefined && iM.engajamento !== "" ? iM.engajamento + "%" : "—",
    color: "var(--success)"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(EvolucaoMensal, {
    titulo: "Seguidores Instagram",
    mensal: C.instagram.mensal,
    campo: "seguidores",
    color: "var(--blue-light)",
    ano: ano
  })), /*#__PURE__*/React.createElement(Tabela, {
    k: "instagram"
  })), /*#__PURE__*/React.createElement("div", {
    style: bloco
  }, head("LinkedIn", "linkedin"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Seguidores",
    value: num(lM.seguidores),
    sub: mesLabel(lM),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "briefcase",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Visitantes \xFAnicos",
    value: num(lM.visitantes),
    sub: mesLabel(lM),
    color: "var(--nat-produto)"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Engajamento",
    value: lM.engajamento !== undefined && lM.engajamento !== "" ? lM.engajamento + "%" : "—",
    color: "var(--success)"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(EvolucaoMensal, {
    titulo: "Seguidores LinkedIn",
    mensal: C.linkedin.mensal,
    campo: "seguidores",
    color: "var(--orange)",
    ano: ano
  })), /*#__PURE__*/React.createElement(Tabela, {
    k: "linkedin"
  })), modal && /*#__PURE__*/React.createElement(InserirDadoModal, {
    def: CANAIS_DEF[modal.key],
    inicial: modal.idx != null ? lista(CANAIS_DEF[modal.key])[modal.idx] : null,
    onSave: f => salvar(modal.key, f, modal.idx),
    onDelete: () => excluir(modal.key, modal.idx),
    onClose: () => setModal(null)
  }));
}
window.Canais = Canais;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/Canais.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/Cronograma.jsx
try { (() => {
function Gantt({
  itens
}) {
  const {
    fmt,
    addDays,
    daysBetween,
    inRange,
    TODAY
  } = window.PortalUI;
  const ts = itens.filter(t => t.s);
  if (!ts.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)",
      fontSize: 13,
      padding: 20
    }
  }, "Sem atividades com data.");
  const min = ts.reduce((m, t) => t.s < m ? t.s : m, ts[0].s);
  const max = ts.reduce((m, t) => (t.e || t.s) > m ? t.e || t.s : m, ts[0].e || ts[0].s);
  const total = Math.max(daysBetween(min, max), 1);
  const ticks = [];
  for (let d = 0; d <= total; d += 7) ticks.push(d);
  const pos = s => daysBetween(min, s) / total * 100;
  const wid = (s, e) => Math.max(daysBetween(s, e) + 1, 1) / (total + 1) * 100;
  const todayPos = inRange(TODAY, min, max) ? pos(TODAY) : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 620,
      position: "relative",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 22,
      marginLeft: 230,
      borderBottom: "1px solid var(--line)"
    }
  }, ticks.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: `${d / total * 100}%`,
      fontSize: 10,
      color: "var(--muted)",
      transform: "translateX(-50%)"
    }
  }, fmt(addDays(min, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, todayPos !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 230,
      right: 0,
      top: 0,
      bottom: 0,
      pointerEvents: "none",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `${todayPos}%`,
      top: 0,
      bottom: 0,
      width: 2,
      background: "var(--orange)",
      opacity: .6
    }
  })), ts.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.key,
    style: {
      display: "flex",
      alignItems: "center",
      height: 30,
      borderBottom: "1px solid var(--canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 230,
      fontSize: 12,
      color: "var(--slate)",
      paddingLeft: 8,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, t.wbs, ". ", t.titulo), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 8,
      left: `${pos(t.s)}%`,
      width: `${wid(t.s, t.e || t.s)}%`,
      height: 13,
      background: t.atrasada ? "var(--danger)" : "var(--nat-projeto)",
      borderRadius: 4,
      opacity: t.status === "Não iniciado" ? .4 : 1
    }
  })))))));
}
const cellStyle = {
  border: "1px solid transparent",
  background: "transparent",
  padding: "6px 8px",
  fontSize: 13,
  fontFamily: "var(--font-sans)",
  color: "var(--ink)",
  width: "100%",
  boxSizing: "border-box",
  borderRadius: 6
};
const focusCell = e => {
  e.target.style.border = "1px solid var(--blue-light)";
  e.target.style.background = "#fff";
};
const blurCell = e => {
  e.target.style.border = "1px solid transparent";
  e.target.style.background = "transparent";
};
const respPatch = (nome, me) => nome && nome !== me ? {
  resp: nome,
  nova: true,
  aceita: false,
  recusada: false,
  criadoPor: me,
  criadoTs: Date.now()
} : {
  resp: nome,
  nova: false,
  aceita: true,
  recusada: false
};
function RespSelect({
  value,
  users,
  onChange,
  style,
  ausencias,
  s,
  e
}) {
  const P = window.PortalUI;
  const aus = P.ausenteEm(ausencias, value, s, e);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("select", {
    style: {
      ...cellStyle,
      ...style,
      color: aus ? "var(--danger)" : "var(--ink)"
    },
    value: value || "",
    onFocus: focusCell,
    onBlur: blurCell,
    onChange: ev => P.confirmaResp(ausencias, ev.target.value, s, e) && onChange(ev)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecione..."), users.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.nome
  }, P.rotuloResp(u, ausencias, s, e)))), aus && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      color: "var(--danger)",
      fontWeight: 700,
      paddingLeft: 8
    }
  }, (aus.tipo || "ausente").toLowerCase(), " at\xE9 ", P.fmt(aus.ate)));
}
function StatusSelect({
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("select", {
    style: {
      ...cellStyle,
      ...style
    },
    value: value,
    onFocus: focusCell,
    onBlur: blurCell,
    onChange: onChange
  }, window.PortalUI.STATUS_ATV.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)));
}
function CategoriaSelect({
  value,
  onChange,
  style
}) {
  const cs = window.PortalUI.CATEGORIAS;
  const cur = cs.find(c => c.v === value);
  return /*#__PURE__*/React.createElement("select", {
    title: cur ? cur.def : "",
    style: {
      ...cellStyle,
      ...style
    },
    value: value || "P",
    onFocus: focusCell,
    onBlur: blurCell,
    onChange: onChange
  }, cs.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.v,
    value: c.v,
    title: c.def
  }, c.v, " \xB7 ", c.nome)));
}
function DependenciaCell({
  value,
  options,
  aguardando,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("select", {
    style: {
      ...cellStyle,
      width: 100
    },
    value: value || "",
    onFocus: focusCell,
    onBlur: blurCell,
    onChange: onChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014"), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.id,
    value: o.id
  }, o.label))), value && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      color: aguardando ? "var(--warning)" : "var(--success)",
      fontWeight: 700,
      marginTop: 2,
      paddingLeft: 8
    }
  }, aguardando ? "Aguardando" : "Liberada"));
}
function RowActions({
  a,
  abrirAtiv,
  onDelete
}) {
  const {
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    Icon
  } = window.PortalUI;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "icon",
    onClick: () => abrirAtiv(a.key),
    title: "Abrir detalhe, aprova\xE7\xE3o e hist\xF3rico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "panel-right-open",
    size: 15
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "icon",
    onClick: onDelete,
    style: {
      color: "var(--danger)"
    },
    title: "Excluir"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 14
  })));
}
function CicloCard({
  ciclo,
  ativsCiclo,
  users,
  user,
  ausencias,
  patchAtiv,
  abrirAtiv,
  setCiclos,
  onDuplicar
}) {
  const {
    Card,
    ProgressBar,
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    Icon,
    AprovChip,
    uid,
    TODAY,
    concluido
  } = window.PortalUI;
  const conc = ativsCiclo.filter(e => concluido(e.status)).length;
  const pct = ativsCiclo.length ? conc / ativsCiclo.length : 0;
  const pa = (a, p) => patchAtiv(a.key, p);
  const addEtapa = () => setCiclos(prev => prev.map(c => c.id === ciclo.id ? {
    ...c,
    etapas: [...c.etapas, {
      id: uid("E"),
      nome: "Nova atividade",
      resp: user.nome,
      s: TODAY,
      e: TODAY,
      status: "Não iniciado",
      cx: "P",
      aceita: true,
      criadoPor: user.nome,
      criadoTs: Date.now()
    }]
  } : c));
  const delEtapa = id => setCiclos(prev => prev.map(c => c.id === ciclo.id ? {
    ...c,
    etapas: c.etapas.filter(e => e.id !== id)
  } : c));
  const delCiclo = () => confirm(`Excluir o ciclo "${ciclo.ciclo}" e suas atividades?`) && setCiclos(prev => prev.filter(c => c.id !== ciclo.id));
  const th = {
    fontSize: 10.5,
    fontWeight: 700,
    color: "var(--slate)",
    textTransform: "uppercase",
    letterSpacing: ".3px",
    padding: "6px 8px",
    textAlign: "left"
  };
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      ...cellStyle,
      fontWeight: 800,
      fontSize: 15,
      width: 220
    },
    value: ciclo.ciclo,
    onFocus: focusCell,
    onBlur: blurCell,
    onChange: e => setCiclos(prev => prev.map(c => c.id === ciclo.id ? {
      ...c,
      ciclo: e.target.value
    } : c))
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--slate)"
    }
  }, conc, "/", ativsCiclo.length, " conclu\xEDdas"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    pct: pct,
    color: "var(--nat-produto)",
    width: "100%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }),
    style: {
      padding: "6px 11px",
      fontSize: 12
    },
    onClick: addEtapa
  }, "Atividade"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "copy",
      size: 14
    }),
    style: {
      padding: "6px 11px",
      fontSize: 12
    },
    onClick: () => onDuplicar(ciclo)
  }, "Duplicar ciclo"), /*#__PURE__*/React.createElement(Button, {
    variant: "icon",
    onClick: delCiclo,
    style: {
      color: "var(--danger)"
    },
    title: "Excluir ciclo"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 15
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)",
      minWidth: 900
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: "1px solid var(--line)"
    }
  }, ["ID", "Atividade", "Início", "Fim", "Responsável", "Categoria", "Depende de", "Status", ""].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: th
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, ativsCiclo.map((a, idx) => /*#__PURE__*/React.createElement("tr", {
    key: a.key,
    style: {
      borderTop: "1px solid var(--canvas)",
      background: a.pendenteAceite ? "var(--soft-orange)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "4px 8px",
      fontSize: 10.5,
      color: "var(--muted)",
      fontFamily: "monospace",
      width: 40
    }
  }, "E", idx + 1), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: cellStyle,
    value: a.titulo,
    onFocus: focusCell,
    onBlur: blurCell,
    onChange: ev => pa(a, {
      nome: ev.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 8
    }
  }, /*#__PURE__*/React.createElement(AprovChip, {
    status: a.aprov
  }))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 130
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: cellStyle,
    value: a.raw.s || "",
    onFocus: focusCell,
    onBlur: blurCell,
    onChange: ev => pa(a, {
      s: ev.target.value,
      e: !a.raw.e || a.raw.e < ev.target.value ? ev.target.value : a.raw.e
    })
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 130
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: cellStyle,
    value: a.raw.e || "",
    onFocus: focusCell,
    onBlur: blurCell,
    onChange: ev => pa(a, {
      e: ev.target.value
    })
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 170
    }
  }, /*#__PURE__*/React.createElement(RespSelect, {
    value: a.resp,
    users: users,
    ausencias: ausencias,
    s: a.s,
    e: a.e,
    onChange: ev => pa(a, respPatch(ev.target.value, user.nome))
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 130
    }
  }, /*#__PURE__*/React.createElement(CategoriaSelect, {
    value: a.cx,
    onChange: ev => pa(a, {
      cx: ev.target.value
    })
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 110
    }
  }, /*#__PURE__*/React.createElement(DependenciaCell, {
    value: a.raw.dependeDe,
    aguardando: !!a.depAguardando,
    options: ativsCiclo.filter(x => x.id !== a.id).map((x, i) => ({
      id: x.id,
      label: "E" + (ativsCiclo.indexOf(x) + 1) + " · " + x.titulo.slice(0, 14)
    })),
    onChange: ev => pa(a, {
      dependeDe: ev.target.value
    })
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 160
    }
  }, /*#__PURE__*/React.createElement(StatusSelect, {
    value: a.status,
    onChange: ev => pa(a, {
      status: ev.target.value
    })
  }), a.atrasada && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      color: "var(--danger)",
      fontWeight: 700,
      paddingLeft: 8
    }
  }, "prazo vencido")), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 70
    }
  }, /*#__PURE__*/React.createElement(RowActions, {
    a: a,
    abrirAtiv: abrirAtiv,
    onDelete: () => delEtapa(a.id)
  })))), ativsCiclo.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 9,
    style: {
      padding: 16,
      textAlign: "center",
      color: "var(--muted)",
      fontSize: 12.5
    }
  }, "Ciclo sem atividades."))))));
}
function NovoCicloModal({
  iniciativa,
  base,
  users,
  user,
  ausencias,
  onSave,
  onClose
}) {
  const {
    Modal,
    Field,
    Input,
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    ETAPAS_PADRAO,
    uid,
    TODAY,
    addDays,
    daysBetween,
    Icon,
    inputBase
  } = window.PortalUI;
  const sugerirNome = () => {
    if (!base) return "";
    const m = String(base.ciclo).match(/^(\d+)(º?)(.*)$/);
    return m ? `${Number(m[1]) + 1}${m[2]}${m[3]}` : base.ciclo + " (cópia)";
  };
  const baseIni = base && base.etapas.length ? base.etapas.reduce((m, e) => e.s && e.s < m ? e.s : m, base.etapas[0].s || TODAY) : TODAY;
  const [label, setLabel] = React.useState(sugerirNome());
  const [inicio, setInicio] = React.useState(base ? addDays(baseIni, 7) : TODAY);
  const [etapas, setEtapas] = React.useState(base ? base.etapas.map(e => ({
    id: uid("E"),
    nome: e.nome,
    resp: e.resp,
    dS: e.s ? daysBetween(baseIni, e.s) : 0,
    dur: e.s && e.e ? daysBetween(e.s, e.e) : 0,
    cx: e.cx || "P",
    precisaAprovacao: !!e.precisaAprovacao,
    depIdx: e.dependeDe ? base.etapas.findIndex(x => x.id === e.dependeDe) : -1
  })) : ETAPAS_PADRAO.map((n, i) => ({
    id: uid("E"),
    nome: n,
    resp: iniciativa.resp,
    dS: i,
    dur: 0,
    cx: "P",
    depIdx: i - 1
  })));
  const setEtapa = (id, k, v) => setEtapas(prev => prev.map(e => e.id === id ? {
    ...e,
    [k]: v
  } : e));
  const salvar = () => {
    if (!label) return;
    const rows = etapas.map(e => ({
      id: e.id,
      nome: e.nome,
      resp: e.resp,
      s: addDays(inicio, e.dS),
      e: addDays(inicio, e.dS + e.dur),
      status: "Não iniciado",
      cx: e.cx || "P",
      precisaAprovacao: e.precisaAprovacao,
      nova: e.resp !== user.nome,
      aceita: e.resp === user.nome,
      criadoPor: user.nome,
      criadoTs: Date.now()
    }));
    rows.forEach((r, i) => {
      const d = etapas[i].depIdx;
      if (d >= 0 && rows[d]) r.dependeDe = rows[d].id;
    });
    onSave({
      id: uid("CI"),
      ini: iniciativa.id,
      ciclo: label,
      etapas: rows
    });
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: base ? "Novo ciclo a partir do anterior" : "Novo ciclo",
    sub: base ? `Copiamos as atividades de "${base.ciclo}". Ajuste responsáveis e a data de início — os prazos se ajustam sozinhos.` : "Cada ciclo (edição/período) tem sua lista de atividades.",
    onClose: onClose,
    width: 680
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Ciclo / edi\xE7\xE3o"
  }, /*#__PURE__*/React.createElement(Input, {
    value: label,
    onChange: e => setLabel(e.target.value),
    placeholder: "ex.: 25\xBA/2026, Ed. 44, Encontro 6"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "In\xEDcio do ciclo"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date",
    value: inicio,
    onChange: e => setInicio(e.target.value)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--slate)",
      textTransform: "uppercase",
      letterSpacing: ".3px",
      margin: "6px 0 8px"
    }
  }, "Atividades do ciclo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,2fr) minmax(0,1.4fr) 120px 110px 28px",
      gap: 6,
      fontSize: 10.5,
      color: "var(--muted)",
      fontWeight: 700,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "Atividade"), /*#__PURE__*/React.createElement("span", null, "Respons\xE1vel"), /*#__PURE__*/React.createElement("span", null, "Categoria"), /*#__PURE__*/React.createElement("span", null, "Datas"), /*#__PURE__*/React.createElement("span", null)), etapas.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,2fr) minmax(0,1.4fr) 120px 110px 28px",
      gap: 6,
      marginBottom: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: inputBase,
    value: e.nome,
    onChange: ev => setEtapa(e.id, "nome", ev.target.value)
  }), /*#__PURE__*/React.createElement("select", {
    style: {
      ...inputBase,
      color: window.PortalUI.ausenteEm(ausencias, e.resp, addDays(inicio, e.dS), addDays(inicio, e.dS + e.dur)) ? "var(--danger)" : "var(--ink)"
    },
    value: e.resp,
    onChange: ev => setEtapa(e.id, "resp", ev.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecione..."), users.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.nome
  }, window.PortalUI.rotuloResp(u, ausencias, addDays(inicio, e.dS), addDays(inicio, e.dS + e.dur))))), /*#__PURE__*/React.createElement("select", {
    style: inputBase,
    value: e.cx || "P",
    onChange: ev => setEtapa(e.id, "cx", ev.target.value)
  }, window.PortalUI.CATEGORIAS.map(k => /*#__PURE__*/React.createElement("option", {
    key: k.v,
    value: k.v
  }, k.v, " \xB7 ", k.nome))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--slate)"
    }
  }, window.PortalUI.fmtPeriodo(addDays(inicio, e.dS), addDays(inicio, e.dS + e.dur))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setEtapas(p => p.filter(x => x.id !== e.id)),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--danger)"
    },
    title: "Remover"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 15
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setEtapas(p => [...p, {
      id: uid("E"),
      nome: "Nova atividade",
      resp: user.nome,
      dS: p.length,
      dur: 0,
      cx: "P",
      depIdx: -1
    }]),
    style: {
      background: "none",
      border: "none",
      color: "var(--blue-light)",
      fontWeight: 700,
      fontSize: 12.5,
      cursor: "pointer",
      padding: "4px 0",
      fontFamily: "var(--font-sans)"
    }
  }, "+ adicionar atividade"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: salvar,
    style: {
      flex: 1,
      justifyContent: "center"
    }
  }, "Criar ciclo"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancelar")));
}
function Cronograma({
  inis,
  selIni,
  setSelIni,
  tarefas,
  setTarefas,
  ciclos,
  setCiclos,
  ativs,
  iniById,
  users,
  user,
  ausencias,
  abrirAtiv,
  patchAtiv,
  onBack
}) {
  const {
    Card,
    Button,
    NatureBadge,
    StatusBadge,
    ProgressBar,
    Select
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const {
    Icon,
    fmtY,
    daysBetween,
    exportCSV,
    AprovChip,
    nomeCurto,
    uid,
    TODAY
  } = P;
  const [novoCiclo, setNovoCiclo] = React.useState(null);
  const item = iniById(selIni);
  if (!item.id) return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 30,
      textAlign: "center",
      color: "var(--muted)"
    }
  }, "Nenhuma iniciativa selecionada. ", /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      color: "var(--blue-light)",
      background: "none",
      border: "none",
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Voltar"));
  const isCiclo = item.natureza !== "Projeto";
  const pa = (a, p) => patchAtiv(a.key, p);
  const Header = ({
    titulo,
    desc,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--blue-light)",
      fontWeight: 700,
      fontSize: 12.5,
      fontFamily: "var(--font-sans)",
      padding: 0,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), " Voltar"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      color: "var(--ink)",
      margin: 0,
      fontFamily: "var(--font-sans)"
    }
  }, titulo), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--slate)",
      marginTop: 3
    }
  }, desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: selIni,
    onChange: e => setSelIni(e.target.value),
    style: {
      width: 240
    }
  }, inis.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.id,
    value: p.id
  }, p.nome, " \xB7 ", P.NAT_LABEL[p.natureza]))), children));
  if (isCiclo) {
    const ciclosIni = ciclos.filter(c => c.ini === selIni);
    const ultimo = ciclosIni[ciclosIni.length - 1];
    const exportar = () => {
      const rows = [];
      ciclosIni.forEach(c => ativs.filter(a => a.cicloId === c.id).forEach(a => rows.push([c.ciclo, a.titulo, a.resp, P.catLabel(a.cx), fmtY(a.s), fmtY(a.e), a.statusView])));
      exportCSV(`ciclos-${item.nome}.csv`, ["Ciclo", "Atividade", "Responsável", "Categoria", "Início", "Fim", "Status"], rows);
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
      titulo: "Ciclos",
      desc: "Cada ciclo (edi\xE7\xE3o, encontro, m\xEAs) tem sua lista de atividades. Para o pr\xF3ximo, duplique o anterior e s\xF3 ajuste datas e pessoas."
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "file-spreadsheet",
        size: 15
      }),
      onClick: exportar
    }, "Exportar Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus-circle",
        size: 15
      }),
      onClick: () => setNovoCiclo({
        base: ultimo || null
      })
    }, ultimo ? "Novo ciclo (copiar último)" : "Novo ciclo")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 14,
        fontFamily: "var(--font-sans)",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 17
      }
    }, item.nome), /*#__PURE__*/React.createElement(NatureBadge, {
      nature: item.natureza
    }), /*#__PURE__*/React.createElement(StatusBadge, {
      status: item.status
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--slate)"
      }
    }, ciclosIni.length, " ciclo(s)")), ciclosIni.length === 0 && /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: 30,
        textAlign: "center",
        color: "var(--muted)"
      }
    }, "Nenhum ciclo cadastrado ainda. Clique em \"Novo ciclo\"."), ciclosIni.slice().reverse().map(c => /*#__PURE__*/React.createElement(CicloCard, {
      key: c.id,
      ciclo: c,
      ativsCiclo: ativs.filter(a => a.cicloId === c.id),
      users: users,
      user: user,
      ausencias: ausencias,
      patchAtiv: patchAtiv,
      abrirAtiv: abrirAtiv,
      setCiclos: setCiclos,
      onDuplicar: base => setNovoCiclo({
        base
      })
    })), novoCiclo && /*#__PURE__*/React.createElement(NovoCicloModal, {
      iniciativa: item,
      base: novoCiclo.base,
      users: users,
      user: user,
      ausencias: ausencias,
      onSave: c => {
        setCiclos(prev => [...prev, c]);
        setNovoCiclo(null);
      },
      onClose: () => setNovoCiclo(null)
    }));
  }
  const ts = ativs.filter(a => a.kind === "tar" && a.iniId === selIni).map((a, i) => ({
    ...a,
    wbs: i + 1
  }));
  const conc = ts.filter(t => P.concluido(t.status)).length;
  const pct = ts.length ? conc / ts.length : 0;
  const dur = item.ini && item.fim ? daysBetween(item.ini, item.fim) : 0;
  const exportar = () => exportCSV(`cronograma-${item.nome}.csv`, ["ID", "Atividade", "Status", "Responsável", "Categoria", "Início", "Fim", "Dias"], ts.map(t => [t.wbs, t.titulo, t.statusView, t.resp, P.catLabel(t.cx), fmtY(t.s), fmtY(t.e), t.s && t.e ? daysBetween(t.s, t.e) + 1 : ""]));
  const novaLinha = () => setTarefas(prev => [...prev, {
    id: uid("T"),
    ini: selIni,
    nome: "Nova atividade",
    resp: user.nome,
    cx: "P",
    s: TODAY,
    e: TODAY,
    status: "Não iniciado",
    aceita: true,
    criadoPor: user.nome,
    criadoTs: Date.now()
  }]);
  const Stat = ({
    label,
    val
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: "var(--ink)"
    }
  }, val));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    titulo: "Cronograma",
    desc: "Lista \xFAnica de atividades do projeto \u2014 o c\xF3digo (ID) \xE9 gerado sozinho. Edite direto na linha ou abra o detalhe."
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "file-spreadsheet",
      size: 15
    }),
    onClick: exportar
  }, "Exportar Excel"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus-circle",
      size: 15
    }),
    onClick: novaLinha
  }, "Nova atividade")), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      marginBottom: 14,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 17
    }
  }, item.nome), /*#__PURE__*/React.createElement(NatureBadge, {
    nature: "Projeto"
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    status: item.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      flexWrap: "wrap",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "In\xEDcio",
    val: fmtY(item.ini)
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Fim previsto",
    val: fmtY(item.fim)
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Dura\xE7\xE3o",
    val: dur + " dias"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Atividades",
    val: ts.length
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      fontWeight: 600
    }
  }, "Conclus\xE3o"), /*#__PURE__*/React.createElement(ProgressBar, {
    pct: pct,
    color: "var(--nat-projeto)",
    width: 100
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      marginBottom: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 12.5,
      fontFamily: "var(--font-sans)",
      minWidth: 960
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--blue-dark)",
      color: "#fff",
      textAlign: "left"
    }
  }, ["ID", "Atividade", "Status", "Responsável", "Categoria", "Depende de", "Início", "Fim", ""].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "9px 10px",
      fontSize: 11,
      fontWeight: 700
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, ts.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.key,
    style: {
      borderTop: "1px solid var(--line)",
      background: t.pendenteAceite ? "var(--soft-orange)" : "#fff"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "6px 10px",
      fontSize: 11,
      color: "var(--muted)",
      fontFamily: "monospace",
      width: 36
    }
  }, t.wbs), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      ...cellStyle,
      fontWeight: 500
    },
    value: t.titulo,
    onFocus: focusCell,
    onBlur: blurCell,
    onChange: e => pa(t, {
      nome: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 8
    }
  }, /*#__PURE__*/React.createElement(AprovChip, {
    status: t.aprov
  }))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 160
    }
  }, /*#__PURE__*/React.createElement(StatusSelect, {
    value: t.status,
    onChange: e => pa(t, {
      status: e.target.value
    })
  }), t.atrasada && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      color: "var(--danger)",
      fontWeight: 700,
      paddingLeft: 8
    }
  }, "prazo vencido")), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 170
    }
  }, /*#__PURE__*/React.createElement(RespSelect, {
    value: t.resp,
    users: users,
    ausencias: ausencias,
    s: t.s,
    e: t.e,
    onChange: e => pa(t, respPatch(e.target.value, user.nome))
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 130
    }
  }, /*#__PURE__*/React.createElement(CategoriaSelect, {
    value: t.cx,
    onChange: e => pa(t, {
      cx: e.target.value
    })
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 110
    }
  }, /*#__PURE__*/React.createElement(DependenciaCell, {
    value: t.raw.dependeDe,
    aguardando: !!t.depAguardando,
    options: ts.filter(x => x.id !== t.id).map(x => ({
      id: x.id,
      label: x.wbs + " · " + x.titulo.slice(0, 14)
    })),
    onChange: e => pa(t, {
      dependeDe: e.target.value
    })
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 130
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: cellStyle,
    value: t.raw.s || "",
    onFocus: focusCell,
    onBlur: blurCell,
    onChange: e => pa(t, {
      s: e.target.value,
      e: !t.raw.e || t.raw.e < e.target.value ? e.target.value : t.raw.e
    })
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 130
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: cellStyle,
    value: t.raw.e || "",
    onFocus: focusCell,
    onBlur: blurCell,
    onChange: e => pa(t, {
      e: e.target.value
    })
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 2,
      width: 70
    }
  }, /*#__PURE__*/React.createElement(RowActions, {
    a: t,
    abrirAtiv: abrirAtiv,
    onDelete: () => setTarefas(prev => prev.filter(x => x.id !== t.id))
  })))), ts.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 9,
    style: {
      padding: 18,
      textAlign: "center",
      color: "var(--muted)"
    }
  }, "Sem atividades. Use \"Nova atividade\".")))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      marginBottom: 10,
      fontFamily: "var(--font-sans)"
    }
  }, "Gantt"), /*#__PURE__*/React.createElement(Gantt, {
    itens: ts
  })));
}
window.Cronograma = Cronograma;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/Cronograma.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/Iniciativas.jsx
try { (() => {
function Iniciativas({
  inis,
  setInis,
  ativs,
  users,
  user,
  onOpen,
  fNat,
  setFNat,
  chamados,
  podeAtender,
  onAbrirChamado
}) {
  const {
    Card,
    Button,
    NatureBadge,
    StatusBadge,
    Input,
    Select
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const {
    Icon,
    exportCSV,
    nomeCurto,
    TODAY
  } = P;
  const [q, setQ] = React.useState("");
  const [modal, setModal] = React.useState(null);
  const [mesExp, setMesExp] = React.useState(TODAY.slice(0, 7));
  const filtered = inis.filter(i => (fNat === "Todas" || i.natureza === fNat) && i.nome.toLowerCase().includes(q.toLowerCase()));
  const save = rec => {
    setInis(prev => {
      const old = prev.find(i => i.id === rec.id);
      return old ? prev.map(i => i.id === rec.id ? P.aplicarPatch(old, rec, user.nome) : i) : [...prev, {
        ...rec,
        criadoPor: user.nome,
        criadoTs: Date.now(),
        log: []
      }];
    });
    setModal(null);
  };
  const del = i => {
    if (confirm(`Excluir a iniciativa "${i.nome}"?`)) setInis(prev => prev.filter(x => x.id !== i.id));
  };
  const TABS = [["Todas", "Todas"], ["Projeto", "Projetos"], ["Produto", "Produções"], ["Processo", "Processos"], ["Atendimento", "Atendimentos"]];
  const nextId = P.nextIniId(inis);
  const chamadosF = (chamados || []).filter(c => (c.assunto + " " + c.area + " " + c.solicitante + " " + c.id).toLowerCase().includes(q.toLowerCase()));
  const contagem = id => ativs.filter(a => a.iniId === id).length;
  const exportar = () => {
    const ini = mesExp + "-01",
      fim = mesExp + "-31";
    exportCSV(`iniciativas-${mesExp}.csv`, ["ID", "Iniciativa", "Natureza", "Origem", "Área demandante", "Status", "Atividades no mês", "P · Operacional", "M · Tático", "G · Estratégico", "Concluídas no mês", "Atrasadas"], filtered.map(i => {
      const no = ativs.filter(a => a.iniId === i.id && P.overlaps(a.s, a.e, ini, fim));
      return [i.id, i.nome, P.NAT_LABEL[i.natureza], i.origem, i.area || "", i.status, no.length, no.filter(a => a.cx === "P").length, no.filter(a => a.cx === "M").length, no.filter(a => a.cx === "G").length, no.filter(a => P.concluido(a.status)).length, no.filter(a => a.atrasada).length];
    }));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      color: "var(--ink)",
      margin: 0,
      fontFamily: "var(--font-sans)"
    }
  }, "Iniciativas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--slate)",
      marginTop: 3
    }
  }, "Projetos t\xEAm in\xEDcio, meio e fim. Produ\xE7\xF5es e processos se repetem em ciclos. Atendimentos s\xE3o os chamados de outras \xE1reas \u2014 e podem virar qualquer um dos tr\xEAs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "month",
    value: mesExp,
    onChange: e => setMesExp(e.target.value),
    style: {
      padding: "8px 10px",
      border: "1px solid var(--line)",
      borderRadius: 8,
      fontSize: 13,
      fontFamily: "var(--font-sans)"
    },
    title: "M\xEAs da exporta\xE7\xE3o"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "file-spreadsheet",
      size: 15
    }),
    onClick: exportar
  }, "Exportar Excel"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus-circle",
      size: 16
    }),
    onClick: () => setModal("new")
  }, "Nova iniciativa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 220px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar iniciativa",
    value: q,
    onChange: e => setQ(e.target.value)
  })), TABS.map(([n, label]) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setFNat(n),
    style: {
      padding: "8px 14px",
      borderRadius: 8,
      border: `1px solid ${fNat === n ? "var(--blue-dark)" : "var(--line)"}`,
      background: fNat === n ? "var(--blue-dark)" : "#fff",
      color: fNat === n ? "#fff" : "var(--slate)",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, label, n === "Atendimento" && (chamados || []).length ? ` (${chamados.length})` : ""))), fNat === "Atendimento" ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--canvas)",
      textAlign: "left",
      color: "var(--slate)"
    }
  }, ["Chamado", "Área · solicitante", "Formato", "Atividades", "Status", ""].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "11px 12px",
      fontSize: 11.5,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".3px"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, chamadosF.map(c => {
    const alvo = c.iniVinculada && inis.find(x => x.id === c.iniVinculada);
    const n = ativs.filter(x => x.chamadoOrigem === c.id).length;
    return /*#__PURE__*/React.createElement("tr", {
      key: c.id,
      style: {
        borderTop: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "11px 12px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, c.assunto), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--muted)",
        fontFamily: "monospace"
      }
    }, c.id)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "11px 12px",
        color: "var(--slate)"
      }
    }, c.area, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--muted)"
      }
    }, c.solicitante)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "11px 12px"
      }
    }, alvo ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(NatureBadge, {
      nature: alvo.natureza
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => onOpen(alvo.id),
      style: {
        background: "none",
        border: "none",
        padding: 0,
        color: "var(--blue-light)",
        fontWeight: 700,
        cursor: "pointer",
        fontSize: 12.5,
        fontFamily: "var(--font-sans)"
      }
    }, alvo.nome, " \u2192")) : /*#__PURE__*/React.createElement(P.Chip, {
      color: "var(--blue-dark)",
      bg: "var(--soft-blue)",
      icon: "headset"
    }, "Pontual")), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "11px 12px"
      }
    }, n), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "11px 12px"
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: c.status
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "11px 12px",
        textAlign: "right"
      }
    }, podeAtender && /*#__PURE__*/React.createElement("button", {
      onClick: () => onAbrirChamado(c.id),
      style: {
        color: "var(--blue-light)",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 12.5,
        fontFamily: "var(--font-sans)",
        whiteSpace: "nowrap"
      }
    }, "Abrir chamado \u2192")));
  }), chamadosF.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 6,
    style: {
      padding: 26,
      textAlign: "center",
      color: "var(--muted)"
    }
  }, "Nenhum atendimento registrado.")))))) : /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--canvas)",
      textAlign: "left",
      color: "var(--slate)"
    }
  }, ["Iniciativa", "Natureza", "Origem", "Atividades P · M · G", "Status", ""].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "11px 12px",
      fontSize: 11.5,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".3px"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(i => /*#__PURE__*/React.createElement("tr", {
    key: i.id,
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 12px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(i.id),
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 13,
      color: "var(--ink)",
      fontFamily: "var(--font-sans)",
      textAlign: "left"
    }
  }, i.nome), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      display: "flex",
      gap: 6,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, contagem(i.id), " atividade(s)", i.chamadoOrigem && /*#__PURE__*/React.createElement(P.Chip, {
    color: "var(--blue-dark)",
    bg: "var(--soft-blue)",
    icon: "headset"
  }, "veio do chamado ", i.chamadoOrigem))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 12px"
    }
  }, /*#__PURE__*/React.createElement(NatureBadge, {
    nature: i.natureza
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 12px"
    }
  }, i.origem === "Outra área" ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      color: "var(--orange)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building-2",
    size: 13
  }), " Apoio \xB7 ", i.area) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--slate)"
    }
  }, "Pr\xF3pria")), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 12px"
    }
  }, (() => {
    const xs = ativs.filter(a => a.iniId === i.id);
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 4
      }
    }, ["P", "M", "G"].map(k => /*#__PURE__*/React.createElement("span", {
      key: k,
      title: P.catLabel(k),
      style: {
        fontSize: 11,
        fontWeight: 700,
        background: "var(--canvas)",
        color: "var(--blue-dark)",
        padding: "3px 8px",
        borderRadius: 20
      }
    }, k, " ", xs.filter(a => a.cx === k).length)));
  })()), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 12px"
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: i.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      alignItems: "center",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(i.id),
    style: {
      color: "var(--blue-light)",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 12.5,
      fontFamily: "var(--font-sans)",
      whiteSpace: "nowrap"
    }
  }, i.natureza === "Projeto" ? "Cronograma →" : "Ciclos →"), /*#__PURE__*/React.createElement(Button, {
    variant: "icon",
    onClick: () => setModal(i),
    title: "Editar"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 15
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "icon",
    onClick: () => del(i),
    title: "Excluir",
    style: {
      color: "var(--danger)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 15
  })))))), filtered.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 7,
    style: {
      padding: 26,
      textAlign: "center",
      color: "var(--muted)"
    }
  }, "Nenhuma iniciativa cadastrada. Clique em \"Nova iniciativa\".")))))), modal && /*#__PURE__*/React.createElement(IniciativaModal, {
    initial: modal === "new" ? null : modal,
    nextId: nextId,
    users: users,
    onSave: save,
    onClose: () => setModal(null)
  }));
}
function IniciativaModal({
  initial,
  nextId,
  users,
  onSave,
  onClose
}) {
  const {
    Field,
    Input,
    Select,
    Modal,
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    AREAS
  } = window.PortalUI;
  const [f, setF] = React.useState(initial || {
    nome: "",
    natureza: "Projeto",
    origem: "Própria",
    area: ""
  });
  const set = (k, v) => setF({
    ...f,
    [k]: v
  });
  const salvar = () => {
    if (!f.nome) return;
    onSave({
      ...f,
      resp: "",
      id: initial ? initial.id : nextId,
      status: f.status || (f.natureza === "Projeto" ? "Não iniciado" : "Ativo")
    });
  };
  const dica = {
    Projeto: "Tem começo, meio e fim. As atividades ficam num cronograma com datas.",
    Produto: "Se repete em ciclos/edições (ex.: podcast, revista, Ação 3x). Cada novo ciclo copia as atividades do anterior.",
    Processo: "Rotina fora de um projeto (ex.: atualização de grupos de e-mail, lista de aniversariantes). Também funciona em ciclos."
  }[f.natureza];
  return /*#__PURE__*/React.createElement(Modal, {
    title: initial ? "Editar iniciativa" : "Nova iniciativa",
    sub: "S\xF3 o essencial \u2014 o resto \xE9 preenchido nas atividades.",
    onClose: onClose
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.nome,
    onChange: e => set("nome", e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Natureza"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.natureza,
    onChange: e => set("natureza", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "Projeto"
  }, "Projeto"), /*#__PURE__*/React.createElement("option", {
    value: "Produto"
  }, "Produ\xE7\xE3o"), /*#__PURE__*/React.createElement("option", {
    value: "Processo"
  }, "Processo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--slate)",
      background: "var(--canvas)",
      borderRadius: 8,
      padding: "8px 11px",
      margin: "-4px 0 12px"
    }
  }, dica), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Origem"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.origem,
    onChange: e => set("origem", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "Pr\xF3pria"
  }, "Pr\xF3pria (nasce da CI)"), /*#__PURE__*/React.createElement("option", {
    value: "Outra \xE1rea"
  }, "Apoio a outra \xE1rea")))), f.origem === "Outra área" && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\xC1rea de origem"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.area || "",
    maxLength: 120,
    onChange: e => set("area", e.target.value),
    placeholder: "ex.: RH Kurum\xE1"
  })))), f.natureza === "Projeto" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "In\xEDcio"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date",
    value: f.ini || "",
    onChange: e => set("ini", e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Fim previsto"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date",
    value: f.fim || "",
    onChange: e => set("fim", e.target.value)
  })))), initial && /*#__PURE__*/React.createElement(Field, {
    label: "Status"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.status,
    onChange: e => set("status", e.target.value)
  }, ["Não iniciado", "Em andamento", "Ativo", "Pausado", "Concluído"].map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: salvar,
    style: {
      flex: 1,
      justifyContent: "center"
    }
  }, "Salvar"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancelar")));
}
window.Iniciativas = Iniciativas;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/Iniciativas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/Lancar.jsx
try { (() => {
/* Nova atividade — escolhe a iniciativa e o formulário se adapta (projeto → cronograma; produção/processo → ciclo). */
function Lancar({
  inis,
  ciclos,
  setTarefas,
  setCiclos,
  users,
  user,
  ausencias,
  onDone,
  dataInicial
}) {
  const {
    Field,
    Input,
    Select,
    Button,
    NatureBadge
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    uid,
    TODAY,
    CategoriaPicker,
    rotuloResp,
    ausenteEm,
    confirmaResp,
    nomeCurto
  } = window.PortalUI;
  const [iniId, setIniId] = React.useState("");
  const d0 = dataInicial || TODAY;
  const [f, setF] = React.useState({
    nome: "",
    resp: user.nome,
    s: d0,
    e: d0,
    cx: "",
    cicloId: "",
    novoCiclo: ""
  });
  const [ok, setOk] = React.useState(false);
  const ini = inis.find(i => i.id === iniId);
  const nat = ini ? ini.natureza : null;
  const ciclosIni = ciclos.filter(c => c.ini === iniId);
  const natBg = {
    Projeto: "var(--nat-projeto-bg)",
    Produto: "var(--nat-produto-bg)",
    Processo: "var(--nat-processo-bg)"
  };
  const set = (k, v) => setF(p => ({
    ...p,
    [k]: v,
    ...(k === "s" && (!p.e || p.e < v) ? {
      e: v
    } : {})
  }));
  const escolherIni = id => {
    setIniId(id);
    const cs = ciclos.filter(c => c.ini === id);
    setF(p => ({
      ...p,
      cicloId: cs.length ? cs[cs.length - 1].id : "__novo"
    }));
  };
  const salvar = () => {
    if (!ini || !f.nome || !f.cx) return;
    if (!confirmaResp(ausencias, f.resp, f.s, f.e)) return;
    const base = {
      nome: f.nome,
      resp: f.resp,
      s: f.s,
      e: f.e || f.s,
      cx: f.cx,
      status: "Não iniciado",
      nova: f.resp !== user.nome,
      aceita: f.resp === user.nome,
      criadoPor: user.nome,
      criadoTs: Date.now()
    };
    if (nat === "Projeto") setTarefas(t => [...t, {
      id: uid("T"),
      ini: iniId,
      ...base
    }]);else if (f.cicloId && f.cicloId !== "__novo") setCiclos(cs => cs.map(c => c.id === f.cicloId ? {
      ...c,
      etapas: [...c.etapas, {
        id: uid("E"),
        ...base
      }]
    } : c));else setCiclos(cs => [...cs, {
      id: uid("CI"),
      ini: iniId,
      ciclo: f.novoCiclo || f.s.slice(0, 7),
      etapas: [{
        id: uid("E"),
        ...base
      }]
    }]);
    setOk(true);
    setF(p => ({
      ...p,
      nome: ""
    }));
    setTimeout(() => setOk(false), 2400);
    if (onDone) onDone();
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      marginBottom: 4
    }
  }, "Nova atividade"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--slate)",
      marginBottom: 16
    }
  }, "Escolha a iniciativa \u2014 o formul\xE1rio se ajusta a ela. Se o respons\xE1vel for outra pessoa, ela recebe para aceitar."), /*#__PURE__*/React.createElement(Field, {
    label: "Iniciativa"
  }, /*#__PURE__*/React.createElement(Select, {
    value: iniId,
    onChange: e => escolherIni(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecione..."), inis.map(i => /*#__PURE__*/React.createElement("option", {
    key: i.id,
    value: i.id
  }, i.nome, " (", window.PortalUI.NAT_LABEL[i.natureza], ")")))), ini && /*#__PURE__*/React.createElement("div", {
    style: {
      background: natBg[nat],
      borderRadius: 9,
      padding: "10px 13px",
      marginBottom: 16,
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement(NatureBadge, {
    nature: nat
  }), /*#__PURE__*/React.createElement("span", null, nat === "Projeto" ? "Entra no cronograma do projeto." : "Entra em um ciclo — escolha qual abaixo.")), ini && /*#__PURE__*/React.createElement(React.Fragment, null, nat !== "Projeto" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Ciclo"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.cicloId,
    onChange: e => set("cicloId", e.target.value)
  }, ciclosIni.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id,
    value: c.id
  }, c.ciclo)), /*#__PURE__*/React.createElement("option", {
    value: "__novo"
  }, "+ Novo ciclo")))), f.cicloId === "__novo" && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome do novo ciclo"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.novoCiclo,
    onChange: e => set("novoCiclo", e.target.value),
    placeholder: "ex.: 25\xBA/2026"
  })))), /*#__PURE__*/React.createElement(Field, {
    label: "Atividade"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.nome,
    onChange: e => set("nome", e.target.value),
    placeholder: "ex.: Contratar coffee break"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Respons\xE1vel"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.resp,
    onChange: e => set("resp", e.target.value)
  }, users.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.nome
  }, rotuloResp(u, ausencias, f.s, f.e))))))), ausenteEm(ausencias, f.resp, f.s, f.e) && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--danger-bg)",
      color: "var(--danger)",
      borderRadius: 8,
      padding: "8px 11px",
      fontSize: 12.5,
      fontWeight: 600,
      marginBottom: 12
    }
  }, "\u26A0 ", nomeCurto(f.resp), " estar\xE1 ausente nessas datas. Escolha outra pessoa ou ajuste o per\xEDodo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "In\xEDcio"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date",
    value: f.s,
    onChange: e => set("s", e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Fim"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date",
    value: f.e,
    min: f.s,
    onChange: e => set("e", e.target.value)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--slate)",
      marginBottom: 6
    }
  }, "Categoria da atividade"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(CategoriaPicker, {
    value: f.cx,
    onChange: v => set("cx", v)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: salvar,
    style: {
      opacity: f.nome && f.cx ? 1 : .5
    }
  }, "Lan\xE7ar atividade"), ok && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--success)",
      fontWeight: 700,
      fontSize: 13
    }
  }, "\u2713 Lan\xE7ada"))));
}
window.Lancar = Lancar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/Lancar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/Login.jsx
try { (() => {
function Login({
  onLogin
}) {
  const {
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    Icon,
    USERS0
  } = window.PortalUI;
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
      try {
        r = await window.PortalSync.authSignIn(login, senha);
      } catch (e) {
        r = {
          error: "Sem conexão com o servidor. Tente novamente."
        };
      }
      setCarregando(false);
      if (!r.error && r.user) return onLogin(r.user);
      return setErro(r.error || "Login ou senha inválidos.");
    }
    const local = USERS0.find(x => (x.login.toLowerCase() === login.trim().toLowerCase() || x.email.toLowerCase() === login.trim().toLowerCase()) && x.senha === senha);
    if (local) onLogin(local);else setErro("Login ou senha inválidos.");
  };
  const labelStyle = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    color: "var(--slate)",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: ".4px"
  };
  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 12px",
    border: "1px solid var(--line)",
    borderRadius: 8,
    fontSize: 13.5,
    fontFamily: "var(--font-sans)",
    color: "var(--ink)",
    background: "var(--soft-blue)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      fontFamily: "var(--font-sans)",
      background: "var(--blue-dark)",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/logo-branca.png",
    style: {
      height: 56
    },
    alt: "Grupo \xC1guia Branca \u2014 Divis\xE3o Com\xE9rcio"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#C7D8EA",
      fontWeight: 600,
      textAlign: "center"
    }
  }, "Portal Gest\xE3o Pessoas e Cultura \xB7 Comunica\xE7\xE3o Interna")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      maxWidth: "92%",
      background: "#fff",
      borderRadius: 16,
      padding: 30,
      boxShadow: "var(--shadow-modal)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 19,
      color: "var(--blue-dark)",
      marginBottom: 4,
      textAlign: "center"
    }
  }, "Entrar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--slate)",
      marginBottom: 22,
      textAlign: "center"
    }
  }, "Acesse o painel de gest\xE3o da Comunica\xE7\xE3o Interna."), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "Login ou e-mail"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: login,
    onChange: e => setLogin(e.target.value)
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "Senha"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    style: inputStyle,
    value: senha,
    onChange: e => setSenha(e.target.value),
    onKeyDown: e => e.key === "Enter" && !carregando && entrar()
  })), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--danger)",
      fontSize: 12.5,
      marginBottom: 12
    }
  }, erro), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "log-in",
      size: 15
    }),
    onClick: entrar,
    disabled: carregando,
    style: {
      width: "100%",
      justifyContent: "center",
      padding: 11,
      fontSize: 14,
      opacity: carregando ? .7 : 1
    }
  }, carregando ? "Entrando…" : "Entrar"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 11.5,
      color: "var(--ink)",
      background: "var(--soft-blue)",
      padding: 10,
      borderRadius: 8,
      lineHeight: 1.5
    }
  }, "Colaborador de RH ou gestor(a): use o login e senha recebidos. D\xFAvidas, fale com ", /*#__PURE__*/React.createElement("b", null, "Pessoas & Cultura"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9FB8D6"
    }
  }, "Acesso restrito \xE0 gest\xE3o"));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/Painel.jsx
try { (() => {
function Painel({
  inis,
  ativs,
  chamados,
  users,
  user,
  ausencias,
  abrirAusencias,
  iniById,
  abrirAtiv,
  patchAtiv,
  onNavigate,
  podeAtender,
  respAtual,
  isAdmin,
  vazio,
  onCarregarExemplo
}) {
  const {
    Card,
    KpiCard,
    SectionHeader,
    ProgressBar,
    Select,
    Button,
    StatusBadge
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const P = window.PortalUI;
  const {
    Icon,
    TODAY,
    nomeCurto,
    fmtPeriodo,
    NatChip,
    APROVADORES,
    MICHELE,
    JULIANA,
    votar
  } = P;
  const me = user.nome;
  const [fIni, setFIni] = React.useState("");
  const [fResp, setFResp] = React.useState("");
  const [fDe, setFDe] = React.useState("");
  const [fAte, setFAte] = React.useState("");
  const responsaveis = Array.from(new Set([...users.map(u => u.nome), ...ativs.map(a => a.resp).filter(Boolean)]));
  const passa = a => (!fIni || a.iniId === fIni) && (!fResp || a.resp === fResp) && (!fDe || (a.e || a.s || "") >= fDe) && (!fAte || (a.s || "") <= fAte);
  const ativsF = ativs.filter(passa);
  const inisF = fIni ? inis.filter(i => i.id === fIni) : inis;
  const allPts = ativsF.map(a => ({
    ...a,
    pontos: 1
  }));
  const totalAtivs = allPts.length;
  const entregues = ativsF.filter(a => P.concluido(a.status)).length;
  const comPrazo = ativsF.filter(a => a.e && a.e <= TODAY);
  const pctPrazo = comPrazo.length ? Math.round(comPrazo.filter(a => P.concluido(a.status)).length / comPrazo.length * 100) : 0;
  const bloqueadas = ativsF.filter(a => !P.concluido(a.status) && (a.status === "Aguardando terceiro" || a.status === "Bloqueado"));
  const atrasadas = ativsF.filter(a => a.atrasada);
  const projAtivos = inisF.filter(i => i.natureza === "Projeto" && i.status !== "Concluído").length;
  const prodAtivos = inisF.filter(i => i.natureza === "Produto").length;
  const procAbertos = inisF.filter(i => i.natureza === "Processo").length;
  const mixNat = ["Projeto", "Produto", "Processo", "Atendimento"].map(n => ({
    n,
    v: allPts.filter(x => x.nat === n).reduce((s, x) => s + x.pontos, 0)
  }));
  const natColor = {
    Projeto: "var(--nat-projeto)",
    Produto: "var(--nat-produto)",
    Processo: "var(--nat-processo)",
    Atendimento: "var(--blue-dark)"
  };
  const maxNat = Math.max(...mixNat.map(m => m.v), 1);
  const mixCx = P.CATEGORIAS.map(k => ({
    c: k.v,
    label: P.catLabel(k.v),
    def: k.def,
    v: allPts.filter(x => x.cx === k.v).reduce((s, x) => s + x.pontos, 0)
  }));
  const maxCx = Math.max(...mixCx.map(m => m.v), 1);
  const propria = allPts.filter(x => iniById(x.iniId).origem === "Própria").reduce((s, x) => s + x.pontos, 0);
  const outras = allPts.filter(x => iniById(x.iniId).origem === "Outra área").reduce((s, x) => s + x.pontos, 0);
  const porArea = {};
  allPts.forEach(x => {
    const i = iniById(x.iniId);
    if (i.origem === "Outra área") porArea[i.area] = (porArea[i.area] || 0) + x.pontos;
  });
  const semana0 = P.mondayOf(TODAY),
    semana1 = P.addDays(semana0, 6);
  const pessoas = {};
  ativsF.filter(a => !P.concluido(a.status) && P.overlaps(a.s, a.e, semana0, semana1)).forEach(a => {
    const p = pessoas[a.resp || "—"] || (pessoas[a.resp || "—"] = {
      qtd: 0,
      travadas: 0,
      atrasadas: 0
    });
    p.qtd += 1;
    if (a.atrasada) p.atrasadas += 1;
    if (a.depAguardando || a.status === "Aguardando terceiro") p.travadas += 1;
  });
  const pessoasArr = Object.entries(pessoas).sort((a, b) => b[1].qtd - a[1].qtd);
  const aprovPendentes = ativs.filter(a => a.aprov === "Aguardando");
  const minhasAprov = aprovPendentes.filter(a => APROVADORES.includes(me) && !(a.raw.aprovacao.votos || {})[me]);
  const meusAceites = ativs.filter(a => a.resp === me && a.pendenteAceite);
  const novosChamados = podeAtender ? chamados.filter(c => c.status === "Novo") : [];
  const Linha = ({
    a,
    children,
    color
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12.5,
      padding: "8px 0",
      borderBottom: "1px solid var(--canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: color || "var(--ink)"
    }
  }, a.titulo), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)"
    }
  }, a.grupo, " \xB7 ", nomeCurto(a.resp), " \xB7 ", fmtPeriodo(a.s, a.e))), children, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      padding: "4px 10px",
      fontSize: 11.5
    },
    onClick: () => abrirAtiv(a.key)
  }, "Abrir"));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      color: "var(--ink)",
      margin: 0,
      fontFamily: "var(--font-sans)"
    }
  }, "Vis\xE3o Geral"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--slate)",
      marginTop: 3
    }
  }, "Tudo o que est\xE1 com a equipe \u2014 quem est\xE1 com o qu\xEA, o que depende de quem e o que precisa de aten\xE7\xE3o.")), vazio && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 22,
      marginBottom: 16,
      display: "flex",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 320px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15
    }
  }, "O portal est\xE1 zerado"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--slate)",
      marginTop: 4
    }
  }, "Comece cadastrando suas iniciativas (projetos, produ\xE7\xF5es e processos) e depois lance as atividades em Atividades.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus-circle",
      size: 15
    }),
    onClick: () => onNavigate("iniciativas")
  }, "Cadastrar iniciativa"), isAdmin && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onCarregarExemplo
  }, "Carregar dados de exemplo")), (minhasAprov.length > 0 || meusAceites.length > 0 || novosChamados.length > 0) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: 14,
      marginBottom: 16
    }
  }, minhasAprov.length > 0 && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      border: "2px solid var(--orange)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 18,
    color: "var(--orange)"
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15
    }
  }, minhasAprov.length, " item(ns) aguardando sua aprova\xE7\xE3o")), minhasAprov.map(a => /*#__PURE__*/React.createElement(Linha, {
    key: a.key,
    a: a
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      padding: "4px 10px",
      fontSize: 11.5
    },
    onClick: () => patchAtiv(a.key, {
      aprovacao: votar(a.raw, me, true, me)
    })
  }, "Aprovar"))), me === MICHELE && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      marginTop: 8
    }
  }, "Para registrar a aprova\xE7\xE3o da Juliana com print, use \"Abrir\".")), meusAceites.length > 0 && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      border: "2px solid var(--blue-light)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18,
    color: "var(--blue-light)"
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15
    }
  }, meusAceites.length, " atividade(s) nova(s) para voc\xEA aceitar")), meusAceites.map(a => /*#__PURE__*/React.createElement(Linha, {
    key: a.key,
    a: a
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      padding: "4px 10px",
      fontSize: 11.5
    },
    onClick: () => patchAtiv(a.key, {
      aceita: true,
      nova: false
    })
  }, "Aceitar")))), novosChamados.length > 0 && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      border: "2px solid var(--blue-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "headset",
    size: 18,
    color: "var(--blue-dark)"
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15
    }
  }, novosChamados.length, " chamado(s) novo(s)")), respAtual !== P.GESTORA_ATENDIMENTO && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--orange)",
      fontWeight: 700,
      marginBottom: 6
    }
  }, "Atendimentos com ", nomeCurto(respAtual), " enquanto ", nomeCurto(P.GESTORA_ATENDIMENTO), " est\xE1 ausente."), novosChamados.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12.5,
      padding: "8px 0",
      borderBottom: "1px solid var(--canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, c.assunto), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)"
    }
  }, c.id, " \xB7 ", c.area, " \xB7 ", c.solicitante, " \xB7 urg\xEAncia ", c.urgencia || "—")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      padding: "4px 10px",
      fontSize: 11.5
    },
    onClick: () => onNavigate("atendimentos", {
      chamadoId: c.id
    })
  }, "Abrir"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 16,
      flexWrap: "wrap"
    }
  }, [["iniciativas", "Nova iniciativa", "plus-circle"], ["atividades", "Lançar atividade", "calendar-plus"], ...(podeAtender ? [["atendimentos", "Atendimentos", "headset"]] : []), ["report", "Gerar report", "file-text"]].map(([v, label, icon]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => onNavigate(v),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      padding: "9px 14px",
      borderRadius: 8,
      border: "1px solid var(--line)",
      background: "#fff",
      color: "var(--blue-dark)",
      fontWeight: 700,
      fontSize: 12.5,
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15
  }), " ", label))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 15,
    color: "var(--slate)"
  }), /*#__PURE__*/React.createElement(Select, {
    value: fIni,
    onChange: e => setFIni(e.target.value),
    style: {
      width: 210
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todas as iniciativas"), inis.map(i => /*#__PURE__*/React.createElement("option", {
    key: i.id,
    value: i.id
  }, i.nome))), /*#__PURE__*/React.createElement(Select, {
    value: fResp,
    onChange: e => setFResp(e.target.value),
    style: {
      width: 210
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Toda a equipe"), responsaveis.map(r => /*#__PURE__*/React.createElement("option", {
    key: r,
    value: r
  }, r))), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: fDe,
    onChange: e => setFDe(e.target.value),
    style: {
      padding: "8px 10px",
      border: "1px solid var(--line)",
      borderRadius: 8,
      fontSize: 13,
      fontFamily: "var(--font-sans)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      fontSize: 12
    }
  }, "at\xE9"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: fAte,
    onChange: e => setFAte(e.target.value),
    style: {
      padding: "8px 10px",
      border: "1px solid var(--line)",
      borderRadius: 8,
      fontSize: 13,
      fontFamily: "var(--font-sans)"
    }
  }), (fIni || fResp || fDe || fAte) && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setFIni("");
      setFResp("");
      setFDe("");
      setFAte("");
    }
  }, "Limpar"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      marginBottom: 16,
      background: "var(--soft-blue)",
      border: "1px solid var(--soft-blue)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, null, "Resumo executivo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      color: "var(--blue-dark)",
      lineHeight: 1
    }
  }, pctPrazo, "%"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      color: "var(--ink)",
      lineHeight: 1.6,
      flex: "1 1 320px"
    }
  }, "das atividades com prazo vencido foram conclu\xEDdas. A opera\xE7\xE3o mant\xE9m ", /*#__PURE__*/React.createElement("b", null, projAtivos), " projeto(s), ", /*#__PURE__*/React.createElement("b", null, prodAtivos), " produ\xE7\xE3o(\xF5es) e ", /*#__PURE__*/React.createElement("b", null, procAbertos), " processo(s), com ", /*#__PURE__*/React.createElement("b", null, totalAtivs), " atividade(s) no filtro", bloqueadas.length ? /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--orange)"
    }
  }, bloqueadas.length), " aguardando terceiros") : "", aprovPendentes.length ? /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--orange)"
    }
  }, aprovPendentes.length), " aguardando aprova\xE7\xE3o") : "", "."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Projetos ativos",
    value: projAtivos,
    sub: "em andamento",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "folder-kanban",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Produ\xE7\xF5es",
    value: prodAtivos,
    sub: "em ciclos",
    color: "var(--nat-produto)",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "repeat",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Processos",
    value: procAbertos,
    sub: "rotinas",
    color: "var(--nat-processo)",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "list-checks",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Atrasadas",
    value: atrasadas.length,
    sub: "prazo vencido",
    color: atrasadas.length ? "var(--danger)" : "var(--slate)",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "alert-triangle",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Conclu\xEDdas",
    value: entregues,
    sub: "no filtro atual",
    color: "var(--success)",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle-2",
      size: 16
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      flex: "1 1 340px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, null, "Quem est\xE1 com o qu\xEA \xB7 esta semana"), pessoasArr.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--slate)"
    }
  }, "Sem atividades abertas nesta semana."), pessoasArr.length > 0 && /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 12.5,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: "left",
      color: "var(--slate)"
    }
  }, ["Responsável", "Atividades", "Travadas", "Atrasadas"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "6px 8px 6px 0",
      fontSize: 10.5,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".3px",
      borderBottom: "1px solid var(--line)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, pessoasArr.map(([nome, d]) => {
    return /*#__PURE__*/React.createElement("tr", {
      key: nome,
      style: {
        borderBottom: "1px solid var(--canvas)",
        cursor: "pointer"
      },
      onClick: () => setFResp(nome)
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "8px 8px 8px 0",
        fontWeight: 600
      }
    }, nomeCurto(nome), P.ausenteEm(ausencias, nome, TODAY) && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6
      }
    }, /*#__PURE__*/React.createElement(P.Chip, {
      color: "#fff",
      bg: "var(--slate)"
    }, (P.ausenteEm(ausencias, nome, TODAY).tipo || "ausente").toLowerCase()))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: 8
      }
    }, d.qtd), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: 8,
        color: d.travadas ? "var(--warning)" : "var(--muted)",
        fontWeight: 700
      }
    }, d.travadas), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: 8,
        fontWeight: 700,
        color: d.atrasadas ? "var(--danger)" : "var(--muted)"
      }
    }, d.atrasadas));
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      flex: "1 1 260px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, null, "Aus\xEAncias \xB7 pr\xF3ximos 30 dias"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      padding: "4px 10px",
      fontSize: 11.5
    },
    onClick: abrirAusencias
  }, "Cadastrar")), (() => {
    const lst = (ausencias || []).filter(a => P.overlaps(a.de, a.ate, TODAY, P.addDays(TODAY, 30))).sort((a, b) => a.de.localeCompare(b.de));
    return lst.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--slate)"
      }
    }, "Ningu\xE9m ausente no per\xEDodo.") : lst.map(a => /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 12.5,
        padding: "7px 0",
        borderBottom: "1px solid var(--canvas)"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        flex: 1
      }
    }, nomeCurto(a.nome)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--slate)"
      }
    }, a.tipo || "Ausente"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: a.de <= TODAY ? "var(--orange)" : "var(--ink)"
      }
    }, fmtPeriodo(a.de, a.ate))));
  })()), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      flex: "1 1 340px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, null, "Alertas"), bloqueadas.length === 0 && atrasadas.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--slate)"
    }
  }, "Sem pend\xEAncias cr\xEDticas no momento."), atrasadas.map(a => /*#__PURE__*/React.createElement(Linha, {
    key: "a" + a.key,
    a: a,
    color: "var(--danger)"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "Atrasado"
  }))), bloqueadas.map(a => /*#__PURE__*/React.createElement(Linha, {
    key: "b" + a.key,
    a: a,
    color: "var(--warning)"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: a.status
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      flex: "1 1 260px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, null, "Atividades por natureza"), mixNat.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.n,
    style: {
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12.5,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: natColor[m.n]
    }
  }, P.NAT_LABEL[m.n]), /*#__PURE__*/React.createElement("b", null, m.v)), /*#__PURE__*/React.createElement(ProgressBar, {
    pct: m.v / maxNat,
    color: natColor[m.n],
    width: "100%"
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      flex: "1 1 260px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, null, "Distribui\xE7\xE3o por categoria"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      marginBottom: 10
    }
  }, "Atividades classificadas em P \xB7 M \xB7 G"), mixCx.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.c,
    style: {
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12.5,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    },
    title: m.def
  }, m.label), /*#__PURE__*/React.createElement("b", null, m.v)), /*#__PURE__*/React.createElement(ProgressBar, {
    pct: m.v / maxCx,
    color: "var(--blue-light)",
    width: "100%"
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      flex: "1 1 260px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, null, "Origem das demandas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: propria || 1,
      background: "var(--blue-dark)",
      color: "#fff",
      padding: "10px 12px",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800
    }
  }, propria + outras ? Math.round(propria / (propria + outras) * 100) : 0, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11
    }
  }, "Pr\xF3pria")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: outras || 1,
      background: "var(--orange)",
      color: "#fff",
      padding: "10px 12px",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800
    }
  }, propria + outras ? Math.round(outras / (propria + outras) * 100) : 0, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11
    }
  }, "Apoio a outras \xE1reas"))), Object.entries(porArea).map(([a, v]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12.5,
      padding: "4px 0",
      borderBottom: "1px solid var(--canvas)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--slate)"
    }
  }, a), /*#__PURE__*/React.createElement("b", null, v))))));
}
window.Painel = Painel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/Painel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/StatusReport.jsx
try { (() => {
function StatusReport({
  inis,
  lanc,
  tarefas,
  iniById,
  chamados,
  canais
}) {
  const {
    Card,
    Button,
    StatusBadge,
    ProgressBar,
    Select
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    Icon,
    fmtY,
    fmt,
    addDays,
    TODAY,
    exportCSV
  } = window.PortalUI;
  const [fIni, setFIni] = React.useState("");
  const [fResp, setFResp] = React.useState("");
  const [fDe, setFDe] = React.useState("");
  const [fAte, setFAte] = React.useState("");
  const respostas = Array.from(new Set([...lanc, ...tarefas].map(x => x.resp).filter(Boolean))).sort();
  const dataDe = x => x.dataPub || x.entrega || x.prazo || x.s || "0000-00-00";
  const passa = (x, resp) => (!fIni || x.ini === fIni) && (!fResp || resp === fResp) && (!fDe || dataDe(x) >= fDe) && (!fAte || dataDe(x) <= fAte);
  const lancF = lanc.filter(l => passa(l, l.resp));
  const tarefasF = tarefas.filter(t => passa(t, t.resp));
  const inisF = fIni ? inis.filter(i => i.id === fIni) : inis;
  const projetos = inisF.filter(i => i.natureza === "Projeto");
  const produtos = inisF.filter(i => i.natureza === "Produto");
  const processos = inisF.filter(i => i.natureza === "Processo");
  const fasesConcluidas = tarefasF.filter(t => t.status === "Concluído").length;
  const fasesTotal = tarefasF.length;
  const entregasOk = lancF.filter(l => ["Publicado", "Entregue"].includes(l.status)).length;
  const entregasTotal = lancF.length;
  const procs = lancF.filter(l => l.prazo && l.entrega);
  const pctPrazo = procs.length ? Math.round(procs.filter(l => l.entrega <= l.prazo).length / procs.length * 100) : 0;
  const progressoGeral = fasesTotal ? Math.round(fasesConcluidas / fasesTotal * 100) : 0;
  const bloqueadas = lancF.filter(l => ["Aguardando terceiro", "Bloqueado"].includes(l.status));
  const atrasadas = [...lancF, ...tarefasF].filter(x => x.status === "Atrasado");
  const faseStatusColor = {
    "Concluído": "var(--success)",
    "Em andamento": "var(--info)",
    "Não iniciado": "var(--muted)"
  };
  const exportarEntregaveis = () => exportCSV("status-report-entregaveis.csv", ["Entregável", "Iniciativa", "Responsável", "Status", "Data"], lancF.map(l => [l.titulo, iniById(l.ini).nome, l.resp, l.status, l.dataPub || l.entrega || l.prazo || ""]));
  const KpiRow = ({
    nome,
    referencia,
    resultado,
    status
  }) => /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      fontWeight: 700
    }
  }, nome), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      color: "var(--slate)",
      fontSize: 12.5
    }
  }, referencia), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px"
    }
  }, resultado), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px"
    }
  }, status));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 12,
      marginBottom: 16
    },
    className: "no-print"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      color: "var(--ink)",
      margin: 0,
      fontFamily: "var(--font-sans)"
    }
  }, "Status Report"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--slate)",
      marginTop: 3
    }
  }, "Painel PMO consolidado \xB7 gerado automaticamente a partir das iniciativas.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "file-spreadsheet",
      size: 15
    }),
    onClick: exportarEntregaveis
  }, "Exportar Excel"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "printer",
      size: 15
    }),
    onClick: () => window.print()
  }, "Exportar PDF"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 14,
      marginBottom: 16
    },
    className: "no-print"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 15,
    color: "var(--slate)"
  }), /*#__PURE__*/React.createElement(Select, {
    value: fIni,
    onChange: e => setFIni(e.target.value),
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todas as iniciativas"), inis.map(i => /*#__PURE__*/React.createElement("option", {
    key: i.id,
    value: i.id
  }, i.nome))), /*#__PURE__*/React.createElement(Select, {
    value: fResp,
    onChange: e => setFResp(e.target.value),
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todos os respons\xE1veis"), respostas.map(r => /*#__PURE__*/React.createElement("option", {
    key: r,
    value: r
  }, r))), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: fDe,
    onChange: e => setFDe(e.target.value),
    style: {
      padding: "8px 10px",
      border: "1px solid var(--line)",
      borderRadius: 8,
      fontSize: 13,
      fontFamily: "var(--font-sans)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      fontSize: 12
    }
  }, "at\xE9"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: fAte,
    onChange: e => setFAte(e.target.value),
    style: {
      padding: "8px 10px",
      border: "1px solid var(--line)",
      borderRadius: 8,
      fontSize: 13,
      fontFamily: "var(--font-sans)"
    }
  }), (fIni || fResp || fDe || fAte) && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setFIni("");
      setFResp("");
      setFDe("");
      setFAte("");
    }
  }, "Limpar"))), /*#__PURE__*/React.createElement("div", {
    id: "status-report-print"
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 24,
      marginBottom: 16,
      background: "var(--blue-dark)",
      color: "#fff",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".5px",
      color: "#B9CEE6",
      marginBottom: 4
    }
  }, "Portal Gest\xE3o Pessoas e Cultura \xB7 Comunica\xE7\xE3o Interna"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      marginBottom: 2
    }
  }, "Status Report \u2014 Ciclo ", TODAY.slice(0, 4)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "#C7D8EA",
      marginBottom: 20
    }
  }, "Gerado em ", fmtY(TODAY), " \xB7 ", inisF.length, " iniciativas no filtro"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 800
    }
  }, progressoGeral, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#C7D8EA",
      textTransform: "uppercase",
      letterSpacing: ".3px"
    }
  }, "Progresso geral")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 800
    }
  }, fasesConcluidas, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      opacity: .7
    }
  }, "/", fasesTotal)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#C7D8EA",
      textTransform: "uppercase",
      letterSpacing: ".3px"
    }
  }, "Fases conclu\xEDdas")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 800
    }
  }, entregasOk, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      opacity: .7
    }
  }, "/", entregasTotal)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#C7D8EA",
      textTransform: "uppercase",
      letterSpacing: ".3px"
    }
  }, "Entreg\xE1veis OK")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 800
    }
  }, pctPrazo, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#C7D8EA",
      textTransform: "uppercase",
      letterSpacing: ".3px"
    }
  }, "KPIs no verde")))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 20,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "var(--blue-dark)",
      textTransform: "uppercase",
      letterSpacing: ".4px",
      paddingBottom: 8,
      marginBottom: 14,
      borderBottom: "2px solid var(--orange)"
    }
  }, "Resumo executivo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      color: "var(--ink)",
      lineHeight: 1.7
    }
  }, "No per\xEDodo, a opera\xE7\xE3o conduziu ", /*#__PURE__*/React.createElement("b", null, projetos.length), " projeto(s), ", /*#__PURE__*/React.createElement("b", null, produtos.length), " produto(s) cont\xEDnuo(s) e ", /*#__PURE__*/React.createElement("b", null, processos.length), " processo(s) operacionais.", " ", /*#__PURE__*/React.createElement("b", null, pctPrazo, "%"), " das entregas de processo ocorreram no prazo", bloqueadas.length ? /*#__PURE__*/React.createElement(React.Fragment, null, " e ", /*#__PURE__*/React.createElement("b", null, bloqueadas.length), " demanda(s) seguem aguardando terceiros") : "", ".", atrasadas.length ? /*#__PURE__*/React.createElement(React.Fragment, null, " H\xE1 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--danger)"
    }
  }, atrasadas.length), " item(ns) em atraso que exigem aten\xE7\xE3o.") : " Não há itens em atraso no momento.")), chamados && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      marginBottom: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "var(--blue-dark)",
      textTransform: "uppercase",
      letterSpacing: ".4px",
      padding: "16px 18px 0"
    }
  }, "Atendimentos no per\xEDodo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      padding: "14px 18px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: "var(--blue-dark)"
    }
  }, chamados.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--slate)"
    }
  }, "chamados totais")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: "var(--success)"
    }
  }, chamados.filter(c => c.status === "Concluído").length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--slate)"
    }
  }, "conclu\xEDdos")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: "var(--warning)"
    }
  }, chamados.filter(c => c.atividades.length === 0 && c.status !== "Concluído").length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--slate)"
    }
  }, "sem desdobrar")))), canais && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      marginBottom: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "var(--blue-dark)",
      textTransform: "uppercase",
      letterSpacing: ".4px",
      padding: "16px 18px 0"
    }
  }, "Canais de comunica\xE7\xE3o no per\xEDodo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      padding: "14px 18px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: "var(--nat-produto)"
    }
  }, canais.podcast.seguidores), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--slate)"
    }
  }, "inscritos podcast")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: "var(--nat-produto)"
    }
  }, canais.instagram.seguidores.toLocaleString("pt-BR")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--slate)"
    }
  }, "seguidores Instagram")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: "var(--nat-produto)"
    }
  }, canais.linkedin.seguidores.toLocaleString("pt-BR")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--slate)"
    }
  }, "seguidores LinkedIn")))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "var(--blue-dark)",
      textTransform: "uppercase",
      letterSpacing: ".4px",
      marginBottom: 10
    }
  }, "Cronograma por projeto"), projetos.map(p => {
    const fases = tarefasF.filter(t => t.ini === p.id);
    return /*#__PURE__*/React.createElement(Card, {
      key: p.id,
      style: {
        padding: 18,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 10,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15
      }
    }, p.nome), /*#__PURE__*/React.createElement(StatusBadge, {
      status: p.status
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        fontSize: 12,
        color: "var(--slate)"
      }
    }, fmt(p.ini), " \u2192 ", fmt(p.fim))), fases.map(f => /*#__PURE__*/React.createElement("div", {
      key: f.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "7px 0",
        borderTop: "1px solid var(--canvas)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: faseStatusColor[f.status] || "var(--muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: f.status === "Concluído" ? "check-circle-2" : f.status === "Em andamento" ? "clock" : "circle",
      size: 15
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontSize: 13,
        fontWeight: 600
      }
    }, f.nome), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--muted)"
      }
    }, fmt(f.s), " \u2192 ", fmt(f.e)), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 90
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      pct: f.pct,
      color: "var(--nat-projeto)",
      width: "100%"
    })))));
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      marginBottom: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "var(--blue-dark)",
      textTransform: "uppercase",
      letterSpacing: ".4px",
      padding: "16px 18px 0"
    }
  }, "Entreg\xE1veis"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 12.5,
      fontFamily: "var(--font-sans)",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--canvas)",
      textAlign: "left",
      color: "var(--slate)"
    }
  }, ["Entregável", "Iniciativa", "Responsável", "Status"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "9px 18px",
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, lancF.map(l => /*#__PURE__*/React.createElement("tr", {
    key: l.id,
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 18px"
    }
  }, l.titulo), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 18px",
      color: "var(--slate)"
    }
  }, iniById(l.ini).nome), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 18px",
      color: "var(--slate)"
    }
  }, l.resp), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 18px"
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: l.status
  }))))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      marginBottom: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "var(--blue-dark)",
      textTransform: "uppercase",
      letterSpacing: ".4px",
      padding: "16px 18px 0"
    }
  }, "Indicadores (KPIs)"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 12.5,
      fontFamily: "var(--font-sans)",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--canvas)",
      textAlign: "left",
      color: "var(--slate)"
    }
  }, ["KPI", "Referência", "Resultado", "Status"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "9px 18px",
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(KpiRow, {
    nome: "% de processos no prazo",
    referencia: "Acordo de n\xEDvel de servi\xE7o (SLA)",
    resultado: /*#__PURE__*/React.createElement("b", null, pctPrazo, "%"),
    status: /*#__PURE__*/React.createElement(StatusBadge, {
      status: pctPrazo >= 90 ? "Ativo" : "Aguardando terceiro"
    })
  }), /*#__PURE__*/React.createElement(KpiRow, {
    nome: "Progresso dos projetos",
    referencia: "Atividades conclu\xEDdas / total",
    resultado: /*#__PURE__*/React.createElement("b", null, fasesConcluidas, "/", fasesTotal),
    status: /*#__PURE__*/React.createElement(StatusBadge, {
      status: progressoGeral >= 60 ? "Em andamento" : "Não iniciado"
    })
  }), /*#__PURE__*/React.createElement(KpiRow, {
    nome: "Demandas bloqueadas",
    referencia: "Aguardando terceiros",
    resultado: /*#__PURE__*/React.createElement("b", null, bloqueadas.length),
    status: /*#__PURE__*/React.createElement(StatusBadge, {
      status: bloqueadas.length ? "Aguardando terceiro" : "Concluído"
    })
  }), /*#__PURE__*/React.createElement(KpiRow, {
    nome: "Itens em atraso",
    referencia: "Tarefas e entregas",
    resultado: /*#__PURE__*/React.createElement("b", null, atrasadas.length),
    status: /*#__PURE__*/React.createElement(StatusBadge, {
      status: atrasadas.length ? "Atrasado" : "Concluído"
    })
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "var(--blue-dark)",
      textTransform: "uppercase",
      letterSpacing: ".4px",
      padding: "16px 18px 0"
    }
  }, "Pr\xF3ximos passos \xB7 governan\xE7a"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 12.5,
      fontFamily: "var(--font-sans)",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--canvas)",
      textAlign: "left",
      color: "var(--slate)"
    }
  }, ["Quando", "Atividade", "Iniciativa", "Responsável"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "9px 18px",
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, [...tarefasF.filter(t => t.status !== "Concluído"), ...lancF.filter(l => !["Publicado", "Entregue"].includes(l.status))].sort((a, b) => (a.s || a.dataPub || a.prazo || "").localeCompare(b.s || b.dataPub || b.prazo || "")).slice(0, 8).map(x => /*#__PURE__*/React.createElement("tr", {
    key: x.id,
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 18px",
      fontWeight: 700,
      color: "var(--slate)"
    }
  }, fmt(x.s || x.dataPub || x.prazo)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 18px"
    }
  }, x.nome || x.titulo), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 18px",
      color: "var(--slate)"
    }
  }, iniById(x.ini).nome), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "9px 18px",
      color: "var(--slate)"
    }
  }, x.resp))))))));
}
window.StatusReport = StatusReport;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/StatusReport.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/Usuarios.jsx
try { (() => {
function Usuarios({
  users,
  setUsers
}) {
  const {
    Card,
    Button,
    Field,
    Input,
    Select,
    Modal
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    Icon,
    uid,
    gerarSenha
  } = window.PortalUI;
  const [modal, setModal] = React.useState(null);
  const [novaSenhaGerada, setNovaSenhaGerada] = React.useState(null);
  const [erro, setErro] = React.useState("");
  const save = async rec => {
    const existe = users.some(u => u.id === rec.id);
    setErro("");
    if (window.sb && existe) {
      const r = await window.PortalSync.saveUsuarioFields(rec.id, rec);
      if (r.error) {
        setErro(r.error);
        return;
      }
      setUsers(prev => prev.map(u => u.id === rec.id ? {
        ...u,
        ...rec
      } : u));
      setModal(null);
      return;
    }
    if (window.sb && !existe) {
      const r = await window.PortalSync.adminCriarUsuario({
        nome: rec.nome,
        cargo: rec.cargo,
        email: rec.email,
        login: rec.login,
        perfil: rec.perfil
      });
      if (r.error) {
        setErro(r.error);
        return;
      }
      const uList = await window.PortalSync.loadUsuarios();
      if (uList) setUsers(uList);
      setNovaSenhaGerada({
        nome: rec.nome,
        senha: r.senha
      });
      setModal(null);
      return;
    }
    setUsers(prev => prev.some(u => u.id === rec.id) ? prev.map(u => u.id === rec.id ? rec : u) : [...prev, rec]);
    setModal(null);
  };
  const toggleAtivo = async u => {
    if (window.sb) {
      const r = await window.PortalSync.saveUsuarioFields(u.id, {
        ...u,
        ativo: !u.ativo
      });
      if (r.error) return setErro(r.error);
    }
    setUsers(prev => prev.map(x => x.id === u.id ? {
      ...x,
      ativo: !x.ativo
    } : x));
  };
  const resetarSenha = async u => {
    if (!confirm(`Gerar nova senha para ${u.nome}? A senha atual deixa de funcionar.`)) return;
    if (window.sb) {
      const r = await window.PortalSync.adminResetarSenha(u.id);
      if (r.error) return setErro(r.error);
      return setNovaSenhaGerada({
        nome: u.nome,
        senha: r.senha
      });
    }
    const nova = gerarSenha();
    setUsers(prev => prev.map(x => x.id === u.id ? {
      ...x,
      senha: nova,
      precisaTrocarSenha: true
    } : x));
    setNovaSenhaGerada({
      nome: u.nome,
      senha: nova
    });
  };
  const initials = n => n.split(" ").map(p => p[0]).slice(0, 2).join("");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      color: "var(--ink)",
      margin: 0,
      fontFamily: "var(--font-sans)"
    }
  }, "Usu\xE1rios"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--slate)",
      marginTop: 3
    }
  }, "Vis\xEDvel apenas para Gestor e Administrador. Cadastro de equipe, perfis de acesso e senhas.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "user-plus",
      size: 16
    }),
    onClick: () => setModal("new")
  }, "Novo usu\xE1rio"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--canvas)",
      textAlign: "left",
      color: "var(--slate)"
    }
  }, ["Nome", "Cargo", "Perfil", "Login", "Senha", "Status", "Ações"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "11px 14px",
      fontSize: 11.5,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".3px"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, users.map(u => /*#__PURE__*/React.createElement("tr", {
    key: u.id,
    style: {
      borderTop: "1px solid var(--line)",
      opacity: u.ativo === false ? .5 : 1
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 16,
      background: "var(--soft-blue)",
      color: "var(--blue-dark)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: 13
    }
  }, initials(u.nome)), /*#__PURE__*/React.createElement("b", null, u.nome))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 14px",
      color: "var(--slate)"
    }
  }, u.cargo), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      background: "var(--soft-blue)",
      color: "var(--blue-dark)",
      padding: "3px 9px",
      borderRadius: 20
    }
  }, u.perfil)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 14px",
      color: "var(--slate)",
      fontFamily: "monospace"
    }
  }, u.login), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 14px",
      color: "var(--slate)",
      fontFamily: "monospace"
    }
  }, window.sb ? "••••••" : u.senha || "••••••", u.precisaTrocarSenha && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--warning)",
      fontWeight: 700
    }
  }, "troca obrigat\xF3ria")), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 14px"
    }
  }, u.ativo === false ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--danger)",
      background: "var(--danger-bg)",
      padding: "3px 9px",
      borderRadius: 6
    }
  }, "Inativo") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--success)",
      background: "var(--success-bg)",
      padding: "3px 9px",
      borderRadius: 6
    }
  }, "Ativo")), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "icon",
    onClick: () => setModal(u),
    title: "Editar"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 15
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "icon",
    onClick: () => resetarSenha(u),
    title: "Resetar senha"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "key-round",
    size: 15
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "icon",
    onClick: () => toggleAtivo(u),
    title: u.ativo === false ? "Ativar" : "Inativar",
    style: {
      color: u.ativo === false ? "var(--success)" : "var(--danger)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: u.ativo === false ? "user-check" : "user-x",
    size: 15
  })))))))))), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--danger)",
      fontSize: 12.5,
      marginTop: 10
    }
  }, erro), modal && /*#__PURE__*/React.createElement(UsuarioModal, {
    initial: modal === "new" ? null : modal,
    onSave: save,
    onClose: () => setModal(null)
  }), novaSenhaGerada && /*#__PURE__*/React.createElement(Modal, {
    title: "Senha redefinida",
    sub: `Nova senha para ${novaSenhaGerada.nome} — o usuário deverá trocá-la no próximo login.`,
    onClose: () => setNovaSenhaGerada(null),
    width: 380
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "monospace",
      fontSize: 20,
      fontWeight: 800,
      textAlign: "center",
      background: "var(--soft-blue)",
      padding: 16,
      borderRadius: 8,
      color: "var(--blue-dark)"
    }
  }, novaSenhaGerada.senha), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setNovaSenhaGerada(null),
    style: {
      width: "100%",
      justifyContent: "center",
      marginTop: 14
    }
  }, "Entendi")));
}
function UsuarioModal({
  initial,
  onSave,
  onClose
}) {
  const {
    Field,
    Input,
    Select,
    Modal,
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const {
    uid,
    gerarSenha
  } = window.PortalUI;
  const [f, setF] = React.useState(initial || {
    nome: "",
    cargo: "",
    email: "",
    login: "",
    perfil: "Analista",
    senha: gerarSenha(),
    ativo: true,
    precisaTrocarSenha: true
  });
  const set = (k, v) => setF({
    ...f,
    [k]: v
  });
  const salvar = () => {
    if (!f.nome || !f.email || !f.login) return;
    onSave({
      ...f,
      id: initial ? initial.id : uid("u")
    });
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: initial ? "Editar usuário" : "Novo usuário",
    sub: initial ? undefined : "Uma senha é gerada automaticamente — o usuário deverá trocá-la no primeiro acesso.",
    onClose: onClose,
    width: 420
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.nome,
    onChange: e => set("nome", e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Cargo"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.cargo,
    onChange: e => set("cargo", e.target.value),
    placeholder: "ex.: Analista de CI"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.email,
    onChange: e => set("email", e.target.value),
    placeholder: "nome@aguiabranca.com.br"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Login"
  }, /*#__PURE__*/React.createElement(Input, {
    value: f.login,
    onChange: e => set("login", e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Perfil"
  }, /*#__PURE__*/React.createElement(Select, {
    value: f.perfil,
    onChange: e => set("perfil", e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Administrador"), /*#__PURE__*/React.createElement("option", null, "Gestor"), /*#__PURE__*/React.createElement("option", null, "Analista"), /*#__PURE__*/React.createElement("option", null, "Visualizador"))), !initial && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--slate)",
      marginBottom: 12
    }
  }, window.sb ? "A senha temporária aparece depois de salvar." : /*#__PURE__*/React.createElement(React.Fragment, null, "Senha gerada: ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "monospace",
      color: "var(--blue-dark)"
    }
  }, f.senha))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: salvar,
    style: {
      flex: 1,
      justifyContent: "center"
    }
  }, "Salvar"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancelar")));
}
function AlterarSenhaModal({
  user,
  setUsers,
  obrigatorio,
  onClose
}) {
  const {
    Modal,
    Field,
    Input,
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
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
      setUsers(prev => prev.map(u => u.id === user.id ? {
        ...u,
        precisaTrocarSenha: false
      } : u));
      return onClose(nova);
    }
    if (atual !== user.senha) return setErro("Senha atual incorreta.");
    setUsers(prev => prev.map(u => u.id === user.id ? {
      ...u,
      senha: nova,
      precisaTrocarSenha: false
    } : u));
    onClose(nova);
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Alterar senha",
    sub: obrigatorio ? "Sua senha foi gerada pelo gestor — defina uma nova senha para continuar." : undefined,
    onClose: obrigatorio ? undefined : () => onClose(null)
  }, !window.sb && /*#__PURE__*/React.createElement(Field, {
    label: "Senha atual"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "password",
    value: atual,
    onChange: e => setAtual(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nova senha"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "password",
    value: nova,
    onChange: e => setNova(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Confirmar nova senha"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "password",
    value: confirma,
    onChange: e => setConfirma(e.target.value)
  })), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--danger)",
      fontSize: 12.5,
      marginBottom: 10
    }
  }, erro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: salvar,
    style: {
      flex: 1,
      justifyContent: "center"
    }
  }, "Salvar nova senha"), !obrigatorio && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onClose(null)
  }, "Cancelar")));
}
window.Usuarios = Usuarios;
window.AlterarSenhaModal = AlterarSenhaModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/Usuarios.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/shared.jsx
try { (() => {
/* Shared data model, helpers and cross-screen components for the Portal CI UI kit. */
const pad2 = n => String(n).padStart(2, "0");
const isoLocal = d => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const TODAY = isoLocal(new Date());
const AREAS = ["DHO · Pessoas e Cultura", "R&S", "Diretoria Adm. e Financeira", "Comercial", "Vitória Motors", "Presidência", "Outra"];
/* Categoria da atividade (P, M, G) — única classificação usada no portal. */
const CATEGORIAS = [{
  v: "P",
  nome: "Operacional",
  def: "Segue um processo redondo e padronizado. Execução predominantemente manual, que não exige analítico de quem executa: a decisão já está tomada pelo processo.",
  ex: "Lançamento de notas fiscais; arquivamento de documentos; envio de comunicados padronizados"
}, {
  v: "M",
  nome: "Tático",
  def: "Exige um pouco mais de analítico de quem executa, ou envolve um processo mais robusto — com mais etapas, mais sistemas ou mais interfaces com outras áreas.",
  ex: "Conferência e consolidação de gerenciais; cotações; análise de indicadores de rotina"
}, {
  v: "G",
  nome: "Estratégico",
  def: "Envolve analítico aprofundado e tomada de decisão de quem executa. O resultado depende diretamente do julgamento e da experiência do profissional.",
  ex: "Negociação de contratos estratégicos; definição de políticas e processos; análise de risco"
}];
const catLabel = c => {
  const x = CATEGORIAS.find(k => k.v === c);
  return x ? `${x.v} · ${x.nome}` : "—";
};
const NAT_LABEL = {
  Projeto: "Projeto",
  Produto: "Produção",
  Processo: "Processo",
  Atendimento: "Atendimento"
};
const STATUS_ATV = ["Não iniciado", "Em andamento", "Aguardando terceiro", "Concluído", "Atrasado"];
const URGENCIAS = [["Baixa", "Sem pressa"], ["Média", "Tem data, mas há margem"], ["Alta", "Preciso em poucos dias"], ["Urgente", "Impacta algo imediato"]];
const URG_COLOR = {
  Baixa: "var(--slate)",
  "Média": "var(--info)",
  Alta: "var(--orange)",
  Urgente: "var(--danger)"
};
const STATUS_CHAMADO = ["Novo", "Em atendimento", "Aguardando solicitante", "Concluído", "Cancelado"];
const TIPOS_ATENDIMENTO = ["Vídeo", "Comunicação", "Design/Arte", "Evento", "Outro"];
const TIPOS_MARCO = ["Data comemorativa", "Aniversário", "Evento", "Lembrete"];
const concluido = st => ["Concluído", "Entregue", "Publicado"].includes(st);
const D = s => new Date(s + "T00:00:00");
const fmt = s => {
  if (!s) return "—";
  const d = D(s);
  return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}`;
};
const fmtY = s => {
  if (!s) return "—";
  const d = D(s);
  return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
};
const fmtPeriodo = (s, e) => !e || e === s ? fmt(s) : `${fmt(s)} – ${fmt(e)}`;
const daysBetween = (a, b) => Math.round((D(b) - D(a)) / 86400000);
const addDays = (s, n) => {
  const d = D(s);
  d.setDate(d.getDate() + n);
  return isoLocal(d);
};
const mondayOf = s => {
  const d = D(s);
  d.setDate(d.getDate() - (d.getDay() + 6) % 7);
  return isoLocal(d);
};
const inRange = (x, a, b) => x >= a && x <= b;
const overlaps = (s, e, a, b) => !!s && s <= b && (e || s) >= a;
const rnd = n => Array.from(crypto.getRandomValues(new Uint8Array(n)), b => b.toString(16).padStart(2, "0")).join("");
const uid = p => p + rnd(5);
const novoToken = () => rnd(24);
const agora = () => new Date().toLocaleString("pt-BR", {
  dateStyle: "short",
  timeStyle: "short"
});
const nomeCurto = n => {
  if (!n) return "—";
  const p = n.split(" ");
  return p.length > 1 ? `${p[0]} ${p[p.length - 1]}` : n;
};
const daysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
function monthGrid(ref) {
  const d = D(ref);
  const y = d.getFullYear(),
    m = d.getMonth();
  const first = new Date(y, m, 1);
  const startPad = (first.getDay() + 6) % 7;
  const cells = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth(y, m); day++) cells.push(`${y}-${pad2(m + 1)}-${pad2(day)}`);
  return {
    cells,
    label: first.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric"
    })
  };
}
const MICHELE = "Michele Aparecida Guss Gomes";
const JULIANA = "Juliana Barcelos Garcia";
const SARAH = "Sarah Candido Mirandola";
const ANDRE = "Andre Lovatti Coelho Koffer";
const ELIAS = "Elias Roberto";
const APROVADORES = [MICHELE, JULIANA];
const APROVADOR1 = MICHELE,
  APROVADOR2 = JULIANA;
const GESTORA_ATENDIMENTO = MICHELE;
const USERS0 = [{
  id: "u1",
  nome: ANDRE,
  cargo: "Analista de Comunicação Interna",
  email: "andrelkoffer@aguiabranca.com.br",
  login: "andrelkoffer",
  senha: "123456",
  perfil: "Analista",
  ativo: true,
  precisaTrocarSenha: false
}, {
  id: "u2",
  nome: SARAH,
  cargo: "Assistente de Comunicação Interna",
  email: "SarahC@aguiabranca.com.br",
  login: "SarahC",
  senha: "123456",
  perfil: "Analista",
  ativo: true,
  precisaTrocarSenha: false
}, {
  id: "u3",
  nome: MICHELE,
  cargo: "Supervisor de Comunicação Interna",
  email: "micheleg@aguiabranca.com.br",
  login: "micheleg",
  senha: "123456",
  perfil: "Gestor",
  ativo: true,
  precisaTrocarSenha: false
}, {
  id: "u4",
  nome: ELIAS,
  cargo: "Prestador de Serviço",
  email: "eliasroberto@gmail.com",
  login: "eliasroberto.ps",
  senha: "123456",
  perfil: "Analista",
  ativo: true,
  precisaTrocarSenha: false
}, {
  id: "u5",
  nome: "Amanda Gomes da Silva do Nascimento",
  cargo: "Analista de Dados e Remuneração",
  email: "amandagn@aguiabranca.com.br",
  login: "amandagn",
  senha: "123456",
  perfil: "Administrador",
  ativo: true,
  precisaTrocarSenha: false
}, {
  id: "u6",
  nome: JULIANA,
  cargo: "Head de Pessoas e Cultura",
  email: "julianab@aguiabranca.com.br",
  login: "julianab",
  senha: "123456",
  perfil: "Administrador",
  ativo: true,
  precisaTrocarSenha: false
}];
const gerarSenha = () => rnd(6);

/* ===== Log de alterações ===== */
const LOG_LABELS = {
  resp: "Responsável",
  s: "Início",
  e: "Fim",
  status: "Status",
  cx: "Categoria",
  dependeDe: "Dependência",
  aceita: "Aceite",
  recusada: "Recusa",
  precisaAprovacao: "Precisa de aprovação",
  aprovacao: "Aprovação",
  prazo: "Prazo",
  gestorResp: "Responsável pelo atendimento",
  urgencia: "Urgência",
  formato: "Formato",
  nome: "Nome",
  pct: "% concluído",
  natureza: "Natureza",
  objetivo: "Objetivo",
  area: "Área"
};
const fmtVal = v => {
  if (v === true) return "Sim";
  if (v === false) return "Não";
  if (v == null || v === "") return "—";
  if (typeof v === "object") return v.status || "—";
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return fmtY(v);
  return String(v);
};
function aplicarPatch(obj, patch, por) {
  const log = [...(obj.log || [])];
  Object.keys(patch).forEach(k => {
    if (!LOG_LABELS[k]) return;
    const de = obj[k],
      para = patch[k];
    if (JSON.stringify(de) === JSON.stringify(para)) return;
    const last = log[log.length - 1];
    if (last && last.k === k && last.por === (por || "") && Date.now() - last.ts < 60000) {
      log[log.length - 1] = {
        ...last,
        valor: fmtVal(para),
        quando: agora(),
        ts: Date.now()
      };
      return;
    }
    log.push({
      k,
      campo: LOG_LABELS[k],
      de: fmtVal(de),
      valor: fmtVal(para),
      quando: agora(),
      ts: Date.now(),
      por: por || ""
    });
  });
  return {
    ...obj,
    ...patch,
    log: log.slice(-60)
  };
}

/* ===== Aprovação ===== */
function aprovStatus(r) {
  if (!r || !r.precisaAprovacao) return null;
  const a = r.aprovacao;
  return a && a.status ? a.status : "Pendente envio";
}
const enviarAprovacao = por => ({
  status: "Aguardando",
  enviadoPor: por,
  enviadoEm: agora(),
  ts: Date.now(),
  votos: {}
});
function votar(r, aprovador, ok, por, print, comentario) {
  const a = {
    ...(r.aprovacao || {}),
    votos: {
      ...((r.aprovacao || {}).votos || {})
    }
  };
  a.votos[aprovador] = {
    ok,
    por,
    quando: agora(),
    print: print || "",
    comentario: comentario || ""
  };
  a.status = !ok ? "Reprovado" : APROVADORES.every(n => a.votos[n] && a.votos[n].ok) ? "Aprovado" : "Aguardando";
  return a;
}

/* ===== Lista unificada de atividades (projetos, ciclos, atendimentos) ===== */
function todasAtividades({
  inis,
  tarefas,
  ciclos,
  chamados,
  lanc
}) {
  const ini = id => inis.find(i => i.id === id) || {};
  const out = [];
  (tarefas || []).filter(t => t.nivel !== 0).forEach(t => out.push({
    key: "tar:" + t.id,
    kind: "tar",
    grupoId: t.ini,
    id: t.id,
    iniId: t.ini,
    titulo: t.nome,
    grupo: ini(t.ini).nome,
    sub: "",
    resp: t.resp,
    s: t.s,
    e: t.e || t.s,
    status: t.status,
    nat: "Projeto",
    cx: t.cx || "P",
    raw: t
  }));
  (ciclos || []).forEach(c => (c.etapas || []).forEach(e => out.push({
    key: "eta:" + c.id + ":" + e.id,
    kind: "eta",
    grupoId: c.id,
    id: e.id,
    cicloId: c.id,
    iniId: c.ini,
    titulo: e.nome,
    grupo: ini(c.ini).nome,
    sub: "Ciclo " + c.ciclo,
    resp: e.resp,
    s: e.s,
    e: e.e || e.s,
    status: e.status,
    nat: ini(c.ini).natureza || "Produto",
    cx: e.cx || "P",
    raw: e
  })));
  (chamados || []).forEach(c => (c.atividades || []).forEach(a => out.push({
    key: "cha:" + c.id + ":" + a.id,
    kind: "cha",
    grupoId: c.id,
    id: a.id,
    chamadoId: c.id,
    iniId: null,
    titulo: a.nome,
    grupo: "Atendimento " + c.id,
    sub: c.assunto,
    resp: a.resp,
    s: a.s,
    e: a.e || a.s,
    status: a.status,
    nat: "Atendimento",
    cx: a.cx || "P",
    raw: a
  })));
  (lanc || []).forEach(l => {
    const s = l.pedido || l.dataPub || l.prazo;
    out.push({
      key: "lan:" + l.id,
      kind: "lan",
      grupoId: l.ini,
      id: l.id,
      iniId: l.ini,
      titulo: l.titulo,
      grupo: ini(l.ini).nome,
      sub: "",
      resp: l.resp,
      s,
      e: l.prazo || l.dataPub || s,
      status: l.status,
      nat: ini(l.ini).natureza || "Processo",
      cx: l.cx || "P",
      raw: l
    });
  });
  const byGroup = {};
  out.forEach(a => {
    (byGroup[a.kind + a.grupoId] = byGroup[a.kind + a.grupoId] || {})[a.id] = a;
  });
  out.forEach(a => {
    a.chamadoOrigem = a.raw.chamadoOrigem || a.chamadoId || null;
    a.atrasada = !concluido(a.status) && !!a.e && a.e < TODAY;
    a.statusView = a.atrasada ? "Atrasado" : a.status;
    a.aprov = aprovStatus(a.raw);
    const dep = a.raw.dependeDe && byGroup[a.kind + a.grupoId][a.raw.dependeDe];
    a.depAguardando = dep && !concluido(dep.status) ? dep : null;
    a.pendenteAceite = !!a.raw.nova && !a.raw.aceita && !a.raw.recusada;
  });
  return out;
}

/* ===== Atendimento: responsável conforme ausências ===== */
function respAtendimento(ausencias, data) {
  let r = GESTORA_ATENDIMENTO;
  const vistos = new Set();
  for (let i = 0; i < 6; i++) {
    vistos.add(r);
    const aus = (ausencias || []).find(a => a.nome === r && inRange(data || TODAY, a.de, a.ate));
    if (!aus) return r;
    if (!aus.substituto || vistos.has(aus.substituto)) return JULIANA;
    r = aus.substituto;
  }
  return JULIANA;
}
const TIPOS_AUSENCIA = ["Férias", "Folga", "Licença", "Atestado", "Treinamento / curso", "Outro"];
const ausenteEm = (ausencias, nome, s, e) => (ausencias || []).find(a => a.nome === nome && overlaps(a.de, a.ate, s || TODAY, e || s || TODAY));
const rotuloResp = (u, ausencias, s, e) => {
  const a = ausenteEm(ausencias, u.nome, s, e);
  return a ? `${u.nome} — ${(a.tipo || "ausente").toLowerCase()} ${fmt(a.de)} a ${fmt(a.ate)}` : u.nome;
};
const confirmaResp = (ausencias, nome, s, e) => {
  const a = nome && ausenteEm(ausencias, nome, s, e);
  return !a || confirm(`${nomeCurto(nome)} estará ausente (${(a.tipo || "ausência").toLowerCase()}) de ${fmtY(a.de)} a ${fmtY(a.ate)}. Direcionar mesmo assim?`);
};
const ausenciaAtiva = (ausencias, nome, data) => (ausencias || []).find(a => a.nome === nome && inRange(data || TODAY, a.de, a.ate));
const nextIniId = inis => "IN" + String(inis.reduce((m, i) => Math.max(m, parseInt(String(i.id).replace(/\D/g, ""), 10) || 0), 0) + 1).padStart(2, "0");
const FORMATOS = [["Atendimento", "Pontual", "Fica só em Atendimentos — entrega única."], ["Projeto", "Projeto", "Tem começo, meio e fim — vira um cronograma."], ["Produto", "Produção", "Vai se repetir em ciclos/edições."], ["Processo", "Processo", "Vira uma rotina da equipe."]];
const nextChamadoId = chamados => "AT" + String(chamados.reduce((m, c) => /^AT\d+$/.test(c.id) ? Math.max(m, parseInt(c.id.slice(2), 10)) : m, 0) + 1).padStart(4, "0");
const linkChamado = token => new URL("chamado.html" + (token ? "?c=" + token : ""), location.href).href;
function waLink(phone, msg) {
  let d = String(phone || "").replace(/\D/g, "");
  if (d && d.length <= 11) d = "55" + d;
  return `https://wa.me/${d}?text=${encodeURIComponent(msg)}`;
}

/* ===== Notificações (derivadas do estado) ===== */
function gerarNotificacoes({
  ativs,
  chamados,
  inis,
  user,
  podeAtender,
  ausencias
}) {
  const me = user.nome,
    out = [],
    ts0 = d => d ? Date.parse(d + "T08:00:00") || 0 : 0;
  const push = n => out.push(n);
  ativs.forEach(x => {
    if (x.resp !== me || concluido(x.status)) return;
    const au = ausenteEm(ausencias, me, x.s, x.e);
    if (au) push({
      id: "conf:" + x.key + ":" + au.id + ":" + x.s + x.e,
      icon: "calendar-x",
      titulo: "Atividade durante sua ausência",
      texto: `${x.titulo} (${fmtPeriodo(x.s, x.e)}) cai em ${(au.tipo || "ausência").toLowerCase()} — redirecione ou ajuste a data`,
      key: x.key,
      view: "atividades",
      ts: Date.now() - 1,
      destaque: true
    });
  });
  ativs.forEach(a => {
    const r = a.raw,
      minha = a.resp === me,
      criei = r.criadoPor === me;
    if (minha && a.pendenteAceite) push({
      id: "nova:" + a.key + ":" + (r.criadoTs || 0),
      icon: "calendar-plus",
      titulo: "Nova atividade para você",
      texto: a.titulo + " · " + a.grupo + (r.criadoPor ? ` · por ${nomeCurto(r.criadoPor)}` : ""),
      key: a.key,
      view: "atividades",
      ts: r.criadoTs || 0,
      destaque: true
    });
    (r.log || []).forEach(l => {
      if (!l.por || l.por === me) return;
      if (l.k === "resp" && l.valor === me) push({
        id: "rem:" + a.key + ":" + l.ts,
        icon: "repeat",
        titulo: "Atividade direcionada a você",
        texto: `${a.titulo} · por ${nomeCurto(l.por)}`,
        key: a.key,
        view: "atividades",
        ts: l.ts,
        destaque: true
      });else if (l.k === "resp" && l.de === me) push({
        id: "sai:" + a.key + ":" + l.ts,
        icon: "user-minus",
        titulo: "Atividade passou para outra pessoa",
        texto: `${a.titulo} → ${l.valor} · por ${nomeCurto(l.por)}`,
        key: a.key,
        view: "atividades",
        ts: l.ts
      });else if ((minha || criei) && l.k !== "aprovacao") push({
        id: "upd:" + a.key + ":" + l.k + ":" + l.ts,
        icon: "pencil",
        titulo: minha ? "Alteração em atividade sua" : "Alteração em atividade que você criou",
        texto: `${a.titulo}: ${l.campo} ${l.de && l.de !== "—" ? l.de + " → " : "→ "}${l.valor} · ${nomeCurto(l.por)}`,
        key: a.key,
        view: "atividades",
        ts: l.ts
      });
    });
    if (minha && !concluido(a.status) && a.e === TODAY) push({
      id: "hoje:" + a.key + ":" + a.e,
      icon: "alarm-clock",
      titulo: "Vence hoje",
      texto: a.titulo + " · " + a.grupo,
      key: a.key,
      view: "atividades",
      ts: ts0(a.e)
    });
    if (minha && a.atrasada) push({
      id: "atr:" + a.key + ":" + a.e,
      icon: "alert-triangle",
      titulo: "Atividade atrasada",
      texto: `${a.titulo} · prazo era ${fmtY(a.e)}`,
      key: a.key,
      view: "atividades",
      ts: ts0(addDays(a.e, 1)),
      destaque: true
    });
    if (a.aprov === "Aguardando" && APROVADORES.includes(me) && !(r.aprovacao.votos || {})[me]) push({
      id: "apr:" + a.key + ":" + r.aprovacao.ts,
      icon: "shield-check",
      titulo: "Aguardando sua aprovação",
      texto: a.titulo + " · enviada por " + nomeCurto(r.aprovacao.enviadoPor),
      key: a.key,
      view: "painel",
      ts: r.aprovacao.ts || 0,
      destaque: true
    });
    if ((minha || criei) && (a.aprov === "Aprovado" || a.aprov === "Reprovado")) push({
      id: "aprres:" + a.key + ":" + a.aprov + ":" + r.aprovacao.ts,
      icon: a.aprov === "Aprovado" ? "check-circle-2" : "x-circle",
      titulo: `Atividade ${a.aprov.toLowerCase()}`,
      texto: a.titulo,
      key: a.key,
      view: "atividades",
      ts: r.aprovacao.ts || 0
    });
    if (r.recusada && criei) push({
      id: "rec:" + a.key + ":" + (r.recusadaTs || 0),
      icon: "x-circle",
      titulo: "Atividade recusada",
      texto: `${a.titulo} · ${nomeCurto(a.resp)}${r.motivoRecusa ? ": " + r.motivoRecusa : ""}`,
      key: a.key,
      view: "atividades",
      ts: r.recusadaTs || 0,
      destaque: true
    });
  });
  (chamados || []).forEach(c => {
    const meu = c.gestorResp === me;
    if (c.status === "Novo" && (podeAtender || meu)) push({
      id: "cham:" + c.id,
      icon: "headset",
      titulo: meu ? "Novo chamado para você" : "Novo chamado",
      texto: `${c.id} · ${c.assunto} (${c.area || "—"})`,
      view: "atendimentos",
      chamadoId: c.id,
      ts: c.criadoTs || 0,
      destaque: true
    });
    (c.log || []).forEach(l => {
      if (!l.por || l.por === me) return;
      if (l.k === "gestorResp" && l.valor === me) push({
        id: "chdir:" + c.id + ":" + l.ts,
        icon: "headset",
        titulo: "Chamado direcionado a você",
        texto: `${c.id} · ${c.assunto} · por ${nomeCurto(l.por)}`,
        view: "atendimentos",
        chamadoId: c.id,
        ts: l.ts,
        destaque: true
      });else if (meu && l.k !== "gestorResp") push({
        id: "chupd:" + c.id + ":" + l.k + ":" + l.ts,
        icon: "pencil",
        titulo: "Alteração em chamado seu",
        texto: `${c.id}: ${l.campo} → ${l.valor} · ${nomeCurto(l.por)}`,
        view: "atendimentos",
        chamadoId: c.id,
        ts: l.ts
      });
    });
    if (meu && c.npsScore != null) push({
      id: "nps:" + c.id,
      icon: "star",
      titulo: "Avaliação recebida",
      texto: `${c.id} · nota ${c.npsScore}${c.npsComentario ? ": " + c.npsComentario : ""}`,
      view: "atendimentos",
      chamadoId: c.id,
      ts: c.npsTs || c.criadoTs || 0
    });
  });
  (inis || []).forEach(i => {
    (i.log || []).forEach(l => {
      if (l.por && l.por !== me && l.k === "resp" && l.valor === me) push({
        id: "iniupd:" + i.id + ":" + l.k + ":" + l.ts,
        icon: "folder-kanban",
        titulo: l.k === "resp" ? "Iniciativa direcionada a você" : "Alteração em iniciativa sua",
        texto: `${i.nome}: ${l.campo} → ${l.valor} · ${nomeCurto(l.por)}`,
        view: "iniciativas",
        ts: l.ts
      });
    });
  });
  (ausencias || []).forEach(a => {
    if (a.substituto === me && a.criadoPor !== me && a.ate >= TODAY) push({
      id: "sub:" + a.id,
      icon: "user-check",
      titulo: "Você cobre os atendimentos",
      texto: `${nomeCurto(a.nome)} · ${(a.tipo || "ausência").toLowerCase()} de ${fmtY(a.de)} a ${fmtY(a.ate)}`,
      view: "atendimentos",
      ts: a.criadoTs || ts0(a.de)
    });
  });
  const vistos = new Set();
  return out.filter(n => vistos.has(n.id) ? false : vistos.add(n.id)).sort((x, y) => (y.ts || 0) - (x.ts || 0));
}
function Icon({
  name,
  size = 16,
  color,
  style
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color: color || "currentColor",
      ...style
    }
  });
}
function Chip({
  children,
  color = "var(--slate)",
  bg = "var(--canvas)",
  icon
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: 10.5,
      fontWeight: 700,
      color,
      background: bg,
      padding: "2px 8px",
      borderRadius: 20,
      whiteSpace: "nowrap",
      fontFamily: "var(--font-sans)"
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 11
  }), children);
}
function NatChip({
  nat
}) {
  const {
    NatureBadge
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  if (nat === "Atendimento") return /*#__PURE__*/React.createElement(Chip, {
    color: "var(--blue-dark)",
    bg: "var(--soft-blue)",
    icon: "headset"
  }, "Atendimento");
  return /*#__PURE__*/React.createElement(NatureBadge, {
    nature: nat
  });
}
function AprovChip({
  status
}) {
  if (!status) return null;
  const m = {
    "Pendente envio": ["var(--slate)", "var(--canvas)", "shield"],
    Aguardando: ["var(--orange)", "var(--soft-orange)", "clock"],
    Aprovado: ["var(--success)", "var(--success-bg)", "shield-check"],
    Reprovado: ["var(--danger)", "var(--danger-bg)", "shield-x"]
  }[status];
  return /*#__PURE__*/React.createElement(Chip, {
    color: m[0],
    bg: m[1],
    icon: m[2]
  }, status === "Aguardando" ? "Aguardando aprovação" : status === "Pendente envio" ? "Precisa aprovação" : status);
}
function HistoricoLista({
  log
}) {
  if (!log || !log.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)",
      fontSize: 12.5
    }
  }, "Nenhuma altera\xE7\xE3o registrada ainda.");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, log.slice().reverse().map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "112px 1fr",
      gap: 10,
      fontSize: 12.5,
      padding: "7px 0",
      borderBottom: "1px solid var(--canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)",
      fontSize: 11
    }
  }, h.quando), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, h.campo), h.de !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)"
    }
  }, " ", h.de, " \u2192"), " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--blue-dark)"
    }
  }, h.valor), h.por && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--slate)"
    }
  }, "por ", nomeCurto(h.por))))));
}
function HistoricoModal({
  titulo,
  log,
  onClose
}) {
  const {
    Modal,
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Histórico — " + titulo,
    sub: "Quem alterou, o qu\xEA e quando.",
    onClose: onClose,
    width: 460
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: "55vh",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement(HistoricoLista, {
    log: log
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose,
    style: {
      width: "100%",
      justifyContent: "center",
      marginTop: 12
    }
  }, "Fechar"));
}
const secTitle = {
  fontSize: 11,
  fontWeight: 800,
  color: "var(--slate)",
  textTransform: "uppercase",
  letterSpacing: ".4px",
  margin: "18px 0 8px"
};
const inputBase = {
  width: "100%",
  boxSizing: "border-box",
  padding: "8px 10px",
  border: "1px solid var(--line)",
  borderRadius: 8,
  fontSize: 13,
  fontFamily: "var(--font-sans)",
  background: "#fff",
  color: "var(--ink)"
};
function AprovacaoBloco({
  r,
  user,
  onPatch
}) {
  const {
    Button
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const me = user.nome;
  const st = aprovStatus(r);
  const [print, setPrint] = React.useState("");
  const [coment, setComent] = React.useState("");
  const votos = r.aprovacao && r.aprovacao.votos || {};
  if (!r.precisaAprovacao) return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: false,
    onChange: () => onPatch({
      precisaAprovacao: true
    })
  }), " Esta atividade precisa de aprova\xE7\xE3o");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(AprovChip, {
    status: st
  }), r.aprovacao && r.aprovacao.enviadoEm && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--muted)"
    }
  }, "enviada por ", nomeCurto(r.aprovacao.enviadoPor), " em ", r.aprovacao.enviadoEm), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8
    }
  }, (st === "Pendente envio" || st === "Reprovado") && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 14
    }),
    onClick: () => onPatch({
      aprovacao: enviarAprovacao(me)
    })
  }, st === "Reprovado" ? "Reenviar para aprovação" : "Enviar para aprovação"), st === "Pendente envio" && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onPatch({
      precisaAprovacao: false,
      aprovacao: null
    })
  }, "N\xE3o precisa"))), st !== "Pendente envio" && APROVADORES.map(n => {
    const v = votos[n];
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        background: "var(--canvas)",
        borderRadius: 8,
        padding: "10px 12px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        minWidth: 130
      }
    }, nomeCurto(n)), v ? v.ok ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--success)",
        fontWeight: 700
      }
    }, "\u2713 Aprovado em ", v.quando, v.por !== n ? ` · registrado por ${nomeCurto(v.por)}` : "") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--danger)",
        fontWeight: 700
      }
    }, "\u2715 Reprovado em ", v.quando, v.comentario ? ` — ${v.comentario}` : "") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--orange)",
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 13
    }), " Aguardando"), v && v.print && /*#__PURE__*/React.createElement("a", {
      href: v.print,
      target: "_blank",
      rel: "noreferrer",
      style: {
        color: "var(--blue-light)",
        fontWeight: 700
      }
    }, "ver print"), st === "Aguardando" && !v && me === n && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginLeft: "auto",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("input", {
      style: {
        ...inputBase,
        width: 170,
        padding: "6px 9px"
      },
      placeholder: "Coment\xE1rio (se reprovar)",
      value: coment,
      onChange: e => setComent(e.target.value)
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onPatch({
        aprovacao: votar(r, n, false, me, "", coment)
      })
    }, "Reprovar"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onPatch({
        aprovacao: votar(r, n, true, me)
      })
    }, "Aprovar")), st === "Aguardando" && !v && me === MICHELE && n === JULIANA && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginLeft: "auto",
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("input", {
      style: {
        ...inputBase,
        width: 210,
        padding: "6px 9px"
      },
      placeholder: "Link do print da aprova\xE7\xE3o",
      value: print,
      onChange: e => setPrint(e.target.value)
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "dark",
      disabled: !print,
      style: {
        opacity: print ? 1 : .5
      },
      onClick: () => print && onPatch({
        aprovacao: votar(r, JULIANA, true, me, print)
      })
    }, "Registrar aprova\xE7\xE3o da Juliana")));
  }));
}
function CategoriaPicker({
  value,
  onChange,
  compact
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
      gap: 8
    }
  }, CATEGORIAS.map(c => {
    const on = value === c.v;
    return /*#__PURE__*/React.createElement("button", {
      key: c.v,
      type: "button",
      onClick: () => onChange(c.v),
      title: "Exemplos: " + c.ex,
      style: {
        textAlign: "left",
        padding: compact ? "8px 10px" : "10px 12px",
        borderRadius: 9,
        border: `2px solid ${on ? "var(--blue-dark)" : "var(--line)"}`,
        background: on ? "var(--soft-blue)" : "#fff",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        color: "var(--ink)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 6,
        background: on ? "var(--blue-dark)" : "var(--canvas)",
        color: on ? "#fff" : "var(--blue-dark)",
        fontWeight: 800,
        fontSize: 12,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, c.v), /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 13
      }
    }, c.nome)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--slate)",
        marginTop: 5,
        lineHeight: 1.4
      }
    }, c.def), !compact && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: "var(--muted)",
        marginTop: 4,
        lineHeight: 1.35
      }
    }, /*#__PURE__*/React.createElement("i", null, "Ex.: ", c.ex)));
  }));
}
function F({
  label,
  children,
  span
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: span ? "1 / -1" : "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--slate)",
      marginBottom: 4
    }
  }, label), children);
}
function AtividadeDetalheModal({
  a,
  users,
  user,
  ausencias,
  onPatch,
  onClose,
  onDelete
}) {
  const {
    Modal,
    Button,
    StatusBadge
  } = window.PortalCIGABComRcioDesignSystem_6ad0f7;
  const r = a.raw;
  const me = user.nome;
  const [motivo, setMotivo] = React.useState("");
  const [recusando, setRecusando] = React.useState(false);
  const mudarResp = nome => confirmaResp(ausencias, nome, a.s, a.e) && onPatch(nome && nome !== me ? {
    resp: nome,
    nova: true,
    aceita: false,
    recusada: false,
    criadoPor: me,
    criadoTs: Date.now()
  } : {
    resp: nome,
    nova: false,
    aceita: true,
    recusada: false
  });
  return /*#__PURE__*/React.createElement(Modal, {
    title: a.titulo || "Atividade",
    sub: [a.grupo, a.sub].filter(Boolean).join(" · "),
    onClose: onClose,
    width: 640
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(NatChip, {
    nat: a.nat
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    status: a.statusView
  }), /*#__PURE__*/React.createElement(AprovChip, {
    status: a.aprov
  }), a.depAguardando && /*#__PURE__*/React.createElement(Chip, {
    color: "var(--warning)",
    bg: "var(--soft-orange)",
    icon: "link"
  }, "Depende de: ", a.depAguardando.titulo), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: 10.5,
      color: "var(--muted)",
      fontFamily: "monospace"
    }
  }, a.id)), a.pendenteAceite && a.resp === me && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--soft-orange)",
      borderRadius: 10,
      padding: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 14
  }), " ", r.criadoPor ? nomeCurto(r.criadoPor) + " direcionou" : "Direcionaram", " esta atividade para voc\xEA."), !recusando ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }),
    onClick: () => onPatch({
      aceita: true,
      nova: false
    })
  }, "Aceitar"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setRecusando(true)
  }, "Recusar")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      ...inputBase,
      flex: "1 1 220px"
    },
    placeholder: "Motivo da recusa (ex.: sem agenda nessa data)",
    value: motivo,
    onChange: e => setMotivo(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: () => onPatch({
      recusada: true,
      motivoRecusa: motivo,
      recusadaTs: Date.now()
    })
  }, "Confirmar recusa"))), r.recusada && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--danger-bg)",
      color: "var(--danger)",
      borderRadius: 10,
      padding: 12,
      marginBottom: 14,
      fontSize: 12.5,
      fontWeight: 600
    }
  }, "Recusada por ", nomeCurto(a.resp), r.motivoRecusa ? ` — "${r.motivoRecusa}"` : "", ". Redirecione para outra pessoa ou ajuste a data."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(F, {
    label: "Atividade",
    span: true
  }, /*#__PURE__*/React.createElement("input", {
    style: inputBase,
    value: a.titulo || "",
    onChange: e => onPatch(a.kind === "lan" ? {
      titulo: e.target.value
    } : {
      nome: e.target.value
    })
  })), /*#__PURE__*/React.createElement(F, {
    label: "Respons\xE1vel"
  }, /*#__PURE__*/React.createElement("select", {
    style: inputBase,
    value: a.resp || "",
    onChange: e => mudarResp(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecione..."), users.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.nome
  }, rotuloResp(u, ausencias, a.s, a.e)))), ausenteEm(ausencias, a.resp, a.s, a.e) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--danger)",
      fontWeight: 700,
      marginTop: 4
    }
  }, "\u26A0 Respons\xE1vel ausente neste per\xEDodo")), /*#__PURE__*/React.createElement(F, {
    label: "Status"
  }, /*#__PURE__*/React.createElement("select", {
    style: inputBase,
    value: a.status,
    onChange: e => onPatch({
      status: e.target.value
    })
  }, STATUS_ATV.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement(F, {
    label: "In\xEDcio"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: inputBase,
    value: a.kind === "lan" ? r.pedido || "" : r.s || "",
    onChange: e => onPatch(a.kind === "lan" ? {
      pedido: e.target.value
    } : {
      s: e.target.value,
      e: !r.e || r.e < e.target.value ? e.target.value : r.e
    })
  })), /*#__PURE__*/React.createElement(F, {
    label: "Fim"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: inputBase,
    value: a.kind === "lan" ? r.prazo || "" : r.e || "",
    onChange: e => onPatch(a.kind === "lan" ? {
      prazo: e.target.value
    } : {
      e: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: secTitle
  }, "Categoria"), /*#__PURE__*/React.createElement(CategoriaPicker, {
    value: a.cx,
    onChange: v => onPatch({
      cx: v
    }),
    compact: true
  }), /*#__PURE__*/React.createElement("div", {
    style: secTitle
  }, "Aprova\xE7\xE3o"), /*#__PURE__*/React.createElement(AprovacaoBloco, {
    r: r,
    user: user,
    onPatch: onPatch
  }), /*#__PURE__*/React.createElement("div", {
    style: secTitle
  }, "Hist\xF3rico"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 200,
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement(HistoricoLista, {
    log: r.log
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose,
    style: {
      flex: 1,
      justifyContent: "center"
    }
  }, "Fechar"), onDelete && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: "var(--danger)"
    },
    onClick: () => {
      if (confirm("Excluir esta atividade?")) {
        onDelete();
        onClose();
      }
    }
  }, "Excluir")));
}
function exportCSV(filename, headers, rows) {
  const esc = v => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const lines = [headers.map(esc).join(";"), ...rows.map(r => r.map(esc).join(";"))];
  const blob = new Blob(["\uFEFF" + lines.join("\r\n")], {
    type: "text/csv;charset=utf-8;"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
function parseCSV(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter(l => l.trim());
  const sep = (lines[0] || "").includes(";") ? ";" : ",";
  const split = l => {
    const out = [];
    let cur = "",
      q = false;
    for (const ch of l) {
      if (ch === '"') q = !q;else if (ch === sep && !q) {
        out.push(cur);
        cur = "";
      } else cur += ch;
    }
    out.push(cur);
    return out.map(s => s.trim());
  };
  return lines.slice(1).map(split);
}

/* ===== Dados de exemplo (carregáveis pelo Administrador; o sistema inicia zerado) ===== */
const rel = n => addDays(TODAY, n);
const ETAPAS_PADRAO = ["Pauta", "Gravação", "Edição", "Publicação", "Divulgação em canais"];
function gerarExemplo() {
  const mes = n => {
    const d = D(TODAY);
    d.setMonth(d.getMonth() + n);
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}`;
  };
  return {
    inis: [{
      id: "IN01",
      nome: "Podcast Nosso Legado",
      natureza: "Produto",
      origem: "Própria",
      area: "",
      resp: ANDRE,
      status: "Ativo"
    }, {
      id: "IN02",
      nome: "Revista Na Direção",
      natureza: "Produto",
      origem: "Própria",
      area: "",
      resp: SARAH,
      status: "Ativo"
    }, {
      id: "IN03",
      nome: "Ação 3x",
      natureza: "Produto",
      origem: "Própria",
      area: "",
      resp: SARAH,
      status: "Ativo"
    }, {
      id: "IN04",
      nome: "GAB 80 anos",
      natureza: "Projeto",
      origem: "Própria",
      area: "",
      resp: MICHELE,
      status: "Em andamento",
      ini: rel(-50),
      fim: rel(25)
    }, {
      id: "IN05",
      nome: "Educa+ Finanças",
      natureza: "Projeto",
      origem: "Outra área",
      area: "DHO · Pessoas e Cultura",
      resp: ANDRE,
      status: "Em andamento",
      ini: rel(-10),
      fim: rel(30)
    }, {
      id: "IN06",
      nome: "Atualização de grupos de e-mail",
      natureza: "Processo",
      origem: "Própria",
      area: "",
      resp: SARAH,
      status: "Ativo"
    }],
    tarefas: [{
      id: "T1",
      ini: "IN04",
      nome: "Briefing criativo",
      resp: SARAH,
      s: rel(-45),
      e: rel(-38),
      status: "Concluído",
      cx: "M"
    }, {
      id: "T2",
      ini: "IN04",
      nome: "Vídeo institucional",
      resp: ANDRE,
      s: rel(-20),
      e: rel(-2),
      status: "Em andamento",
      cx: "G",
      dependeDe: "T1"
    }, {
      id: "T3",
      ini: "IN04",
      nome: "Contratar coffee break",
      resp: SARAH,
      s: rel(1),
      e: rel(3),
      status: "Não iniciado",
      cx: "P",
      nova: true,
      aceita: false,
      criadoPor: MICHELE,
      criadoTs: Date.now() - 3600000
    }, {
      id: "T4",
      ini: "IN04",
      nome: "Roteiro do evento",
      resp: MICHELE,
      s: rel(5),
      e: rel(12),
      status: "Não iniciado",
      cx: "G",
      dependeDe: "T2"
    }, {
      id: "T5",
      ini: "IN05",
      nome: "Trilha de conteúdo",
      resp: ANDRE,
      s: rel(-5),
      e: rel(8),
      status: "Em andamento",
      cx: "M"
    }],
    ciclos: [{
      id: "CI01",
      ini: "IN01",
      ciclo: "24º/2026",
      etapas: [{
        id: "E1",
        nome: "Pauta",
        resp: SARAH,
        s: rel(-6),
        e: rel(-4),
        status: "Concluído",
        cx: "G"
      }, {
        id: "E2",
        nome: "Gravação",
        resp: ANDRE,
        s: rel(0),
        e: rel(0),
        status: "Em andamento",
        dependeDe: "E1",
        cx: "M"
      }, {
        id: "E3",
        nome: "Edição",
        resp: ANDRE,
        s: rel(1),
        e: rel(4),
        status: "Não iniciado",
        dependeDe: "E2",
        precisaAprovacao: true,
        aprovacao: {
          status: "Aguardando",
          enviadoPor: ANDRE,
          enviadoEm: agora(),
          ts: Date.now() - 7200000,
          votos: {}
        }
      }, {
        id: "E4",
        nome: "Publicação",
        resp: ANDRE,
        s: rel(6),
        e: rel(6),
        status: "Não iniciado",
        dependeDe: "E3"
      }]
    }, {
      id: "CI02",
      ini: "IN06",
      ciclo: mes(0),
      etapas: [{
        id: "E5",
        nome: "Aguardar relatório de ativos",
        resp: SARAH,
        s: rel(-2),
        e: rel(1),
        status: "Aguardando terceiro",
        cx: "P"
      }, {
        id: "E6",
        nome: "Atualizar grupos das diretorias",
        resp: SARAH,
        s: rel(2),
        e: rel(3),
        status: "Não iniciado",
        dependeDe: "E5",
        cx: "P"
      }]
    }],
    chamados: [{
      id: "AT0001",
      token: novoToken(),
      area: "Vitória Motors",
      tipo: "Vídeo",
      urgencia: "Alta",
      prazo: "",
      assunto: "Gravação de vídeo — Ação 3x",
      descricao: "Precisamos gravar um vídeo curto com a equipe de vendas para a próxima edição da Ação 3x.",
      whatsapp: "(27) 99999-1111",
      solicitante: "Marina Alves",
      gestorResp: MICHELE,
      status: "Novo",
      criadoTs: Date.now() - 1800000,
      criadoEm: agora(),
      atividades: []
    }, {
      id: "AT0002",
      token: novoToken(),
      area: "R&S",
      tipo: "Comunicação",
      urgencia: "Média",
      prazo: rel(5),
      assunto: "Comunicado do Programa Trainee",
      descricao: "Divulgar internamente a abertura do Programa Trainee 2026.",
      whatsapp: "(27) 99999-2222",
      solicitante: "Laura Thayrine",
      gestorResp: MICHELE,
      status: "Em atendimento",
      criadoTs: Date.now() - 86400000 * 3,
      criadoEm: fmtY(rel(-3)),
      atividades: [{
        id: "ATV1",
        nome: "Redigir comunicado",
        resp: SARAH,
        s: rel(-2),
        e: rel(-1),
        status: "Concluído",
        aceita: true,
        cx: "P"
      }, {
        id: "ATV2",
        nome: "Diagramar arte de divulgação",
        resp: ANDRE,
        s: rel(0),
        e: rel(2),
        status: "Em andamento",
        aceita: true,
        cx: "M"
      }]
    }],
    marcos: [{
      id: "M1",
      data: rel(4),
      titulo: "Aniversário do Diretor Comercial",
      tipo: "Aniversário"
    }, {
      id: "M2",
      data: rel(9),
      ate: rel(10),
      titulo: "Convenção de vendas (sem gravações)",
      tipo: "Evento"
    }],
    ausencias: [],
    canais: {
      podcast: {
        mensal: [{
          mes: mes(-2),
          inscritos: 180,
          views: 13900,
          tempoMedio: "10min10s"
        }, {
          mes: mes(-1),
          inscritos: 197,
          views: 15200,
          tempoMedio: "10min34s"
        }],
        episodios: [{
          ep: 204,
          entrevistado: "Layana Zacche",
          pub: rel(-30),
          views: 17300,
          viewsPlat: 900,
          imp: 12000
        }, {
          ep: 205,
          entrevistado: "Bruno Guedes",
          pub: rel(-12),
          views: 2400,
          viewsPlat: 310,
          imp: 8500
        }]
      },
      revista: {
        edicoes: [{
          edicao: "Ed. 42",
          pub: rel(-40),
          acessos: 3200
        }, {
          edicao: "Ed. 43",
          pub: rel(-8),
          acessos: 2100
        }]
      },
      instagram: {
        mensal: [{
          mes: mes(-2),
          seguidores: 77800,
          alcance: 25100,
          impressoes: 61000,
          engajamento: 5.1
        }, {
          mes: mes(-1),
          seguidores: 78500,
          alcance: 27900,
          impressoes: 64000,
          engajamento: 5.4
        }]
      },
      linkedin: {
        mensal: [{
          mes: mes(-2),
          seguidores: 66100,
          visitantes: 16400,
          engajamento: 6.0
        }, {
          mes: mes(-1),
          seguidores: 67500,
          visitantes: 17700,
          engajamento: 6.3
        }]
      }
    }
  };
}
const CANAIS_VAZIO = {
  podcast: {
    mensal: [],
    episodios: []
  },
  revista: {
    edicoes: []
  },
  instagram: {
    mensal: []
  },
  linkedin: {
    mensal: []
  }
};
window.PortalUI = {
  novoToken,
  TODAY,
  AREAS,
  CATEGORIAS,
  catLabel,
  NAT_LABEL,
  STATUS_ATV,
  URGENCIAS,
  URG_COLOR,
  STATUS_CHAMADO,
  TIPOS_ATENDIMENTO,
  TIPOS_MARCO,
  concluido,
  D,
  fmt,
  fmtY,
  fmtPeriodo,
  daysBetween,
  addDays,
  mondayOf,
  inRange,
  overlaps,
  uid,
  agora,
  nomeCurto,
  monthGrid,
  exportCSV,
  parseCSV,
  ETAPAS_PADRAO,
  gerarSenha,
  USERS0,
  MICHELE,
  JULIANA,
  SARAH,
  ANDRE,
  APROVADORES,
  APROVADOR1,
  APROVADOR2,
  GESTORA_ATENDIMENTO,
  aplicarPatch,
  aprovStatus,
  enviarAprovacao,
  votar,
  todasAtividades,
  respAtendimento,
  ausenciaAtiva,
  TIPOS_AUSENCIA,
  ausenteEm,
  rotuloResp,
  confirmaResp,
  nextChamadoId,
  nextIniId,
  FORMATOS,
  linkChamado,
  waLink,
  gerarNotificacoes,
  gerarExemplo,
  CANAIS_VAZIO,
  Icon,
  Chip,
  NatChip,
  AprovChip,
  HistoricoLista,
  HistoricoModal,
  AprovacaoBloco,
  AtividadeDetalheModal,
  CategoriaPicker,
  F,
  inputBase,
  secTitle
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/supabaseClient.js
try { (() => {
// Cliente Supabase do Portal CI. Preencha SUPABASE_URL e SUPABASE_ANON_KEY
// (Settings > API no dashboard) e inclua este script + o CDN do supabase-js no index.html:
// <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
// <script src="supabaseClient.js"></script>

const SUPABASE_URL = "https://bbwdzlnbibhydkdjdpsc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_xLIsSXnYt7r-FqAVFrf7Sg_j4YkXZeg";
window.sb = SUPABASE_URL && SUPABASE_ANON_KEY ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
if (!window.sb) console.warn("Supabase não configurado — preencha SUPABASE_URL e SUPABASE_ANON_KEY em supabaseClient.js");
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/supabaseClient.js", error: String((e && e.message) || e) }); }

// ui_kits/portal-ci/supabaseSync.js
try { (() => {
// Leitura/escrita/tempo real com Supabase para o Portal CI.
// Sem window.sb (ver supabaseClient.js) tudo vira no-op e o app roda só no navegador.

const has = () => !!window.sb;
const j = v => v === "" || v === undefined ? null : v;

// ---- status para a UI (App.jsx escuta "portal-sync") ----
let pend = 0,
  lastWrite = 0;
const emit = detail => window.dispatchEvent(new CustomEvent("portal-sync", {
  detail
}));
const ERROS = {
  "23505": "ID já usado por outra pessoa — recarregue a página",
  "23503": "registro ligado a outro que não existe mais",
  "42501": "sem permissão para esta ação"
};
const msgErro = e => ERROS[e && e.code] || e && e.message || String(e);

// Todas as gravações passam por uma fila única, na ordem em que foram pedidas
// (ex.: a iniciativa é gravada antes das atividades dela).
let fila = Promise.resolve();
function enfileirar(fn) {
  pend++;
  lastWrite = Date.now();
  emit({
    state: "saving"
  });
  const p = fila.then(fn);
  fila = p.catch(() => {}).then(() => {
    lastWrite = Date.now();
    if (! --pend) emit({
      state: "saved"
    });
  });
  return p;
}
async function exec(q, ctx) {
  try {
    const r = await q;
    if (r && r.error) {
      console.error("[Supabase]", ctx, r.error);
      emit({
        state: "error",
        msg: ctx + ": " + msgErro(r.error)
      });
    }
    return r;
  } catch (e) {
    console.error("[Supabase]", ctx, e);
    emit({
      state: "error",
      msg: ctx + ": " + msgErro(e)
    });
    return {
      error: e
    };
  }
}

// ---- mapeamentos ----
const mapOutIniciativa = i => ({
  dados: i,
  id: i.id,
  nome: i.nome,
  natureza: i.natureza,
  origem: j(i.origem),
  area: j(i.area),
  resp: j(i.resp),
  cx: j(i.cx),
  status: j(i.status),
  objetivo: j(i.objetivo),
  ini: j(i.ini),
  fim: j(i.fim)
});
const mapInIniciativa = r => ({
  id: r.id,
  nome: r.nome,
  natureza: r.natureza,
  origem: r.origem,
  area: r.area,
  resp: r.resp,
  cx: r.cx,
  status: r.status,
  objetivo: r.objetivo,
  ini: r.ini,
  fim: r.fim,
  ...(r.dados || {})
});
const mapOutTarefa = t => ({
  dados: t,
  id: t.id,
  iniciativa_id: j(t.ini),
  wbs: j(t.wbs),
  nome: t.nome || "Sem nome",
  resp: j(t.resp),
  cx: j(t.cx),
  s: j(t.s),
  e: j(t.e),
  pct: Number(t.pct) || 0,
  status: j(t.status),
  nivel: Number(t.nivel) || 0,
  dependencia: j(t.dependencia),
  precisa_aprovacao: !!t.precisaAprovacao,
  aprovador1: j(t.aprovador1),
  aprovador2: j(t.aprovador2),
  aprovado1: !!t.aprovado1,
  aprovado2: !!t.aprovado2,
  print_aprovacao: j(t.printAprovacao)
});
const mapInTarefa = r => ({
  id: r.id,
  ini: r.iniciativa_id,
  wbs: r.wbs,
  nome: r.nome,
  resp: r.resp,
  cx: r.cx,
  s: r.s,
  e: r.e,
  pct: r.pct,
  status: r.status,
  nivel: r.nivel,
  dependencia: r.dependencia,
  precisaAprovacao: r.precisa_aprovacao,
  aprovador1: r.aprovador1,
  aprovador2: r.aprovador2,
  aprovado1: r.aprovado1,
  aprovado2: r.aprovado2,
  printAprovacao: r.print_aprovacao,
  ...(r.dados || {})
});
const mapOutLanc = l => ({
  dados: l,
  id: l.id,
  iniciativa_id: j(l.ini),
  titulo: l.titulo || "Sem título",
  resp: j(l.resp),
  cx: j(l.cx),
  vol: Number(l.vol) || 1,
  data_pub: j(l.dataPub),
  pedido: j(l.pedido),
  prazo: j(l.prazo),
  entrega: j(l.entrega),
  status: j(l.status)
});
const mapInLanc = r => ({
  id: r.id,
  ini: r.iniciativa_id,
  titulo: r.titulo,
  resp: r.resp,
  cx: r.cx,
  vol: r.vol,
  dataPub: r.data_pub,
  pedido: r.pedido,
  prazo: r.prazo,
  entrega: r.entrega,
  status: r.status,
  ...(r.dados || {})
});
const semFilhos = (o, k) => {
  const c = {
    ...o
  };
  delete c[k];
  return c;
};
const mapOutCiclo = c => ({
  id: c.id,
  iniciativa_id: j(c.ini),
  ciclo: c.ciclo || "Ciclo",
  dados: semFilhos(c, "etapas")
});
const mapOutEtapa = e => ({
  id: e.id,
  ciclo_id: e._pai,
  nome: e.nome || "Sem nome",
  resp: j(e.resp),
  s: j(e.s),
  e: j(e.e),
  status: j(e.status),
  dados: semFilhos(e, "_pai")
});
const mapOutChamado = c => ({
  id: c.id,
  token: j(c.token),
  area: j(c.area),
  tipo: j(c.tipo),
  data_prevista: j(c.dataPrevista),
  assunto: c.assunto || "Sem assunto",
  descricao: j(c.descricao),
  whatsapp: j(c.whatsapp),
  solicitante: j(c.solicitante),
  gestor_resp: j(c.gestorResp),
  status: j(c.status),
  nps_score: c.npsScore ?? null,
  dados: semFilhos(c, "atividades")
});
const mapOutChamAtiv = a => ({
  id: a.id,
  chamado_id: a._pai,
  nome: a.nome || "Sem nome",
  resp: j(a.resp),
  status: j(a.status),
  nova: !!a.nova,
  aceita: !!a.aceita,
  precisa_aprovacao: !!a.precisaAprovacao,
  aprovador1: j(a.aprovador1),
  aprovador2: j(a.aprovador2),
  aprovado: !!a.aprovado,
  dados: semFilhos(a, "_pai")
});
const filhos = (pais, k) => pais.flatMap(p => (p[k] || []).map(x => ({
  ...x,
  _pai: p.id
})));
function unflattenCiclos(ciclosRows, etapasRows) {
  return ciclosRows.map(c => ({
    ...(c.dados || {}),
    id: c.id,
    ini: c.iniciativa_id,
    ciclo: c.ciclo,
    etapas: etapasRows.filter(e => e.ciclo_id === c.id).map(e => ({
      id: e.id,
      nome: e.nome,
      resp: e.resp,
      s: e.s,
      e: e.e,
      status: e.status,
      ...(e.dados || {})
    }))
  }));
}
function unflattenChamados(chamadosRows, ativRows) {
  return chamadosRows.map(c => ({
    id: c.id,
    token: c.token,
    area: c.area,
    tipo: c.tipo,
    dataPrevista: c.data_prevista,
    assunto: c.assunto,
    descricao: c.descricao,
    whatsapp: c.whatsapp,
    solicitante: c.solicitante,
    gestorResp: c.gestor_resp,
    status: c.status,
    ...(c.dados || {}),
    npsScore: c.nps_score,
    atividades: ativRows.filter(a => a.chamado_id === c.id).map(a => ({
      id: a.id,
      nome: a.nome,
      resp: a.resp,
      status: a.status,
      nova: a.nova,
      aceita: a.aceita,
      precisaAprovacao: a.precisa_aprovacao,
      aprovador1: a.aprovador1,
      aprovador2: a.aprovador2,
      aprovado: a.aprovado,
      ...(a.dados || {})
    }))
  }));
}

// ---- leitura ----
async function loadAll() {
  if (!has()) return null;
  const nomes = ["iniciativas", "atividades", "lancamentos", "ciclos", "ciclo_etapas", "chamados", "chamado_atividades", "app_config"];
  const rs = await Promise.all(nomes.map(t => window.sb.from(t).select("*")));
  const falha = rs.find(r => r.error);
  if (falha) {
    console.error("[Supabase] leitura", falha.error);
    emit({
      state: "error",
      msg: "Leitura: " + msgErro(falha.error)
    });
    return null;
  }
  const [inis, tarefas, lanc, ciclosR, etapasR, chamadosR, ativR, cfgR] = rs.map(r => r.data || []);
  return {
    inis: inis.map(mapInIniciativa),
    tarefas: tarefas.map(mapInTarefa),
    lanc: lanc.map(mapInLanc),
    ciclos: unflattenCiclos(ciclosR, etapasR),
    chamados: unflattenChamados(chamadosR, ativR),
    ...Object.fromEntries(cfgR.map(r => [r.chave, r.valor]))
  };
}

// ---- escrita: só o que mudou; novos = insert (não sobrescreve registro de outra pessoa) ----
function diff(prev, cur) {
  const pm = new Map((prev || []).map(x => [x.id, JSON.stringify(x)]));
  const cm = new Set(cur.map(x => x.id));
  return {
    removidos: [...pm.keys()].filter(id => !cm.has(id)),
    novos: cur.filter(x => !pm.has(x.id)),
    alterados: cur.filter(x => pm.has(x.id) && pm.get(x.id) !== JSON.stringify(x))
  };
}
async function gravar(table, d, mapOut, rotulo) {
  if (d.novos.length) await exec(window.sb.from(table).insert(d.novos.map(mapOut)), "Criar " + rotulo);
  if (d.alterados.length) await exec(window.sb.from(table).upsert(d.alterados.map(mapOut)), "Salvar " + rotulo);
}
const apagar = (table, ids, rotulo) => ids.length ? exec(window.sb.from(table).delete().in("id", ids), "Excluir " + rotulo) : null;
const saveSimples = (table, mapOut, rotulo) => (prev, cur) => {
  if (!has()) return;
  const d = diff(prev, cur);
  if (!d.removidos.length && !d.novos.length && !d.alterados.length) return;
  return enfileirar(async () => {
    await apagar(table, d.removidos, rotulo);
    await gravar(table, d, mapOut, rotulo);
  });
};
const saveComFilhos = (tPai, tFilho, kFilhos, mapPai, mapFilho, rPai, rFilho) => (prev, cur) => {
  if (!has()) return;
  const dp = diff((prev || []).map(x => semFilhos(x, kFilhos)), cur.map(x => semFilhos(x, kFilhos)));
  const df = diff(filhos(prev || [], kFilhos), filhos(cur, kFilhos));
  if (![dp, df].some(d => d.removidos.length || d.novos.length || d.alterados.length)) return;
  return enfileirar(async () => {
    await apagar(tFilho, df.removidos, rFilho);
    await apagar(tPai, dp.removidos, rPai);
    await gravar(tPai, dp, mapPai, rPai);
    await gravar(tFilho, df, mapFilho, rFilho);
  });
};
const saveIniciativas = saveSimples("iniciativas", mapOutIniciativa, "iniciativa");
const saveTarefas = saveSimples("atividades", mapOutTarefa, "atividade");
const saveLanc = saveSimples("lancamentos", mapOutLanc, "lançamento");
const saveCiclos = saveComFilhos("ciclos", "ciclo_etapas", "etapas", mapOutCiclo, mapOutEtapa, "ciclo", "etapa");
const saveChamados = saveComFilhos("chamados", "chamado_atividades", "atividades", mapOutChamado, mapOutChamAtiv, "chamado", "atividade do chamado");
function saveConfig(chave, valor) {
  if (!has()) return;
  return enfileirar(() => exec(window.sb.from("app_config").upsert({
    chave,
    valor
  }), "Salvar " + chave));
}

// ---- tempo real: recarrega quando outra pessoa altera; espera nossas gravações terminarem ----
function subscribeAll(onRemoteChange) {
  if (!has()) return () => {};
  const tables = ["iniciativas", "atividades", "lancamentos", "ciclos", "ciclo_etapas", "chamados", "chamado_atividades", "usuarios", "app_config"];
  const channel = window.sb.channel("portal-ci-live");
  let t0 = null;
  const agendar = () => {
    clearTimeout(t0);
    t0 = setTimeout(() => {
      if (pend || Date.now() - lastWrite < 1500) return agendar();
      onRemoteChange();
    }, 600);
  };
  tables.forEach(t => channel.on("postgres_changes", {
    event: "*",
    schema: "public",
    table: t
  }, agendar));
  channel.subscribe();
  return () => {
    clearTimeout(t0);
    window.sb.removeChannel(channel);
  };
}

// ---- autenticação ----
const mapUser = r => ({
  id: r.id,
  nome: r.nome,
  cargo: r.cargo,
  email: r.email,
  login: r.login,
  perfil: r.perfil,
  ativo: r.ativo,
  precisaTrocarSenha: r.precisa_trocar_senha
});
async function meuCadastro(uid) {
  const {
    data
  } = await window.sb.from("usuarios").select("*").eq("auth_user_id", uid).maybeSingle();
  return data;
}
async function authRestore() {
  if (!has()) return null;
  const {
    data
  } = await window.sb.auth.getSession();
  const uid = data?.session?.user?.id;
  if (!uid) return null;
  const row = await meuCadastro(uid);
  if (!row || row.ativo === false) {
    await window.sb.auth.signOut();
    return null;
  }
  return mapUser(row);
}
function onSignedOut(fn) {
  if (!has()) return () => {};
  const {
    data
  } = window.sb.auth.onAuthStateChange(ev => {
    if (ev === "SIGNED_OUT") fn();
  });
  return () => data.subscription.unsubscribe();
}
async function authSignIn(loginOuEmail, senha) {
  if (!has()) return {
    error: "no-supabase"
  };
  let email = loginOuEmail.trim();
  if (!email.includes("@")) {
    const {
      data
    } = await window.sb.rpc("email_do_login", {
      p_login: email
    });
    if (!data) return {
      error: "Login ou senha inválidos."
    };
    email = data;
  }
  const {
    data,
    error
  } = await window.sb.auth.signInWithPassword({
    email: email.toLowerCase(),
    password: senha
  });
  if (error) return {
    error: /invalid login/i.test(error.message) ? "Login ou senha inválidos." : error.message
  };
  const row = await meuCadastro(data.user.id);
  if (!row) {
    await window.sb.auth.signOut();
    return {
      error: "Seu login ainda não está vinculado ao cadastro. Fale com o Administrador."
    };
  }
  if (row.ativo === false) {
    await window.sb.auth.signOut();
    return {
      error: "Usuário inativo."
    };
  }
  return {
    user: mapUser(row)
  };
}
async function authSignOut() {
  if (has()) await window.sb.auth.signOut();
}
async function authUpdatePassword(novaSenha) {
  if (!has()) return {
    error: "no-supabase"
  };
  const {
    error
  } = await window.sb.auth.updateUser({
    password: novaSenha
  });
  if (error) return {
    error: /same/i.test(error.message) ? "A nova senha precisa ser diferente da atual." : /weak|short|least/i.test(error.message) ? "Senha fraca. Use ao menos 8 caracteres, com letras e números." : error.message
  };
  const r = await window.sb.rpc("marcar_senha_trocada");
  if (r.error) return {
    error: msgErro(r.error)
  };
  return {
    ok: true
  };
}
async function loadUsuarios() {
  if (!has()) return null;
  const {
    data,
    error
  } = await window.sb.from("usuarios").select("*").order("nome");
  if (error) return null;
  return (data || []).map(mapUser);
}
async function saveUsuarioFields(id, fields) {
  if (!has()) return {};
  const r = await enfileirar(() => exec(window.sb.from("usuarios").update({
    nome: fields.nome,
    cargo: fields.cargo,
    perfil: fields.perfil,
    ativo: fields.ativo
  }).eq("id", id), "Salvar usuário"));
  return r && r.error ? {
    error: msgErro(r.error)
  } : {};
}
async function chamarAdmin(body) {
  if (!has()) return {
    error: "no-supabase"
  };
  const {
    data,
    error
  } = await window.sb.functions.invoke("admin-users", {
    body
  });
  if (error) {
    let m = error.message;
    try {
      const b = await error.context.json();
      if (b && b.error) m = b.error;
    } catch (e) {}
    return {
      error: m
    };
  }
  return typeof data === "string" ? JSON.parse(data) : data;
}
const adminCriarUsuario = payload => chamarAdmin({
  action: "criar_usuario",
  ...payload
});
const adminResetarSenha = usuario_id => chamarAdmin({
  action: "resetar_senha",
  usuario_id
});
window.PortalSync = {
  authRestore,
  onSignedOut,
  loadAll,
  saveConfig,
  saveIniciativas,
  saveTarefas,
  saveLanc,
  saveCiclos,
  saveChamados,
  subscribeAll,
  authSignIn,
  authSignOut,
  authUpdatePassword,
  loadUsuarios,
  saveUsuarioFields,
  adminCriarUsuario,
  adminResetarSenha
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal-ci/supabaseSync.js", error: String((e && e.message) || e) }); }

__ds_ns.NatureBadge = __ds_scope.NatureBadge;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.Modal = __ds_scope.Modal;

})();
