console.log("hai! i don't know who i'm");
console.log("the last mountain");

window.onload = function () {
    document.body.addEventListener("click", handleStart);
    document.body.addEventListener("touchstart", handleStart);

    function handleStart() {
        alert("Disclaimer! See your router");

        document.body.style.backgroundImage = "url('fsociety.jpg')";
        document.body.style.backgroundSize = "cover";

        document.getElementById("first").textContent = "Got Hacked";
       

        const audio = document.getElementById("bg-audio");
        audio.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((err) => {
                console.log("Audio play failed:", err);
            });

        // Remove listeners so it runs only once
        document.body.removeEventListener("click", handleStart);
        document.body.removeEventListener("touchstart", handleStart);
        

    }
    
};










