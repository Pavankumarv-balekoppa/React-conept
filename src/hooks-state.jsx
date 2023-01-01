import { useState} from "react";
import Hookstate2 from "./hookstate2";

const Hookstate =()=>{
    let[value1,valu2]=useState(0)
    let inc=()=>
    {
        valu2(value1+1)
    }
    let desc=()=>{
        valu2(value1-1)
    }
    let[change1,change2]=useState("pavan")
    let change=()=>{
        if(change1=="pavan")
        {
        change2("pavankumar")
        }
        else
        {
            change2("pavan")
        }
    }
    let [pa1,pa2]=useState(0)
    let pa=()=>{
        pa2(pa1+1)
    }
    return(
        <div className="hook">
            <h1>hi</h1>
            <h2>{value1}</h2>
            <button onClick={inc}>increase</button>
            <button onClick={desc}>decrease</button>
            <h2>{change1}</h2>
            <button onClick={change}>changeing</button>
            <h1>{pa1}</h1>
            <button onClick={pa}>useefect</button>
        </div>
    )
}
export default Hookstate;