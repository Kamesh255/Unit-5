import "./App.css"; 
import Navbar from "./components/Navbar"; 
import { MyRoute } from "./components/Routes";
function App() {
  return (
    <div className="App"> 
    <Navbar/>
     <MyRoute/>
    </div>
  );
}

export default App;
