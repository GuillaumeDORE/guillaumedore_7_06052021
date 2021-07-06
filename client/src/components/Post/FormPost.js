import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/post.actions';


const FormPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const userId = localStorage.getItem('userID');
    const dispatch = useDispatch();

    const handlePostCreation = (e) => {
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

            fetch(`${process.env.REACT_APP_API_URL}api/post/`, {
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': 'Bearer ' + authToken
                }
            })
                .then((res) => {
                    dispatch(getPosts());
                    setTitle('');
                    setContent('');
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

    return (
        <form action="" onSubmit={handlePostCreation} className="post-form">

            <div className="post-form__input_groupe">
                <input name="title" type="text" placeholder="Votre titre" required onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>

            <div className="post-form__input_groupe">
                <input name="content" type="file" accept=".jpg, .jpeg, .png" placeholder="Votre contenu" required onChange={(e) => handlePicture(e)} />
            </div>

            <button className="button" type="submit">Créer un post!</button>
        </form>
    );
};

export default FormPost;