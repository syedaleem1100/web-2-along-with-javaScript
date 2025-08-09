/*const minNumber=1;
const maxNumber=100;
const answer=Math.floor(Math.random()*(maxNumber-minNumber+1))+minNumber;
let guess;
let attempts=0;
let running=true;
while(running){
   guess= window.prompt(`enter  the number between ${minNumber}-${maxNumber}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert(`please enter a valid number`);
    }
    else if(guess<minNumber || guess>maxNumber){
        window.alert(`please enter the  number  within the range`);
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert(`the guess is too low! Try again`);

        }
        else if(guess>answer){
            window.alert(`the guess is too high! Try again`);
            
        }
        else{
            window.alert(`Correct! the answer is  ${answer}.It takes you ${attempts} attempts`);
            running=false;
        }
    }
}
    */

   /*
   function happybirthday(name,age){
    console.log(`happy birthday to you`);
    console.log(`happy birthday dear  ${name}`);
    console.log(`You  are ${age} years old`);
   }
   happybirthday(`Aleem`,21);
   happybirthday(`Zaroon`,22);
   */
 /*  function  add(a,b){
    let addition=a+b;
    return addition;
  }
  let result=add(13,14);
  console.log(result);
  */
/*
  function add(a,b){
    let addition=a+b;
    return  addition;
  }
  console.log(add(4,8));
  
 
  function add(a,b){
    return a+b;
  }
  function sub(a,b){
    return  a-b;
  }
  function isEven(number){
    if(number%2===0){
        return true;
    }
    else{
        return false
    }
  }
  console.log(isEven(13));
   

  function isEven(number){
    return number%2===0 ? true : false;
  }
  console.log(isEven(12));
  
function validEmail(email){
    if(email.includes(`@`)){
        return  true;
    }
    else{
        return false;
    }
}
console.log(validEmail(`aleem@.com`))

function isValidEmail(email){
    if(email.includes(`@.com`)){
         return true;
    }
    else{
       return false;
    }
}
console.log(isValidEmail(`aleem@.com`));
*/
const  ist=document.getElementById(`ist`);
const  far=document.getElementById(`far`);
const  cel=document.getElementById(`cel`);
const  result=document.getElementById(`result`);
let temp;
function convert(){
    if(far.checked){
        temp=Number(ist.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+ `°F`
    }
    else if(cel.checked){
        temp=Number(ist.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+ `°C`

    }
    else{
        result.textContent=`Select  a unit`;
    }

}
  



