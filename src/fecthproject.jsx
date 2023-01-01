import { useEffect, useState } from "react";

const Fecthproject = () => {
    let [value1,value2]=useState([])
    useEffect(()=>{
    let fetching=async()=>{
        let response=await fetch('https://api.github.com/users')
        let data=await response.json()
        value2(data)
    }
    fetching()
    },[])
    let remove =(login)=>{
        value2(value1.filter(x=>x.login!=login))
    }
    return ( 
        <div className="di">
            {value1.map((x)=>(
                <div className="map">
                <h1>{x.login}</h1>
                <img src={x.avatar_url} alt="" width={100} height={100} />
                <button onClick={()=>remove(x.login)}>delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default Fecthproject;