const minNumber=1;
const maxNumber=100;
const answer=Math.floor(Math.random()*(maxNumber-minNumber+1))+minNumber;
let  guess;
let running=true;
let attempts=0;
while(running){
    guess=window.prompt(`guess the Number between ${minNumber}-${maxNumber}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert(`please  enter a valid number`);
    }
    else if(guess<minNumber || guess>maxNumber){
        window.alert(`pleases enter  a valid  number`);
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert(`Too low! Try again`);
        }
        else if(guess > answer){
            window.alert(`Too high!  Try again`);
        }
        else{
            window.alert(`Right.The answer is ${answer}.It takes  you ${attempts} attempts`);
            running=false;
        }
    }
    
}
