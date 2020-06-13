function mintaData(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
//memberikan nilai pada function disebut parameter
//urut dari a ke c
mintaData("Sukron", 10, null);



//using function arrow
//parameter disini adalah name dan great
const sayHello = (name, greet) => console.log(`${greet}, ${name}!`);
//cara input value parameter
sayHello("Dimas", "Selamat Pagi");
sayHello();

console.log();
//////////////////////////////////////normal vs arrow/////////////////////////////////////
//normal
function saySalam(name = "Stranger", greet = "Salam") {
    console.log(`${greet} ${name}!`);
}
//input
saySalam("Dimas", "Hai");
saySalam();

//arrow
//name dan greet adalah parameter dengan tanda (=) setelah "Name" function
//const adalah function sayBrow adalah nama Function
//untuk arrow sama saja dengan kurung kurawal {}
const sayBrow = (name = "Stranger", greet = "Hello") => console.log(`${greet} ${name}!`);
//input
sayBrow("Madam Jordan", "Hai");
sayBrow();
////////////////////////////////////////////end//////////////////////////////////////////
console.log();


//without parameter
const sayHi = () => console.log("Selamat pagi semuanya!");

sayHi()
 
/* output:
Selamat pagi semuanya!
*/