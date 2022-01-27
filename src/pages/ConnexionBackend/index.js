import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

const ConnexionBackend = () => {

    const [todos, setTodos] = useState();

    const textRef = useRef();

    const getTodos = async () => {
        const result = await axios.get('http://localhost:8000/api/todos/');
        setTodos(result.data.success)
        console.log(result.data.success)
    }

    const postTodo = async (event) => {
        event.preventDefault(); // empeche la page de se recharger lors du submit du formulaire
        const result = await axios.post('http://localhost:8000/api/todos/', { text: textRef.current.value })
        const { insertId } = result.data.success;
        setTodos(prevState => { 
            return [ ...prevState, { id: insertId, text: textRef.current.value }]
        })
        textRef.current.value = "";
        textRef.current.focus()
    }

    useEffect(() => {
        getTodos();
        console.log(textRef.current);
    }, [])

    useEffect(() => {
        console.log(todos);
    }, [todos])
    
    //Cette methode permet de se passer du ' todos && ' dans le second return
    //if (!todos) return <div>loading...</div> 
    
    return (
        <div>
            <form>
                <input type="text" ref={textRef}/>
                <input type="submit" value="creer" onClick={(event) => postTodo(event)}/>
            </form>
            <ul>
                {
                    todos && todos.map( 
                        (todo) => { 
                            return <li key={`todo-${todo.id}`}>{todo.text}</li>
                        } 
                    )
                }
            </ul>
        </div>
    )
}

export default ConnexionBackend;