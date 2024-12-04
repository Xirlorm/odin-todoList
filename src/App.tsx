import { useState } from "react";
import "./App.css";
import Calender from "./components/Calender";
import Header from "./components/Header";
import Todo from "./utilities/types";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { format } from "date-fns";
import AllTodoTasks from "./components/AllTodoTasks";
import { demo, readTasksFromStorage } from "./utilities/lib";

function App() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(format(today, "LLL d uuuu"));
  const [todoList, setTodoList] = useState(
    readTasksFromStorage() ||
      (new Map([demo].map((todo) => [currentDate, todo])) as Map<
        string,
        Todo[]
      >)
  );
  const [showTodoInput, setShowTodoInput] = useState(true);
  const [page, setPage] = useState("home" as "home" | "list-all");

  return (
    <>
      <Header setShowInput={setShowTodoInput} page={page} setPage={setPage} />
      {page == "home" ? (
        <>
          <Calender
            date={today}
            activeDay={currentDate}
            setActiveDay={setCurrentDate}
          />
          <TodoInput
            show={showTodoInput}
            date={currentDate}
            setTodoList={setTodoList}
          />
          <TodoList
            list={todoList.get(currentDate) ?? ([] as Todo[])}
            setTodoList={setTodoList}
          />
        </>
      ) : (
        <AllTodoTasks
          todoList={todoList}
          setPage={setPage}
          setTodoList={setTodoList}
        />
      )}
    </>
  );
}

export default App;
