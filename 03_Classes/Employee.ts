/* The above code defines a TypeScript class called Employee with properties for id, name, and address,
and creates an instance of the class with some values assigned to its properties. */
class Employee{
     id !: number
     name !: string
     address !: string
}

const emp = new Employee()

emp.id = 1;
emp.name = 'Mohasin'
emp.address = 'Pune'

console.log(emp)