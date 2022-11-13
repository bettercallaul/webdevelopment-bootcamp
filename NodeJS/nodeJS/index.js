function chucks(name, nilai) {
  this.name = name;
  this.nilai = nilai;
  this.newFunction = function (pengurangan) {
    this.nilai -= pengurangan;
    console.log(`assalamualaikum ${this.name}, nilai anda sudah jadi ${this.nilai}`);
  };
}

const baru = new chucks('haji epul', 8744);
console.log(baru.name);
console.log(baru.nilai);
console.log(baru.newFunction(4000));

function cobaLagi(name, nilai) {
  let kurawal = {};
  kurawal.name = name;
  kurawal.nilai = nilai;
  kurawal.pertambahan = function (value) {
    this.nilai += value;
    console.log(`halo ${this.name}, nilai mu sudah jadi ${this.nilai}, hatur nuhun`);
  };
  return kurawal;
}

const keriting = cobaLagi('adam giri', 1967);

console.log(keriting.name);
console.log(keriting.nilai);
console.log(keriting.pertambahan(55));
