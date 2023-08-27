const btnLogin = document.querySelector('.btn-login');
const iconClose = document.querySelector('.icon-close');
const header = document.querySelector('header');
// const navigationIcon = document.querySelector('.navigation-icon');
const burgerIcon = document.querySelector('burger-icon');
const navigationIconMenu = document.querySelector('.navigation-icon-menu');



const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.registr-link');
const registrLink = document.querySelector('.login-link');
const recoverylink = document.querySelector('.recovery-link');
const recoverylogin = document.querySelector('.recovery-login');



// Вкл/Викл форми авторизації:
btnLogin.addEventListener('click', ()=> {
wrapper.classList.add('activebtn');});
btnLogin.addEventListener('click', ()=> {
header.classList.add('active-navigation');});


iconClose.addEventListener('click', ()=> {
wrapper.classList.remove('activebtn'),
wrapper.classList.remove('active'),
wrapper.classList.remove('activeRecovery'),
header.classList.remove('active-navigation')
});

// Перехід між формами авторизація/реєстрація:
loginLink.addEventListener('click', ()=> {
wrapper.classList.toggle('active');
});
registrLink.addEventListener('click', ()=> {
wrapper.classList.toggle('active');
});

// Перехід між формами авторизація/відновлення:
recoverylink.addEventListener('click', ()=> {
wrapper.classList.toggle('activeRecovery');});
recoverylogin.addEventListener('click', ()=> {
wrapper.classList.toggle('activeRecovery');});    

    
// Запуск меню навігації в мобільнії версії:
burgerIcon.addEventListener('click', ()=> {
burgerIcon.classList.toggle('active'),
navigationIconMenu.classList.toggle('active');
});



