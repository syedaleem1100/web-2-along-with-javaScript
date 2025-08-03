const mycheckbox=document.getElementById(`mycheckbox`);
const visaBtn=document.getElementById(`visaBtn`);
const masBtn=document.getElementById(`masBtn`);
const paypalBtn=document.getElementById(`paypalBtn`);
const mysubmit=document.getElementById(`mysubmit`);
const subResult=document.getElementById(`subResult`);
const payResult=document.getElementById(`payResult`);
mysubmit.onclick= function(){
    if(mycheckbox.checked){
        subResult.textContent=`You are subscribed`;
    }
    else{
        subResult.textContent=`You are not subscribed`;
    }
    if(visaBtn.checked){
        payResult.textContent= `You  are  paying with  Visa Card`;
    }
    else if(masBtn.checked){
        payResult.textContent= `You are paying  with Master Card`;
    }
    else if(paypalBtn.checked){
        payResult.textContent=` You are paying with Paypal`;
    }
}

