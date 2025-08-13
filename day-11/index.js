     /* -----Array
//let  fruits=[`apple`,`Pista`,`Orange`,`Strawberry`,`Kiwi`,`Cherry`];
//fruits[0]=`Barry` ;                 //to  change the element in array
//fruits[1]=`Pineapple`;
//fruits[6]=`Gurguri`;
//fruits.push(`gurguri`);
//fruits.pop();
//fruits.unshift(`Gurguri`);
//fruits.shift();
//console.log(fruits.indexOf(`Barry`));
//console.log(fruits);
//console.log(fruits.length);
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);
//console.log(fruits[4]);
//console.log(fruits[5]);
//console.log(fruits[6]);
//for(let i=0;i<fruits.length;i++){
//    console.log(fruits[i]);
//}
//for(let i=fruits.length-1;i>=0;i--){
//    console.log(fruits[i]);
//}
//fruits.sort().reverse();
//for(let a of fruits){
//    console.log(a);
//}

let numbers=[1,2,3,4];
let finding=Math.min(...numbers);
console.log(finding);

let name=`Syed Aleem`;
let findings=[...name].join(`-`);
console.log(findings);

 let  fruits=[`kiwi`,`cherry`,`apple`,`orange`];
 let vegetabels=[`cucumber`,`carrot`,`podina`];
 let food=[...fruits,...vegetabels,`papita`,`appricot`];
 console.log(food);
   
  let movie={
    title:`Hustler`,
    year:2025
  }
  movie.title=`Pitchers`;
  console.log(movie.title);
  
 let test=prompt(`Run`,`Code`);
 console.log(test)
 
function openFridge(...foods){
    console.log(...foods);
}
let food1=`pizza`;                           //rest parameter   & //spread operator
let  food2=`zinger`;
let food3=`apple`;
openFridge(food1,food3);

function openFridge(...foods){
    return foods;
}
let totalfood=openFridge(`pizza`,`burger`);
console.log(totalfood);

*/
function sum(...numbers){
   
    let result=0;
    for(let number of numbers){
        result+=number;
    }
    return result;
}
let totalNumbers=sum(1,3);

console.log(totalNumbers);

function getAv(...numbers){
    
    let result=0;
    for(let number of numbers){
        result+=number;
       
    }
    return result/numbers.length;
}
let  totalav=getAv(100,98,90,92);
console.log(totalav);


function combineStrings(...strings){
    console.log(strings);
    return  strings.join(` `);
    
}
let fullStrings=combineStrings(`I`,`am`,`Aleem`);
console.log(fullStrings);
 









