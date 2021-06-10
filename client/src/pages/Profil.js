import React from 'react';
import Header from '../components/Header/Header';
import Log from '../components/Log';

const Profil = () => {
    return (
        <>
            <Header />

            <main className="login">
                <Log signIn={true} signUp={false} />
            </main>
        </>
    );
};

export default Profil;