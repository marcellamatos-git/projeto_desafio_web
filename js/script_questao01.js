//pegando elementos do dom

const formDados  = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector("#div-dados")

//capturando o evento submit do formulário

formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    

    const objformDados = new FormData(formDados)
    
    
    let nome = objformDados.get('nome')
    let idade = objformDados.get('idade')

    let situacaoIdade = ''

    if (idade >= 18){
        situacaoIdade = `${nome}, voce é maior de idade`
    }else{
        situacaoIdade = `${nome}, vc é menor de idade`
    }
    divResultado.innerHTML = situacaoIdade

})