const cep = document.getElementById("cep");
const cepValue = document.getElementById("cep").value;
const email = document.getElementById("email");
const endereco = document.getElementById("nome");
const bairro = document.getElementById("bairro");
const estado = document.getElementById("estado");

const nome = document.getElementById("seunome");

//WEB STORAGE DO CEP

cep.addEventListener("input", function () {
  const cepValue = cep.value;
  sessionStorage.setItem("cep", cepValue);
});

window.addEventListener("load", function () {
  const cepSalvo = sessionStorage.getItem("cep");
  cep.value = cepSalvo;
});

//WEB STORAGE DO ENDERECO

endereco.addEventListener("input", function () {
  const eValue = endereco.value;
  sessionStorage.setItem("end", eValue);
});

window.addEventListener("load", function () {
  const eSalvo = sessionStorage.getItem("end");
  endereco.value = eSalvo;
});

//WEB STORAGE DO ESTADO
estado.addEventListener("input", function () {
  const estadoValue = estado.value;
  sessionStorage.setItem("estado", estadoValue);
});

window.addEventListener("load", function () {
  const estadoSalvo = sessionStorage.getItem("estado");
  estado.value = estadoSalvo;
});

// WEB STORAGE BAIRRO
bairro.addEventListener("input", function () {
  const bairroValue = bairro.value;
  sessionStorage.setItem("bairro", bairroValue);
});

window.addEventListener("load", function () {
  const bairroSalvo = sessionStorage.getItem("bairro");
  bairro.value = bairroSalvo;
});

// WEB STORAGE DO E-MAIL
email.addEventListener("input", function () {
  const emailValue = email.value;
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

window.addEventListener("load", function () {
  const nomeSalvo = sessionStorage.getItem("nome");
  nome.value = nomeSalvo;
});

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
