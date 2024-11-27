import Student from './Student';

function StudentList({ students }) {
  return (
    <div className="container text-center  border rounded my-3">
      <h2 className="text-center">Student List</h2>
      <ul className="list-group mb-3">
        {students.map((student, index) => (
          <Student student={student} index={index} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
