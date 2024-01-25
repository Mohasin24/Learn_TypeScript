import { User,Employee } from "./Interface";

/* The code `let user : User = { id : 15, name : 'Mohasin', email : 'example@gmail.com' }` is creating
a variable named `user` of type `User`. The `User` type is defined in the imported module
`Interface`. The `user` object has properties `id`, `name`, and `email` with corresponding values. */
let user : User = {
     id : 15,
     name : 'Mohasin',
     email : 'example@gmail.com'
}

console.log(user)

/* The code is creating a variable named `emp` of type `Employee`. The `Employee` type is defined in
the imported module `Interface`. The `emp` object has properties `id`, `name`, `email`, `salary`,
and `age` with corresponding values. */
let emp : Employee = {
     id : 1,
     name : 'Mohasin Patel',
     email : 'mohasin@gmail.com',
     salary : '700000',
     age : 24
}

console.log(emp)