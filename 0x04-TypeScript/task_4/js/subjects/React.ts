/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {

        getRequirements = (): string => 'Here is the list of requirements for React'
        getAvailableTeacher = (): string => {
            if (this.teacher.experienceTeachingReact !== undefined) {
                return `Available Teacher: ${this.teacher.firstName}`
            }
            else {
                return 'No available teacher'
            }
        }
    }
}