import React from 'react';

export const Todo = (e) => {
    return (
        <div className='todo' id={`todo-${e.id}`}>
            <div className='todo-text'>
                {e.title}
            </div>
            <div className='todo-status'>
                {e.completed ? "Completed" : "InCompleted"}
            </div>
        </div>
    )
}
