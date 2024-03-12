function getListStudentIds(students) {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use the map function to extract the ids
  return students.map(student => student.id);
}

export default getListStudentIds;
