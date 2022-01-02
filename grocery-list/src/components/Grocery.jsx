import { useState } from "react";
import { TodoInput } from "./GroceryInput";
import { TodoItem} from "./GroceryList";
import {nanoid} from "nanoid"
import "./Grocery.css"


export const Todo = () => {
    const [list, setList] = useState([]);
    const handleClick = (data) => {

        const payLoad = {
            title: data,
            status: false,
            id:nanoid(7)
        }
        setList([...list, payLoad]);
    };
    const deleteItem = (i)=>{
        list.splice(i,1);
        setList([...list])
    }
    return (
        <>
            <TodoInput getData={handleClick} />
            <h3>Items List</h3>
            {list.map((e,i) => (
              <p className="list-item">
             <TodoItem key={i} {...e}/>
             <button onClick={()=>deleteItem(i)}>DELETE</button>
             </p>
            ))}
            
        </>
    );
};



 