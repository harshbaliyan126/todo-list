import Addtask from "./Addtask";
import Showtask from "./Showtask";

const App = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>Todo List</h1>
      <Addtask/>
      <Showtask/>
    </div>
  );
};

export default App;
