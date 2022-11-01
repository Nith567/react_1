import './App.css';
import { useState } from 'react';
const Person=(props)=>{
  return (
    <>
    <h1>namey:{props.names}</h1>
    <h2>lastaname:{props.last}</h2>
    <h2>age:{props.age}</h2>
</>
  );
}

const App=()=> {
  // const name="nithin";
  // const isnameshowing=true ;
  const [count,setcounter]=useState(0);
  return (
    <div className="App">
      <Person names="peope"/>
   <button onClick={()=> setcounter((prevcounter)=>prevcounter-1)}>-</button>
   <h1>{count+1}</h1>
   <button onClick={()=> setcounter((prevcounter)=>prevcounter+1)}>+</button>
    {/* <h1>HI ,BABY!,{isnameshowing ? name :"wrong bab"} {23+5}</h1> */}
    </div>
  );
}

export default App;
