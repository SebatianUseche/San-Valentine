const btnNo = document.getElementById('btn-no');
if (btnNo) {
  const PAD = 10, MOVE_DIST = 200, SAFE = 120;
  const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
  function randomPos(){ const vw = Math.max(document.documentElement.clientWidth, window.innerWidth||0); const vh = Math.max(document.documentElement.clientHeight, window.innerHeight||0); const r = btnNo.getBoundingClientRect(); const x = PAD + Math.random()*(vw-r.width-PAD*2); const y = PAD + Math.random()*(vh-r.height-PAD*2); btnNo.style.position='fixed'; btnNo.style.left=`${x}px`; btnNo.style.top=`${y}px`; }
  function moveAwayFrom(x,y){ const r=btnNo.getBoundingClientRect(); const cx=r.left+r.width/2, cy=r.top+r.height/2; const dx=cx-x, dy=cy-y; const len=Math.hypot(dx,dy)||1; const nx=dx/len, ny=dy/len; const vw=Math.max(document.documentElement.clientWidth, window.innerWidth||0); const vh=Math.max(document.documentElement.clientHeight, window.innerHeight||0); let tx=r.left+nx*MOVE_DIST, ty=r.top+ny*MOVE_DIST; tx=clamp(tx,8,vw-r.width-8); ty=clamp(ty,8,vh-r.height-8); btnNo.style.position='fixed'; btnNo.style.left=`${tx}px`; btnNo.style.top=`${ty}px`; }
  function activate(){ if(btnNo.dataset.activated==='true') return; btnNo.dataset.activated='true'; document.addEventListener('mousemove', e=>{ if(btnNo.dataset.activated!=='true') return; const r=btnNo.getBoundingClientRect(); const near=e.clientX>=r.left-SAFE && e.clientX<=r.right+SAFE && e.clientY>=r.top-SAFE && e.clientY<=r.bottom+SAFE; if(near) moveAwayFrom(e.clientX,e.clientY); }, {passive:true}); btnNo.addEventListener('touchstart', e=>{ if(btnNo.dataset.activated!=='true') return; e.preventDefault(); const t=e.touches[0]; moveAwayFrom(t.clientX,t.clientY); }, {passive:false}); btnNo.style.transition='left .18s ease, top .18s ease, transform .12s ease'; randomPos(); }
  btnNo.addEventListener('click', e=>{ if(btnNo.dataset.activated!=='true'){ e.preventDefault(); activate(); }});
  btnNo.addEventListener('mousedown', e=>{ if(btnNo.dataset.activated==='true'){ e.preventDefault(); randomPos(); }});
  btnNo.addEventListener('focus', ()=>{ if(btnNo.dataset.activated==='true') randomPos(); });
}
