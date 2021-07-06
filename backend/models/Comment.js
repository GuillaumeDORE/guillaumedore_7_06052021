const connection = require('../connection')

class Comment {
    static insert(post_id, user_id, content, callback) {
        connection.execute(`INSERT INTO Comments (post_id, user_id, comment_content, comment_creationdate) values (?, ?, ?, now());`,
            [post_id, user_id, content], callback)
    };

    static update(comment_content, comment_id, callback) {
        connection.execute(`UPDATE Comments
                            SET comment_content = ?, comment_updatedate = now()
                            WHERE comment_id = ?`, [comment_content, comment_id], callback)
    };

    static delete(comment_id, callback) {
        connection.execute(`DELETE FROM Comments WHERE comment_id = ?`, [comment_id], callback)
    };

    static getAll(post_id, callback) {
        connection.execute(`SELECT * FROM Comments 
                            WHERE post_id=?`, [post_id], callback)
    };

    static findOne(comment_id, callback) {
        connection.execute(`SELECT * FROM Comments WHERE comment_id = ?`, [comment_id], callback)
    };
}
module.exports = Comment;
