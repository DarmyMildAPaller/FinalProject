document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fields = ['firstName', 'lastName', 'email', 'password', 'supportReason'];
  fields.forEach(id => {
    document.getElementById(id + 'Error').textContent = '';
  });
  document.getElementById('sexError').textContent = '';

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const sexElems = document.getElementsByName('sex');
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const contactNumber = document.getElementById('contactNumber').value.trim();
  const supportReason = document.getElementById('supportReason').value.trim();

  let sex = '';
  for (let r of sexElems) {
    if (r.checked) {
      sex = r.value;
      break;
    }
  }

  let isValid = true;
  if (!firstName) { document.getElementById('firstNameError').textContent = 'required'; isValid = false; }
  if (!lastName) { document.getElementById('lastNameError').textContent = 'required'; isValid = false; }
  if (!sex) { document.getElementById('sexError').textContent = 'required'; isValid = false; }
  if (!email) { document.getElementById('emailError').textContent = 'required'; isValid = false; }
  if (!password) { document.getElementById('passwordError').textContent = 'required'; isValid = false; }
  if (!supportReason) { document.getElementById('supportReasonError').textContent = 'required'; isValid = false; }

  if (!isValid) return;

  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('sex', sex);
  localStorage.setItem('email', email);
  localStorage.setItem('supportReason', supportReason);
  localStorage.setItem('contactNumber', contactNumber);

  window.location.href = 'proj_profile_paller.html';
});
