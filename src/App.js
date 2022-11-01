import './App.css';
import { useState } from 'react';
const Person=(props)=>{
  return (
    <>
    <h1>namey:{props.names}</h1>
    <h2>lastaname:{props.last ? props.last :'LAST NAME ENTER PLEASE'}</h2>
    <h2>age:{props.age}</h2>
</>
  );
}

const App=()=> {
  const [role,setRole]=useState("reddy");
  // const name="nithin";
  // const isnameshowing=true ;

  const [count,setcounter]=useState(0);
  return (

    <div className="App">
  <input type="text" onChange={(e)=>{
    console.log(e.target.value);
    setRole(e.target.value);
   }}/>   
      <Person names="people" last={role} age={12}/>
      <Person names="SNEHA" age={25}/>
 
   <button onClick={()=> setcounter((prevcounter)=>prevcounter-1)}>-</button>
   <h1>{count+1}</h1>
   <button onClick={()=> setcounter((prevcounter)=>prevcounter+1)}>+</button>
    {/* <h1>HI ,BABY!,{isnameshowing ? name :"wrong bab"} {23+5}</h1> */}
    </div>
  );
}
function employee(props){
  return (
    <>
    {/* <h3>employee {props.name}</h3> */}
    </>
  )
}

export default App;
