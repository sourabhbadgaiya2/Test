class Student {
  Student(id, name, grades = {}) {
    Student.id = id;
    Student.name = name;
    Student.grades = grades;
  }
}

const students = [];

function add(id, name, grades) {
  const newStudent = new Student(id, name, grades);
  students.push(newStudent);
}

function remove(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
  } else {
    console.log(`not found`);
  }
}

add(1, 'john', { Math: 90, English: 85 });
add(2, 'jane', { Math: 80, English: 88 });

console.log(students);

remove(1);
console.log(students);
