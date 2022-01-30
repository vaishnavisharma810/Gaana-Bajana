console.log("Welcome to Gaana Bajana");

let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('songnamechange')
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songname: "Let me Love You", filePath: "song/1.mp3", coverPath: "Images/cover1.jfif"},
    {songname: "Memories", filePath: "song/2.mp3", coverPath: "Images/cover2.jfif"},
    {songname: "Cheap Thrills", filePath: "song/3.mp3", coverPath: "Images/cover3.jfif"},
    {songname: "Taki Taki", filePath: "song/4.mp3", coverPath: "Images/cover4.jfif"},
    {songname: "Girls Like You", filePath: "song/1.mp3", coverPath: "Images/cover5.jfif"},
    {songname: "Titanic Theme Song", filePath: "song/2.mp3", coverPath: "Images/cover6.jfif"},
    {songname: "Believer", filePath: "song/3.mp3", coverPath: "Images/cover1.jfif"},
    {songname: "Pretty Girl", filePath: "song/4.mp3", coverPath: "Images/cover4.jfif"},
    {songname: "Make you Mine", filePath: "song/1.mp3", coverPath: "Images/cover1.jfif"},
    {songname: "Don't giveup", filePath: "song/2.mp3", coverPath: "Images/cover4.jfif"},
]

songItems.forEach((element, i)=>{
    //console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
})

// audioElement.play();

//Handle play/ pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('play');
        masterPlay.classList.add('pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('pause');
        masterPlay.classList.add('play');
        gif.style.opacity = 0;
    }
})

//Listen to event
audioElement.addEventListener('timeupdate', () =>{
    //update seek bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100; //myprogressbar was in percentage
 })


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
    songIndex = parseInt(e.target.id)
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    })
})

document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex <= 0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
})

document.getElementById('next').addEventListener('click', () =>{
    if(songIndex >=  9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
})