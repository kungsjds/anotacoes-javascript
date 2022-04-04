// offsetWidth: Retorna o tamanho do width em pixel do >>>elemento<<<, (somando o padding, scroll bar e a borda).
// offsetHeight: O mestmo do width.
let offWidth = document.querySelector('.texto').offsetWidth;
let offHeight = document.querySelector('.texto').offsetHeight;

console.log("offsetWidth / offsetHeight: Retorna o tamanho em pixel do >>>elemento<<<, (somando o padding, scroll bar e a borda).");
console.log("Width: " + offWidth);
console.log("Height: " + offHeight);
console.log("--------------------------")



// clientWidth: Retorna o tamanho em pixel do >>>elemento<<<, (somando o padding e excluindo o scroll bar). Não considera borda e margin.
// clientHeight: O mesmo do width.
let cWidth = document.querySelector('.texto').clientWidth;
let cHeight = document.querySelector('.texto').clientHeight;

console.log("clientWidth / clientHeight: Retorna o tamanho em pixel do >>>elemento<<<, (somando o padding e excluindo o scroll bar). Não considera borda e margin.");
console.log("Width: " + cWidth);
console.log("Height: " + offHeight);
console.log("--------------------------")



// scrollHeight: Retorna o tamanho real do >>>conteúdo<<< (sem o scroll).
// scrollWidth: o mesmo do Height
let sWidth = document.querySelector('.texto').scrollWidth;
let sHeight = document.querySelector('.texto').scrollHeight;

console.log("scrollWidth / scrollHeight: Retorna o tamanho real do >>>conteúdo<<< (sem o scroll).");
console.log("Width: " + sWidth);
console.log("Height: " + sHeight);
console.log("--------------------------")