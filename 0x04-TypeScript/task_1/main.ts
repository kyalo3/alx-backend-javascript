interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience: number;
	location: string;
	contract: boolean;
}

interface Directors {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience: number;
	location: string;
	contract: boolean;
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

console.log(director1);
