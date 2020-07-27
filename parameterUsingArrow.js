//satu parameter
const kelasku = namaku => console.log(`kenalin aku ${namaku}`);
kelasku("Dimas");

//dua parameter
const kelasmu = (namamu, greet) => console.log(`Selamat ${greet}! pasti namamu ${namamu}`);
kelasmu("Shinta", "Pagi");

//default atau tanpa parameter
const kelasnya = () => console.log(`Aku tak kenal dengan mereka`);
kelasnya();