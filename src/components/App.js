import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import Todo from './Todo';

const App = () => {
    useEffect(() => { fetchTodo(); }, []);
    const [todo, setTodo] = useState([]);
    const [loader, setLoader] = useState(true);
    const [completed, setCompleted] = useState(true);
    const [incomplete, setIncomplete] = useState(true);
    const fetchTodo = () => {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                setTodo(data.slice(0, 20));
                setLoader(false);
            });
    }
    return (

        <div>

            <div id='filter-holder'>
                <div>
                    <input onChange={(e) => { setCompleted(e.target.checked) }} type="checkbox" checked={completed} id='completed-checkbox' /> Completed
                </div>
                <div>
                    <input onChange={(e) => { setIncomplete(e.target.checked) }} type="checkbox" checked={incomplete} id='incompleted-checkbox' /> InCompleted
                </div>
            </div>

            {/* {loader ? <Loader /> : <Todo />} */}
            {loader ? <Loader /> : todo?.map((i) => {
                if (completed === i.completed || incomplete !== i.completed) {
                    return <Todo key={i.id} id={i.id} title={i.title} completed={i.completed} />
                }
            }
            )}
        </div>
    )
}
export default App;
