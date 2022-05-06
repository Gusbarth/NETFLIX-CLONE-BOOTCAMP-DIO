function validateForm() {
    let x = document.forms["form-cadastro"]["user"].value;
    if (x == "") {
      alert("Favor preencher seu Usuário");
      return false;
    }

    let y = document.forms["form-cadastro"]["senha"].value;
    if (y == "") {
      alert("Favor preencher sua Senha");
      return false;
    }
  }

  function validateFormCadastro() {
    let z = document.forms["form-cadastro"]["email"].value;
    if (z == "") {
      alert("Favor preencher o campo de email");
      return false;
    }

    let x = document.forms["form-cadastro"]["user"].value;
    if (x == "") {
      alert("Favor preencher o campo de usuário");
      return false;
    }

    let y = document.forms["form-cadastro"]["senha"].value;
    if (y == "") {
      alert("Favor preencher campo de senha");
      return false;
    }

    let w = document.forms["form-cadastro"]["senha-repetir"].value;
    if (w == "") {
      alert("Favor repetir sua senha");
      return false;
    }
  }