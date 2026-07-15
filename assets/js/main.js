/* =============================================================================
   main.js — renders the page from data.js and builds the map.
   You shouldn't need to edit this file. Content lives in data.js.
   ========================================================================== */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? "" : s); };
  var slug = function (s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-"); };

  /* ------------------------------------------------------------- ICON SETS */
  var RESEARCH_ICONS = {
    raster: '<path d="M4 10 18 5 30 10 44 5v33L30 43 18 38 4 43Z"/><path d="M18 5v33M30 10v33" opacity=".45"/><rect x="22" y="18" width="12" height="9" stroke="#C42E63" stroke-width="2.2"/>',
    water:  '<path d="M24 6c7 9 12 15 12 22a12 12 0 0 1-24 0c0-7 5-13 12-22Z"/><path d="M18 30c2 3 10 3 12 0" stroke="#0B8A8F"/>',
    network:'<circle cx="10" cy="14" r="4"/><circle cx="38" cy="10" r="4"/><circle cx="24" cy="30" r="4" stroke="#C42E63"/><circle cx="14" cy="40" r="3.5"/><path d="M13 16 21 28M35 13 27 27M22 33 16 37" opacity=".65"/>',
    globe:  '<circle cx="24" cy="24" r="18"/><path d="M6 24h36M24 6c6 6 6 30 0 36M24 6c-6 6-6 30 0 36" opacity=".5"/><circle cx="24" cy="24" r="3" fill="#FFC24B" stroke="none"/>'
  };

  // classified-raster thumbnail, generated as contiguous regions (not noise)
  function lulcThumb() {
    var C = ["#FF5C8A", "#FF87A9", "#E23E6E", "#1FB7C4", "#0E1236", "#FFC24B"];
    var cols = 32, rows = 20, cw = 10, ch = 10, out = "";
    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
        var f = Math.sin(x * 0.34) + Math.cos(y * 0.5 + x * 0.12) + Math.sin((x + y) * 0.22) + 2;
        var i = Math.min(C.length - 2, Math.max(0, Math.floor(f / 4 * (C.length - 1))));
        var c = (Math.sin(x * 1.7 + y * 2.3) > 0.988) ? C[5] : C[i];
        out += '<rect x="' + (x * cw) + '" y="' + (y * ch) + '" width="' + cw + '" height="' + ch + '" fill="' + c + '"/>';
      }
    }
    return '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">' + out + '</svg>';
  }

  var THUMBS = {
    lulc: lulcThumb(),
    fields:
      '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#1FB7C4"/>' +
      '<rect x="10" y="12" width="96" height="62" fill="#FF5C8A"/><rect x="112" y="12" width="70" height="40" fill="#0E1236"/>' +
      '<rect x="112" y="58" width="70" height="46" fill="#FF87A9"/><rect x="188" y="12" width="80" height="48" fill="#E23E6E"/>' +
      '<rect x="274" y="12" width="38" height="90" fill="#FF5C8A"/><rect x="10" y="82" width="60" height="66" fill="#FF87A9"/>' +
      '<circle cx="228" cy="104" r="34" fill="#FF5C8A"/><circle cx="292" cy="152" r="26" fill="#E23E6E"/>' +
      '<path d="M0 160 C70 152 96 190 160 186 C224 182 240 200 320 194 L320 200 L0 200 Z" fill="#0E1236"/>' +
      '<rect x="96" y="112" width="26" height="14" fill="#FFC24B"/><rect x="96" y="130" width="26" height="14" fill="#FFC24B"/>' +
      '<rect x="90" y="106" width="46" height="46" fill="none" stroke="#FFC24B" stroke-width="2" stroke-dasharray="4 3"/></svg>',
    terrain:
      '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#141138"/>' +
      '<g fill="none" stroke="#FF5C8A" stroke-width="1.6" opacity=".85">' +
      '<path d="M-10 150 C60 120 90 168 160 140 C230 112 260 158 330 130"/><path d="M-10 130 C60 100 90 148 160 120 C230 92 260 138 330 110"/>' +
      '<path d="M-10 110 C60 80 90 128 160 100 C230 72 260 118 330 90"/><path d="M-10 90 C60 60 90 108 160 80 C230 52 260 98 330 70"/>' +
      '<path d="M-10 70 C60 40 90 88 160 60 C230 32 260 78 330 50" stroke="#FFC24B"/>' +
      '<path d="M-10 170 C60 140 90 188 160 160 C230 132 260 178 330 150" stroke="#19C7B6"/></g>' +
      '<path d="M150 44 L166 92 L134 92 Z" fill="#FFC24B" opacity=".9"/><circle cx="150" cy="104" r="5" fill="#FF5C8A"/></svg>',
    globe:
      '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#0E1236"/>' +
      '<g fill="none" stroke="#19C7B6" stroke-width="1.3" opacity=".6"><circle cx="160" cy="100" r="76"/>' +
      '<ellipse cx="160" cy="100" rx="30" ry="76"/><ellipse cx="160" cy="100" rx="56" ry="76"/>' +
      '<path d="M84 100h152M96 62h128M96 138h128"/></g>' +
      '<circle cx="132" cy="76" r="7" fill="#FF5C8A"/><circle cx="192" cy="118" r="7" fill="#FFC24B"/>' +
      '<circle cx="176" cy="66" r="5" fill="#FF87A9"/><circle cx="118" cy="128" r="5" fill="#19C7B6"/></svg>',
    wave:
      '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#141138"/>' +
      '<g stroke="#FF5C8A" stroke-width="4" stroke-linecap="round">' +
      '<path d="M14 100h0M30 84v32M46 68v64M62 92v16M78 58v84M94 76v48M110 44v112M126 88v24M142 62v76M158 30v140"/>' +
      '<path d="M174 70v60M190 50v100M206 86v28M222 60v80M238 40v120M254 80v40M270 66v68M286 90v20M302 100h0" stroke="#19C7B6"/></g>' +
      '<circle cx="160" cy="100" r="9" fill="#FFC24B"/></svg>',
    water:
      '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#1FB7C4"/>' +
      '<path d="M0 40 C80 44 100 96 170 104 C240 112 260 160 320 156 L320 190 C255 194 232 146 165 138 C98 130 78 78 0 74 Z" fill="#0E1236"/>' +
      '<g fill="#FF5C8A" opacity=".95"><ellipse cx="120" cy="86" rx="17" ry="8"/><ellipse cx="168" cy="112" rx="13" ry="6"/>' +
      '<ellipse cx="214" cy="128" rx="19" ry="8"/><ellipse cx="262" cy="150" rx="11" ry="5"/></g>' +
      '<rect x="196" y="112" width="46" height="34" fill="none" stroke="#FFC24B" stroke-width="2" stroke-dasharray="4 3"/>' +
      '<rect x="272" y="30" width="34" height="26" fill="#FFC24B"/></svg>',
    talk:
      '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#141138"/>' +
      '<rect x="66" y="26" width="188" height="112" fill="#F7F6FB"/>' +
      '<rect x="84" y="46" width="80" height="8" fill="#C42E63"/>' +
      '<g fill="#19C7B6"><rect x="84" y="108" width="18" height="14"/><rect x="108" y="94" width="18" height="28"/>' +
      '<rect x="132" y="78" width="18" height="44"/><rect x="156" y="66" width="18" height="56"/></g>' +
      '<g fill="#565175"><rect x="188" y="70" width="48" height="5"/><rect x="188" y="82" width="48" height="5"/><rect x="188" y="94" width="34" height="5"/></g>' +
      '<circle cx="160" cy="164" r="12" fill="#FFC24B"/><path d="M136 190c4-12 12-18 24-18s20 6 24 18Z" fill="#FF5C8A"/></svg>',
    essay:
      '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#0E1236"/>' +
      '<rect x="70" y="18" width="180" height="164" fill="#F7F6FB"/>' +
      '<rect x="88" y="40" width="94" height="9" fill="#C42E63"/>' +
      '<g fill="#565175">' +
      '<rect x="88" y="66" width="144" height="5"/><rect x="88" y="80" width="144" height="5"/><rect x="88" y="94" width="120" height="5"/>' +
      '<rect x="88" y="116" width="144" height="5"/><rect x="88" y="130" width="144" height="5"/><rect x="88" y="144" width="98" height="5"/></g>' +
      '<rect x="88" y="160" width="40" height="6" fill="#19C7B6"/></svg>'
  };

  /* ----------------------------------------------------------------- HERO */
  function renderHero() {
    var p = SITE.profile, el = $("hero-copy");
    if (!el) return;
    var brand = $("brand-name");
    if (brand) brand.textContent = p.firstName + " " + p.lastName;

    var meta = (p.meta || []).map(function (m) {
      return '<span><b>' + esc(m.label) + '</b> ' + esc(m.value) + '</span>';
    }).join("");

    var L = p.links || {};
    var btns = '<a class="btn solid" href="mailto:' + esc(p.email) + '">✉ Email</a>';
    if (p.cv)           btns += '<a class="btn" href="' + esc(p.cv) + '" target="_blank" rel="noopener">CV ↗</a>';
    if (L.linkedin)     btns += '<a class="btn" href="' + esc(L.linkedin) + '" target="_blank" rel="noopener">LinkedIn ↗</a>';
    if (L.scholar)      btns += '<a class="btn" href="' + esc(L.scholar) + '" target="_blank" rel="noopener">Scholar ↗</a>';
    if (L.researchgate) btns += '<a class="btn" href="' + esc(L.researchgate) + '" target="_blank" rel="noopener">ResearchGate ↗</a>';

    el.innerHTML =
      '<div class="hero-eyebrow">' + esc(p.eyebrow) + '</div>' +
      '<h1>' + esc(p.firstName) + '<br><em>' + esc(p.lastName) + '</em></h1>' +
      '<p class="role">' + esc(p.role) + '</p>' +
      '<p class="thesis">' + esc(p.thesis) + '</p>' +
      (p.quip ? '<span class="quip">' + esc(p.quip) + '</span>' : "") +
      '<div class="coords">' + meta + '</div>' +
      '<div class="cta-row">' + btns + '</div>';
  }

  /* -------------------------------------------------- SCIENCE COMMUNICATION */
  function renderSciComm() {
    var grid = $("sc-grid"), bar = $("sc-filters");
    if (!grid) return;
    var items = SITE.scicomm || [];

    // filter buttons, generated from the types actually present
    if (bar) {
      var types = [];
      items.forEach(function (i) { if (types.indexOf(i.type) === -1) types.push(i.type); });
      bar.innerHTML = '<button class="sc-filter active" data-f="all">All <span>' + items.length + '</span></button>' +
        types.map(function (t) {
          var n = items.filter(function (i) { return i.type === t; }).length;
          return '<button class="sc-filter" data-f="' + slug(t) + '">' + esc(t) + ' <span>' + n + '</span></button>';
        }).join("");
    }

    grid.innerHTML = items.map(function (d, i) {
      // accept either links:[{label,url}] or a single url/linkLabel
      var links = (d.links || []).filter(function (l) { return l && l.url && l.url.trim().length; });
      if (!links.length && d.url && d.url.trim().length) links = [{ label: d.linkLabel || "Open ↗", url: d.url }];
      var live = links.length > 0;
      var chips = (d.meta || []).map(function (m) { return '<span class="od-chip">' + esc(m) + '</span>'; }).join("");
      var actions = "";
      if (links.length) {
        actions += links.map(function (l) {
          return '<a class="od-go" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
        }).join("");
      } else if (d.linkLabel) actions += '<span class="od-pending">Add URL in data.js</span>';
      if (d.citation && d.citation.trim().length) {
        actions += '<button class="od-cite" type="button" data-i="' + i + '">Copy citation</button>';
      }
      return '<div class="od-card' + (live ? " live" : "") + '" data-type="' + slug(d.type) + '">' +
          '<div class="od-thumb">' + (THUMBS[d.thumb] || THUMBS.lulc) +
            '<span class="od-badge t-' + slug(d.type) + '">' + esc(d.type) + '</span>' +
          '</div>' +
          '<div class="od-body">' +
            '<span class="od-kicker">' + esc(d.kicker) + '</span>' +
            '<h3>' + esc(d.title) + '</h3>' +
            (chips ? '<div class="od-chips">' + chips + '</div>' : "") +
            '<p>' + esc(d.blurb) + '</p>' +
            (actions ? '<div class="od-actions">' + actions + '</div>' : "") +
          '</div>' +
        '</div>';
    }).join("");

    // copy-citation
    grid.querySelectorAll(".od-cite").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var cite = SITE.scicomm[+btn.getAttribute("data-i")].citation;
        var done = function () {
          var t = btn.textContent;
          btn.textContent = "Copied ✓"; btn.classList.add("ok");
          setTimeout(function () { btn.textContent = t; btn.classList.remove("ok"); }, 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(cite).then(done, function () { window.prompt("Copy the citation:", cite); });
        } else { window.prompt("Copy the citation:", cite); }
      });
    });

    // filtering
    if (bar) {
      bar.querySelectorAll(".sc-filter").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var f = btn.getAttribute("data-f");
          bar.querySelectorAll(".sc-filter").forEach(function (b) { b.classList.remove("active"); });
          btn.classList.add("active");
          grid.querySelectorAll(".od-card").forEach(function (c) {
            c.style.display = (f === "all" || c.getAttribute("data-type") === f) ? "" : "none";
          });
        });
      });
    }
  }

  /* ---------------------------------------------------------------- ABOUT */
  function renderAbout() {
    var a = SITE.about, el = $("about-grid");
    if (!el) return;
    var tk = (a.toolkit || []).map(function (t, i, arr) {
      return '<span>' + esc(t) + '</span>' + (i < arr.length - 1 ? '<span class="d">/</span>' : "");
    }).join("");
    el.innerHTML =
      '<p class="lead">' + esc(a.lead) + '</p>' +
      '<div>' + (a.paragraphs || []).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("") +
        '<div class="toolkit"><b>Toolkit</b>' + tk + '</div></div>';
  }

  /* ------------------------------------------------------------- RESEARCH */
  function renderResearch() {
    var el = $("research-cards");
    if (!el) return;
    el.innerHTML = (SITE.research || []).map(function (r) {
      return '<div class="card">' +
        '<svg class="card-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6">' +
        (RESEARCH_ICONS[r.icon] || RESEARCH_ICONS.globe) + '</svg>' +
        '<h3>' + esc(r.title) + '</h3><p>' + esc(r.blurb) + '</p>' +
        (r.tag ? '<span class="tag">' + esc(r.tag) + '</span>' : "") +
        '</div>';
    }).join("");
  }

  /* --------------------------------------------------------- PUBLICATIONS */
  function renderPubs() {
    var el = $("pub-list");
    if (!el) return;
    el.innerHTML = (SITE.publications || []).map(function (p) {
      return '<div class="pub"><div class="yr">' + esc(p.year) + '</div><div>' +
        '<p class="title">' + esc(p.title) + '</p>' +
        '<p class="authors">' + p.authors + '</p>' +
        '<p class="venue">' + esc(p.venue) + '</p>' +
        (p.url ? '<a class="doi" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.linkLabel || "Read ↗") + '</a>' : "") +
        '</div></div>';
    }).join("");
  }

  /* --------------------------------------------------------------- HONORS */
  function renderHonors() {
    var el = $("honor-grid");
    if (!el) return;
    el.innerHTML = (SITE.honors || []).map(function (h) {
      return '<div class="honor"><div class="hy">' + esc(h.tag) + '</div>' +
        '<h3>' + esc(h.title) + '</h3><p>' + esc(h.blurb) + '</p></div>';
    }).join("");
  }

  /* ------------------------------------------ EDUCATION — GUIDED MAP TOUR */
  var TOUR = { map: null, markers: [], i: -1 };

  function renderTourList() {
    var el = $("tour-list");
    if (!el) return;
    el.innerHTML = (SITE.qualifications || []).map(function (q, i) {
      return '<button class="stop" type="button" data-i="' + i + '">' +
          '<span class="stop-n">' + (i + 1) + '</span>' +
          '<span class="stop-body">' +
            '<span class="stop-deg">' + esc(q.degree) + '</span>' +
            '<span class="stop-school">' + esc(q.school) + '</span>' +
            (q.note ? '<span class="stop-note">' + esc(q.note) + '</span>' : "") +
            '<span class="stop-place">' + esc(q.place) + '</span>' +
          '</span>' +
        '</button>';
    }).join("");
    el.querySelectorAll(".stop").forEach(function (b) {
      b.addEventListener("click", function () { goToStop(+b.getAttribute("data-i")); });
    });
  }

  function goToStop(i) {
    var Q = SITE.qualifications || [];
    if (!Q[i] || !TOUR.map) return;
    TOUR.i = i;
    document.querySelectorAll("#tour-list .stop").forEach(function (b, k) {
      b.classList.toggle("active", k === i);
    });
    TOUR.map.flyTo(Q[i].coords, 12, { duration: 1.4 });
    if (TOUR.markers[i]) TOUR.markers[i].openPopup();
    var t = $("tour-title"), c = $("tour-coords");
    if (t) t.innerHTML = "Stop " + (i + 1) + " of " + Q.length + " · <b>" + esc(Q[i].school) + "</b>";
    if (c) c.textContent = Q[i].coords[0].toFixed(3) + ", " + Q[i].coords[1].toFixed(3);
  }

  function tourOverview() {
    var Q = SITE.qualifications || [];
    if (!TOUR.map || !Q.length) return;
    TOUR.i = -1;
    document.querySelectorAll("#tour-list .stop").forEach(function (b) { b.classList.remove("active"); });
    TOUR.map.closePopup();
    TOUR.map.flyToBounds(L.latLngBounds(Q.map(function (q) { return q.coords; })).pad(0.35), { duration: 1.4 });
    var countries = [];
    Q.forEach(function (q) {
      var c2 = String(q.place).split(",").pop().trim();
      if (countries.indexOf(c2) === -1) countries.push(c2);
    });
    var total = 0;
    for (var i = 0; i < Q.length - 1; i++) total += haversine(Q[i].coords, Q[i + 1].coords);
    var t = $("tour-title"), c = $("tour-coords");
    if (t) t.innerHTML = "Overview · <b>" + Q.length + " stops, " + countries.length + " countries</b>";
    if (c) c.textContent = (Math.round(total / 100) * 100).toLocaleString() + " km travelled";
  }

  function initTourMap() {
    var el = $("tour-map");
    if (!el || typeof L === "undefined") return;
    var Q = SITE.qualifications || [];
    if (!Q.length) return;

    TOUR.map = L.map("tour-map", { scrollWheelZoom: false, attributionControl: false });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
                { maxZoom: 19, subdomains: "abcd" }).addTo(TOUR.map);
    L.control.scale({ imperial: true, metric: true, position: "bottomleft" }).addTo(TOUR.map);

    for (var j = 0; j < Q.length - 1; j++) {
      L.polyline(arc(Q[j].coords, Q[j + 1].coords),
        { color: "#C42E63", weight: 1.6, opacity: .6, dashArray: "5 6" }).addTo(TOUR.map);
    }
    TOUR.markers = Q.map(function (q, i) {
      return L.marker(q.coords, {
        icon: L.divIcon({ className: "", html: '<div class="pin">' + (i + 1) + "</div>",
                          iconSize: [22, 22], iconAnchor: [11, 11] })
      }).addTo(TOUR.map)
        .bindPopup("<strong>" + esc(q.school) + "</strong><br>" + esc(q.degree) + "<br><em>" + esc(q.place) + "</em>");
    });
    TOUR.markers.forEach(function (m, i) { m.on("click", function () { goToStop(i); }); });

    // affiliations as a second, toggleable layer — moved here from the old hero map
    var A = SITE.affiliations || [];
    var lab = SITE.mapLabels || {};
    if (A.length) {
      var aLayer = L.layerGroup();
      A.forEach(function (a) {
        L.marker(a.coords, {
          icon: L.divIcon({ className: "", html: '<div class="pin site">◆</div>',
                            iconSize: [22, 22], iconAnchor: [11, 11] })
        }).addTo(aLayer).bindPopup("<strong>" + esc(a.title) + "</strong><br>" + esc(a.blurb));
      });
      var overlays = {};
      overlays[lab.affiliations || "Affiliations"] = aLayer;
      L.control.layers(null, overlays, { collapsed: false, position: "topright" }).addTo(TOUR.map);
    }

    TOUR.map.fitBounds(L.latLngBounds(Q.map(function (q) { return q.coords; })).pad(0.35));
    tourOverview();

    var prev = $("tour-prev"), next = $("tour-next"), ov = $("tour-overview");
    if (prev) prev.addEventListener("click", function () { goToStop((TOUR.i <= 0 ? Q.length : TOUR.i) - 1); });
    if (next) next.addEventListener("click", function () { goToStop((TOUR.i + 1) % Q.length); });
    if (ov)   ov.addEventListener("click", tourOverview);

    setTimeout(function () { TOUR.map.invalidateSize(); }, 250);
  }

  /* -------------------------------------------------------------- CONTACT */
  function renderContact() {
    var c = SITE.contact, p = SITE.profile, el = $("contact-block");
    if (!el) return;
    var L = p.links || {};
    var links = "";
    if (L.linkedin)     links += '<a href="' + esc(L.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>';
    if (L.researchgate) links += '<a href="' + esc(L.researchgate) + '" target="_blank" rel="noopener">ResearchGate</a>';
    if (L.scholar)      links += '<a href="' + esc(L.scholar) + '" target="_blank" rel="noopener">Google Scholar</a>';
    if (L.orcid)        links += '<a href="' + esc(L.orcid) + '" target="_blank" rel="noopener">ORCID</a>';
    el.innerHTML =
      '<div class="legend hollow">Contact</div>' +
      '<h2 class="section-title">' + c.titleHTML + '</h2>' +
      '<p class="lead">' + esc(c.lead) + '</p>' +
      '<a class="mail" href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a>' +
      '<div class="foot-links">' + links + '</div>' +
      '<div class="colophon">' + esc(c.colophon) + '</div>';
  }

  /* ------------------------------------------------------------------ NAV */
  function initNav() {
    var nav = $("nav");
    if (!nav) return;
    function upd() { nav.classList.toggle("scrolled", window.scrollY > 60); }
    upd();
    window.addEventListener("scroll", upd, { passive: true });
  }

  /* ------------------------------------------------------------------ MAP */
  function haversine(a, b) {
    var R = 6371, toRad = function (x) { return x * Math.PI / 180; };
    var dLat = toRad(b[0] - a[0]), dLon = toRad(b[1] - a[1]);
    var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(a[0])) * Math.cos(toRad(b[0])) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.asin(Math.sqrt(s));
  }

  function arc(a, b) {
    var lat1 = a[0], lng1 = a[1], lat2 = b[0], lng2 = b[1];
    var mLat = (lat1 + lat2) / 2, mLng = (lng1 + lng2) / 2;
    var dx = lng2 - lng1, dy = lat2 - lat1;
    var lift = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.18, 22);
    var cLat = mLat + lift, cLng = mLng, pts = [];
    for (var t = 0; t <= 1.001; t += 0.02) {
      pts.push([
        (1 - t) * (1 - t) * lat1 + 2 * (1 - t) * t * cLat + t * t * lat2,
        (1 - t) * (1 - t) * lng1 + 2 * (1 - t) * t * cLng + t * t * lng2
      ]);
    }
    return pts;
  }

  /* --------------------------------------------------------------- REVEAL */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (x) {
        if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); }
      });
    }, { threshold: .1 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ------------------------------------------------------------------ RUN */
  function boot() {
    if (typeof SITE === "undefined") { console.error("data.js failed to load"); return; }
    renderHero(); renderSciComm(); renderAbout(); renderResearch();
    renderPubs(); renderHonors(); renderTourList(); renderContact();
    initNav(); initReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.addEventListener("load", initTourMap);
})();
