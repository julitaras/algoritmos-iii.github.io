---
layout: page
title: Apuntes
---

* toc
{:toc}

## Presentaciones <img alt="github icon" width="20px" src="./assets/icons/presentacion.svg" />

- [01 Introducción a la materia](https://docs.google.com/presentation/d/1VYJMUEz9efHgIuGC66ljwiuWQSMPtkzsGJYnauiYZYY/edit?usp=sharing)
- [01B Historia de Smalltalk](https://docs.google.com/presentation/d/1tW1oRcjkp2Lp-lQhvgwKn_lo249p1SgCd9ZYudK82Ho/edit?usp=sharing)
- [01C Introduccion al Desarrollo de software](https://docs.google.com/presentation/d/1rzSZ3Ow3JMwCWvRoaqcv7Z1QmAEkYUiWRlemZZbeWBc/edit?usp=sharing)

<p class="text-muted">Esta sección se irá completando con el correr del cuatrimestre, a medida que vayamos aprendiendo conceptos nuevos :) </p>

## Ejercicios en clase <img alt="github icon" width="20px" src="./assets/icons/practica.svg" />

Pueden encontrarlos en el repo de [Ejercicios en clase](https://github.com/algoritmos-iii/ejercicios-en-clase-2022-2c)

## Git <img alt="github icon" width="20px" src="https://icongr.am/devicon/git-plain.svg?size=148&color=currentColor" />

- [Tutorial de remotes para ejercicios](https://gist.github.com/iloyarte/2543280524166ad63f46ea326322cc1c)

- [Apunte del taller de Git](https://docs.google.com/document/d/1VwJUVTMz1psGqdaNR2NJWo8mtPoK2FvDB1cP9xQObcQ/edit?usp=sharing)

### Taller de git <img alt="github icon" width="22px" src="https://icongr.am/clarity/film-strip.svg?size=148&color=currentColor" />

<iframe width="360" height="215" src="https://www.youtube.com/embed/L0RHt3P6S94" title="Taller de git - 20202c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="360" height="215" src="https://www.youtube.com/embed/OgXfPAw2WoU" title="Taller de git" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Parciales viejos <img alt="exam icon" width="22px" src="./assets/icons/examen.png" />

Podes encontrar parciales de cuatrimestres anteriores en el siguiente [repo](https://github.com/algoritmos-iii/parciales-viejos) para poder practicarlos y llegar mejor a rendir.

## Apunte teórico <img alt="github icon" width="20px" src="https://icongr.am/clarity/library.svg?size=128&color=currentColor" />

Software:
- Modelo computable de un dominio de problema de la realidad (vs Secuencia de instrucciones)
- Paradigma de Objetos: Objetos que colaboran entre sí mediante el envío de mensajes para resolver un problema.

Desarrollo de software:
- Proceso de aprendizaje, iterativo e incremental
- Feedback inmediato es fundamental
- Modelo: Eje descriptivo, funcional e implementativo. Foco en eje descriptivo y funcional.

Filosofía Smalltalk:
- Lenguaje Meta circular
- Ambiente de aprendizaje
- Fundacional del paradigma
- Ambiente vivo
- Imagen + VM

-------------------

Objeto: 
- Representación de un ente de un dominio de problema
- El conjunto de mensajes que sabe responder un objeto define su esencia / lo define como tal.
- Nueva definición (más precisa): Representación del ROL que desempeña un ente de la realidad en el contexto de un dominio de problema

Mensaje:
- Define el QUE del objeto
- Define una responsabilidad
- Su comportamiento está definido por un método asociado al objeto con el mismo nombre que el del mensaje
- Son objetos

Método:
- Implementación de un mensaje
- Representa un conjunto de colaboraciones (es decir, código)
- Define el COMO
- 1 mensaje -> 1 o más métodos asociados
- Son objetos
- "self" -> Pseudo-variable que hace referencia al objeto receptor (en el contexto de un método). Se llama "this" en otros lenguajes.

Colaborador:
- Objeto que forma parte de una colaboración con otro objeto.
- También conocidos como variables.
- Externo: Participa sólo para una colaboración en particular. Se llama también "parámetro".
- Interno: Tiene una relación de cercancía, participando normalmente en múltiples colaboraciones.

Encapsulamiento:
- Implica que un objeto sólo habla con sus colaboradores internos, sin compartirlos con otros objetos, evitando que estos últimos colaboren directamente con ellos.
- Decimos que rompemos encapsulamiento cuando compartimos a nuestro colaborador interno con otros objetos.

Código repetido:
- Conjunto de colaboraciones que se repiten. Suele significar que en nuestro modelo falta una abstracción.

Igualdad vs Identidad:
- Identidad (==): Todo ente de la realidad tiene una indentidad que lo hace único. Mensaje ==
- Igualdad (=): Por cuestiones de implementación, a veces tiene sentido tener 2 objetos no idénticos que representen al mismo ente de la realidad. Mensaje =.    Dos objetos son iguales si representan al mismo ente de la realidad.
-    Es habitual definir el = y es el que mensaje que habitualmente queremos usar, ya que nos importa normalmente saber la igualdad entre objetos (más allá de que ocupen la misma posición de memoria).

Polimorfismo:
- Decimos que 2 o más objetos son polimórficos entre sí respecto a un conjunto de mensajes si (y sólo si) dichos mensajes son semánticamente iguales en los objetos en cuestión. Semanticamente iguales:
  - Mismo nombre
  - Los resultados son polimorficos
  - Los colaboradores sean polimorficos
  - Hacen "lo mismo"
- Simplifica el entendimiento / Reduce vocabulario

Subclasificación:
- Forma de organizar conocimiento, derivado de las ideas de Aristóteles. La más común Smalltalk, Java, C++, Python, Ruby, etc.
- Alternativa: Prototipado, derivado de ideas de Wittgenstein (Lenguajes: Self, JavaScript, DenotativeObjects).
- Clase: Un objeto que representa un concepto presente en un dominio de problema.
- Todo objeto es instancia de una clase. Los métodos está definidos en las clases.
- Métodos de instancia vs métodos de clase: Los primeros definen el comportamiento de las instancias, mientras que los segundos, el comportamiento de la clase.
- Objeto: Un objeto es todo lo que su jerarquía define (+ complejo!)
- Subclase: Especialización. Ojo con el "es un". Es más bien un "se comporta como".
- Clase abstracta (vs concreta): No tiene realizaciones concretas, es decir, no hay entes de la realidad que puedo relacionar de forma exclusiva. Ej: Todo Número (abstracto) es real, entero, fraccionario, imaginario, etc. Tiene al menos un mensaje abstracto (es decir, sin implementación y que debe definirse en las subclases).

Heurísticas de diseño
---------------------------

- Relación 1:1 entre objeto y ente de la realidad.
- Buscamos que el conjunto de mensajes sea minimal -> Bajo acoplamiento, alta cohesión.
- Guiarnos por el aspecto funcional nos ayuda a lograr modelos mas simples.
- Nombrar a los objetos (incluyendo colaboradores) según el rol que cumplen en cada contexto.
- Código repetido? Señal de que nos falta una abstracción
- No romper encapsulamiento
- Evitar subclasificar de clases concretas.
- Pensar primero en composición/delegación por sobre subclasificación al momento de reutilizar código.
- Favorecer polimorfismo sobre el uso de IFs.
- Crear siempre objetos completos.
- Crear siempre objetos válidos.
- Favorecer objetos inmutables.

-------------------------------------

Quitar codigo repetido
-----
1. Copiar lo repetido a "algun lugar"
2. Parametrizar lo que cambia
3. Nombrar la nueva abstraccion
4. Reemplazar lo repetido por la nueva abstracción

Reemplazar ifs por polimorfismo
------
1. Crear una jerarquía de clases con una clase por cada condición del if (si es que no existen).
2. Mover el cuerpo del if de cada condición a cada abstracción del paso 1) utilizando un mensaje polimórfico.
3. Nombrar el mensaje polimórfico.
4. Nombrar las abstracciones generadas en el paso 1.
5. Reemplazar el if por el envío del mensaje polimórfico (si es necesario).
6. Definir el mensaje como abstracto en la superclase y borrar lo que ya no se use.
7. Buscar el objeto polimórfico (si es necesario)
