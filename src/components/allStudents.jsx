import React from 'react'
const allStudents = (props) => {

    const {
		students,setStudents,setStudentName,setEditMode,setEditableStudent
	} = props;

    const editHandler =(student)=>{
        setEditMode(true);
        setEditableStudent(student);
        setStudentName(student.name);
      }
    
      const removeHandler=((studentID)=>{
        const updatedStudentArr=students.filter((student)=>(student.id!==studentID)
        
      )
    
      setStudents(updatedStudentArr);
    });
    
    const presentHandler=(student)=>{
        if(student.isPresent===true ||  student.isPresent===false){
          return alert (
            `the student is already in the ${
              student.isPresent===true?"present":"absent"
            } list`,
          )
        }
        updateStudent(student, "isPresent", true);
      }
      const absentHandler=(student)=>{
        if(student.isPresent===true ||  student.isPresent===false){
          return alert (
            `the student is already in the ${
              student.isPresent===true?"present":"absent"
            } list`,
          )
        }
        updateStudent(student, "isPresent", false);
      }  
      const updateStudent=(item,propertyName,propertyValue)=>{
        const updatedStudentArr=students.map((student)=>{
          if(student.id===item.id){
            return {...student,[propertyName]:propertyValue};
          }
          return student;
        }
        );
        setStudents(updatedStudentArr);
      }
  return (
    <div>
      <div className="allStudents">
             <h2>All Students</h2>
             <ul>
              {students.map((student)=>
              <li key={student.id}>
                <span>{student.name}</span>
                <button onClick={()=>editHandler(student)}>Edit</button>
                <button onClick={()=>removeHandler(student.id)}>Remove</button>
                <button onClick={()=>presentHandler(student)}>Present</button>
                <button onClick={()=>absentHandler(student)}>Absent</button>
                
              </li>
              
              )}
             </ul>
          </div>
    </div>
  )
}

export default allStudents
