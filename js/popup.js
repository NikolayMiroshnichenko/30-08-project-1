const openModalBtn = document.querySelector('.js-timer-btn');
const modal = document.querySelector('.modal-wrapper');

openModalBtn.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);


function openModal() {
    modal.style.display = 'block';
}
function closeModal(e) {
    if(e.target.dataset.close === 'close') {
        modal.style.display = 'none';
    }
}