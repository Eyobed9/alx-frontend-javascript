// Task 1
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

// Task 2
interface Directors extends Teacher {
	numberOfReports: number;
}

const teacher3: Teacher = {
	firstName: "John",
	fullTimeEmployee: false,
	lastName: "Doe",
	location: "London",
	contract: false,
};

console.log(teacher3);

const director1: Directors = {
	firstName: "John",
	lastName: "Doe",
	location: "London",
	fullTimeEmployee: true,
	numberOfReports: 17,
};

console.log(director1);

/* Task 3 */
// Function to print the teacher

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// Task 4
interface Student {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

interface StudentClassConstructor {
	new (firstName: string, lastName: string): Student;
}

class StudentClass implements Student {
	constructor(public firstName: string, public lastName: string) {}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}

function createStudent(
	ctor: StudentClassConstructor,
	firstName: string,
	lastName: string
): Student {
	return new ctor(firstName, lastName);
}

const student1 = createStudent(StudentClass, "Alice", "John");
console.log(student1);
