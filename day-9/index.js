//const fullname=`Syed Aleem`;
//let firstname=fullname.slice(0, fullname.indexOf(` `));
//let lastname=fullname.slice(fullname.indexOf(` `)+1)



//console.log(`firstname:${firstname}`);
//console.log(`lastname:${lastname}`);
//const email=`aleem1@gmail.com`;
//let  username=email.slice(0,email.indexOf(`@`));
//let  extension=email.slice(email.indexOf(`@`));          //String  Slicing
//console.log(`username:${username}`);
//console.log(`extension:${extension}`);

//let username=window.prompt(`Enter  User name`);
//username=username.trim();                             //without using of chain Method
//let letter=username.charAt(0);
//letter=letter.toUpperCase();
//let otherchars=username.slice(1);
//otherchars=otherchars.toLowerCase();
//username=letter + otherchars;
//console.log(username);
//let username=window.prompt(`Enter  User name`);
//username=username.trim();
//let firstletter=username.charAt(0);
//firstletter=firstletter.toUpperCase();
//let lastletters=username.slice(1);
//lastletters=lastletters.toLowerCase();
//username=firstletter+lastletters;
//console.log(username);
//let username=window.prompt(`Enter User  Name`);
//username=username.trim();
//let onlyletters=/^[A-Za-z]+$/;
//if(onlyletters.test(username)){
 //   let istletter=username.charAt(0);
//    istletter=istletter.toUpperCase();
//    let  extraletters=username.slice(1);
//    extraletters=extraletters.toLowerCase();
//    username=istletter+extraletters;
//    console.log(username);
//}
//else{
//
//    console.log(`User  name should be only  in letters not the  numbers or any special chars try again!`)
//}
//let  username=window.prompt(`Enter your  user name`);
//username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
//console.log(username);
//let checking=/^[A-Za-z]+$/;
//if(checking.test(username)){
//    username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
//    console.log(username);
//}
//else{
 //   console.log(`numbers and special  letters are not allowed`);
//}
//const temp=60;
//if(temp>0 &&  temp<=30){
//    console.log(`the weather  is  good`);
//}
//else{
//    console.log(`the  weather  is not good`);
//}
//if(temp<=0 || temp>=30){
//    console.log(`the weather is not good`);
//}
//else{
//    console.log(`the  weather is  good`);
//}
//const sunny=true;
//if(!sunny){
//    console.log(`the weather is  sunny`);
//}
//else{
//    console.log(`the weather  is not  sunny`);
//}
//const PI=3.14;
//if(PI===`3.14`){
//    console.log(`this is  PI`);
//}
//else{
//    console.log(`It is not  PI`);
//}
//let username=``;
//while(username===`` || username===null){
 //   username=window.prompt(`enter username`);
//}
//console.log(username);
//let username;
//do{
//    console.log(`enter  the name`);
//    window.prompt(`Enter  user name`);
//}
//while(username===`` ||  username===null)
//    console.log(username);
//let loggedin=false;
//let username;
//let  password;
//while(!loggedin){
//    username=window.prompt(`Enter  the  username`);
//    password=window.prompt(`Enter the password`);
//    if(username===`PMYLS` && password===`grantwolf`){
//        loggedin=true;
//        console.log(`You're loggedin`);
//    }
//    else{
//        console.log(`invalid credentials`);
//    }
//}
//let loggedin=false;
//let username;
//let  password;
////do{
//username=window.prompt(`Enter  the  username`);
  //  password=window.prompt(`Enter the password`);
//    if(username===`PMYLS` && password===`grantwolf`){
  //      loggedin=true;
   //     console.log(`You're loggedin`);
   // }
  //  else{
 //       console.log(`invalid credentials`);
 //   }
//}
//while(!loggedin);

for(let i=0;i<10;i++){
    if(i==5){
        break;
    }
    else{
        console.log(i);
    }
}















