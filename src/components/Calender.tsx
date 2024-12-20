import { Day, format, nextDay } from "date-fns";
import { Dispatch, SetStateAction } from "react";

interface CalenderArgs {
  date: Date;
  activeDay: string;
  setActiveDay: Dispatch<SetStateAction<string>>;
}

function Calender({ date, activeDay, setActiveDay }: CalenderArgs) {
  const [dayOfWeek, month, day, year] = format(date, "eee LLL d yyy").split(
    " "
  );
  const days = [{ dayOfWeek, month, day, year }];

  for (let i = date.getDay() + 1; i < date.getDay() + 7; i++) {
    const [dayOfWeek, month, day, year] = format(
      nextDay(date, i as Day),
      "eee LLL d yyy"
    ).split(" ");
    days.push({ dayOfWeek, month, day, year });
  }

  return (
    <section>
      <ul className="days">
        {days.map((day) => {
          const dateString = `${day.month} ${day.day} ${day.year}`;
          
          return (
            <li className={dateString === activeDay ? "active" : ""}>
              <button onClick={() => setActiveDay(dateString)}>
                <div>{day.dayOfWeek}</div>
                <div>{day.day}</div>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Calender;
