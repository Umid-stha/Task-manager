const modalOverlay = document.querySelector('.modal-overlay');
const contentContainer = document.querySelector('.main');

// Function to open modal and apply blur effect
function openModal() {
  modalOverlay.classList.add('active');
  contentContainer.classList.add('blur');
}

// Function to close modal and remove blur effect
function closeModal() {
  modalOverlay.classList.remove('active');
  contentContainer.classList.remove('blur');
}

// Example: Open the modal on button click
document.getElementById('login-btn').addEventListener('click', openModal);

// Close modal when clicking outside of it (optional)
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
