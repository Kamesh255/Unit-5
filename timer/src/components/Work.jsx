import {Timer} from './Timer'
import { useState } from 'react';

function Work() {
  const [show, setShow]  = useState(false);
  const [times , setTimes] = useState(null);
  const changes = (e)=>{
      const  {name, value} = e.target;
       setTimes(
         {
           ...times,
           [name] :value
         }
       )
  }
  const submitChanges =(e)=>{
     e.preventDefault();
     if(times.init && times.end)
     {
      setShow(true)
     }
  } 
  return (
    <div className="work">
      <form onSubmit={submitChanges}>
      <input name = 'init' onChange={changes} type="number" placeholder='Enter start time of counter'/>
      <input name = 'end'  onChange={changes} type="number" placeholder='Enter end time time of counter'/>
      <input type="submit" value="start"/>
      </form>
       {show ?<Timer i = {times.init} end= {times.end}/>:null}
       <button onClick={()=> setShow(!show)}>{show?"Hide":"Show"}</button>
    </div>
  );
}
export default Work