import { useQuery } from "@tanstack/react-query";

async function fetchTodoList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) throw new Error('Failed to fetch todos');
    return response.json();
}

function useTodos() {
    const { status, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodoList,
    });

    return { status, data, error };
}

export default useTodos;