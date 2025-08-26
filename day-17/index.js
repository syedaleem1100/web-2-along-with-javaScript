/*
class Animal{
    alive=true;
    eat(){
        console.log(`this ${this.name} is eating`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name="Rabbit";
    Run(){
        console.log(`this ${this.name} is  Running`);
    }
}
class Fish extends Animal{
    name="Fish";
    Swim(){
        console.log(`this ${this.name} is  swimming`);
    }
}
const hargosh=new Rabbit();
const mahisheer=new Fish();
mahisheer.Swim();
mahisheer.sleep();
hargosh.Run();
console.log(hargosh.alive);
hargosh.eat();


class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`this ${this.name} move at a speed of ${speed}`);
    }

}
class Rabbit extends Animal{
    constructor(name,age,Runspeed){
        super(name,age);
        this.Runspeed=Runspeed;
    }
    run(){
        console.log(`this ${this.name} can run`);
        super.move(this.Runspeed);
    }

}
class Fish extends Animal{
    constructor(name,age,swimspeed){
        super(name,age);
        this.swimspeed=swimspeed   ;
    }
    swim(){
        super.move(this.swimspeed);
    }

}
class Hawk  extends Animal{
    constructor(name,age,flyspeed){
    super(name,age);
    this.flyspeed=flyspeed;
    }
    fly(){
        super.move(this.flyspeed);
    }

}
const rabbit=new  Rabbit("rabbit",2,20);
const fish=new Fish("fish",3,30);
const hawk=new Hawk("hawk",5,13);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.Runspeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flyspeed);

rabbit.run();
fish.swim();
hawk.fly();

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    set width(newWidth){
        if(newWidth>0){
        this._width=newWidth;
        }
        else{
            console.log(`the width  must be a positive number`);
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;
        }
        else{
            console.log(`the height must also be a postive number`);
        }
    }
    get width(){
        return `${this._width.toFixed(1)} cm`;
    }
    get height(){
        return `${this._height.toFixed(1)} cm`;
    }
    get area(){
        return  `${(this._width*this._height).toFixed(1)} cm^2`;
    }

}

const rectangle=new Rectangle(444322,444);
rectangle.width=5;
rectangle.height=2;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
*/
class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    set firstname(newFirstname){
        if(typeof newFirstname==="string" && newFirstname.length>0){
            this._firstname=newFirstname;
        }
        else{
            console.error(`the name  should be precised and non empty`);
        }
    }
    set lastname(newLastname){
        if(typeof newLastname==="string" && newLastname.length>0){
            this._lastname=newLastname;
        }
        else{
            console.error(`the name  should be precised and non empty`);
        }
    }
    set age(newAge){
        if(typeof newAge==="number" && newAge>=0){
            this._age=newAge;
        }
        else{
            console.error(`the age must be appropriate number`);
        }
    }
    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get age(){
        return this._age;
    }
    get fullname(){
        return this._firstname +" "+ this._lastname;
    }
}
const human=new  Person("Aleem","Zarron",20);

console.log(human.firstname);
console.log(human.lastname);
console.log(human.fullname);
console.log(human.age);

