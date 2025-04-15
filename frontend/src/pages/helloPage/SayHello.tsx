import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";

export function SayHello() {

    const greetings = ["Hello", "Bonjour", "Ciao", "Hola","こんにちは"]

    const [index, setIndex] = useState(0);

    useEffect(() => {
        document.title = greetings[index];
    })

    function updateGretting () {
        setIndex(Math.floor(Math.random() * greetings.length));
    }

console.log("SayHello", document.title)
  return (
    <>
    <p className="mx-3">{document.title}</p>
    <Button className="mx-3" onClick={updateGretting}>Say Hi</Button>
    </>
  )
}
