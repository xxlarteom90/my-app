import { Fragment, useEffect, useReducer, useRef } from "react";
import { sessions, days } from "../../static.json";
// import {bookables} from "../../db.json"
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import { reducer } from "./Reducer";

import { getData } from "../../utils/Api";

const initialState = {
  group: "Rooms",
  bookableIndex: 0,
  hasDetails: true,
  bookables: [],
  isLoading: true,
  error: false,
};

export function BookablesList() {
  // const group = "Rooms";
  // const [group, setGroup] = useState("Kit");
  // const [bookableIndex, setBookableIndex] = useState(0);
  // const groups = [...new Set(bookables.map((b) => b.group))];

  const [state, dispatch] = useReducer(reducer, initialState);

  const { group, bookableIndex, bookables } = state;

  // console.log("Bookableeessss", bookables);
  // console.log("Sessions", sessions)
  // console.log("Days", days)
  // console.log("BookableIndex", bookableIndex)
  // console.log("group", group)

  const { hasDetails, isLoading, error } = state;
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const bookable = bookablesInGroup[bookableIndex];
  const groups = [...new Set(bookables.map((b) => b.group))];
  console.log("bookablesInGroup", bookablesInGroup);
  console.log("bookable", bookable);

  const timerRef = useRef(null);

  useEffect(() => {
    dispatch({ type: "FETCH_BOOKABLES_REQUEST" });
    getData("http://localhost:3001/bookables")
      .then((bookables) =>
        dispatch({
          type: "FETCH_BOOKABLES_SUCCESS",
          payload: bookables,
        })
      )
      .catch((error) =>
        dispatch({
          type: "FETCH_BOOKABLES_ERROR",
          payload: error,
        })
      );
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      dispatch({ type: "NEXT_BOOKABLE" });
    }, 3000);
    return stopPresentation;
  }, []);

  function stopPresentation() {
    clearInterval(timerRef.current);
  }

  // const [hasDetails, setHasDetails] = useState(false);

  function changeGroup(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch({
      type: "SET_GROUP",
      payload: e.target.value,
    });
  }

  // function nextBookable() {
  //   setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
  // }

  function changeBookable(selectedIndex: number) {
    dispatch({
      type: "SET_BOOKABLE",
      payload: selectedIndex,
    });
  }

  function nextBookable() {
    dispatch({ type: "NEXT_BOOKABLE" });
  }

  function toggleDetails() {
    dispatch({ type: "TOGGLE_HAS_DETAILS" });
  }

  if (error) {
    return <p>{error.valueOf() || String(error)}</p>;
  }

  if (isLoading) {
    return (
      <p>
        <Spinner /> Loading bookables...
      </p>
    );
  }

  <Spinner />;

  return (
    <Fragment>
      <select value={group} onChange={changeGroup}>
        {groups.map((g) => (
          <option value={g} key={g}>
            {g}
          </option>
        ))}
      </select>

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

                  <Button onClick={stopPresentation}>Stop</Button>
                </span>
              </div>

              <p>{bookable.notes}</p>
              {hasDetails && (
                <div className="item-details">
                  <h3>Availability</h3>
                </div>
              )}

              <ul>
                {days?.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <ul>
                {sessions?.map((s) => (
                  <li key={s}>{[s]}</li>
                ))}
              </ul>

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
*/}
              <div>
                {/* <select
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                >
                  {groups.map((g) => (
                    <option value={g} key={g}>
                      {g}
                    </option>
                  ))}
                </select> */}

                <p>
                  <Button onClick={nextBookable} autoFocus>
                    <FaArrowRight />
                    Next
                  </Button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
