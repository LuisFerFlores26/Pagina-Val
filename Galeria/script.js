document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.categoria-btn');
    const fotos = document.querySelectorAll('.foto-item');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            // Remover clase activo de todos los botones
            botones.forEach(b => b.classList.remove('activo'));
            // Agregar clase activo al botón clickeado
            boton.classList.add('activo');

            const categoria = boton.dataset.categoria;

            fotos.forEach(foto => {
                if (categoria === 'todos' || foto.dataset.categoria === categoria) {
                    foto.style.display = 'block';
                } else {
                    foto.style.display = 'none';
                }
            });
        });
    });
}); 