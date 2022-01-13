import React, { useState, useEffect } from 'react';

function Effect () {
  const [count, setCount] = useState(0);

  // Équivalent à componentDidMount plus componentDidUpdate :
  useEffect(() => {
    // Mettre à jour le titre du document en utilisant l'API du navigateur
    document.title = `Vous avez cliqué ${count} fois (effect)`;

    return () => {
        alert('Mon composant est détruit')
    }
  });

  // Anciennement avec le systeme de classes:
  //componentDidMount -> se declenche sur le premier rendu
  //componentDidUpdate -> se declenche à chaque rendu 
  //componentWillUnmount -> se declenche à chaque juste avant que le composant soit détruit 

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