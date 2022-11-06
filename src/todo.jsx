import { useState } from "react";
import './todo.css';

function Todo() {
    const [todo, setTodo] = useState([]);


    function addTask() {

    }

    return (
        <div className="App">
            <div className="container">
                <header>
                    <h1>My Tasks</h1>
                </header>
                <section className="task-input">
                    <div className="input">
                        <input type="text" placeholder="Enter your Task" />
                    </div>
                    <div className="button">
                        <button >Add</button>
                    </div>
                </section>
                <section className="tasks-list">
                    <div className="task-card">
                        <p>Lorem ipsum dolor.</p>
                    </div>
                    <div className="close">
                        <button className="closebtn">X</button> 
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Todo