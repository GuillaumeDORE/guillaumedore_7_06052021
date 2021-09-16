import React, { useState } from 'react';
import SignInForm from './SignInForm';
import userIcon from '../../img/icons/user.svg';
import nameIcon from '../../img/icons/name.svg';
import emailIcon from '../../img/icons/email.svg';
import passwordIcon from '../../img/icons/password.svg';

const SignUpForm = () => {
    const [formsumbit, setFormSubmit] = useState(false);
    const [pseudo, setPseudo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlPassword, setcontrolPassword] = useState('');
    const [message, setMessage] = useState('');

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
                    if (res.body.status === 201) {
                        console.log(res.body.error);
                        setFormSubmit(true);
                    } else {
                        return setMessage(res.statusText);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    e.preventDefault();
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
                        <img src={userIcon} alt="icon utilisateur" />
                        <input name="pseudo" type="text" placeholder="User45" required onChange={(e) => setPseudo(e.target.value)} value={pseudo} />
                    </div>

                    <label htmlFor="first_name">Prénom</label>
                    <div className="login__input_groupe">
                        <img src={nameIcon} alt="icon d'une personne" />
                        <input name="first_name" type="text" placeholder="Pierre" required onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                    </div>

                    <label htmlFor="last_name">Nom</label>
                    <div className="login__input_groupe">
                        <img src={nameIcon} alt="icon d'une personne" />
                        <input name="last_name" type="text" placeholder="Dupont" required onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    </div>

                    <label htmlFor="email">Email</label>
                    <div className="login__input_groupe">
                        <img src={emailIcon} alt="icon email" />
                        <input name="email" type="email" placeholder="votre-email@email.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>

                    <label htmlFor="user_password">Mot de passe</label>
                    <div className="login__input_groupe">
                        <img src={passwordIcon} alt="icon mot de passe" />
                        <input name="user_password" type="password" placeholder="********" required onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>

                    <label htmlFor="confirm_password">Confirmer mot de passe</label>
                    <div className="login__input_groupe">
                        <img src={passwordIcon} alt="icon mot de passe" />
                        <input name="confirm_password" type="password" placeholder="********" required onChange={(e) => setcontrolPassword(e.target.value)} value={controlPassword} />
                        <div className="password-confirm error"></div>
                    </div>

                    <button className="button" id="signup" type="submit">Créer un compte</button>
                    {message && (
                        <div>{message}</div>
                    )}
                </form>
            )}
        </>
    );
};

export default SignUpForm;