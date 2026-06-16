//pegando elementos do dom

const formDados  = document.querySelector('#formulario')
const divResultado = document.querySelector("#div-dados")

//capturando o evento submit do formulário

formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    

    const objFormDados = new FormData(formDados)
    
    let peso = parseFloat(objFormDados.get('peso'))
    let Altura = parseFloat(objFormDados.get('Altura'))

    let imc = peso / (Altura**2)

  if (imc <=20){
     faixaderisco = "Está abaixo do peso"

  }else if (imc >= 20 && imc <=25){
    faixaderisco = "Está com o peso normal"

  }else if (imc >= 25 && imc <=30){
     faixaderisco = "Está acima do peso"

  }else if(imc >= 30 && imc <=35){
     faixaderisco = "Obesidade"  
  
    }else if(imc >= 30){
        faixaderisco = "Obesidade mórbida"  
    }
  
       divResultado.innerHTML = faixaderisco

formDados.request()
})