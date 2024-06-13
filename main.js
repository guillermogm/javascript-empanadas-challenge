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

   let empanadasMitadCarasBaratas = 0;
   let empanadasMitadCarasIntermedias = 0;
   let empanadasMitadIntermediasBaratas = 0;

  // Reducción de empanadas hasta hacer las "medias-empanadas" máximas posibles
  while (a > 0 && c > 0) {
   a--;
   c--;
   empanadasMitadCarasBaratas += 2;
   }
   while (b > 0 && c > 0) {
      b--;
      c--;
      empanadasMitadCarasIntermedias += 2;
    }
    while (a > 0 && b > 0) {
      a--;
      b--;
      empanadasMitadIntermediasBaratas += 2;
    }
};
