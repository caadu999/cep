const cep = document.getElementById("cep");

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
