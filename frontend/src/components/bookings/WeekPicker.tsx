import { useReducer } from "react";
import { WeekReducer } from "../bookings/WeekReducer";
import { getWeek } from "../../utils/DateWrangler";
import { Button } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaCalendarDay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

type Props = {
  date?: Date;
};

export function WeekPicker({ date }: Props) {
  const initialDate = date || new Date();
  const [week, dispatch] = useReducer(WeekReducer, initialDate, (date) =>
    getWeek({ forDate: date, daysOffset: 0 })
  );

  return (
    <div>
      <p className="date-picker">
        <Button
          className="mx-3"
          onClick={() => dispatch({ type: "PREV_WEEK" })}
        >
          <FaChevronLeft />
          <span>Prev</span>
        </Button>

        <Button className="mx-3" onClick={() => dispatch({ type: "TODAY" })}>
          <FaCalendarDay />
          <span>Today</span>
        </Button>

        <Button
          className="mx-3"
          onClick={() => dispatch({ type: "NEXT_WEEK" })}
        >
          <FaChevronRight />
          <span>Next</span>
        </Button>

        <Button
          onClick={() => dispatch({ type: "SET_DATE", payload: Date.now() })}
        >
          <FaCalendarAlt />
          <span>Date</span>
        </Button>
      </p>
      <p>
        {week.start.toDateString()} - {week.end.toDateString()}
        <div>{week && week.date.toLocaleString()}</div>
      </p>
    </div>
  );
}
