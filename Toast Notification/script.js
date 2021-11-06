
let btn = document.getElementById('btn');
let container = document.getElementById('container');

btn.addEventListener('click',()=>{
    createNotification();
});

function createNotification(){
    let notif = document.createElement('div');
    notif.innerText = "This is Toast Notification";
    notif.classList.add('toast');
    container.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);
}