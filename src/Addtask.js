import { useState } from "react";
import { useQueryClient, useMutation} from "react-query";
import { addTodo } from "./crud";

const Addtask = () => {

  const [task, setTask] = useState(``);

  const QueryClient = useQueryClient();

  const addTodoMutation = useMutation(addTodo ,{
    onSuccess: () => {
      QueryClient.invalidateQueries("todos");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {task, status: false };
    addTodoMutation.mutate(todo);
    setTask(``);
  }

    return ( 
      <div>
        <form onSubmit={handleSubmit}>      
          <input type="text" 
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
          <button>Add</button>
        </form>
      </div>  
     ); 
}
 
export default Addtask;