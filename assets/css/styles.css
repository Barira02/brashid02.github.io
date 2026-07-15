/* =============================================================================
   styles.css — visual system. You rarely need to touch this.
   To re-theme the whole site, change the colors in :root below.
   ========================================================================== */

:root{
  /* ---- palette (false-color remote sensing) ---- */
  --indigo:#141138; --indigo-glow:#2A1F6E;
  --rose:#FF5C8A;   --rose-ink:#C42E63;
  --teal:#19C7B6;   --teal-ink:#0B8A8F;
  --gold:#FFC24B;   --gold-ink:#B77900;
  --paper:#F7F6FB;  --paper-2:#FFFFFF;
  --ink:#1B1934;    --ink-soft:#565175;
  --line:#E4E0F1;   --line-2:#EEEBF8;

  /* ---- type ---- */
  --display:"Fraunces", Georgia, serif;
  --body:"Hanken Grotesk", system-ui, sans-serif;
  --mono:"IBM Plex Mono", ui-monospace, monospace;

  --wrap:1140px;
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--body);
  font-size:18px;line-height:1.62;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;}
a{color:inherit;text-decoration:none;}
h1,h2,h3{font-family:var(--display);font-weight:600;line-height:1.04;margin:0;letter-spacing:-.01em;}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 30px;}
:focus-visible{outline:2px solid var(--rose);outline-offset:3px;}

/* signature: map-legend eyebrow */
.legend{display:inline-flex;align-items:center;gap:.6em;font-family:var(--mono);font-size:.71rem;font-weight:500;
  letter-spacing:.22em;text-transform:uppercase;color:var(--ink-soft);margin-bottom:1.4rem;}
.legend::before{content:"";width:12px;height:12px;flex:none;background:var(--rose);}
.legend.teal::before{background:var(--teal);}
.legend.gold::before{background:var(--gold);}
.legend.hollow::before{background:transparent;border:1px solid currentColor;}

section{padding:104px 0;border-top:1px solid var(--line);}
.section-title{font-size:clamp(1.9rem,4vw,3rem);max-width:16ch;margin-bottom:1rem;font-weight:600;}
.section-title em{font-style:italic;font-weight:500;color:var(--rose-ink);}
.section-sub{color:var(--ink-soft);max-width:52ch;margin:0 0 2.4rem;font-size:1.02rem;}

/* ================================ NAV ==================================== */
nav{position:fixed;top:0;left:0;right:0;z-index:1000;border-bottom:1px solid transparent;
  transition:background .3s,box-shadow .3s,border-color .3s;}
nav .wrap{display:flex;align-items:center;justify-content:space-between;padding-top:16px;padding-bottom:16px;}
.brand{font-family:var(--display);font-weight:600;font-size:1.05rem;color:#fff;display:flex;align-items:center;gap:.55em;transition:color .3s;}
.brand .glyph{width:16px;height:16px;flex:none;position:relative;}
.brand .glyph span{position:absolute;width:11px;height:11px;border-radius:50%;}
.brand .glyph span:nth-child(1){left:0;top:1px;background:var(--rose);}
.brand .glyph span:nth-child(2){left:5px;top:4px;background:var(--teal);mix-blend-mode:screen;}
.nav-links{display:flex;gap:1.6rem;font-family:var(--mono);font-size:.73rem;letter-spacing:.08em;text-transform:uppercase;}
.nav-links a{color:#D9D4F2;transition:color .2s;}
.nav-links a:hover{color:var(--rose);}
nav.scrolled{background:rgba(247,246,251,.9);backdrop-filter:blur(10px);border-color:var(--line);box-shadow:0 1px 20px rgba(20,17,56,.05);}
nav.scrolled .brand{color:var(--ink);}
nav.scrolled .nav-links a{color:var(--ink-soft);}
nav.scrolled .nav-links a:hover{color:var(--rose-ink);}
@media (max-width:760px){.nav-links{display:none;}}

/* ================================ HERO =================================== */
.hero{border-top:none;color:#F3F1FF;position:relative;overflow:hidden;padding:150px 0 90px;
  background:radial-gradient(120% 120% at 80% 0%, var(--indigo-glow), var(--indigo) 55%);}
.hero::before{content:"";position:absolute;inset:0;opacity:.5;pointer-events:none;
  background:repeating-linear-gradient(0deg,transparent 0 47px,rgba(255,255,255,.035) 47px 48px),
             repeating-linear-gradient(90deg,transparent 0 47px,rgba(255,255,255,.035) 47px 48px);}
.hero-single{position:relative;z-index:2;}
.hero-eyebrow{font-family:var(--mono);font-size:.73rem;letter-spacing:.24em;text-transform:uppercase;color:var(--teal);margin-bottom:1.5rem;}
.hero h1{font-size:clamp(3.2rem,9vw,6.6rem);font-weight:600;letter-spacing:-.025em;margin:0 0 .28em;color:#fff;}
.hero h1 em{font-style:italic;font-weight:400;color:var(--rose);}
.hero .role{font-weight:500;font-size:clamp(1.05rem,1.8vw,1.35rem);color:#E4E0FA;max-width:34ch;line-height:1.3;margin-bottom:1.3rem;}
.hero .thesis{font-family:var(--display);font-style:italic;font-weight:400;font-size:clamp(1.5rem,3.4vw,2.4rem);
  color:#C7C1E8;max-width:20ch;margin-bottom:1.6rem;line-height:1.25;}
.quip{display:inline-block;font-family:var(--mono);font-size:.72rem;letter-spacing:.04em;color:#9C95CC;
  border-left:2px solid var(--gold);padding-left:.7em;margin-bottom:2rem;}
.coords{font-family:var(--mono);font-size:.76rem;letter-spacing:.05em;color:#A8A1D6;margin-bottom:2rem;
  display:flex;flex-wrap:wrap;gap:.35rem 1.3rem;}
.coords b{color:var(--teal);font-weight:600;}
.cta-row{display:flex;flex-wrap:wrap;gap:11px;}
.btn{font-family:var(--mono);font-size:.78rem;font-weight:500;letter-spacing:.05em;padding:.72em 1.15em;
  border:1px solid rgba(255,255,255,.35);color:#fff;display:inline-flex;align-items:center;gap:.5em;
  transition:background .18s,color .18s,border-color .18s,transform .18s;}
.btn:hover{background:#fff;color:var(--indigo);transform:translateY(-2px);border-color:#fff;}
.btn.solid{background:var(--rose);border-color:var(--rose);color:#2A0A16;font-weight:600;}
.btn.solid:hover{background:var(--gold);border-color:var(--gold);color:#3A2600;}

.pin{background:var(--rose);color:#2A0A16;font-family:var(--mono);font-weight:600;font-size:11px;
  width:22px;height:22px;border-radius:50%;display:grid;place-items:center;border:2px solid #fff;
  box-shadow:0 0 0 3px rgba(255,92,138,.35);}
.pin.site{background:var(--teal);color:#04302E;box-shadow:0 0 0 3px rgba(25,199,182,.3);}

/* leaflet chrome */
.leaflet-container{font-family:var(--mono);}
.leaflet-popup-content-wrapper{border-radius:0;border:1px solid var(--ink);box-shadow:none;}
.leaflet-popup-content{margin:10px 12px;font-family:var(--body);font-size:.88rem;line-height:1.45;}
.leaflet-popup-content strong{font-family:var(--display);}
.leaflet-control-scale-line{border-radius:0;border-color:var(--ink);color:var(--ink);font-family:var(--mono);background:rgba(255,255,255,.85);}
.leaflet-bar a{border-radius:0 !important;}
.leaflet-control-layers{border-radius:0;border:1px solid var(--line);background:rgba(255,255,255,.94);
  color:var(--ink-soft);font-family:var(--mono);font-size:.7rem;}
.leaflet-control-layers label{margin:2px 0;}

/* ==================== SCIENCE COMMUNICATION / OPEN DATA ================== */
.sc-filters{display:flex;flex-wrap:wrap;gap:8px;margin:-1rem 0 2rem;}
.sc-filter{font-family:var(--mono);font-size:.68rem;letter-spacing:.06em;text-transform:uppercase;
  background:none;border:1px solid var(--line);color:var(--ink-soft);padding:.5em .8em;cursor:pointer;
  transition:all .16s;display:inline-flex;align-items:center;gap:.5em;}
.sc-filter span{font-size:.9em;opacity:.5;}
.sc-filter:hover{border-color:var(--rose);color:var(--rose-ink);}
.sc-filter.active{background:var(--indigo);border-color:var(--indigo);color:#fff;}
.sc-filter.active span{opacity:.6;}

.od-badge{position:absolute;left:10px;top:10px;font-family:var(--mono);font-size:.6rem;font-weight:600;
  letter-spacing:.1em;text-transform:uppercase;padding:.35em .6em;color:#141138;background:#fff;}
.od-badge.t-dataset{background:var(--teal);color:#04302E;}
.od-badge.t-story-map{background:var(--rose);color:#2A0A16;}
.od-badge.t-podcast{background:var(--gold);color:#3A2600;}
.od-badge.t-essay{background:#EEEBF8;color:var(--indigo);}
.od-badge.t-report{background:var(--indigo);color:#fff;}
.od-badge.t-talk{background:#fff;color:var(--indigo);}
.od-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.od-card{border:1px solid var(--line);background:var(--paper-2);display:flex;flex-direction:column;
  transition:transform .22s,box-shadow .22s,border-color .22s;}
.od-card.live:hover{transform:translateY(-4px);box-shadow:0 18px 40px -22px rgba(20,17,56,.45);border-color:var(--rose);}
.od-thumb{position:relative;aspect-ratio:16/10;overflow:hidden;border-bottom:1px solid var(--line);background:#0C0A24;}
.od-thumb svg{display:block;width:100%;height:100%;}
.od-body{padding:20px 20px 22px;display:flex;flex-direction:column;flex:1;}
.od-kicker{font-family:var(--mono);font-size:.63rem;letter-spacing:.13em;text-transform:uppercase;color:var(--teal-ink);}
.od-card h3{font-size:1.14rem;margin:.5rem 0 .6rem;line-height:1.22;}
.od-chips{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:.75rem;}
.od-chip{font-family:var(--mono);font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;
  color:var(--ink-soft);border:1px solid var(--line);background:var(--line-2);padding:.25em .5em;}
.od-card p{margin:0;color:var(--ink-soft);font-size:.9rem;line-height:1.5;flex:1;}
.od-actions{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem .9rem;margin-top:1.1rem;}
.od-actions .od-go + .od-go{padding-left:.9rem;border-left:1px solid var(--line);}
.od-go{font-family:var(--mono);font-size:.7rem;letter-spacing:.05em;color:var(--rose-ink);
  border-bottom:1px solid transparent;transition:color .15s,border-color .15s;}
.od-card.live:hover .od-go{color:var(--gold-ink);border-color:var(--gold-ink);}
.od-cite{font-family:var(--mono);font-size:.64rem;letter-spacing:.05em;color:var(--ink-soft);cursor:pointer;
  background:none;border:1px solid var(--line);padding:.35em .6em;transition:all .15s;}
.od-cite:hover{border-color:var(--teal-ink);color:var(--teal-ink);}
.od-cite.ok{border-color:var(--teal);color:var(--teal-ink);background:#E9FBF8;}
.od-pending{font-family:var(--mono);font-size:.63rem;letter-spacing:.05em;color:var(--gold-ink);
  background:#FFF8E8;border:1px dashed var(--gold);padding:.35em .6em;}

/* ================================ ABOUT ================================== */
.about-grid{display:grid;grid-template-columns:1fr;gap:2rem;}
.lead{font-family:var(--display);font-size:clamp(1.4rem,2.8vw,1.95rem);font-weight:400;line-height:1.32;max-width:24ch;}
.about p{max-width:62ch;color:var(--ink-soft);font-size:1.02rem;}
.about p + p{margin-top:1.05rem;}
.toolkit{margin-top:2rem;font-family:var(--mono);font-size:.75rem;letter-spacing:.04em;color:var(--ink-soft);
  display:flex;flex-wrap:wrap;gap:.5rem .9rem;align-items:center;}
.toolkit b{color:var(--teal-ink);text-transform:uppercase;letter-spacing:.14em;font-size:.68rem;}
.toolkit .d{color:var(--line);}

/* ============================== RESEARCH ================================= */
.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line);border:1px solid var(--line);}
.card{background:var(--paper-2);padding:34px 32px;transition:background .25s;}
.card:hover{background:var(--line-2);}
.card-ico{width:48px;height:48px;margin-bottom:1.1rem;color:var(--indigo);}
.card h3{font-size:1.4rem;margin:0 0 .6rem;line-height:1.12;font-weight:600;}
.card p{margin:0;color:var(--ink-soft);font-size:1rem;line-height:1.55;}
.card .tag{display:inline-block;margin-top:1.1rem;font-family:var(--mono);font-size:.66rem;letter-spacing:.1em;
  text-transform:uppercase;color:var(--rose-ink);}

/* ============================ PUBLICATIONS =============================== */
.pub{padding:26px 0;border-top:1px solid var(--line);display:grid;grid-template-columns:78px 1fr;gap:1.4rem;align-items:start;}
.pub:first-of-type{border-top:none;}
.pub .yr{font-family:var(--mono);font-size:.82rem;color:var(--rose-ink);font-weight:600;padding-top:.35rem;}
.pub .title{font-family:var(--display);font-size:1.24rem;font-weight:600;line-height:1.25;margin:0 0 .35rem;}
.pub .authors{font-size:.95rem;color:var(--ink-soft);margin:0 0 .2rem;}
.pub .venue{color:var(--ink-soft);font-size:1rem;font-style:italic;font-family:var(--display);margin:0;}
.pub .doi{font-family:var(--mono);font-size:.74rem;letter-spacing:.03em;margin-top:.55rem;display:inline-flex;gap:.45em;
  color:var(--teal-ink);border-bottom:1px solid transparent;transition:border-color .15s;}
.pub .doi:hover{border-color:var(--teal-ink);}

/* =============================== HONORS ================================== */
.honors{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line);border:1px solid var(--line);}
.honor{background:var(--paper-2);padding:28px 30px;position:relative;}
.honor::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--rose);opacity:0;transition:opacity .2s;}
.honor:hover::before{opacity:1;}
.honor .hy{font-family:var(--mono);font-size:.69rem;color:var(--gold-ink);letter-spacing:.1em;}
.honor h3{font-size:1.18rem;margin:.5rem 0 .4rem;line-height:1.2;font-weight:600;}
.honor p{margin:0;color:var(--ink-soft);font-size:.95rem;line-height:1.5;}

/* ======================== SCIENCE COMMUNICATION ========================== */
.out-list{display:grid;grid-template-columns:repeat(3,1fr);gap:1.9rem 2.6rem;}
.out{border-left:2px solid var(--teal);padding-left:1.2rem;}
.out-ico{height:30px;color:var(--rose-ink);margin-bottom:.7rem;}
.out h3{font-size:1.18rem;margin:0 0 .4rem;font-weight:600;}
.out p{margin:0;color:var(--ink-soft);font-size:.96rem;line-height:1.5;}
.out .todo{display:inline-block;margin-top:.5rem;font-family:var(--mono);font-size:.66rem;letter-spacing:.06em;color:var(--gold-ink);}
a.todo:hover{border-bottom:1px solid var(--gold-ink);}

/* ======================== EDUCATION — MAP TOUR =========================== */
.tour{display:grid;grid-template-columns:.85fr 1.15fr;gap:32px;align-items:start;}
.tour-list{display:flex;flex-direction:column;gap:10px;}
.stop{display:flex;gap:14px;text-align:left;background:var(--paper-2);border:1px solid var(--line);
  padding:16px 16px;cursor:pointer;font-family:var(--body);transition:border-color .18s,background .18s,transform .18s;}
.stop:hover{border-color:var(--rose);transform:translateX(3px);}
.stop.active{border-color:var(--rose);background:#FFF1F5;}
.stop.active .stop-n{background:var(--rose);color:#2A0A16;border-color:var(--rose);}
.stop-n{flex:none;width:26px;height:26px;border-radius:50%;border:1.5px solid var(--line);
  display:grid;place-items:center;font-family:var(--mono);font-size:.72rem;font-weight:600;color:var(--ink-soft);
  transition:all .18s;}
.stop-body{display:flex;flex-direction:column;gap:2px;}
.stop-deg{font-family:var(--display);font-weight:600;font-size:1.02rem;line-height:1.2;}
.stop-school{color:var(--ink-soft);font-size:.92rem;}
.stop-note{color:var(--rose-ink);font-size:.82rem;}
.stop-place{font-family:var(--mono);font-size:.66rem;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-soft);margin-top:.25rem;}

.tour-map-col{position:sticky;top:90px;}
.tour-frame{border:1px solid var(--line);background:var(--paper-2);}
.tour-cap{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:10px 13px;
  border-bottom:1px solid var(--line);font-family:var(--mono);font-size:.67rem;letter-spacing:.08em;
  text-transform:uppercase;color:var(--ink-soft);}
.tour-cap b{color:var(--rose-ink);}
#tour-map{height:460px;width:100%;background:#EBE8F6;z-index:1;}
.tour-nav{display:flex;gap:8px;margin-top:10px;}
.tour-nav button{flex:1;font-family:var(--mono);font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;
  background:none;border:1px solid var(--line);color:var(--ink-soft);padding:.6em .5em;cursor:pointer;transition:all .16s;}
.tour-nav button:hover{border-color:var(--rose);color:var(--rose-ink);}

/* ============================== CONTACT ================================== */
.contact{color:#EDEAFB;border:none;background:radial-gradient(120% 120% at 20% 100%, var(--indigo-glow), var(--indigo) 55%);}
.contact .legend{color:#8FB79C;}
.contact .section-title{color:#fff;max-width:20ch;}
.contact .section-title em{color:var(--rose);}
.contact .lead{color:#B9B2E4;max-width:38ch;margin-bottom:2.1rem;}
.contact a.mail{font-family:var(--display);font-weight:600;font-size:clamp(1.5rem,4vw,2.6rem);color:#fff;
  border-bottom:2px solid var(--rose);display:inline-block;transition:color .18s,border-color .18s;}
.contact a.mail:hover{color:var(--rose);border-color:var(--gold);}
.foot-links{display:flex;flex-wrap:wrap;gap:1.4rem;margin-top:2.3rem;font-family:var(--mono);font-size:.79rem;
  letter-spacing:.06em;text-transform:uppercase;}
.foot-links a{color:#A8A1D6;border-bottom:1px solid transparent;padding-bottom:2px;transition:color .15s,border-color .15s;}
.foot-links a:hover{color:#fff;border-color:var(--teal);}
.colophon{margin-top:3rem;padding-top:1.6rem;border-top:1px solid rgba(255,255,255,.12);font-family:var(--mono);
  font-size:.69rem;letter-spacing:.05em;color:#7B74AE;}

/* ============================== MOTION =================================== */
.reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease;}
.reveal.in{opacity:1;transform:none;}

/* ============================ RESPONSIVE ================================= */
@media (max-width:960px){
  .od-grid{grid-template-columns:1fr 1fr;}
  .out-list{grid-template-columns:1fr 1fr;}
}
@media (max-width:860px){
  body{font-size:17px;}
  section{padding:74px 0;}
  .hero{padding:120px 0 56px;}
  .about-grid{grid-template-columns:1fr;gap:38px;}
  .cards,.honors,.od-grid,.out-list{grid-template-columns:1fr;}
  .tour{grid-template-columns:1fr;gap:20px;}
  .tour-map-col{position:static;}
  #tour-map{height:320px;}
  .pub{grid-template-columns:1fr;gap:.5rem;}
  .pub .yr{padding-top:0;}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto;}
  .reveal{opacity:1;transform:none;transition:none;}
  .btn:hover,.btn.solid:hover,.od-card.live:hover,.stop:hover{transform:none;}
}
