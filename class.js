class User {
    //constructor adalah parent dari class
    constructor(nama, jobs, posisi, hobby){
        this.nama = nama;
        this.jobs = jobs;   // 'this.' merupakan nilai yang akan dirubah di dalam instance, 
        this.posisi = posisi; //digunakan untuk dapat mengatur/merubah/nenambah  isi di dalam class
        this.menikah = false;
        this._hobby = hobby;
    }

    statusMenikah(){
        this.menikah = true;
    }

    info() {
        console.log('Data Diri User');
        console.log(`Nama: ${this.nama}`)
        console.log(`Bekrja di: ${this.jobs}`);
        console.log(`Sebagai:  ${this.posisi}`);
        console.log(`Status menikah: ${this.menikah ? "Sudah" : "Belum"}`);
    }

    get hobby(){
        return `Hobi terakhir anda: ${this._hobby}`
    }

    set hobby(value){
        console.log(`Hobi diubah dari ${this._hobby} menjadi ${value}`);
        this._hobby = value;
    }
    
}
 
const userSatu = new User("Afan", "PT Garuda", "Pilot", "Traveling"); //new merupakan instance
userSatu.statusMenikah();   //PT Garuda, Pilot adalah isi class baru
userSatu.info();
console.log();//enter

const userDua = new User("Jayadi", "PT Indomie", "Warehouse", "Tidur");
userDua.statusMenikah = false; // Mengubah nilai properti menikah menjadi false
userDua.info();
console.log();//enter

const userTiga = new User("Andik", "PT Tokowsc", "OB", "Bersih - Bersih");
userTiga.info();
console.log(`Posisi anda sekarang menjadi ${userTiga.posisi}`); // menampilkan nilai posisi pada userTiga
console.log();//enter

//menggunakan property asessor
const userEmpat = new User("Toki", "CV TanboyKun", "Aktris", "Videografi");
userEmpat.info();
console.log(userEmpat.hobby); // hobby saat ini
userEmpat.hobby = "Dansa"; //mengubah nilai dari hobby
