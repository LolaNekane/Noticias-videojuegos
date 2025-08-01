document.addEventListener('DOMContentLoaded', () => {

    let marquee = (selector_lista, speed) => {
        
        const lista = document.querySelector(selector_lista);

        let i = 0;

        setInterval(() => {
            lista.style.marginLeft = `-${i}px`;

            if(i > lista.clientWidth) {
                i = 0;
            } 
            
            i = i + speed;


        },0);

    }

    marquee(".marquee__list", 0.1)
})