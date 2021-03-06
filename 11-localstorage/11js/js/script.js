//BOM
//setTimeout
//setInterval

// setTimeout(() => {
//     console.log("hello from settimeout");
// }, 2000);

// let i = 0;

// let interval = setInterval(() => {
//     console.log(i++);
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval);
// }, 5000);

// const url = "https://jsonplaceholder.typicode.com/posts";

// let button = document.querySelector("#getButton");

// button.addEventListener("click", test3);

// function test1() {
//     let xhr = new XMLHttpRequest();
//     //GET POST
//     //PUT DELETE
//     xhr.open("GET", url);
//     xhr.send();
//     xhr.onload = () => {
//         // console.log(xhr.response);
//         let items = JSON.parse(xhr.response);
//         initCards(items, 10);
//     }
// }

// function test2() {
//     fetch(url).then(response => {
//       return response.json();
//     }).then(data=>
//         {
//             initCards(data, 5);
//     }).catch()
// }

// async function test3()
// {
//     let response = await fetch(url);
//     let data = await response.json();
//     initCards(data,3);
// }

// function initCards(items, count) {
//     items.length = count;
//     let cards = items.map(item => {
//         let div = document.createElement("div");
//         div.classList.add("card");
//         let cardBody = document.createElement("div");
//         cardBody.classList.add("card-body");
//         div.append(cardBody);
//         let title = document.createElement("h4");
//         title.classList.add("card-title");
//         title.innerText = item.title;

//         cardBody.append(title);

//         return div;
//     })

//     cards.forEach(element => {
//         document.querySelector("#allPosts").append(element);
//     });
// }



/*<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */


const url1 = "https://leafletjs.com/reference-1.7.1.html#map-example";
const url2 = "https://api.privatbank.ua/#p24/atm";
const url3 = "https://api.privatbank.ua/p24api/infrastructure?json&atm&address=&city=";

let seacrchBtn = document.getElementById("getTerminals");

let table = document.getElementById("resalt-table");

seacrchBtn.addEventListener("click", GetBankInfo);

async function GetBankInfo() {
    let readyurl = url3 + document.getElementById('usercity').value;
    let response = await fetch(readyurl);
    let data = await response.json();
    initTable(data);
}


function initTable(items) {
    console.log(items);
    let cards = items.devices.map(item => {
        let div = document.createElement("div");
        div.classList.add("one-res");
        let cardp = document.createElement("p");
        cardp.innerText = item.fullAddressEn;
        div.append(cardp);
        let cardbutton = document.createElement("button");
        div.append(cardbutton);

        return div;
    })

    cards.forEach(element => {
        document.querySelector("resalt-table").append(element);
    })
}

    //         cardBody.classList.add("card-body");
    //         div.append(cardBody);
    //         let title = document.createElement("h4");
    //         title.classList.add("card-title");
    //         title.innerText = item.title;

    //         cardBody.append(title);

    //         return div;
    //     })

    //     cards.forEach(element => {
    //         document.querySelector("#allPosts").append(element);

