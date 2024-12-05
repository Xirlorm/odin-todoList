import { Home, List, Plus } from "react-feather";
import { Dispatch, SetStateAction } from "react";
import { format } from "date-fns";

interface HeaderArgs {
  setShowInput: Dispatch<SetStateAction<boolean>>;
  setPage: Dispatch<SetStateAction<"home" | "list-all">>;
  page: "home" | "list-all";
  date: Date,
}

function Header({ setShowInput, setPage, page, date }: HeaderArgs) {
  return (
    <header>
      <div>
        <span className="date">{`${format(date, "eee LLL d yyy")}`}</span>
        <h1>Just do it</h1>
      </div>
      <div>
        <button
          className={page == "home" ? "active-page" : ""}
          title="Home"
          onClick={() => setPage("home")}
        >
          <Home size="1.4rem" />
        </button>
        <button
          className={page == "list-all" ? "active-page" : ""}
          title="List all todo tasks"
          onClick={() => setPage("list-all")}
        >
          <List size="1.4rem" />
        </button>
        <button
          onClick={() => setShowInput((val) => !val)}
          title="Add todo task"
          className={page == "list-all" ? "hide" : ""}
        >
          <Plus size="1.4rem" />
        </button>
      </div>
    </header>
  );
}

export default Header;
