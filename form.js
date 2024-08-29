
  
  
  const form = document.getElementById('myForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  
form.addEventListener('submit', (e) => {
  e.preventDefault();
    
  // Name validation
  if (nameInput.value.trim().length < 5) {
    document.getElementById('nameError').textContent = 'Name must be at least 5 characters';
  } else {
    document.getElementById('nameError').textContent = '';
  }
    
  // Email validation
  if (!emailInput.value.includes('@')) {
    document.getElementById('emailError').textContent = 'Enter correct email';
  } else {
    document.getElementById('emailError').textContent = '';
  }
    
  // Phone validation
  if (phoneInput.value === '123456789' || phoneInput.value.length !== 10) {
    document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number';
  } else {
    document.getElementById('phoneError').textContent = '';
  }
    
  // Password validation
  if (passwordInput.value === 'password' || passwordInput.value === nameInput.value || passwordInput.value.length < 8) {
    document.getElementById('passwordError').textContent = 'Password is not strong';
  } else {
    document.getElementById('passwordError').textContent = '';
  }
    
  // Confirm Password validation
  if (passwordInput.value !== confirmPasswordInput.value) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
  } else {
    document.getElementById('confirmPasswordError').textContent ='';
  }


// Birthdate validation
if(birthdateInput.value === '') {
  document.getElementById('birthdateError').textContent = 'Enter your birthdate';
} else {
  document.getElementById('birthdateError').textContent = '';
}

// Age validation
if (ageInput.value < 18) {
  document.getElementById('ageError').textContent = 'You must be at least 18 years old';
} else {
  document.getElementById('ageError').textContent = '';
}

// Terms and Conditions validation
if (!termsInput.checked) {
  document.getElementById('termsError').textContent = 'You must agree to the terms and conditions';
} else {
  document.getElementById('termsError').textContent = '';
}
});


