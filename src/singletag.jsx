// function Singletag()
// {

//     return(
//         <div className="k">
//             <h1>pavan</h1>
//         </div>
//     )
// }
// export default Singletag;

const Singletag = () => {
    let db = [{
        name: "pavan",
        age: 23
    },
    {
        name: "kumar",
        age: 24
    }]
    return (
        <div className="single">
               {db.map((x)=>(
                <div className="tag">
                    <h1>{x.name}</h1>
                    <h2>{x.age}</h2>
                </div>
            ))}
        </div>
        )
}
export default Singletag;