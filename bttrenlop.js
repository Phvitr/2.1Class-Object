const defaultworkDay = 22
class Employee {
    constructor(name, role, salary, dayOff, workingDay) {
       this.name = name;
       this.role = role;
       this.salary = salary;
       this.dayOff = dayOff;
       this.workingday = workingDay;
    }
    getNoPhep(){
        return defaultworkDay - this.dayOff -this.workingday;
    }
    getSalaryDecrease() {
        let ratio = 1
        switch (this.role) {
            case 'Manager':
                ratio = 1.5
                break;
            case 'Director':
                ratio = 2
                break;

        }
        let moneyOfDay = this.salary/defaultworkDay;
        let moneyOfDayPermission = moneyOfDay*this.dayOff;
        let moneyOfDayNotPermission = moneyOfDay*ratio*this.getNoPhep();

        return this.salary - moneyOfDayPermission - moneyOfDayNotPermission;

    }
}
let employee = new Employee("hung","director","45000000",1,19);
console.log(employee.getNoPhep());
console.log(employee.getSalaryDecrease());