import { Fragment, useState } from "react";
import { bookables, days, sessions } from "../../static.json";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

export function BookablesList() {
  // const group = "Rooms";
  const [group, setGroup] = useState("Kit");
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);
  const groups = [...new Set(bookables.map((b) => b.group))];
  const bookable = bookablesInGroup[bookableIndex];

  console.log("Bookableeessss", bookable);

  const [hasDetails, setHasDetails] = useState(false);

  function nextBookable() {
    setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
  }

  console.log(bookableIndex);

  return (
    <Fragment>
      <div className="container gap-2">
      {bookable && (
        <div className="row align-items-end">
          <div className="col-12">
            <div className="item-header">
              <h2>{bookable.title}</h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={() => setHasDetails((has) => !has)}
                  />
                  Show Details
                </label>
              </span>
            </div>

            <p>{bookable.notes}</p>
            {hasDetails && (
              <div className="item-details">
                <h3>Availability</h3>
                <div className="bookable-availability">
                  <ul>
                    {bookable.days?.sort().map((d) => (
                      <li key={d}>{days[d]}</li>
                    ))}
                  </ul>

                  <ul>
                    {bookable.sessions?.map((s) => (
                      <li key={s}>{sessions[s]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div>
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          {groups.map((g) => (
            <option value={g} key={g}>
              {g}
            </option>
          ))}
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
            <FaArrowRight />
            Next
          </Button>
        </p>
      </div>
      </div>
    </Fragment>
  );
}
