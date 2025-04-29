import { useRef, useState } from "react";
import { Button } from "react-bootstrap";

export function CounterRef() {
  const [count, setCount] = useState(1);

  const ref = useRef(1);

  const incCount = () => setCount((c) => c + 1);

  const incRef = () => ref.current++;

  console.log('Count: ', count)
  console.log('Countref: ', ref.current)

  return (
    <div>
      <Button onClick={incCount}>count: {count}</Button>
      <hr />
      <Button onClick={incRef}>RefCounter: {ref.current}</Button>
    </div>
  );
}
