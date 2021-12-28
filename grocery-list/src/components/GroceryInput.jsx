import { useState } from "react";
import "./Grocery.css"

export const TodoInput = ({getData}) =>{

    const [text, setText] = useState('');
    const handleChange = (e)=>{
        console.log(e.target.value)
        setText(e.target.value);
    };
    const handleClick = ()=> {
        getData(text);
    }

    return(
        <>
        <div className="input"> 
         <input type="text" placeholder="Enter Item Name" onChange={handleChange}/>
         <button onClick = {handleClick}>Add item</button>
        </div>
        </>
    )
}