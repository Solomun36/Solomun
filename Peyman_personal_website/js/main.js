// *===== Active toggle button menu and side bar =====*//
let toggle = document.querySelector('.toggle')
const navMenu = document.getElementById('nav-menu')

toggle.onclick = function()
{
    toggle.classList.toggle('active')
    navMenu.classList.toggle('show')
}

// *===== Remover menu =====*//
const navLink = document.querySelectorAll('.nav_link')

function linkAction()
{
    navMenu.classList.remove('show')
    toggle.classList.remove('active')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// *===== Scroll Sections Active Link =====*//
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive()
{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const SectionHeight = current.offsetHeight
        const SectionTop = current.offsetHeight - 50
        SectionId = current.getAttribute('id')

        if(scrollY > SectionTop && scrollY <= SectionHeight)
        {
            document.querySelector('.nav_menu a[href*='+ SectionId +']').classList.add('active')
        }else
        {
            document.querySelector('.nav_menu a[href*='+ SectionId +']').classList.remove('active')
        }
    })
}




