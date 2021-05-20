const connection = require('../connection')

class Comment {
    static insert(post_id, user_id, comment_content, callback){
        connection.execute(`INSERT INTO Comments (user_id, post_id, comment_content, comment_creationdate) values (?, ?, ?, now());`,
        [post_id, user_id, comment_content], callback)
    };

    static update(comment_content, comment_id, callback){
        connection.execute(`UPDATE Comments
                            SET comment_content = ?, post_updatedate = now()
                            WHERE comment_id = ?`,[comment_content, comment_id], callback)
    };

    static delete(comment_id,callback){
        connection.execute(`DELETE FROM Comments WHERE comment_id = ?`,[comment_id], callback)
    };

    static getAll(callback){
        connection.execute(`SELECT * FROM Comments`, callback)
    };

    static findOne(comment_id,callback){
        connection.execute(`SELECT * FROM Comments WHERE comment_id = ?`,[comment_id], callback)
    };
}
module.exports = Comment;
