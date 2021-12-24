import { useState } from 'react';
import './App.css';

function  App() {
  const [count, setCount] = useState(0);
  const addOne = (value) =>{ 
      setCount(count+ value) 
  }
  const mulTwo = (value) =>{ 
    setCount(count * value) 
}

  if (count > 100 && count > -100){
    return <div className="App">
      <h1>Counter Reached max value</h1></div>
  }
 
  return(
      <div className="App">
          <h3 className="hed">Counter:{count}</h3> 
          <div>
            <button className="btn" onClick={() => addOne(1)} onDoubleClick={() => mulTwo(2)}>Add</button>
            <button className="btn" onClick={() => addOne(-1)} onDoubleClick={() => mulTwo(-2)}>Sub</button> 
          </div>
          <div className="num">Counter is {count % 2 === 0 ? "Even" :"Odd"}</div> 
          <div>
            <h3>Note</h3>
            <h4>on clicking the Add buttun increase by 1 </h4>
            <h4>on clicking the Sub buttun decrease by 1 </h4>
            <h4>on duble clicking the Add buttun multiplied by 2 </h4>
            <h4>on duble clicking the Sub buttun multiplied by -2 </h4>
            <h4>If you cross 100 & -100 so its show "Counter Reached max value" </h4>
          </div>
      </div>
  );
} 
export default App;
