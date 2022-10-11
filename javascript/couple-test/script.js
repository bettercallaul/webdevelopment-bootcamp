let nameCouple1 = prompt('masukan nama anda');
let nameCouple2 = prompt('masukan nama pasangan anda');
let randomGenerator = Math.random() * 100;
randomGenerator = Math.floor(randomGenerator) + 1;
if (randomGenerator > 59) {
  console.log('selamat ' + nameCouple1 + ' & ' + nameCouple2 + ' anda sudah cocok dengan nilai ' + randomGenerator + '%');
} else {
  console.log('punten belum cocok, lantaran nilainya cuma ' + randomGenerator + '%');
}
