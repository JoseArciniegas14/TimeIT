/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

export default function counter() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0)
  return (
    <>
    <button onClick={()=>{setCount(count => count + 1)}}>Contador: {count}</button>
    </>
  )
}

export function MasUsoUseState() {

  const [stateCar, setStateCar] = useState(true)

  const onOff = () =>{
    setStateCar(!stateCar)
  }

  return(
    <div>
    <button onClick={onOff}>El vehiculo esta: {stateCar? "Encendido": "Apagado"}</button>
    </div>

  )
}