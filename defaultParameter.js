//using regular function
function sayHello(name = "Stranger", greet = "Hello") {
    console.log(`${greet} ${name}!`);
}

//using arrow function
const sayHi = (nama = "Arga", salam = "Hi") => console.log(`${salam} ${nama}!`);
 
sayHello("Dimas", "Hai");
sayHello();

sayHi("Mariana","Hai");
sayHi();
/*
Pada contoh di atas, kita menggunakan tanda assignment (=) untuk menetapkan parameter name 
dengan nilai default “Stranger”, dan parameter greet dengan nilai default “Hello”. 
Hal ini sangat berguna ketika kita memanggil fungsi sayHello() tanpa menetapkan nilai 
parameter di dalamnya, karena walaupun kita tidak menetapkan nilainya, kedua parameter 
tersebut tidak akan menghasilkan undefined.

dicoding.com
*/
