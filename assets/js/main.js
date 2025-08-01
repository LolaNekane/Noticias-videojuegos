document.addEventListener('DOMContentLoaded', () => {
    let btn_search = document.querySelector('.navbar__button');
    let input_search = document.querySelector('.search__input');


    btn_search.addEventListener('click', (event) => {

        let visible = document.querySelector('.visible');

       if(visible) {
            input_search.style.opacity = '0';
            input_search.style.visibility = 'hidden';
            input_search.classList.remove('visible');
       } else {
            input_search.style.opacity = '1';
            input_search.style.visibility = 'visible';
            input_search.classList.add('visible');
       }
    });
})