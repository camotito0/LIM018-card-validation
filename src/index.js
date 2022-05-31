import validator from './validator.js';

// caputaramos los elementos input y button por su id
let validateButton = document.getElementById('validationButton');
let inputChange = document.getElementById('input');
let cancelButton = document.getElementById('cancelButton');
let docu = document.getElementById('car-validation');
let docu2 = document.getElementById('first')
let nextButton = document.getElementById('next');
//console.log(nextButton, 'hola');

docu.style.display = "none";

nextButton.addEventListener('click', function(){
    docu2.style.display = "none";
    docu.style.display = "flex";
})

cancelButton.addEventListener('click', function(){
    /* window.location.href = "index.html"; */
    window.location.replace("index.html");
});

inputChange.addEventListener('input', function(){
    // capturamos el valor del input antes de cambiarlo con maskify
    let cardNumber = document.getElementById('input').value;
    // aquí cambiamos los valores actuales del input por los que genera maskify
    // this.value se refiere al valor o estado actual de la función
    inputChange.value = validator.maskify(this.value);
    // aquí dentro llamamos al addEventListener del boton porque este ocurre después del cambio
    // al input
    validateButton.addEventListener('click', function(){
        let result = document.getElementById('mensaje');
        let message = '';

        let validation = validator.isValid(cardNumber);
        if(validation === true){
            message = "Su tarjeta es válida, gracias por comprar en Foodie!"
        } else {
            message = "Su tarjeta no es válida. Por favor ingrese los datos nuevamente"
        }
        result.innerHTML = message;
    })
})
//console.log(validator);
