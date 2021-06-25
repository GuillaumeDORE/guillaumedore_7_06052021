
//Post
export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
    let authToken = localStorage.getItem('token');
    authToken = authToken.replace(/"/g, "");
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_URL}api/post/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Bearer ' + authToken }
        })
            .then((res) => {
                let data = res.json();
                return data;
            })
            .then((data) => {
                dispatch({ type: GET_POSTS, payload: data })
            })
            .catch((err) => console.log(err));
    }
}