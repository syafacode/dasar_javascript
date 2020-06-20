//digunakan untuk menampilkan perulangan object
function callObject(){
    var siswa = {
        nama : "Syafa",
        umur : 18,
        jurusan : "RPL",
        semester : 4
    }
    for(let x in siswa){
        console.log(siswa[x])
    }
}

callObject();