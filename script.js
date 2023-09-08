const hamburger = document.querySelector('#open-btn');
const closebtn = document.querySelector('#close-btn');

const navBar = document.querySelector('.navbar-nav');

const navbarToogle = () => navBar.classList.toggle('active');

hamburger.addEventListener('click', navbarToogle);
closebtn.addEventListener('click', navbarToogle);