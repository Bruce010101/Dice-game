
var scores, roundScore, activePlayer, gamePlaying, previousScore;


init();

var lastDice;
var winscore;

dice = Math.floor(Math.random() * 6)+1;



document.querySelector('.btn-roll').addEventListener('click',function (){
    
    if(gamePlaying) {
        
        // 1.Random number
   var  dice = Math.floor(Math.random() * 6)+1;



// 2. Display the result    
     var diceDom = document.querySelector('.dice');
     diceDom.style.display ='block';
     diceDom.src ='dice-' + dice + '.png';
    

// 3. update the round score if the rolled number was not a 1    
if(dice === 6 && lastDice === 6){
    // player looses his score
    scores[activePlayer] = 0;
    document.querySelector('#score-' + activePlayer).textContent = '0';
    
}
    if (dice !== 1) {
        
        //Add score
        
        
     roundScore =roundScore + dice;
document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        
        
    } else {
        
        //Next player
        //ternary operator
        // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        //roundScore = 0;
        nextPlayer(); 
        
        
        //document.querySelector('dice').style.display ='none';
        
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        // toggle is used to switch between the two players /who is active and who is not/

        
        
        // this is 
        /*
        if(activePlayer=== 0){
            
            activePlayer = 1;
        } else {
            activePlayer =0;
        }
        */
        
    
}
   lastDice=dice;
    }
    
  
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){
        
        // Add CURRENT score to GLOBAL score
    
    scores[activePlayer] += roundScore;
    
    
    
    
    // Update UI 
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    
    
    // Check if player won the game
    
    
    if(scores[activePlayer] ==winscore){
       
       
        //display winner
      
        document.querySelector('#name-' + activePlayer).textContent ='winner'; 
        document.querySelector('.dice').style.display ='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
     
        // state variable
        gamePlaying =false;
    scores[activePlayer]=winscore;        
    }  else {
       
        // if no winner go to next player 

        nextPlayer();
             
    }
    
    // Next Player
    
    nextPlayer();
        
        
    }
    
    
    
});


function nextPlayer(){
    
    // Next Player
    
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        roundScore = 0;
        
        document.getElementById('current-0').textContent= '0';
        document.getElementById('current-1').textContent= '0';
        
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
    
    document.querySelector('.dice').style.display ='none';
    
}

document.querySelector('.btn-new').addEventListener('click', init); 

function init(){
    
scores = [0,0];
roundScore = 0;
activePlayer = 0;
//state variable
gamePlaying = true;    
    
document.querySelector('.dice').style.display = 'none';



document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';    

document.getElementById('name-0').textContent = 'Player 1';    
document.getElementById('name-1').textContent = 'Player 2';    

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
    
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');
    
 
    
    

}



