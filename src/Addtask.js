import { useState } from "react";

const Addtask = ({addtodo, setAddtodo}) => {

  const [task, setTask] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {task, status: false };
    setTask(``);
    fetch(`http://localhost:8000/todo`, {
      method: 'POST',
      headers: { "Content-Type" : "application/json"},
      body: JSON.stringify(todo)
    }).then(() => {
      console.log(`POST: New task Added!`);
      if(addtodo){
        setAddtodo(false);
      }
      else{
        setAddtodo(true);
      }
    }).catch( () => console.log(`POST: Error!`))
  }

    return ( 
      <>
      <form onSubmit={handleSubmit}>      
        <input type="text" 
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
          />
        <button>Add</button>
      </form>
      </>  
     ); 
}
 
export default Addtask;