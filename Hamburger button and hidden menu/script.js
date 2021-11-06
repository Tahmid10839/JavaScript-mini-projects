let btn = document.getElementById('btn');
let nav = document.getElementById('navbar');

btn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});
