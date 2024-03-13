interface Teacher {
   readonly firstName: string;
   readonly lastName: string;
   fullTimeEmployee: boolean;
   yearsOfExperience?: number;
   location: string;
   [index: string]: boolean | string | number; 
}

interface Directors extends Teacher {
    numberofReports: number;
}

interface printTeacherFunction {
    (fName: string, lName: string) : string;
}

function printTeacher(fName: string, lName: string): string {
    return `${fName[0]}. ${lName}`
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working'
    }

    displayName(): string {
        return `${this.firstName}`
    }
}

interface StudentConstructor {
    (firstName: string, lastName: string): any;
}

const student = new StudentClass("Paul", "jerry");
console.log(student.displayName())
console.log(student.workOnHomework())