// hook usesate delete option

import { useState } from "react"
const Hookstate2 =()=>{
    let database=[
        //     name: "pavan",
        //     age: 23
        // },
        // {
        //     name: "kumar",
        //     age: 24
        {
            "author": "Chinua Achebe",
            "country": "Nigeria",
            "imageLink": "images/things-fall-apart.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            "pages": 209,
            "title": "Things Fall Apart",
            "year": 1958
          },
          {
            "author": "Hans Christian Andersen",
            "country": "Denmark",
            "imageLink": "images/fairy-tales.jpg",
            "language": "Danish",
            "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
            "pages": 784,
            "title": "Fairy tales",
            "year": 1836
          }
        ]
      let[booksdata,setdata]=useState(database)
      let del=(title)=>{
        setdata(booksdata.filter(x=>x.title!=title))
        alert(`${title} has removed`)
      }
      return(
        <div className="hook2">
            {booksdata.map((data)=>(
                <div className="d">
                <h1>{data.title}</h1>
                <h1>{data.author}</h1>
                <button onClick={()=>del(data.title)}>delete</button>
                </div>
            ))}
        </div>
      )
}
export default Hookstate2;