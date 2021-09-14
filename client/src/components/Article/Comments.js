import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const Comments = () => {
    const [comments, setComments] = useState({});

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

    return (
        <section className="comments">
            <h2>Commentaires</h2>
            {(!!comments[0]) && comments.map((comment) => {
                return <Comment comment={comment} key={comment.comment_id} />
            })
            }
        </section>
    );
};

export default Comments;