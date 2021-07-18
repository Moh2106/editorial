let menu = document.getElementById('menu')
let sidebar = document.querySelector('.sidebar')
let homepage = document.getElementById('homepage')
let header = document.querySelector('.header')

menu.addEventListener('click', show);

function show(){
    sidebar.classList.toggle('sidebarMove');
    menu.classList.toggle('menuMove')
    homepage.classList.toggle('homepageMove')
    header.classList.toggle('headerMove')
}

