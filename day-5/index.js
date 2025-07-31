//console.log(Math.PI);
//console.log(Math.E);
//let x=-3.589532;
//a=2;
//let z;
//z=Math.round(x);
//z=Math.floor(x);
//z=Math.ceil(x);
//z=Math.trunc(x);;
//z=Math.pow(x, a);
//z=Math.sqrt(x);
//z=Math.log(a);
//z=Math.abs(x);
//z=Math.sign(x);
//z=Math.max(x,a);
//z=Math.min(x,a);
//z=Boolean(x);
//console.log(z);
//let a=Math.random();
//console.log(a);
//let a=Math.floor(Math.random()*6+1);
//console.log(a);
//let otp=Math.floor(Math.random()*9000+1000);
//console.log(`Your opt is:${otp}`);
//let  a=Math.floor(Math.random()*(100-50))+50;
//console.log(a);
//let randNum=Math.floor(Math.random()*10000-5000)+5000;
//console.log(randNum);
//const mylabel=document.getElementById(`mylabel`);
//const mybutton=document.getElementById(`mybutton`);
//let randNum;
//mybutton.onclick= function(){
 //   randNum=Math.floor(Math.random()*6+1);
   // mylabel.textContent= randNum;
//}
const  mybutton=document.getElementById(`mybutton`);
const mylabel1=document.getElementById(`mylabel1`);
const mylabel2=document.getElementById(`mylabel2`);
const mylabel3=document.getElementById(`mylabel3`);
let randNum1;
let randNum2;
let randNum3;
mybutton.onclick= function(){
    randNum1=Math.floor(Math.random()*6)+1;
    randNum2=Math.floor(Math.random()*6)+1;
    randNum3=Math.floor(Math.random()*6)+1;
    mylabel1.textContent=randNum1;
    mylabel2.textContent=randNum2;
    mylabel3.textContent=randNum3;

    
}











