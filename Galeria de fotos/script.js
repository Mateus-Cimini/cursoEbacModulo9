$(document).ready(function() {
    console.log(document.querySelector('header button'));
    console.log($('#btnCancel'));
    
    document.querySelector('header button').addEventListener('click', function() {

    })

    $('header button').click(function() {
        console.log('Expandir formulario');
        $('form').slideDown();
    })

    $('#btnCancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        console.log('clicou em adicionar');
        e.preventDefault();

    })
})