//versi lama sebelum ES6
//TOKO KUCING ME OW
function kucing(ras, warna){
    this.ras = ras;
    this.warna = warna;
    this.kandang = false;
}

//kucing adalah class dari blueprint di atas sendiri
kucing.prototype.warnaKucing = function(){
    console.log(`Warna Bulu : ${this.warna}`);
}

kucing.prototype.rasKucing = function(){
    console.log("Ada yang beli");
    console.log(`Ras Kucing : ${this.ras}`);
}

kucing.prototype.kandangKucing = function(){
    this.kandang = true;
    console.log("Beli kandang : " + (this.kandang ? "Iya" : "Tidak"));
    console.log();
}

//cara membuat instance baru dengan |new|
//kucingJhon merupakan instance dari kucing
const kucingJhon = new kucing("Persia", "Oren");
kucingJhon.rasKucing();
kucingJhon.warnaKucing();
kucingJhon.kandangKucing();

const kucingAni = new kucing("kampung","Pink");
kucingAni.rasKucing();
kucingAni.warnaKucing();
kucingAni.kandangKucing();