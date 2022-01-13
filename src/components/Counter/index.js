import { useState } from 'react'

import useAlert from '../../hooks/useAlert';


function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    
    useAlert("Mon composant Counter est détruit", count);

    return (
      <>
        Total : {count}
        <button onClick={() => setCount(initialCount)}>Réinitialiser</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }

  export default Counter