$(document).ready(function () {
    var options = [
        {
            question: "What's the name of the town's popular mini horse?", 
            choice: ["Lil' Sebastian", "Secretariat", "Wilbur", "Seabiscuit"],
            answer: 0,
            photo: "assets/images/lilsebastian.gif"
         },
         {
             question: "What four-legged, furry animals had population problems in Pawnee?", 
            choice: ["Rats", "Squirrels", "Cats", "Raccoons"],
            answer: 3,
            photo: "assets/images/raccoon.gif"
         }, 
         {
             question: "What was the name of the magazine that was on top of the hottest trends?", 
            choice: ["The Final Word", "Bloosh", "E720", "The Pawnee Sun" ],
            answer: 1,
            photo: "assets/images/ronsinbloosh.gif"
        }, 
        {
            question: "Which was the name for Tom's clothing retail shop?", 
            choice: ["Tommy's Closet", "Rent-A-Swag", "Entertainment 720", "Treat Yo Self" ],
            answer: 1,
            photo: "assets/images/rentaswag.gif"
        }, 
        {
            question: "What is Ron's favorite steakhouse?", 
            choice: ["JJ's Diner", "Tom's Bistro", "Charles Mulligan's Steakhouse", "Rock N' Roll Restaurant" ],
            answer: 2,
            photo: "assets/images/Charles_Mulligan's_Steak_House.jpg"
        }, 
        {
            question: "During Ben's time off, he created a game, which is it?", 
            choice: ["Game of Thrones", "Settlers of Catan", "Dungeons & Dragons", "The Cones of Dunshire" ],
            answer: 3,
            photo: "assets/images/cones-of-dunshire.gif"
        }, 
        {
            question: "What's the name of Pawnee's rival town?", 
            choice: ["South Bend", "Eagleton", "Gary", "Bloomington" ],
            answer: 1,
            photo: "assets/images/eagletonsucks.gif"
        }, 
        {
            question: "What is Chris Trager's favorite word?", 
            choice: ["Anne Perkins", "Dr. Richard Nygard", "Literally", "Figuratively" ],
            answer: 2,
            photo: "assets/images/literally.gif"
        },
        {   question: "What is Donna Meagle's side hustle that she moves to Seattle to pursue?",
            choice: ["Real Estate Agent", "Nurse", "Social Media Influencer", "Accountant" ],
            answer: 0,
            photo: "assets/images/donnameagle.gif"
        },
        {   question: "What's the name of Andy & April's dog?",
            choice: ["Winner", "Goldie", "Champion", "Olympian" ],
            answer: 2,
            photo: "assets/images/champion.gif"
        }];

var correctAnswer = 0;
var wrongAnswer = 0;
var unanswerCount = 0;
var timer = 20;
var intervalId;
var userGuess ="";
var running = false;
var qCount = options.length;
var pick;
var index;
var newArray = [];
var holder = [];
            
$("#reset").hide();
//click start button to start game
$("#start").on("click", function () {
        $("#start").hide();
        displayQuestion();
        runTimer();
        for(var i = 0; i < options.length; i++) {
    holder.push(options[i]);
}
    })
//timer start
function runTimer(){
    if (!running) {
    intervalId = setInterval(decrement, 1000); 
    running = true;
    }
}
//timer countdown
function decrement() {
    $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
    timer --;

    //stop timer if reach 0
    if (timer === 0) {
        unanswerCount++;
        stop();
        $("#answerblock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
        hidepicture();
    }	
}

//timer stop
function stop() {
    running = false;
    clearInterval(intervalId);
}

function displayQuestion() {
    //generate random index in array
    index = Math.floor(Math.random()*options.length);
    pick = options[index];


        $("#questionblock").html("<h2>" + pick.question + "</h2>");
        for(var i = 0; i < pick.choice.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);
            //assign array position to it so can check answer
            userChoice.attr("data-guessvalue", i);
            $("#answerblock").append(userChoice);
//		}
}



//click function to select answer and outcomes
$(".answerchoice").on("click", function () {
    //grab array position from userGuess
    userGuess = parseInt($(this).attr("data-guessvalue"));

    //correct guess or wrong guess outcomes
    if (userGuess === pick.answer) {
        stop();
        correctAnswer++;
        userGuess="";
        $("#answerblock").html("<p>Correct!</p>");
        hidepicture();

    } else {
        stop();
        wrongAnswer++;
        userGuess="";
        $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
        hidepicture();
    }
})
}


function hidepicture () {
    $("#answerblock").append("<img src=" + pick.photo + ">");
    newArray.push(pick);
    options.splice(index,1);

    var hidpic = setTimeout(function() {
        $("#answerblock").empty();
        timer= 20;

    //run the score screen if all questions answered
    if ((wrongAnswer + correctAnswer + unanswerCount) === qCount) {
        $("#questionblock").empty();
        $("#questionblock").html("<h1>Here are your scores: </h1>");
        $("#answerblock").append("<h4> Correct: " + correctAnswer + "</h4>" );
        $("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
        $("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
        $("#reset").show();
        correctAnswer = 0;
        wrongAnswer = 0;
        unanswerCount = 0;

    } else {
        runTimer();
        displayQuestion();

    }
    }, 3000);


}

$("#reset").on("click", function() {
    $("#reset").hide();
    $("#answerblock").empty();
    $("#questionblock").empty();
    for(var i = 0; i < holder.length; i++) {
        options.push(holder[i]);
    }
    runTimer();
    displayQuestion();

})

})


        
       


// Need to set a timer of about 90 seconds
// Players will click start which will begin timer
// Players will have 90 seconds to choose answers to a variety of questions
// Display how much time players have to complete the trivia
// Show four answers, with one being correct
// Players can only choose one answer per question
// At the end of the timer, players will be given results of unanswered, correct and wrong 