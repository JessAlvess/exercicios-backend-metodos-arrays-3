const cidades = [
    "Salvador",
    "São Paulo",
    "São Bernardo do Campo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro"    
]

const maiorString = () => {
    return cidades.reduce((strA, strB) => {
       return strA.length > strB.length ? strA : strB
    })
}

console.log(maiorString());