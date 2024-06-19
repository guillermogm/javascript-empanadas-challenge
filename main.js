export const fn = (a, b, c) => {

  // Declaracion de variables
  let preciofinal = 0;
  let grupo = [];
  let Total=a+b+c;
  //Control de Errores
  if (a < 0 || b < 0 || c < 0) {
    throwError("Las empanadas no pueden tener un valor negativo")
  }

  if (Total % 3 !== 0) {
    throwError("El número total de empanadas no multiplo de 3")
  }

  if (Total > 40) {
    throwError("No puedes poner mas de un total de 40 empanadas")
  }
  //Añadir todas las Empanadas a un Array
  while (a > 0 && c > 0) {
    grupo.push(14);
    a -= 0.5;
    c -= 0.5;
  }
  while (b > 0 && c > 0) {
    grupo.push(15);
    b -= 0.5;
    c -= 0.5;
  }
  while (a > 0 && b > 0) {
    grupo.push(13);
    a -= 0.5;
    b -= 0.5;
  }
  while (c > 0) {
    grupo.push(16)
    c--
  }
  while (b > 0) {
    grupo.push(14)
    b--
  }
  while (a > 0) {
    grupo.push(12)
    a--
  }
  //Ordenar las empanadas de mayor a menor
  grupo.sort(); grupo.reverse();
  // Sumar las empanadas de 3 en tres por que solo pagas una de cada 3
  for (let i = 0; i < grupo.length; i += 3) {
    preciofinal += grupo[i];
  }
  return preciofinal
};