const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
const okBtn=document.querySelector("#okbtn");

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
okBtn.addEventListener('click', closeModal);

function openModal() {
  modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

