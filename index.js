
let employee = {
    streetAddress: '11 Broadway',
    name: 'Sam'

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value })
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = {employee}
    employee.name = undefined
    return employee
}