// Fungsi setTimeout() merupakan cara yang paling mudah untuk membuat 
// kode kita dijalankan secara asynchronous. Fungsi ini menerima dua buah parameter. 
// Pertama adalah fungsi yang akan dijalankan secara asynchronous, 
// dan kedua adalah nilai number dalam milisecond sebagai nilai tunggu sebelum fungsi dijalankan.
//sc : dicoding.com

console.log("Selamat datang");
setTimeout(() => {
    console.log("Terimakasih, mampir lagi yah :)")},3000
);
console.log("Silahkan pilih menu yang ada...");