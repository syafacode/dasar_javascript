// Keyword async digunakan untuk memberitahu JavaScript untuk menjalankan 
// fungsi makeCoffee() secara asynchronous. Lalu keyword await digunakan 
// untuk menghentikan proses pembacaan kode selanjutnya sampai 
// fungsi getCoffee() mengembalikan nilai promise resolve.

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
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
    const coffe = await getCoffee();
    console.log(coffe);
}

makeCoffee();