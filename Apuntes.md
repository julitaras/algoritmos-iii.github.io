---
layout: page
title: Apuntes
permalink: /apuntes/
---

* toc
{:toc}

## Presentaciones

- [01 Introducción a la materia](https://docs.google.com/presentation/d/1YjjkbSAQfZFj9ImwWzJElRzqa977T91xWtUjM30K2O0/edit?usp=sharing)
- [01B Introducción al desarrollo de software](https://docs.google.com/presentation/d/1U5iGjwEVai199uzbqJWTYlGrsaeetaqJbcC1UbMaJc4/edit?usp=sharing)
- [02 (Breve) Historia de Smalltalk](https://docs.google.com/presentation/d/16lt6Rc56Evfoj8mUIZngeANHE1Yth-8lZ2GcyeMoSq0/edit?usp=sharing)

## Ejercicios en clase

Pueden encontrarlos en el repo de [Ejercicios en clase](https://github.com/algoritmos-iii/ejercicios-en-clase)

## Git

[Tutorial de remotes para ejercicios](https://gist.github.com/iloyarte/2543280524166ad63f46ea326322cc1c)

## Apunte teórico

### Conceptos fundamentales

Software / Programa:
- Modelo computable de un dominio de problema de la realidad (vs Secuencia de instrucciones)
- Paradigma de Objetos: Objetos que colaboran entre sí mediante el envío de mensajes para resolver un problema.

Desarrollo de software:
- Proceso de aprendizaje, iterativo e incremental
- Eje descriptivo, funcional e implementativo. Foco en eje descriptivo y funcional.

Filosofía Smalltalk:
- Lenguaje Meta circular
- Ambiente de aprendizaje
- Fundacional del paradigma
- Ambiente vivo
- Imagen + VM
- Feedback inmediato
- "Todo es un objeto"

### Conceptos del paradigma

Objeto: 
- Representación de un ente de un dominio de problema
- Se define a partir de los mensajes que sabe responder.
- Nueva definición (más precisa): Representación del rol que desempeña un ente de la realidad en el contexto de un dominio de problema

Mensaje: 
- Define el QUE de un objeto
- Define una responsabilidad
- Comportamiento definido a través de un método asociado a un objeto con el mismo nombre que el mensaje
- Conjunto de mensajes define la escencia de un objeto
- Son objetos

Método:
- Implementación de un mensaje
- Representa un conjunto de colaboraciones
- Define el COMO
- 1 mensaje -> 1 o más métodos asociados
- Son objetos
- "self": Pseudo-variable que hace referencia al objeto receptor en el contexto de un método.

Colaboradores: 
- Otro objeto con el que un objeto colabora
- También conocido como variables
- Interno: Lo conozco siempre, relación de cercanía (variable de instancia)
- Externo: Colabora para un mensaje puntual (parámetro)
- Colaboración: 1. Sincrónica 2. Dirigida 3. Siempre tiene se responde un objeto. 4. Receptor desconoce al emisor.

Closure:
- Objeto que representa un bloque de código
- Diferencia con método: No está asociado a un mensaje (es anónimo)

Igualdad vs Identidad:
- Identidad (==): Todo ente de la realidad tiene una indentidad que lo hace único. Mensaje ==
- Igualdad (=): Por cuestiones de implementación, a veces tiene sentido tener 2 objetos no idénticos que representen al mismo ente de la realidad. Mensaje =. 
- Dos objetos son iguales si representan al mismo ente de la realidad
- Es habitual definir el = y es el que mensaje que habitualmente queremos usar, ya que nos importa normalmente saber la igualdad entre objetos (más allá de que ocupen la misma posición de memoria).

Polimorfismo:
- Decimos que 2 o más objetos son polimórficos entre sí respecto a un conjunto de mensajes si (y sólo si) dichos mensajes son semánticamente iguales en los objetos en cuestión.
- Semanticamente iguales:
1. Mismo nombre
2. Los resultados son polimorficos
3. Los colaboradores sean polimorficos
4. Hacen "lo mismo"
- Puedo reemplazar objetos por otros haciendo más fácil extender mi programa
- Simplifica el entendimiento / Reduce vocabulario

### Otros conceptos importantes del paradigma

Subclasificación:
- Forma de organizar conocimiento, derivado de las ideas de Aristóteles. La más común Smalltalk, Java, C++, Python, Ruby, etc.
- Alternativa: Prototipado, derivado de ideas de Wittgenstein (Lenguajes: Self, JavaScript, DenotativeObjects).
- Clase: Un **objeto** que representa un **concepto** presente en un dominio de problema.
- Todo objeto es instancia de una clase. Los métodos está definidos en las clases.
- Métodos de instancia vs métodos de clase: Los primeros definen el comportamiento de las instancias, mientras que los segundos, el comportamiento de la clase.
- Objeto: Un objeto es todo lo que su jerarquía define (+ complejo!)
- Subclase: Especialización. Ojo con el "es un". Es más bien un "se comporta como".
- Clase abstracta (vs concreta): No tiene realizaciones concretas, es decir, no hay entes de la realidad que puedo relacionar de forma exclusiva. Ej: Todo Número (abstracto) es real, entero, fraccionario, imaginario, etc. Tiene al menos un mensaje abstracto (es decir, sin implementación y que debe definirse en las subclases).

Algoritmo de Method Lookup:
- Se encarga de buscar el método asociado a un mensaje enviado.
- Prototipado: Se busca en el objeto receptor un método con el mismo nombre que el del mensaje enviado. Si no está definido allí, se recorre hacia arriba la cadena de "padres".
- Subclasificación: Se busca primero en la clase de la cual el objeto es instancia. Si no se encuentra allí, se comienza a buscar en la jerarquía de superclases, comenzando por la superclase inmediata de la clase del objeto.
- "super": Pseudo-variable que referencia a self dentro de un método. A diferencia de self, al enviarle un mensaje, el método asociado se comienza a buscar a partir de la **superclase** donde está definido el método.

### Heurísticas de diseño

- Relación 1:1 entre objeto y ente de la realidad.
- Buscamos que el conjunto de mensajes sea minimal -> Bajo acoplamiento, alta cohesión.
- Guiarnos por el aspecto funcional conduce a buenos modelos.
- Nombrar a los objetos (colaboradores externos e internos) según el rol que cumplen en cada contexto.
- Evitar romper encapsulamiento.
- Código repetido: Señal de que nos falta una abstracción.
- Evitar subclasificar de clases concretas.
- Pensar primero en composición/delegación por sobre subclasificación al momento de reutilizar código.
- Favorecer polimorfismo sobre el uso de IFs.
- Siempre crear objetos completos
- Siempre crear objetos válidos
- Favorecer objetos inmutables
- No usar nil / null. Utilizar Null Object Pattern cuando el modelo resultante modela bien la realidad. Sino, utilizar el patrón "mensajeIfNone: aBlock".

### Técnicas

#### Quitar código repetido

1) Copiar lo repetido a "un lugar"
2) Parametrizar lo que cambia
3) Nombrar la nueva abstracción
4) Reemplazar lo repetido por la nueva abstracción

#### Reemplazar if por polimorfismo

1) Crear una jerarquia de clases con una clase por cada condicion del if (si no existe)
2) Mover el cuerpo del if de cada condicion a cada abstracción del paso 1) utilizando un mensaje polimorfico.
3) Nombrar el mensaje polifmorfico
4) Nombrar las abstracciones del paso 1)
5) Reemplazar el if por el envio de mensaje polimorfico
6) Buscar el objeto polimorfico (si es necesario)

### Buenas prácticas

- Definir mensajes abstractos de forma explícita (en Smalltalk: self subclassResponsibility)
- Categorizar mensajes de forma cohesiva, utilizando "private" para aquellos mensajes que no forman parte del protocolo escencial (público) del objeto.
