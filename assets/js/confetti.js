const container = document.querySelector('.bg-floating');
if (container) {
  const ITEMS = ["💜", "🧡", "🌷", "✨", "🦋", "⭐", "☀️"]; const COUNT = 42;
  for (let i = 0; i < COUNT; i++) {
    const s = document.createElement('span'); s.className='float';
    s.textContent = ITEMS[Math.floor(Math.random()*ITEMS.length)];
    const size = (Math.random()*1.4)+0.7; const left = Math.random()*100; const delay = Math.random()*8; const dur = 14+Math.random()*16;
    s.style.left = `${left}vw`; s.style.fontSize = `${size}rem`;
    s.style.setProperty('--x', `${(Math.random()*40)-20}vw`);
    s.style.setProperty('--dur', `${dur}s`); s.style.animationDelay = `-${delay}s`;
    container.appendChild(s);
  }
}
