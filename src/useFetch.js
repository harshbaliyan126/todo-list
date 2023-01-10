import { useEffect, useState } from "react";

const useFetch = (url, deletetodo, addtodo, edittodo) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

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
        .catch(err => {
            setError(err.message)
        })


    }, [url, addtodo, deletetodo, edittodo]);
    

    return [data, error];
}
 
export default useFetch;