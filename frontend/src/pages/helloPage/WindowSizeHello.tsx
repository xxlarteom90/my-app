import { useEffect, useState } from "react"

export function WindowSizeHello() {

    const [size, setSize] = useState(getSize())

    function getSize(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(()=>{
        function handleResize(){
            setSize(getSize())
        }
        window.addEventListener('resize', handleResize)
       return () => window.removeEventListener('resize', handleResize)
    },[]);

    return <><p>Width: {size.width}</p>
    <p>Height: {size.height}</p>
    </>

   




  return (
    <div>
      
    </div>
  )
}
