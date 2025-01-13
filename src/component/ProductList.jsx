import React from "react";
import useProducts from "../hooks/useProducts";

const ProductList = () => {
    const { status, data, error } = useProducts();

    if (status === 'loading') {
        return <div>Loading Products...</div>;
    }

    if (status === 'error') {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {data.map((product) => {
                    
                })}
            </ul>
        </div>
    )
}