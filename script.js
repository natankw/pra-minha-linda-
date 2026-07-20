// Corações caindo
const container = document.getElementById('heart-container');
const hearts = ['❤️', '💖', '💗', '💕', '♥️'];

function spawnHeart() {
    const el = document.createElement('div');
    el.className = 'heart';
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.fontSize = (16 + Math.random() * 26) + 'px';
    el.style.animationDuration = (5 + Math.random() * 7) + 's';
    container.appendChild(el);
    setTimeout(() => { if (el.parentNode) el.remove(); }, 12000);
}

for (let i = 0; i < 25; i++) setTimeout(spawnHeart, i * 200);
setInterval(spawnHeart, 800);

// Controle da música
const audio = document.getElementById('musica');
const btn = document.getElementById('musicBtn');

btn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        btn.textContent = '🔊 Tocar / Pausar';
    } else {
        audio.pause();
        btn.textContent = '🔇 Pausado';
    }
});

audio.addEventListener('error', function() {
    console.log('Tentando recarregar o áudio...');
    audio.load();
});
