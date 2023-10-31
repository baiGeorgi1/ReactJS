import { useState } from "react"; // or do next line
// import React from "react";

export default function Timer(props) {
  const [count, setCount] = useState(props.startTime); //pass initial state

  // don't use setTimeout useEffect is better!
  setTimeout(() => {
    setCount(count + 1);
  }, 2000);

  return (
    <div>
      <h3>Timer</h3>
      <p>{count}</p>
    </div>
  );
}
