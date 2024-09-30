/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.login.nome.value;
    const cpf = document.login.cpf.value;
    const dataNascimento = document.login.dataNascimento.value;
    const contaBancaria = document.login.contaBancaria.value;
    const senha = document.login.senha.value;

    alert("Obrigado pelas informações!");

    document.getElementById('mensagem').style.display = 'block';
});



