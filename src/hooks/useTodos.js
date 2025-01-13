import { useQuery } from "@tanstack/react-query"; // reactQuery의 useQuery 훅을 가져옴

async function fetchTodoList() { // API에서 'Todo' 목록을 가져오는 비동기 함수 선언
    const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // fetch를 사용하여 API 요청을 보내고 그 응답을 기다림
    if (!response.ok) throw new Error('Failed to fetch todos'); // 응답이 실패했을 경우 에러 던짐
    return response.json(); // 응답이 성공적이면 JSON 형태로 변환 후 반환
}

function useTodos() { // useQuery 훅을 사용해 'todos' 데이터를 서버에서 가져옴
    const { status, data, error } = useQuery({
        queryKey: ['todos'], // 'todos'라는 고유한 쿼리키를 사용하여 캐시와 데이터 요청 관리
        queryFn: fetchTodoList, // fetchTodoList 함수가 데이터를 가져오는 실제 함수
    });

    return { status, data, error }; // 'useQuery' 훅으로부터 받아온 상태와 데이터 및 에러 반환
}

export default useTodos; // 이 커스텀 훅을 다른 컴포넌트에서 사용할 수 있도록 내보냄