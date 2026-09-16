/* Motor de presentación ECREPRO — sin dependencias */
(() => {
  const esc = s => String(s ?? '');
  const blockTitle = n => (BLOCKS.find(b => b.n === n) || {}).title || '';
  const pad2 = n => String(n).padStart(2, '0');

  /* Foto con marco. Si el archivo no existe muestra un espacio reservado con la descripción. */
  /* img: nombre local (assets/img/NOMBRE.jpg) o URL completa. remote: URL de respaldo si el archivo local no existe.
     cut: URL de una foto sobre croma verde; se recorta en el navegador y se compone sobre fondo oscuro. */
  const src = img => /^https?:/.test(img) ? img : `assets/img/${img}.jpg`;
  const photo = (img, cap, cls = '', o = {}) => {
    const cut = o.cut ? `<canvas class="cut" data-cut="${o.cut}" data-anchor="${o.anchor || 'right'}"></canvas>` : '';
    if (!img && o.cut) return `<figure class="ph ${cls} keyed">${cut}<figcaption style="display:none"></figcaption></figure>`;
    const rem = o.remote ? ` data-remote="${o.remote}"` : '';
    return `<figure class="ph ${cls} ${o.cut ? 'keyed' : ''}"><img src="${src(img)}" alt=""${rem} onerror="if(this.dataset.remote){this.src=this.dataset.remote;delete this.dataset.remote}else{this.parentNode.classList.add('missing')}">${cut}<figcaption><em>Foto pendiente</em>${esc(cap)}</figcaption></figure>`;
  };
  /* Recorte de croma verde en el navegador */
  async function keyCanvas(cv) {
    try {
      const bmp = await createImageBitmap(await (await fetch(cv.dataset.cut, { mode: 'cors' })).blob());
      const W = 1920, H = 1080; cv.width = W; cv.height = H;
      const t = document.createElement('canvas'); t.width = bmp.width; t.height = bmp.height;
      const tx = t.getContext('2d'); tx.drawImage(bmp, 0, 0);
      const d = tx.getImageData(0, 0, t.width, t.height), p = d.data, w = t.width;
      for (let i = 0; i < p.length; i += 4) {
        const x = (i / 4) % w; if (x < w * .08 || x > w * .92) { p[i + 3] = 0; continue; }
        const r = p[i], g = p[i + 1], b = p[i + 2], m = Math.max(r, b), k = g - m;
        if (k > 45) p[i + 3] = 0; else if (k > 10) { p[i + 3] = Math.round(255 * (1 - (k - 10) / 35)); p[i + 1] = Math.min(g, m + 8); } else if (g > m) p[i + 1] = Math.min(g, m + 6);
      }
      tx.putImageData(d, 0, 0);
      const x = cv.getContext('2d');
      const s = H / t.height * 1.02, dw = t.width * s, dx = cv.dataset.anchor === 'right' ? W - dw * .86 : (W - dw) / 2;
      x.drawImage(t, dx, H - t.height * s + 4, dw, t.height * s);
      cv.classList.add('ready');
    } catch (e) { cv.remove(); }
  }
  setTimeout(() => document.querySelectorAll('canvas[data-cut]').forEach(keyCanvas), 50);

  const list = items => `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;

  /* ─── Plantillas ─────────────────────────────────────── */
  const T = {};
  Object.assign(T, window.T2 || {});

  T.cover = s => `<section class="slide s-cover dark">
    ${photo(s.img, s.cap, 'dark', { cut: s.cut, remote: s.remote })}<div class="veil"></div>
    <div class="in">
      <img class="logo" src="assets/logo-ecrepro-paraguay.png" alt="ECREPRO Paraguay">
      <div><h1>${s.title}</h1><div class="sub">${s.sub}</div></div>
      <div class="meta">${s.meta.map(m => `<span>${m}</span>`).join('')}</div>
    </div></section>`;

  T.agenda = s => `<section class="slide s-agenda">
    <div class="in">
      <div>
        <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
        <p class="lead" style="margin-top:20px">${s.lead}</p>
        <div style="margin-top:40px;height:380px">${photo(s.img, s.cap, '', { remote: s.remote })}</div>
      </div>
      <ol style="align-self:center">${s.items.map(([n, t]) => n === 'p'
        ? `<li class="pause"><span class="n">||</span><span>${t}</span></li>`
        : `<li><span class="n">${pad2(n)}</span><span>${t}</span></li>`).join('')}</ol>
    </div></section>`;

  T.section = s => `<section class="slide s-section dark">
    ${photo(s.img, s.cap, 'dark', { cut: s.cut, remote: s.remote })}<div class="veil"></div>
    <div class="in">
      <div class="blocknum">${pad2(s.block)}</div>
      <h1>${blockTitle(s.block)}</h1>
      <p class="lead">${s.lead}</p>
    </div></section>`;

  T.objectives = s => `<section class="slide s-objectives">
    <div class="in">
      <div style="display:flex;flex-direction:column">
        <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
        <p class="lead">${s.lead}</p>
        <div class="claim ${s.claim.dark ? 'limit' : ''}"><b>${s.claim.h}</b>${s.claim.t}</div>
      </div>
      <div class="cols" style="align-self:center">${s.lists.map(l => `<div><h3>${l.h}</h3>${list(l.items)}</div>`).join('')}</div>
    </div></section>`;

  T.photo = s => `<section class="slide s-photo ${s.flip ? 'flip' : ''}">
    <div class="in">
      ${photo(s.img, s.cap, '', { remote: s.remote })}
      <div class="txt">
        <div class="kicker">${s.kicker}</div><h2>${s.title}</h2>
        ${(s.body || []).map(p => `<p>${p}</p>`).join('')}
        ${s.quote ? `<div class="quote">${s.quote}</div>` : ''}
        ${s.bullets ? list(s.bullets) : ''}
        ${s.note ? `<div class="note ${s.note.dark ? 'dark' : ''}"><b>${s.note.h}</b>${s.note.t}</div>` : ''}
      </div>
    </div></section>`;

  T.cards = s => `<section class="slide s-cards">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <div class="cards" style="--n:${s.n || s.cards.length}">${s.cards.map(c => `<div class="card ${c.dark ? 'dark' : ''}">
        ${c.k ? `<div class="k">${c.k}</div>` : ''}<div class="t">${c.t}</div>${c.s ? `<div class="kicker" style="font-size:20px">${c.s}</div>` : ''}<p>${c.p}</p></div>`).join('')}</div>
      ${s.foot ? `<div class="foot">${s.foot}</div>` : ''}
    </div></section>`;

  T.timeline = s => `<section class="slide s-timeline" data-i="0">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <p class="lead" style="margin-top:14px">${s.lead}</p>
      <div class="tl">${s.items.map((it, i) => `<button data-tl="${i}" class="${i === 0 ? 'on' : ''}"><span class="y">${it.y}</span><span class="t">${it.short}</span></button>`).join('')}</div>
      <div class="tl-detail">
        ${s.items.map((it, i) => `<div data-tlp="${i}" style="${i ? 'display:none' : ''};height:100%">${photo(it.img, it.cap)}</div>`).join('')}
        <div class="txt">${s.items.map((it, i) => `<div data-tlp="${i}" style="${i ? 'display:none' : ''}"><h3>${it.t}</h3><p>${it.d}</p></div>`).join('')}</div>
      </div>
    </div></section>`;

  T.tabs = s => `<section class="slide s-tabs">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <p class="lead" style="margin-top:14px">${s.lead}</p>
      <div class="tabs">${s.items.map((it, i) => `<button data-tab="${i}" class="${i === 0 ? 'on' : ''}">${it.t}</button>`).join('')}</div>
      <div class="tab-body">
        <div class="txt">${s.items.map((it, i) => `<div data-tabp="${i}" style="${i ? 'display:none' : ''}"><h3>${it.t}</h3><p>${it.d}</p></div>`).join('')}
          <div class="takeaway">${s.rule}</div></div>
        ${s.items.map((it, i) => `<div data-tabp="${i}" style="${i ? 'display:none' : ''};height:100%">${photo(it.img, it.cap)}</div>`).join('')}
      </div>
    </div></section>`;

  T.eco = s => `<section class="slide s-eco">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <div class="row">${s.years.map(y => `<div class="year"><div class="y">${y.y}</div><div><b>${y.t}</b><p>${y.d}</p></div></div>`).join('')}</div>
      <div class="brands">${s.brands.map(b => `<div class="brand"><b>${b.t}</b><p>${b.d}</p></div>`).join('')}</div>
      <div class="motto">${s.motto}</div>
    </div></section>`;

  T.rules = s => `<section class="slide s-rules">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <p class="lead" style="margin-top:14px">${s.lead}</p>
      <div class="rules">${s.items.map((r, i) => `<div class="rule" data-flip>
        <div class="f"><div class="n">${i + 1}</div><div class="t">${r.t}</div><p>${r.f}</p><div class="hint">Si te la saltas…</div></div>
        <div class="b"><div class="n">${i + 1}</div><div class="t">${r.t}</div><p>${r.b}</p><div class="hint">Volver</div></div>
      </div>`).join('')}</div>
      <div class="syn">${s.syn}</div>
    </div></section>`;

  T.close = s => `<section class="slide s-close dark">
    ${s.cut ? photo('', '', 'dark', { cut: s.cut }) : ''}
    <div class="in">
      <div style="display:flex;flex-direction:column">
        <div class="kicker">${s.kicker}</div><h2>${s.title}</h2>
        ${s.q ? `<div class="q">${s.q}</div>` : ''}
        <div class="conc"><b>${s.conc.h}</b>${s.conc.t}</div>
      </div>
      <ol class="ideas" style="align-self:center">${s.ideas.map(i => `<li>${i}</li>`).join('')}</ol>
    </div></section>`;

  /* Ciclo de control: cuatro nodos sobre un anillo con flechas */
  T.cycle = s => {
    const cx = 600, cy = 360, R = 300, W = 330, H = 130;
    const pts = [[cx - R, cy], [cx, cy - R], [cx + R, cy], [cx, cy + R]];
    const nodes = s.items.map((it, i) => `<g class="node ${i === 0 ? 'on' : ''}" data-node="${i}" transform="translate(${pts[i][0] - W / 2},${pts[i][1] - H / 2})">
      <rect width="${W}" height="${H}" rx="6"/><text x="${W / 2}" y="60" text-anchor="middle">${it.t.toUpperCase()}</text><text class="sub" x="${W / 2}" y="98" text-anchor="middle">${it.sub}</text></g>`).join('');
    const heads = [45, 135, 225, 315].map(a => { const r = a * Math.PI / 180; return `<path d="M-16 -14 L18 0 L-16 14 z" fill="#00C400" transform="translate(${cx + R * Math.cos(r)},${cy + R * Math.sin(r)}) rotate(${a + 90})"/>`; }).join('');
    return `<section class="slide s-diagram s-cycle">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <p class="lead" style="margin-top:14px">${s.lead}</p>
      <div class="body">
        <svg viewBox="120 -10 960 740"><circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#00C400" stroke-width="7" stroke-dasharray="2 18" stroke-linecap="round"/>${heads}
          <text x="${cx}" y="${cy + 12}" text-anchor="middle" font-family="Barlow SC" font-weight="800" font-size="26" fill="#7A817C" letter-spacing="3">CICLO CONTINUO</text>
          ${nodes}</svg>
        <div class="detail">${s.items.map((it, i) => `<div data-nodep="${i}" style="${i ? 'display:none' : ''}"><div class="lbl">${it.sub}</div><h3>${it.t}</h3><p>${it.d}</p></div>`).join('')}
          <div class="foot">${s.foot}</div></div>
      </div>
    </div></section>`;
  };

  /* Red del vehículo: nodos alrededor de la Gateway */
  T.net = s => {
    const c = [520, 320]; const R = 255; const n = s.items.length;
    const gi = s.items.findIndex(i => /gateway/i.test(i.k));
    const others = s.items.map((it, i) => i).filter(i => i !== gi);
    const nodes = []; const links = [];
    others.forEach((idx, k) => {
      const a = -Math.PI / 2 + k * (2 * Math.PI / others.length);
      const x = c[0] + R * Math.cos(a), y = c[1] + R * Math.sin(a);
      links.push(`<line x1="${c[0]}" y1="${c[1]}" x2="${x}" y2="${y}" stroke="#D5DAD6" stroke-width="5"/>`);
      const it = s.items[idx];
      nodes.push(`<g class="node ${idx === 0 ? 'on' : ''}" data-node="${idx}" transform="translate(${x - 135},${y - 55})"><rect width="270" height="110" rx="6"/><text x="135" y="50" text-anchor="middle">${it.k}</text><text class="sub" x="135" y="86" text-anchor="middle">${it.sub}</text></g>`);
    });
    const g = s.items[gi];
    nodes.push(`<g class="node ${gi === 0 ? 'on' : ''}" data-node="${gi}" transform="translate(${c[0] - 135},${c[1] - 55})"><rect width="270" height="110" rx="55"/><text x="135" y="50" text-anchor="middle">${g.k}</text><text class="sub" x="135" y="86" text-anchor="middle">${g.sub}</text></g>`);
    return `<section class="slide s-net">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <p class="lead" style="margin-top:14px">${s.lead}</p>
      <div class="body">
        <svg viewBox="100 0 840 640">${links.join('')}${nodes.join('')}</svg>
        <div class="detail">${s.items.map((it, i) => `<div data-nodep="${i}" style="${i ? 'display:none' : ''}"><div class="lbl">${it.sub}</div><h3>${it.k}</h3><p>${it.f}</p><div class="sym"><b>Síntoma típico</b>${it.s}</div></div>`).join('')}</div>
      </div>
      <p class="foot">${s.foot}</p>
    </div></section>`;
  };

  T['sim-turbo'] = s => `<section class="slide s-sim s-turbo">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <p class="lead" style="margin-top:14px">${s.lead}</p>
      <div class="body">
        <div class="sim">
          <div class="row"><span class="l">Solicitada por la ECU</span><span class="v">1.800 mbar</span></div>
          <div class="bar"><span class="tick" style="left:90%"></span><i style="width:90%"></i></div>
          <div class="row"><span class="l">Real medida por el sensor</span><span class="v" data-turbo-v>1.790 mbar</span></div>
          <div class="bar"><i data-turbo-bar style="width:89.5%"></i></div>
          <input type="range" min="1000" max="1900" step="10" value="1790" data-turbo>
          <div class="row small muted"><span>1.000 mbar</span><span>1.900 mbar</span></div>
          <div class="msg" data-turbo-msg><b>Resultado coherente · desviación 10 mbar</b>Lo solicitado y lo real coinciden dentro del margen. La ECU continúa con normalidad.</div>
        </div>
        <div class="side">
          <div class="box dark"><b>${s.note.h}</b><p>${s.note.t}</p></div>
          <div class="box"><b>Otras comparaciones que hace la ECU</b>${list(s.others)}</div>
        </div>
      </div>
    </div></section>`;

  T['sim-pedal'] = s => `<section class="slide s-sim s-pedal">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <p class="lead" style="margin-top:14px">${s.lead}</p>
      <div class="body">
        <div class="sim">
          <div class="row"><span class="l">Pedal · petición del conductor</span><span class="v" data-pedal-v>85 %</span></div>
          <input type="range" min="0" max="100" step="5" value="85" data-pedal>
          <div class="row"><span class="l">Condiciones activas</span></div>
          <div class="sw">${[['Motor frío', 70], ['Temperatura excesiva', 55], ['Avería activa', 40], ['Petición de la transmisión', 80]].map(([t, cap]) => `<button data-cap="${cap}">${t}</button>`).join('')}</div>
          <div class="stack">
            <div class="r"><span class="l">Petición del pedal</span><div class="bar"><i data-st="p" style="width:85%"></i></div><span class="v" data-sv="p">85 %</span></div>
            <div class="r"><span class="l">Par permitido</span><div class="bar"><i data-st="a" style="width:100%"></i></div><span class="v" data-sv="a">100 %</span></div>
            <div class="r"><span class="l">Par final entregado</span><div class="bar"><i data-st="f" style="width:85%"></i></div><span class="v" data-sv="f">85 %</span></div>
          </div>
          <div class="msg" data-pedal-msg><b>Sin condiciones limitantes</b>La petición se traduce en par según el programa y la calibración.</div>
        </div>
        <div class="side">
          <div class="box dark"><b>Pregunta para el aula</b><p>${s.q}</p></div>
          <div class="box"><b>Conceptos que deben diferenciarse</b>${list(s.concepts)}</div>
        </div>
      </div>
    </div></section>`;

  T.table = s => `<section class="slide s-table">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      ${s.lead ? `<p class="lead" style="margin-top:14px">${s.lead}</p>` : ''}
      <table><thead><tr>${s.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${s.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>
      <div class="twocol" style="grid-template-columns:repeat(${s.boxes.length},1fr)">${s.boxes.map(b => `<div class="box ${b.dark ? 'dark' : ''}"><b>${b.h}</b>${b.t}</div>`).join('')}</div>${s.note ? `<div class="note">${s.note}</div>` : ''}
    </div></section>`;

  T.families = s => `<section class="slide s-table s-fam">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <p class="lead" style="margin-top:14px">${s.lead}</p>
      <div class="filters"><button data-fam="all" class="on">Todos</button>${s.rows.map((r, i) => `<button data-fam="${i}">${r[0]}</button>`).join('')}</div>
      <table><thead><tr>${s.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${s.rows.map((r, i) => `<tr data-row="${i}">${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>
      <div class="twocol" style="grid-template-columns:1.3fr 1fr;margin-top:auto">
        <div class="box"><b>Evolución orientativa de Bosch diésel</b>${s.evo.map(([k, v]) => `<div style="display:flex;gap:16px;padding:4px 0;font-size:20px"><b style="display:inline;width:100px;flex:none;font-size:20px;color:var(--ink);margin:0">${k}</b><span>${v}</span></div>`).join('')}</div>
        <div class="box dark"><b>Precaución</b>${s.caution}</div>
      </div>
    </div></section>`;

  T.case = s => `<section class="slide s-case">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <div class="steps">${s.steps.map((t, i) => `<div class="st"><div class="n">${pad2(i + 1)}</div><div class="t">${t}</div></div>`).join('')}</div>
      <div class="case">
        <div class="left">
          <div class="kicker">Regla fundamental</div><p style="font-family:var(--display);font-weight:700;font-size:34px;line-height:1.1;margin:8px 0 26px;color:var(--ink)">${s.rule}</p>
          <div style="height:330px">${photo(s.img, s.cap, '', { remote: s.remote })}</div>
        </div>
        <div>
          <div class="kicker">Caso práctico</div><h3 style="font-size:40px;margin-top:8px">${s.car}</h3>
          <p style="font-size:23px;color:var(--ink-2);margin-top:10px">${s.ask}</p>
          <div class="chips">${s.chips.map((c, i) => `<button data-chip="${i}" class="${c.given ? 'given' : ''}" ${c.given ? 'disabled' : ''}>${c.given ? 'Dato conocido · ' : ''}${c.t}</button>`).join('')}</div>
          <button class="btn" data-reveal>Revelar respuesta</button>
          <button class="btn ghost" data-retry style="display:none;margin-left:12px">Reintentar</button>
          <div class="reveal" style="margin-top:22px"><b data-score></b>${s.answer}<div class="err">${s.err}</div></div>
        </div>
      </div>
    </div></section>`;

  T.quiz = s => `<section class="slide s-quiz">
    <div class="in">
      <div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>
      <p class="lead" style="margin-top:14px">${s.lead}</p>
      <div class="qz" style="--n:${s.n || s.items.length}">${s.items.map((q, i) => `<div class="q" data-q><div class="n">${pad2(i + 1)}</div><div class="t">${q.q}</div><div class="hint">Ver respuesta</div><div class="a">${q.a}</div></div>`).join('')}</div>
    </div></section>`;

  T.final = s => `<section class="slide s-final dark">
    <div class="in">
      <div style="display:flex;flex-direction:column">
        <img class="logo" src="assets/logo-ecrepro-paraguay.png" alt="ECREPRO Paraguay">
        <div class="kicker">${s.kicker}</div><h1 style="margin-top:12px">${s.title}</h1>
        <div class="big">${s.big}</div>
        <div class="fine">${s.fine}</div>
      </div>
      <ol class="ideas" style="align-self:center">${s.ideas.map(i => `<li>${i}</li>`).join('')}</ol>
    </div></section>`;

  /* ─── Montaje ────────────────────────────────────────── */
  const deck = document.getElementById('deck');
  /* Inserta el contenido de content2.js tras la diapositiva de objetivos de cada bloque */
  const ALL = []; SLIDES.forEach(s => { ALL.push(s); if (s.type === 'objectives' && typeof EXTRA !== 'undefined' && EXTRA[s.block]) EXTRA[s.block].forEach(x => ALL.push(Object.assign({ block: s.block }, x))); });
  SLIDES.length = 0; ALL.forEach(s => SLIDES.push(s));
  deck.innerHTML = SLIDES.map(s => (T[s.type] || (() => `<section class="slide"><div class="pad">${s.label}</div></section>`))(s)).join('')
    + `<div id="progress"></div><div id="hit-l"></div><div id="hit-r"></div>
       <div id="bar"><img src="assets/logo-ecrepro-paraguay.png" alt=""><span class="crumb"></span><span class="count"></span></div>`;
  const slides = [...deck.querySelectorAll('.slide')];
  const bar = document.getElementById('bar'), crumb = bar.querySelector('.crumb'), count = bar.querySelector('.count'), prog = document.getElementById('progress');
  const grid = document.getElementById('grid');
  grid.innerHTML = SLIDES.map((s, i) => `<div class="th" data-go="${i}"><small>${s.block ? 'Bloque ' + pad2(s.block) : 'Inicio'}</small><b>${s.label}</b></div>`).join('');

  let cur = 0;
  const N = slides.length;
  function show(i) {
    cur = Math.max(0, Math.min(N - 1, i));
    slides.forEach((s, k) => s.classList.toggle('on', k === cur));
    const s = SLIDES[cur];
    bar.classList.toggle('dark', slides[cur].classList.contains('dark'));
    crumb.textContent = (s.block ? 'Bloque ' + pad2(s.block) + ' · ' + blockTitle(s.block) : 'Curso de iniciación a la reprogramación de centralitas') + (s.type !== 'section' && s.type !== 'cover' ? '  —  ' + s.label.replace(/^\d+\.\d+\s/, '') : '');
    count.textContent = `${cur + 1} / ${N}`;
    prog.style.width = ((cur + 1) / N * 100) + '%';
    location.hash = cur + 1;
    grid.querySelectorAll('.th').forEach((t, k) => t.classList.toggle('cur', k === cur));
  }
  function fit() {
    const s = Math.min(innerWidth / 1920, innerHeight / 1080);
    deck.style.setProperty('--s', s);
  }
  addEventListener('resize', fit); fit();
  addEventListener('hashchange', () => { const h = (parseInt(location.hash.slice(1)) || 1) - 1; if (h !== cur) show(h); });
  show(Math.max(0, (parseInt(location.hash.slice(1)) || 1) - 1));

  document.getElementById('hit-r').onclick = () => show(cur + 1);
  document.getElementById('hit-l').onclick = () => show(cur - 1);
  addEventListener('keydown', e => {
    if (e.target.matches('input')) return;
    if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); show(cur + 1); }
    else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); show(cur - 1); }
    else if (e.key === 'Home') show(0);
    else if (e.key === 'End') show(N - 1);
    else if (e.key.toLowerCase() === 'f') { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); }
    else if (e.key.toLowerCase() === 'o') grid.classList.toggle('on');
    else if (e.key === 'Escape') grid.classList.remove('on');
  });
  grid.addEventListener('click', e => { const t = e.target.closest('[data-go]'); if (t) { show(+t.dataset.go); grid.classList.remove('on'); } });
  let tx = null;
  addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  addEventListener('touchend', e => { if (tx == null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 60) show(cur + (dx < 0 ? 1 : -1)); tx = null; });

  if (window.INTERACT2) INTERACT2(deck);
  /* ─── Interacciones dentro de las diapositivas ────────── */
  const swap = (root, btnSel, panelAttr, idx) => {
    root.querySelectorAll(btnSel).forEach(b => b.classList.toggle('on', +b.dataset[Object.keys(b.dataset)[0]] === idx));
    root.querySelectorAll(`[data-${panelAttr}]`).forEach(p => p.style.display = +p.dataset[panelAttr] === idx ? '' : 'none');
  };
  deck.addEventListener('click', e => {
    const sl = e.target.closest('.slide'); if (!sl) return;
    let t;
    if ((t = e.target.closest('[data-tl]'))) swap(sl, '[data-tl]', 'tlp', +t.dataset.tl);
    else if ((t = e.target.closest('[data-tab]'))) swap(sl, '[data-tab]', 'tabp', +t.dataset.tab);
    else if ((t = e.target.closest('[data-node]'))) { sl.querySelectorAll('[data-node]').forEach(n => n.classList.toggle('on', n === t)); sl.querySelectorAll('[data-nodep]').forEach(p => p.style.display = p.dataset.nodep === t.dataset.node ? '' : 'none'); }
    else if ((t = e.target.closest('[data-flip]'))) t.classList.toggle('flip');
    else if ((t = e.target.closest('[data-q]'))) t.classList.toggle('on');
    else if ((t = e.target.closest('[data-fam]'))) { sl.querySelectorAll('[data-fam]').forEach(b => b.classList.toggle('on', b === t)); sl.querySelectorAll('[data-row]').forEach(r => r.classList.toggle('hide', t.dataset.fam !== 'all' && r.dataset.row !== t.dataset.fam)); }
    else if ((t = e.target.closest('[data-chip]')) && !sl.dataset.revealed) t.classList.toggle('mark');
    else if ((t = e.target.closest('[data-cap]'))) { t.classList.toggle('on'); pedal(sl); }
    else if (e.target.closest('[data-reveal]')) {
      const chips = [...sl.querySelectorAll('[data-chip]:not(.given)')]; let hits = 0;
      chips.forEach(c => { const m = c.classList.contains('mark'); c.classList.remove('mark'); c.classList.add('ok'); if (m) hits++; });
      sl.querySelector('[data-score]').textContent = `Has marcado ${hits} de los 6 datos que faltan.`;
      sl.querySelector('.reveal').classList.add('on'); sl.dataset.revealed = 1;
      sl.querySelector('[data-reveal]').style.display = 'none'; sl.querySelector('[data-retry]').style.display = '';
    } else if (e.target.closest('[data-retry]')) {
      sl.querySelectorAll('[data-chip]').forEach(c => c.classList.remove('ok', 'mark')); sl.querySelector('.reveal').classList.remove('on'); delete sl.dataset.revealed;
      sl.querySelector('[data-reveal]').style.display = ''; sl.querySelector('[data-retry]').style.display = 'none';
    }
  });
  deck.addEventListener('input', e => {
    const sl = e.target.closest('.slide');
    if (e.target.matches('[data-turbo]')) {
      const v = +e.target.value, dev = Math.abs(1800 - v), ok = dev <= 100;
      sl.querySelector('[data-turbo-v]').textContent = v.toLocaleString('es') + ' mbar';
      const b = sl.querySelector('[data-turbo-bar]'); b.style.width = (v / 2000 * 100) + '%'; b.classList.toggle('bad', !ok);
      const m = sl.querySelector('[data-turbo-msg]'); m.classList.toggle('bad', !ok);
      m.innerHTML = ok ? `<b>Resultado coherente · desviación ${dev} mbar</b>Lo solicitado y lo real coinciden dentro del margen. La ECU continúa con normalidad.`
        : `<b>Desviación de ${dev.toLocaleString('es')} mbar: debe diagnosticarse</b>La ECU intenta corregir, limita el funcionamiento o registra una avería (falla). Antes de reprogramar debemos conocer la causa de la diferencia.`;
    }
    if (e.target.matches('[data-pedal]')) pedal(sl);
  });
  function pedal(sl) {
    const p = +sl.querySelector('[data-pedal]').value;
    const caps = [...sl.querySelectorAll('[data-cap].on')].map(b => +b.dataset.cap);
    const a = caps.length ? Math.min(...caps) : 100, f = Math.min(p, a);
    sl.querySelector('[data-pedal-v]').textContent = p + ' %';
    const set = (k, v) => { const b = sl.querySelector(`[data-st="${k}"]`); b.style.width = v + '%'; sl.querySelector(`[data-sv="${k}"]`).textContent = v + ' %'; return b; };
    set('p', p); set('a', a).classList.toggle('bad', a < 100); set('f', f);
    const m = sl.querySelector('[data-pedal-msg]'); m.classList.toggle('bad', a < 100);
    m.innerHTML = a < 100 ? `<b>Hay condiciones activas: la ECU recorta la petición</b>El 100 % de pedal no significa el 100 % de la capacidad del motor.` : `<b>Sin condiciones limitantes</b>La petición se traduce en par según el programa y la calibración.`;
  }
})();
