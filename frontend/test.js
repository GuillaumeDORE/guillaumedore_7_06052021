const sendForm = function () {
    let formContact = {
            pseudo: 'Pierrepaul',
            last_name: 'pierre',
            first_name: 'paul',
            email: 'test@test.com',
            user_password: 'TEst*1234'
        };
        fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({ contact: formContact}),
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        })
        .then((response) => response.json())
        .catch (function(error){
            console.log(error);
        })
};


const confirmer = document.getElementById('confirmer');
confirmer.addEventListener('click', function (e) {
    e.preventDefault();
    sendForm();
});

const loginForm = function () {
    let formLogin = {
            email: 'test@test.com',
            user_password: 'TEst*1234'
        };
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ login: formLogin}),
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        })
        .then((response) => response.json())
        .catch (function(error){
            console.log(error);
        })
};
const login = document.getElementById('login');
login.addEventListener('click', function (e) {
    e.preventDefault();
    loginForm();
})