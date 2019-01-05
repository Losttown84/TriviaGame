$(document).ready(function () {
    var options = [
        {
            question: "What's the name of the town's popular mini horse?", 
            choice: ["Lil' Sebastian", "Secretariat", "Wilbur", "Seabiscuit"],
            answer: 0,
            photo: "assets/images/lil_sebastian.jpg"
         },
         {
             question: "What four-legged, furry animals had population problems in Pawnee?", 
            choice: ["Rats", "Squirrels", "Cats", "Raccoons"],
            answer: 3,
            photo: "assets/images/raccoon.jpg"
         }, 
         {
             question: "What was the name of the magazine that was on top of the hottest trends?", 
            choice: ["The Final Word", "Bloosh", "E720", "The Pawnee Sun" ],
            answer: 1,
            photo: "assets/images/bloosh.jpg"
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
            photo: "assets/images/conesofdunshire.jpg"
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
            photo: "assets/images/literally.jpg"
        },
        {   question: "What is Donna Meagle's side hustle that she moves to Seattle to pursue?",
            choice: ["Real Estate Agent", "Nurse", "Social Media Influencer", "Accountant" ],
            answer: 0,
            photo: "assets/images/donnameagle.gif"
        },
        {   question: "What's the name of Andy & April's dog?",
            choice: ["Winner", "Gold Medal", "Champion", "Olympian" ],
            answer: 2,
            photo: "assets/images/champion.gif"
        }];





// Need to set a timer of about 90 seconds
// Players will click start which will begin timer
// Players will have 90 seconds to choose answers to a variety of questions
// Display how much time players have to complete the trivia
// Show four answers, with one being correct
// Players can only choose one answer per question
// At the end of the timer, players will be given results of unanswered, correct and wrong 