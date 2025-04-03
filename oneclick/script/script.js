let buttonsesion = document.querySelector('.buttonsesion');
let login = 'iniciar sesion';
let logout = 'cerrar sesion';
let buttondefinition = document.querySelector('.buttondefinition');
let likeButtons = document.querySelectorAll('.like-button'); 

const updateLikeCount = (button, petName) => {
    alert(`${petName} was liked`);
    let currentCount = parseInt(button.textContent) || 0; 
    button.textContent = `${currentCount + 1} me gusta`; 
};

buttonsesion.addEventListener('click', () => {
    buttonsesion.textContent = buttonsesion.textContent === login ? logout : login;
});

buttondefinition.addEventListener('click', () => {
    buttondefinition.remove();
});

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        let petName = button.classList.contains('cat-like') ? 'gato atigrado' : 'golden retriever';
        updateLikeCount(button, petName);
    });
});