/* Plantillas adicionales (bloques 3–9). Se fusionan con las de app.js. */
window.T2 = (() => {
  const list = items => `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  const pad2 = n => String(n).padStart(2, '0');
  const head = s => `<div class="kicker">${s.kicker}</div><h2 style="margin-top:14px">${s.title}</h2>${s.lead ? `<p class="lead" style="margin-top:14px">${s.lead}</p>` : ''}`;
  const chain = (arr, note) => arr ? `<div class="chainstrip">${arr.map((c, i) => `<div class="cs"><span class="n">${pad2(i + 1)}</span><span>${c}</span></div>`).join('')}</div>${note ? `<div class="chainnote">${note}</div>` : ''}` : '';
  const boxes = arr => arr ? `<div class="boxes" style="grid-template-columns:repeat(${arr.length},1fr)">${arr.map(b => `<div class="box ${b.dark ? 'dark' : ''}"><b>${b.h}</b>${b.t ? b.t : ''}${b.items ? list(b.items) : ''}</div>`).join('')}</div>` : '';
  const foot = s => s.foot ? `<div class="footbar">${s.foot}</div>` : '';
  const T = {};

  T.cols = s => `<section class="slide s-cols"><div class="in">${head(s)}${chain(s.chain, s.chainNote)}
    <div class="colgrid" style="grid-template-columns:repeat(${s.cols.length},1fr)">${s.cols.map(c => `<div class="col"><h3>${c.h}</h3>${c.items ? list(c.items) : ''}${c.quote ? `<div class="quote">${c.quote}</div>` : ''}${c.note ? `<div class="box ${c.note.dark ? 'dark' : ''}" style="margin-top:auto"><b>${c.note.h}</b>${c.note.t}</div>` : ''}</div>`).join('')}</div>${foot(s)}</div></section>`;

  T.flow = s => `<section class="slide s-flow"><div class="in">${head(s)}
    <div class="flowstrip" style="grid-template-columns:repeat(${s.items.length},1fr)">${s.items.map((it, i) => `<button data-flow="${i}" class="${i ? '' : 'on'}"><span class="n">${pad2(i + 1)}</span><span class="t">${it.t}</span></button>`).join('')}</div>
    <div class="flowdetail">${s.items.map((it, i) => `<div data-flowp="${i}" style="${i ? 'display:none' : ''}"><div class="lbl">${s.dlabel || 'Paso ' + (i + 1) + ' de ' + s.items.length}</div><h3>${it.t}</h3><p>${it.d}</p></div>`).join('')}</div>${foot(s)}</div></section>`;

  T.rows = s => `<section class="slide s-rows"><div class="in">${head(s)}${chain(s.chain)}
    <table class="rev"><thead><tr>${s.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${s.rows.map(r => `<tr data-rev class="${s.open ? 'on' : ''}">${r.map((c, i) => `<td class="${i === r.length - 1 && r.length > 1 && !s.open ? 'hid' : ''}">${c}</td>`).join('')}</tr>`).join('')}</tbody></table>
    ${boxes(s.boxes)}${foot(s)}</div></section>`;

  T.match = s => {
    const L = s.pairs.map((p, i) => `<button data-ml="${i}">${p[0]}</button>`).join('');
    const R = (s.shuffle || s.pairs.map((_, i) => i)).map(i => `<button data-mr="${i}">${s.pairs[i][1]}</button>`).join('');
    return `<section class="slide s-match"><div class="in">${head(s)}
    <div class="matchgrid"><div><h3>${s.lh}</h3>${L}</div><div><h3>${s.rh}</h3>${R}</div></div>
    <div class="matchmsg" data-mmsg>0 / ${s.pairs.length} parejas</div>${foot(s)}</div></section>`;
  };

  T.check = s => `<section class="slide s-check ${s.ordered ? 'ordered' : ''}" data-done="${s.done}" data-pending="${s.pending}"><div class="in">${head(s)}${chain(s.chain)}
    <div class="checkgrid ${s.side ? '' : 'solo'}">
      <div class="checks">${s.items.map((t, i) => `<button data-chk="${i}" class="${s.ordered && i ? 'locked' : ''}"><span class="bx"></span><span>${t}</span></button>`).join('')}
        <div class="gate" data-gate>${s.pending}</div></div>
      ${s.side ? `<div class="sidecol">${s.side.map(b => `<div class="box ${b.dark ? 'dark' : ''}"><b>${b.h}</b>${b.t || ''}${b.items ? list(b.items) : ''}</div>`).join('')}</div>` : ''}
    </div></div></section>`;

  T.order = s => `<section class="slide s-order" data-n="${s.items.length}" data-ok="${s.ok}" data-ko="${s.ko}"><div class="in">${head(s)}
    <div class="ordergrid"><div><h3>Pasos disponibles</h3><div class="pool">${s.pool.map(i => `<button data-ord="${i}">${s.items[i]}</button>`).join('')}</div></div>
    <div><h3>Tu secuencia</h3><ol class="seq" data-seq></ol><div class="matchmsg" data-omsg>0 de ${s.items.length} colocados</div><button class="btn ghost" data-oreset>Reiniciar</button></div></div>${foot(s)}</div></section>`;

  T.classify = s => `<section class="slide s-classify"><div class="in">${head(s)}
    <div class="files">${s.items.map((f, i) => `<div class="file" data-file="${i}" data-ok="${f.ok}"><div class="fn">${f.name}</div><div class="fm">${f.meta}</div><div class="opts">${s.opts.map(o => `<button data-cls="${o}">${o}</button>`).join('')}</div><div class="fb">${f.fb}</div></div>`).join('')}</div>
    <div><button class="btn" data-ccheck>Corregir</button> <button class="btn ghost" data-creset>Reiniciar</button> <span class="matchmsg" data-cmsg style="margin-left:20px"></span></div></div></section>`;

  T.choose = s => `<section class="slide s-choose"><div class="in">${head(s)}
    <div class="chooselist">${s.items.map((it, i) => `<div class="ch" data-ch="${i}"><div class="obs">${it.obs}</div><button data-opt="a">${it.a}</button><button data-opt="b" class="right">${it.b}</button></div>`).join('')}</div>${foot(s)}</div></section>`;

  T.fields = s => `<section class="slide s-fields"><div class="in">${head(s)}
    <div class="fieldgrid"><div class="screen"><div class="scr-h">Protocolo · simulación didáctica <span data-fcnt>0 / ${s.items.length} comprobados</span></div>${s.items.map((f, i) => `<button data-field="${i}"><span class="k">${f.k}</span><span class="v">${f.v}</span></button>`).join('')}</div>
    <div class="sidecol"><div class="fielddetail">${s.items.map((f, i) => `<div data-fieldp="${i}" style="display:none"><div class="lbl">${f.k}</div><p>${f.d}</p></div>`).join('')}<div data-fieldp="x"><div class="lbl">Toca un campo</div><p>Cada campo de la pantalla existe por un motivo. Al tocarlo se marca como comprobado y aquí aparece qué hay que mirar.</p></div></div>
    <div class="box dark"><b>${s.side.h}</b>${list(s.side.items)}</div></div></div>${foot(s)}</div></section>`;

  T.decision = s => `<section class="slide s-decision"><div class="in">${head(s)}
    <div class="decgrid"><div class="dec" data-dec><div class="dq"><div class="lbl" data-dn>Pregunta 1</div><h3 data-dq></h3><div class="opts" data-dopts></div></div><div class="dres" data-dres style="display:none"><div class="lbl">Propuesta</div><h3 data-drt></h3><p data-drs></p><button class="btn ghost" data-dreset>Empezar de nuevo</button></div></div>
    <ol class="dhist" data-dhist></ol></div>${foot(s)}</div></section>`;

  T.progress = s => `<section class="slide s-progress" data-target="${s.target}"><div class="in">${head(s)}
    <div class="checkgrid"><div class="sim"><div class="row"><span class="l">Progreso de la operación</span><span class="v" data-pv>0 %</span></div><div class="bar big"><i data-pb style="width:0%"></i></div>
      <div class="phases">${s.phases.map((p, i) => `<span data-ph="${i}">${p}</span>`).join('')}</div>
      <div><button class="btn" data-pstart>Iniciar simulación</button> <button class="btn ghost" data-preset>Reiniciar</button></div>
      <div class="msg ${s.target < 100 ? 'bad' : ''}" data-pmsg style="display:none">${s.endmsg}</div></div>
    <div class="sidecol">${s.side.map(b => `<div class="box ${b.dark ? 'dark' : ''}"><b>${b.h}</b>${b.t || ''}${b.items ? list(b.items) : ''}</div>`).join('')}</div></div></div></section>`;

  T.nomen = s => `<section class="slide s-nomen"><div class="in">${head(s)}
    <div class="checkgrid"><div class="sim nomform">
      <label>Fecha<input data-nf="fecha" placeholder="2026-10-10"></label>
      <label>Vehículo (marca_modelo_motor)<input data-nf="veh" placeholder="VW_Golf_2.0TDI"></label>
      <label>ECU (familia y referencia)<input data-nf="ecu" placeholder="EDC17C46"></label>
      <label>HW-SW<input data-nf="hwsw" placeholder="HW1234-SW5678"></label>
      <label>Modo<select data-nf="modo"><option>OBD</option><option>BENCH</option><option>BOOT</option></select></label>
      <label>Operación<select data-nf="op"><option>ID</option><option>REAL</option><option>VIRTUAL</option><option>PARCIAL</option><option>BACKUP</option></select></label>
      <label>Estado<select data-nf="est"><option>ORI</option><option>MOD</option><option>RECUPERACION</option></select></label>
      <label>Herramienta (opcional)<input data-nf="tool" placeholder="FLEX"></label>
      <div class="nomout"><span class="lbl">Nombre generado</span><code data-nout>FECHA_VEHICULO_ECU_HW-SW_OBD_ID_ORI.bin</code></div></div>
    <div class="sidecol"><div class="box"><b>Estructura de carpetas · archivo general</b><div class="folders">${s.folders.map(f => `<span>${f}</span>`).join('')}</div></div>${s.foot ? `<div class="box dark">${s.foot}</div>` : ''}</div></div></div></section>`;

  T.gates = s => `<section class="slide s-gates"><div class="in">${head(s)}
    <div class="gategrid">${s.gates.map((g, i) => `<div class="gatecard" data-gatecard><div class="n">${i + 1}</div><h3>${g.t}</h3><div class="lbl">Debe superarse antes de ${g.antes}</div>${g.conds.map(c => `<button data-gchk><span class="bx"></span><span>${c}</span></button>`).join('')}<div class="gate" data-gstate>Puerta cerrada</div></div>`).join('')}</div>${foot(s)}</div></section>`;

  T.mapsvg = s => {
    const cols = 12, rows = 8, cw = 60, ch = 46; let cells = '';
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      const v = Math.min(1, (x / cols) * 0.7 + (y / rows) * 0.5 + Math.sin(x * 0.9 + y * 0.6) * 0.1);
      cells += `<rect x="${120 + x * cw}" y="${40 + y * ch}" width="${cw - 3}" height="${ch - 3}" fill="#00C400" opacity="${0.12 + v * 0.75}"/>`;
    }
    const svg = `<svg viewBox="0 0 880 520"><text x="120" y="24" font-family="Barlow SC" font-weight="700" font-size="20" fill="#7A817C">VALOR RESULTANTE · sin unidades reales</text>${cells}
      <text x="480" y="470" text-anchor="middle" font-family="Barlow SC" font-weight="700" font-size="24" fill="#0A0B0A">EJE X · condición de entrada, p. ej. régimen</text>
      <text x="40" y="230" transform="rotate(-90 40 230)" text-anchor="middle" font-family="Barlow SC" font-weight="700" font-size="24" fill="#0A0B0A">EJE Y · p. ej. carga</text>
      ${Array.from({ length: cols }, (_, i) => `<text x="${120 + i * cw + cw / 2}" y="440" text-anchor="middle" font-family="Barlow" font-size="16" fill="#7A817C">x${i + 1}</text>`).join('')}
      ${Array.from({ length: rows }, (_, i) => `<text x="105" y="${40 + i * ch + ch / 2 + 6}" text-anchor="end" font-family="Barlow" font-size="16" fill="#7A817C">y${i + 1}</text>`).join('')}</svg>`;
    return `<section class="slide s-mapsvg"><div class="in">${head(s)}<div class="mapgrid"><div class="mapbox">${svg}</div>
      <div class="sidecol"><div class="box"><b>Elementos de un mapa</b>${s.items.map(it => `<div class="kv"><b>${it.t}</b><span>${it.d}</span></div>`).join('')}</div></div></div>${foot(s)}</div></section>`;
  };

  T.chain = s => `<section class="slide s-chainsim"><div class="in">${head(s)}${chain(s.steps)}
    <div class="checkgrid"><div class="sim">
      <div class="row"><span class="l">Petición elevada</span><span class="v" data-cv>80</span></div><input type="range" min="0" max="100" value="80" data-crange>
      <div class="row"><span class="l">Otro limitador activo (ilustrativo)</span><span class="v">60</span></div><div class="bar"><span class="tick" style="left:60%"></span><i style="width:60%"></i></div>
      <div class="row"><span class="l">Objetivo de par resultante</span><span class="v" data-cres>60</span></div><div class="bar"><i data-cbar class="bad" style="width:60%"></i></div>
      <div class="msg bad" data-cmsg><b>El limitador manda</b>Elevar la petición por encima del limitador no cambia el objetivo. Primero hay que entender qué limita y por qué.</div></div>
    <div class="sidecol">${s.side.map(b => `<div class="box ${b.dark ? 'dark' : ''}"><b>${b.h}</b>${b.t || ''}${b.items ? list(b.items) : ''}</div>`).join('')}</div></div></div></section>`;

  return T;
})();

/* ─── Interacciones de las plantillas adicionales ─────────────── */
window.INTERACT2 = deck => {
  const ARBOL = [
    { q: '¿La ECU está correctamente identificada?', o: ['Sí', 'No'] },
    { q: '¿Qué modos ofrece el protocolo?', o: ['Solo OBD', 'OBD + Bench', 'OBD + Bench + Boot', 'Bench + Boot', 'Solo Boot'] },
    { q: '¿Qué contenido necesitamos obtener?', o: ['Calibrar', 'Conservar el estado', 'Recuperar / clonar'] },
    { q: '¿La lectura OBD es real, virtual o parcial?', o: ['Real', 'Virtual', 'Parcial', 'No disponible'] },
    { q: '¿Bench evita abrir y ofrece el acceso necesario?', o: ['Sí', 'No'] },
    { q: '¿Boot es obligatorio para backup, unlock o recuperación?', o: ['Sí', 'No'] },
    { q: '¿Disponemos de cables, adaptadores y experiencia?', o: ['Sí', 'No'] }
  ];
  const decState = new WeakMap();
  function decRender(sl) {
    const st = decState.get(sl) || { ans: [] }; decState.set(sl, st);
    const n = st.ans.length;
    sl.querySelector('[data-dhist]').innerHTML = st.ans.map((a, i) => `<li><span>${ARBOL[i].q}</span><b>${a}</b></li>`).join('');
    if (n < ARBOL.length) {
      sl.querySelector('[data-dres]').style.display = 'none'; sl.querySelector('.dq').style.display = '';
      sl.querySelector('[data-dn]').textContent = 'Pregunta ' + (n + 1); sl.querySelector('[data-dq]').textContent = ARBOL[n].q;
      sl.querySelector('[data-dopts]').innerHTML = ARBOL[n].o.map(o => `<button data-dopt="${o}">${o}</button>`).join('');
    } else {
      const a = st.ans; const modes = a[1]; const hasOBD = /OBD/.test(modes), hasBench = /Bench/.test(modes), hasBoot = /Boot/.test(modes);
      const need = a[2], obd = a[3], benchOk = a[4] === 'Sí', bootOblig = a[5] === 'Sí', mat = a[6] === 'Sí';
      let t, d, bad = false;
      if (a[0] === 'No') { t = 'Detener: identificar primero.'; d = 'Sin identificación correcta no se elige modo ni protocolo. Vuelve a la identificación física y electrónica de la unidad.'; bad = true; }
      else if (!mat) { t = 'Sin material o experiencia: no operar todavía.'; d = 'Consigue los cables, adaptadores y la experiencia necesarios, o deriva el trabajo. La decisión nunca se fuerza.'; bad = true; }
      else if (hasOBD && !bootOblig && obd !== 'No disponible' && (need === 'Calibrar' || (need === 'Conservar el estado' && obd === 'Real'))) { t = 'OBD'; d = 'Es el modo menos invasivo y cubre la operación: la unidad queda instalada y cerrada. Vigila tensión, consumidores y tipo de lectura obtenida. Siempre que el protocolo lo autorice.'; }
      else if (hasBench && benchOk && !bootOblig) { t = 'Bench'; d = 'Evita abrir la unidad y ofrece el acceso necesario. La responsabilidad pasa al cableado: pinout exacto, polaridad y secuencia de alimentación. Siempre que el protocolo lo autorice.'; }
      else if (hasBoot) { t = 'Boot'; d = 'Solo porque el protocolo lo exige para el contenido necesario. Disciplina física completa: ESD, sondas fijas, puntos exactos y sellado posterior. Siempre que el protocolo lo autorice.'; }
      else { t = 'Revisar el protocolo.'; d = 'Con las respuestas dadas, ningún modo autorizado cubre la necesidad. Reconsidera la operación o consulta soporte.'; bad = true; }
      sl.querySelector('.dq').style.display = 'none'; const r = sl.querySelector('[data-dres]'); r.style.display = ''; r.classList.toggle('bad', bad);
      sl.querySelector('[data-drt]').textContent = t; sl.querySelector('[data-drs]').textContent = d;
    }
  }
  deck.querySelectorAll('.s-decision').forEach(decRender);

  const swap = (sl, btnSel, key, pkey, idx) => { sl.querySelectorAll(btnSel).forEach(b => b.classList.toggle('on', b.dataset[key] === String(idx))); sl.querySelectorAll(`[data-${pkey}]`).forEach(p => p.style.display = p.dataset[pkey] === String(idx) ? '' : 'none'); };
  const chkGate = sl => { const all = [...sl.querySelectorAll('[data-chk]')]; const done = all.every(b => b.classList.contains('on')); const g = sl.querySelector('[data-gate]'); g.textContent = done ? sl.dataset.done : sl.dataset.pending + ' · ' + all.filter(b => b.classList.contains('on')).length + ' / ' + all.length; g.classList.toggle('ok', done); };
  const matchState = new WeakMap();
  const timers = new WeakMap();

  deck.addEventListener('click', e => {
    const sl = e.target.closest('.slide'); if (!sl) return; let t;
    if ((t = e.target.closest('[data-flow]'))) swap(sl, '[data-flow]', 'flow', 'flowp', t.dataset.flow);
    else if ((t = e.target.closest('[data-rev]'))) t.classList.toggle('on');
    else if ((t = e.target.closest('[data-ml]'))) { const st = matchState.get(sl) || { l: -1, n: 0 }; matchState.set(sl, st); if (t.classList.contains('done')) return; sl.querySelectorAll('[data-ml]').forEach(b => b.classList.remove('sel')); t.classList.add('sel'); st.l = +t.dataset.ml; }
    else if ((t = e.target.closest('[data-mr]'))) { const st = matchState.get(sl) || { l: -1, n: 0 }; matchState.set(sl, st); if (t.classList.contains('done') || st.l < 0) return; const L = sl.querySelector(`[data-ml="${st.l}"]`); if (+t.dataset.mr === st.l) { t.classList.add('done'); L.classList.add('done'); L.classList.remove('sel'); st.n++; st.l = -1; } else { t.classList.add('wrong'); setTimeout(() => t.classList.remove('wrong'), 500); } const total = sl.querySelectorAll('[data-ml]').length; sl.querySelector('[data-mmsg]').textContent = st.n === total ? 'Las ' + total + ' parejas completadas.' : st.n + ' / ' + total + ' parejas'; }
    else if ((t = e.target.closest('[data-chk]'))) { if (t.classList.contains('locked')) return; t.classList.toggle('on'); if (sl.classList.contains('ordered')) { const all = [...sl.querySelectorAll('[data-chk]')]; all.forEach((b, i) => { b.classList.toggle('locked', i > 0 && !all[i - 1].classList.contains('on')); if (b.classList.contains('locked')) b.classList.remove('on'); }); } chkGate(sl); }
    else if ((t = e.target.closest('[data-gchk]'))) { t.classList.toggle('on'); const card = t.closest('[data-gatecard]'); const all = [...card.querySelectorAll('[data-gchk]')]; const ok = all.every(b => b.classList.contains('on')); const g = card.querySelector('[data-gstate]'); g.textContent = ok ? 'Puerta abierta' : 'Puerta cerrada'; g.classList.toggle('ok', ok); card.classList.toggle('open', ok); }
    else if ((t = e.target.closest('[data-ord]'))) { const seq = sl.querySelector('[data-seq]'); const li = document.createElement('li'); li.textContent = t.textContent; li.dataset.i = t.dataset.ord; seq.appendChild(li); t.remove(); const n = +sl.dataset.n; const items = [...seq.children]; const m = sl.querySelector('[data-omsg]'); if (items.length === n) { const ok = items.every((li, i) => +li.dataset.i === i); m.textContent = ok ? sl.dataset.ok : sl.dataset.ko; m.classList.toggle('ok', ok); m.classList.toggle('bad', !ok); } else m.textContent = items.length + ' de ' + n + ' colocados'; }
    else if (e.target.closest('[data-oreset]')) { const seq = sl.querySelector('[data-seq]'); const pool = sl.querySelector('.pool'); [...seq.children].forEach(li => { const b = document.createElement('button'); b.dataset.ord = li.dataset.i; b.textContent = li.textContent; pool.appendChild(b); }); seq.innerHTML = ''; const m = sl.querySelector('[data-omsg]'); m.textContent = '0 de ' + sl.dataset.n + ' colocados'; m.classList.remove('ok', 'bad'); }
    else if ((t = e.target.closest('[data-cls]'))) { const f = t.closest('.file'); if (f.classList.contains('checked')) return; f.querySelectorAll('[data-cls]').forEach(b => b.classList.toggle('on', b === t)); }
    else if (e.target.closest('[data-ccheck]')) { let ok = 0; const files = [...sl.querySelectorAll('.file')]; files.forEach(f => { f.classList.add('checked'); const sel = f.querySelector('[data-cls].on'); const good = sel && sel.dataset.cls === f.dataset.ok; if (good) ok++; f.classList.toggle('ok', !!good); f.classList.toggle('ko', !good); f.querySelectorAll('[data-cls]').forEach(b => b.classList.toggle('right', b.dataset.cls === f.dataset.ok)); }); sl.querySelector('[data-cmsg]').textContent = ok + ' de ' + files.length + ' correctos'; }
    else if (e.target.closest('[data-creset]')) { sl.querySelectorAll('.file').forEach(f => { f.classList.remove('checked', 'ok', 'ko'); f.querySelectorAll('[data-cls]').forEach(b => b.classList.remove('on', 'right')); }); sl.querySelector('[data-cmsg]').textContent = ''; }
    else if ((t = e.target.closest('[data-opt]'))) { const ch = t.closest('.ch'); ch.classList.add('done'); ch.querySelectorAll('[data-opt]').forEach(b => b.classList.toggle('sel', b === t)); }
    else if ((t = e.target.closest('[data-field]'))) { t.classList.add('on'); sl.querySelectorAll('[data-fieldp]').forEach(p => p.style.display = p.dataset.fieldp === t.dataset.field ? '' : 'none'); const n = sl.querySelectorAll('[data-field].on').length, tot = sl.querySelectorAll('[data-field]').length; sl.querySelector('[data-fcnt]').textContent = n + ' / ' + tot + ' comprobados'; }
    else if ((t = e.target.closest('[data-dopt]'))) { const st = decState.get(sl); st.ans.push(t.dataset.dopt); decRender(sl); }
    else if (e.target.closest('[data-dreset]')) { decState.set(sl, { ans: [] }); decRender(sl); }
    else if (e.target.closest('[data-pstart]')) { if (timers.get(sl)) return; const target = +sl.dataset.target; let p = 0; const bar = sl.querySelector('[data-pb]'), v = sl.querySelector('[data-pv]'), phs = [...sl.querySelectorAll('[data-ph]')]; const id = setInterval(() => { p = Math.min(target, p + 1); bar.style.width = p + '%'; v.textContent = p + ' %'; phs.forEach((s, i) => s.classList.toggle('on', p >= i * 20 && p < (i + 1) * 20 || (p === 100 && i === 4))); if (p >= target) { clearInterval(id); timers.delete(sl); sl.querySelector('[data-pmsg]').style.display = ''; bar.classList.toggle('bad', target < 100); } }, 70); timers.set(sl, id); }
    else if (e.target.closest('[data-preset]')) { clearInterval(timers.get(sl)); timers.delete(sl); sl.querySelector('[data-pb]').style.width = '0%'; sl.querySelector('[data-pb]').classList.remove('bad'); sl.querySelector('[data-pv]').textContent = '0 %'; sl.querySelector('[data-pmsg]').style.display = 'none'; sl.querySelectorAll('[data-ph]').forEach(s => s.classList.remove('on')); }
  });
  deck.addEventListener('input', e => {
    const sl = e.target.closest('.slide'); if (!sl) return;
    if (e.target.matches('[data-nf]')) { const g = k => (sl.querySelector(`[data-nf="${k}"]`).value || '').trim().replace(/\s+/g, '-'); const parts = [g('fecha') || 'FECHA', g('veh') || 'VEHICULO', g('ecu') || 'ECU', g('hwsw') || 'HW-SW', g('modo'), g('op'), g('est')]; if (g('tool')) parts.push(g('tool')); sl.querySelector('[data-nout]').textContent = parts.join('_') + '.bin'; }
    if (e.target.matches('[data-crange]')) { const v = +e.target.value, r = Math.min(v, 60); sl.querySelector('[data-cv]').textContent = v; sl.querySelector('[data-cres]').textContent = r; const b = sl.querySelector('[data-cbar]'); b.style.width = r + '%'; b.classList.toggle('bad', v > 60); const m = sl.querySelector('[data-cmsg]'); m.classList.toggle('bad', v > 60); m.innerHTML = v > 60 ? '<b>El limitador manda</b>Elevar la petición por encima del limitador no cambia el objetivo. Primero hay que entender qué limita y por qué.' : '<b>Petición por debajo del límite</b>El objetivo sigue a la petición porque ningún limitador interviene.'; }
  });
};
