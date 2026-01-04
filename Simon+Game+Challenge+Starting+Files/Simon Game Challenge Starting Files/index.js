

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level" + level);
        nextSequence();
        started = true;
    }
});
// button clik
$(".btn").click(function () {
    var userChosenColors = $(this).attr("id");
    userClickedPattern.push(userChosenColors);
    playsound(userChosenColors);
    animatePress(userChosenColors);
    checkAnswer(userClickedPattern.length - 1);

});


function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence()
            }, 1000);
        }
    }else {
        playsound("wrong");

        // add class 
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over")

        }, 200);
        $("#level-title").text("game-over , press any key to restart");
        start_over();
    }

}

// sequence 
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("level" + level);
    var random_number = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[random_number];
    gamePattern.push(randomChosenColor);


    $("#" + randomChosenColor).
        fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColor);

}



function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}

function playsound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}
function start_over() {
    level = 0;
    gamePattern = [];
    started = false;
}






