import { useState } from "react"
import {users} from "../../static.json"
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

export function UsersList() {

    const [usersName, setUsersName] = useState("Users");
    const userGroup = users.filter((b) => b.group === usersName)
    // const userNameGroup = [...new Set(users.map((b) => b.id))]
    const [usersIndex, setUsersIndex] = useState(0);
    const usersBook = userGroup[usersIndex];

    console.log("Bookableeessss", usersBook);
    function nextUsers() {
        setUsersIndex((i) => (i+1) % userGroup.length)
    }

    // const [counter, setCounter] = useState(0);



  return (
    <div>
        {/* {counter}
        <Button onClick={() => setCounter(c => c+1)}>Counter</Button>
        <Button className="mx-4" onClick={() => setCounter(c => c-1)}>DownGreat</Button> */}
        {/* <select value={usersName}  onChange={(e) => setUsersName(e.target.value)}>
            {userNameGroup.map((g) => (
                <option value={g} key={g}>
                    {g}
                </option>
            ))}
        </select> */}

<ul>
    {/* {usersBook.notes.} */}
</ul>

      {userGroup.map((b, i) => (
        <span className="p-2">
        <li
        key={b.id}
        className={i === usersIndex ? "selected": undefined}>
            <Button className="p-2" onClick={() => setUsersIndex(i)}>
                {b.name}
            </Button>
        </li>
        </span>
      ))}

        <p>
      <Button onClick={nextUsers} autoFocus>
        <FaArrowRight/>
        Next
      </Button>
      </p>

    </div>
  )
}
