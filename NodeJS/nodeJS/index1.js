function fibbo(f) {
  let kosong = [];
  let satu = 1;
  let minSsatu = -1;
  let noll = 0;

  for (let i = 0; i < f; i++) {
    noll = satu + minSsatu;
    kosong.push(noll);
    minSsatu = satu;
    satu = noll;
  }
  console.log(kosong);
}

console.log(fibbo(21));

let sum = 0;
let arr = [35, 21, 78, 22];
arr.forEach(fungsi);
function fungsi(array) {
  sum += array;
}

console.log(sum);
