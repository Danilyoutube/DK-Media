const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBlock = document.querySelector('.form-block');
const body = document.body;

signUpBtn.addEventListener('click', function(){
    formBlock.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click', function(){
    formBlock.classList.remove('active');
    body.classList.remove('active');
});