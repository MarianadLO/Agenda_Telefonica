const form = document.getElementById('input')
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    addLinha()
    atualizaTabela()
})

function addLinha(){
    const inputNome = document.getElementById('nome-telefonico')
    const inputTel = document.getElementById('numero-telefonico')


    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTel.value}</td>`
    linha += '<tr>'

    linhas += linha

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

}

function atualizaTabela(){
    inputNome.value = ''
    inputTel.value = ''
}