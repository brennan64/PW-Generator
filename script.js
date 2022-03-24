const alphabet = {
  lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  symbols: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '|', '?', '/', ';', ':'],
};

function getPasswordStrength() {
  const strength = prompt('Choose your password strength. The options are: weak, medium, and strong.', 'weak');
  const options = ['weak', 'medium', 'strong'];

  if (!options.includes(strength)) {
    alert('Please enter a valid password strength. The options are: weak, medium, and strong.');
    return getPasswordStrength();
  }

  return strength;
}

function getPasswordLength() {
  const input = prompt('Choose the length of your password by entering a value between 8 and 128.', '8');
  const length = parseInt(input);

  if (!length || length < 8 || length > 128) {
    alert('Please enter a password length between 8 and 128.');
    return getPasswordLength();
  }

  return length;
}

function handleButtonClick() {
  const strength = getPasswordStrength();
  const length = getPasswordLength();

  let charPool = [...alphabet.lowercase];
  let password = '';

  if (strength === 'strong') charPool = [...charPool, ...alphabet.uppercase, ...alphabet.symbols];
  if (strength === 'medium') charPool = [...charPool, ...alphabet.uppercase];

  for (let i = 0; i < length; i++) {
    const char = charPool[Math.floor(Math.random() * charPool.length)];
    password += char;
  }

  document.querySelector('#password').innerHTML = password;
}

document.querySelector('#generate').addEventListener('click', handleButtonClick);
