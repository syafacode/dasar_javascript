//Ketika menggunakan async/await, biasakan ketika mendapatkan resolved 
//value dari sebuah promise, untuk menempatkannya di dalam block try 

//Dengan begitu kita dapat menggunakan block catch untuk menangani jika promise gagal dilakukan (onRejected).

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 9;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Coffee didapatkan!");
            } else {
                reject("Biji kopi habis!")
            }
        }, 1000)
    })
}

async function makeCoffee(){
    try { //try digunakan apabila memenuhi keadaan onFulFilled
        const coffe = await getCoffee();
        console.log(coffe);
    } catch (rejectedReason){ //catch digunakan untuk memenuhi kondisi onRejected
        console.log(rejectedReason);
    }
}

makeCoffee();