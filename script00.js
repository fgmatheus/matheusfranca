document.addEventListener("DOMContentLoaded", function () {
    var nav = document.getElementById("nav");
    var navHeight = nav.offsetHeight;
    var additionalSpace = 100; // Ajuste o valor conforme necessário
    var lastScrollTop = 0;
    var isScrollingDown = false;

    window.onscroll = function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll para baixo
            isScrollingDown = true;
        } else {
            // Scroll para cima
            isScrollingDown = false;
        }

        if (isScrollingDown && scrollTop > navHeight + additionalSpace) {
            // Scroll para baixo e a posição de rolagem é maior que a altura do nav mais o espaço adicional
            nav.classList.add("nav-fixed");
            setTimeout(function () {
                nav.classList.add("visible");
            }, 0); // Adiciona a classe "visible" após o layout ser recalculado
        } else if (!isScrollingDown && scrollTop === 0) {
            // Scroll para cima e a posição de rolagem é zero (topo da página)
            nav.classList.remove("nav-fixed", "visible");
        } else {
            // Se não estiver rolando para baixo e não estiver no topo, remova a classe "visible"
            nav.classList.remove("visible");
        }

        lastScrollTop = scrollTop;
    };
});

/*  */ /*  */

let back_to_top = document.querySelector('.back_to_top');
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
          back_to_top.classList.add('show');
        } else {
          back_to_top.classList.remove('show');
        }
      });
      back_to_top.addEventListener('click', function (e) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      });