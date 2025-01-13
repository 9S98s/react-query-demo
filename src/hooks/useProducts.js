import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

const useProducts = () => {
    return useQuery('products', fetchProducts);
};

export default useProducts;