import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dateParser } from '../../utils/utils';
import Footer from './Footer';

const Post = () => {
    const [post, setPost] = useState({});
    let date = new Date(post.post_creationdate);
    const user_id = useSelector(state => state.userReducer.user.userId);
    const isAdmin = useSelector(state => state.userReducer.user.isAdmin);

    useEffect(() => {

        let authToken = localStorage.getItem('token');
        authToken = authToken.replace(/"/g, "");
        const post_id = document.location.pathname.split("/").slice(-1).toString();

        fetch(`${process.env.REACT_APP_API_URL}api/post/${post_id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Bearer ' + authToken }
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setPost(res);
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <article className="post" >
            <header className="post__header">
                <h2 className="post__title">{post.post_title}</h2>
                <div className="post__meta">
                    <p className="post__meta_postdate">{dateParser(date)}</p>
                </div>
            </header>
            <article className="post__content">
                <img src={post.post_content} alt={post.post_content} />
            </article>
            {(user_id === post.user_id || isAdmin === 1) ? (<Footer post={post} />) : (null)}

        </article>
    );
};

export default Post;