let hora = 12;

if (hora >= 12 && hora < 18) {
    window.alert("Boa tarde!");
    console.log("Boa tarde");
}

else if (hora < 12 && hora >=5){
    window.alert("Bom dia!");
    console.log("Bom dia");
} 

else {
    window.alert("Boa noite!");
    console.log("Boa noite");
}

// O || significa OU. O && significa AND.

if  ( hora == 12 || hora == 18  ) {
    console.log("Você está na hora do rush!");
}





// Diferença entre let, var e const. 

// ---Observação importante---
// Sempre utilizar o let ou const ao invés do var. Pois é mais seguro, como não pode ser alterado, evita erros acidentais de trocar o valor e o tipo de uma variável, ocasionando vários erros.



let nome = "Jonathan";
let curso = "javascript";
// O let não pode ser redeclarado, caso seja redeclarado, irá dar erro. E só pode ser utilizado dentro da seção de código em que foi declarado, por exemplo, dentro de um IF. Como no exemplo abaixo.
// Se tentar utilizar a variável declarada com let: "message", fora do if, irá dar erro.

if ( hora == 12 ) {
    let message = "Curso de: " + curso;
    console.log(message);
}

// O var pode ser redeclarado e também pode ser utilizado em qualquer parte do código, independente da seção. Como no exemplo abaixo.
var idade = 24;
const dia = "04/12";

 if ( dia == "04/12") {
     var idade = 25;
     console.log(idade);
 }


//  Uma const é um valor constante para a variável. Não pode ser alterado, se for alterado, irá gerar um erro.
// Só pode ser alterado se for do tipo array ou object. Como no exemplo abaixo
const identity = {name: "Jonathan", sobrenome: "Dias"};

identity.name = "Harry";
identity.sobrenome = "Potter"

console.log(identity);