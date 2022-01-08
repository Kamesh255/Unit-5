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
    getTodo(`http://localhost:3001/userdata?_page=${page}&_limit=5`,setTodo);
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
  fetch(`http://localhost:3001/userdata/${id}`,{method:"DELETE"}).then(res=>res.json()).then(res=>console.log(res)).then(()=>{
      getTodo(`http://localhost:3001/userdata?page=${page}&_limit=5`,setTodo);
  })
} 

const submitForm = (e) => {
  e.preventDefault();
  addTodo(data,page);
}  
  return (
    <>
    <form onSubmit={submitForm}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter Name"
        name="name"
      />
        <input
        type="number"
        onChange={handleChange}
        placeholder="Enter age"
        name="age"
      />
        <input
        type="text"
        onChange={handleChange}
        placeholder="Enter adress"
        name="adress"
      />
        <input
        type="text"
        onChange={handleChange}
        placeholder="Enter department"
        name="department"
      />
        <input
        type="number"
        onChange={handleChange}
        placeholder="Enter salary"
        name="salary"
      />  
      <div>Check Married
        <input
        type="radio" 
        onChange={handleChange}
        placeholder="Marital state"
        name="marital"
        />
      </div>
      <div>Upload photo
        <input
        type="file" 
        onChange={handleChange}
        placeholder="Profile photo"
        name="photo"
        />
      </div>
      <input type="submit" value="Submit" />
      </form>

      <button disabled={page ===1} onClick={()=>setPage((p) => p-1)}>PREV</button>
            <button onClick={()=>setPage((p) => p+1)}>NEXT</button>
            
            <table className="table">
                <thead className="table-header">
                    <tr className="row">
                        <th className="column">Name</th>
                        <th className="column">Age</th>
                        <th className="column">Address</th>
                        <th className="column">Department</th>
                        <th className="column">Salary</th>
                        <th className="column">marital state</th>
                        <th className="column">profile photo</th>
                    </tr>
                </thead>
                <tbody>
                {todo.map((e)=>(
                   <ROW data={e} key={nanoid()} handleDelete = {handleDelete}/>
                ))}
                </tbody>
            </table>
    </>
  );
};
