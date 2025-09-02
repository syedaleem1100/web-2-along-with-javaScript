function updateTime(){
    const current= new  Date();
    let hours=current.getHours();
    const meridiem=hours>=12 ? "PM":"AM";
    hours=hours%12 || 12;
    hours=hours.toString().padStart(2,0)
    const minutes=current.getMinutes().toString().padStart(2,0);
    const seconds=current.getSeconds().toString().padStart(2,0);
    const timeString=`${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById(`clock`).textContent=timeString;
}

updateTime();
setInterval(updateTime,1000);