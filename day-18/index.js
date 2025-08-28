/*
let product_price=20;
let product_category="food";
let discount_price;
if(product_category==="electronics"){
    discount_price=product_price-(product_price*10/100);
}
else if(product_category==="clothes"){
    discount_price=product_price-(product_price*20/100);
}
else if(product_category==="food"){
    discount_price=product_price-(product_price*50/100);
}
console.log(`Discounted price${product_category}:${discount_price}`);

let age=14;
let citizen=false;
if(age>=18 && citizen===true){
    console.log(`eligible to vote`);
}
else if(age>=18 && citizen===false){
    console.log(`Not a ciitzen sorry Noor ul Haq bayi jaan`);
}
else if(age<18 && citizen===true){
    console.log(`too younng to vote`);
}
    
   let person={
    
   }
   if("age" in person){
    console.log(person.age);
   }
   else{
    console.log(`age is not defined`);
   }
    
   let a=1;
   let b=2;
   [a,b]=[b,a];                            //to swap assigned values of variables
   console.log(`a:${a}`);
   console.log(`b:${b}`);
   
  const colors=["red","green","blue","mahron"];    //to swap to elements in an array
  [colors[0],colors[3]]=[colors[3],colors[0]];
  console.log(colors);
 
 //Assign array elements to variables
 const colors=["red","green","blue","black","white","purple"];
 const[firstcolor,secondcolor,thirdcolor,...additionalcolors]=colors;
 console.log(firstcolor);
 console.log(secondcolor);
 console.log(thirdcolor);
 console.log(additionalcolors);

  
 const person1={
    firstName:"Zaroon",
    lastName:"Aleem",
    age:20,
    job:"CTO",
 }
const{firstName,lastName,age,job}=person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

function displayperson({firstName,lastName,age,job}){
    console.log(`Name:${firstName} ${lastName}`);
    console.log(`Age:${age} `);
    console.log(`Job:${job} `);
    

}
const person2={
    firstName:"Syed",
    lastName:"Tirmizi",
    age:21,
 }
 const{firstName,lastName,age,job=`unemployed`}=person2;
 console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
displayperson(person2);

//Nested objects are the objects inside another object with their own specifications
const person={
    fullName:"Syed Zaroon",
    age:20,
    isStudent:true,
    hobbies:["cooking","writing","traveling"],
    Address:{
        Town:"Sudhum",
        City:"Mardan",
        Country:"Pakistan",
    }
}
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
console.log(person.Address.Town);
console.log(person.Address.City);
console.log(person.Address.Country);
//const[firsthooby,secondhooby,thirdhooby]=person.hobbies;
//console.log(firsthooby);
for(const properties in person.Address){
    console.log(person.Address[properties]);
}
for(const items in person){
    console.log(person[items]);
}

class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
    }
}
class Address{
    constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}
const person1=new Person("syed zaroon",20,"Nasirg bagh road #1","Peshawar","Pakistan");
console.log(person1.address.street);
 
const fruits=[{name:"apple",color:"red",calories:111},
    {name:"orange",color:"yellow",calories:110},
    {name:"cherry",color:"red",calories:67}];
  //  console.log(fruits[0].name);
  fruits.push({name:"strawberry",color:"blood red",calories:46});
  fruits.pop();
//  fruits.splice(0,2);

  //console.log(fruits);
//fruits.forEach(fruit=> console.log(fruit.name));
const fruitNames=fruits.map(fruit=> fruit.name);
const fruitColor=fruits.map(fruit=> fruit.color);
const fruitCalories=fruits.map(fruit=> fruit.calories);
console.log(fruitNames);
console.log(fruitColor);
console.log(fruitCalories);
const redFruits=fruits.filter(fruit=> fruit.color==="red");
console.log(redFruits);
const lessCaloryFruits=fruits.filter(fruit=> fruit.calories<100);
console.log(lessCaloryFruits);
const maxCalfruit=fruits.reduce((accumalator,element)=> element.calories>accumalator.calories ? element:accumalator);
console.log(maxCalfruit);


const fruits=["apple","orange","cherry"];
fruits.sort();
console.log(fruits);

const numbers=[0,10,3,4,9,7,8,6,5,1,2];
numbers.sort((a,b)=>a-b);
console.log(numbers);
*/
const people=[{name:"Aleem",age:20,gpa:3.6},
    {name:"zaroon",age:24,gpa:3.0},
    {name:"syed",age:29,gpa:3.9},
    {name:"tirmizi",age:10,gpa:4}];
    //people.sort((a,b)=>b.gpa-a.gpa);
    people.sort((a,b)=>a.name.localeCompare(b.name));
    console.log(people);
