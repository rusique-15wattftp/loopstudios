const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

clickHandler = () => {
    menuBtn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

menuBtn.addEventListener('click', clickHandler)
