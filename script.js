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
const pp=document.createElement('p');
const pa=document.createElement('p');

const rps = [];
for(let i=0;i<3;i++){
    rps[i]=document.createElement('button');
}
rps[0].textContent='Rock';
rps[1].textContent='Paper';
rps[2].textContent='Scissors';

const buttons = Array.from(document.getElementsByTagName('button'));
let pcount=0;
let aicount =0;
pp.textContent=`Player : ${pcount}`;
pa.textContent=`Computer : ${aicount}`;
div.appendChild(pp);
div.appendChild(pa);

for(let j=0;j<rps.length;j++){
    rps[j].addEventListener('click',function(){
        p.textContent=playRound(rps[j].textContent,aiSelection);
        if(p.textContent.toLowerCase().substring(0,7)==='you win'){
            pcount+=1;
            if(pcount===5){
                p.textContent=`YOU WIN! Congratulations!`;
                pcount=0;
                aicount=0;
            }
        }else if(p.textContent.toLowerCase().substring(0,8)==='you lose'){
            aicount+=1;
            if(aicount===5){
                p.textContent=`YOU LOSE! Please don't try again, that sucked.`;
                pcount=0;
                aicount=0;
            }            
        }
        pp.textContent=`Player : ${pcount}`;
        pa.textContent=`Computer : ${aicount}`;
    });
}

for(i=0;i<rps.length;i++){
    div.appendChild(rps[i]);
}
div.appendChild(p);