//let age;
//age=window.prompt(`enter  your age`);
//age=Number(age);
//age+=1;
//console.log(`age is:${age}`, typeof age);
//let name;
//let id;
//let bad;
//name=`burger`;
//name=Boolean(name);
//console.log(name,typeof name);
//name=String(name);
//console.log(name,typeof name);
//name=Number(name);
//console.log(name, typeof name);
let  radius;
const pi=3.14;

let circumference;
//radius=12;
//pi=3.14;
//circumference=pi* radius;
//console.log(`cicumference  is:${circumference}`);
//pi=3.14;
//radius=window.prompt(`type the radius`);
//radius=Number(radius);
//circumference=pi*radius;
//console.log(`circumference is:${circumference}`);

document.getElementById(`snd`).onclick= function(){
    radius=document.getElementById(`ist`).value;
    radius=Number(radius);
    circumference=2*pi*radius;
    console.log(`circumference is  :${circumference}`);
    document.getElementById(`nothing`).textContent=`Circumference:${circumference} cm `;
    
}

