import React, { useState } from 'react';
import deleteIcon from '../img/icons/delete.svg';
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../actions/user.actions";
import { Redirect } from 'react-router-dom';

const Profil = () => {
    const [modalDelete, setModalDelete] = useState(false);
    const { isLoggedIn } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    //DELETE
    const handleModalDelete = (e) => {
        setModalDelete(!modalDelete);
    };

    const handleUserDelete = (e) => {
        e.preventDefault();
        let authToken = localStorage.getItem('token');
        authToken = authToken.replace(/"/g, "");

        fetch(`${process.env.REACT_APP_API_URL}api/auth/delete`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        })
            .then(() => {
                dispatch(logoutAction());
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            {isLoggedIn ? (
                <main className="main_profil">

                    <button className="profil-button button" onClick={handleModalDelete}>
                        <img src={deleteIcon} alt="icon de suppression" /> Supprimer votre compte
                    </button>
                    {modalDelete &&
                        <div className="profil-button__modal">
                            <button className="button" onClick={handleUserDelete}>Supprimer</button>
                            <button className="button">Annuler</button>
                        </div>
                    }
                </main>
            ) : (
                <Redirect to="/login" />
            )}
        </>

    );
};

export default Profil;