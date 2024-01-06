import React from 'react'
const absentStudents = (props) => {
    const {
		students,setStudents
	} = props;
    const absentList=students.filter(student =>student.isPresent===false);
    
    const toggler=(student)=>{
        updateStudent(student, "isPresent", !student.isPresent);
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
      <div className="absentStudents">
             <h2>Absent Students</h2>
             <ul>
              {absentList.map((student)=>
              <li key={student.id}>
                <span>{student.name}</span>
                <button onClick={()=>toggler(student)}>Accidently added</button>
                </li>
              
              )}
             </ul>
          </div>
    </div>
  )
}

export default absentStudents
