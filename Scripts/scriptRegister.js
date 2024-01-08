const senhaInput = document.getElementById("senha");
const senhaStrength = document.getElementById("senhaStrength");
const confSenhaInput = document.getElementById("confSenha");
const confSenhaStrength = document.getElementById("confSenhaStrength");

senhaInput.addEventListener("input", () => {
  const senha = senhaInput.value;
  const strength = checkPasswordStrength(senha);

  senhaStrength.innerHTML = `Senha: <strong>${strength} </strong>`;
  updateConfirmationStrength();
});

confSenhaInput.addEventListener("input", () => {
  updateConfirmationStrength();
});

function updateConfirmationStrength() {
  const senha = senhaInput.value;
  const confSenha = confSenhaInput.value;

  const senhaStrengthValue = checkPasswordStrength(senha);
  const confSenhaStrengthValue = checkPasswordStrength(confSenha);

  confSenhaStrength.innerHTML = `Senha: <Strong>${confSenhaStrengthValue} </Strong>`;

  if (senhaStrengthValue === "Forte" && senha === confSenha) {
    confSenhaStrength.style.color = "green";
  } else {
    confSenhaStrength.style.color = "red";
  }
}

function checkPasswordStrength(password) {
  const strength = zxcvbn(password).score;

  if (strength < 3) {
    return "Fraca";
  } else if (strength < 4) {
    return "Média";
  } else {
    return "Forte";
  }
}

const alternarSenha = document.getElementById("alternarSenha");
const alternarSenhaConfi = document.getElementById("alternarSenhaConfi");

alternarSenha.addEventListener("click", () => {
    alterarSenhaVisibilidade(senhaInput, alternarSenha);
});

alternarSenhaConfi.addEventListener("click", () => {
    alterarSenhaVisibilidade(confSenhaInput, alternarSenhaConfi);
});

function alterarSenhaVisibilidade(inputField, toggleIcon) {
  if (inputField.type === "password") {
    inputField.type = "text";
    toggleIcon.textContent = "visibility";
  } else {
    inputField.type = "password";
    toggleIcon.textContent = "visibility_off";
  }
}
