let applicant;
let address;
let gmail;
let contact;
let course;
document.getElementById(`submission`).onclick=  function(){
    event.preventDefault();
    applicant=document.getElementById(`snd`).value;
    address=document.getElementById(`trd`).value;
    gmail=document.getElementById(`frth`).value;
    contact=document.getElementById(`fifth`).value;
    course=document.getElementById(`selection`).value;
    console.log(`Applicant:${applicant}`);
    console.log(`Address:${address}`);
    console.log(`Email:${gmail}`);
    console.log(`Contact:${contact}`);
    console.log(`Course:${course}`);






}