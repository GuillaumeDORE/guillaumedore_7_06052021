import React, { useState } from 'react';
import SignInForm from './SignInForm';

const SignUpForm = () => {
    const [formsumbit, setFormSubmit] = useState(false);
    const [pseudo, setPseudo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlPassword, setcontrolPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        // TO DO creer const des erreur pour les intégrer dans des span pour afficher les message d'erreurs
        const passwordConfirmError = document.querySelector('.password-confirm.error');

        if (password !== controlPassword) passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";
        else {
            fetch(`${process.env.REACT_APP_API_URL}api/auth/signup`, {
                method: 'POST',
                body: JSON.stringify({ contact: { pseudo, first_name: firstName, last_name: lastName, email, user_password: password } }),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            })
                .then((res) => {
                    if (res.body.error) {
                        console.log(res.body.error);
                        // TODO: GESTION ERREUR EN BACK + creation span erreur pour afficher le message d'erreur
                    } else {
                        setFormSubmit(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }



    return (
        <>
            {formsumbit ? (
                <>
                    <SignInForm />
                    <h4 className="success">Enregistrement réussi, veuillez-vous connecter.</h4>
                </>
            ) : (

                <form action="" onSubmit={handleRegister} className="login__form">

                    <label htmlFor="pseudo">Nom d'utilisateur</label>
                    <div className="login__input_groupe">
                        <img src="../img/icons/user.svg" alt="icon utilisateur" />
                        <input name="pseudo" type="text" placeholder="User45" required onChange={(e) => setPseudo(e.target.value)} value={pseudo} />
                    </div>

                    <label htmlFor="first_name">Prénom</label>
                    <div className="login__input_groupe">
                        <img src="../img/icons/name.svg" alt="icon d'une personne" />
                        <input name="first_name" type="text" placeholder="Pierre" required onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                    </div>

                    <label htmlFor="last_name">Nom</label>
                    <div className="login__input_groupe">
                        <img src="../img/icons/name.svg" alt="icon d'une personne" />
                        <input name="last_name" type="text" placeholder="Dupont" required onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    </div>

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

                    <label htmlFor="confirm_password">Confirmer mot de passe</label>
                    <div className="login__input_groupe">
                        <img src="../img/icons/password.svg" alt="icon mot de passe" />
                        <input name="confirm_password" type="password" placeholder="********" required onChange={(e) => setcontrolPassword(e.target.value)} value={controlPassword} />
                        <div className="password-confirm error"></div>
                    </div>

                    <button className="button" id="signup" type="submit">Créer un compte</button>
                </form>
            )}
        </>
    );
};

export default SignUpForm;