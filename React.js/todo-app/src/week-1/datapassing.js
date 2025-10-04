// //  from parent to child 

// function Parent() {
//     const message = "Hello from Parent!";
    
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <Child greeting={message} />
//       </div>
//     );
//   }
  
// ]  function Child({ greeting }) {
//     return (
//       <div>
//         <h2>Child Component</h2>
//         <p>{greeting}</p>
//       </div>
//     );
//   }
  
//   export default Parent;

  

// //===================================================from child to parent==============================================

//   // Parent Component
//   import { useState } from "react";
// function Parent() {
//     const [childData, setChildData] = useState('');
  
//     const handleChildData = (data) => {
//       setChildData(data);
//     };
  
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <p>Data from Child: {childData}</p>
//         <Child sendDataToParent={handleChildData} />
//       </div>
//     );
//   }
  
//   // Child Component
//   function Child({ sendDataToParent }) {
//     const handleClick = () => {
//       sendDataToParent("Hello from Child!");
//     };
  
//     return (
//       <div>
//         <h2>Child Component</h2>
//         <button onClick={handleClick}>Send Data to Parent</button>
//       </div>
//     );
//   }
  
//   export default Parent;
  
  