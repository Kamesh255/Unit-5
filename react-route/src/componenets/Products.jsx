import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
export const Products = ()=>{
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData();
      },[]); 
      const fetchData =()=>{
        fetch('http://localhost:3001/products').then(res=>res.json()).then(res => setData(res));
        // console.log('HEllo');
      }
    //   console.log(data);
    return <>
    <div style={{margin:"auto",border:"1px solid", width:"500px"}}> 
        {data.map((e,i)=>(
            <div key={i} style={{display:'flex',margin:'30px',alignItems:'center'}}>
                  <h2>Product-  {e.name}</h2>
                <Link to={`/products/${e.id}`} style={{textDecoration:'none'}}><button style={{marginLeft:"20px" }}>GET DETAILS</button></Link>
            </div>
        ))}
    </div>
    </>
}