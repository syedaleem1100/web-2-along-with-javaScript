//let age;
//const myinput=document.getElementById(`myinput`);
//const mybutton=document.getElementById(`mybutton`);
//const toshow=document.getElementById(`toshow`);
//mybutton.onclick= function(){
  //  age=Number(myinput.value);
 //   console.log(typeof age);
//    if(age>=18 && age<=30){
  //      toshow.textContent= "you are eligible";
    //    console.log(`you ar eligible`);
   // }
 //   else{
   //     toshow.textContent=`sorry! you are not eligible`;
     //   console.log(`stay away sorry`);
//    }
//}
let age=16;
let license=false;
if(age>=18){
    console.log(`you are eligible to drive!`)
    if(license){
        console.log(`yes you can  ride!`)
    }
    else{
        console.log(`stay away! you will be guilty otherwise can't be drive`)
    }
}
    else{
        console.log(`you are under-age sorry wait until you get 18+`);
    }
