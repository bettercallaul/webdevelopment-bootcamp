// random names generator
function panggil(names) {
  names = ['henry', 'cavill', 'dwayne', 'bruce', 'samantha'];
  let begins = names[Math.floor(Math.random() * names.length)];
  return begins + ' gitu dia mah orangnya aneh cuyyy!';
}
panggil();

// tamu undangan
let prompt = window.prompt('enter your name!');
let array = ['lulu', 'aulia', 'rahmah', 'sultan', 'bajarmasin'];
if (array.includes(prompt)) {
  alert('selamat datang');
} else {
  alert('pergi sana');
}

// fizz buzz
let itScool = [];
let count = 1;
function nice() {
  if (count % 5 == 0) {
    itScool.push('beng beng');
  } else if (count % 9 == 0) {
    itScool.push("that's life");
  } else {
    itScool.push(count);
  }
  count++;
  console.log(itScool);
}
