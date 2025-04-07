document.addEventListener('DOMContentLoaded', function() {
    const enviarComentarioButton = document.querySelector('#enviar-comentario');
    const textoComentarioInput = document.querySelector('#texto-comentario');
    const comentariosLista = document.querySelector('#comentarios-lista');
    const likeButtons = document.querySelectorAll('.like-button'); 

    enviarComentarioButton.addEventListener('click', function() {
        const comentarioTexto = textoComentarioInput.value.trim();
        if (comentarioTexto) {
            const comentarioItem = document.createElement('div');
            comentarioItem.classList.add('comentario-item');
            comentarioItem.textContent = comentarioTexto;
            comentariosLista.appendChild(comentarioItem);
            textoComentarioInput.value = '';
        }
    });


    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            let likes = parseInt(button.dataset.likes);
            likes++;
            button.dataset.likes = likes;
            button.textContent = `Me gusta (${likes})`;
        });
    });
});