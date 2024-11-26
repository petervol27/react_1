function StudentList({ students }) {
  return (
    <div className="container text-center  border rounded my-3">
      <h2 className="text-center">Student List</h2>
      <ul className="list-group mb-3">
        {students.map((student, index) => (
          <li key={index} className="list-group-item w-50 mx-auto">
            <strong>Name:</strong> {student.name}, <strong>City:</strong>{' '}
            {student.city}, <strong>Age:</strong> {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
