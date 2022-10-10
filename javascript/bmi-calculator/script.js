function calculate() {
  let bmi;
  let hasil = document.getElementById('hasil');
  let beratBadan = parseInt(document.getElementById('weight').value);
  let tinggiBadan = parseInt(document.getElementById('height').value);

  document.getElementById('beratBadan-val').textContent = beratBadan + 'kg';
  document.getElementById('tinggiBadan-val').textContent = tinggiBadan + 'cm';

  bmi = (beratBadan / Math.pow(tinggiBadan / 100, 2)).toFixed(1);
  hasil.textContent = bmi;

  if (bmi < 18.5) {
    KATEGORI1 = 'kekurusan nih😯';
    hasil.style.color = '#ffc44d';
  } else if (bmi >= 25 && bmi <= 29.9) {
    KATEGORI1 = 'Kegendutan nih bro, diet napa dah🥱';
    hasil.style.color = '#ff884d';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    KATEGORI1 = 'nah bagus udah normal BB nya👍';
    hasil.style.color = '#0be881';
  } else {
    KATEGORI1 = 'et dah gendut banget lu 🐵';
    hasil.style.color = '#ff5e57';
  }

  document.getElementById('hasil').textContent = KATEGORI1;
}
