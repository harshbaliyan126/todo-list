import { useQuery } from "react-query";
import { getTodo } from "./crud";
import Tasklist from "./Tasklist";

const Showtask = () => {
    const {isLoading, isError, error, data} = useQuery("todos", getTodo);

    return (
        <div>
            {isLoading && <div> Loading... </div>}
            {isError && <div> {error.message} </div>}
            {data && <Tasklist tasks={data}/>}  
        </div>
     );
}

export default Showtask;
