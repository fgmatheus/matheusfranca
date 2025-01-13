let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

// Garante que o primeiro slide e texto estejam visíveis ao carregar
document.addEventListener('DOMContentLoaded', () => {
    items[active].classList.add('active');
    dots[active].classList.add('active');
});

// Intervalo para troca automática de slides
let refreshInterval = setInterval(() => {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}, 8000);

function reloadSlider() {
    // Move o slider para o slide ativo
    slider.style.left = -items[active].offsetLeft + 'px';

    // Atualiza a classe "active" no item anterior
    document.querySelector('.slider .item.active')?.classList.remove('active');
    items[active].classList.add('active');

    // Atualiza a classe "active" no ponto (dot) anterior
    document.querySelector('.slider .dots li.active')?.classList.remove('active');
    dots[active].classList.add('active');

    // Reinicia o intervalo de troca automática
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }, 8000);
}

// Adiciona evento de clique nos pontos (dots)
dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});

// Atualiza o slider no redimensionamento da janela
window.onresize = function(event) {
    reloadSlider();
};

/* ---------- */

let back_to_top = document.querySelector('.top');
      
back_to_top.addEventListener('click', function (e) {
window.scrollTo({
    top: 0,
    left: 0,
    });
});