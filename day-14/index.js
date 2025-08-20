/*
hello();
goodbye();
function hello(){
    console.log(`Hello`);
}
function goodbye(){
    setTimeout(function(){
        console.log(`goodbye`);
    },3000);
}
  
  greetings();
  status();
  function greetings(){
    console.log(`AOA`);
  } 
  function status(){
    setTimeout(function(){
        console.log(`How are you?`);
    },1000);
  }
      
   
        /*
       hello(goodbye);
       function hello(callback){
        console.log(`Hello`);
        callback();
       }
       function goodbye(){
        console.log(`goodbye`);
       }
        
         hello(goodbye);
     
     function hello(callback){
        setTimeout(function(){
            console.log(`Hello`);
        },100);
        setTimeout(function(){
            callback();
        },1000);
            
        
     }
    function goodbye(){
        console.log(`goodbye`);
    }
        
       
    sum(displaypage,111,5);
    function sum(callback,x,y){
        let result=x+y;
        callback(result);
    }
    function displayresult(result){
        console.log(result);
    }
    function displaypage(result){
        document.getElementById(`ok`).textContent=result
    }
       
      let numbers=[1,2,3,4];
      numbers.forEach(double);
      numbers.forEach(displayelements);
      function double(ok,index,array){
        array[index]=ok*2;

      }
      function displayelements(ok){
        console.log(ok);
      }
        
       let fruits=["apple","strawberry","kiwi","cherry"];
       fruits.forEach(capital);
       fruits.forEach(display);
       function capital(elements,index,array){
        array[index]=elements.charAt(0).toUpperCase() + elements.slice(1);
       }
       function upper(elements,index,array){
        array[index]=elements.toUpperCase();
       }
       function display(elements){
        console.log(elements);
       }

const numbers=[1,2,3,4,5];
const  double=numbers.map(square);
console.log(double);
 function square(elements){
  return Math.pow(elements,2);

 }
  */
 const dates=["2025-01-30","2024-02-29","2023-03-29"];
 const foramted=dates.map(formate);
 console.log(foramted);
 function formate(elements){
  const parts=elements.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
 }