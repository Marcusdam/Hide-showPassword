const input = document.getElementById("passwordInput");
const icon = document.getElementById("eyeIcon");

function iconBtn() {
    if ( input.type === "password"){
        input.type = "text";
        icon.src="images__5_-removebg-preview (1).png";
        
       
    }
    else {
        input.type = "password";
        icon.src= "images__20_-removebg-preview.png";       
    }
}
