//backend javascript

//variables

//random gen num
var score;
var secret;
var amountBrown;
var amountRed;
var amountGreen;
var amountViolet;
var win;
var lost;
var score = 0;
//score for lost
var assignCrystals = function(){
    amountBrown = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    amountRed = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    amountGreen = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    amountViolet = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}



//score for win


//keep track of running total in the score variable

//functions

//start fx
   //randomly generate numbers for buttons

     //console.log(getRandomInt(9));
    //call secret num call get buttons and create onclick for button and tabulate the nums

    //assign a value to secret which is 19-120


//secretNum fx
    //randomly generates secretNum
var secretNum = function() {
   secret = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}
//secretNum function();

//getButtons fx
    //randomly generate numbers for button1 -4
//getButtons function()




//getTotal fx


var check = function(){

    if(score===secret)
    {
        win += 1;
        document.getElementById('wins').textContent = "Wins: " + win;
        alert("You win");
        //call secretNum will give new values
        secretNum();
        score = 0;
        assignCrystals();
    }
    else if (score > secret)
    {
        lost += 1;
        document.getElementById('losses').textContent = "Losses: " + lost;
        alert("You lose. The answer was " + secret + "and your final value was " + score);
        secretNum();
        score = 0;
        assignCrystals();
    }

    else {
        null;
    }
}
    //cases 
    //total === secret
    //you win. win++; then call secretNum() fx and button() fx to create new numbers and button for the next round.


    //total <secret
    //keep on clicking

    //total > secret
    //you lose. lose++; and start the game over

    


    //if you get done early create clear function
    //clear
    //clear everything out before starting
    // set win

    //UI front end

//div for intro. this will be instructions title

    //div for target numbers

//div for buttons


//divs for crystals
   document.getElementById('brown').addEventListener('click', function(){
        score = score + amountBrown;
        // score += amountBrown;
        document.getElementById('score').textContent = "Score :" + score;
        check();

   });

   document.getElementById('green').addEventListener('click', function(){
        score = score + amountGreen;
        // score += amountBrown;
        document.getElementById('score').textContent = "Score :" + score;
        check();

   });

   document.getElementById('red').addEventListener('click', function(){
        score = score + amountRed;
        // score += amountBrown;
        document.getElementById('score').textContent = "Score :" + score;
        check();

   });

   document.getElementById('violet').addEventListener('click', function(){
        score = score + amountViolent;
        // score += amountBrown;
        document.getElementById('score').textContent = "Score :" + score;
        check();

   });

   assignCrystals();
   console.log(amountBrown)