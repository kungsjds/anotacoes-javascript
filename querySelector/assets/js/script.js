// No querySelector pode selecionar qualquer tipo de DOM, pela classe, id, type, name, etc. Igual ao comando getElementBy.
// Basta informar como é informado no CSS. Id com "#", class com ".", etc.
// Ele trás o primeiro DOM informado que encontrar, independente se tiver outros abaixo.
document.querySelector('#exemplo').innerHTML = "Jonathan Dias";


// O querySelectorAll, retorna todos os DOM que encontrar, dentro de um Array de objetos. Exatamente igual aos getElementsBy...
document.querySelectorAll('.lista')[0].innerHTML = "Alterado com sucesso!";

document.querySelectorAll('[type=text]')[1].placeholder = "novo placeholder"