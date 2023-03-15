const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay:400,
    // reset:true
})

sr.reveal(`.nav__item, .nav__link,.site__name,.call-to-action`, {
    origin: "top", delay:600
})
sr.reveal(`.partners, .partner`, {
    origin: "top",
})
sr.reveal(`.partner__name`, {delay: 600, origin:'top'})
sr.reveal(`.big__img`, {delay: 900, origin:'right'})
sr.reveal(`.product__card`, {delay: 600, origin:'bottom'})
sr.reveal(`.middle__of__kpop`, {delay: 800, origin:'top'})
sr.reveal(`.contents__of__left,.bottom__left`, {delay: 700, origin:'left'})

sr.reveal(`.footer`, {delay: 700, origin:'bottom'})
sr.reveal(`.details__of__left__side`, {delay: 800, origin:'left'})
sr.reveal(`.left__side__green img, .shadows__of__feet`, {delay: 800, origin:'bottom'})
sr.reveal(`.right__side__magenta, .wrapper`, {delay: 800, origin:'right'})
sr.reveal(`.little__info__right,.top__right`, {delay: 700, origin:'right'})



let hoverDistort = new hoverEffect({
    parent: document.querySelector(".wrapper"),
    intensity: 0.5,
    image1: '/assets/hover__image/image__of__1',
    image2: '/assets/hover__image/image__of__2',
    displacementImage: '/assets/4.png'
})
