const form = document.getElementById('form-agenda');
const numeroSalvo =`<img src = "./imagens/transferir.png" alt="Contato salvo"/>`
const nomes = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaAgenda();
    atualizaNumeroAgenda();
});

function atualizaNumeroAgenda(){
    console.log(nomes);
    console.log(numeros);
}

function adicionaContato(){
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputNumeroAgenda = document.getElementById('numero-agenda');

    nomes.push(inputNomeAgenda.value);
    numeros.push(inputNumeroAgenda.value);


    let linha = '<tr>';
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td>${inputNumeroAgenda.value}</td>`;
    linha += `<td>${inputNumeroAgenda.value = numeroSalvo} </td>`
    linhas += '<tr>';

    linhas += linha;

    inputNomeAgenda.value = '';
    inputNumeroAgenda.value = '';
}

function atualizaAgenda(){    
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;

}
