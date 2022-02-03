function play_Pause_Vide(event,video){
    if(event.currentTarget.classList.contains('play')){
        event.currentTarget.classList.remove('play');
        event.currentTarget.classList.add('pause');
        event.currentTarget.innerHTML='Pause';
        video.play();
    }else{
        event.currentTarget.classList.remove('pause');
        event.currentTarget.classList.add('play');
        event.currentTarget.innerHTML='Play';
        video.pause();
    }
}

function ready(){
    let video=document.querySelector('#video');
    let btn=document.querySelector('button');
    btn.addEventListener('click',(event)=>{play_Pause_Vide(event,video)})
}

document.addEventListener('DOMContentLoaded',ready)