/*Computers Choice Calculator*/
function computerPlay(){
    let choice = ['Rock','Paper','Scissors'];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}
let aiSelection = computerPlay();

/*Round One*/
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let winner;
    if(playerSelection===computerSelection){
        winner = `DRAW! ${playerSelection} can't beat ${computerSelection}`;
    }else if(playerSelection==='rock'){
        if(computerSelection==='paper'){
            winner = `You lose paper beats rock.`;
        }else {
            winner = `You win! Rock beats scissors.`;
        }
    }else if(playerSelection==='paper'){
        if(computerSelection==='scissors'){
            winner =`You lose scissors beats paper.`;
        }else {
            winner = `You win! paper beats rock.`;
        }
    }
    else if(playerSelection==='scissors'){
        if(computerSelection==='rock'){
            winner = `You lose rock beats scissors.`;
        }else {
            winner = `You win! scissors beats paper.`;
        }
    }
    return winner
}
const parent = document.querySelector('.parent');
const div = document.createElement('div');
div.classList.add('container');
parent.appendChild(div);

const buttonR = document.createElement('button');
buttonR.textContent = 'Rock';
const buttonP = document.createElement('button');
buttonP.textContent = 'Paper';
const buttonS = document.createElement('button');
buttonS.textContent = 'Scissors';

const p=document.createElement('p');
buttonR.addEventListener('click',function(){
    p.textContent=playRound(buttonR.textContent,aiSelection);
});
buttonP.addEventListener('click',function(){
    p.textContent=playRound(buttonP.textContent,aiSelection)
});
buttonS.addEventListener('click',function(){
    p.textContent=playRound(buttonS.textContent,aiSelection)
});

div.appendChild(buttonR);
div.appendChild(buttonP);
div.appendChild(buttonS);
div.appendChild(p);




/*
const playerSelection = prompt('Rock, paper or scissors?');
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
*/


/*----------------------------BEST OF 5------------------------------
console.log('The game functions starts here.');
console.log('Get ready for a best of 5!');



function game(computerSelection){
    let pcount=0;
    let aicount =0;
   for(let i =0; i< 5; i++){ 
        let playerSelection = prompt("Rock, paper or scissors?");

        playerSelection.toLocaleLowerCase();
        computerSelection.toLocaleLowerCase();
        console.log(playRound(playerSelection,computerSelection));
        
        if((playRound(playerSelection,computerSelection).toLocaleLowerCase()).substr(0,7)==='you win'){
            pcount+=1;
        }else if((playRound(playerSelection,computerSelection).toLocaleLowerCase()).substr(0,8)==='you lose'){
            aicount+=1;
        }
   }
   if(pcount>aicount){
       console.log(`Congratulations! You win the best of 5! ${pcount} to ${aicount}.`);
   }else if(pcount<aicount){
       console.log(`You lost! Get rekt boiiiii! ${pcount} to ${aicount}.`);
   }else{
       console.log(`It's a draw! ${pcount} to ${aicount}!`);
   }
}

game(computerSelection);
*/
