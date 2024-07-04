document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-button');
    const categoryContents = document.querySelectorAll('.category-content');

    function applyAnimation(button) {
        if (!button.classList.contains('active')) {
            button.style.transition = 'transform 0.5s ease-in-out';
            button.style.transform = 'scale(0.9)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 500);
        }
    }

    // Adiciona evento de clique aos botões
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Oculta todos os conteúdos de categoria
            categoryContents.forEach(content => {
                content.style.display = 'none';
            });

            // Exibe o conteúdo da categoria selecionada
            const selectedCategory = button.getAttribute('data-category');
            document.querySelector(`.category-content.${selectedCategory}`).style.display = 'flex'; /* BLOCK */

            // Atualiza a classe 'active' para o botão clicado
            categoryButtons.forEach(b => {
                b.classList.remove('active');
            });
            button.classList.add('active');

            // Aplica animação ao clicar no botão
            applyAnimation(button);
        });
    });

    // Executa a animação a cada 5 segundos
    setInterval(() => {
        categoryButtons.forEach(button => {
            applyAnimation(button);
        });
    }, 4000);

    // Aplicar animação inicial
    applyAnimation(categoryButtons[0]); // Aplica a animação ao primeiro botão

    // Clicar no botão "Prato Principal" por padrão
    const defaultCategoryButton = document.querySelector('.category-button[data-category="pratoPrincipal"]');
    defaultCategoryButton.click(); // Simula o clique no botão "Prato Principal"
});

        /*  */
        
let back_to_top = document.querySelector('.top');
      
back_to_top.addEventListener('click', function (e) {
window.scrollTo({
    top: 0,
    left: 0,
    });
});