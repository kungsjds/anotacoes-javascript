// window.scrollY, retorna a posição atual do scroll vertical da página toda. scrollX posição do scroll horizontal.
function ocultar() {
    if ( window.scrollY == 0 ) {
        
        document.querySelector('.scrollButton').style.display = 'none';
        
        // Mudando pela class também funciona. Porém pela forma de cima, direto no style e display, é muito melhor e mais prático.
        // document.querySelector('.scrollButton').classList.remove("displayFlex");
    } else {

        document.querySelector('.scrollButton').style.display = 'flex';

        // Mudando pela class também funciona. Porém pela forma de cima, direto no style e display, é muito melhor e mais prático.
        // document.querySelector('.scrollButton').classList.add("displayFlex");
    }    
}

// Em termos de performance o EventListener não é muito recomendado.
// É recomendado utilizar: IntersectionObserver. Que é um comando novo.
window.addEventListener('scroll', ocultar);

// Pode ser feito com um timer, como abaixo. Porém não é recomendado, pois é pior que o eventListener em termos de performance.
// No exemplo, ele irá ficar executando a cada 1 segundo sempre. Diferente do eventListener, que só irá executar quando o scroll for alterado.
// setInterval(ocultar, 1000);

// scrollTo, leva a posição do scroll até a informada. Utilizando da forma abaixo, para deixar de forma suave.
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// O scrollTo pode ser utilizado em outros elementos, da seguinte forma:
// Os parametros para suavizar são os mesmos.
document.querySelector('.scrollButton').scrollTo();

// Mesma funcionalidade do scrollY e scrollX, porém para elementos e não na página toda.
document.querySelector('.scrollButton').scrollTop;
document.querySelector('.scrollButton').scrollLeft;
