// import React, { useState } from "react";

// function TextForm({ onSubmit }) {
//   const [data, setData] = useState("");

//   const handle = () => {
//     onSubmit(data); // Pass the entered value to the parent component
//     setData(""); // Clear the input field
//   };

//   return (
//     <>
//       <form>
//         <input
//           value={data}
//           onChange={(e) => setData(e.target.value)} // Update state on input change
//           placeholder="Enter your name"
//         />
//         <button type="button" onClick={handle}>
//           Submit
//         </button>
//       </form>
//     </>
//   );
// }

// function Greetings() {
//   const [greeting, setGreeting] = useState("");

//   const handleGreeting = (name) => {
//     setGreeting(name);
//   };

//   return (
//     <>
//       <h1>Hello {greeting}</h1>
//       <hr />
//       <TextForm onSubmit={handleGreeting} />
//     </>
//   );
// }

// export default Greetings;

//============================================================

import React, { useState, useEffect } from "react";

function RandomDataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((result) => setData(result.value))
      .catch(console.error);
  }, []);

  return <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>;
}

export default RandomDataFetcher;
