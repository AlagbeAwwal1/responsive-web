const ham = document.querySelector(".ham")
const modal = document.querySelector(".modal")


ham.addEventListener('click', () => {
    modal.classList.toggle('active')
})