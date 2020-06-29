const janjiJiwa = (resolve, rejected) => {
    const barista = true;
    if (barista) {
        resolve("v Kopi JanjiJiwa jadi Jiwa");//keadaan apabila terpenuhi
    } else {
        rejected("x Kopi JanjiJiwa hanya Janji")//keadaan apabila tidak memenuhi
    }
}

const janjiBeli = new Promise(janjiJiwa);
console.log(janjiBeli);