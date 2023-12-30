console.log("welcomme to spotify")

//initializinf the variables

let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar')
let gif= document.getElementById('gif')
let masterSongName= document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName: "falak-se-chand", filePath:"songs/1.mp3", coverPath:"covers/tere waste falak se(cover).jpg"},
    {songName:"ik tu he hai", filePath:"songs/2.mp3", coverPath:"covers/ak tu hai(cover).jpg"},
    {songName:"meri banogi kya", filePath:"songs/3.mp3", coverPath:"covers/meri banogi kya(cover).jpg"},
    {songName:"music1", filePath:"songs/4.mp3", coverPath:"covers/music1.jpg"},
    {songName: "night changes", filePath:"songs/5.mp3", coverPath:"covers/night changes(cover).jpg"},
    {songName: "obsessed", filePath:"songs/6.mp3", coverPath:"covers/obsessed(cover).jpg"},
    {songName: "perfect", filePath:"songs/7.mp3", coverPath:"covers/perfect(cover).jpg"},
    {songName: "radhe radhe", filePath:"songs/8.mp3", coverPath:"covers/radhe radhe(cover).jpg"},
    {songName: "unstoppable", filePath:"songs/9.mp3", coverPath:"covers/unstoppable(cover).jpg"},
    {songName: "random", filePath:"songs/.mp3", coverPath:"covers/music1.jpg"},

]

//for setting the coverpage and song name
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});

//audioElement.play();

// // handle master play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        console.log('play')
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
        console.log('pause')
        gif.style.opacity= 0;
    }
})
//listen to Events

//update seekbar
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
}
)

//change in seekbar
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
// document.getElementById('next').addEventListener('click', ()=>{
// if(songIndex>=9){
//     songIndex = 0;
// }
// else{
//     songIndex += 1;
// }
// audioElement.scr= `songs/${songIndex+1}.mp3`;
// masterSongName.innerText= songs[songIndex].songName;
// audioElement.currentTime=0;
// audioElement.play();
// masterPlay.classList.remove('fa-play-circle');
// masterPlay.classList.add('fa-pause-circle');   
// })
// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0;
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.scr= `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText= songs[songIndex].songName;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');   
//     })

