// Tipos de function. Pode criar mais de um ou dois parametros para serem passados ao chamar a function. Como nos exemplos abaixo.

function alteraValores(name) {
    document.querySelector('.titulo').innerHTML = name;
}

alteraValores("Somando valores...");

function soma(x, y) {
    let soma = x + y;

    return soma;
}

function calc() {
    let x = parseInt(document.querySelector('[name=value1]').value);
    let y = parseInt(document.querySelector('[name=value2').value);

    // parseInt() converte uma string para int.

    let v = typeof x;
    let a = typeof y;

    console.log(v);
    console.log(a);

    document.querySelector('[name=result]').value = soma(x, y);
}