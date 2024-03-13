const obj = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' },
];

function getListStudentIds(students) {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use the map function to extract the ids
  return students.map((student) => student.id);
}

export default getListStudentIds;
function getStudentsByLocation(students, city) {
  const studentsList = students.filter((students) => students.city);
}
