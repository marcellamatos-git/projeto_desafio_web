//pegando elementos do dom

const formDados  = document.querySelector('#formulario')
const divResultado = document.querySelector("#div-dados")

//capturando o evento submit do formulário

formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    

    const objformDados = new FormData(formDados)
    
    
    let DistanciaKM = parseFloat(objformDados.get('DistanciaKM'))
    let Consumo = parseFloat(objformDados.get('Consumo'))
    let preco = parseFloat(objformDados.get('preco'))

    let LitrosNecessarios = DistanciaKM / Consumo;
    let ValorTotal = LitrosNecessarios * preco;


    
    divResultado.innerHTML =`quantidade de combustivel necessario ${LitrosNecessarios.toFixed(2).replace('.',',')} 
   ValorTotal a pagar: R$ ${ValorTotal.toFixed(2).replace('.',',')}`


formDados.reset()
})