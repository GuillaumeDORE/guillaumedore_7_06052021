import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/post.actions';
import Post from './Post/Post';
import FormPost from './Post/FormPost';

const Thread = () => {
    const [loadPost, setLoadPost] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);
    const { isLoggedIn } = useSelector(state => state.userReducer);

    useEffect(() => {
        if (isLoggedIn) {
            if (loadPost) {
                dispatch(getPosts());
                setLoadPost(false)
            }
        }
    }, [loadPost, dispatch, isLoggedIn]);


    return (
        <>
            {isLoggedIn === false ? (
                <Redirect to="/profil" />
            ) : (
                <main className="main">
                    <FormPost />
                    {(!!posts[0]) && posts.map((post) => {
                        return <Post post={post} key={post.post_id} />
                    })
                    }
                </main>
            )}
        </>
    );
};

export default Thread;