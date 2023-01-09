import Addtask from "./Addtask";
import Showtask from "./Showtask";
import { useState } from "react";

const App = () => {
  const [addtodo, setAddtodo] = useState(false);
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>Todo List</h1>
      <Addtask addtodo={addtodo} setAddtodo={setAddtodo} />
      <Showtask addtodo={addtodo} />
    </div>
  );
};

export default App;
