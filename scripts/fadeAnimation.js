let mainTitle = document.getElementById('hero-page-title')
let mainDesc = document.getElementById('hero-page-desc')

window.addEventListener('scroll', () => {
    let conPos = content.getBoundingClientRect().top;
    let scrPos = window.innerHeight / 2;    
    if(conPos < scrPos) {
        // mainTitle.classList.add('hero-active')
        mainTitle.style.animationName = 'title-card-fade'
    } else {
        mainTitle.classList.remove('hero-active')
    }
})
