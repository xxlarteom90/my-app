import { useState } from "react";
import { bookables } from "../../static.json";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

export function BookablesList() {
  const group = "Rooms";
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(1);

  function nextBookable() {
    setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
  }

  console.log(bookableIndex);

  return (
    <div>
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

      <p>
        <Button onClick={nextBookable} autoFocus>
        <FaArrowRight/>
          Next
        </Button>
      </p>
    </div>
  );
}
