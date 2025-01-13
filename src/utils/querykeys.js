import { useQuery } from "@tanstack/react-query";

useQuery({ queryKey : [todos], queryFn : fetchTodos }); // 간단한 쿼리키 예시
useQuery({ queryKey : ['todos', 5], queryFn : fetchTodoById }); // todo는 고정된 문자열이고 5는 변수
useQuery({ queryKey : ['todos', 5, { preview : true }], queryFn : fetchTodoByIdPreview }); // id=5인 Todo를 가져오고 preview: true로 미리보기 형식 지정
useQuery({ querykey : ['todos', { type : 'done' }], queryFn : fetchTodosByType }); // 완료된 todo라는 조건을 명시적으로 추가함
useQuery({ queryKey : ['todos', { status : 'active', page : 2}], queryFn : fetchTodosByPage }); // 2페이지에 있는 활성 상태의 Todo 조건 명시