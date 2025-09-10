/* src/App.css */
:root { --bg:#ffffff; --ink:#0f172a; --muted:#475569; --ring:#6366f1; --card:#f8fafc; }
*{ box-sizing:border-box }
body{ margin:0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"; color:var(--ink); background:var(--bg); }
a{ color:inherit; text-decoration:none }
.container{ max-width:1100px; margin:0 auto; padding:24px }
.nav{ display:flex; align-items:center; justify-content:space-between; padding:8px 0; position:sticky; top:0; background:var(--bg) }
.nav .brand{ font-weight:700; letter-spacing:0.3px }
.nav nav a{ margin-left:16px; color:var(--muted) }
.nav nav a:hover{ color:var(--ink) }

.logo{ height:60px; will-change: filter; transition: filter .2s }
.logo.react{ margin-left:8px }
.hero{ text-align:center; padding:64px 0 24px }
.hero h1{ font-size:48px; margin:16px 0 8px }
.subtitle{ color:var(--muted); margin:0 auto 16px; max-width:640px }
.cta{ display:flex; gap:12px; justify-content:center; margin:16px 0 0 }
.btn{ padding:10px 16px; border:1px solid #e2e8f0; border-radius:10px; }
.btn:hover{ border-color: var(--ring) }
.btn.primary{ background:var(--ring); color:white; border-color:var(--ring) }
.btn.primary:hover{ filter:brightness(0.95) }

.section{ padding:48px 0; border-top:1px solid #eef2f7 }
.section h2{ font-size:28px; margin:0 0 12px }
.section p{ color:var(--muted); max-width:780px }
.cards{ display:grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap:16px }
.card{ background:var(--card); padding:16px; border-radius:14px; border:1px solid #e2e8f0 }

form{ display:grid; gap:10px; max-width:520px }
input, textarea{ padding:10px 12px; border:1px solid #e2e8f0; border-radius:10px; font:inherit }
input:focus, textarea:focus{ outline:none; border-color: var(--ring); box-shadow:0 0 0 3px rgba(99,102,241,.15) }
.hidden{ display:none }

.footer{ text-align:center; padding:36px 0; color:var(--muted) }
