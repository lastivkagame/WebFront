function ShowSubMenu(elemID, imgID) {
    let container = document.getElementById(elemID);
    let imgbtn = document.getElementById(imgID);

    if (container.style.display == "block") {
        container.style.display = "none";
        imgbtn.src = "img/btn1.png";
    }
    else
    {
        container.style.display = "block";
        imgbtn.src = 'img/btn2.png';
    }
}

function SetImgAndText(arg)
{
    let textID = "text"+arg.slice(-1);
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none";
    let tex = document.getElementById(textID).style.display="block";

    let md = document.getElementById("modal");
    md.classList.remove("modal1");
    md.classList.remove("modal2");
    md.classList.remove("modal3");
    md.classList.add(arg);
}

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
