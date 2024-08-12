const game = ()=>{
    let pSore=0;
    let cScore=0;


    //start the game
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });

    }

    //play match
    const playMatch = ()=>{
        const options=document.querySelectorAll(".option button");
        const playerHand=document.querySelector('.player-hand');
        const computerHand=document.querySelector('.computer-hand');
        const hands=document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationed',function(){
                this.style.animation="";
                console.log("hello");
            });

            
        });

        //Computer Options
        const computerOptions = ['rock','paper','scissors'];

        options.forEach(opt=>{
            opt.addEventListener("click",function(){
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);

                compareHands(this.textContent,computerChoice);

                //update images

                playerHand.src=`./assets/${this.textContent}.png`;
                computerHand.src =`./assets/${computerChoice}.png`;

                playerHand.style.animation="shakePlayer 2s ease";
                computerHand.style.animation="shakeComputer 2s ease";
            });
        });
       
        

    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent=pSore;
        computerScore.textContent=cScore;
    }

    const compareHands =(playerChoice,computerChoice)=>{
        const winner = document.querySelector('.winner');

        if(playerChoice===computerChoice){
            winner.textContent="It's a tie !";
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice==='scissors'){
                winner.textContent='Player wins!';
                pSore++;
                updateScore();
                return;
                
            }
            else{
                winner.textContent='Computer wins!';
                cScore++;
                updateScore();
                return;

            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice==='scissors'){
                winner.textContent='Computer wins!';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent='Player wins!';
                pSore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice==='rock'){
                winner.textContent='Computer wins!';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent='Player wins!';
                pSore++;
                updateScore();
                return;
            }
        }
    }

    playMatch();
    startGame();
}
game();