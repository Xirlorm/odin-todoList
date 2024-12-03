import { format } from "date-fns";
import Todo from "./types";

// Returns a string of the current date
export function getDate() {
  const today = new Date();
  return `${format(today, "eee LLL d yyy")}`;
}

// Demo todo tasks showing user how to use app
export const demo = [
  {
    title: "Click here to view more about tasks",
    date: new Date(),
    completed: false,
    priority: "high",
    description:
      "This section contains more detailed description about todo tasks. You " +
      "can start adding details to tasks when you click/tap the edit button" +
      "(Pencil icon). The color indicators next to the edit button indates " +
      "taks priority. Use the X icon to delete a task",
    id: "123",
  },
  {
    title: "Click here too",
    date: new Date(),
    completed: false,
    priority: "medium",
    description:
      "Click the home icon to the go to the home page and the list icon in " +
      "the header to go the home and get the full list of all tasks respectively",
    id: "124",
  },
  {
    title: "A ride to the moon",
    date: new Date(),
    completed: false,
    priority: "low",
    description: "Whatever",
    id: "125",
  },
];

// Toggle a task's completion in the todolist
export function toggleCompletion(target: Todo, todoList: Map<string, Todo[]>) {
  const updatedList = new Map<string, Todo[]>();

  for (const key of todoList.keys()) {
    const list = todoList.get(key)?.map((task) => {
      if (task.id === target.id)
        return { ...task, completed: !target.completed };

      return task;
    });

    updatedList.set(key, list as Todo[]);
  }

  return updatedList;
}

// Edit a todo task's values
export function editTodo(
  todoList: Map<string, Todo[]>,
  target: Todo,
) {
  const updatedList = new Map<string, Todo[]>();

  for (const key of todoList.keys()) {
    const list = todoList.get(key)?.map((task) => {
      if (task.id === target.id) return target;

      return task;
    });

    updatedList.set(key, list as Todo[]);
  }

  return updatedList;
}

// Purge a task from the todo lists
export function removeTodo(target: Todo, todoList: Map<string, Todo[]>) {
  const updatedList = new Map<string, Todo[]>();

  for (const key of todoList.keys()) {
    const list = todoList.get(key)?.filter((task) => {
      if (task === target) return;

      return task;
    });

    updatedList.set(key, list as Todo[]);
  }

  return updatedList;
}

// Get a list of all tasks based on priority
export function sortByPriority(list: Todo[]): Todo[] {
  const low = [] as Todo[];
  const high = [] as Todo[];
  const medium = [] as Todo[];

  list.forEach((task) => {
    switch (task.priority) {
      case "low":
        low.push(task);
        break;
      case "medium":
        medium.push(task);
        break;
      default:
        high.push(task);
    }
  });

  return [...high, ...medium, ...low];
}

// Sort Tasks by Completion status
export function sortByCompletion(list: Todo[]): Todo[] {
  const unfinished = [] as Todo[];
  const completed = [] as Todo[];

  list.forEach((task) => {
    if (task.completed) completed.push(task);
    else unfinished.push(task);
  });

  return [...unfinished, ...completed];
}

// Sort a todo list
export const sortTodoList = (list: Todo[]) =>
  sortByCompletion(sortByPriority(list));
