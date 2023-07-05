interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: 'Cool',
    lastName: 'J',
    age: 24,
    location: 'New York',
  },
  {
    firstName: 'C',
    lastName: 'Tevin',
    age: 22,
    location: 'New Jersey',
  },
];

// Create the table element
const table = document.createElement('table');

// Create the table header row
const thead = table.createTHead();
const headerRow = thead.insertRow();

// Create the header cells
const headerLabels = ['First Name', 'Last Name', 'Age', 'Location'];
headerLabels.forEach((label) => {
  const headerCell = document.createElement('th');
  headerCell.textContent = label;
  headerRow.appendChild(headerCell);
});

// Create the table body
const tbody = document.createElement('tbody');

// Loop through the students and create rows
studentsList.forEach((student) => {
  const row = tbody.insertRow();

  // Create the cells for each student
  const cells = [student.firstName, student.lastName, student.age.toString(), student.location];
  cells.forEach((cellData) => {
    const cell = row.insertCell();
    cell.textContent = cellData.toString();
  });
});

// Append the table body to the table element
table.appendChild(tbody);

// Append the table to the body of the page
document.body.appendChild(table);
