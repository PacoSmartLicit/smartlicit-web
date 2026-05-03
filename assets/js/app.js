(function(){
  const body = document.body;
  const iframe = document.getElementById('slxFrame');
  const loader = document.getElementById('slxLoader');
  const siteNav = document.getElementById('slxSiteNav');
  const mobileToggle = document.getElementById('slxMobileToggle');
  const accountWrap = document.getElementById('slxAccountWrap');
  const accountTrigger = document.getElementById('slxAccountTrigger');
  const toast = document.getElementById('slxToast');
  const pageFileMap = {
    'home':'#page=home',
    'smart-tender':'#page=smart-tender',
    'smart-pricing':'#page=smart-pricing',
    'smart-file':'#page=smart-file',
    'smart-lex':'#page=smart-lex',
    'lex-gov':'#page=lex-gov',
    'lex-corp':'#page=lex-corp',
    'tender-gov':'#page=tender-gov',
    'tender-corp':'#page=tender-corp',
    'pricing-gov':'#page=pricing-gov',
    'pricing-corp':'#page=pricing-corp',
    'planes':'#page=planes',
    'blog':'#page=blog',
    'ipg':'#page=ipg',
    'ipp':'#page=ipp',
    'efile':'#page=efile',
    'micuenta':'#page=micuenta',
    'gdrive':'#page=gdrive',
    'tender-ai':'#page=tender-ai',
    'lex-ai':'#page=lex-ai'
  };
  const titleMap = {
    'home':'SmartLicit · Home',
    'smart-tender':'Tender · SmartLicit',
    'smart-pricing':'Pricing · SmartLicit',
    'smart-file':'File · SmartLicit',
    'smart-lex':'Lex · SmartLicit',
    'lex-gov':'Lex Gov · SmartLicit',
    'lex-corp':'Lex Corp · SmartLicit',
    'tender-gov':'Tender Gov · SmartLicit',
    'tender-corp':'Tender Corp · SmartLicit',
    'pricing-gov':'Pricing Gov · SmartLicit',
    'pricing-corp':'Pricing Corp · SmartLicit',
    'planes':'Planes · SmartLicit',
    'blog':'Blog · SmartLicit',
    'ipg':'IPG · SmartLicit',
    'ipp':'IPP · SmartLicit',
    'efile':'eFile · SmartLicit',
    'micuenta':'Mi Cuenta · SmartLicit',
    'gdrive':'Google Drive Workspace · SmartLicit',
    'tender-ai':'Propuesta IA · Smart Tender',
    'lex-ai':'Asistente IA · Smart Lex'
  };
  const onlineSrcMap = {
    'home':'sections/home.html',
    'smart-tender':'sections/smart-tender.html',
    'smart-pricing':'sections/smart-pricing.html',
    'smart-file':'sections/smart-file.html',
    'smart-lex':'sections/smart-lex.html',
    'lex-gov':'sections/lex-gov.html',
    'lex-corp':'sections/lex-corp.html',
    'tender-gov':'sections/tender-gov.html',
    'tender-corp':'sections/tender-corp.html',
    'pricing-gov':'sections/pricing-gov.html',
    'pricing-corp':'sections/pricing-corp.html',
    'planes':'sections/planes.html',
    'blog':'sections/blog.html',
    'ipg':'sections/ipg.html',
    'ipp':'sections/ipp.html',
    'efile':'sections/efile.html',
    'micuenta':'sections/micuenta.html',
    'gdrive':'sections/gdrive.html',
    'tender-ai':'sections/tender-ai-thirds.html',
    'lex-ai':'sections/lex-ai-thirds.html'
  };
  const gatedOfflineMap = {
    'smart-tender':'sections/offline-solution.html?solution=tender',
    'smart-pricing':'sections/offline-solution.html?solution=pricing',
    'smart-file':'sections/offline-solution.html?solution=file',
    'smart-lex':'sections/offline-solution.html?solution=lex',
    'tender-gov':'sections/offline-solution.html?solution=tenderGov',
    'tender-corp':'sections/tender-corp-offline.html',
    'pricing-gov':'sections/offline-solution.html?solution=pricingGov',
    'pricing-corp':'sections/pricing-corp-offline.html',
    'lex-gov':'sections/lex-gov-offline.html',
    'lex-corp':'sections/lex-corp-offline.html',
    'ipg':'sections/ipg-offline.html',
    'efile':'sections/efile-offline.html'
  };
  const oldFileMap = {
    'Home.html':'#page=home', 'home.html':'#page=home', 'index.html':'#page=home',
    'Planes.html':'#page=planes', 'plan.html':'#page=planes', 'planes.html':'#page=planes',
    'blog.html':'#page=blog', 'ipg.html':'#page=ipg', 'eFile.html':'#page=efile', 'efile.html':'#page=efile',
    'micuenta.html':'#page=micuenta', 'mi-cuenta.html':'#page=micuenta',
    'gDrive.html':'#page=gdrive', 'gdrive.html':'#page=gdrive',
    'smart tender.html':'#page=smart-tender', 'smart-tender.html':'#page=smart-tender', 'tender.html':'#page=smart-tender',
    'smart pricing.html':'#page=smart-pricing', 'smart-pricing.html':'#page=smart-pricing', 'pricing.html':'#page=smart-pricing',
    'smart file.html':'#page=smart-file', 'smart-file.html':'#page=smart-file', 'file.html':'#page=smart-file',
    'smart lex.html':'#page=smart-lex', 'smart-lex.html':'#page=smart-lex', 'lex.html':'#page=smart-lex',
    'tender gov.html':'#page=tender-gov', 'tender-gov.html':'#page=tender-gov',
    'tender corp.html':'#page=tender-corp', 'tender-corp.html':'#page=tender-corp',
    'lex gov.html':'#page=lex-gov', 'lex-gov.html':'#page=lex-gov',
    'lex corp.html':'#page=lex-corp', 'lex-corp.html':'#page=lex-corp',
    'ipp.html':'#page=ipp', 'IPP.html':'#page=ipp',
    'pricing gov.html':'#page=pricing-gov', 'pricing-gov.html':'#page=pricing-gov',
    'pricing corp.html':'#page=pricing-corp', 'pricing-corp.html':'#page=pricing-corp',
    'tender-ai.html':'#page=tender-ai', 'lex-ai.html':'#page=lex-ai'
  };
  const driveFolders = {
    'home':'/SmartLicit/Home',
    'smart-tender':'/SmartLicit/Tender/Guantes de nitrilo',
    'smart-pricing':'/SmartLicit/Pricing/Guantes de nitrilo',
    'smart-file':'/SmartLicit/File/Expedientes',
    'smart-lex':'/SmartLicit/Lex/Amparo fiscal Grupo Atlas/Escritos',
    'tender-gov':'/SmartLicit/Tender Gov/Proyecto institucional',
    'tender-corp':'/SmartLicit/Tender Corp/Procedimientos corporativos',
    'pricing-gov':'/SmartLicit/Pricing Gov/Estudios institucionales',
    'pricing-corp':'/SmartLicit/Pricing Corp/Estudios corporativos',
    'planes':'/SmartLicit/Planes',
    'blog':'/SmartLicit/Blog',
    'ipg':'/SmartLicit/IPG',
    'ipp':'/SmartLicit/IPP',
    'lex-gov':'/SmartLicit/Lex Gov/Expedientes',
    'lex-corp':'/SmartLicit/Lex Corp/Proyectos',
    'efile':'/SmartLicit/eFile',
    'micuenta':'/SmartLicit/Mi Cuenta',
    'gdrive':'/SmartLicit/Workspace'
  };
  function parseRoute(){
    const raw = (window.location.hash || '').replace(/^#/, '');
    const params = new URLSearchParams(raw);
    let page = params.get('page') || 'home';
    if(!pageFileMap[page]) page = 'home';
    return {page, anchor: params.get('anchor') || ''};
  }
  let routeState = parseRoute();
  let current = routeState.page;
  body.dataset.page = current;
  function routeFor(page, anchor){ return '#page=' + encodeURIComponent(page || 'home') + (anchor ? '&anchor=' + encodeURIComponent(anchor) : ''); }
  function showToast(msg){
    if(!toast) return;
    toast.textContent = msg || 'Vista cargada';
    toast.classList.add('active');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=>toast.classList.remove('active'), 1800);
  }
  function getMode(){ try{ return localStorage.getItem('slxAuthMode') || 'offline'; }catch(e){ return 'offline'; } }
  function isOnline(){ return getMode() === 'online'; }
  function mapHrefToRoute(href){
    if(!href) return '';
    if(/^mailto:|^tel:|^https?:/i.test(href)) return '';
    if(href.startsWith('#')) return '';
    const decoded = decodeURIComponent(String(href).trim());
    const parts = decoded.split('#');
    const noHash = parts[0].replace(/^\.\.\//,'').replace(/^\.\//,'');
    const file = noHash.split('/').pop();
    const mapped = oldFileMap[noHash] || oldFileMap[file] || '';
    if(!mapped) return '';
    const anchor = parts[1] ? parts.slice(1).join('#') : '';
    return mapped + (anchor ? '&anchor=' + encodeURIComponent(anchor) : '');
  }
  function normalizeTopHref(href){ return mapHrefToRoute(href) || href; }
  function setMode(mode, redirect){
    const next = mode === 'offline' ? 'offline' : 'online';
    try{ localStorage.setItem('slxAuthMode', next); }catch(e){}
    updateAuthControl();
    updateDriveControl();
    if(redirect){
      const mapped = normalizeTopHref(redirect);
      if(mapped && mapped.startsWith('#')){ window.location.hash = mapped.slice(1); return; }
      if(mapped) window.location.href = mapped;
      return;
    }
    loadFrame();
    showToast(next === 'online' ? 'Modo online activo' : 'Modo offline activo');
  }
  function currentDriveFolder(){ return driveFolders[current] || '/SmartLicit/Tender/Guantes de nitrilo'; }
  function ensureShellModal(){
    let modal = document.getElementById('slxShellModal');
    if(modal) return modal;
    modal = document.createElement('div');
    modal.id = 'slxShellModal';
    modal.className = 'slx-shell-modal';
    modal.setAttribute('role','dialog');
    modal.setAttribute('aria-modal','true');
    modal.innerHTML = '<div class="slx-shell-modal-card"><div class="slx-shell-modal-head"><div><h2 id="slxShellModalTitle">SmartLicit</h2><p id="slxShellModalText">Acción segura.</p></div><button class="slx-shell-modal-close" type="button" aria-label="Cerrar">×</button></div><div class="slx-shell-modal-body" id="slxShellModalBody"></div></div>';
    document.body.appendChild(modal);
    modal.addEventListener('click', e=>{ if(e.target === modal) closeShellModal(); });
    modal.querySelector('.slx-shell-modal-close').addEventListener('click', closeShellModal);
    return modal;
  }
  function closeShellModal(){ const modal = document.getElementById('slxShellModal'); if(modal) modal.classList.remove('open'); }
  function openShellModal(opts){
    const modal = ensureShellModal();
    modal.querySelector('#slxShellModalTitle').textContent = (opts && opts.title) || 'SmartLicit';
    modal.querySelector('#slxShellModalText').textContent = (opts && opts.text) || '';
    modal.querySelector('#slxShellModalBody').innerHTML = (opts && opts.body) || '';
    modal.classList.add('open');
    return modal;
  }
  function installDriveControl(){
    if(!accountWrap || !accountWrap.parentElement || document.getElementById('slxDriveControl')) return;
    const drive = document.createElement('button');
    drive.type = 'button';
    drive.id = 'slxDriveControl';
    drive.className = 'slx-drive-control';
    drive.addEventListener('click', showDriveModal);
    const auth = document.getElementById('slxAuthMode');
    accountWrap.parentElement.insertBefore(drive, auth || accountWrap);
    updateDriveControl();
  }
  function updateDriveControl(){
    const drive = document.getElementById('slxDriveControl');
    if(!drive) return;
    const online = isOnline();
    drive.classList.toggle('disconnected', !online);
    const gIcon = window.SLX_ASSETS && window.SLX_ASSETS['google-drive.svg'];
    const img = gIcon ? '<img src="'+gIcon+'" alt="Google Drive">' : '';
    if(online){
      drive.title = 'Cuenta conectada: rockyratapiedra@gmail.com';
      drive.innerHTML = img + '<span class="drive-detail"><strong>Drive activo</strong><span class="optional"> · rockyratapiedra@gmail.com · '+currentDriveFolder()+' · Sincronizado</span></span>';
    }else{
      drive.title = 'Conectar Google Drive';
      drive.innerHTML = img + '<span class="drive-detail"><strong>Conectar Google Drive</strong></span>';
    }
  }
  function showDriveModal(){
    const online = isOnline();
    const folder = currentDriveFolder();
    const gIcon = window.SLX_ASSETS && window.SLX_ASSETS['google-drive.svg'];
    const icon = gIcon ? '<img src="'+gIcon+'" alt="Google Drive">' : '<span aria-hidden="true">▰</span>';
    const modal = openShellModal({
      title: online ? 'Google Drive Workspace conectado' : 'Conectar Google Drive',
      text: online ? 'Autoguardado en Drive activo para esta sección.' : 'Ingresa credenciales de Gmail y confirma tu identidad para integrar Drive.',
      body:'<div class="slx-shell-modal-row">'+icon+'<div><strong>'+(online ? 'Drive activo' : 'Conectar Google Drive')+'</strong><span>'+(online ? 'Cuenta conectada: rockyratapiedra@gmail.com' : 'Antes de login: Conectar Google Drive')+'</span></div></div><div class="slx-shell-modal-row"><span aria-hidden="true" style="font-size:20px">📁</span><div><strong>Carpeta destino</strong><span>'+folder+'</span></div></div><div class="slx-shell-modal-row"><span aria-hidden="true" style="font-size:20px">✓</span><div><strong>Estado de sincronización</strong><span>'+(online ? 'Sincronizado · Autoguardado en Drive' : 'Pendiente de autenticación segura')+'</span></div></div><div class="slx-shell-modal-actions"><button class="slx-shell-btn" type="button" data-slx-close>Cerrar</button><button class="slx-shell-btn efile" type="button" data-slx-drive-login>Ingresar credenciales de Gmail para integrar Drive</button></div>'
    });
    modal.querySelector('[data-slx-close]').addEventListener('click', closeShellModal);
    modal.querySelector('[data-slx-drive-login]').addEventListener('click', ()=>{ closeShellModal(); setMode('online'); });
  }
  function toggleOnlineMode(){ setMode(isOnline() ? 'offline' : 'online'); }
  function installAuthControl(){
    if(!accountWrap || !accountWrap.parentElement || document.getElementById('slxAuthMode')) return;
    const control = document.createElement('button');
    control.type = 'button';
    control.id = 'slxAuthMode';
    control.className = 'slx-auth-control';
    control.addEventListener('click', toggleOnlineMode);
    accountWrap.parentElement.insertBefore(control, accountWrap);
    updateAuthControl();
  }
  function updateAuthControl(){
    const control = document.getElementById('slxAuthMode');
    const online = isOnline();
    body.dataset.authMode = online ? 'online' : 'offline';
    if(control){
      control.classList.toggle('online', online);
      control.innerHTML = '<span class="slx-auth-ray" aria-hidden="true">⚡</span>';
      control.title = online ? 'Modo online activo · presiona para apagar' : 'Modo offline activo · presiona para activar online';
      control.setAttribute('aria-label', online ? 'Modo online activo' : 'Modo offline activo');
    }
  }
  function activateNav(){
    body.dataset.page = current;
    document.title = titleMap[current] || 'SmartLicit';
    document.querySelectorAll('[data-page]').forEach(a => {
      a.classList.toggle('active', a.dataset.page === current);
    });
    document.querySelectorAll('.slx-nav-dropdown').forEach(drop => {
      const groupActive = Array.from(drop.querySelectorAll('[data-page]')).some(a => a.dataset.page === current);
      const trigger = drop.querySelector('.slx-nav-trigger');
      drop.classList.toggle('active', groupActive);
      if(trigger) trigger.classList.toggle('active', groupActive);
    });
    if(accountTrigger){
      accountTrigger.classList.toggle('active', ['micuenta','efile','gdrive'].includes(current));
      accountTrigger.classList.toggle('gdrive-active', current === 'gdrive');
    }
  }
  function chosenBaseSrc(){
    if(!isOnline() && gatedOfflineMap[current]) return gatedOfflineMap[current];
    return onlineSrcMap[current] || onlineSrcMap.home;
  }
  function loadFrame(){
    if(!iframe) return;
    activateNav();
    updateDriveControl();
    loader && loader.classList.add('active');
    const key = chosenBaseSrc();
    const safeSrc = key || onlineSrcMap.home || 'sections/home.html';
    if(iframe.getAttribute('src') !== safeSrc){
      iframe.setAttribute('src', safeSrc);
    }else{
      try{ iframe.contentWindow.location.reload(); }catch(e){}
    }
  }
  function scrollAnchorInFrame(){
    const anchor = parseRoute().anchor;
    if(!anchor || !iframe) return;
    try{
      const doc = iframe.contentDocument;
      if(!doc) return;
      const el = doc.getElementById(anchor) || doc.querySelector('[name="'+CSS.escape(anchor)+'"]');
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }catch(e){}
  }
  function patchInnerLinks(){
    try{
      const doc = iframe.contentDocument;
      if(!doc) return;
      doc.querySelectorAll('a[href]').forEach(a=>{
        const raw = (a.getAttribute('href') || '').trim();
        const mapped = mapHrefToRoute(raw);
        if(mapped){
          a.setAttribute('target','_top');
          a.setAttribute('href', mapped);
        }
      });
      scrollAnchorInFrame();
    }catch(e){}
  }
  function closeNavDropdowns(except){
    document.querySelectorAll('.slx-nav-dropdown.open').forEach(drop => {
      if(drop === except) return;
      drop.classList.remove('open');
      const trigger = drop.querySelector('.slx-nav-trigger');
      if(trigger) trigger.setAttribute('aria-expanded','false');
    });
  }
  document.querySelectorAll('.slx-nav-trigger').forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      const drop = trigger.closest('.slx-nav-dropdown');
      if(!drop) return;
      const nextOpen = !drop.classList.contains('open');
      closeNavDropdowns(drop);
      drop.classList.toggle('open', nextOpen);
      trigger.setAttribute('aria-expanded', String(nextOpen));
    });
  });
  document.querySelectorAll('[data-placeholder="true"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      closeNavDropdowns();
      if(siteNav) siteNav.classList.remove('open');
      showToast('Sección en desarrollo');
    });
  });
  if(mobileToggle){ mobileToggle.addEventListener('click',()=> { siteNav && siteNav.classList.toggle('open'); closeNavDropdowns(); }); }
  if(accountTrigger){
    accountTrigger.addEventListener('click', (e)=>{
      e.preventDefault();
      const open = !accountWrap.classList.contains('open');
      accountWrap.classList.toggle('open', open);
      accountTrigger.setAttribute('aria-expanded', String(open));
    });
  }
  document.addEventListener('click',(e)=>{
    if(siteNav && !siteNav.contains(e.target)) closeNavDropdowns();
    if(accountWrap && !accountWrap.contains(e.target)){
      accountWrap.classList.remove('open');
      accountTrigger && accountTrigger.setAttribute('aria-expanded','false');
    }
  });
  window.addEventListener('message', (event)=>{
    const data = event.data || {};
    if(data.type === 'slx-auth-mode'){
      setMode(data.mode, normalizeTopHref(data.redirect));
      return;
    }
    if(data.type === 'slx:set-auth'){
      setMode(data.state === 'offline' ? 'offline' : 'online', normalizeTopHref(data.href));
      return;
    }
    if(data.type === 'slx:navigate'){
      const href = normalizeTopHref(data.href);
      if(href && href.startsWith('#')) window.location.hash = href.slice(1);
      else if(href) window.location.href = href;
    }
  });
  if(iframe){
    iframe.addEventListener('load',()=>{
      loader && loader.classList.remove('active');
      patchInnerLinks();
    });
  }
  window.addEventListener('hashchange',()=>{
    const next = parseRoute();
    if(next.page !== current){
      current = next.page;
      routeState = next;
      loadFrame();
    }else{
      scrollAnchorInFrame();
    }
  });
  document.querySelectorAll('a[data-page]').forEach(a=>{
    a.addEventListener('click', e=>{
      const page = a.dataset.page;
      if(page && pageFileMap[page]){
        e.preventDefault();
        window.location.hash = routeFor(page).slice(1);
        closeNavDropdowns();
        if(siteNav) siteNav.classList.remove('open');
      }
    });
  });
  installAuthControl();
  installDriveControl();
  activateNav();
  loadFrame();
})();
