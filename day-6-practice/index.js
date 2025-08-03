const myinput=document.getElementById(`myinput`);
const mybutton=document.getElementById(`mybutton`);
const paragraph=document.getElementById(`paragraph`);
let age;
mybutton.onclick = function(){
    age=myinput.value;
    age=Number(age);
    if(age>=50){
        paragraph.textContent=`You are too old sorry you can't make entry`;
    }
    else if(age==0){
        paragraph.textContent=(`you were just born now baby take your time`);
    }
    else if(age<0){
        paragraph.textContent=(`age can't be less than 0`);
    }
    else if(age>=18){
        paragraph.textContent=(`you are eligible to make entry thankyou for the participation`);
    }
    else{
        paragraph.textContent=(`your age had to be inbetween of 18 and 49`);
    }

    
}