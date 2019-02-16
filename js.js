var array=["paolo", "giovanni", "piero", "luca"];

var nome = prompt("dimmi il tuo nome");

array.push(nome);


array.sort();

for (var i = 0; i < array.length; i++) {
  if (nome==array[i]) {
      console.log("il tuo nome si trova all'indice nr:" + i)
  }
}
