function nestedObject(){
    var siswa = {
        nama : "Syafa",
        ranking : {
            semester1 : 1,
            semester2 : 2,
            semester3 : 3,
            semester4 : 1
        }
    }
    console.log(siswa.ranking.semester4);
}