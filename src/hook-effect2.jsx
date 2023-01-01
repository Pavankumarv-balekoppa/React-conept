//extract the data from the user crreated database using the useEffect and json server 
// with out using internet

import { useEffect, useState } from "react";

const Hookeffect2 = () => {
    let[inial,update]=useState([])
    useEffect (()=>{
        let fecthdata=async()=>{
            let response=await fetch('http://localhost:2222/user')
            let data= await response.json()
            update(data)
        }
        fecthdata()
    })
    return ( 
        <div className="ef2">
            <h1>useEffect with user created database</h1>
                {inial.map(x=>(
                <div className="ma" style={{color:'red',backgroundColor:'yellow'}}>
                    <h1>{x.name}</h1>
                    <h1>{x.age}</h1>
                    <h1>{x.place}</h1><hr />
                    </div>
                ))}
        </div>
     );
}
 
export default Hookeffect2;