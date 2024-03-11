// INITIALIZE VARIABLE

let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItemPlay=document.getElementsByClassName('songItemPlay');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Jamal Kudu" ,filePath:"songs/1.mp3",coverPath:"Image/1.jpg"},
    {songName:"Apa Fer Milaangey" ,filePath:"songs/2.mp3",coverPath:"Image/2.jpg"},
    {songName:"Dil Se Dil Tak" ,filePath:"songs/3.mp3",coverPath:"Image/3.jpg"},
    {songName:"Hunkara" ,filePath:"songs/4.mp3",coverPath:"Image/4.jpg"},
    {songName:"Kesariya" ,filePath:"songs/5.mp3",coverPath:"Image/5.jpg"},
    {songName:"Keti Ko" ,filePath:"songs/6.mp3",coverPath:"Image/6.jpg"},
    {songName:"Main Nikla Gaddi Leke" ,filePath:"songs/7.mp3",coverPath:"Image/7.jpg"},
    {songName:"Meri Banogi Kya" ,filePath:"songs/8.mp3",coverPath:"Image/8.jpg"},
    {songName:"Nain Ta Heere" ,filePath:"songs/9.mp3",coverPath:"Image/9.jpg"},
    {songName:"O Maahi" ,filePath:"songs/10.mp3",coverPath:"Image/10.jpg"},
    {songName:"Rangisari" ,filePath:"songs/11.mp3",coverPath:"Image/11.jpg"},
    {songName:"Saibo" ,filePath:"songs/12.mp3",coverPath:"Image/12.jpg"},
    {songName:"Saure Ghar" ,filePath:"songs/13.mp3",coverPath:"Image/13.jpg"},
    {songName:"Tere Hawaale" ,filePath:"songs/14.mp3",coverPath:"Image/14.jpg"},
    {songName:"Ve Haaniyan" ,filePath:"songs/15.mp3",coverPath:"Image/15.jpg"},
    
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


// HANDLE PLAY/PAUSE CLICK
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})


// LISTEN TO EVENT
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays(); 
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    })
})


// next prev button
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=14){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})