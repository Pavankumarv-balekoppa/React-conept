const Eventbtn = () => {
    let update=()=>{
        console.log('pavan');
        alert('pavan')
    }
    return ( 
        <div className="pa">
            <h1>hii bad boy</h1>
            <img src="Dharshan.jpg" alt="" height={400} width={300}/>
            <h1 style={{color:"green"}}>hi Rolex</h1>
            <button onClick={()=>update()}>update</button>
        </div>
     );
}
export default Eventbtn;