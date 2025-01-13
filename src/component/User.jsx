import React from "react";
import useUser from "../hooks/useUser";

const User = ({ userId }) => {
    const { data, status, error } = useUser(userId);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'error') {
        return <p>Error : {error.message}</p>;
    }

    if (status === 'success') {
        return (
            <div>
                <h2>{data.name}</h2>
                <p>Email: {data.email}</p>
                <p>Username: {data.username}</p>
            </div>
        );
    }
    return null;
};

export default User;