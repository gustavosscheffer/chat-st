var button = document.getElementById('btn-envia');
button.addEventListener('click', function() {
    var mensagens = document.getElementsByClassName('mensagens')[0];
    var input = document.getElementById('entrada');

    if(input.value == '') 
        return;

    var texto = input.value;
    input.value = '';
    var mensagensInnerHtml = mensagens.innerHTML;

    mensagensInnerHtml += `
    <div class="col-12">
        <div class="col-6 enviado">
            ${texto}
        </div>
    </div>
    `
    mensagens.innerHTML = mensagensInnerHtml;

    mensagens.scrollTop = mensagens.scrollHeight;
})