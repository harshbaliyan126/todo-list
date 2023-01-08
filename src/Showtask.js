import Tasklist from "./Tasklist";
import { useState, useEffect } from "react";

const Showtask = ({addtodo}) => {

    const [deletetodo, setDeletetodo] = useState(false);
    const [edittodo, setEdittodo] = useState(false);

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const url = `http://localhost:8000/todo`;

    useEffect(() => {
        console.log(`useeffect on action`);
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error(`could not fetch the data from the server`);
            }
            return res.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(err => setError(err))

    }, [url, addtodo, deletetodo, edittodo]);

    return (
        <div>
            {error && <div>{ error }</div>}
            {data && <Tasklist tasks={data} deletetodo={deletetodo} setDeletetodo={setDeletetodo} edittodo={edittodo} setEdittodo={setEdittodo}/>}
        </div>
     );
}

export default Showtask;