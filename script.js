$(document).ready(function() {
    console.log(document.querySelector('header button'));
    console.log($('#btnCancel'));
    
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