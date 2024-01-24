// in TS inside the class at a time only one constructor is allowed it may be default if not provided explicitly or parameterized

/* The class "Student" represents a student with properties such as id, name, and address, and has a
method to get the student's details. */
class Student{
     /* `#id : number` is a private field in the `Student` class. It is denoted by the `#` symbol
     before the field name. This means that the `id` field can only be accessed within the `Student`
     class and not from outside. It is used to store the unique identifier of the student. */
     #id : number
     name : string
     address : string

     constructor(id:number, name : string, address : string){
          this.#id=id
          this.name=name
          this.address=address
     }

     getDetails() : string{
          return `ID : ${this.#id}\nName : ${this.name}\nAddress : ${this.address}`
     }
}

const std = new Student(1,'Mohasin Patel','Pune')

console.log(std.getDetails())

