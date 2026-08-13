function calcularMedia (nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function verficarAprovacao(media) {
    if (media >= 6) {
        return"Aprovado";
        } else {
            return "Reeprovado";
        }
}

let media = calcularMedia(8, 7);
let resultado = verficarAprovacao(media);

console.log(media);
console.log(resultado);