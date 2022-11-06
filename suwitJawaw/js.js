function compChoose() {
  const comp = Math.random();

  if (comp < 0.34) return 'gajah';
  if (comp >= 0.34 && comp < 0.67) return 'orang';
  return 'semut';
}

function winResult(com, player) {
  if (player == com) return 'SERI';
  if (player == 'gajah') return com == 'orang' ? 'WIN' : 'LOSE';
  if (player == 'orang') return com == 'gajah' ? 'WIN' : 'LOSE';
  if (player == 'semut') return com == 'orang' ? 'WIN' : 'LOSE';
}

const choose = document.querySelectorAll('li img');
choose.forEach(function (opt) {
  opt.addEventListener('click', function () {
    const comp = compChoose();
    const play = opt.className;
    const result = winResult(comp, play);
    let gamDefaul = document.querySelector('body > div > div.area-komputer > img');

    gamDefaul.setAttribute('src', 'img/' + comp + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = result;
  });
});
