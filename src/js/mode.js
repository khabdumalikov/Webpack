
const darkMode = document.querySelector('.header__dark-mode')
const body = document.querySelector('body')

const modeLokal = localStorage.getItem('mode') ? localStorage.getItem('mode') : null
if(modeLokal)
{
    body.classList.add('dark-mode')
}
darkMode.addEventListener("click", () => {
    body.classList.toggle('dark-mode')
    modeLokal ? localStorage.setItem("mode" , "") : localStorage.setItem("mode", "dark")
})