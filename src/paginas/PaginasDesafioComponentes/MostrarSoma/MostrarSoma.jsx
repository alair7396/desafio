import React from "react";
import { useState } from "react";

const MostrarSoma=()=>{
    const [use,useSet]=useState('')
    const [use2,useSet2]=useState('')
    const [use3,useSet3]=useState(0)

       const input=(event)=>{
            useSet(event.target.value)
        }
        const input2=(event)=>{
            useSet2(event.target.value)
        }
        const resultado=()=>{
            useSet3(Number(use)+(Number(use2)))
        }

    return(
        <>
        <input type="text" value={use} onChange={input} placeholder="Digite um número"/>
        <input type="text" value={use2} onChange={input2} placeholder="Digite um número"/>
        <button onClick={resultado}>Somar</button>
        
        <h1>{use3}</h1>
        </>
    )

}
export default MostrarSoma;