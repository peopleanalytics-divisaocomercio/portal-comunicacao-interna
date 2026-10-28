// Cliente Supabase do Portal CI. Preencha SUPABASE_URL e SUPABASE_ANON_KEY
// (Settings > API no dashboard) e inclua este script + o CDN do supabase-js no index.html:
// <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
// <script src="supabaseClient.js"></script>

const SUPABASE_URL = "https://bbwdzlnbibhydkdjdpsc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_xLIsSXnYt7r-FqAVFrf7Sg_j4YkXZeg";

window.sb = (SUPABASE_URL && SUPABASE_ANON_KEY)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

if (!window.sb) console.warn("Supabase não configurado — preencha SUPABASE_URL e SUPABASE_ANON_KEY em supabaseClient.js");
