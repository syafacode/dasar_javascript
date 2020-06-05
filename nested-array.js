function nestedArray() {
    var dataIsi = [
        ["A", "B", "C"],
        ["Bola1", "Bola2", "Bola3"],
        ["Mobil1", "Mobil2", "Mobil3"]
    ]

    //menghitung jumlah array data
    console.log(dataIsi.length);
    //menampilkan array data pada index 0
    console.log(dataIsi[0]);
    //membaca array dalam array pertama dan nested aray pertama
    console.log(dataIsi[0][0]);
}

nestedArray();