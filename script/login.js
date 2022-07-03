var button = document.querySelector("#btn-ca");
button.addEventListener("click", createAccount);

document.querySelector("#btn-si").addEventListener("click",signIn);

function createAccount(){
    var userCreds = JSON.parse(localStorage.getItem("userCreds"))|| [];
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#sign-email").value;
    var crtpass = document.querySelector("#crt-pwd").value;
    var cfmpass = document.querySelector("#cfm-pwd").value;

    if(crtpass == cfmpass && crtpass !== ""){
        if(name !== "" && email !== ""){
            var obj={
                name: name,
                email: email,
                pass : crtpass
            }
            userCreds.push(obj);
            localStorage.setItem("userCreds",JSON.stringify(userCreds));
            alert("Account Created");
        }
        else{
            alert("Please Name & Email cannot be empty");
        }
        document.querySelector("#name").value = "";
        document.querySelector("#sign-email").value = "";
        document.querySelector("#crt-pwd").value = "";
        document.querySelector("#cfm-pwd").value = "";
        document.querySelector("#checkbox").checked = false;
    }
    else if(crtpass != cfmpass){
        alert("Passwords do not match");
    }
    else{
        alert("Password cannot be empty")
    }

}

function signIn(){
    var email = document.querySelector("#log-email").value;
    var pass = document.querySelector("#log-pwd").value;
    var userCreds = JSON.parse(localStorage.getItem("userCreds")) || []
    for(var i = 0; i < userCreds.length; i++){
        if(email == userCreds[i].email && pass == userCreds[i].pass){
            alert("Logged in Successfully");
            localStorage.setItem("userName", userCreds[i].name);
            window.location.href = "/Overstock-Clone/index.html";
            break;
        }
        else if(i == userCreds.length - 1){
            alert("Wrong Credentials");
        }
    }
}