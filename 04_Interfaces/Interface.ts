
/* The code is defining an interface named `User` in TypeScript. An interface is a way to define the
structure of an object. In this case, the `User` interface has four properties: */
export interface User{
     id : number
     name : string
     age ?: number
     email : string
}

/* The code is defining an interface named `Employee` that extends the `User` interface. This means
that the `Employee` interface inherits all the properties and methods from the `User` interface, and
adds an additional property called `salary` of type string. */
export interface Employee extends User{
     salary : string
}

