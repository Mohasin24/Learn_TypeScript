"use strict";
class Person {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getDetails() {
        return `ID : ${this.id}\nName : ${this.name}\nAddress : ${this.address}`;
    }
}
/* The Manager class extends the Person class and adds additional properties for id, name, and address. */
class Manager extends Person {
    constructor(id, name, address) {
        super(id, name, address);
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
const m1 = new Manager(1, 'Patel', 'Miri');
console.log(m1.getDetails());
