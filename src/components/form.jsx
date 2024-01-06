import React from 'react'
const form = (props) => {

    const {
		students,editMode,studentName,setStudents,setStudentName,setEditMode,setEditableStudent,editableStudent
	} = props;
    const submitHandler =(e)=>{
        e.preventDefault();
        if (studentName.trim()==="") {
          
                return alert(`Please Provide valid Name`);
          
            }
        editMode ? updateHandler() : createHandler();
      }
    
      const createHandler=()=>{
    
        const newStudent={
          id:Date.now(),
          name:studentName,
          isPresent:null,
          
        }
        setStudents([...students,newStudent]);
        setStudentName("");
      }
    
      const updateHandler =()=>{
        updateStudent(editableStudent,"name",studentName);
        setEditMode(false);
        setEditableStudent(null);
        setStudentName("");
      }
      const updateStudent=(item,propertyName,propertyValue)=>{
        const updatedStudentArr=students.map((student)=>{
            console.log(student.name);
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
      <form onSubmit={submitHandler}>
        <input type="text" 
        value={studentName} 
        onChange={(e)=>setStudentName(e.target.value)}
        />
        <button type='submit'>
          {editMode?"Update":"Create"}
        </button>
     </form>
    </div>
  )
}

export default form
