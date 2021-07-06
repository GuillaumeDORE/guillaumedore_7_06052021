import React from 'react';
import { NavLink } from 'react-router-dom';
import { dateParser } from '../../utils/utils';


const Post = ({ post }) => {
    let date = new Date(post.post_creationdate);

    return (
        <NavLink to={`/article/${post.post_id}`} className="post" key={post.post_id} >
            <header className="post__header">
                <h2 className="post__title">{post.post_title}</h2>
                <div className="post__meta">
                    {/* <p className="post__meta_category">Categorie du post</p> */}
                    <p className="post__meta_postdate">Posté le: {dateParser(date)}</p>
                </div>
            </header>
            <article className="post__content">
                <img src={post.post_content} alt={post.post_content} />
            </article>
            <footer className="post__footer">
                <p className="post__user_creator">Créé par: {post.user_id}</p>
                <div className="post__comment">
                    <p className="post__comment_number">{/* 00 */} <img src="./img/icons/comment.svg" alt="icon commentaires" /></p>
                    <button className="post__comment_btn button">Commenter</button>
                </div>
            </footer>
        </NavLink>
    );
};

export default Post;