function app() {

    let form = document.querySelector('.form')

    function imc(weight, height) {
        return weight / (height ** 2)
    }

    function result(imc) {
        if(imc < 18.5){
            return "Abaixo do peso"
        } else if (imc > 18.5 && imc < 24.9) {
            return "Peso normal"
        } else if (imc > 25 && imc < 34.9) {
            return "Sobrepeso"
        } else if (imc > 35 && imc < 34.9) {
            return "Obesidade grau 1"
        } else if (imc > 40 && imc < 39.9) {
            return "Obesidade grau 2"
        } else if (imc > 40) {
            return "Obesidade grau 3"
        }
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        let weight = document.querySelector('#weight').value
        let height = document.querySelector('#height').value

        let element_result = document.querySelector('#result')

        if (isNaN(weight)) {
            element_result.innerHTML = "Peso inválido"
        } else if (isNaN(height)) {
            element_result.innerHTML = "Altura inválida"
        } else {
            let imc_value = (imc(weight, height)).toFixed(2)
            let txt_result = result(imc_value)
            
            element_result.innerHTML = `Seu IMC é ${imc_value} (${txt_result})`
        }

        
    })
}

app()