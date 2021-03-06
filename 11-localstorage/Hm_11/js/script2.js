let logined_user;
window.onload = getData;

function getData()
{
    let data = localStorage.getItem("user");
    logined_user = JSON.parse(data);
   // document.getElementById("user-welcome")[0].value = logined_user.name;
    document.getElementById("user-welcome").innerText += " "+logined_user.name;
    document.getElementById("circle").innerText = logined_user.name[0].toUpperCase();
}

function ShowUserProfile()
{
    let data = localStorage.getItem("user");
    logined_user = JSON.parse(data);
    document.getElementById("profile_name").value = logined_user.name;
    document.getElementById("profile_email").value = logined_user.email;
    document.getElementById("profile_login").value = logined_user.login;
    document.getElementById("profile_pswd").value = logined_user.password;
}