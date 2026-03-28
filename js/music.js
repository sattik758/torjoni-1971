const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

let playing = sessionStorage.getItem("musicPlaying") === "true";
let time = sessionStorage.getItem("musicTime");

if(music){

  if(time){
    music.currentTime = time;
  }

  if(playing){
    music.volume = 0.6;

    music.play().catch(()=>{});

  }

}

if(musicBtn && music){

musicBtn.addEventListener("click",function(){

  if(!playing){

    music.volume = 0.6;
    music.play();

    musicBtn.innerText = "🔇 Stop Music";

    playing = true;
    sessionStorage.setItem("musicPlaying","true");

  }

  else{

    music.pause();

    musicBtn.innerText = "🎵 Music";

    playing = false;
    sessionStorage.setItem("musicPlaying","false");

  }

});

}

window.addEventListener("beforeunload",function(){

  if(music){
    sessionStorage.setItem("musicTime",music.currentTime);
  }

});