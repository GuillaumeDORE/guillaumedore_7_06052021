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
        // Fonction de vérification d'un champ du fomulaire avec un regex
        const isValidInput = function (inputField, inputValue, regex, invalidMessage) {
            const small = inputField.nextElementSibling;

            if (regex.test(inputValue)) {
                small.innerHTML = 'Valide';
                small.classList.remove('text-danger');
                small.classList.add('text-success');
                inputField.style.borderColor = 'green';
                return true;
            } else if (!regex.test(inputValue)) {
                small.innerHTML = invalidMessage;
                small.classList.remove('text-success');
                small.classList.add('text-danger');
                inputField.style.borderColor = 'red';
                return false;
            }
        };

        // Création de l'input , du regex et du message d'erreur pour chaque champs du formulaire
        const pseudoRegExp = new RegExp("^([A-Za-z]+)[' -]?([A-Za-z]+)$", "g");
        const pseudoImput = document.getElementById('pseudo');
        const pseudoInvalidMessage = 'Invalide, ne peut contenir que des lettres ( seul un tiret, espace ou apostrophe autorisé)';

        const firstNameRegExp = new RegExp("^([A-Za-z]+)[' -]?([A-Za-z]+)$", "g");
        const firstNameImput = document.getElementById('prenom');
        const firstNameInvalidMessage = 'Invalide, ne peut contenir que des lettres ( seul un tiret, espace ou apostrophe autorisé)';

        const lastNameRegExp = new RegExp("^([A-Za-z]+)[' -]?([A-Za-z]+)$", "g");
        const lastNameImput = document.getElementById('nom');
        const lastNameInvalidMessage = 'Invalide, ne peut contenir que des lettres ( seul un tiret, espace ou apostrophe autorisé)';

        const emailRegExp = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$", "i");//eslint-disable-line
        const emailImput = document.getElementById('email');
        const emailInvalidMessage = 'Invalide, doit correspondre à une adresse email valide';

        const passwordRegExp = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", "g");
        const passwordImput = document.getElementById('password');
        const passwordInvalidMessage = "Minimum de 8 caratères, une majuscule, un chiffre, et un caractère spécial";

        let isValidPseudo = isValidInput(pseudoImput, pseudo, pseudoRegExp, pseudoInvalidMessage);
        let isValidFirstName = isValidInput(firstNameImput, firstName, firstNameRegExp, firstNameInvalidMessage);
        let isValidLastName = isValidInput(lastNameImput, lastName, lastNameRegExp, lastNameInvalidMessage);
        let isValidEmail = isValidInput(emailImput, email, emailRegExp, emailInvalidMessage);
        let isValidpassword = isValidInput(passwordImput, password, passwordRegExp, passwordInvalidMessage);

        if (isValidPseudo && isValidFirstName && isValidLastName && isValidEmail && isValidpassword) {
            const passwordConfirm = document.getElementById('passwordConfirm');
            if (password !== controlPassword) {
                passwordConfirm.nextElementSibling.innerHTML = "Les mots de passe ne correspondent pas";
                passwordConfirm.nextElementSibling.classList.remove('text-success');
                passwordConfirm.nextElementSibling.classList.add('text-danger');
                passwordConfirm.style.borderColor = 'red';

            }
            else {
                fetch(`${process.env.REACT_APP_API_URL}api/auth/signup`, {
                    method: 'POST',
                    body: JSON.stringify({ contact: { pseudo, first_name: firstName, last_name: lastName, email, user_password: password } }),
                    headers: { 'Content-Type': 'application/json; charset=utf-8' }
                })
                    .then((res) => {
                        if (res.status === 201) {
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
                        <input name="pseudo" id="pseudo" type="text" placeholder="User45" required onChange={(e) => setPseudo(e.target.value)} value={pseudo} />
                        <small></small>
                    </div>

                    <label htmlFor="first_name">Prénom</label>
                    <div className="login__input_groupe">
                        <img src={nameIcon} alt="icon d'une personne" />
                        <input name="first_name" id="prenom" type="text" placeholder="Pierre" required onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                        <small></small>
                    </div>

                    <label htmlFor="last_name">Nom</label>
                    <div className="login__input_groupe">
                        <img src={nameIcon} alt="icon d'une personne" />
                        <input name="last_name" id="nom" type="text" placeholder="Dupont" required onChange={(e) => setLastName(e.target.value)} value={lastName} />
                        <small></small>
                    </div>

                    <label htmlFor="email">Email</label>
                    <div className="login__input_groupe">
                        <img src={emailIcon} alt="icon email" />
                        <input name="email" id="email" type="email" placeholder="votre-email@email.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
                        <small></small>
                    </div>

                    <label htmlFor="user_password">Mot de passe</label>
                    <div className="login__input_groupe">
                        <img src={passwordIcon} alt="icon mot de passe" />
                        <input name="user_password" id="password" type="password" placeholder="********" required onChange={(e) => setPassword(e.target.value)} value={password} />
                        <small></small>
                    </div>

                    <label htmlFor="confirm_password">Confirmer mot de passe</label>
                    <div className="login__input_groupe">
                        <img src={passwordIcon} alt="icon mot de passe" />
                        <input name="confirm_password" id="passwordConfirm" type="password" placeholder="********" required onChange={(e) => setcontrolPassword(e.target.value)} value={controlPassword} />
                        <small></small>
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