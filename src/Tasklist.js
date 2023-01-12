import { useAutoAnimate } from "@formkit/auto-animate/react";

const Tasklist = ({
  tasks,
  deletetodo,
  setDeletetodo,
  edittodo,
  setEdittodo,
}) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
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
    <div ref={parent}>
      {tasks.map((t) => (
        <article
          key={t.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <input
            type="checkbox"
            name="tasks"
            value={t.id}
            checked={t.status}
            onChange={(e) => {
              handleCheck(t.id, e.target.checked, t.task);
            }}
          />
          {t.status === true ? (
            <span>
              <del> {t.task} </del>
            </span>
          ) : (
            <span> {t.task} </span>
          )}
          {/* <button onClick={() => handleClick(t.id)}>X</button> */}
          <a href="#" role="button" onClick={() => handleClick(t.id)}>
            X
          </a>
        </article>
      ))}
    </div>
  );
};

export default Tasklist;
