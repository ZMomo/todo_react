import axios from 'axios';
import { useEffect, useState } from 'react';

const ConnexionBackend = () => {

    const [todos, setTodos] = useState();

    const getTodos = async () => {
        const result = await axios.get('http://localhost:8000/api/todos/');
        setTodos(result.data.success)
        console.log(result.data.success)
    }

    useEffect(() => {
        getTodos();
    }, [])

    //Cette methode permet de se passer du ' todos && ' dans le second return
    //if (!todos) return <div>loading...</div> 

    return (
        <div>
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