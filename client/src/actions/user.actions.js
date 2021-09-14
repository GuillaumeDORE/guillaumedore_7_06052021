
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const login = (email, password) => (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}api/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ login: { email, user_password: password } }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
        .then((res) => {
            if (res.body.error) {
                console.log(res.body.error);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('userID', JSON.stringify(data.userId));
            localStorage.setItem('isAdmin', JSON.stringify(data.isAdmin));
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
            return Promise.resolve();
        },
            (err) => {
                console.log(err);
                dispatch({
                    type: LOGIN_FAIL,
                })
            }
        )

};

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    localStorage.removeItem('isAdmin');
    dispatch({
        type: LOGOUT,
    });
};
