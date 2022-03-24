

var lowerAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p', 'q', 'r', 's', 't', 'u','v','w', 'x', 'y', 'z'];
 var upperC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V' , 'W', 'X', 'Y', 'Z'];
 var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '|', '?','/', ';', ':'];
var PWA = [];




// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector('#password');
// Write password to the #password input

// Add event listener to generate button'
var passPool = lowerAlpha;

function userChoice () {
  var choose = prompt(" pick strength weak , medium, or strong to include caps and special characters");
  choose = choose.toUpperCase();
if (choose == 'WEAK') {
  passPool = lowerAlpha;
  pwMaker();
}
 else if (choose == 'MEDIUM') {
  
  passPool = passPool.concat(upperC, lowerAlpha);
  pwMaker();
} else if (choose == 'STRONG') {

passPool = passPool.concat(upperC, special);
pwMaker();
};


};

function pwMaker () {
//choose length
PWA = [];
var passLength = prompt('choose length between 8 and 128')


for (i=0; i<passLength; i++)  {
  
  var oneChar = passPool[Math.floor(Math.random() * passPool.length)];
PWA.push(oneChar);
}

password.innerHTML = PWA.join('')
PWA = [];
};



generateBtn.addEventListener("click", userChoice);




