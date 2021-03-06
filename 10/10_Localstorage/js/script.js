window.onload = getData; //заповнення при завантажені
let tableonpage = document.getElementById("our_table");
let users = [];

function getData() {

    if (users != null) {
        users = [];
    }

    let data_ctn = localStorage.getItem("arr");
    users = JSON.parse(data_ctn);
    console.log(users);

    initTable();
}

function initTable() {
    //alert("work");
    // alert(users.length);
    let start=0;
    try {
        
        var rowCount = 0;
        var rows = tableonpage.getElementsByTagName("tr");
        for (var i = 0; i < rows.length; i++) {
            if (rows[i].getElementsByTagName("th").length > 0) {
                rowCount++;
            }
        }
        start=rowCount;

        //or
        //tableonpage.remove();
        //tableonpage.innerHTML+"<table id='our_table'> <tr class='orange'><th>Name</th> <th>Email</th><th>Phone</th></tr>";
        //tableonpage.innerHTML+="</table>";
    }
    catch (error) { }
    //alert("3 yes");
    if (users != null) {
        for (let i = rowCount; i < users.length; i++) {
            tableonpage.innerHTML += `<tr><th>${users[i].name}</th><th>${users[i].email}</th><th>${users[i].phone}</th><tr>`;
        }
        
    }
}

function setData() {
    var name = document.getElementById("user_name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var obj = { name: name.value, email: email.value, phone: phone.value }

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