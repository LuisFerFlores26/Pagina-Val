document.getElementById('envelope').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('letter').classList.toggle('visible');
});