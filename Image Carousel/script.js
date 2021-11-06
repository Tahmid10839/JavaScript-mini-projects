
const imgs = document.getElementById('imgs');

const allimg = document.querySelectorAll('#imgs img');

let idx = 0;

function run(){
    idx++;

    if(idx > allimg.length-1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx*500}px)`;
}

setInterval(() => {
    run();
}, 2000);