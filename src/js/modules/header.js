export function init() {
    function language() {

        const headerBtn = document.querySelectorAll('.header__lang-toggle-btn')

        headerBtn?.forEach(el => {
            el.addEventListener('click', () => {
                headerBtn?.forEach(all => { all.classList.remove('active') })
                el.classList.add('active')

                const img = el.getAttribute('img-path')
                document.querySelector('.header__lang-title img').setAttribute('src', img)
                document.querySelector('.header__lang-title source').setAttribute('srcset', img)
                const languageText = el.querySelector('p').innerHTML
                document.querySelector('.header__lang-title p').innerHTML = languageText
            })
        })

    }
    language()

    function menu() {
        let burgerBtn = document.querySelector('.header__menu');
        let exitBtn = document.querySelector('.menu__exit');
        let menu = document.querySelector('.menu');
        let overlay = document.querySelector('.overlay');
        let body = document.querySelector('body');

        burgerBtn.addEventListener('click', function () {
            menu.classList.add('active');
            overlay.classList.add('active');
            body.classList.add('active');
        })

        exitBtn?.addEventListener('click', function () {
            menu.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('active');
        })

        overlay.addEventListener('click', function () {
            menu.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('active');
        })
    }
    menu()
}