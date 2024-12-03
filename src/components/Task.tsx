import { Edit2, X } from "react-feather";
import Todo from "../utilities/types";
import { Dispatch, SetStateAction, useState } from "react";
import { format } from "date-fns";
import { removeTodo, toggleCompletion } from "../utilities/lib";
import TaskEditor from "./TaskEditor";

interface TodoArg {
  detail: Todo;
  setTodoList: Dispatch<SetStateAction<Map<string, Todo[]>>>;
}

function Task({ detail, setTodoList }: TodoArg) {
  const [showDetails, setShowDetails] = useState(false);
  const [editTask, setEditTask] = useState(false);

  if (editTask)
    return (
      <TaskEditor
        task={detail}
        setTodoList={setTodoList}
        setEditTask={setEditTask}
      />
    );

  return (
    <section className={`todo ${detail.completed ? "completed" : ""}`}>
      <section
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        <input
          className="completion"
          type="checkbox"
          onClick={(event) => {
            setTodoList((list) =>
              toggleCompletion(detail, list)
            );
            event.stopPropagation();
          }}
          checked={detail.completed}
        />
        <h3 className="title">{detail.title}</h3>
        <span className="time">{format(detail.date, "paa")}</span>
        <span className={`priority ${detail.priority}`}></span>
        <button className="edit-btn" onClick={() => setEditTask(!editTask)}>
          <Edit2 size={"1rem"} />
        </button>
        <button
          className="delete-btn"
          onClick={(event) => {
            setTodoList((list) => removeTodo(detail, list));
            event.stopPropagation();
          }}
        >
          <X />
        </button>
      </section>
      <section className={`description ${!showDetails ? "hide" : ""}`}>
        {detail.description}
      </section>
    </section>
  );
}

export default Task;
