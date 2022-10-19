let mathRandom1 = Math.floor(Math.random() * 6 + 1);
let imgSource = 'images/dice' + mathRandom1 + '.png';
let imgChange = document.querySelectorAll('img')[0];
imgChange.setAttribute('src', imgSource);
//images\dice1.png

let mathRandom2 = Math.floor(Math.random() * 6 + 1);
let imgSource2 = 'images/dice' + mathRandom2 + '.png';
let imgChange2 = document.querySelectorAll('img')[1];
imgChange2.setAttribute('src', imgSource2);

if (imgSource > imgSource2) {
  document.querySelector('body > div > h1').innerHTML = 'player 1 wins';
} else if (imgSource < imgSource2) {
  document.querySelector('body > div > h1').innerHTML = 'player 2 wins';
} else {
  document.querySelector('body > div > h1').innerHTML = 'draw';
}
