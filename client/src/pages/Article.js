import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Post from '../components/Article/Post';
import Comments from '../components/Article/Comments';

const Article = () => {

    const { isLoggedIn } = useSelector(state => state.userReducer);

    return (
        <>
            {isLoggedIn === false ? (
                <Redirect to="/login" />
            ) : (
                <>
                    <Post />
                    <Comments />
                </>
            )}
        </>
    );
};

export default Article;