import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user.actions";
import emailIcon from '../../img/icons/email.svg';
import passwordIcon from '../../img/icons/password.svg';


const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userConnected, setUserConnected] = useState(false);
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.userReducer);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }
    useEffect(() => {
        if (isLoggedIn) {
            setUserConnected(true);
        } else {
            setUserConnected(false);
        }
    }, [isLoggedIn])

    return (
        <>
            {userConnected ? (
                <Redirect to="/" />
            ) : (
                <form action="" onSubmit={handleLogin} className="login__form">
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

                    <button className="button" id="signup" type="submit">Connexion</button>
                </form>
            )
            }
        </>
    );
};

export default SignInForm;