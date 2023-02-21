export function init() {
    function language(){

        const headerBtn = document.querySelectorAll('.header__lang-toggle-btn')

        headerBtn?.forEach(el => {
            el.addEventListener('click',() => {
                headerBtn?.forEach(all => {all.classList.remove('active')})
                el.classList.add('active')

                const img = el.getAttribute('img-path')
                document.querySelector('.header__lang-title img').setAttribute('src',img)
                document.querySelector('.header__lang-title source').setAttribute('srcset',img)
                const languageText = el.querySelector('p').innerHTML
                document.querySelector('.header__lang-title p').innerHTML = languageText
            })
        })

    }
    language()
    
    function menu(){

    }
    menu()
}