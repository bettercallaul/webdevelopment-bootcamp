function getMilk(money, perBotol) {
    
    console.log("beli " + tungBotol(money, perBotol) + " botol susu");
return hitungKembalian(money, perBotol);
}

function tungBotol(uangAwal, perBotol) {
    let jumlahBotol = Math.floor(uangAwal / perBotol);
    return jumlahBotol;
    
}

function hitungKembalian(jumlahAwal, perBotol) {

    let kembalian = jumlahAwal % perBotol;
    return kembalian;
    
}

console.log("segini " + getMilk(33, 2) + " kembaliannya bang " );

