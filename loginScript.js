let text = document.getElementById("username").value;
let pw = document.getElementById("password").value;

function loginClick(){
    if(text == "UKhira" && pw =="123wes") {
        window.location.href = "https://chat.openai.com/";
        // alert("done")
    }
    else {
        alert("fk");
    }
} 

function clearCllick() {
    text = "";
    outerWidth = "";
}