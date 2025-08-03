document.addEventListener('DOMContentLoaded', () => {
        
    let mobile_btn = document.querySelector('.navbar__mobile-btn');
    let mobile_menu = document.querySelector('.navbar__mobile-list');

    mobile_btn.addEventListener('click', () => {
        let menu_open = document.querySelector('.menu_open');

        if(!menu_open) {
            mobile_menu.style.display = 'block';
            mobile_menu.classList.add('menu_open');
        } else {
            mobile_menu.style.display = 'none';
            mobile_menu.classList.remove('menu_open');
        }
    });

    const submenu = (boton, submenu, className) => {
        boton.addEventListener('click', () => {
            let drop = document.querySelector('.'+className);

            if(!drop) {
                submenu.style.display = 'block';
                submenu.classList.add(className)
            } else {
                submenu.style.display = 'none';
                submenu.classList.remove(className)
            }
        })
    }


    let dropdown1_btn = document.querySelector('#icon1');
    let dropdown1_subemnu = document.querySelector('#submenu1')

    let dropdown2_btn = document.querySelector('#icon2');
    let dropdown2_subemnu = document.querySelector('#submenu2')


    submenu(dropdown1_btn, dropdown1_subemnu, 'drop1');
    submenu(dropdown2_btn, dropdown2_subemnu, 'drop1');


    // FUNCION REDIMENSIONADO
    window.addEventListener('resize', () => {
        let windows = parseFloat(document.body.clientWidth);

        if(windows > 1024 ) {
            mobile_menu.style.display = 'none';
            mobile_menu.classList.remove('menu_open');
        }
    });
})