function Student(id, name, grades) {
  return {
    id: id,
    name: name,
    grades: grades,
  };
}

const students = [];

function add(id, name, grades) {
  const newStudent = new Student(id, name, grades);
  students.push(newStudent);
}
add(1, 'john', { Math: 90, English: 85 });
add(2, 'jane', { Math: 80, English: 88 });
add(3, 'may', { Math: 80, English: 88 });

console.log(students);

function remove(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
  } else {
    console.log(`not found!`);
  }
}

remove(1);
console.log(students);
