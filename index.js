let saldoVitorias = calcularVitorias(90, 3)

function calcularVitorias(a, b){
    let vitorias = a - b
    return vitorias   
}


function classificacaoVitorias(vitorias){
    if(vitorias < 10){
        console.log("Seu nível é: Ferro")
    }else if(vitorias >= 11 && vitorias <= 20){
        console.log("Seu nível é: Bronze")
    }else if(vitorias >= 21 && vitorias <= 50){
        console.log("Seu nível é: Prata")
    }else if(vitorias >= 51 && vitorias <= 80){
        console.log("Seu nível é: Ouro")
    }else if(vitorias >= 81 && vitorias <= 90){
        console.log("Seu nível é: Diamante")
    }else if(vitorias >= 91 && vitorias <= 100){
        console.log("Seu nível é: Lendário")
    }else if(vitorias >= 101){
        console.log("Seu nível é: Imortal")
    }
}

console.log("O herói tem saldo de: " + saldoVitorias)
console.log(classificacaoVitorias(saldoVitorias))

