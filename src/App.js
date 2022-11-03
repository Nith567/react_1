import './App.css';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid"
const Person=(props)=>{
  return (
    //  <h1>namey:{props.names}</h1>
    // <h2>lastaname:{props.last ? props.last :'LAST NAME ENTER PLEASE'}</h2>
    // <h2>age:{props.age}</h2>
        <div className=" m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img} alt="image not found"/>
         <div className="text-center space-y-2 sm:text-left">
       <div className="space-y-0.5"> 
      <p className="text-lg text-black font-semibold">
        {props.name}
      </p>
      <p className="text-slate-500 font-medium">
        {props.job} </p>
    </div>
    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>
  </div>
</div>
  );
}
const App=()=> {
  // const [role,setRole]=useState("reddy");
  // // const name="nithin";
  // // const isnameshowing=true ;
  // const [count,setcounter]=useState(0);
  // return (
  //   <div classNameName="App bg-red-300">
  // <input type="text" onChange={(e)=>{
  //   console.log(e.target.value);
  //   setRole(e.target.value);
  //  }}/>   
  //     <Person names="people" last={role} age={12}/>
  //     <Person names="SNEHA" age={25}/>
 
  //  <button onClick={()=> setcounter((prevcounter)=>prevcounter-1)}>-</button>
  //  <h1>{count+1}</h1>
  //  <button onClick={()=> setcounter((prevcounter)=>prevcounter+1)}>+</button>
  //   {/* <h1>HI ,BABY!,{isnameshowing ? name :"wrong bab"} {23+5}</h1> */}
  //   </div>
  const[employees,setEmployees]=useState(
    [
      {name:"nithin",job:"devloper",img:"https://imgs.search.brave.com/iF1JKqqBdkQjpR7i4KOxIwYqaMjud6Zy8gbdLsGW3Tw/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/U0FTNHEwbUs5SHBr/RTQ5cVJBRkVBSGFG/aiZwaWQ9QXBp"},
    
      {name:"sneha",job:"snr devloper",img:"https://images.pexels.com/photos/10669816/pexels-photo-10669816.jpeg"},
      {name:"rithika",job:"devloper",img:"https://imgs.search.brave.com/F7J6w1zKDJ8m4RnRECZqdn6qcrmptgR78thU7TySP7o/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/UXJZMWlBeHYyRHJy/S0RXYjk3UlVRSGFM/RyZwaWQ9QXBp"},
    
      
      {name:"pavani",job:"devloper",img:"https://imgs.search.brave.com/F7J6w1zKDJ8m4RnRECZqdn6qcrmptgR78thU7TySP7o/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/UXJZMWlBeHYyRHJy/S0RXYjk3UlVRSGFM/RyZwaWQ9QXBp"},
    
      {name:"",job:"devloper",img:"https://imgs.search.brave.com/F7J6w1zKDJ8m4RnRECZqdn6qcrmptgR78thU7TySP7o/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/UXJZMWlBeHYyRHJy/S0RXYjk3UlVRSGFM/RyZwaWQ9QXBp"},
    
    ]
  )
  return (

<div className='flex flex-wrap justify-center '>
{/* /* <Person job="software job" name="mia malkova" img="https://imgs.search.brave.com/iF1JKqqBdkQjpR7i4KOxIwYqaMjud6Zy8gbdLsGW3Tw/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/U0FTNHEwbUs5SHBr/RTQ5cVJBRkVBSGFG/aiZwaWQ9QXBp"/>
<Person job="bakeray shop" name="nithin"img="https://imgs.search.brave.com/F7J6w1zKDJ8m4RnRECZqdn6qcrmptgR78thU7TySP7o/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/UXJZMWlBeHYyRHJy/S0RXYjk3UlVRSGFM/RyZwaWQ9QXBp"/>
<Person job="software job" name="mia malkova" img="https://www.pexels.com/photo/woman-in-black-and-white-long-sleeve-shirt-14169804/"/>
<Person job="bakeray shop" name="nithin"img="https://www.pexels.com/photo/3-women-standing-on-field-10669816/"/>
<Person job="software job" name="mia malkova" img="https://www.pexels.com/photo/woman-in-black-and-white-long-sleeve-shirt-14169804/"/>
<Person job="bakeray shop" name="nithin"img="https://www.pexels.com/photo/3-women-standing-on-field-10669816/"/>
<Person job="software job" name="mia malkova" img="https://www.pexels.com/photo/woman-in-black-and-white-long-sleeve-shirt-14169804/"/>
<Person job="bakeray shop" name="nithin"img="https://www.pexels.com/photo/3-women-standing-on-field-10669816/"/>
<Person job="software job" name="mia malkova" img="https://www.pexels.com/photo/woman-in-black-and-white-long-sleeve-shirt-14169804/"/>
<Person job="bakeray shop" name="nithin"img="https://www.pexels.com/photo/3-women-standing-on-field-10669816/"/
<Person job="bakeray shop" name="nithin"img="https://www.pexels.com/photo/3-women-standing-on-field-10669816/"/> */} 
{employees.map((x)=>{
console.log(x);
  return(
<Person
key={uuidv4()}
name={x.name}
 job={x.job}
  img={x.img}
/>
  );
})}
</div>
  );
}

export default App;
