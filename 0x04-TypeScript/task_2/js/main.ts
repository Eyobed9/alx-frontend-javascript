/* Task 5 */

// Director and teacher interface
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// Director and teacher classes
class Director implements DirectorInterface {
	workFromHome(): string {
		return "Working from home";
	}

	getCoffeeBreak(): string {
		return "Getting a coffee break";
	}

	workDirectorTasks(): string {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return "Cannot work from home";
	}

	getCoffeeBreak(): string {
		return "Cannot have a break";
	}

	workTeacherTasks(): string {
		return "Getting to work";
	}
}

// createEmployee function that returns teacher or director instance based on input
const createEmployee = (salary: number | string): Director | Teacher => {
	if (typeof salary == "number" && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
};

// Testing the results of the createEmployee function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));


/* Task 6 */

// isDirector function for using as a type predicate
function isDirector(employee: Director | Teacher ): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}

// Testing executeWork function
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));