const display=document.getElementById(`display`);
let timer=null;
let startTime=0;
let elapsedTime=0;
let intervel=false;

function start(){
    if(!intervel){
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        intervel=true;
    }
   

}
function stop(){
    if(intervel){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        intervel=false;
    }
}
function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    intervel=false;
    display.textContent=`00:00:00:00`;

}
function update(){
    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;
    let hour=Math.floor(elapsedTime/(1000*60*60));
    let minutes=Math.floor(elapsedTime/(1000*60)%60);
    let seconds=Math.floor(elapsedTime/(1000)%60);
    let milliSeconds=Math.floor(elapsedTime % 1000/10);
    hour=String(hour).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliSeconds=String(milliSeconds).padStart(2,"0");
    

    display.textContent=`${hour}:${minutes}:${seconds}:${milliSeconds}`;

}