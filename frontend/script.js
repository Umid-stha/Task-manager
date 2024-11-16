const modalOverlay = document.querySelector('.modal-overlay');
const contentContainer = document.querySelector('.main');
const loginModalHtml = `
  <div class="modal modal--login">
  <h2>Login</h2>
  <div class="modal__input-group">
    <label for="username">Username:</label>
    <input type="text" id="username" class="modal__input-field" placeholder="Username">
  </div>
  <div class="modal__input-group">
    <label for="password">Password:</label>
    <input type="password" id="password" class="modal__input-field" placeholder="Password">
  </div>
  <div class="button-flex">
    <button class="login modal-action modal__action-btn" data-action="login">Login</button>
  </div>
  <small>Don't have an account? <p class="modal__link modal-link" data-action="signup">Sign up</p></small>
</div>`;

const signupModalHtml = `
  <div class="modal modal--signup">
  <h2>Sign Up</h2>
  <div class="modal__input-group">
    <label for="signup-email">Email:</label>
    <input type="email" id="signup-email" class="modal__input-field" placeholder="Email">
  </div>
  <div class="modal__input-group">
    <label for="signup-username">Username:</label>
    <input type="text" id="signup-username" class="modal__input-field" placeholder="Username">
  </div>
  <div class="modal__input-group">
    <label for="signup-password">Password:</label>
    <input type="password" id="signup-password" class="modal__input-field" placeholder="Password">
  </div>
  <div class="button-flex">
    <button class="modal__action-btn login modal-sign-up modal-action" data-action="signup">Sign Up</button>
  </div>
  <small>Already have an account? <p class="modal__link modal-link" data-action="login">Login</p></small>
</div>`;

// Function to open the modal and display login content
function openModal(contentHtml) {
  modalOverlay.innerHTML = contentHtml;
  modalOverlay.classList.add('active');
  contentContainer.classList.add('blur');
}

// Function to close modal
function closeModal() {
  modalOverlay.classList.remove('active');
  contentContainer.classList.remove('blur');
  modalOverlay.innerHTML = '';
}

document.getElementById('login-btn').addEventListener('click', () => {
  openModal(loginModalHtml);
});

// Close modal when clicking outside modal content
modalOverlay.addEventListener('click', (e) => {
  const target = e.target;

  // Close modal if clicking outside content
  if (target === modalOverlay) {
    closeModal();
  }

  if (target.classList.contains('modal-link')) {
    const action = target.dataset.action;
    if (action === 'signup') {
      openModal(signupModalHtml);
    } else if (action === 'login') {
      openModal(loginModalHtml);
    }
}

// Handle modal action buttons (if needed)
if (target.classList.contains('modal-action')) {
  const action = target.dataset.action;
  console.log(`${action} button clicked!`);
  // Add form submission logic here if needed
}
});

