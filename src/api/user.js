export const fetchUser = async (userId) => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
        throw new Error('User not found');
    }
    return response.json();
}

export const updateUser = async (userData) => {
    const response = await axios.patch('https://api.example.com/users', userData);
    return response.data;
};