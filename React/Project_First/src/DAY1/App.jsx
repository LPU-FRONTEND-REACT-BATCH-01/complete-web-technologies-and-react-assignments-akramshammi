// import {provider} from 'react-redux'

// import userDetails from './Component/UserDetails'
// import Card from './Component/Card'

// const App =() => {
//     const[state,setState]=useState(0);
//     let normal=0;
//     let handleNormal = ()=> {
//         normal+=1;
//     }
//      let handleState = ()=> {
//         setState(5)
//     }
//     return 
//     <div>
//         <h1>this is state varaible {state}</h1>
//         <h1>this is normal state</h1>
//         <button onClick={handleNormal}></button>
//         <button onClick={handleState}></button>


//     </div>
// }

// export default App  










// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
      
//       <h1>this is state count {count} </h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";

// const App = () => {
//   const [show, setShow] = useState("password");

//   const handleShow = () => {
//     setShow(show === "password" ? "text" : "password");
//   };

//   return (
//     <div>
//       <input type={show} placeholder="Enter password" />
//       <button onClick={handleShow}>
//         {show === "password" ? "Show" : "Hide"}
//       </button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div>
//       <img src={
//           isOn
//             ? "https://www.w3schools.com/js/pic_bulbon.gif"
//             : "https://www.w3schools.com/js/pic_bulboff.gif"
//         }
//         alt="bulb"
//         width="100"
//       />

//       <br />

//       <button onClick={() => setIsOn(prev => !prev)}>
//         {isOn ? "Turn OFF" : "Turn ON"}
//       </button>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [count1, setCount1] = useState(1);

//   useEffect(() => {
//     console.log("Count updated:", count1);
//   }, [count1]);

//   return (
//     <div style={{ padding: "40px", fontFamily: "Arial" }}>
//       <h1>{count1}</h1>

//       <h1>This is count : {count1}</h1>

//       <button onClick={() => setCount1(count1 + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// };

// export default App;



import React , {useState} from "react";
 function App(){
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick = {() => setcount(count+1)}>
        Increase</button>
        <button onClick={() => setcount(count -1)} >
          Decrease</button> 
    </div>
  )
 }
 export default App;