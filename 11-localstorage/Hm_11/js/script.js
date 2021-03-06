let users = [];
window.onload = getData;

let login_block = document.getElementById("login_space");
let signin_block = document.getElementById("signin_space");
login_block.style.display = "flex";
signin_block.style.display = "none";

// if (users.length==0) {
//     // alert("work");
//      setData({ name: "user", email: "user@gmail.com", login: "user", password: "1" });
//  }

function getData() {
    let data = localStorage.getItem("arr");
    users = JSON.parse(data);
    //alert(users.length);
}

function setData(obj) {
    //alert("in data");
    if (obj != null) {
        let flag = true;

        if (users != null) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].login == obj.login) {
                    flag = false;
                    break;
                }
            }
        }

        if (flag == true) {

            if (users != null) {
                users.push(obj);
            }
            else {
                users = [];
                users[0] = obj;
            }

            localStorage.setItem("arr", JSON.stringify(users));
            getData();
        }
        else if (obj.login == "user") { }
        else {
            alert("This user already exists!");
        }
    }
}


function ShowSignInSpace() {
    if (login_block.style.display == "flex") {
        login_block.style.display = "none";
        signin_block.style.display = "flex";
    }
    else {
        signin_block.style.display = "none";
        login_block.style.display = "flex";
    }

    if (signin_block.style.display == "none") {
        let name_input = document.getElementById("sign_name").value;
        let email_input = document.getElementById("sign_email").value;
        let login_input = document.getElementsByClassName("login_input")[1].value;
        let psw_input = document.getElementsByClassName("login_pswd")[1].value;

        if (name_input != "" && email_input != "" && login_input != "" && psw_input != "") {
            let new_user = { name: name_input, email: email_input, login: login_input, password: psw_input };
            setData(new_user);
            document.getElementsByClassName("login_input")[0].value = login_input;
            document.getElementsByClassName("login_pswd")[0].value = psw_input;
            name_input = email_input = login_input = psw_input = "";
        }
        else {
            alert("Please fill all!");
        }
    }
}

function LoginUser() {
    if (signin_block.style.display == "flex") {
        ShowSignInSpace();
    }
    else {
        let login_input = document.getElementsByClassName("login_input")[0].value;
        let psw_input = document.getElementsByClassName("login_pswd")[0].value;

        let flag = "0";
        let logined_user;

        if (users != null) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].login == login_input) {
                    if (users[i].password == psw_input) {
                        flag = "1";
                        logined_user = users[i];
                    }
                    else {
                        flag = "2";
                    }
                    break;
                }
            }
        }

        if (flag == "0") {
            alert("This login is not registreted in our system!");
        }
        else if (flag == "2") {
            alert("Inccorect password!");
        }
        else {
           //alert("Welcome!");
           
           localStorage.setItem("user", JSON.stringify(logined_user));
           window.open("../pages/profile.html");
        }
    }
}