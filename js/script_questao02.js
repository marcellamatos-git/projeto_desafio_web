//pegando elementos do dom

const formDados  = document.querySelector('#formulario')
const divResultado = document.querySelector("#div-dados")

//capturando o evento submit do formulário

formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    

    const objformDados = new FormData(formDados)
    
    
    let DistanciaKM = parseFloat(objformDados.get('Distancia KM'))
    let Consumo = parseFloat(objformDados.get('Consumo'))
    let preço = parseFloat(objformDados.get('preço'))
 

    let = Distancia KM 

    
    divResultado.innerHTML = `a area a ser pintada é de ${area. 
    toFixed(2).replace('.',',')}m² , total de litros para pintar essa área é de ${parseFloat(area / 2). toFixed(2).replace(".",',')
}1`

formDados.request()
})