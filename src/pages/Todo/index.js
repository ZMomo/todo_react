import { useRef, useState } from 'react';   // on importe les hooks useRef et useState

import Button from '../../components/Button';

import './index.css';

const Todo = () => {    // On déclare le composant Todo

    // ici le hook useState
    const [todos, setTodos] = useState([    // Ici on déclare le state initial
        { id: 1, texte: "Todo 1" },    // <li>Todo 1 <button texte='supprimer' /></li>
        { id: 2, texte: "Todo 2" },    // <li>Todo 2 <button texte='supprimer' /></li>      > affichage attendu
        { id: 3, texte: "Todo 3" },    // <li>Todo 3 <button texte='supprimer' /></li>
        { id: 4, texte: "Todo 4" }     // <li>Todo 4 <button texte='supprimer' /></li>
    ]);

    const textRef = useRef();   // Je crée une référence que je prévois de rattacher à l'élement input texte afin d'en récupérer la valeur

    const supprimer = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id))         // on utilise setTodos afin de filtrer le tableau todos via la fonction filter
    }
    
    const ajouter = () => {
        const newTodo = { id: todos.length + 1, texte: textRef.current.value }      // Ici on récupère la valeur de textRef afin de l'affecter à la nouvelle Todo
        // setTodos([...todos, newTodo])
        setTodos(prevState => [...prevState, newTodo])          // Ici on ajoute une todo via setTodos
    }

    return (            // On effectue le rendu de la page todo
        <div className="todo">
            <div>
                <input type="text" ref={textRef}/>                      {/* On rattache la ref textRef à l'élément input texte */}
                <Button texte="Ajouter" onClick={ajouter}></Button>     {/* On attache la fonction ajouter à l'élément Button via l'évênement onClick */}
            </div>
            <ul>
                {todos.map((todo) => (          // On utilise la  fonction map afin de parcourir les todos et de retourner l'affichage attendu => <li> Le texte <Button/> <li>
                    <li id={`todo-${todo.id}`} key={`todo-${todo.id}`}>     {/* key dois être unique, nécéssaire à React lors de l'utilisation d'une boucle */}
                        {todo.texte} <Button onClick={() => supprimer(todo.id)} texte="supprimer"></Button>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Todo;    // Ici on exporte le composant Todo