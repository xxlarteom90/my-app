import { useState } from "react";
import { bookables } from "../../static.json";
import { Button } from "react-bootstrap";

export function BookablesList() {
  const group = "Rooms";
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(1);
  console.log(bookableIndex);

  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <span className="p-2">
          <li
            key={b.id}
            className={i === bookableIndex ? "selected" : undefined}
          >
            <Button className="p-2" onClick={() => setBookableIndex(i)}>
              {b.title}
            </Button>
          </li>
        </span>
      ))}
    </ul>
  );
}
