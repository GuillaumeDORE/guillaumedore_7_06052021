import React from 'react';
import { useSelector } from 'react-redux';
import { dateParser } from '../../utils/utils';
import CommentFooter from './CommentFooter';


const Comment = ({ comment }) => {
    let date = new Date(comment.comment_creationdate);
    const user_id = useSelector(state => state.userReducer.user.userId);
    const isAdmin = useSelector(state => state.userReducer.user.isAdmin);

    return (
        <div className="comments__comment">
            <header className="comments__header">
                <p className="comments__comment-poster">User Id: {comment.user_id}</p>
                <p className="comments__comment-date">Posté le: {dateParser(date)}</p>
            </header>
            <p className="comments__comment-content">{comment.comment_content}</p>
            {(user_id === comment.user_id || isAdmin === 1) ? (<CommentFooter comment={comment} />) : (null)}
        </div>

    );
};

export default Comment;