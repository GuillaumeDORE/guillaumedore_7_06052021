import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userConnected, setUserConnected] = useState(false);


    const handleLogin = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}api/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ login: { email, user_password: password } }),
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        })
            .then((res) => {
                if (res.body.error) {
                    console.log(res.body.error);
                    // TODO: GESTION ERREUR EN BACK + creation span erreur pour afficher le message d'erreur à l'utilisateur
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                localStorage.setItem('token', JSON.stringify(data.token));
                localStorage.setItem('userID', JSON.stringify(data.userId));
                localStorage.setItem('isAdmin', JSON.stringify(data.isAdmin));
                setUserConnected(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            {userConnected ? (
                <Redirect to="/" />
            ) : (
                <form action="" onSubmit={handleLogin} className="login__form">
                    <label htmlFor="email">Email</label>
                    <div className="login__input_groupe">
                        <img src="../img/icons/email.svg" alt="icon email" />
                        <input name="email" type="email" placeholder="votre-email@email.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>

                    <label htmlFor="user_password">Mot de passe</label>
                    <div className="login__input_groupe">
                        <img src="../img/icons/password.svg" alt="icon mot de passe" />
                        <input name="user_password" type="password" placeholder="********" required onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>

                    <button className="button" id="signup" type="submit">Connexion</button>
                </form>
            )
            }
        </>
    );
};

export default SignInForm;