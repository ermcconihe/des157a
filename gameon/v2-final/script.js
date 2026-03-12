(function(){
    'use strict'
    console.log('reading js');

    const gameStart = document.querySelector('#gamestart');
    const feedback = document.querySelector('#feedback');
    const p1score = document.querySelector('#p1-score');
    const p2score = document.querySelector('#p2-score');
    const p1turn = document.querySelector('#p1-turn');
    const p2turn = document.querySelector('#p2-turn');
    // const actionArea = document.querySelector('#actions');
    const button1 = document.querySelector('#button-1');
    const button2 = document.querySelector('#button-2');
    const images = document.querySelector('#images');

    const clinks = new Audio('audio/clinks.mp3');

    const gameData = {
        dice: ['1.png', '2.png', '3.png', 
            '4.png', '5.png', '6.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,  //use this to tell us which player we are on, between 0 or 1
        gameEnd: 49
    };

    gameStart.addEventListener('click', function(){
    
        // feedback.innerHTML = '<p>play!</p>';
        gameStart.innerHTML = '<p id="quit">quit game</p>';

        document.querySelector('#quit').addEventListener('click',  function(){
            location.reload(); //reloads and refreshes the page
        });

        gameData.index = Math.round(Math.random()); //picks a number between a number between 0 and 1 and then rounds it
        console.log(gameData.index);

        setUpTurn(); 

        
    });// end start game event listener

    function setUpTurn() {
        if (gameData.index == 0){
            p1turn.innerHTML = "<p>it's your turn</p>";
            p2turn.innerHTML = "";
        } else {
            p2turn.innerHTML = "<p>it's your turn</p>";
            p1turn.innerHTML = "";
        }
        
        feedback.innerHTML = '';
        button1.innerHTML = '<p id="roll">roll</p>';
        document.querySelector('#roll').addEventListener('click', function(){
            throwDice();
        });

        
    }// end setup turn

    function throwDice(){

        feedback.innerHTML = '';
        //generate a random numner that represents the roll of the dice
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        images.innerHTML = `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //if two 1's are rolled
        if( gameData.rollSum === 2){
            feedback.innerHTML += "<p>two 1's! :( </p>";
        
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            setTimeout(setUpTurn, 2000);
            showCurrentScore();
        }
        //if either die is a 1
        else if( gameData.roll1 === 1 || gameData.roll2 === 1){

            button1.innerHTML = '';
            button2.innerHTML = '';
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            feedback.innerHTML += `<p>a one! switching players</p>`;
            setTimeout(setUpTurn, 2000);
        }
        //if neither die is a 1
        else {

            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            button1.innerHTML = '<p id="rollagain">roll again</p>';
            button2.innerHTML = '<p id="pass">pass</p>';

            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
            });

            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            
        }

        checkWinningCondition();

    }//end throw dice

    function checkWinningCondition(){
        if ( gameData.score[gameData.index] > gameData.gameEnd ) {
            feedback.innerHTML = `<p>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points</p>`;
            button1.innerHTML = '';
            button2.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'play again?';
        } else {
            showCurrentScore();

        }
    }//check winning condition ends

    function showCurrentScore(){
        p1score.innerHTML = `score: ${gameData.score[0]}`
        p2score.innerHTML = `score: ${gameData.score[1]}`

    }


    document.querySelector('#rollagain').addEventListener('click', function(){
        clinks.play();
    });

    document.querySelector('#roll').addEventListener('click', function(){
        clinks.play();
    });



    
})();