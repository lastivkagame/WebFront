function show() {
    var block = document.querySelector("div");
    var p = document.querySelector("p");
    //    console.dir(block);
    let clientleft = block.clientLeft;
    let clientTop = block.clientTop;

    let span = document.createElement("span");
    span.innerText = `Client Left ${clientleft}, Client Top ${clientTop}`;

    p.append(span);

    let clientWidth = block.clientWidth;
    let clientHeight = block.clientHeight;

    span = document.createElement("span");
    span.innerText = `Client Left ${clientWidth}, Client Top ${clientHeight}`;

    p.append(span);

}

let header = document.querySelector("header");
let nav = document.querySelector("nav");

window.onscroll = function () {

    if(window.pageYOffset > header.clientHeight)
    {
       nav.classList.add("fixed");
    }
    else
    {
        nav.classList.remove("fixed");
    }
}