function Student({ student, index }) {
  return (
    <li key={index} className="list-group-item w-50 mx-auto">
      <strong>Name:</strong> {student.name}, <strong>City:</strong>
      {student.city}, <strong>Age:</strong> {student.age}
    </li>
  );
}

export default Student;
