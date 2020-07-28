//default function
const upperizedNames = ["Dimas", "Widy", "Buchori"]
.map(function(name) {
        return name.toUpperCase();
});
 
console.log(...upperizedNames);
 
//arrow function
const upperizedNames2 = ["Dimas", "Widy", "Buchori"]
    .map(name => name.toUpperCase());
 
console.log(...upperizedNames2);
 
/* output:
DIMAS WIDY BUCHORI
*/