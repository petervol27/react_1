import { useState } from 'react';

function StudentForm({ addStudent }) {
  const [studentForm, setStudentForm] = useState({
    name: '',
    city: '',
    age: '',
  });
  const [accepted, setAccepted] = useState(null);
  const studentCheck = (e) => {
    e.preventDefault();
    if (
      studentForm.age > 20 &&
      (studentForm.city === 'tel-aviv' ||
        studentForm.city === 'beer sheva' ||
        studentForm.city === 'rishon lezion')
    ) {
      setAccepted(true);
      addStudent({ ...studentForm });
    } else {
      setAccepted(false);
    }
  };
  const handleChange = (e) => {
    setStudentForm({ ...studentForm, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3 border rounded shadow w-50">
      <form
        className="text-center d-flex flex-column justify-content-center align-items-center"
        onSubmit={studentCheck}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={studentForm.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="city">City:</label>
        <input
          id="city"
          name="city"
          value={studentForm.city}
          onChange={handleChange}
        ></input>
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          name="age"
          value={studentForm.age}
          onChange={handleChange}
        ></input>
        <button type="submit" className="my-3 btn btn-primary">
          Submit
        </button>
      </form>
      {accepted !== null && (
        <h1
          style={{ color: accepted ? 'blue' : 'red' }}
          className="text-center"
        >
          {accepted ? 'Accepted!' : 'Declined!'}
        </h1>
      )}
    </div>
  );
}

export default StudentForm;
