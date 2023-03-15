// Navigation
const link = document.querySelectorAll('.link__module')
const hoverReveal = document.querySelectorAll('.hover-reveal__00')
const linkImages = document.querySelectorAll('.hidden-img__00')

for ( let i = 0; i < link.length ; i++){
    link[i].addEventListener("mousemove", (e) => {
        hoverReveal[i].style.opacity = 1;
        hoverReveal[i].style.transform = `translate(-100%, -50%) rotate(0deg)` ;
        linkImages[i].style.transform = 'scale(1.3)'
        hoverReveal[i].style.left = e.clientX + "px"
        link[i].style.zIndex = 44;
    })
    link[i].addEventListener("mouseleave", (e) => {
        hoverReveal[i].style.opacity = 0;
        hoverReveal[i].style.transform = `translate(-50%, -50%) rotate(0deg)` ;
        linkImages[i].style.transform = 'scale(0.8,0.8)'
        hoverReveal[i].style.left = e.clientX + "px"
    })
}
// King kylie section
const link1 = document.querySelectorAll('.link')
const hoverReveal1 = document.querySelectorAll('.hover-reveal')
const linkImages1 = document.querySelectorAll('.hidden-img')

for ( let i = 0; i < link1.length ; i++){
    link1[i].addEventListener("mousemove", (e) => {
        hoverReveal1[i].style.opacity = 1;
        hoverReveal1[i].style.transform = `translate(-100%, -50%) rotate(-5deg)` ;
        linkImages1[i].style.transform = 'scale(1.1)'
        hoverReveal1[i].style.left = e.clientX + "px"
    })
    link1[i].addEventListener("mouseleave", (e) => {
        hoverReveal1[i].style.opacity = 0;
        hoverReveal1[i].style.transform = `translate(-50%, -50%) rotate(6deg)` ;
        linkImages1[i].style.transform = 'scale(0.7,0.7)'
        hoverReveal1[i].style.left = e.clientX + "px"
    })
}

