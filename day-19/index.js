/*
const cards=['A',2,3,4,5,6,7,8,9,`J`,`Q`,`K`];;
//cards.sort(()=> Math.random()-0.5);
//console.log(cards);
//cards.sort(()=>Math.random()-0.5);
//console.log(cards);
//cards.sort(()=>Math.random()-0.5);
//console.log(cards);
shuffle(cards);
//console.log(cards);
//function shuffle(array){
//    for(let i=array.length-1;i>0;i--){
//        const random=Math.floor(Math.random()*(i+1));
//        [array[i],array[random]]=[array[random],array[i]];
//    }

//}
shuffle(cards);
console.log(cards);

function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const random=Math.floor(Math.random()*(i+1) );
    [array[i],array[random]]=[array[random],array[i]];
    }
}
    

const date=new Date(2003,7,3,10,20,10,32);
console.log(date);

const date=new Date();
console.log(date);

const date=new Date("2003-07-04T12:00:00");
console.log(date);

const date=new Date();
const year=date.getFullYear();
console.log(year);

function outer(){
     let greetings="Hello";
    function inner(){
        console.log(greetings);
    }
    inner();
}
outer();

function counter(){
    let count=0;
    function increment(){
        count++;
        console.log(`count:${count}`);
    }
    function getcount(){
        return count;
    }
    return {increment,getcount};
}
const increase=new counter();
increase.increment();
increase.increment();
console.log(`the current count is ${increase.getcount()}`);


function createGame(){
    let score=0;
function increaseScore(points){
    score+=points;
    console.log(`+${points}pts`);
}
function decreaseScore(points){
    score-=points;
    console.log(`-${points}pts`);
}
function getScore(){
    return score;
}
return {increaseScore,decreaseScore,getScore};
}
const Game=new createGame();

 Game.increaseScore(5);
 Game.increaseScore(23);
 Game.decreaseScore(9);
 console.log(`the final score is :${Game.getScore()}`)
 
function hello(){
    window.alert(`How we can assist you today!`);     
}
setTimeout(hello,3000);

setTimeout(function(){
    window.alert(`How i can assist you today!`);  //Anonymous function
},3000);

const Time=setTimeout(()=>window.alert(`How i can  assist you today!`),3000);
clearTimeout(Time);
*/
let timeControl;
 function startTimer(){
    timeControl=setTimeout(()=> window.alert(`How i can assist you today`),3000);
    console.log(`started`);
 }
 function clearTimer(){
    clearTimeout(timeControl);
    console.log(`stopped`);
 }