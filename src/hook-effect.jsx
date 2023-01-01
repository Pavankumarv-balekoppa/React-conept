//hook effect dependancy

import { useEffect, useState } from "react";
const Hookefect = () => {
let[state,state1]=useState("initial1")
let[value,value1]=useState(0)

// useEffect(()=>{
//     console.log("hi"); //output see in console
// },[])
// useEffect(()=>{
//     console.log("hi"); //output see in console
// },[state])
useEffect(()=>{
    console.log("hi"); //output see in console
},[value])
    return ( 
        <div className="ef">
            <h1>{state}</h1>
            <button onClick={()=>state1("updated")}>click1</button>
            <h1>{value}</h1>
            <button onClick={()=>value1(value+1)}>click2</button>
        </div>
     );
}
 
export default Hookefect;