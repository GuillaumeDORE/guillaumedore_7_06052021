import React from 'react';
import Log from '../components/Log';

const Profil = () => {
    return (
        <main className="login">
            <Log signIn={true} signUp={false} />
        </main>
    );
};

export default Profil;