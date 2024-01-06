import { useState } from 'react';
import './App.css';
import Form from './components/form'
import AllStudents from './components/allStudents'
import Present from './components/presentStudents'
import Absent from './components/absentStudents'

function App() {
  const [studentName,setStudentName] =useState("");
  const [editMode,setEditMode] = useState(false);
  const [students, setStudents] = useState([]);
  const [editableStudent, setEditableStudent] = useState(null);
  
  

   

  return (
    <div className="App">
      <Form
      studentName={studentName}
      setStudentName={setStudentName}
      setEditMode={setEditMode}
      setStudents={setStudents}
      setEditableStudent={setEditableStudent}
      editMode={editMode}
      students={students}
      editableStudent={editableStudent}
      
      />

     <div className="student-section">
          
          <AllStudents
          
          setStudentName={setStudentName}
          setEditMode={setEditMode}
          setStudents={setStudents}
          setEditableStudent={setEditableStudent}
          
          students={students}
          />
          
          <Present
          students={students}
          setStudents={setStudents}
          />
          
          <Absent
          students={students}
          setStudents={setStudents}
          />
          
     </div>

     
    </div>
  );
}

export default App;
