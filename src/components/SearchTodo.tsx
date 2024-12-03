import { Search } from "react-feather";

function FindTodo() {
  return (
    <div className="find-todo">
      <form action="">
        <input type="text" placeholder="Find todo" />
        <button>
          <Search />
        </button>
      </form>
    </div>
  );
}

export default FindTodo;
