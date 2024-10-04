const inputPalavraSecreta = document.getElementById('inputPalavraSecreta')
const btnDefinir = document.getElementById('btnDefinir')

const inputLetra = document.getElementById('inputLetra')
const btnAdivinhar = document.getElementById('btnAdivinhar')

const pPalavraSecreta = document.getElementById('pPalavraSecreta')
const pTentativas = document.getElementById('pTentativas')

let palavraSecreta = ""
let letras = []
let palavraSecretaTracos = ""
let tentativas = 5
pTentativas.innerHTML = `<strong>Tentativas:<\strong> ${tentativas}`

btnDefinir.onclick = () => {
    palavraSecreta = inputPalavraSecreta.value
    if(!palavraSecreta.includes(" ")){
        palavraSecretaTracos = ""
        tentativas = 5
        letras = []

        for (let index = 0; index < palavraSecreta.length; index++) {
            palavraSecretaTracos += " - "        
        }

        pPalavraSecreta.innerHTML = palavraSecretaTracos
        pTentativas.innerHTML = `<strong>Tentativas:<\strong> ${tentativas}`
        inputPalavraSecreta.value = ""
        return palavraSecreta;
    } 
    else {
        alert("Digite uma palavra sem espaços.")
        inputPalavraSecreta.value = ""
    }
    
}

btnAdivinhar.onclick = () => {
    inputLetraValor = inputLetra.value
    
    if (palavraSecreta == "") {
        alert("Digite uma palavra antes de tentar adivinhar.")
        inputLetra.value = ""
    }

    else if(inputLetraValor.length == 1){
        letras.push(inputLetraValor)
        palavraSecretaTracos = ""
        
        if (tentativas > 0) {
            if (!palavraSecreta.split("").includes(inputLetraValor)) {
                tentativas -= 1
            }
            
            for (let index = 0; index < palavraSecreta.length; index++) {
                element = palavraSecreta[index]
        
                if (letras.includes(element)) {
                    palavraSecretaTracos += ` ${element} `
                } else {
                    palavraSecretaTracos += " - "
                }
                
            };
            
        } else {
            alert("Limite de tentativas foi atingido, palavra secreta será revelada.")
            
            palavraSecretaTracos = ""
            palavraSecreta.split('').forEach(element => {
                palavraSecretaTracos += ` ${element} `
            })

        }
        
        if (!palavraSecretaTracos.includes("-")) {
            alert("Parabéns! Você adivinhou a palavra!")
        }
        
        pPalavraSecreta.innerHTML = palavraSecretaTracos
        pTentativas.innerHTML = `<strong>Tentativas:<\strong> ${tentativas}`
        inputLetra.value = ""
        return letras
        
    }

    else if(inputLetraValor.length > 1){
        alert("Digite apenas uma letra.")
        inputLetra.value = ""
    }
    
    else {
        alert("Digite uma letra.")
    }

}
