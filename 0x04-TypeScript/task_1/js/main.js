function printTeacher(fName, lName) {
    return fName[0] + ". " + lName;
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return "" + this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Paul", "jerry");
console.log(student.displayName());
console.log(student.workOnHomework());
