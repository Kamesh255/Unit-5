import "./App.css"; 
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { AddJob } from "./Components/AddJobs";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Singup";
 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/addjob" element={<AddJob />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/user/signup" element={<Signup />}></Route>  
      </Routes>
    </div>
  );
}

export default App;