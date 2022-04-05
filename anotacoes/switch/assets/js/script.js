let dia = 2;
let periodoSemana = '';

// Utiliável quando tiver apenas uma variável/valor e precisar comparar se é IGUAL a um valor. 
// Se não, se precisar fazer outras comparações, com mais variáveis/valores, precisa utilziar o IF 
switch(dia) {
    case 6:
    case 7:
        periodoSemana = 'Final de semana';
        break;
    default:
        periodoSemana = 'Dia de semana';
        break;
    // O default é um valor padrão, caso nenhuma das comparações do case sejam válidas. Pode ser utilizado vários case.
}

document.getElementById('semana').innerHTML = 'Hoje é: ' + periodoSemana;