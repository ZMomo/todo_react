import { useRef, useState } from 'react'

function Counter({initialCount}) {
    // const [count, setCount] = useState(initialCount);
    const countRef = useRef(initialCount);
    const afficher = () => {
      console.log(countRef);
    }

    return (
      <>
        {/* Total : {count} */}
        Total : {countRef.current}
        {/* <button onClick={() => setCount(initialCount)}>Réinitialiser</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> */}
        <button onClick={() => countRef.current = initialCount}>Réinitialiser</button>
        <button onClick={() => countRef.current = countRef.current - 1}>-</button>
        <button onClick={() => countRef.current = countRef.current + 1}>+</button>
        <button onClick={() => afficher()}>afficher</button>
      </>
    );
  }

  export default Counter