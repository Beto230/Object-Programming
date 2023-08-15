//Part One
class Vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "BEEP";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} ${this.year}.`;
    }
}

//Part two
 class Car extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year);
        this.numWheels = 4;
    }
 }

 //Part three
 class Motorcycle extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year);
        this.numWheels = 2;
    }

    rev() {
        return "VROOM!!!"
    }
 }

class Garage{
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!"
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
 }