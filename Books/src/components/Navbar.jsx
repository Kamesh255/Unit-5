import React from 'react'
import Login from './Login'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    // <div className='bg-slate-600	 w-full h-20 items-center grid grid-cols-2 p-4'>
        <div style={{backgroundColor:"#475569",alignItems:"center", width:"100%",height:"100px",display:"grid", gridTemplateColumns:"60% 40%"}}>
        <div className='ml-11 flex gap-10 ' >
            <div className=''>
                <h1 className='text-4xl text-orange-100 '><span className='text-red-600 font-bold'>B</span>ook<span className='text-red-600 font-bold'>L</span>ibrary</h1>
            </div>
            <div className='flex' >
                <input className='rounded-sm h-10  w-80 px-2' type="text" placeholder='Search your book' />
                <button className='rounded-sm h-10  hover:bg-slate-200  bg-slate-100 ml-5 px-2'>Search</button>               
            </div>
        </div>
        <div>
            <div style={{float:"right"}}>  
            <ul className='flex mr-10 gap-10 text-black '>
                <li>
                   <Link to="/authors"><button className='rounded-sm hover:bg-slate-200  bg-slate-100 h-10 w-24'>Authors</button></Link>
                </li>
                <li>
                   <Link to="/"><button className='rounded-sm hover:bg-slate-200  bg-slate-100 h-10 w-24'>Home</button></Link>
                </li>
                <li>
                    <Link to="/authors"><button className='h-10 rounded-md'><Login/></button></Link> 
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar