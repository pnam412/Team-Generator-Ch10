const Employee = require ("../lib/Employee")

describe("Employee", function () {
    test("Should create a new employee", function () {
        const newEmployee = new Employee()
        expect(typeof newEmployee).toBe("object")
    })
    test("Should set employee name", function () {
        const name = "Mary"
        const newEmployee = new Employee(name)
        expect(newEmployee.name).toBe(name)
    })
    test("Should set employee id", function () {
        const name = "Mary"
        const id = 1
        const newEmployee = new Employee(name,id)
        expect(newEmployee.id).toBe(id)
    })
    test("Should set employee email", function () {
        const name = "Mary"
        const id = 1
        const email = "email@example.com"
        const newEmployee = new Employee(name,id,email)
        expect(newEmployee.email).toBe(email)
    })
    test("Should retrieve name with getName", function () {
        const name = "Mary"
        const id = 1
        const email = "email@example.com"
        const newEmployee = new Employee(name,id,email)
        expect(newEmployee.getName()).toBe(name)
    })
})