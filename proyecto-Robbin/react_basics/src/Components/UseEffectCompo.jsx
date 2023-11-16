import { useEffect, useState } from "react";

export default function useEffectFn() {
    const [count, setCount] = useState(0)
    const [stateCar, setStatecar] = useState(false)

    const estado = ()=>{
      setStatecar(!stateCar)
      setCount(count+1)
    }

    useEffect (()=>{
        console.log(`Se ha presionado el boton: ${count} veces`);
    }, [count])

    return(
        <>
        <button onClick={estado}>Estado: {stateCar? "Encendido": "Apagado"}</button>
        </>


    )
}
