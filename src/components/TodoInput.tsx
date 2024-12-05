import { Dispatch, SetStateAction, useState } from "react";
import Todo from "../utilities/types";
import { Plus } from "react-feather";
import { addTaskToList, storeTasksToStorage } from "../utilities/lib";

interface TodoInputArg {
  show: boolean;
  date: string;
  setTodoList: Dispatch<SetStateAction<Map<string, Todo[]>>>;
}

function TodoInput({ show, setTodoList, date }: TodoInputArg) {
  const [title, setTitle] = useState("");

  return (
    <section className={`todo-input ${show ? "hide" : ""}`}>
      <form action="">
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Add a task"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          <label htmlFor="submit"></label>
          <button
            onClick={(event) => {
              event.preventDefault();
              setTodoList((list) => {
                if (title.trim() !== "") {
                  list = addTaskToList(list, title, date);
                  storeTasksToStorage(list);
                }

                return list;
              });
              setTitle("");
            }}
          >
            <Plus size="1.25rem" />
          </button>
        </div>
      </form>
    </section>
  );
}

export default TodoInput;
