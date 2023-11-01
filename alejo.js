// 1. Bienvenida
function mensajeDeBienvenida() {
    let nombre = prompt("1. Ingresa tu nombre:");
    if (nombre === "Santino" || nombre === "Nahuel") {
      alert("¡Bienvenido, " + nombre + "!");
    }
  }
  alert(mensajeDeBienvenida())
  
  // 2. Mayor de edad
  function esMayorDeEdad() {
    let edad = Number(prompt("2. Ingresa tu edad:"));
    if (edad >= 18) {
      alert("Eres mayor de edad.");
    } else {
      alert("Eres menor de edad.");
    }
  }
  alert(esMayorDeEdad())
  
  // 3. Categoría de edad
  function categoriaDeEdad() {
    let edad = Number(prompt("3. Ingresa tu edad:"));
    if (edad >= 6 && edad <= 11) {
      alert("Eres un niño.");
    } else if (edad >= 12 && edad <= 18) {
      alert("Eres un adolescente.");
    } else if (edad >= 19 && edad <= 26) {
      alert("Eres un joven.");
    } else if (edad >= 27 && edad <= 59) {
      alert("Eres un adulto.");
    } else {
      alert("Eres un anciano.");
    }
  }
  alert(categoriaDeEdad())

  
  // 5. Comprobar contraseña
  function comprobarContraseña() {
    let contraseña = prompt("5. Ingresa la contraseña:");
    if (contraseña === "secreto") {
      alert("Acceso concedido.");
    } else {
      alert("Acceso denegado.");
    }
  }
  alert(comprobarContraseña())
  
  // 6. Múltiplo de 5
  function esMultiploDe5(numero) {
    return numero % 5 === 0;
  }
  alert(esMultiploDe5())
  
  // 7. Cálculo de descuento
  function calcularDescuento(edad, precio) {
    if (edad > 65) {
      return precio * 0.9; // 10% de descuento
    } else {
      return precio;
    }
  }
  alert(calcularDescuento())
  
  // 8. Categoría de notas
  function categoriaDeNotas(calificacion) {
    if (calificacion >= 80) {
      return "MS (Muy Satisfactorio)";
    } else if (calificacion >= 60) {
      return "S (Satisfactorio)";
    } else {
      return "EP (Evaluación Pendiente)";
    }
  }
  alert(categoriaDeNotas())