import React, { useState } from 'react';
import deleteIcon from '../../img/icons/delete.svg';
import updateIcon from '../../img/icons/update.svg';

const CommentFooter = (props) => {
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [newComment, setNewComment] = useState('');

    // UPDATE 
    const handleCommentUpdate = (e) => {
        e.preventDefault();
        let authToken = localStorage.getItem('token');
        authToken = authToken.replace(/"/g, "");
        const comment_id = props.comment.comment_id;

        if (newComment) {
            const content = newComment;

            const comment = {
                comment: {
                    content,
                    comment_id
                }
            }
            fetch(`${process.env.REACT_APP_API_URL}api/comment/${comment_id}`, {
                method: 'PUT',
                body: JSON.stringify(comment),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + authToken
                }
            })
                .then((res) => {
                    setNewComment('');
                    setModalUpdate(false);
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                });


        } else {
            alert("Veuillez entrer un nouveau commentaire!")
        }
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

        fetch(`${process.env.REACT_APP_API_URL}api/comment/${props.comment.comment_id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        })
            .then(() => {
                setModalUpdate(false);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <footer className="post__footer">
            <button className=" post__button button" onClick={handleModal}>
                <img src={updateIcon} alt="icon de modification" />
            </button>
            {modalUpdate &&
                <form action="" onSubmit={handleCommentUpdate} className="post-update">
                    <div className="post-update__input_groupe">
                        <input name="title" type="text" placeholder="Votre commentaire" required onChange={(e) => setNewComment(e.target.value)} value={newComment} />
                    </div>

                    <button className="button" type="submit">Modifier votre commentaire</button>
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
    );
};

export default CommentFooter;