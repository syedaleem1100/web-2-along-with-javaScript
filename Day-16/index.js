/*
const person1={
    name:"Aleem",
    favfood:"Pulao",
    greetings:function(){
        console.log(`Hai chatgpt i'm ${person1.name}`);
    },
    eat:function(){
        console.log(`${this.name} is eating ${this.favfood}`);
    }
}
person1.eat();

function Car(model,company,color,origin,make){
    this.model=model,
    this.company=company,
    this.color=color,
    this.origin=origin,
    this.make=make,
    this.drive=function(){
        console.log(`He's driving  ${model} car`);
    }
}
const car1=new Car("Mustang","GrantWolf","white","Pukhtunkhawa",2025);
const car2=new Car("Chevrolet","Grantwolf","blue","Pukhtunkhawa",2025);
console.log(car1.model);
console.log(car1.company);
console.log(car1.color);
console.log(car1.origin);

console.log(car2.model);
console.log(car2.company);
console.log(car2.color);
console.log(car2.origin);
car1.drive();
car2.drive();

class Products{
    constructor(name,price){
        this.name=name,
        this.price=price
    }
    displayproduct(){
        console.log(`Product:${this.name}`);
        console.log(`Price:${this.price}`);
    }
    totalcalulate(GST){
        return this.price+(GST*this.price);
    }
}
const GST=0.05;
const Product1=new Products(`tshirt`,19.99);
Product1.displayproduct();
const total=Product1.totalcalulate(GST);
console.log(`Total price(with  GST):${total.toFixed(2)}`);

class Products{
    constructor(name,price){
        this.name=name,
        this.price=price
    }
    displayproduct(){
        console.log(`Product:${this.name}`);
        console.log(`price:${this.price}`);
    }
    caltotalprice(GST){
        return this.price+(GST*this.price);
    }
}
const GST=0.05;
const Product1=new Products(`Shalwar`,29.01);
Product1.displayproduct();
const total=Product1.caltotalprice(GST);
console.log(`Total price(with GST):${total.toFixed(2)}`);
console.log(Products.name);


class cal{
    static PI=3.14;
    static diameter(radius){
        return radius*2;
    }
    static circumference(radius){
        return 2*this.PI*radius;
    }
}
console.log(cal.PI);
console.log(cal.diameter(10));
console.log(cal.circumference(9));
*/
class User{
    static usercount=0;
    constructor(username){
        this.username=username;
        User.usercount++;
    }
    static count(){
        console.log(`Hai there are ${this.usercount} persons online`);
    }
    greetings(){
        console.log(`Hi my username  is${this.username}`);
    }
}

const user1=new User("Zaroon");
const user2=new User("Aleema");
console.log(user1.username);
console.log(user2.username);
user1.greetings();
console.log(User.usercount);
User.count();