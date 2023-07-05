/* Implementation of Advanced Types */

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

class Director implements DirectorInterface {

  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Taking a coffee break';
  }

  workDirectorTasks(): string {
    return 'Performing director tasks';
  }
}

/* Test code */
const director = new Director();
console.log(director.workFromHome());
console.log(director.getCoffeeBreak());
console.log(director.workDirectorTasks());

/* Teacher class */

class Teacher implements TeacherInterface {
   
   workFromHome(): string {
     return 'Cannot work from home';
   }
   getCoffeeBreak(): string {
     return 'Cannot have a break';
   }
   workTeacherTasks(): string {
     return 'Getting to work';
   }
}

/* Test code */

const teacher = new Teacher();
console.log(teacher.workFromHome());
console.log(teacher.getCoffeeBreak());
console.log(teacher.workTeacherTasks());

/* Create a function named createEmployee that has one parameter named salary.*/

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/* Test code */

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

/* function isDirector */

function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

/* Test code */

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

/* Function teachClass */

type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

/* Test code */

console.log(teachClass('Math'));
console.log(teachClass('History'));
