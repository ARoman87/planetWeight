const toggleButton = document.getElementsByClassName("checkButton")[0]
const burgerLinks = document.getElementsByClassName("burgerLinks")[0]

toggleButton.addEventListener("click", () => {
    burgerLinks.classList.toggle("active")

})


 