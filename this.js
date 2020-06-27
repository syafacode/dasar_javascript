/*using regular function
source hhtps://dicoding.com
Jika sebuah regular function dipanggil dengan menggunakan keyword new. Maka nilainya akan menjadi objek*/
function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}
 
const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);

console.log("Using default function");
console.log(programmer.name);
console.log(programmer.age);
console.log(programmer.hobby);


/*using arrow function
source https://dicoding.com
Objek yang dibuat menggunakan function dengan keyword new, 
sama halnya seperti kita membuat objek seperti menggunakan objek literals { }*/
const programmer2 = {
    name: "John",
    age: 18,
    hobby: ["Coding", "Read book", "Ping-Pong"]
}
console.log("Using arrow");
console.log(programmer2.name);
console.log(programmer2.age);
console.log(programmer2.hobby);
