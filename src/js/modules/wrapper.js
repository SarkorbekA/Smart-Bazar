export function init() {
    // const mainOpenBtns = document.querySelectorAll('.mainOpen')
    // const categoryOpenBtns = document.querySelectorAll('.categoryOpen')
    // const contentOpenBtns = document.querySelectorAll('.contentOpen')

    // const wrappers = document.querySelectorAll('.wrapper section')
    // const main = document.querySelector('.main')
    // const category = document.querySelector('.product')
    // const content = document.querySelector('.content')

    // mainOpenBtns.forEach(el => {
    //     el.addEventListener('click', () => {
    //         wrappers.forEach(sec => {
    //             sec.classList.remove('active')
    //         })
    //         main.classList.add('active')
    //     })
    // })

    // categoryOpenBtns.forEach(el => {
    //     el.addEventListener('click', () => {
    //         wrappers.forEach(sec => {
    //             sec.classList.remove('active')
    //         })
    //         category.classList.add('active')
    //     })
    // })

    // contentOpenBtns.forEach(el => {
    //     el.addEventListener('click', () => {
    //         wrappers.forEach(sec => {
    //             sec.classList.remove('active')
    //         })
    //         content.classList.add('active')
    //     })
    // })

    const exitBtn = document.querySelector('.exit');
    const filter = document.querySelector('.products-right');
    const filterBtn = document.querySelector('.card__filter-btn');
    const body = document.querySelector('body');



    exitBtn?.addEventListener('click', () => {
        filter.classList.remove('active');
        body.classList.remove('active');
    });


    filterBtn?.addEventListener('click', () => {
        filter.classList.add('active');
        body.classList.add('active');
    });
}