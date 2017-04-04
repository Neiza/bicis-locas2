var form = document.getElementsByClassName("form-signup");

var nombre = document.getElementById('name');
var apellido = document.getElementById('lastname');
var email    = document.getElementById('input-email');
var password = document.getElementById('input-password');
var bicicleta = document.getElementsByClassName("form-control")[4];
var button = document.getElementsByClassName("btn")[0];

var spanNombre = document.getElementById("span-nombre");
var spanApellido = document.getElementById("span-apellido");
var spanEmail = document.getElementById("span-email");
var spanPassword = document.getElementById("span-password");
var spanBicicleta = document.getElementById("span-bicicleta");

var expressionEmail                = /\w+@+\w+\.+[a-z]/;
var expressionPassword6Characters  =/^[A-Za-z0-9_]{6,20}$/;


  var soloLetras = function(e){
       var codigoTecla = e.keyCode;
       if(((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32)&& this.nextElementSibling){
            this.nextElementSibling.remove();
            return true;
       }
       else if (this.nextElementSibling){
              return false;
              this.nextElementSibling.innerHTML = "Solo escribir letras";
       }
  }



	function validEmail(){
				if ((!expressionEmail.test(email.value))){
						spanEmail.innerHTML = "Verifique su email "
    				}
				else if (email.nextElementSibling){
					email.nextElementSibling.remove();
				}
	}

	function validPassword(){
				if (!expressionPassword6Characters.test(password.value)){
						spanPassword.innerHTML = "La contraseña debe tener al menos 6 caracteres "
				}
				else if (password.nextElementSibling){
					  password.nextElementSibling.remove();
				}
	}



 function camposVacios(input, mensaje, span){
		  if (input.value.trim().length==0){
		      span.innerHTML = mensaje;
		  }
			else if(input.nextElementSibling){
				  input.nextElementSibling.remove();
			}
  }

	function camposVaciosBici(){
 		  if (bicicleta.value.trim()=="0"){
 		      spanBicicleta.innerHTML = "Debes al menos seleccionar un tipo de bicicleta";
 		  }
 			else if(bicicleta.nextElementSibling){
 				  bicicleta.nextElementSibling.remove();
 			}

   }


function validateletras(){
         if(nombre.value.trim().length!=0 && apellido.value.trim().length!=0 && email.value.trim().length!=0 && password.value.trim().length!=0 && bicicleta.value.trim().length!=0){
            window.location="cliente.html";
        }
        else {
          nombre.onkeypress = soloLetras;
          apellido.onkeypress = soloLetras;

         }
}

function validateForm(){
	validateletras();
	camposVacios(nombre, "Escribe tu nombre", spanNombre);
	camposVacios(apellido, "Escribe tu apellido", spanApellido);
	camposVacios(email, "Escribe un email", spanEmail);
	camposVacios(password, "Escribe tu password", spanPassword);
	camposVaciosBici();


}

            	/* Escribe tú código aquí */
window.addEventListener("load", function(){
		nombre.focus();

      button.addEventListener("click", function(){
					validateForm();
					validPassword();
					validEmail();
      });

      email.addEventListener("blur", function(){
        validEmail();
      });

      password.addEventListener("blur", function(){
        validPassword();
      });

      bicicleta.addEventListener("change", function(){
        camposVaciosBici();

      })


});
