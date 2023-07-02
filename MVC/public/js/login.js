// Selecting the login form element
const loginForm = document.querySelector('.login-form');

// Function to handle the login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collecting the form input values
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Sending a POST request to the login route
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If the login is successful, redirect the user to the posts page
      document.location.replace('/api/posts');
    } else {
      // If the login fails, display an error message
      alert("Your email, password, or both are wrong!");
    }
  }
};

// Adding an event listener to the login form
if (loginForm) {
  loginForm.addEventListener('submit', loginFormHandler);
}

// Selecting the signup form element
const signupForm = document.querySelector('.signup-form');

// Function to handle the signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collecting the form input values
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (password.length < 8) {
    alert("Password must be at least 8 characters long!");
    return;
  }

  if (name && email && password) {
    // Sending a POST request to the signup route
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/posts');
    } else {
      // If the signup fails, display an error message
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  }
};

// Adding an event listener to the signup form
if (signupForm) {
  signupForm.addEventListener('submit', signupFormHandler);
}