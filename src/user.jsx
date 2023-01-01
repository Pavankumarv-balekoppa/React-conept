import '../src/user.css';
import { useState, useEffect } from "react";
const User = () => {

    let [userdata, setdata] = useState([])

    useEffect(() => {
            let fetchdata = async () => {
                let responce = await fetch('https://api.github.com/users')
                let data = await responce.json()
                setdata(data);
            }
            fetchdata()
    },[])

    let remove=(login)=>{
        setdata(userdata.filter(x=>x.login!=login))
        alert(` confirm to delete ${login}`)
    }
    return (
        <div className="user">
            <div className="head">
                <h1>❬</h1>
            <h1>USER PAGE</h1>
            <h1>users : {userdata.length} </h1>
            <h1>☰</h1>
            </div>
            {
                userdata.map((x) => (
                    <div className="usrlist">
                        <img src={x.avatar_url} alt="" height="300" width="300" />
                        <h1>Name :{x.login}</h1>
                        {/* <a href={x.url}>link</a> */}
                        {/* <button>Delete</button> */}
                        <button onClick={()=>remove(x.login)}>Delete</button>
                    </div>
                    
                ))
            }
        </div>
    );
}

export default User;