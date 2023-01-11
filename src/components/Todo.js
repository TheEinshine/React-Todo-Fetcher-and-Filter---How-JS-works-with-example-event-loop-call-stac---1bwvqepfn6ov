import React from 'react';

export const Todo = (e) => {

    return (
        <div>

            <ol start={e.id}>
                <li>
          
                    <div className='todo' id={`todo-${e.id}`}>
                        <div className='todo-title'>
                            {e.title}
                        </div>
                        <div className='todo-status'>
                            {e.completed ? "Completed" : "InCompleted"}
                        </div>
                    </div>

                </li>
            </ol>
        </div>
    )
}
