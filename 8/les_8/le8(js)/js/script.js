document.querySelector("a.btn").addEventListener("click", (e) => {
    // document.querySelector("img").src="img/1.jpg";

    let img = document.createElement("img");
    img.alt ="";
    img.setAttribute("data-active", true);
    img.setAttribute("src", "img/1.jpg");
    let active = img.getAttribute("data-active");
    if(active=="true")
    {
        img.className+="shadow-lg p-3 mb-5 bg-white rounded";
    }

    // let img = document.querySelector("img");
    // img.setAttribute("src", "img/1.jpg");
    // let active = img.getAttribute("data-active");
    // if (active) {
    //     img.className += "shadow-lg p-3 mb-5 bg-white rounded";
    // }
    //e.target.before()
e.target.previousElementSibling.append(img);

    // document.querySelector("img").width="30%";
});

document.body.addEventListener("click", testEvents);

function testEvents(event) {
    // console.dir(event.tar    get);
    let span = document.createElement("span");
    span.style.left = event.clientX + "px";//`translate(${event.clientX}, ${event.clientY})`;
    span.style.top = event.clientY + "px";//`translate(${event.clientX}, ${event.clientY})`;
    document.body.appendChild(span);
    // document.body.prepend(span);
}

//node.before(el) -> insert el before node
//node.after(el) -> insert el after node
//node.prepend(el) -> insert el at the begining of the node (the first node)
//node.append(el) -> insert el to the tail of the node