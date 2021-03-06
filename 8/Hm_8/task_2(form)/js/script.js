//let some = document.getElementById("inputname");
let arr = [
    document.getElementById("pswinput"),
    document.getElementById("repswdinput"),
    document.getElementById("inputname"),
    document.getElementById("lastnameinput"),
    document.getElementById("emailinput"),
    document.getElementById("meninput"),
    document.getElementById("womaninput"),
    document.getElementById("robotinput")
];

function RegistrateUser() {

    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].value == "") {
            arr[i].classList.add("red-border");
            flag = true;
        }
    }

    // if (flag == true) {

    //i don`t know why it add class red-border for all but later something delete it ... 
    //but it at least add this class for a second thenfore  I'll pretend that it's what we need 
    //(because i didn't find the reason and just lost a lot time, but if you know why it, please write me)
    // try {
    //     for (let i = 0; i < arr.length; i++) {
    //         try {
    //             arr[i].classList.add("red-border");
    //             //   document.getElementById("inputname").AddClass("red-border");
    //             // arr[i].style.borderColor = "red";
    //             //arr[i].cssText = "border: 3px solid red;";
    //             //AddClass(arr[i]);
    //         }
    //         catch (ex) { console.log(ex) };
    //     }
    // } catch { };

    // arr.forEach(element => {
    //    element.classList.add("red-border");
    //    AddClass(element);
    //    //sleep(3000);
    // });
    // }
    if (flag == false) {
        if (arr[0].value == arr[1].value) {

            if (arr[7].checked == true) {
                document.getElementById("resaltDiv").style.display = "flex";

                try {
                    document.getElementById("nameResalt").value = arr[2].value;

                } catch (error) {
                    console.error(error);
                }

                //document.getElementsByClassName("formResalt")[0].value = arr[2].value;
                //document.getElementsByClassName("formResalt")[1].value = arr[3];
                //document.getElementsByClassName("formResalt")[3].value = arr[4];

                // if (arr[5].checked) {
                //     document.getElementsByClassName("formResalt")[2].value = "male";
                // }
                // else {
                //     document.getElementsByClassName("formResalt")[2].value = "female";
                // }

            }
        }
        else {
            arr[0].classList.add("red-border");
            arr[1].classList.add("red-border");
        }
    }
}