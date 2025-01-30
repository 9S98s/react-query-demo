import axios from 'acxios';

export const createPost = async (newPost) => {
    const response = await axios.post('https://api.example.com/posts', newPost);
    return response.data;
};