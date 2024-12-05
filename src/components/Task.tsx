import { Edit2, X } from "react-feather";
import Todo from "../utilities/types";
import { Dispatch, SetStateAction, useState } from "react";
import { format } from "date-fns";
import { editTodo, removeTodo, storeTasksToStorage } from "../utilities/lib";
import TaskEditor from "./TaskEditor";

interface TodoArg {
  task: Todo;
  setTodoList: Dispatch<SetStateAction<Map<string, Todo[]>>>;
}

function Task({ task, setTodoList }: TodoArg) {
  const [showDetails, setShowDetails] = useState(false);
  const [editTask, setEditTask] = useState(false);

  if (editTask)
    return (
      <TaskEditor
        task={task}
        setTodoList={setTodoList}
        setEditTask={setEditTask}
      />
    );

  return (
    <section className={`todo ${task.completed ? "completed" : ""}`}>
      <section
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        <input
          className="completion"
          type="checkbox"
          onClick={(event) => {
            setTodoList((list) => {
              list = editTodo(list, {
                ...task,
                completed: !task.completed,
              });
              storeTasksToStorage(list);

              return list;
            });
            event.stopPropagation();
          }}
          checked={task.completed}
        />
        <h3 className="title">{task.title}</h3>
        <span className="time">{format(task.date, "paa")}</span>
        <span className={`priority ${task.priority}`}></span>
        <button
          className="edit-btn"
          onClick={(event) => {
            setEditTask(!editTask);
            event.stopPropagation();
          }}
        >
          <Edit2 size={"1rem"} />
        </button>
        <button
          className="delete-btn"
          onClick={(event) => {
            setTodoList((list) => {
              list = removeTodo(task, list);
              storeTasksToStorage(list);

              return list;
            });
            event.stopPropagation();
          }}
        >
          <X />
        </button>
      </section>
      <section className={`description ${!showDetails ? "hide" : ""}`}>
        {task.description}
      </section>
    </section>
  );
}

export default Task;
