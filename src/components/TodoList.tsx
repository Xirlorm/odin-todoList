import { Dispatch, SetStateAction } from "react";
import Todo from "../utilities/types";
import Task from "./Task";
import { sortTodoList } from "../utilities/lib";

interface TodoListArg {
  list: Todo[];
  setTodoList: Dispatch<SetStateAction<Map<string, Todo[]>>>;
}

function TodoList({ list, setTodoList }: TodoListArg) {
  list = sortTodoList(list);

  return (
    <section className="todo-list">
      {list.map((todo) => (
        <Task detail={todo} setTodoList={setTodoList} />
      ))}
    </section>
  );
}

export default TodoList;
