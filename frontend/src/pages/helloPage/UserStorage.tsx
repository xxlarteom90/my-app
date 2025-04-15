import { useEffect, useState } from "react";

export function UserStorage() {
  const [user, setUser] = useState("Sanjiv");

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", user);
  }, [user]);

  return (
    <select value={user} onChange={(e) => setUser(e.target.value)}>
      <option>Jason</option>
      <option>Mark</option>
      <option>Kris</option>
      <option>Sanjiv</option>
    </select>
  );
}
