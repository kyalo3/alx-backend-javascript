interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience: number;
	location: string;
	contract: boolean;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface StudentInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

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

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

class StudentClass implements StudentInterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
	return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}

class Director implements DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;

	constructor(workFromHome(): string, getCoffeeBreak(): string,
	workDirectorTasks(): string) {
	
	}

	workFromHome(): string {
	return "Working from home";
	}

	getToWork(): string {
	return "Getting a coffee break";
	}

	workDirectorTasks(): string {
	return "Getting to director tasks";
	}
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	const firstInitial = firstName.charAt(0);
	return `${firstInitial}. ${lastName}`;
};

const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName());

console.log(teacher3);

console.log(director1);
