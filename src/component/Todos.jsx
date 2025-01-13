import React from 'react';
import useTodos from '../hooks/useTodos';

function Todos() {
    const { status, data, error } = useTodos();

    if (status === 'loading') {
        return <span>Loading...</span>;
    }

    if (status === 'error') {
        return <span>Error: {error.message}</span>;
    }

    return (
        <ul>
            {data.map((todo) => {
                <li key={todo.id}>{todo.title}</li>
            })}
        </ul>
    );
}

export default Todos;