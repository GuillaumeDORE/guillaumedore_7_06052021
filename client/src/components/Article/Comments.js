import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import commentIcon from '../../img/icons/comment.svg';
import { useSelector } from 'react-redux';


const Comments = () => {
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState("");
    const [modalNewComment, setModalNewComment] = useState(false);
    const user_id = useSelector(state => state.userReducer.user.userId);


    useEffect(() => {
        let authToken = localStorage.getItem('token');
        authToken = authToken.replace(/"/g, "");
        const post_id = document.location.pathname.split("/").slice(-1).toString();

        fetch(`${process.env.REACT_APP_API_URL}api/comment/${post_id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Bearer ' + authToken }
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setComments(res);
            })
            .catch((err) => console.log(err));
    }, [])

    const handleModalNewComment = () => {
        setModalNewComment(!modalNewComment);
    };

    const handleCommentCreation = (e) => {
        e.preventDefault();
        let authToken = localStorage.getItem('token');
        authToken = authToken.replace(/"/g, "");
        if (newComment) {
            const post_Id = document.location.pathname.split("/").slice(-1).toString();
            const userId = user_id;
            const content = newComment;

            const comment = {
                comment: {
                    post_Id,
                    userId,
                    content
                }
            }
            fetch(`${process.env.REACT_APP_API_URL}api/comment/`, {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + authToken
                }
            })
                .then((res) => {
                    console.log(res);
                    setNewComment('');
                })
                .catch((err) => {
                    console.log(err);
                });

        } else {
            alert("Veuillez entrer un commentaire!")
        }
    }

    return (
        <section className="comments">
            <h2>Commentaires</h2>
            <button className="comment__button button" onClick={handleModalNewComment}>
                <img src={commentIcon} alt="icon de suppression" /> Ajouter un commentaire
            </button>
            {modalNewComment &&
                <form action="" onSubmit={handleCommentCreation} className="comment-form">
                    <div className="comment-form__input_groupe">
                        <input name="title" type="text" placeholder="Votre commentaire" required onChange={(e) => setNewComment(e.target.value)} value={newComment} />
                    </div>
                    <button className="button" type="submit">Créer un commentaire!</button>
                </form>
            }
            {(!!comments[0]) && comments.map((comment) => {
                return <Comment comment={comment} key={comment.comment_id} />
            })
            }
        </section>
    );
};

export default Comments;