const validator = {
  isValid: function(creditCardNumber) {
    //declaramos total = 0 porque está variable va a ser acumulativa hasta el final
    let total = 0;
    // Aquí a creditCardNumber los separamos por cada dígito y lo que hace esplit es devolverte un array nuevo con los digitos separados
    // y reverse invierte el orden de los digitos como se nos pide
    let newString = creditCardNumber.split('').reverse();

    //Aquí recorremos la nueva cadena con map
    newString.map((e, index) => {
      //Aquí detectamos a los dígitos que estan en posición par
      let multiplesBytwo = (index+1) % 2;
      //si el modulo es igual a cero entonces proseguimos
      if ( multiplesBytwo === 0) {
        // a multiplicar x2
        let multiplyingByTwo = e * 2;
        // luego introducimos los nuevos dígitos dentro del array
        newString[index] = multiplyingByTwo;
        // aquí hacemos una validación para sacar los dígitos con dos cifras
        if (multiplyingByTwo >= 10) {
          //como multiplyingByTwo es un número lo convertimos a string para luego separar los digitos con split
          let separatingDigitsInTwo = multiplyingByTwo.toString().split('');
          // count variable acumulativa
          let count = 0;+
          // aquí recorremos separatingDigitsInTwo para sumar los dígitos
          separatingDigitsInTwo.map((e) =>{
            // convertimos los STRING a Number con parseInt
            count += parseInt(e);
            // introducimos los nuevos dígitos en el array original
            newString[index] = count;
          })
        }
      }
    });

    // recorremos el array con los nuevos dígitos
    newString.map((e)=>{
      // aquí convertimos todos los string a number
      total += Number(e);
    })
// la validación dice: si el modulo de total entre 10 es 0 entonces devuelve true o false
    if (total % 10 === 0) {
      return true;
    } else {
      return false;
    }

     //return (total % 10 === 0) ? 'true' : 'false'
  },

  maskify: function(creditCardNumber){
    let newString = creditCardNumber.split('');
    // cuando slice recibe un número negativo quiere decir que va de atrás hacia adelante
    let lasFourDigits = newString.slice(-4);

    if(creditCardNumber.length >= 0) {
      // slice te devuelve un array con los dígitos extraídos
      let newDigits = newString.slice(0,-4);
      // recorremos este nuevo array
      newDigits.map((e, index)=>{
        // y reemplazamos el dígito por su index por un #
        newDigits[index] = '#';
      })
      // unimos los dos arrays newDigits y lastFourDigits, esto nos
      // devuelve un nuevo array, como se nos pide que sea un string
      // lo unimos con join
      return newDigits.concat(lasFourDigits).join('');
    }
  }
};

export default validator;
