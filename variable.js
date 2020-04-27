var message = "Hallo coding";
//let Scope umum
let msg1 = "Hallo";

const msg2 = "coding"

if(true){
    var message = 1;
    let msg1 = 2;

    //perbedaan let hanya bisa dibaca pada scope tertentu saja
    //scope saat ini menunjukkan nilai msg1 adalah 2
    console.log("testing", msg1)
}

//variable var bisa dibaca didalam scope yg lebih kecil berbeda dengan let
console.log(message);
//scope saat ini berada diluar jadi membaca nilai let msg1
//yang bernilai Hallo
console.log(msg1);