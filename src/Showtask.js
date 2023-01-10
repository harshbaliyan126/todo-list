import Tasklist from "./Tasklist";
import { useState } from "react";
import useFetch from "./useFetch";

const Showtask = ({addtodo}) => {

    const [deletetodo, setDeletetodo] = useState(false);
    const [edittodo, setEdittodo] = useState(false);

    const url = `http://localhost:8000/todo`;
    const [data, error] = useFetch(url, addtodo, deletetodo, edittodo);

    return (
        <div>
            {error && <div>{ error }</div>}
            {data && <Tasklist tasks={data} deletetodo={deletetodo} setDeletetodo={setDeletetodo} edittodo={edittodo} setEdittodo={setEdittodo}/>}
        </div>
     );
}

export default Showtask;
