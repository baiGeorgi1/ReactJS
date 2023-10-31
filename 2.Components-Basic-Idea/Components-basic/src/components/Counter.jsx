import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const onClickCounter = () => {
    setCount((oldValue) => oldValue + 1); // right way - not this => (count+1)
  };

  const reset = () => {
    setCount(0);
  };

  //Conditional Rendering
  //   if (count < 0) {
  //     return <h3>Invalid Count!</h3>;
  //   }
  // *************OR ***************
  //   let warning = null ;
  //   if (count < 0) {
  //     warning = <p>Inavalid count!</p>;
  //   }
  // Other demo
  let message = null;
  switch (count) {
    case 1:
      message = "First time";
      break;
    case 2:
      message = "Second time";
      break;
    case 3:
      message = "Third time";
      break;
  }

  return (
    <div>
      <h1>Counter</h1>

      {/* {warning} */}
      {/* OR with   Ternar operator*/}
      {count < 0 ? <p>Invalid count! </p> : <p>Valid count!</p>}

      {count == 0 && <p>Please start increment!</p>}
      <h4>{message}</h4>
      <p>Count: {count}</p>
      <button onClick={onClickCounter}>Like me</button>
      {/* OR */}
      <button onClick={reset}>Clear</button>
      {/* OR */}
      <button onClick={() => setCount(count - 1)}> Discount </button>
    </div>
  );
}
