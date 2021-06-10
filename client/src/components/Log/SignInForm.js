import React, { useState } from 'react';

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/auth/login', {
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
                    // window.location = "/";
                }
            })
            .then((data) => {
                console.log(data.token);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
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
    );
};

export default SignInForm;