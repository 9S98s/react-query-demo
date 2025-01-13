export const fetchProducts = async () => {
    const response = await fetch('https://api.example.com/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}