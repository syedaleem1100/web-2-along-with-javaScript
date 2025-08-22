/*
let numbers=[1,2,3,4,5,6,7];
let evennumbers=numbers.filter(isodd);
console.log(evennumbers );

function iseven(elements){
    return elements%2===0;
}
function isodd(elements){
    return elements%2!==0;
}
    
   let ages=[15,13,12,18,40,25];
   let college=ages.filter(isadult);
   console.log(college);
   function isadult(elements){
    return elements >=18;
   }
    
   let fruits=["kiwi","apple","stawberrry","mango","cherry"];
    let shortwords=fruits.filter(checking);
    console.log(shortwords);
   function checking(elements){
    return elements.length<=6;
   }
   
   const prices=[1,3,5,10,32,9.99,20.01];
   const total=prices.reduce(sum,0);
   console.log(`$${total.toFixed(2)}`);
   function sum(accumulator,element){
    return accumulator+element;
   }
     
    const grades=[43,56,77,89,98,37,68];
    const maxscore=grades.reduce(gradeschecker);
    console.log(maxscore);
    function gradeschecker(accumulator,element){
        return Math.max(accumulator,element);
    }
        
       const variable=function  (){
        console.log(`hello Scotland!`)
       }
       variable();
       
      function hello(){
        console.log(`Hello Scotland!`);
      }
      setTimeout(hello,3000);
     
     setTimeout(function(){
        console.log(`Hello Scotland!`);
     },3000);
      
     const numbers=[1,2,3,4,5,6,7,8,9];
     const doublenumbers=numbers.map(squares);
     console.log(doublenumbers);
     function squares(elements){
        return Math.pow(elements,2);
     }
       
       const numbers=[1,2,3,4,5,6,7,8,9];
       const doublenumbers=numbers.map(function(elements){
        return Math.pow(elements,2);
       });
       console.log(doublenumbers);

       const numbers=[1,2,3,4,5,6,7,8,9];
       const underplay=function(elements){
        return Math.pow(elements,2);
       }
       const doublenumbers=numbers.map(underplay);
       console.log(doublenumbers);
       
        
       const numbers=[1,2,3,4,5,6,7,8,9];
       const total=numbers.reduce(function(accumulator,element){
        return  accumulator+element;
       });
       console.log(total);
     
      const numbers=[1,2,3,4,5,6,7,8,9];
      const even=numbers.filter(function(elements){
        return elements%2===0;
      });
      console.log(even);
        
       const hello = function(){
        console.log(`Hello  Scotland!`);
       }
       hello();
       const hello= ()=> console.log(`Hello Scotland!`);
        hello();
      
      const greetings=(name,age)=> {console.log(`Hello ${name }`) 
      console.log(`You are ${age} years old`);
}
      greetings(`Aleem`,20);
         
        setTimeout(hello,3000);
        function hello(){
          console.log(`Hello Scotland!`);
        }
          
         setTimeout(function (){
          console.log(`Hello Scotland!`);
         },3000);
         
         setTimeout(() => console.log(`Hello Scotland!`),3000);
        

         const numbers=[1,2,3,4,5,6,7,8,9];
         const squares=numbers.map((elements)=>Math.pow(elements,2));
         const odd=numbers.filter((elements)=>elements%2!==0)
         const total=numbers.reduce((accumulator,element)=> accumulator+element);
         console.log(total);
          */
         const person={
          firstname:"Syed",
          lastname:"Aleem",
          age:21,
          writer:()=> console.log(`Hai  meet Syed  Aleem  one of the best writer`),
          eat:()=>console.log(`I  eat fish and  Rosh`),
         }
         person.city="Mardan";
         delete person.age;
         console.log(person.writer());
         console.log(person.eat());
         
         const person_2={
          firstname:"Aleem",
          lastname:"Tirmizi",
          age:"20",
          isEmployed:false,
          greetings:function(){
            console.log(`Hi i'm Aleem Tirmizi`);
          },
          eat:function(){
            console.log(`I eat Pulao and sheap meat`);
          },
         }
         console.log(person_2.greetings());
         console.log(person_2.eat());
         person_2.eat();
         console.log(person_2.age);