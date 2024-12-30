const openModalButton = document.getElementById('openModal');
const closeModalButtons = document.querySelectorAll('#closeModal, #closeFooter');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});



  
  