const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const ordemCrescente = () => {
   console.log(numeros.sort((a,b) => {return a-b}))
}

ordemCrescente()

const ordemDecrescente = () => {
    console.log(numeros.sort((a,b) => {return b-a}));
}

ordemDecrescente()

const ordemCrescenteUnicode = () => {
    console.log(numeros.sort());
}

ordemCrescenteUnicode()

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const ordemAlfabetica = () => {
    console.log(frutas.sort((a, b) => {
        return a.localeCompare(b)
    }));
}

ordemAlfabetica()

const ordemAlfabeticaDecrescente = () => {
    console.log(frutas.sort((a, b) => {
        return b.localeCompare(a)
    }));
}

ordemAlfabeticaDecrescente()

const ordemCrescenteCaracteres = () => {
    console.log(frutas.sort((a, b) => {
        return a.length - b.length
    }));
}

ordemCrescenteCaracteres()