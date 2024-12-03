import { Dispatch, SetStateAction, useState } from "react";
import Todo from "../utilities/types";
import { Plus } from "react-feather";

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
              setTodoList((list: Map<string, Todo[]>) => {
                if (title.trim() == "") return list;

                const newList = new Map();
                const id = new Date().getTime();
                const todo = {
                  title,
                  description: "",
                  completed: false,
                  id,
                  date: new Date(date),
                  priority: "low",
                  mapKey: date,
                };

                for (const key of list.keys())
                  newList.set(key, [...(list.get(key) ?? [])]);

                if (newList.has(date)) newList.get(date).push(todo);
                else newList.set(date, [todo]);

                return newList;
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
