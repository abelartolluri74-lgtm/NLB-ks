function checkPin() {
    let pin = document.getElementById("pin").value;
    let message = document.getElementById("message");
    let afterLogin = document.getElementById("afterLogin");

    if(pin === "1234") {
        message.style.color = "green";
        message.innerText = "PIN i saktë!";

        // Fsheh PIN box
        document.getElementById("pinBox").style.display = "none";

        // Shfaq pjesën poshtë
        afterLogin.style.display = "block";
    } else {
        message.style.color = "red";
        message.innerText = "PIN i gabuar!";
    }
}