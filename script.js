

var lowerAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p', 'q', 'r', 's', 't', 'u','v','w', 'x', 'y', 'z'];
 var upperC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V' , 'W', 'X', 'Y', 'Z'];
 var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '|', '?','/', ';', ':'];
var PWA = [];
var passPool = [];

var generateBtn = document.querySelector("#generate");
var password = document.querySelector('#password');
var passPool = lowerAlpha;


function userChoice () {
  var choose = prompt(" pick strength weak( just lowercase) , medium(lower and uppercase), or strong (caps and special characters)" , " 'weak' 'medium' 'strong'   ");
  choose = choose.toUpperCase();
if (choose == 'WEAK') {
  passPool = []
  passPool = passPool.concat(lowerAlpha);
  pwMaker();
}
 else if (choose == 'MEDIUM') {
  passPool =[];
  passPool = passPool.concat(upperC, lowerAlpha);
  pwMaker();
} else if (choose == 'STRONG') {
passPool = [];
passPool = passPool.concat(upperC, special);
pwMaker();
} else {
  alert('please enter a suggested value');
};

};

function pwMaker () {
//choose length
PWA = [];
var passLength = prompt('choose length between 8 and 128' , ' 8-128 ')

if (passLength >128) {
  alert('Please enter a suggested value');
} else if (passLength < 8) {
  alert('please enter a suggested value');
} else {

for (i=0; i<passLength; i++)  {
  
  var oneChar = passPool[Math.floor(Math.random() * passPool.length)];
  PWA.push(oneChar);
};

password.innerHTML = PWA.join('')
PWA = [];
};
};

generateBtn.addEventListener("click", userChoice);




