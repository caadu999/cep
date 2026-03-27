const cep = document.getElementById("cep");
const cepValue = document.getElementById("cep").value;
const email = document.getElementById("email");

const nome = document.getElementById("seunome");

// WEB STORAGE DO E-MAIL
email.addEventListener("input", function () {
  const emailValue = document.getElementById("email").value;
  sessionStorage.setItem("email", emailValue);
});

window.addEventListener("load", function () {
  const emailSalvo = sessionStorage.getItem("email");
  email.value = emailSalvo;
});

// WEB STORAGE DO NOME

nome.addEventListener("input", function () {
  const nomeValue = document.getElementById("seunome").value;
  sessionStorage.setItem("nome", nomeValue);
});

window.addEventListener("load", function(){
  const nomeSalvo = sessionStorage.getItem("nome")
  nome.value = nomeSalvo
})

cep.addEventListener("blur", function (event) {
  const elemento = event.target;
  const cepInfo = elemento.value;

  if (cepInfo.length !== 8) {
    return;
  }

  fetch(`https://viacep.com.br/ws/${cepInfo}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.erro) {
        document.getElementById("nome").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("estado").value = data.uf;
      } else {
        alert("erro!");
      }
    })
    .catch((error) => console.log("erro", error));
});
