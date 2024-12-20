import { Dispatch, SetStateAction, useState } from "react";
import Todo from "../utilities/types";
import "../App.css";
import { editTodo, storeTasksToStorage } from "../utilities/lib";

interface TaskEditorArgs {
  task: Todo;
  setTodoList: Dispatch<SetStateAction<Map<string, Todo[]>>>;
  setEditTask: Dispatch<SetStateAction<boolean>>;
}

function TaskEditor({ task, setTodoList, setEditTask }: TaskEditorArgs) {
  const [title, setTitle] = useState(task.title);
  const [time, setTime] = useState(
    `${task.date.getHours().toString().padStart(2, "0")}\
:${task.date.getMinutes().toString().padStart(2, "0")}`
  );
  const [priority, setPriority] = useState(task.priority);
  const [description, setDescription] = useState(task.description);

  return (
    <section className="todo task-editor">
      <div>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        <textarea
          name="description"
          id=""
          placeholder="description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        ></textarea>
      </div>
      <div>
        <input
          type="time"
          placeholder="none"
          value={time}
          onChange={({ target }) => {
            setTime(target.value);
          }}
        />
        <select
          name=""
          id=""
          value={priority}
          onChange={({ target }) =>
            setPriority(target.value as "low" | "high" | "medium")
          }
        >
          <option value="low" selected>
            low
          </option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
      <button
        type="submit"
        onClick={() => {
          const date = task.date;
          date.setHours(parseInt(time.split(":")[0]));
          date.setMinutes(parseInt(time.split(":")[1]));
          setTodoList((list) => {
            list = editTodo(list, {
              ...task,
              title,
              description,
              date,
              priority,
            });
            storeTasksToStorage(list);
            return list;
          });
          setEditTask(false);
        }}
      >
        Done
      </button>
    </section>
  );
}

export default TaskEditor;
