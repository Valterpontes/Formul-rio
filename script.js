document.querySelectorAll('.opcaoQuery input').forEach(input => {
    input.addEventListener('change', function () {
        
        //remove a classe 'selected' das opçoes
        document.querySelectorAll('.opcaoQuery').forEach(label => {
            label.classList.remove('selected');
        });

        //adiviona a classe 'selected ao label correspondente

        if (this.checked) {
            this.parentElement.classList.add('selected');
        }

    })
})

// Seleciona o botão e a div popup
const submitButton = document.getElementById('submitButton');
const popup = document.getElementById('popup');

// Adiciona um evento de clique ao botão
submitButton.addEventListener('click', () => {
    // Altera o estilo da div popup para exibir
    popup.style.display = 'block';
});