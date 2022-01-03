import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import { ROW } from "./FormItem";
import { addTodo } from "./FormScript";
import { getTodo } from "./FormScript"; 
import "./Form.css"
export const Form = () => {
  const [data, state] = useState({});
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState([]);
  
  useEffect(() => {
    getTodo(`http://localhost:3002/userdata?_page=${page}&_limit=5`,setTodo);
  }, [page]);

  const handleChange = (e) => {
    const { name, value } = e.target

    state({
        ...data,
        [name]: value,
        id: nanoid()
    })
}
const handleDelete = (id)=>{
  console.log(id);
  fetch(`http://localhost:3002/userdata/${id}`,{method:"DELETE"}).then(res=>res.json()).then(res=>console.log(res)).then(()=>{
      getTodo(`http://localhost:3002/userdata?page=${page}&_limit=5`,setTodo);
  })
} 

const submitForm = (e) => {
  e.preventDefault();
  addTodo(data,page);
}  
  return (
    <>
    <form onSubmit={submitForm}>
    <input type="text" onChange={handleChange} placeholder="Recipename" name="name"/>
    <input type="textarea" onChange={handleChange} placeholder="Recipe" name="recipe"/>
    <input type="submit" value="Submit"/>
    </form>

    <button disabled={page ===1} onClick={()=> setPage((p) =>p-1)}>back</button>
    <button onClick={()=> setPage((p) =>p+1)}>next</button>
    <table className="table">
        <thead className="-head">
            <tr className="row">
                <th className="cole1">name</th>
                <th className="cole2">recipe</th>
            </tr>
        </thead> 
        <tbody>
         {todo.map((e)=>(
             <ROW data={e} key={nanoid()} handleDelete = {handleDelete}/>
         ))}
        </tbody>
    </table>
    </>
)
}
