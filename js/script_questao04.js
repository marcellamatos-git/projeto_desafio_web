//pegando elementos do dom

const formDados  = document.querySelector('#formulario')
const divResultado = document.querySelector("#div-dados")

//capturando o evento submit do formulário

formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    

    const objformDados = new FormData(formDados)
    
    
    let nota1 = parseFloat(objformDados.get('nota1'))
    let nota2 = parseFloat(objformDados.get('nota2'))
    let nota3 = parseFloat(objformDados.get('nota3'))

    let media = (nota1 + nota2 + nota3) / 3;

    let mediadosAlunos = ''

    if (media >= 6){
     mediadosAlunos = `foi aprovado`
    }else{
       mediadosAlunos = `foi reprovado`
    }

    divResultado.innerHTML = `a media do aluno é: ${media}, vc esta ${mediadosAlunos}`

    divResultado = media

formDados.reset()
})