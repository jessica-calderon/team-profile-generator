const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, officePhone) {
        // access manager properties
        super(name, id, email);
        this.officePhone = officePhone;
    }
    getPhone() {
        return this.officePhone;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;