const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');
const closeButton = document.querySelector('.close-button');

envelope.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
    }
});

letter.addEventListener('click', (e) => {
    if (e.target !== closeButton) {
        e.stopPropagation();
        if (envelope.classList.contains('open')) {
            letter.classList.add('open');
        }
    }
});

closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    letter.classList.remove('open');
}); 