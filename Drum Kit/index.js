let loopHole = document.querySelectorAll('.drum').length;

for (let i = 0; i < loopHole; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    let boomBoom = this.innerHTML;
    makeSound(boomBoom);
    tombolGerak(boomBoom);
  });
}

addEventListener('keydown', function (stb) {
  makeSound(stb.key);
  tombolGerak(stb.key);
});

function makeSound(key) {
  switch (key) {
    case 'a':
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 's':
      let kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
    case 'd':
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'f':
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'g':
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'h':
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'j':
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
  }
}

function tombolGerak(keySkrg) {
  let niceBro = document.querySelector('.' + keySkrg);
  niceBro.classList.add('diteken');
  setTimeout(function () {
    niceBro.classList.remove('diteken');
  }, 100);
}
