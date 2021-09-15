const register = document.getElementById('register-btn');
const login = document.getElementById('login-btn');

register.addEventListener('click',(e)=>{
    e.preventDefault();
    const registerParams = {
        method:'post',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    }
    fetch('/register', registerParams)
    .then(result=>{
            return result.json();
    })
    .then(response=>{
        window.localStorage.setItem("userToken",response.user.token);
        //console.log(window.localStorage.getItem("userToken"));
    })
    .then(()=>window.location.reload())
    .catch(error => console.log(error));
});

// login.addEventListener('click',(e)=>{
//     e.preventDefault();
//     const loginParams = {
//         method:'post',
//         headers:{
//             'content-type':'application/json',
//             'Accept': 'application/json'
//         },
//         body:JSON.stringify({
//             email: document.getElementById('loginEmail').value,
//             password: document.getElementById('loginPassword').value
//         })
//     }
//     fetch('/login', loginParams)
//     .then(res=>{
//         //console.log(res.url);
//         window.location.replace(res.url);          
//     })
//     .catch(error => console.log(error));
// });