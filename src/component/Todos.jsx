import React from 'react';
import useTodos from '../hooks/useTodos'; // useTodos 훅을 불러움

function Todos() {
    const { status, data, error } = useTodos(); // useTodos 훅을 사용하고 상태를 관리

    if (status === 'loading') { // 로딩 상태일 때 표시할 내용
        return <span>Loading...</span>;
    }

    if (status === 'error') { // 에러가 발생했을 때 표시할 내용
        return <span>Error: {error.message}</span>;
    }

    return ( // 데이터가 성공적으로 로딩되었을 때 표시할 내용
        <ul>
            {data.map((todo) => {
                <li key={todo.id}>{todo.title}</li>
            })}
        </ul>
    );
}

export default Todos;