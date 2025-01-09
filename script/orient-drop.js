const openModalButton = document.getElementById('setting');
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
const openModal = document.getElementById('uploadfile');
      const closeModal = document.getElementById('close-popup');
      const modals = document.getElementById('uploadModal');
      const dropzone = document.getElementById('dropzone');
      const fileInput = document.getElementById('file-input');
      const fileListContainer = document.getElementById('file-list-container');
      const fileList = document.getElementById('file-list');
    
      // Open modal
      openModal.addEventListener('click', () => {
        modals.classList.remove('hidden');
        modals.classList.add('flex');
      });
    
      // Close modal
      closeModal.addEventListener('click', () => {
        modals.classList.add('hidden');
        modals.classList.remove('flex');
      });
    
      // Close modal when clicking outside the modal content
      window.addEventListener('click', (event) => {
        if (event.target === modals) {
          modals.classList.add('hidden');
          modals.classList.remove('flex');
        }
      });
    
      // Click on dropzone to open file input
      dropzone.addEventListener('click', () => {
        fileInput.click();
      });
    
      // Handle file selection
      fileInput.addEventListener('change', (event) => {
        const files = event.target.files;
        updateFileList(files);
      });
    
      // Drag-and-drop functionality
      dropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropzone.classList.add('bg-gray-200');
      });
    
      dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('bg-gray-200');
      });
    
      dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        dropzone.classList.remove('bg-gray-200');
        const files = event.dataTransfer.files;
        updateFileList(files);
      });
    
      // Update file list
      function updateFileList(files) {
        fileList.innerHTML = '';
        fileListContainer.classList.remove('hidden');
    
        Array.from(files).forEach((file) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td class="py-2 px-4">${file.name}</td>
            <td class="py-2 px-4">${(file.size / 1024).toFixed(2)} KB</td>
            <td class="py-2 px-4">Uploading...</td>
          `;
          fileList.appendChild(row);
    
          // Simulate upload progress (you can replace this with real upload logic)
          setTimeout(() => {
            row.querySelector('td:last-child').textContent = 'Completed';
          }, 1000);
        });
      }

  
  