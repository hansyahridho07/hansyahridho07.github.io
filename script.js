function linkDownload(params) {
        let listAnime = [
        [1, 'https://drive.google.com/file/d/1nElJR1CadpAMJJLOW6krWYTMzR0ahfhm/view', 'SNK S4 Eps 1'],
        [2, 'https://www20.zippyshare.com/v/E8vx4YDV/file.html', 'Nobeless Eps 7'],
        [3, 'https://drive.google.com/uc?export=download&id=1uPGQIYxlwX_ZOwhVHP2WeacgSnX9fzmJ', 'MIA Movie 3']
    ]
    for(let i = 0; i < listAnime.length; i++){
        if(params === listAnime[i][0]){
            let link = document.getElementById("download")
            link.setAttribute("href", listAnime[i][1])
            link.innerText = listAnime[i][2]
        }
    }
}

let playPause = document.getElementById("playPause")
let count = 0

function pausePlay() {
    if(count === 0){
        count = 1
        audio.play();
        playPause.innerHTML = "Pause &#10074;&#10074;"
    }else{
        count = 0
        audio.pause();
        playPause.innerHTML = "Play &#9658;"
    }
}

function stop() {
    pausePlay()
    audio.pause()
    audio.currentTime = 0
    playPause.innerHTML = "Play &#9658;"
}

function gantiNama(){
    let nama = document.getElementById("username1").value;
    let user = document.getElementById("email1").value;
    localStorage.setItem("textvalue", nama);
    localStorage.setItem("textvalue2", user);
    return false
}

document.getElementById("result1").innerText = localStorage.getItem("textvalue")
document.getElementById("result2").innerHTML = localStorage.getItem("textvalue2")
