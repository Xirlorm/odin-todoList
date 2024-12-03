export default interface Todo {
  title: string;
  description: string;
  completed: boolean;
  id: string;
  date: Date;
  priority: "low" | "medium" | "high";
}
