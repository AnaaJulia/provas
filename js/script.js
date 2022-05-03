
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })  //Parte do Bootstrap



  function calculo(){

    //entrada

    horario = document.formu.horario.value;  //name do formulario. name. value

    //processamento

    if(horario == "manhã"){
        valor = 450;
    }
    else if (horario == "tarde"){
        valor = 350;
    }
    else{
        valor = 200;
    }
    
    //saída

    document.getElementById('total').value = valor;

    document.getElementById('Café da manhã').checked = false;
    document.getElementById('Wi-fi').checked = false;
    document.getElementById('Academia').checked = false;
    document.getElementById('Piscina').checked = false;
    document.getElementById('frigobar').checked = false;



    
}

function opcionais(valor,marcado){
    //entrada
    total = document.getElementById('total').value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    }
    
    //saída
    document.getElementById('total').value = total;
}


function alert(){
    //entrada
    total = document.getElementById('total').value;

    //processamento
    if (total < 1500){
        msg = "Selecione o Horário da Festa."
    }
    else{
        msg = "Obrigada pela Preferêcia. ";
    
        if (total >= 2500) {
            total = total * 0.9;
            msg += "Você recebeu um desconto de 10%. ";
        }
  
        msg += "Valor a Pagar R$ " + total;
  
    }
    
   //saída
   //alert(msg);
    
    document.getElementById('mensagem').value = msg;
    $('#alert').modal('show');
    
}