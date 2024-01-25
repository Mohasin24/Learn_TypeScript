
/* The Demo_1 class is a TypeScript class that has a private property "name" and getter and setter
methods to access and modify its value. */
class Demo_1{

     #name !: string
 
     /**
      * The above function sets the name property of an object.
      * @param {string} name - The name parameter is a string that represents the new name to be set
      * for an object.
      */
     set setName(name : string) 
     {
          this.#name = name
     }

     /**
      * The above function is a getter method that returns the value of the private property "name" as
      * a string.
      * @returns The value of the private variable "name" is being returned.
      */
     get getName() : string 
     {
          return this.#name
     }
}

let Obj = new Demo_1()

/* `Obj.setName="Mohasin"` is setting the value of the private property `name` of the `Obj` object to
"Mohasin". */
Obj.setName="Mohasin"

/* `console.log(Obj.getName)` is printing the value of the private property `name` of the `Obj` object
to the console. */
console.log(Obj.getName)

