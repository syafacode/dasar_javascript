function tipedata(){
    var data = 2; //number
    var data2 = '2'; //string
    //cara mengecek typedata apa
    console.log(typeof(data));
    console.log(typeof(data2));

    if(data === 2){ //gunakan spesific class
        return "Sukses"
    }else{
        return "Gagal"
    }
}

console.log(tipedata()); //menampilkan