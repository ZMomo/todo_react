import React, { useState } from 'react';
import useAlert from '../../hooks/useAlert';

function Effect () {
  const [count, setCount] = useState(0);

  useAlert("Mon composant Effect est détruit", count);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

export default Effect