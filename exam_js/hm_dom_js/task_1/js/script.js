function ShowResalt(book, quality, name, address, date, comment) {
    let res = document.getElementById("resalt");
    let header = document.createElement("p");
    header.innerText = "Resalt: ";
    let main_text = document.createElement("p");
    main_text.innerText = `${name}, thanks for the order! <br /><br /> Book "${book} will
    be delivered on ${date} to ${address}."`;
    main_text.style="border: 1px solid white; padding: 10px";
    res.append(header);
    res.append(main_text);
}

function SelectBook(b)
{
    document.getElementById("choosen-book").value = b;
}