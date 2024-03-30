import React, {useState} from "react";

const Counter =()=>{
    const [count, setcount] = useState(0);

    const inccount = () =>
    {
        setcount(count+1)
    }
    
    const deccount = () =>
    {
    if (count>0)
    {
         setcount(count-1)
    }
    else
    {
        alert('you are reached to the limit 0.')
    }
    }

    return(
        <div style={{textAlign: "center", marginTop: "300px", background: "red", padding: "20px", marginLeft: "700px",
        marginRight: "700px" }}>
        <h1 style={{color: "blue"}}>Counter</h1>
        <h1>{count}</h1>
        <button onClick={inccount}>Increment</button>
        <button onClick={deccount}>Decrement</button>
        </div>
    )
}
export default Counter;