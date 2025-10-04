//====================================counter app====================================

    // import React,{useState} from 'react';

    // function App(){
    // const [count ,setcount] = useState(0)

    // const handle = ()=>{
    //     setcount(count+1)
    // }
    // return(
    //     <>
    //     <div> <h2>{count}</h2></div>
    //     <div><button onClick={handle}>counter</button></div>
    //     </>
    // )
    // }
    // export default App;

//===========================useState ===============================================

// import React,{useState} from 'react';

// function App(){
// const [data,setinput] = useState([])
// const [inp,setinp]=useState('')

// const handle=()=>{
// const newinput=[...data,{text:inp}]
// setinput(newinput)
// setinp('')
// }

// return (
    
//     <div>
//         <ul>
//        {data.map((texts)=>
//         <li>{texts.text}</li>
// )}
//        </ul>
//         <input value={inp} onChange={(e)=>setinp(e.target.value)} placeholder='enter value'/>
//         <button onClick={handle}>submit</button>
//     </div>
// )
// }

// export default App;


//===========================useEffect  ===============================================

// import React, { useState, useEffect } from 'react';

// function DataFetcher() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(json => setData(json));
//     }, []); // The empty dependency array ensures this effect runs only once when the component mounts

//     return (
//         <div>
//             {data ? <p>{data.title}</p> : <p>Loading...</p>}
//         </div>
//     );
// }

// export default DataFetcher;

//===========================useRef  ===============================================

// import React, { useRef, useState } from 'react';

// function TextInput() {
//     const [inputValue, setInputValue] = useState(''); 
//     const [input,setinput] = useState('')
//     const inputRef = useRef(null); 

//     const focusInput = () => {
//         if (inputRef.current) {
//             inputRef.current.focus();
//             setInputValue(inputRef.current.value); 
//             setinput('')
//         }
//     };

//     return (
//         <div>
//             <input ref={inputRef} value={input} type="text" onChange={(e)=>setinput(e.target.value)} placeholder="Type here..." />
//             <button onClick={focusInput}>Focus Input</button>
//             <p>Input Value: {inputValue}</p> {/* Display the input value */}
//         </div>
//     );
// }

// export default TextInput;


//===========================useHistory  ===============================================

// import React from 'react';
// import { useHistory } from 'react-router-dom';

// function HomePage() {
//     const history = useHistory();

//     const navigateToAbout = () => {
//         history.push('/about');
//     };

//     return (
//         <div>
//             <h1>Home Page</h1>
//             <button onClick={navigateToAbout}>Go to About Page</button>
//         </div>
//     );
// }

// export default HomePage;

//===========================useNavigate ===============================================

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function HomePage() {
//     const navigate = useNavigate();

//     const navigateToAbout = () => {
//         navigate('/about');
//     };

//     return (
//         <div>
//             <h1>Home Page</h1>
//             <button onClick={navigateToAbout}>Go to About Page</button>
//         </div>
//     );
// }

// export default HomePage;

//--------------------------------componentDidMount()----------------------------
// import React from "react";

// class MyComponent extends React.Component {
//     componentDidMount() {
//       console.log('Component mounted');
//       // Fetch data or initialize something
//     }
  
//     render() {
//       return <h1>Hello, World!</h1>;
//     }
//   }

//-----------------------------------componentDidUpdate(prevProps, prevState)----------------------------
// class MyComponent extends React.Component {
//   componentDidUpdate(prevProps, prevState) {
//     if (this.props.value !== prevProps.value) {
//       console.log('Value changed:', this.props.value);
//     }
//   }

//   render() {
//     return <h1>{this.props.value}</h1>;
//   }
// }

//-----------------------------------componentWillUnmount()----------------------------

// class MyComponent extends React.Component {
//   componentWillUnmount() {
//     console.log('Component will unmount');
//     // Cleanup tasks
//   }

//   render() {
//     return <h1>Hello, World!</h1>;
//   }
// }

//   export default MyComponent;

