# Empanada Problem :dumpling:
Welcome to the Empanada documentation. This is logical project that we have to resolve using Javascript and node.


## Table of Contents :link:
* <a href="#stack">Stack :anchor:</a>
* <a href="#statement">Problem to solve :question:</a>
* <a href="#explanation">Explanation :thought_balloon:</a>
* <a href="#author">Author :writing_hand:</a>
* <a href="#acknowledgements">Acknowledgements 🎓</a>

<div id="stack"></div>

## Stack :anchor:

![Static Badge](https://camo.githubusercontent.com/77a94341662845d3740986b84d8219c0fd4a0a9e4af8e5411c24cec0faee2129/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145)
![Static Badge](https://camo.githubusercontent.com/b0432ab0567d45add9bf155718ab7de57c330cd3acd719374fae0384e95688c2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3433383533443f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465)
<div id="statement"></div>

## Problem to solve (SPANISH) :question:

El profesor Maple se embarca en la tarea de adquirir empanadas para todos los participantes del bootcamp de programación. Dado que hoy es el Día de las Empanadas,  hay una oferta especial en la que te llevas hasta tres empanadas y solo pagas la más cara. Con un presupuesto ajustado para el curso, los profesores debaten para intentar minimizar el gasto total por todas las empanadas.

Entonces, el profesor Maple decide seguir la siguiente estrategia: como la empanada más cara la tendrá que pagar de todas formas, la comprará junto a la segunda y tercera más caras, que ofrecen el mayor ahorro. Con las n-3 empanadas restantes, aplicará el mismo procedimiento hasta que no quede ninguna.

Los profesores reflexionan y llegan a la conclusión de que esta es la mejor estrategia. Pero cuando están a punto de pagar, escuchan la siguiente conversación de una familia de al lado:

"Queremos una empanada de pollo, de 12 euros, una de carne, de 14 euros, y una vegetariana, de 16 euros."

Los profesores piensan inmediatamente: "Cogerán la oferta 3x1, de forma que solo paguen los 16 euros de la empanada vegetariana y se lleven gratis la de carne y la de pollo". A lo cual, la familia continúa:

"Pero pónganosla de la siguiente forma: Dos empanadas mitad pollo y mitad vegetariana, y la de carne aparte. Como todas las empanadas valen 14 euros, cogeremos la oferta 3x1 y nos las llevaremos por 14 euros".

Cuando los profesores salen de su asombro, deciden que lo más sensato es utilizar el hecho de que las empanadas se pueden pedir mitad de un tipo y mitad de otro, pagando por ella la media del costo de las dos empanadas enteras. Así, una empanada mitad pollo y mitad vegetariana valdrá (12 + 16)/2 = 14 euros. Sin embargo, no logran decidir cuál es la mejor forma de repartir las empanadas en mitades primero, y en grupos después, para minimizar el precio.

Ayúdales haciendo una función que lo calcule lo más rápido posible: hay decenas de estudiantes hambrientos que dependen de ti.

Las empanadas que han elegido los profesores tienen 3, 4 o 5 ingredientes. La masa de una empanada vale 6 euros, y cada ingrediente adicional vale 2 euros. Así, las empanadas pueden valer 12, 14 o 16 euros. Se garantiza que el número total de empanadas será múltiplo de 3.

### Entrada

La función debe tener tres parámetros de entrada. Cada conjunto de entrada consta de tres enteros, a b c, que son el número de empanadas de 3, 4 y 5 ingredientes, respectivamente. Se garantiza que el número de empanadas, a + b + c, cumple que a + b + c < 40. Además, el número de empanadas es divisible entre 3.

### Ejemplos de casos de uso

| Entrada     | Salida      |
| ----------- | ----------- |
| 1, 1, 1     | 14          |
| 3, 3, 0     | 26          |
| 2, 0, 1     | 14          |
| 9, 10, 11   | 142         |

<div id="explanation"></div>

## Explanation :thought_balloon:

To solve this problem first we control the possible inputs errors with 3 ifs statemnets. The first one is to not allow any negative number, the second is to check if the total number of empanadas are dissible beetween 3 and lastly to check if there are more than 40 empanadas.

After that we make 6 while loops. These loops will include all the possible combinations of empanadas, all half empanadas and whole empandas in an Array.

Then we sort the Array from largest to smallest. Finally we go through a for loop that adds all the prices three by three because we only pay for every three empanadas and then the function return the final price to pay.

 <div id="author"></div>

## Author :writing_hand:
* Guillermo Gómez:
    * [GitHub](https://github.com/guillermogm)

* Original Author:
    * [GitHub](https://github.com/GeeksHubsAcademy/javascript-empanadas-challenge)

<div id="acknowledgements"></div>

## Acknowledgements 🎓
* A shoutout to the teachers at Geekshubs Academy.
