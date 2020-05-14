//break
function berhenti(){
    for(var i = 0; i <= 10; i++){
        console.log(i);
        
        if(i==5) //dalam kondisi angk 5 terpenuhi
        break; //maka akan dihentikan loop-nya
    }
    console.log("Selesai");
}

//continue
function lanjut(){
    for(var i = 0; i <= 10; i++){
        if(i==5) //melewatkan angka 5
        continue;
        console.log(i);
    }
    console.log("Selesai");
}

berhenti();