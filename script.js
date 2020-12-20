$("document").ready(function () {
  //PART 1 - MUSIC INSTRUMENTS
  const audioElement1 = document.createElement("audio");
  const audioElement2 = document.createElement("audio");
  const audioElement3 = document.createElement("audio");
  const audioElement4 = document.createElement("audio");

  audioElement1.setAttribute(
    "src",
    "http://www.playinmusic.com/Samples/Dean Slap Best/BassAmbSlap 122 8c.mp3"
  );
  audioElement2.setAttribute(
    "src",
    "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Dx%20Piano%20Chord%20D5-4146-Free-Loops.com.mp3"
  );
  audioElement3.setAttribute(
    "src",
    "http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Hard%20Chicago%20House-4578-Free-Loops.com.mp3"
  );
  audioElement4.setAttribute(
    "src",
    "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Alto%20Sax%20in%20C4-5997-Free-Loops.com.mp3"
  );

  audioElement1.addEventListener(
    "ended",
    function () {
      this.play();
    },
    false
  );
  audioElement2.addEventListener(
    "ended",
    function () {
      this.play();
    },
    false
  );
  audioElement3.addEventListener(
    "ended",
    function () {
      this.play();
    },
    false
  );
  audioElement4.addEventListener(
    "ended",
    function () {
      this.play();
    },
    false
  );

  audioElement1.addEventListener("canplay", function () {
    $("#status1").text("Status: Ready to play").css("color", "green");
  });
  audioElement2.addEventListener("canplay", function () {
    $("#status2").text("Status: Ready to play").css("color", "green");
  });
  audioElement3.addEventListener("canplay", function () {
    $("#status3").text("Status: Ready to play").css("color", "green");
  });
  audioElement4.addEventListener("canplay", function () {
    $("#status4").text("Status: Ready to play").css("color", "green");
  });

  $("#play1").click(function () {
    audioElement1.play();
    $("#status1").text("Status: Playing");
  });
  $("#play11").click(function () {
    audioElement1.play();
    $("#status1").text("Status: Playing");
  });

  $("#play2").click(function () {
    audioElement2.play();
    $("#status2").text("Status: Playing");
  });
  $("#play22").click(function () {
    audioElement2.play();
    $("#status2").text("Status: Playing");
  });

  $("#play3").click(function () {
    audioElement3.play();
    $("#status3").text("Status: Playing");
  });
  $("#play33").click(function () {
    audioElement3.play();
    $("#status3").text("Status: Playing");
  });

  $("#play4").click(function () {
    audioElement4.play();
    $("#status4").text("Status: Playing");
  });
  $("#play44").click(function () {
    audioElement4.play();
    $("#status4").text("Status: Playing");
  });

  $("#pause1").click(function () {
    audioElement1.pause();
    $("#status1").text("Status: Paused");
  });
  $("#pause2").click(function () {
    audioElement2.pause();
    $("#status2").text("Status: Paused");
  });
  $("#pause3").click(function () {
    audioElement3.pause();
    $("#status3").text("Status: Paused");
  });
  $("#pause4").click(function () {
    audioElement4.pause();
    $("#status4").text("Status: Paused");
  });

  $(document).keydown(function (event) {
    if (event.which === 65) {
      audioElement1.play();
      $("#status1").text("Status: Playing");
    } else if (event.which === 83) {
      audioElement2.play();
      $("#status2").text("Status: Playing");
    } else if (event.which === 68) {
      audioElement3.play();
      $("#status3").text("Status: Playing");
    } else if (event.which === 70) {
      audioElement4.play();
      $("#status4").text("Status: Playing");
    } else if (event.which === 90) {
      audioElement1.pause();
      $("#status1").text("Status: Paused");
    } else if (event.which === 88) {
      audioElement2.pause();
      $("#status2").text("Status: Paused");
    } else if (event.which === 67) {
      audioElement3.pause();
      $("#status3").text("Status: Paused");
    } else if (event.which === 86) {
      audioElement4.pause();
      $("#status4").text("Status: Paused");
    }
  });

  //PART 2 - MUSIC LIST

  const music = () => {
    // Playlist array
    var files = [
      {
        name: "Losing my Religion",
        source: "./audio/Losing My Religion.mp3"
      },
    
        
        {
            name: "I don't Care",
            source: "./audio/I don't Care.mp3"
        },
        
        {
            name: "Shape of You",
            source: "./audio/Shape of You.mp3"
            
            
        },
      //add more musics here
    ];

    let i = 0;

    const music_player = document.querySelector("#music_list audio");
    
    const sel = document.getElementById('#music-seletec-id');
    console.log(sel)

    function next() {
      if (i === files.length - 1) {
        i = 0;
      } else {
        i++;
      }
      music_player.src = files[i].source;
    }

    if (music_player === null) {
      throw "Playlist Player does not exists ...";
    } else {
      music_player.src = files[i].source;
      music_player.addEventListener("ended", next, false);
    }
  };

  music();
});
