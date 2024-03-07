const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const maiorNumero = () => {
    return numeros.reduce((pv, cv) => {
        return pv > cv ? pv : cv
    })
}

console.log(maiorNumero())