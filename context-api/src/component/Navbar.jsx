import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "./nav.css"

export const Navbar = () => {
  const {authController,loginStatus } = useContext(AuthContext);
  const toggle = () => {
    authController();
  };
  return <div className="nav" >
      <h1 style={{ marginLeft:"150px" }}>Navbar</h1> 
      <button onClick={toggle}>{!loginStatus ? "LogIn" : "LogOut"}</button>  
    </div>
}