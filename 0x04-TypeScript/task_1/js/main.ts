/* Create a Teacher Interface */

interface Teacher {
   readonly firstName: string;
   readonly lastName: string;
   fullTimeEmployee: boolean;
   yearsOfExperience?: number;
   location: string;
   [propName: string]: any; // dynamically add any other properties while enforcing type checking
}

/* Test Code */

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

/* Extend the Teacher Class */

interface Directors extends Teacher {
  numberOfReports: number;
}

/* Test Code */

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

/* Create a printTeacher Function */

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

/* Test Code */

console.log(printTeacher('John', 'Doe'));

/* Write a class named StudentClass */

interface classStudent {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}

class StudentClass implements classStudent {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}


/* Test Code */

const student1 = new StudentClass('John', 'Doe');
console.log(student1.workOnHomework());
console.log(student1.displayName());
