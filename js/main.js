let opennnn = document.querySelector('.fa-bars');
let ull = document.querySelector('.navbar')

opennnn.onclick = () => {
    ull.classList.toggle("on")
    opennnn.classList.toggle("fa-xmark")
}