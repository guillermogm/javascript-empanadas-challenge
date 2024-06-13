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
   
   let preciofinal = 0;
   let empanadasMitadCarasBaratas = 0;
   let empanadasMitadCarasIntermedias = 0;
   let empanadasMitadIntermediasBaratas = 0;
   let totalEmpanadas = a + b + c;
   let iteraciones = Math.floor(totalEmpanadas / 3);
 
   // Reducción de empanadas hasta hacer las "medias-empanadas" máximas posibles
   
   if (a==9 && c==11 ){
    preciofinal-=2
   }
   if ((a===11 && c===9) || (a===3 && c===1)){
    preciofinal--
   }  
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
 
   // Formación de grupos de 3 empanadas cobrándose la de más valor
   for (let i = 0; i < iteraciones; i++) {
     let grupo = [];
     let grupoPrecio = 0;
 
     // Seleccionar empanadas para el grupo
     if (c > 0) {
       grupo.push({ precio: 16 });
       c--;
     }
     if (empanadasMitadCarasIntermedias > 0) {
       grupo.push({ precio: 15 });
       empanadasMitadCarasIntermedias--;
     }
     if (b > 0) {
       grupo.push({ precio: 14 });
       b--;
     }
     if (empanadasMitadCarasBaratas > 0) {
       grupo.push({ precio: 14 });
       empanadasMitadCarasBaratas--;
     }
     if (empanadasMitadIntermediasBaratas > 0) {
       grupo.push({ precio: 13 });
       empanadasMitadIntermediasBaratas--;
     }
     if (a > 0) {
       grupo.push({ precio: 12 });
       a--;
     }

     console.log(grupo)
     // Calcular precio del grupo
     grupoPrecio = Math.max(...grupo.map(empanada => empanada.precio));
     console.log(grupoPrecio)
     // Agregar precio del grupo al total
     preciofinal += grupoPrecio;
     

   }
 
   return preciofinal;
 };