import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import {users} from "../../db.json"

export function UserPicker() {
  const [usersName, setUsers] = useState("Users");

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  const userGroup = users.filter((b) => b.group === usersName)

  if (users === null) {
    return <Spinner />;
  }

  return (
    <select>
      {userGroup.map(u => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}
