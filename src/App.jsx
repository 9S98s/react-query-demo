import React from "react";
import User from "./component/User";

const App = () => {
    return (
        <div>
            <h1>User Informations</h1>
            <User userId={1} />
        </div>
    );
};

export default App;