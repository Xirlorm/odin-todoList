import { Dispatch, SetStateAction } from "react";
import Todo from "../utilities/types";
import TodoList from "./TodoList";

interface AllTodoTasksArg {
  todoList: Map<string, Todo[]>;
  setPage: Dispatch<SetStateAction<"home" | "list-all">>;
  setTodoList: Dispatch<SetStateAction<Map<string, Todo[]>>>
}

function AllTodoTasks({ todoList, setTodoList }: AllTodoTasksArg) {
  const allTasks: Todo[] = [...todoList.values()]?.flat() ?? [];

  return <TodoList list={allTasks} setTodoList={setTodoList} />;
}

export default AllTodoTasks;
