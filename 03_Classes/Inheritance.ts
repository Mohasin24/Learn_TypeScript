
class Person{
     
     /* The `protected` keyword is used to specify that the properties `id`, `name`, and `address` are
     accessible within the class `Person` and its subclasses. This means that these properties can
     be accessed and modified by the class itself and any subclasses that inherit from it. */
     protected id : number
     protected name : string
     protected address : string

     constructor(id:number, name : string, address : string){
          this.id=id
          this.name=name
          this.address=address
     }

     getDetails() : string{
          return `ID : ${this.id}\nName : ${this.name}\nAddress : ${this.address}`
     }
}


/* The Manager class extends the Person class and adds additional properties for id, name, and address. */
class Manager extends Person{
     id : number
     name : string
     address: string

     constructor(id:number, name : string, address : string)
     {
          super(id,name,address)
          this.id = id
          this.name = name
          this.address = address
     }
}

const m1 = new Manager(1,'Patel', 'Miri')

console.log(m1.getDetails())