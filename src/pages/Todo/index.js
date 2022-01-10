import { useRef, useState } from 'react';

import Button from '../../components/Button';

import './index.css';

const Todo = () => {

    // ici le hook useState
    const [todos, setTodos] = useState([
        { id: 1, texte: "Todo 1" },    // <li>Todo 1</li>
        { id: 2, texte: "Todo 2" },    // <li>Todo 2</li>
        { id: 3, texte: "Todo 3" },    // <li>Todo 3</li>
        { id: 4, texte: "Todo 4" }     // <li>Todo 4</li>
    ]);

    const textRef = useRef();

    const supprimer = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    }
    
    const ajouter = () => {
        const newTodo = { id: todos.length + 1, texte: textRef.current.value }
        // setTodos([...todos, newTodo])
        setTodos(prevState => [...prevState, newTodo])
    }

    return ( 
        <div className="todo">
            <div>
                <input type="text" ref={textRef}/>
                <Button texte="Ajouter" onClick={ajouter}></Button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li id={`todo-${todo.id}`} key={`todo-${todo.id}`}>
                        {todo.texte} <Button onClick={() => supprimer(todo.id)} texte="supprimer"></Button>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Todo;