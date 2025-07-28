//let count=0;
//document.getElementById(`decrease`).onclick= function(){
  //  count--;
    //document.getElementById(`counter`).textContent=count;
//}
//document.getElementById(`reset`).onclick= function(){
  //  count=0;
   // document.getElementById(`counter`).textContent=count;
//}
//document.getElementById(`increase`).onclick= function(){
  //  count++;
    //document.getElementById(`counter`).textContent= count;
//}
const decrease=document.getElementById(`decrease`);
const increase=document.getElementById(`increase`);
const reset=document.getElementById(`reset`);
const counter=document.getElementById(`counter`);
let count;
count=0;
decrease.onclick=  function(){
    count--;
    counter.textContent= count;
}
increase.onclick= function(){
    count++;
    counter.textContent= count;
}
reset.onclick= function(){
    count=0;
    counter.textContent= count;
}

