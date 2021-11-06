
const sounds = [
    'applause',
    'boo',
    'gasp',
    'tada',
    'victory',
    'wrong'
]

sounds.forEach((sound)=>{
    const btn = document.createElement('button');

    btn.innerText = sound;
    btn.classList.add('btn');
    document.body.appendChild(btn);

    btn.addEventListener('click',()=>{
        stopSongs();
        document.getElementById(sound).play();
    })
})

function stopSongs(){
    sounds.forEach((sound)=>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}