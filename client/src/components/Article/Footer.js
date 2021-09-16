import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import deleteIcon from '../../img/icons/delete.svg';
import updateIcon from '../../img/icons/update.svg';

const Footer = (props) => {
    const [modalUpdate, setModalUpdate] = useState(false);
    const [update, setUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const userId = localStorage.getItem('userID');

    // UPDATE 
    const handlePostUpdate = (e) => {

        e.preventDefault();
        let authToken = localStorage.getItem('token');
        authToken = authToken.replace(/"/g, "");

        if (title && content) {
            const post = {
                title,
                userId
            }
            const data = new FormData();
            data.append('post', JSON.stringify(post));
            data.append('content', content);

            fetch(`${process.env.REACT_APP_API_URL}api/post/${props.post.post_id}`, {
                method: 'PUT',
                body: data,
                headers: {
                    'Authorization': 'Bearer ' + authToken
                }
            })
                .then((res) => {
                    setTitle('');
                    setContent('');
                    setModalUpdate(false);
                    setUpdate(true);
                })
                .catch((err) => {
                    console.log(err);
                });


        } else {
            alert("Veuillez entrer un titre un titre et choisir un image!")
        }

    };

    const handlePicture = (e) => {
        setContent(e.target.files[0]);
    };

    const handleModal = (e) => {
        setModalUpdate(!modalUpdate);
    };

    //DELETE
    const handleModalDelete = (e) => {
        setModalDelete(!modalDelete);
    };

    const handlePostDelete = (e) => {

        e.preventDefault();
        let authToken = localStorage.getItem('token');
        authToken = authToken.replace(/"/g, "");

        fetch(`${process.env.REACT_APP_API_URL}api/post/${props.post.post_id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        })
            .then(() => {
                setModalUpdate(false);
                setUpdate(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <> {update ? (<Redirect to="/" />) :
            (
                <footer className="post__footer">
                    <button className=" post__button button" onClick={handleModal}>
                        <img src={updateIcon} alt="icon de modification" />
                    </button>
                    {modalUpdate &&
                        <form action="" onSubmit={handlePostUpdate} className="post-update">

                            <div className="post-update__input_groupe">
                                <input name="title" type="text" placeholder="Votre titre" required onChange={(e) => setTitle(e.target.value)} value={title} />
                            </div>

                            <div className="post-update__input_groupe">
                                <input name="content" type="file" accept=".jpg, .jpeg, .png" placeholder="Votre contenu" required onChange={(e) => handlePicture(e)} />
                            </div>

                            <button className="button" type="submit">Modifier votre post!</button>
                        </form>
                    }
                    <button className="post__button button" onClick={handleModalDelete}>
                        <img src={deleteIcon} alt="icon de suppression" />
                    </button>
                    {modalDelete &&
                        <>
                            <button className="button" onClick={handlePostDelete}>Supprimer</button>
                            <button className="button">Annuler</button>
                        </>
                    }
                </footer>
            )}
        </>
    );
};

export default Footer;