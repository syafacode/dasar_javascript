class Vehicle {
    constructor(licensePlate, manufacture) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }

    startEngines() {
        console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
    }

    info() {
        console.log(`Nomor Kendaraan: ${this.licensePlate}`);
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Mesin: ${this.engineActive ? "Active": "Inactive"}`);
    }

    parking() {
        console.log(`Kendaraan ${this.licensePlate} parkir!`);
    }
}

class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheels) {
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }

    droveOff() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`);
    }

    openDoor() {
        console.log(`Membuka pintu!`);
    }

    /* overriding method info dari parent class */
    info() {
        super.info();
        console.log(`Jumlah roda: ${this.wheels}`);
    }
}

class Motorcycle extends Vehicle{
    constructor(licensePlate, manufacture, wheels){
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }

    droveOff() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`);
    }

    openDoor() {
        console.log(`Membuka pintu!`);
    }

    /* overriding method info dari parent class */
    info() {
        super.info();
        console.log(`Jumlah roda: ${this.wheels}`);
    }
}

class VehicleFactory {
    static repair(vehicles) {
        vehicles.forEach(vehicle => {
            console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`)
        })
    }
}

const johnCar = new Car("H121S", "Honda", 4);
const tomMotor = new Motorcycle("GF121J", "Yamaha", 2);
const dimasCar = new Car("TA1408K", "Tesla", 4);

//memanggil method repair langsung dari classnya (RECOMENDED)
VehicleFactory.repair([johnCar, tomMotor, dimasCar]);