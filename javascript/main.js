let email = document.querySelector('.f4__formulario-email');
let mensagem = document.querySelector('.f4__formulario-mensagem');

let emailValores = email.value;
let mensagemValores = mensagem.value;
let usuario = emailValores.slice(0,5);


let dominio = emailValores.substring(emailValores.indexOf("@") + 1, emailValores.indexOf('.'));
let dominioTamanho = mensagemValores.substring(mensagemValores.indexOf("@") + 1, mensagemValores.length);


function enviarMensagem () {
    mensagem === '';
}

function enviarEmail () {
    (conteudo_email.search('@') === -1) || 
    (usuario.length < 1) || 
    (usuario.length >32) ||
    (dominio.length < 1) ||
    (dominio.length > 16) ||
    (conteudo_email.search(' ')) !== -1 ||
    (dominioTamanho.search(".com") === -1)

}

if(enviarMensagem == "") {
    alert(` Erro no envio: Insira uma mensagem ${usuario}`)
}
if(enviarEmail == ""){
    alert('Erro no envio: Endereço de email inválido!')
}

if((enviarMensagem === false) && (enviarEmail === false)){
    alert(`Obrigado pelo contato, ${usuario}!`)
}


const formulario = document.querySelector('.f4__formulario')
formulario.addEventListener('.f4__botao-formulario', e => {
Event.preventDefault()
})


