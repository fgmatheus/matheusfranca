/* BANDEIRAS */
const flags = {
    uk: document.querySelector('.flag_uk'),
    es: document.querySelector('.flag_es'),
    pt: document.querySelector('.flag_pt')
};

const textElements = {
    uk: document.querySelectorAll('.ingles, .nav-uk'),
    es: document.querySelectorAll('.espanhol, .nav-es'),
    pt: document.querySelectorAll('.portugues, .nav-pt')
};

function changeLanguage(languageCode) {
    // Definir opacidade para todas as bandeiras
    for (const flag of Object.values(flags)) {
        flag.style.opacity = '0.3';
    }
    flags[languageCode].style.opacity = '1';

    for (const lang of Object.keys(textElements)) {
        for (const element of textElements[lang]) {
            if (lang === languageCode) {
                element.classList.add('block');
                element.classList.remove('hiide');
            } else {
                element.classList.add('hiide');
                element.classList.remove('block');
            }
        }
    }
}

flags.uk.addEventListener('click', () => {
    changeLanguage('uk');
});

flags.es.addEventListener('click', () => {
    changeLanguage('es');
});

flags.pt.addEventListener('click', () => {
    changeLanguage('pt');
});


        /* Troca de Aba */

        let docTitle = document.title;
        window.addEventListener("blur", ()=>{
            document.title = "Come Back ;(";
        });
        
        window.addEventListener("focus", ()=>{
            document.title = docTitle;
        })


/* card */

let items = document.querySelectorAll('.card');
console.log(items);
items.forEach(item => {
    item.addEventListener('mousemove', (e)=>{
        let positionPx = e.x - item.getBoundingClientRect().left;
        let positionX = (positionPx / item.offsetWidth) * 100;
        console.log(positionX, positionPx);

        let positionPy = event.y - item.getBoundingClientRect().top;
        let positionY = (positionPy / item.offsetHeight) * 100;

        
        item.style.setProperty('--rX', (0.5)*(50 - positionY) + 'deg');
        item.style.setProperty('--rY', -(0.5)*(50 - positionX) + 'deg');
    })
    item.addEventListener('mouseout', ()=>{
        item.style.setProperty('--rX', '0deg');
        item.style.setProperty('--rY', '0deg');
    })
})


/*  */

/* PRATOS */


document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-button');
    const categoryContents = document.querySelectorAll('.category-content');

    categoryButtons.forEach(button => {
        button.style.opacity = '0.6';

        button.addEventListener('click', () => {
            categoryButtons.forEach(b => {
                b.style.opacity = '0.6';
            });

            button.style.opacity = '1';

            const selectedCategory = button.getAttribute('data-category');
            categoryContents.forEach(content => {
                if (content.classList.contains(selectedCategory)) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    const defaultCategoryButton = document.querySelector('.category-button[data-category="projetoUm"]');
    defaultCategoryButton.style.opacity = '1';

    // Mostrar apenas as informações dos pratos principais por padrão
    const pratoPrincipalContent = document.querySelector('.category-content.projetoUm');
    categoryContents.forEach(content => {
        if (content === pratoPrincipalContent) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
