import axios from 'acxios';

// POST 요청: 새로운 게시글 생성
export const createPost = async (newPost) => {
    const response = await axios.post('https://api.example.com/posts', newPost);
    return response.data;
};