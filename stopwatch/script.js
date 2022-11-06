window.onload = function () {
  let detik = 00;
  let puluh = 00;
  let appendPuluh = document.getElementById('puluh');
  let appendDetik = document.getElementById('detik');
  let tombolMulai = document.getElementById('button-start');
  let tombolStop = document.getElementById('button-stop');
  let tombolReset = document.getElementById('button-reset');
  let Interval;

  tombolMulai.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  tombolStop.onclick = function () {
    clearInterval(Interval);
  };

  tombolReset.onclick = function () {
    clearInterval(Interval);
    puluh = '00';
    detik = '00';
    appendDetik.innerHTML = detik;
    appendPuluh.innerHTML = puluh;
  };

  function startTimer() {
    puluh++;

    if (puluh <= 9) {
      appendPuluh.innerHTML = '0' + puluh;
    }

    if (puluh > 9) {
      appendPuluh.innerHTML = puluh;
    }

    if (puluh > 99) {
      console.log('detik');
      detik++;
      appendDetik.innerHTML = '0' + detik;
      puluh = 0;
      appendPuluh.innerHTML = '0' + 0;
    }

    if (detik > 9) {
      appendDetik.innerHTML = detik;
    }
  }
};
