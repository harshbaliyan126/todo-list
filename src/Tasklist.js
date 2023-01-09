const Tasklist = ({
  tasks,
  deletetodo,
  setDeletetodo,
  edittodo,
  setEdittodo,
}) => {
  const handleClick = (id) => {
    fetch(`http://localhost:8000/todo/${id}`, {
      method: `Delete`,
    })
      .then(() => {
        console.log(`Delete: Delething this task.`);
        if (deletetodo) {
          setDeletetodo(false);
        } else {
          setDeletetodo(true);
        }
      })
      .catch(() => console.log("Delete: Error!"));
  };

  const handleCheck = (id, nextStatus, task) => {
    fetch(`http://localhost:8000/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task, status: nextStatus }),
    })
      .then(() => {
        console.log("PUT: Edit Successfull ! ");
        if (edittodo) {
          setEdittodo(false);
        } else {
          setEdittodo(true);
        }
      })
      .catch((e) => console.log(e, "PUT: Error"));
  };

  return (
    <div>
      <table>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id}>
              <th scope="row">
                <input
                  type="checkbox"
                  name="tasks"
                  value={t.id}
                  checked={t.status}
                  onChange={(e) => {
                    handleCheck(t.id, e.target.checked, t.task);
                  }}
                />
              </th>
              <td>
                {t.status === true ? (
                  <span>
                    <del> {t.task} </del>
                  </span>
                ) : (
                  <span> {t.task} </span>
                )}
              </td>
              <td>
                <button onClick={() => handleClick(t.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasklist;
