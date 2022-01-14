import { Link } from "react-router-dom"
import './Navbar.css'
export const Navbar = ()=>{
    return <>
       <div id='navbar'>
           <div>

       <h1>Routing</h1>
           </div>
           <div className="n-btn"> 
                <ul>
                    <li  ><Link to='/' style={{textDecoration: 'none' ,alignItems:'center'}}>Home</Link></li>
                    <li style={{marginLeft:"100px"} }><Link to='/products'style={{textDecoration: 'none'}}>Products</Link></li>
                </ul>
           </div>
       </div>
    </>
}