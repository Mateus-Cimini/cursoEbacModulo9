

// Esse bloco só executa o código interno quando o documento HTML está totalmente carregado. Em jQuery, isso garante que o script não execute antes dos elementos da página estarem disponíveis para manipulação.
$(document).ready(function() {
    document.querySelector('header button').addEventListener('click', function() {

    })

    // ativa ao clicar em nova imagem
    $('header button').click(function() {
        $('form').slideDown();
    })

    //ativa ao clicar em cancelar
    $('#btnCancel').click(function() {
        
        $('form').slideUp();
    })

    //ativa ao clicar em adicionar
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoImg = $('#inputUrl').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImg}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-img-link">
                <a href="${enderecoImg}" title="Abrir imagem num novo separador" target="_blank">
                Abrir imagem num novo separador
                </a>
            </div>    
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000)
        $('#inputUrl').val('')
    })
})



//Codigo comentado para fazer uma revisao depois

/*

// Esse bloco só executa o código interno quando o documento HTML está totalmente carregado. 
// Em jQuery, isso garante que o script não execute antes dos elementos da página estarem disponíveis para manipulação.
$(document).ready(function() {

    // Seleciona o primeiro botão dentro do <header> e adiciona um ouvinte de evento de clique a ele. 
    // Quando o botão é clicado, executa a função vazia (function() { ... }), que pode ser preenchida com lógica adicional.
    document.querySelector('header button').addEventListener('click', function() {

    });

    // Quando o botão no <header> é clicado, seleciona o formulário e usa o efeito 'slideDown' para exibí-lo com uma animação.
    $('header button').click(function() {
        $('form').slideDown();
    });

    // Quando o botão com o ID 'btnCancel' é clicado, oculta o formulário usando o efeito 'slideUp' para escondê-lo com uma animação.
    $('#btnCancel').click(function() {
        $('form').slideUp();
    });

    // Quando o formulário é enviado (evento 'submit'), a função é chamada.
    $('form').on('submit', function(e) {
        // Previne o comportamento padrão do envio de formulário (não recarrega a página).
        e.preventDefault();

        // Obtém o valor do campo de entrada com o ID 'inputUrl', que contém o link da imagem fornecida pelo usuário.
        const enderecoImg = $('#inputUrl').val();

        // Cria um novo item de lista (<li>) com 'display: none' para ocultá-lo inicialmente.
        const novoItem = $('<li style="display: none"></li>');

        // Insere uma imagem dentro do novo item de lista, usando o link da imagem.
        $(`<img src="${enderecoImg}" />`).appendTo(novoItem);

        // Adiciona uma div overlay com um link para abrir a imagem em uma nova aba.
        $(` 
            <div class="overlay-img-link">
                <a href="${enderecoImg}" title="Abrir imagem num novo separador" target="_blank">
                Abrir imagem num novo separador
                </a>
            </div>    
        `).appendTo(novoItem);

        // Adiciona o novo item de lista (<li>) dentro de uma lista (<ul>) e, em seguida, o exibe com um efeito de desvanecimento.
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);

        // Limpa o campo de entrada, removendo o URL digitado pelo usuário.
        $('#inputUrl').val('');
    });
});

*/