document.addEventListener('DOMContentLoaded', function() {
    const letter = document.getElementById('letter');
    letter.style.opacity = '0';
    letter.style.transform = 'translateY(20px)';
});

document.getElementById('envelope').addEventListener('click', function() {
    this.classList.toggle('open');
    const letter = document.getElementById('letter');
    letter.classList.toggle('visible');
});
