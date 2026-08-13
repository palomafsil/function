function calculardesconto(preco, desconto) {
    let valordesconto = preco * desconto / 100;
    return preco - valordesconto;
}

let valorFinal = calculardesconto(100, 10);
console.log(valorFinal);