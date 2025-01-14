import React from "react";
import useProducts from "../hooks/useProducts";

const ProductList = () => {
    const { status, data, error } = useProducts();

    if (status === 'loading') {
        return <p>Loading Products...</p>;
    }

    if (status === 'error') {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {data.map((product) => {
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default ProductList;