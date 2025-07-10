/// <reference path="Teacher.ts" />

namespace Subjects {
	export interface SubjectClass {
		teacher: Teacher;
        setTeacher(teacher: Teacher): void;
	}

	export class Subject implements SubjectClass {
		teacher: Teacher;

		setTeacher(teacher: Teacher): void {
			this.teacher = teacher;
		}
	}
}
