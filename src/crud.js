export const getTodo = async (url) => {
    const res = await fetch(`http://localhost:8000/todo/`);
    return res.json();
}

export const addTodo = async (todo) => {
   return await fetch(`http://localhost:8000/todo/`, {
        method: 'POST',
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(todo)
    });
}


export const deleteTodo = async (id) => {
    return await fetch(`http://localhost:8000/todo/${id}`, {
        method: 'DELETE'
    });
}


export const updateCheck = async (todo) => {
    return await fetch(`http://localhost:8000/todo/${todo.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo)
    });
}
