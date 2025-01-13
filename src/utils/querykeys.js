import { useQuery } from "@tanstack/react-query";

useQuery({ queryKey : [todos], queryFn : fetchTodos });
useQuery({ queryKey : ['todos', 5], queryFn : fetchTodoById });
useQuery({ queryKey : ['todos', 5, { preview : true }], queryFn : fetchTodoByIdPreview });
useQuery({ querykey : ['todos', { type : 'done' }], queryFn : fetchTodosByType });
