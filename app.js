// Game Screen - Let's Play Button//
$(".game-screen").hide();
// $(".menu-screen").hide();

let newTamagatchi;
$(".menu-settings.start").click(function(){
    userName = window.prompt("Please enter the name of your Tamagotchi:", "");

    if (userName != null) {
    newTamagatchi = new TamagatchiPet(userName);
    $(".nameDisplay").text(newTamagatchi.name);
    }

    $(".menu-screen").hide();
    $(".game-screen").show();
});

// Dark Mode - Button //

$("#dark-mode-button").click(function() {
      $( "#effect" ).toggleClass("dark")

    if ($('#effect').hasClass('dark')) {
        $("#dark-mode-button").text(`LIGHT MODE`)
    } else ($("#dark-mode-button").text(`DARK MODE`))
});



// Reset - Button //
$("#reset-game").click(function () { 
    location.reload();
});


// Tamagatchi //
class TamagatchiPet {
    constructor(name) {
        this.name = name;
        this.hunger = 105;
        this.sleepiness = 108;
        this.boredom = 103; 
        this.age = 1;
    }

    feedTamagatchi() {
        this.hunger += 10;
    }

    sleepTamagatchi() {
        this.sleepiness += 10;
    }

    playTamagatchi() {
        this.boredom += 10;
    }
}

// Timer + Start Game
const timer = $("#timer");
const start = $("#play-game");

$(start).click(function() {
    startTimer();
    updateAgeCount();
    playPet();
    sleepPet();
    feedPet();
});


let timerCount = 0;
let timerInterval;
let startTimer = function() {
    timerInterval = setInterval(() => {
    timerCount ++;
    timer.text(`Timer: ${timerCount} sec.`);
    gameOver();
    hungerEmotion();
    tiredEmotion();
    playEmotion();
    deadEmotion();
    // defaultEmotion();
    }, 1000);
};

let updatePetAge = 0;
let ageInterval;
let updateAgeCount = function() {
    ageInterval = setInterval(() => {
        updatePetAge = newTamagatchi.age ++;
        $("#age").text(`Age: ${updatePetAge}`);
    }, 5000);
};

// Pet Drain //
let hungerInterval;
let feedPet = function() {
    hungerInterval = setInterval(() => {
        newTamagatchi.hunger -= 5;
        $("#feed-progress-fill").css("width", newTamagatchi.hunger + "%");
        $("#feed-text").text(newTamagatchi.hunger);
    }, 2000);
};

$(".function-btn.feed").click(function(){
    newTamagatchi.feedTamagatchi();
});


let boredomInterval;
let playPet = function() {
    boredomInterval = setInterval(() => {
        newTamagatchi.boredom -= 3;
        $("#play-progress-fill").css("width", newTamagatchi.boredom + "%");
    $("#play-text").text(newTamagatchi.boredom);
    }, 2000);
};

$(".function-btn.play").click(function(){
    newTamagatchi.playTamagatchi();
});

let tiredInterval;
let sleepPet = function() {
    tiredInterval = setInterval(() => {
        newTamagatchi.sleepiness -= 8;
        $("#sleep-progress-fill").css("width", newTamagatchi.sleepiness + "%");
    $("#sleep-text").text(newTamagatchi.sleepiness);
    }, 2000);
};

$(".function-btn.sleep").click(function(){
    newTamagatchi.sleepTamagatchi();
});

const gameOver = function() {
    if(newTamagatchi.hunger <= 0 || newTamagatchi.sleepiness <= 0 || newTamagatchi.boredom <= 0) {
        alert(`Oh NO!!! ${newTamagatchi.name} has died at age ${updatePetAge}. Your Tamagotchi had lived for ${timerCount} seconds.`);
        clearInterval(timerInterval);
        clearInterval(ageInterval);
        clearInterval(boredomInterval);
        clearInterval(tiredInterval);
        clearInterval(hungerInterval);
    }
};

const hungerEmotion = function() {
    if(newTamagatchi.hunger < 80) {
        $("img.animated-gif").attr("src", "./resource/hungry.gif");
    }
};


const tiredEmotion = function() {
    if(newTamagatchi.sleepiness < 50) {
        $("img.animated-gif").attr("src", "./resource/tired.gif");
    }
};


const playEmotion = function() {
    if(newTamagatchi.boredom < 70) {
        $("img.animated-gif").attr("src", "./resource/play.gif");
    }
};

// const defaultEmotion = function() {
//     if(newTamagatchi.hunger > 70 || newTamagatchi.sleepiness > 70 || newTamagatchi.boredom > 70) {
//         $("img.animated-gif").attr("src", "/resource/default.gif");
//     }
// };

const deadEmotion = function() {
    if(newTamagatchi.hunger <= 0 || newTamagatchi.sleepiness <= 0 || newTamagatchi.boredom <= 0) {
        $("img.animated-gif").attr("src", "./resource/dead.gif");
    }
};









/////////////////// Error Codes //////////////////


// $(start).click(function() {
//     setInterval(function() {
//         timerCount ++;
//          timer.text(`Timer: ${timerCount} sec.`);
//          feedPet();
//          updateAgeCount();
//     }, 1000);
// });


// $("#play-game").click(function() {
    // setInterval(function() {
    //     timerCount ++;
    //      timer.text(`Timer: ${timerCount} sec.`);
        // startTimer();
        //  feedPet();
        //  updateAgeCount();
    // }, 1000);
// });

// $(start).click(function() {
//     startTimer();
//     // feedPet();
//     petLife();
//     updateAgeCount();

// });

// const startTimer = function() {
//     setInterval(() => {
//     timerCount ++;
//     timer.text(`Timer: ${timerCount} sec.`);
//     // feedPet();
//     }, 1000);
// };

// let petLife = function() {
//     setInterval(() => {
//     feedPet();
//     }, 1000);
// };

// let updateAgeCount = function() {
//     newTamagatchi.ageCount();
//     $("#age").text(`Age: ${updatePetAge}`);
// }


    // ageCount() {
    //     this.age ++;
    // }

    // gameOver() {
    //     if (this.hunger === 0 || this.sleepiness === 0 || this.boredom === 0) {
    //         alert(`Oh Snap!!! ${this.name} has died.  ${this.name} lived for ${timerCount} sec.`);
    //         clearInterval(startTimer());
    //         clearInterval(updateAgeCount());
    //     }
    // }

    // ageStop() {
    //     if(this.gameOver() === true) {
    //         clearInterval(updatePetAge);
    //     }
    // }

// $(document).ready(function(){
//     $("#name").submit(function(event){
//       event.preventDefault();
  
    //   $("#stats").show();
    //   $("#info").hide();



    //   if ($(".light")) {
    //       $(".menu-settings.dark").text(`LIGHT MODE`) 
    //     }
    //   else if ($(".light.dark")) {
    //       $(".menu-settings.dark").text(`DARK MODE`)
    //     }