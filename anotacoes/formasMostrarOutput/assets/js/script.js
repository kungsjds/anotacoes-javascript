document.getElementById("titulo").innerHTML = "Hellow World!";
// Pega o elemento pelo ID. E com o innerHTML =, substitui o conteúdo atual do elemento, pelo conteúdo informado. 

document.write("Hello World!");
// Simplesmente inclui um "elemento novo" com a descrição informada. 
// Pouco utilizado, pois se for executado após o site já ter sido carregado, irá substituir todo o conteúdo do site e ficará somente essa descrição.

window.alert("Welcome to this amazing world!");
// alert("Welcome to this amazing world!");
/* Mostra uma caixinha de mensagem por cima do site, com a descrição informada. Diferente do document, que mostra no próprio site. */

console.log("Mensagem para os devs. Possíveis erros, para saber o momento que ocorreu.");
console.error("Mensagem de erro");
// No console, as mensagens irão aparecer no console do inspecionar do site.