import React from 'react';
import Log from '../components/Log';

const Login = () => {
    return (
        <main className="login">
            <Log signIn={true} signUp={false} />
        </main>
    );
};

export default Login;