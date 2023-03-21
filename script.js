let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = "AaBbCcDdEeFfGgHhIijJKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value; //pego o valor do input
}

function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){ //sliderelement.value é o tanto de caracteres q a pessoa escolheu.
    pass += charset.charAt(Math.floor(Math.random() * n));

    }
    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}


function copyPassword() {
    navigator.clipboard.writeText(novaSenha).then(function() {
      alert("Texto copiado com sucesso!");
    }, function() {
      alert("Erro ao copiar texto.");
    });
  }