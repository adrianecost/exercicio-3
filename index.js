// Função para encontrar o segundo maior e o primeiro maior valor em uma lista de numeros

function encontrarMaioresValores(listaDeNumeros) {
    const numerosOrdenados = listaDeNumeros.sort((a, b) => b - a);
    const primeiroMaior = numerosOrdenados[0];
    const segundoMaior = numerosOrdenados[1];
    return { primeiroMaior, segundoMaior };
  }