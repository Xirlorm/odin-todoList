import { Dispatch, SetStateAction, useState } from "react";
import Todo from "../utilities/types";
import "../App.css";
import { editTodo } from "../utilities/lib";

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
        {/* <input
          type="time"
          placeholder="none"
          value={time}
          onChange={({ target }) => setTime(target.value)}
        /> */}
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
          <option value="high">high</option>
          <option value="medium">medium</option>
        </select>
      </div>
      <button
        type="submit"
        onClick={() => {
          setTodoList((list) =>
            editTodo(list, { ...task, title, description, priority })
          );
          setEditTask(false);
        }}
      >
        Done
      </button>
    </section>
  );
}

export default TaskEditor;
