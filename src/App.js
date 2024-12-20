import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
import BasicCalc from './components/BasicCalc';
import StudentForm from './components/StudentForm';
import { useState } from 'react';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };
  return (
    <>
      <Header />
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
      <BasicCalc />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
