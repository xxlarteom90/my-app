import { Fragment, useReducer } from "react";
import { bookables } from "../../static.json";
import { Button } from "react-bootstrap";
// import { FaArrowRight } from "react-icons/fa";
import { reducer } from "./Reducer";

const initialState = {
  group: "Rooms",
  bookableIndex: 0,
  hasDetails: true,
  bookables,
};

export function BookablesList() {
  // const group = "Rooms";
  // const [group, setGroup] = useState("Kit");
  // const [bookableIndex, setBookableIndex] = useState(0);
  // const groups = [...new Set(bookables.map((b) => b.group))];
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const { group, bookableIndex, bookables, hasDetails } = state;
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const bookable = bookablesInGroup[bookableIndex];
  // const groups = [...new Set(bookables.map((b) => b.group))];
  // console.log("Bookableeessss", bookable);

  // const [hasDetails, setHasDetails] = useState(false);

  // function changeGroup(e: React.ChangeEvent<HTMLSelectElement>) {
  //   dispatch({
  //     type: "SET_GROUP",
  //     payload: e.target.value,
  //   });
  // }

  // function nextBookable() {
  //   setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
  // }

  function changeBookable(selectedIndex: number) {
    dispatch({
      type: "SET_BOOKABLE",
      payload: selectedIndex,
    });
  }

  // function nextBookable() {
  //   dispatch({ type: "NEXT_BOOKABLE" });
  // }

  function toggleDetails() {
    dispatch({ type: "TOGGLE_HAS_DETAILS" });
  }

  console.log(bookableIndex);

  return (
    <Fragment>
      {/* <select value={group} onChange={changeGroup}>
        {groups.map((g) => (
          <option value={g} key={g}>
            {g}
          </option>
        ))}
      </select> */}

      <div>
        {/* group picker */}

        <ul className="bookables items-list-nav">
            {bookablesInGroup.map((b, i) => (
              <span className="p-2">
                <li
                  key={b.id}
                  className={i === bookableIndex ? "selected" : undefined}
                >
                  <Button className="p-2" onClick={() => changeBookable(i)}>
                    {b.title}
                  </Button>
                </li>
              </span>
            ))}
          </ul>

{/* Next button */}
      </div>

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
                      onChange={toggleDetails}
                    />
                    Show Details
                  </label>
                </span>
              </div>

              <p>{bookable.notes}</p>
              {hasDetails && (
                <div className="item-details">
                  <h3>Availability</h3>
                  </div>
                 
              )}
                        {/* <ul>
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

              
              <p>
                <Button onClick={nextBookable} autoFocus>
                  <FaArrowRight />
                  Next
            </Button>
          </p> */}
          
          
          </div>
        </div>
        )}
      </div>
    </Fragment>
  );
}
