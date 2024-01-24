"use strict";
// in TS inside the class at a time only one constructor is allowed it may be default if not provided explicitly or parameterized
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Student_id;
/* The class "Student" represents a student with properties such as id, name, and address, and has a
method to get the student's details. */
class Student {
    constructor(id, name, address) {
        /* `#id : number` is a private field in the `Student` class. It is denoted by the `#` symbol
        before the field name. This means that the `id` field can only be accessed within the `Student`
        class and not from outside. It is used to store the unique identifier of the student. */
        _Student_id.set(this, void 0);
        __classPrivateFieldSet(this, _Student_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getDetails() {
        return `ID : ${__classPrivateFieldGet(this, _Student_id, "f")}\nName : ${this.name}\nAddress : ${this.address}`;
    }
}
_Student_id = new WeakMap();
const std = new Student(1, 'Mohasin Patel', 'Pune');
console.log(std.getDetails());
