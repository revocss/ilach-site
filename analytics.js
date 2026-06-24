/* ================================================================
   DANISEI GROUP v3 — Master Stylesheet
   Japanese-Inspired Premium International Healthcare
   ================================================================ */

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Noto+Sans+JP:wght@300;400;500&display=swap');

/* ── Tokens ─────────────────────────────────────────────────── */
:root {
  --navy:        #071A4A;
  --navy-mid:    #0C2260;
  --navy-deep:   #050E2B;
  --coral:       #EA7A5F;
  --coral-soft:  #F29B7D;
  --coral-pale:  #FFE4D8;
  --white:       #FFFFFF;
  --paper:       #F8F6F2;
  --paper-2:     #F1EDE7;
  --mist:        #E5E0D8;
  --ink:         #09101F;

  --text-1: #071A4A;
  --text-2: #3A4A6B;
  --text-3: #7A8AAB;
  --text-4: #AABACC;

  --border:   rgba(7,26,74,0.09);
  --border-2: rgba(7,26,74,0.05);

  --serif: 'Noto Serif JP', Georgia, serif;
  --sans:  'DM Sans', -apple-system, sans-serif;
  --jp:    'Noto Sans JP', sans-serif;

  --shadow-sm: 0 2px 12px rgba(7,26,74,0.07);
  --shadow-md: 0 8px 32px rgba(7,26,74,0.10);
  --shadow-lg: 0 20px 60px rgba(7,26,74,0.13);
  --shadow-coral: 0 8px 40px rgba(234,122,95,0.28);

  --ease: cubic-bezier(.4,0,.2,1);
  --t1: .18s; --t2: .32s; --t3: .55s;
  --r1:8px; --r2:14px; --r3:20px; --r4:28px; --rfull:999px;
}

/* ── Reset ──────────────────────────────────────────────────── */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
body{font-family:var(--sans);color:var(--text-1);background:var(--white);overflow-x:hidden;line-height:1.65}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font-family:var(--sans);cursor:pointer}
ul{list-style:none}
svg{display:block}

/* ── Layout ─────────────────────────────────────────────────── */
.container   {max-width:1260px;margin:0 auto;padding:0 2rem}
.container-sm{max-width:880px;margin:0 auto;padding:0 2rem}
.section     {padding:5.5rem 0}
.section-sm  {padding:3.5rem 0}

/* ── Grid ───────────────────────────────────────────────────── */
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
.grid-auto{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}
.grid-products{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1.5rem}
@media(max-width:900px){.grid-3,.grid-4{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.grid-2,.grid-3,.grid-4{grid-template-columns:1fr}}

/* ── Reveal animation ───────────────────────────────────────── */
.reveal{opacity:0;transform:translateY(22px);transition:opacity .6s var(--ease),transform .6s var(--ease)}
.reveal.in-view{opacity:1;transform:none}
.reveal-delay-1{transition-delay:.1s}
.reveal-delay-2{transition-delay:.2s}
.reveal-delay-3{transition-delay:.3s}

/* ================================================================
   HEADER
   ================================================================ */
.site-header{
  position:fixed;top:0;left:0;right:0;z-index:1000;
  height:66px;
  background:rgba(5,14,43,.95);
  backdrop-filter:blur(18px) saturate(160%);
  -webkit-backdrop-filter:blur(18px) saturate(160%);
  border-bottom:1px solid rgba(255,255,255,.055);
  transition:background var(--t2) var(--ease);
}
.site-header.scrolled{background:rgba(5,14,43,.99)}
.nav-wrap{height:66px;display:flex;align-items:center;gap:1.5rem}

.nav-logo{display:flex;align-items:center;gap:11px;flex-shrink:0}
.nav-logo-svg{width:34px;height:34px}
.nav-logo-name{font-family:var(--jp);font-size:15.5px;font-weight:500;color:#fff;letter-spacing:.09em}
.nav-logo-name span{color:var(--coral-soft)}

.nav-links{display:flex;align-items:center;flex:1;overflow-x:auto;scrollbar-width:none;gap:0}
.nav-links::-webkit-scrollbar{display:none}
.nav-link{display:block;font-size:12.5px;font-weight:500;color:rgba(255,255,255,.58);padding:6px 11px;border-radius:var(--r1);white-space:nowrap;transition:color var(--t1),background var(--t1);letter-spacing:.02em}
.nav-link:hover,.nav-link.active{color:#fff;background:rgba(255,255,255,.08)}

.nav-right{display:flex;align-items:center;gap:8px;flex-shrink:0}
.lang-pill{display:flex;background:rgba(255,255,255,.06);border-radius:var(--rfull);padding:3px;gap:2px}
.lang-opt{font-size:11px;font-weight:600;letter-spacing:.06em;color:rgba(255,255,255,.42);padding:4px 10px;border-radius:var(--rfull);border:none;background:none;cursor:pointer;transition:all var(--t1);font-family:var(--jp)}
.lang-opt.active,.lang-opt:hover{background:var(--coral);color:#fff}
.nav-cta{font-size:12.5px;font-weight:600;color:#fff;background:var(--coral);border:none;padding:8px 20px;border-radius:var(--rfull);transition:background var(--t1),transform var(--t1);letter-spacing:.03em}
.nav-cta:hover{background:#c96a4e;transform:translateY(-1px)}
.nav-toggle{display:none;background:none;border:none;color:#fff;flex-shrink:0;padding:6px;line-height:1;font-size:22px}

@media(max-width:960px){
  .nav-links{display:none;position:absolute;top:66px;left:0;right:0;flex-direction:column;align-items:flex-start;background:rgba(5,14,43,.99);padding:1rem;border-bottom:1px solid rgba(255,255,255,.07);gap:2px}
  .nav-links.open{display:flex}
  .nav-toggle{display:block}
}

/* ================================================================
   HERO — ONE FULL-SCREEN DARK SECTION
   Solar System (upper-middle) → Headline → Subheadline → CTAs
   ================================================================ */
.hero{
  min-height:100vh;
  background:var(--navy-deep);
  display:flex;flex-direction:column;
  align-items:center;
  padding:calc(66px + 2.5rem) 0 3.5rem;
  position:relative;overflow:hidden;
}

/* Seigaiha pattern overlay */
.seigaiha{
  position:absolute;inset:0;pointer-events:none;
  opacity:.028;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ccircle cx='24' cy='48' r='24' fill='none' stroke='%23EA7A5F' stroke-width='1'/%3E%3Ccircle cx='0' cy='48' r='24' fill='none' stroke='%23EA7A5F' stroke-width='1'/%3E%3Ccircle cx='48' cy='48' r='24' fill='none' stroke='%23EA7A5F' stroke-width='1'/%3E%3Ccircle cx='12' cy='24' r='24' fill='none' stroke='%23EA7A5F' stroke-width='1'/%3E%3Ccircle cx='36' cy='24' r='24' fill='none' stroke='%23EA7A5F' stroke-width='1'/%3E%3Ccircle cx='24' cy='0' r='24' fill='none' stroke='%23EA7A5F' stroke-width='1'/%3E%3C/svg%3E");
  background-size:48px 48px;
}

/* Thin horizontal lines — ma (間) spacing */
.hero-ma{position:absolute;inset:0;pointer-events:none}
.hero-ma::before,.hero-ma::after{content:'';position:absolute;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.035),transparent)}
.hero-ma::before{top:30%}
.hero-ma::after{top:70%}

/* ── Solar system — upper-middle of hero, large & centered ───── */
.solar-wrap{
  position:relative;
  width:min(680px,62vw);
  height:min(680px,62vw);
  flex-shrink:0;
  margin:0 auto;
}

/* Sun glows */
.sun-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;pointer-events:none}
.sg1{width:170px;height:170px;background:radial-gradient(circle,rgba(234,122,95,.22),transparent 68%);animation:pulse1 5s ease-in-out infinite}
.sg2{width:300px;height:300px;background:radial-gradient(circle,rgba(242,155,125,.10),transparent 65%);animation:pulse2 7s ease-in-out infinite}
.sg3{width:430px;height:430px;background:radial-gradient(circle,rgba(255,228,216,.05),transparent 60%);animation:pulse1 10s ease-in-out infinite reverse}
@keyframes pulse1{0%,100%{opacity:1;transform:translate(-50%,-50%) scale(1)}50%{opacity:.7;transform:translate(-50%,-50%) scale(1.06)}}
@keyframes pulse2{0%,100%{opacity:.78;transform:translate(-50%,-50%) scale(1)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.04)}}

/* Sun core — primary focal point, exact center */
.sun-core{
  position:absolute;top:50%;left:50%;
  transform:translate(-50%,-50%);
  z-index:10;
}
.sun-svg{
  width:88px;height:88px;
  filter:drop-shadow(0 0 20px rgba(234,122,95,.65)) drop-shadow(0 0 44px rgba(234,122,95,.28));
  animation:sunSpin 120s linear infinite;
  cursor:pointer;
}
.sun-svg:hover{filter:drop-shadow(0 0 30px rgba(234,122,95,.85)) drop-shadow(0 0 60px rgba(234,122,95,.4))}
@keyframes sunSpin{to{transform:rotate(360deg)}}

/* Orbit rings — concentric, evenly spaced */
.orbit{
  position:absolute;top:50%;left:50%;
  transform:translate(-50%,-50%);
  border-radius:50%;
  border:1px solid rgba(255,255,255,.06);
  pointer-events:none;
}
.orbit.dashed{border-style:dashed;border-color:rgba(234,122,95,.08)}

/* Planet orbiting arms — duration set inline per-ring for symmetry */
.planet-arm{
  position:absolute;top:50%;left:50%;
  border-radius:50%;
  transform:translate(-50%,-50%) rotate(var(--start-angle,0deg));
  animation-name:orb;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
}
@keyframes orb{from{transform:translate(-50%,-50%) rotate(var(--start-angle,0deg))}to{transform:translate(-50%,-50%) rotate(calc(var(--start-angle,0deg) + 360deg))}}

/* Planet nodes — counter-rotate so artwork & labels stay upright */
.planet-node{
  position:absolute;top:0;left:50%;
  transform:translateX(-50%) rotate(calc(-1 * var(--start-angle,0deg)));
  cursor:pointer;
  transition:transform var(--t2) var(--ease);
  animation-name:counterOrb;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
}
.planet-node:hover{transform:translateX(-50%) scale(1.15)}
@keyframes counterOrb{from{transform:translateX(-50%) rotate(calc(-1 * var(--start-angle,0deg)))}to{transform:translateX(-50%) rotate(calc(-1 * var(--start-angle,0deg) - 360deg))}}

/* Planet visual */
.planet-svg{
  width:58px;height:58px;border-radius:50%;
  filter:drop-shadow(0 3px 10px rgba(7,26,74,.45));
  transition:filter var(--t2);
  background:var(--navy-deep);
}
.planet-node:hover .planet-svg{
  filter:drop-shadow(0 4px 18px rgba(234,122,95,.55)) drop-shadow(0 0 10px rgba(234,122,95,.28));
}
.planet-label{
  position:absolute;top:calc(100% + 7px);left:50%;transform:translateX(-50%);
  font-family:var(--jp);font-size:9.5px;font-weight:500;
  color:rgba(255,255,255,.5);white-space:nowrap;letter-spacing:.08em;text-transform:uppercase;
  pointer-events:none;transition:color var(--t1);
}
.planet-node:hover .planet-label{color:rgba(255,255,255,.95)}

/* Gentle ambient particles — few, slow, subtle */
.particle{
  position:absolute;border-radius:50%;
  width:3px;height:3px;
  background:rgba(234,122,95,.35);pointer-events:none;
  animation:particleDrift linear infinite;
}
@keyframes particleDrift{
  0%{transform:translate(0,0) scale(1);opacity:0}
  20%{opacity:.45}
  80%{opacity:.2}
  100%{transform:translate(var(--dx,30px),var(--dy,-70px)) scale(.3);opacity:0}
}

/* ── Hero typography — directly below the solar system, same dark section ── */
.hero-content{
  text-align:center;
  max-width:700px;
  margin:2.5rem auto 0;
  position:relative;
  z-index:5;
}
.hero-eyebrow{
  font-family:var(--jp);font-size:10.5px;letter-spacing:.24em;
  text-transform:uppercase;color:rgba(255,255,255,.38);margin-bottom:1.25rem;
}
.hero-h1{
  font-family:var(--serif);font-size:clamp(28px,4.2vw,54px);
  font-weight:200;color:#fff;line-height:1.25;
  margin-bottom:1.25rem;letter-spacing:-.01em;
  white-space:normal;
}
.hero-h1 em{color:var(--coral-soft);font-style:italic}
.hero-sub{
  font-size:15.5px;color:rgba(255,255,255,.5);
  line-height:1.8;max-width:560px;margin:0 auto 2.25rem;font-weight:300;
}
.hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.hero-btns .btn-outline{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3)}
.hero-btns .btn-outline:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.55)}

@media(max-width:1024px) and (min-width:769px){
  .solar-wrap{width:min(560px,72vw);height:min(560px,72vw)}
}

@media(max-width:768px){
  .hero{min-height:auto;padding:calc(66px + 1.5rem) 0 3rem}
  .solar-wrap{width:min(380px,92vw);height:min(380px,92vw)}
  .planet-svg{width:42px;height:42px}
  .planet-label{font-size:8px}
  .hero-content{margin-top:1.5rem}
}

/* ================================================================
   SECTION HEADERS
   ================================================================ */
.sh{margin-bottom:3.5rem}
.sh.center{text-align:center}
.sh.center .sh-sub{margin:0 auto}
.sh-label{
  font-family:var(--jp);font-size:10.5px;font-weight:500;
  letter-spacing:.2em;text-transform:uppercase;
  color:var(--coral);margin-bottom:.875rem;display:flex;align-items:center;gap:10px;
}
.sh-label::after{content:'';flex:0 0 28px;height:1px;background:var(--coral);opacity:.5}
.sh.center .sh-label{justify-content:center}
.sh.center .sh-label::after{display:none}
.sh-title{
  font-family:var(--serif);font-size:clamp(26px,3.8vw,48px);
  font-weight:200;color:var(--navy);line-height:1.1;margin-bottom:1rem;letter-spacing:-.01em;
}
.sh-title strong{font-weight:600;color:var(--coral)}
.sh-title.white{color:#fff}
.sh-sub{font-size:16px;color:var(--text-3);line-height:1.78;max-width:570px;font-weight:300}

/* Kinbari rule */
.kbr{width:40px;height:1px;background:var(--coral);margin-bottom:1.5rem}
.kbr.center{margin-left:auto;margin-right:auto}

/* Separator */
.sep{display:flex;align-items:center;gap:1.5rem;margin:3.5rem 0}
.sep::before,.sep::after{content:'';flex:1;height:1px;background:var(--border)}
.sep-text{font-family:var(--jp);font-size:10px;color:var(--text-4);letter-spacing:.18em;text-transform:uppercase;white-space:nowrap}

/* ================================================================
   BUTTONS
   ================================================================ */
.btn{
  display:inline-flex;align-items:center;gap:8px;
  font-size:13.5px;font-weight:600;padding:12px 28px;
  border-radius:var(--rfull);border:none;cursor:pointer;
  transition:all var(--t2) var(--ease);letter-spacing:.04em;
  font-family:var(--sans);white-space:nowrap;
}
.btn-coral{background:var(--coral);color:#fff}
.btn-coral:hover{background:#c96a4e;transform:translateY(-2px);box-shadow:var(--shadow-coral)}
.btn-navy{background:var(--navy);color:#fff}
.btn-navy:hover{background:var(--navy-mid);transform:translateY(-2px)}
.btn-light{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3)}
.btn-light:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.55)}
.btn-outline{background:transparent;color:var(--navy);border:1px solid var(--navy)}
.btn-outline:hover{background:var(--navy);color:#fff}
.btn-sm{padding:8px 20px;font-size:12.5px}

/* ================================================================
   DIVISION PAGE HERO
   ================================================================ */
.div-hero{
  background:var(--navy-deep);
  padding:8rem 0 5rem;
  position:relative;overflow:hidden;
}
.div-hero .seigaiha{position:absolute;inset:0}
.div-hero-glow{
  position:absolute;top:-100px;right:-100px;
  width:550px;height:550px;border-radius:50%;
  background:radial-gradient(circle,rgba(234,122,95,.10),transparent 68%);
  pointer-events:none;
}
.div-hero-content{position:relative;z-index:2}
.div-hero-eye{
  font-family:var(--jp);font-size:10px;letter-spacing:.22em;
  text-transform:uppercase;color:var(--coral-soft);
  margin-bottom:1.25rem;display:flex;align-items:center;gap:10px;
}
.div-hero-eye::after{content:'';width:28px;height:1px;background:var(--coral-soft);opacity:.5}
.div-hero h1{
  font-family:var(--serif);font-size:clamp(34px,5vw,66px);
  font-weight:200;color:#fff;line-height:1.06;
  margin-bottom:1.25rem;letter-spacing:-.015em;
}
.div-hero h1 em{color:var(--coral-soft);font-style:italic}
.div-hero p.lead{font-size:17px;color:rgba(255,255,255,.48);max-width:580px;line-height:1.78;font-weight:300}

/* Division hero planet art (right side) */
.div-hero-art{
  position:absolute;right:4rem;top:50%;transform:translateY(-50%);
  width:200px;height:200px;border-radius:50%;overflow:hidden;opacity:.5;
  border:1px solid rgba(255,255,255,.08);
}
.div-hero-art svg{width:100%;height:100%}
@media(max-width:900px){.div-hero-art{display:none}}

/* ================================================================
   ABOUT SECTION
   ================================================================ */
.about-split{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
@media(max-width:900px){.about-split{grid-template-columns:1fr;gap:2.5rem}}

.navy-panel{
  background:var(--navy);border-radius:var(--r4);
  padding:2.5rem;position:relative;overflow:hidden;
}
.navy-panel::after{
  content:'';position:absolute;bottom:-60px;right:-60px;
  width:220px;height:220px;border-radius:50%;
  background:radial-gradient(circle at 70% 70%,rgba(234,122,95,.14),transparent 65%);
  pointer-events:none;
}
.navy-panel .sh-label{color:var(--coral-soft)}
.navy-panel h3{font-family:var(--serif);font-size:26px;font-weight:200;color:#fff;margin-bottom:1.75rem;letter-spacing:-.01em}
.pillar-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.pillar{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:var(--r2);padding:13px 15px;transition:background var(--t1)}
.pillar:hover{background:rgba(255,255,255,.07)}
.pillar-n{font-family:var(--serif);font-size:20px;color:var(--coral-soft);line-height:1;font-weight:300}
.pillar-l{font-size:11px;color:rgba(255,255,255,.42);margin-top:3px;letter-spacing:.03em}

.quote-block{border-left:2px solid var(--coral);padding-left:1.25rem;margin:2rem 0}
.quote-block p{font-family:var(--serif);font-size:15px;font-weight:300;color:var(--text-2);line-height:1.82;font-style:italic}

/* ================================================================
   DIVISION CARDS
   ================================================================ */
.div-card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:1.5rem}
.div-card{
  background:var(--white);border:1px solid var(--border);
  border-radius:var(--r4);overflow:hidden;
  display:block;color:inherit;
  transition:all var(--t2) var(--ease);position:relative;
}
.div-card:hover{border-color:rgba(234,122,95,.32);box-shadow:var(--shadow-lg);transform:translateY(-4px)}
.div-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,var(--coral),var(--coral-soft));
  transform:scaleX(0);transform-origin:left;
  transition:transform var(--t2) var(--ease);
}
.div-card:hover::before{transform:scaleX(1)}

/* Sunrise panel */
.div-card-sunrise{height:128px;position:relative;overflow:hidden;border-bottom:1px solid var(--border-2)}
.div-card-sunrise svg{width:100%;height:100%}

.div-card-body{padding:1.5rem 1.5rem 2.25rem}
.div-card-tag{font-family:var(--jp);font-size:10px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--text-3);margin-bottom:6px}
.div-card-tag strong{color:var(--coral)}
.div-card-h{font-family:var(--serif);font-size:19px;font-weight:300;color:var(--navy);margin-bottom:.75rem;letter-spacing:-.005em}
.div-card-p{font-size:13.5px;color:var(--text-3);line-height:1.68}

.div-card-arrow{
  position:absolute;bottom:1.375rem;right:1.375rem;
  width:26px;height:26px;border-radius:50%;
  background:var(--paper);border:1px solid var(--border);
  display:flex;align-items:center;justify-content:center;
  transition:all var(--t2);
}
.div-card:hover .div-card-arrow{background:var(--coral);border-color:var(--coral)}
.div-card-arrow svg{width:11px;height:11px;stroke:var(--navy);fill:none;stroke-width:2;transition:stroke var(--t1)}
.div-card:hover .div-card-arrow svg{stroke:#fff}

/* ================================================================
   GEO SECTION
   ================================================================ */
.geo-section{background:var(--navy);padding:5.5rem 0}
.geo-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start}
@media(max-width:900px){.geo-grid{grid-template-columns:1fr}}

.loc-list{display:flex;flex-direction:column;gap:1rem;margin-top:2rem}
.loc-item{
  display:flex;align-items:flex-start;gap:1rem;
  padding:1rem 1.25rem;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.07);
  border-radius:var(--r2);
  transition:background var(--t1);
}
.loc-item:hover{background:rgba(255,255,255,.07)}
.loc-pin{
  width:38px;height:38px;border-radius:50%;flex-shrink:0;
  background:rgba(234,122,95,.14);border:1px solid rgba(234,122,95,.24);
  display:flex;align-items:center;justify-content:center;
}
.loc-pin svg{width:16px;height:16px;stroke:var(--coral-soft);fill:none;stroke-width:1.8}
.loc-name{font-size:14px;font-weight:600;color:#fff}
.loc-city{font-size:12px;color:rgba(255,255,255,.38);margin-top:1px}
.loc-role{font-family:var(--jp);font-size:10px;color:var(--coral-soft);letter-spacing:.1em;text-transform:uppercase;margin-top:6px}

.map-box{
  border-radius:var(--r4);overflow:hidden;
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);
  height:360px;display:flex;align-items:center;justify-content:center;
}

/* ================================================================
   INVESTOR / FINANCIALS
   ================================================================ */
.fin-card{background:var(--paper);border:1px solid var(--border);border-radius:var(--r4);padding:2rem}
.fin-card h3{font-family:var(--serif);font-size:18px;font-weight:300;color:var(--navy);margin-bottom:1.25rem}
.fin-row{display:flex;justify-content:space-between;align-items:baseline;padding:9px 0;border-bottom:1px solid var(--border)}
.fin-row:last-child{border-bottom:none}
.fin-l{font-size:13px;color:var(--text-3)}
.fin-v{font-size:15px;font-weight:600;color:var(--navy)}
.fin-v.up{color:#0e7a50}

.metric-box{text-align:center;padding:2rem}
.metric-n{font-family:var(--serif);font-size:50px;font-weight:200;color:var(--coral);line-height:1}
.metric-l{font-size:12px;color:var(--text-3);margin-top:6px;letter-spacing:.04em}

/* Roadmap */
.rm-track{display:flex;justify-content:space-between;position:relative;margin:2rem 0}
.rm-track::before{content:'';position:absolute;top:21px;left:22px;right:22px;height:1px;background:linear-gradient(90deg,var(--coral),var(--coral-soft),rgba(7,26,74,.18))}
.rm-step{flex:1;text-align:center;position:relative;padding:0 .5rem}
.rm-dot{width:42px;height:42px;border-radius:50%;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;font-family:var(--jp);position:relative;z-index:1}
.rm-dot.done{background:var(--coral);color:#fff}
.rm-dot.now{background:var(--navy);color:#fff;border:2px solid var(--coral)}
.rm-dot.future{background:var(--paper);color:var(--text-3);border:1px solid var(--border)}
.rm-year{font-size:12px;font-weight:700;color:var(--navy);margin-bottom:4px;font-family:var(--jp)}
.rm-desc{font-size:11.5px;color:var(--text-3);line-height:1.5}

/* Download rows */
.dl-row{display:flex;align-items:center;gap:1rem;padding:13px 1.25rem;background:var(--paper);border:1px solid var(--border);border-radius:var(--r2);margin-bottom:10px;cursor:pointer;transition:all var(--t1)}
.dl-row:hover{border-color:var(--coral-soft);background:var(--white)}
.dl-icon{width:38px;height:38px;background:var(--white);border-radius:var(--r1);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.dl-icon svg{width:18px;height:18px;stroke:var(--navy);fill:none;stroke-width:1.8}
.dl-name{font-size:13.5px;font-weight:600;color:var(--navy);flex:1}
.dl-meta{font-size:11.5px;color:var(--text-3)}
.dl-arr{font-size:16px;color:var(--coral)}

/* ================================================================
   FEATURE CARDS
   ================================================================ */
.feat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(255px,1fr));gap:1.5rem}
.feat-card{background:var(--paper);border:1px solid var(--border);border-radius:var(--r3);padding:2rem;transition:all var(--t2)}
.feat-card:hover{box-shadow:var(--shadow-md);transform:translateY(-2px);border-color:rgba(234,122,95,.2)}
.feat-icon{width:48px;height:48px;margin-bottom:1.25rem}
.feat-icon svg{width:48px;height:48px;stroke:var(--navy);fill:none;stroke-width:1.6}
.feat-card h3{font-size:16px;font-weight:600;color:var(--navy);margin-bottom:.625rem}
.feat-card p{font-size:14px;color:var(--text-2);line-height:1.72}

/* ================================================================
   PRODUCT CATALOG
   ================================================================ */
.search-row{display:flex;align-items:center;gap:1.25rem;flex-wrap:wrap;margin-bottom:1.75rem}
.search-field{display:flex;align-items:center;background:var(--white);border:1px solid var(--border);border-radius:var(--rfull);padding:10px 18px;gap:10px;max-width:400px;flex:1;min-width:220px}
.search-field svg{width:15px;height:15px;stroke:var(--text-4);fill:none;stroke-width:2;flex-shrink:0}
.search-field input{flex:1;border:none;outline:none;font-size:14px;font-family:var(--sans);color:var(--text-1);background:transparent}
.search-field input::placeholder{color:var(--text-4)}
.filter-row{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:2rem}
.filter-chip{background:var(--paper);border:1px solid var(--border);color:var(--text-2);font-size:13px;font-weight:500;padding:7px 16px;border-radius:var(--rfull);cursor:pointer;transition:all var(--t1);font-family:var(--sans)}
.filter-chip:hover,.filter-chip.active{background:var(--navy);color:#fff;border-color:var(--navy)}

.product-card{background:var(--white);border:1px solid var(--border);border-radius:var(--r3);overflow:hidden;transition:all var(--t2)}
.product-card:hover{box-shadow:var(--shadow-md);transform:translateY(-2px);border-color:rgba(234,122,95,.25)}
.product-thumb{height:150px;background:var(--paper);display:flex;align-items:center;justify-content:center;border-bottom:1px solid var(--border-2)}
.product-thumb svg{width:54px;height:54px}
.product-body{padding:1.125rem 1.125rem 1.5rem}
.product-name{font-size:14px;font-weight:600;color:var(--navy);margin-bottom:3px}
.product-cat{font-size:11.5px;color:var(--text-3);margin-bottom:.625rem}
.product-price{font-size:17px;font-weight:600;color:var(--coral);margin-bottom:.625rem}
.product-btn{display:block;width:100%;text-align:center;background:var(--navy);color:#fff;font-size:12.5px;font-weight:600;padding:9px;border-radius:var(--r1);border:none;cursor:pointer;transition:background var(--t1);letter-spacing:.04em;font-family:var(--sans)}
.product-btn:hover{background:var(--coral)}

/* ================================================================
   TABS
   ================================================================ */
.tab-nav{display:flex;gap:4px;background:var(--paper);border-radius:var(--r2);padding:4px;width:fit-content;margin-bottom:2rem}
.tab-btn{background:none;border:none;font-size:13px;font-weight:500;color:var(--text-3);padding:8px 18px;border-radius:10px;cursor:pointer;transition:all var(--t1);font-family:var(--sans)}
.tab-btn.active{background:var(--white);color:var(--navy);font-weight:600;box-shadow:var(--shadow-sm)}
.tab-pane{display:none}
.tab-pane.active{display:block}

/* ================================================================
   CONTACT FORM
   ================================================================ */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:4.5rem;align-items:start}
@media(max-width:768px){.contact-grid{grid-template-columns:1fr}}
.contact-form-box{background:var(--paper);border-radius:var(--r4);padding:2.5rem}
.contact-form-box h3{font-family:var(--serif);font-size:20px;font-weight:300;color:var(--navy);margin-bottom:1.5rem}
.form-group{margin-bottom:1.25rem}
.form-group label{display:block;font-family:var(--jp);font-size:10.5px;font-weight:500;color:var(--navy);letter-spacing:.1em;text-transform:uppercase;margin-bottom:7px}
.form-group input,.form-group textarea,.form-group select{width:100%;padding:11px 15px;border:1px solid var(--border);border-radius:var(--r2);font-size:14px;font-family:var(--sans);color:var(--text-1);background:var(--white);outline:none;transition:border-color var(--t1);-webkit-appearance:none}
.form-group input:focus,.form-group textarea:focus,.form-group select:focus{border-color:var(--coral)}
.form-group textarea{resize:vertical;min-height:120px}
.form-submit{width:100%;background:var(--navy);color:#fff;border:none;font-size:14px;font-weight:600;padding:14px;border-radius:var(--r2);cursor:pointer;font-family:var(--sans);transition:background var(--t1);margin-top:.375rem;letter-spacing:.04em}
.form-submit:hover{background:var(--coral)}

/* Contact info */
.contact-info h3{font-family:var(--serif);font-size:30px;font-weight:200;color:var(--navy);margin-bottom:1rem;letter-spacing:-.01em}
.contact-info p.lead{font-size:15px;color:var(--text-2);line-height:1.8;margin-bottom:2rem}
.contact-item{display:flex;gap:1rem;align-items:flex-start;margin-bottom:1.5rem}
.contact-icon{width:40px;height:40px;border-radius:var(--r1);background:var(--paper);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.contact-icon svg{width:18px;height:18px;stroke:var(--navy);fill:none;stroke-width:1.8}
.contact-item h4{font-size:13px;font-weight:700;color:var(--navy);margin-bottom:2px}
.contact-item p{font-size:13px;color:var(--text-3);margin:0}

/* ================================================================
   DARK SECTION (Digital / AI)
   ================================================================ */
.dark-section{background:var(--navy-deep);padding:5.5rem 0}
.dark-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.5rem}
.dark-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:var(--r4);padding:2rem;color:#fff;transition:background var(--t2)}
.dark-card:hover{background:rgba(255,255,255,.06)}
.dark-card-n{font-family:var(--serif);font-size:38px;color:var(--coral-soft);line-height:1;margin-bottom:.75rem;font-weight:200}
.dark-card h3{font-size:16px;font-weight:600;color:#fff;margin-bottom:.625rem}
.dark-card p{font-size:13.5px;color:rgba(255,255,255,.46);line-height:1.72}

/* ================================================================
   PIPELINE
   ================================================================ */
.pipeline{display:flex;align-items:stretch;border-radius:var(--r2);overflow:hidden;border:1px solid var(--border)}
.pipe-step{flex:1;padding:1.5rem 1rem;background:var(--paper);border-right:1px solid var(--border);text-align:center;position:relative}
.pipe-step:last-child{border-right:none}
.pipe-step::after{content:'›';position:absolute;right:-10px;top:50%;transform:translateY(-50%);font-size:18px;color:var(--coral-soft);opacity:.5;z-index:1}
.pipe-step:last-child::after{display:none}
.pipe-step h4{font-size:13px;font-weight:700;color:var(--navy);margin-bottom:4px}
.pipe-step p{font-size:11px;color:var(--text-3)}

/* ================================================================
   BADGES & TAGS
   ================================================================ */
.badge{display:inline-flex;align-items:center;font-family:var(--jp);font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 12px;border-radius:var(--rfull)}
.badge-coral{background:rgba(234,122,95,.1);color:var(--coral);border:1px solid rgba(234,122,95,.2)}
.badge-navy{background:rgba(7,26,74,.08);color:var(--navy);border:1px solid rgba(7,26,74,.12)}
.badge-green{background:rgba(14,122,80,.1);color:#0e7a50;border:1px solid rgba(14,122,80,.2)}

/* ================================================================
   PROMO BANNERS
   ================================================================ */
.promo-banner{background:linear-gradient(135deg,var(--navy),var(--navy-mid));border-radius:var(--r4);padding:2rem;color:#fff;position:relative;overflow:hidden}
.promo-banner::before{content:'';position:absolute;bottom:-40px;right:-40px;width:150px;height:150px;border-radius:50%;background:rgba(234,122,95,.08)}
.promo-banner h3{font-size:18px;font-weight:700;margin-bottom:6px}
.promo-banner p{font-size:13px;color:rgba(255,255,255,.55);margin-bottom:1.25rem}

/* ================================================================
   FOOTER
   ================================================================ */
.site-footer{background:var(--ink);padding:4.5rem 0 2.5rem}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3.5rem}
@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr}}
@media(max-width:540px){.footer-grid{grid-template-columns:1fr}}
.footer-brand p{font-size:13px;color:rgba(255,255,255,.38);line-height:1.78;margin-top:1rem;max-width:255px}
.footer-tagline{margin-top:1.25rem;font-family:var(--jp);font-size:9.5px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.18)}
.footer-col h4{font-family:var(--jp);font-size:9.5px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.22);margin-bottom:1rem}
.footer-col a{display:block;font-size:13px;color:rgba(255,255,255,.46);margin-bottom:8px;transition:color var(--t1)}
.footer-col a:hover{color:var(--coral-soft)}
.footer-bottom{border-top:1px solid rgba(255,255,255,.055);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center}
.footer-bottom p{font-size:12px;color:rgba(255,255,255,.22)}
@media(max-width:540px){.footer-bottom{flex-direction:column;gap:.75rem;text-align:center}}

/* ================================================================
   COOKIE BAR
   ================================================================ */
#cookieBar{
  position:fixed;bottom:0;left:0;right:0;z-index:9999;
  background:rgba(9,16,31,.97);color:rgba(255,255,255,.68);
  font-size:13px;padding:14px 24px;
  display:flex;align-items:center;gap:1rem;
  border-top:1px solid rgba(255,255,255,.08);
}
#cookieBar span{flex:1}
.cookie-accept{background:var(--coral);border:none;color:#fff;font-size:12.5px;font-weight:600;padding:8px 18px;border-radius:var(--rfull);cursor:pointer;font-family:var(--sans);white-space:nowrap}

/* ================================================================
   REDUCE MOTION
   ================================================================ */
@media(prefers-reduced-motion:reduce){
  .planet-arm,.planet-node,.sun-svg,.sg1,.sg2,.sg3,.particle{animation:none}
}

/* ================================================================
   MISC UTILITIES
   ================================================================ */
.text-center{text-align:center}
.mt-2{margin-top:1rem}.mt-4{margin-top:2rem}.mt-6{margin-top:3rem}
.mb-4{margin-bottom:2rem}
.flex{display:flex}.flex-wrap{flex-wrap:wrap}.gap-2{gap:1rem}.gap-3{gap:1.5rem}
.align-center{align-items:center}.justify-center{justify-content:center}

/* ================================================================
   ICON COLOR UTILITIES (used with svg_lib icons)
   ================================================================ */
.icon-navy{color:var(--navy)}
.icon-coral{color:var(--coral)}
.icon-white{color:#fff}
.icon-soft{color:var(--coral-soft)}

/* Feature/contact/product icon wrappers ensure consistent stroke color */
.feat-icon svg,.contact-icon svg,.dl-icon svg,.loc-pin svg{stroke:currentColor}
.feat-icon{color:var(--navy)}
.contact-icon{color:var(--navy)}
.dl-icon{color:var(--navy)}
.loc-pin{color:var(--coral-soft)}
.product-thumb svg{stroke:var(--navy);color:var(--navy)}
.div-card-arrow svg{stroke:currentColor;color:var(--navy)}
.div-card:hover .div-card-arrow svg{color:#fff}

/* Search icon */
.search-field svg{stroke:currentColor;color:var(--text-4)}

/* Dark card icon (digital) */
.dark-card .feat-icon{color:var(--coral-soft)}

/* Pipeline / hero planet frame */
.div-hero-art svg{display:block}

/* ================================================================
   EXECUTIVE CONTACT GRID — premium info cards
   ================================================================ */
.exec-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:1.25rem}
.exec-card{
  background:var(--white);border:1px solid var(--border);
  border-radius:var(--r3);padding:1.75rem 1.5rem;
  text-align:left;transition:all var(--t2) var(--ease);
  position:relative;overflow:hidden;
}
.exec-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,var(--coral),var(--coral-soft));
  transform:scaleX(0);transform-origin:left;transition:transform var(--t2) var(--ease);
}
.exec-card:hover::before{transform:scaleX(1)}
.exec-card:hover{box-shadow:var(--shadow-md);transform:translateY(-3px);border-color:rgba(234,122,95,.25)}
.exec-icon{
  width:44px;height:44px;border-radius:var(--r2);
  background:var(--paper);border:1px solid var(--border);
  display:flex;align-items:center;justify-content:center;
  color:var(--coral);margin-bottom:1.1rem;
}
.exec-icon svg{stroke:currentColor}
.exec-label{
  font-family:var(--jp);font-size:10px;font-weight:500;letter-spacing:.12em;
  text-transform:uppercase;color:var(--text-3);margin-bottom:.5rem;
}
.exec-value{font-size:15px;font-weight:600;color:var(--navy);line-height:1.4}

/* ================================================================
   INTERNATIONAL PRESENCE SECTION — premium dark interface
   ================================================================ */
.presence-section{
  background:var(--navy-deep);
  padding:5.5rem 0;
  position:relative;overflow:hidden;
}
.presence-section .seigaiha{position:absolute;inset:0}
.presence-map-frame{
  position:relative;z-index:2;
  max-width:880px;margin:3rem auto 0;
  border-radius:var(--r4);overflow:hidden;
  background:rgba(255,255,255,.025);
  border:1px solid rgba(255,255,255,.08);
  padding:1rem;
}
.presence-tiers{
  position:relative;z-index:2;
  display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:1.25rem;margin-top:3rem;max-width:1000px;margin-left:auto;margin-right:auto;
}
.presence-tier{
  text-align:center;padding:1.5rem 1rem;
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.07);
  border-radius:var(--r3);
  transition:background var(--t2);
}
.presence-tier:hover{background:rgba(255,255,255,.06)}
.presence-tier-icon{
  width:44px;height:44px;margin:0 auto .9rem;
  color:var(--coral-soft);display:flex;align-items:center;justify-content:center;
}
.presence-tier-icon svg{stroke:currentColor}
.presence-tier-h{font-size:14px;font-weight:600;color:#fff;margin-bottom:.4rem}
.presence-tier-p{font-size:12px;color:rgba(255,255,255,.42);line-height:1.6}

@media(max-width:768px){
  .presence-section{padding:3.5rem 0}
  .presence-map-frame{margin-top:2rem}
  .presence-tiers{margin-top:2rem}
}

/* ================================================================
   INITIATIVE PANEL — I-LACH / Seraph strategic partnership blocks
   ================================================================ */
.initiative-panel{
  background:var(--white);
  border:1px solid var(--border);
  border-radius:var(--r4);
  padding:2.5rem;
  max-width:880px;margin:0 auto;
}
.initiative-badge{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem}
.initiative-badge-icon{
  width:52px;height:52px;border-radius:var(--r2);flex-shrink:0;
  background:var(--paper);border:1px solid var(--border);
  display:flex;align-items:center;justify-content:center;color:var(--coral);
}
.initiative-badge-icon svg{stroke:currentColor}
.initiative-title{font-family:var(--serif);font-size:24px;font-weight:300;color:var(--navy);letter-spacing:-.01em}
.initiative-lead{font-size:15px;color:var(--text-2);line-height:1.8;margin-bottom:1.5rem}
.initiative-lead strong{color:var(--navy);font-weight:600}
.initiative-grid{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:1.75rem}
.initiative-tag{
  font-size:12.5px;font-weight:500;color:var(--text-2);
  background:var(--paper);border:1px solid var(--border);
  padding:7px 14px;border-radius:var(--rfull);
}
.initiative-link{
  display:inline-flex;align-items:center;gap:8px;
  font-size:13.5px;font-weight:600;color:var(--coral);
  transition:gap var(--t1);
}
.initiative-link:hover{gap:12px}
.initiative-link-arrow{display:flex;align-items:center;color:var(--coral)}
.initiative-link-arrow svg{stroke:currentColor;width:14px;height:14px}

@media(max-width:600px){
  .initiative-panel{padding:1.75rem}
  .initiative-badge{flex-direction:row;align-items:flex-start}
  .initiative-title{font-size:20px}
}

/* ================================================================
   FORM FEEDBACK MESSAGES — Formspree success / error
   ================================================================ */
.form-msg-ok,
.form-msg-err {
  display: none;
  border-radius: var(--r2);
  padding: .875rem 1.25rem;
  font-size: 14px;
  font-weight: 500;
  margin-top: 1rem;
  line-height: 1.55;
}
.form-msg-ok  { background: rgba(14,122,80,.10); color: #0a5c3c; border: 1px solid rgba(14,122,80,.22); }
.form-msg-err { background: rgba(200,60,40,.08);  color: #8a2010; border: 1px solid rgba(200,60,40,.20); }
