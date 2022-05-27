// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'kiwi', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'granola', 'paçoca'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));