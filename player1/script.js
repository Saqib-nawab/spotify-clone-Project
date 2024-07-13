//audio
let audioElement= new Audio('songs/1.mp3');

//declaring variables
let masterPlay=document.getElementById('masterPlay');
let gif=document.getElementById('gifImage');
let ProgressBar=document.getElementById('MyProgressBar');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songItemPlay=Array.from(document.getElementsByClassName('fa-solid fa-2x fa-circle-play songItemPlay'));
let masterSongName=document.getElementById('masterSongName');
let next= document.getElementById('next');
let previous= document.getElementById('previous');

//loading songnames,filepaths and vocerimages
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]


//changing songItem src(images) and song names
songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerHTML= songs[i].songName;
});

// play and pause audio
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gifImage.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gifImage.style.opacity=0;
    }
});

//updating progress bar with time
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    ProgressBar.value=progress;
})

// changing audio time with changing progress bar
ProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= ProgressBar.value* audioElement.duration/100;
})

const makeAllPlay=()=>{
    songItemPlay.forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    });
}

songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        let songindex= parseInt(e.target.id)
        console.log(songindex);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songindex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterSongName.innerText= songs[songindex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

next.addEventListener('click', (e)=>{
    let songIndex=parseInt(e.target.id);
    
    if(songIndex >=10){
        songIndex+=1;
    }
    else{
        songIndex=0;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText= songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

previous.addEventListener('click', (e)=>{
    let songIndex=parseInt(e.target.id);
    
    if(songIndex >0){
        songIndex -=1;
    }
    else{
        songIndex=10;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText= songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

