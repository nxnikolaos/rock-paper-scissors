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
const p=document.createElement('p');

const rps = [];
for(let i=0;i<3;i++){
    rps[i]=document.createElement('button');
}
rps[0].textContent='Rock';
rps[1].textContent='Paper';
rps[2].textContent='Scissors';

const buttons = Array.from(document.getElementsByTagName('button'));

for(let j=0;j<rps.length;j++){
    rps[j].addEventListener('click',function(){
        let pcount=0;
        let aicount =0;
        p.textContent=playRound(rps[j].textContent,aiSelection);
        if((p.textContent.toLocaleLowerCase()).substr(0,7)==='you win'){
            pcount+=1;
        }else if((p.textContent.toLocaleLowerCase()).substr(0,8)==='you lose'){
            aicount+=1;
        }
    });
}

for(i=0;i<rps.length;i++){
    div.appendChild(rps[i]);
}
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
