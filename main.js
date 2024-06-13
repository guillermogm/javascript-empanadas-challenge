export const fn = (a, b, c) => {
   if(a < 0 || b < 0 || c < 0) {
      throwError("Las empanadas no pueden tener un valor negativo")
   }

   if((a + b + c) % 3 !== 0) {
      throwError("El número total de empanadas no multiplo de 3")
   }

   if(a + b + c > 40) {
      throwError("No puedes poner mas de un total de 40 empanadas")
   }
};
