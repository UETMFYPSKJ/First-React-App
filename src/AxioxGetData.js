import React from "react";
import { useEffect, useState} from "react";
 import Axios from "axios";

 const Getdata= () =>{
    
const [data,setdata]=useState([])

    useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>
        {console.log("Gettting from::::", res.data)
        setdata(res.data)})
    .catch(err=>console.log(err))
     },[])

     const arr= data.map((data,index)=>{
         return(
        <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>)
     })

    
     return(
        <div>
           <table>
  <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Body</th>
  </tr>
  {arr}
</table>
        </div>
    )
}
export default Getdata;