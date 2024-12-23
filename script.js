document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de categoría
    const botonesCategorias = document.querySelectorAll('.categoria-btn');
    const fotoItems = document.querySelectorAll('.foto-item');

    // Agregar evento click a cada botón
    botonesCategorias.forEach(boton => {
        boton.addEventListener('click', () => {
            // Remover clase activo de todos los botones
            botonesCategorias.forEach(b => b.classList.remove('activo'));
            // Agregar clase activo al botón clickeado
            boton.classList.add('activo');

            // Obtener la categoría seleccionada
            const categoriaSeleccionada = boton.getAttribute('data-categoria');

            // Mostrar/ocultar fotos según la categoría
            fotoItems.forEach(foto => {
                if (categoriaSeleccionada === 'todos') {
                    foto.style.display = 'block';
                } else {
                    if (foto.getAttribute('data-categoria') === categoriaSeleccionada) {
                        foto.style.display = 'block';
                    } else {
                        foto.style.display = 'none';
                    }
                }
            });
        });
    });
});
