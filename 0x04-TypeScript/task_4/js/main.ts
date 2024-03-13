/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subjects.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

export const cpp = Subjects.Cpp
export const java = Subjects.Java
export const react = Subjects.React
export const cTeacher: Subjects.Teacher = {
    firstName: 'humpty',
    lastName: 'dumpty',
    experienceTeachingC: 10,
}

const Cplusplus = new cpp()
Cplusplus.setTeacher(cTeacher);
console.log(Cplusplus.getRequirements())
console.log(Cplusplus.getAvailableTeacher())

const Java = new java()
Java.setTeacher(cTeacher);
console.log(Java.getRequirements())
console.log(Java.getAvailableTeacher())

const React = new react();
React.setTeacher(cTeacher);
console.log(React.getRequirements())
console.log(React.getAvailableTeacher())