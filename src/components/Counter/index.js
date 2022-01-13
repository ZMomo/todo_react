import { useEffect, useState } from 'react'

import useAlert from '../../hooks/useAlert';


function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    const [message, setMessage] = useState();
    
    // useAlert("Mon composant Counter est détruit", count);

    useEffect(() => {
      alert(`le message a changé: ${message}`)
    }, [message])

    useEffect(() => {
      alert("Ce hook ne s'execute qu'une fois au montage de mon composant")
    }, [])

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(e.target[0].value)
    }

    return (
      <>
        Total : {count}
        <button onClick={() => setCount(initialCount)}>Réinitialiser</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <input type="submit" />
        </form>
      </>
    );
  }

  export default Counter