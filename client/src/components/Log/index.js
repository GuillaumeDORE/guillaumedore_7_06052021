import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Log = (props) => {
    const [signUpModal, setSignUpModal] = useState(props.signUp);
    const [signInModal, setSignInModal] = useState(props.signIn);

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInModal(true);
        }
    }

    return (
        <div className="login__container">
            <ul className="login__buttons">
                <li onClick={handleModals} id="register" className={signUpModal ? "button active-btn" : "button"} >S'inscrire</li>
                <li onClick={handleModals} id="login" className={signInModal ? "button active-btn" : "button"}  >Se connecter</li>
            </ul>
            {signUpModal && <SignUpForm />}
            {signInModal && <SignInForm />}
        </div>
    );
};

export default Log;