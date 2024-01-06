import React from 'react'
const presentStudents = (props) => {
    const {
		students,setStudents
	} = props;
    const presentList=students.filter(student =>student.isPresent===true);
    
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
      <div className="presentStudents">
             <h2>Present Students</h2>
             <ul>
              {presentList.map((student)=>
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

export default presentStudents
