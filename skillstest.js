//JavaScript Login & Login Attempts

let attempts = 0;
const MAX_ATTEMPTS = 3;
let authenticated = false;

function Login() {
    
    while (attempts < MAX_ATTEMPTS && !authenticated) {
        let Username = document.getElementById("Username").value;
        let Password = document.getElementById("Password").value;

        if (Username === "Miishka Eugenio" && Password === "121610") {
            authenticated = true;
            window.location.href = "notebooks.html";
            return;
        } else {
            attempts++;
            document.getElementById("output").innerHTML = 
                "Invalid. Attempt " + attempts + " of " + MAX_ATTEMPTS;
            
            //
            if (attempts === MAX_ATTEMPTS) {
                document.getElementById("output").innerHTML = "Try Again Later!";
                document.getElementById("Username").disabled = true;
                document.getElementById("Password").disabled = true;
            }
            break;
        }
    }
}
