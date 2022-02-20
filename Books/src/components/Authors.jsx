import React  from 'react'
// import { addTodo } from "./Script";
// import { getTodo } from "./Script"; 
import { useState } from "react";

const Authors = () => {

  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [book, setBook] = useState("")
  const [page, setPage] = useState("")
  const [year, setYear] = useState("")
  const [data, setData] = useState([]);   
  
 const submit = (e)=>{
    e.preventDefault();
    const payload = {
      img: image,
      name : name,
      book: book,
      page: page,
      year: year
    }
    setData([...data,payload])
    setImage("")
    setName("")
    setBook("")
    setPage("")
    setYear("")
    
    addTodo(data) 

      // fetch('http://localhost:3001/data', {
      //     method: "POST",
      //     body: JSON.stringify(data),
      //     headers: {
      //         "content-type": "application/json"
      //     }
      // }).then(()=>{
      //     getTodo(`http://localhost:3001/data`)
      // })


  }
  console.log(data)
  const addTodo = (ans) => {
    console.log(ans)
    fetch('http://localhost:3001/data', {
        method: "POST",
        body: JSON.stringify(ans),
        headers: {
            "content-type": "application/json"
        }
    }).then(()=>{
        getTodo(`http://localhost:3001/data`)
    })
  }
  // console.log(data)
const getTodo = (url ,setTodo) => {
    fetch(url).then(res => res.json())
}
 
  return (
    <div  style={{margin:"100px auto", display:"flex",flexDirection:"column",width:"fit-content" }}>
        <form onSubmit={submit}> 
            <input className="w-full border-2 p-2 my-2 " value={image} type="text" placeholder='Upload your photo url link'  onChange={(e)=>setImage(e.target.value)}  />
            <br/>
            <input className="w-full border-2 p-2 my-2 " value={name} type="text" placeholder='Authors name' onChange={(e)=>setName(e.target.value)}  />
            <br/>
            <input className="w-full border-2 p-2 my-2 "  value={book} type="text" placeholder='Books name' onChange={(e)=>setBook(e.target.value)} />
            <br/>
            <input className="w-full border-2 p-2 my-2 "  value={page} type="number" placeholder='Total page'onChange={(e)=>setPage(e.target.value)} />
            <br />
            <input className="w-full border-2 p-2 my-2 "  value={year} type="number" placeholder='Years' onChange={(e)=>setYear(e.target.value)} />
            <br />
            <input className="w-full border-2 p-2 my-2 " type="submit"   />
        </form>
    </div>
  )
}

export default Authors
