export function init() {
    // const openMain = document.querySelectorAll('.main-open')
    // openMain.forEach(el => {
    //     el.addEventListener('click', () => {

    //     })
    // })

    const section = document.querySelectorAll('.wrapper>section')
    const logo = document.querySelector('.header__logo')

    const rout = document.querySelectorAll('.rout')
    // rout.forEach(el => {
    //     el.addEventListener('click', () => {
    //         main.classList.remove('active')
    //         category.classList.add('active')
    //     })
    // })
    for (let i = 0; i < rout.length; i++) {
        rout[i].addEventListener('click', function () {
            for (let j = 0; j < section.length; j++) {
                section[0].classList.remove('active')
                section[1].classList.add('active')
            }
        })
    }

    logo.addEventListener('click', function () {
        for (let j = 0; j < section.length; j++) {
            section[0].classList.add('active')
            section[1].classList.remove('active')
        }
    })
}