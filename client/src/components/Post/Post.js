import React from 'react';

const Post = ({ post }) => {

    return (
        <section className="post" key={post.post_id} >
            <header className="post__header">
                <h2 className="post__title">{post.post_title}</h2>
                <div className="post__meta">
                    <p className="post__meta_category">Categorie du post</p>
                    <p className="post__meta_postdate">{post.post_creationdate}</p>
                </div>
            </header>
            <article className="post__content">
                <img src="./img/montagne.jpg" alt="montagne" />
            </article>
            <footer className="post__footer">
                <p className="post__user_creator">By: Nom du createur de ce post</p>
                <div className="post__comment">
                    <p className="post__comment_number">00 <img src="./img/icons/comment.svg" alt="icon commentaires" /></p>
                    <button className="post__comment_btn button">Commenter</button>
                </div>
            </footer>
        </section>
    );
};

export default Post;