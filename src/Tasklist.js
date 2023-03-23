import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useQueryClient, useMutation } from "react-query";
import { deleteTodo, updateCheck } from "./crud";

const Tasklist = ({ tasks }) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  const QueryClient = useQueryClient();

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      QueryClient.invalidateQueries("todos");
    }
  })

  const updateCheckMutation = useMutation(updateCheck, {
    onSuccess: () => {
      QueryClient.invalidateQueries("todos");
    }
  })

  const handleClick = (id) => {
    deleteTodoMutation.mutate(id);
  };

  const handleCheck = (todo) => {
    updateCheckMutation.mutate({...todo, status: !todo.status});
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
              handleCheck(t);
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
