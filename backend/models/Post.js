const connection = require('../connection')

class Post {
    static insert(user_id, post_title, post_content, callback){
        connection.execute(`INSERT INTO Posts (user_id, post_title, post_content, post_creationdate) values (?, ?, ?, now());`,
        [user_id, post_title, post_content], callback)
    };

    static update( post_title, post_content, post_id, callback){
        connection.execute(`UPDATE Posts
                            SET post_title = ?, post_content = ?, post_updatedate = now()
                            WHERE post_id = ?`,[post_title, post_content, post_id], callback)
    };

    static delete(post_id,callback){
        connection.execute(`DELETE FROM Posts WHERE post_id = ?`,[post_id], callback)
    };

    static getAll(callback){
        connection.execute(`SELECT * FROM Posts`, callback)
    };

    static findOne(post_id,callback){
        connection.execute(`SELECT * FROM Posts WHERE post_id = ?`,[post_id], callback)
    };
}
module.exports = Post;
