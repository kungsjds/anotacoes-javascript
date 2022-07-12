// 4 principais formas de selecionar os elementos do DOM

function newFunction(filtro) {
    if (filtro == "example") {
        return "Harry<button class=test>Potter</button>";
    } 
    
    else if ( filtro == "house" ) {
        return "Ravenclaw";
    }   
}

// Retornar o elemento pelo ID, retorna apenas um elemento. Diferente das outras abaixo, que retorna um array.
document.getElementById('example').innerHTML = newFunction("example");
// É o select mais utilizado entre os 4.


// Todas abaixo retornam um array como resultado, independente se retornar apenas um elemento ou mais.
document.getElementsByClassName('house')[2].innerHTML = newFunction("house");
// É o segundo mais utilizado, depois do ID.


document.getElementsByTagName('div')[1].innerHTML = newFunction("house");
// Pouco utilizado. Só utiliza quando precisa alterar algo de forma generalizada.

document.getElementsByName('user')[0].placeholder = "Digite sua casa...";
// Mais utilizado para campos de text, que contenham o parametro name. É muito pouco utilizado