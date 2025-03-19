import { useState } from "react";
import { bookables } from "../../static.json";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

export function BookablesList() {
  // const group = "Rooms";
  const [group, setGroup] = useState("Kit")
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);
  const groups = [...new Set(bookables.map(b=>b.group))]

  function nextBookable() {
    setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
  }

  console.log(bookableIndex);

  return (
    <div>

      <select
      value={group}
      onChange={(e) => setGroup(e.target.value)}>
        {groups.map(g =><option value={g} key={g}>{g}</option>)}
      </select>

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
