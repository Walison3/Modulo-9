$(document).ready(() => {
    $('form').on('submit', function(e) {
        e.preventDefault();

        // Obter o valor da tarefa
        const adicionarTarefa = $('#texto-tarefa').val().trim(); // Remove espaços em branco;

        if (adicionarTarefa === '') {
            alert('Por favor, adicione uma tarefa!'); // Alerta se estiver vazio
            return; // Não adiciona se o campo estiver vazio
        }

        // Criar o elemento <li> e definir o texto
        const listasDeTarefa = $('<li></li>').text(adicionarTarefa);

        // Adicionar o <li> à <ul>
        $('ul').append(listasDeTarefa);

        // Limpar o campo de texto
        $('#texto-tarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Adiciona ou remove a classe 'completed'
    });
});

