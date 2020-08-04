//version ES 6
//TOKO KUCING ME OW
class kucing {
    constructor (ras, warna){
        this.ras = ras;
        this.warna = warna;
        this.kandang = false;
    }
    
    //kucing adalah class dari blueprint di atas sendiri
    warnaKucing() {
        console.log(`Warna Bulu : ${this.warna}`);
    }
    
    rasKucing() {
        console.log(`Ada yang beli`);
        console.log(`Ras Kucing : ${this.ras}`);
    }
    
    kandangKucing() {
        this.kandang = true;
        console.log(`Beli kandang : ${this.kandang ? "Iya" : "Tidak"}`);
        console.log();
    }
}

//cara membuat instance baru dengan |new|
//kucingJhon merupakan instance dari kucing
const kucingJhon = new kucing("Persia", "Oren");
kucingJhon.rasKucing();
kucingJhon.warnaKucing();
kucingJhon.kandangKucing();

const kucingAni = new kucing("Kampung","Pink");
kucingAni.rasKucing();
kucingAni.warnaKucing();
kucingAni.kandangKucing();