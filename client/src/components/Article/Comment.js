import React from 'react';
import { dateParser } from '../../utils/utils';
import CommentFooter from './CommentFooter';


const Comment = ({ comment }) => {
    let date = new Date(comment.comment_creationdate);

    return (
        <div className="comments__comment">
            <header className="comments__header">
                <p className="comments__comment-poster">User Id: {comment.user_id}</p>
                <p className="comments__comment-date">Posté le: {dateParser(date)}</p>
            </header>
            <p className="comments__comment-content">{comment.comment_content}</p>
            <CommentFooter comment={comment} />
        </div>

    );
};

export default Comment;