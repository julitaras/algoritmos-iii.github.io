---
layout: page
title: Apuntes
---

* toc
{:toc}

# Presentaciones

- [01 Introducción a la materia](https://docs.google.com/presentation/d/16coCuJ1zctrUT-JKUthABUv2OGNSx6qKuhkdf7U5E0I/edit?usp=sharing)
- [01B Introducción al desarrollo de software](https://docs.google.com/presentation/d/1xhjJnae9inqcs-3weFuuQIE3sQVKBJWh1efOox5cdgQ/edit?usp=sharing)
- [02 Historia de Smalltalk](https://docs.google.com/presentation/d/1GHvOZyS_XomFy1ShYInw7tLYD0cozAqACsyhG-uUxG0/edit?usp=sharing)
- [08 Organización de conocimiento](https://docs.google.com/presentation/d/1baX5WIEH-nemr6rYVDNc2O0GF0HLcN2zaxNmJccvQ-g/edit?usp=sharing) 
- [16 Testing Funcional](https://drive.google.com/file/d/1Xmb9Jc7bSr53ZWYUWVolwppXOHcwWIuW/view?usp=sharing)
- [18 TDD](https://docs.google.com/presentation/d/1waVHRXt6pa4gAlpqJNgLMsBtIVAQOVA24M96DWNSStw/edit?usp=sharing)
- [21 Intro a Patrones de Diseño](https://docs.google.com/presentation/d/1qoOGsutGcMZX2XO14XXTE84i_5vma6taDhJbOiCKhCI/edit?usp=sharing)

# Ejercicios en clase

Pueden encontrarlos en el repo de [Ejercicios en clase](https://github.com/algoritmos-iii/ejercicios-en-clase-2021-1c)

# Git

[Tutorial de remotes para ejercicios](https://gist.github.com/iloyarte/2543280524166ad63f46ea326322cc1c)

[Apunte del taller de Git](https://docs.google.com/document/d/1VwJUVTMz1psGqdaNR2NJWo8mtPoK2FvDB1cP9xQObcQ/edit?usp=sharing)

# Apunte teórico

Esta sección se irá completando con el correr del cuatrimestre, a medida que vayamos aprendiendo conceptos nuevos :)

## Conceptos fundamentales

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
- `self`: Pseudo-variable que hace referencia al objeto receptor en el contexto de un método.

Colaboradores: 
- Otro objeto con el que un objeto colabora
- También conocido como variables
- Interno: Lo conozco siempre, relación de cercanía (variable de instancia)
- Externo: Colabora para un mensaje puntual (parámetro)

  #### 4 caracteristicas de una colaboración:
  
  **Sincrónica:** Se envia un mensaje y esperamos que el mismo sea respondido. No continuamos con la siguiente colaboracion.
  
  **Dirigida:**  Envio un mensaje que va a un objeto receptor. Al cual se a quien.
  
  Ejemplo:
  
  ```smalltalk
  AlanTuring dateOfBirth.
  ```

  |Receptor | Mensaje | Emisor |
  |--|--|--|
  | `AlanTuring`| `dateOfBirth` | Yo en el ambiente|

  **Siempre tiene se responde un objeto:**  En el caso de `smalltalk` si uno no pone el `return` explícito responde `self`.

  **Receptor desconoce al emisor:** La respuesta a una colaboración es independiente del emisor.

Ejemplo:
 ```smalltalk
 January/1/2019 distanceTo: March/21/2019.
 ```
El **objeto**
 ```smalltalk
 March/21/2019
  ``` 
  esta colaborando con el **objeto**
   ```smalltalk 
   January/1/2019
  ```
a traves de este **mensaje**  
   ```smalltalk 
   distanceTo:
  ```

Closure:
- Objeto que representa un bloque de código
- Diferencia con método: No está asociado a un mensaje (es anónimo)
- Representan conjunto de colaboraciones.
- Estan bindeados al contexto. El closure esta unido al contexto.

Ejemplo:

```smalltalk
m1
	|t1 myClosure|
	t1 := 1.
	myClosure := [t1 := t1 + 1].
	^myClosure
```

Si hago

```smalltalk
m1 value.
```

El resultado sera:

```smalltalk
m1 value. 2
```

Si hago nuevamente 

```smalltalk
m1 value.
```

Devolvera:

```smalltalk
m1 value. 3
```

Igualdad vs Identidad:
- Identidad (`==`): Todo ente de la realidad tiene una indentidad que lo hace único. Mensaje `==`
- Igualdad (`=`): Por cuestiones de implementación, a veces tiene sentido tener 2 objetos no idénticos que representen al mismo ente de la realidad. Mensaje `=`. 
- Dos objetos son iguales si representan al mismo ente de la realidad
- Es habitual definir el `=` y es el que mensaje que habitualmente queremos usar, ya que nos importa normalmente saber la igualdad entre objetos (más allá de que ocupen la misma posición de memoria).

    Ejemplo:

    ```smalltalk
    "Identidad"
    (3/4) == (3/4). false --> Ya que son dos objetos diferentes. No se puede guardar en memoria entonces se guarda en diferentes objetos.
    (10 factorial) == (10 factorial). true
    (100 factorial) == (100 factorial). false
    5 == 5. true

    "Igualdad"
    (3/4) = (3/4). true
    5 = 5. true
    ```

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

Encapsulamiento:
- El mismo se logra cuando el resto de los objetos no conocen a los colaboradores internos del objeto en cuestión. Decimos que rompemos encapsulamiento cuando compartimos a nuestro colaborador interno con otros objetos.

## Acerca de los métodos y mensajes en smalltalk

```smalltalk
nombreMensaje
	"comentarios"
	|respuesta|
	respuesta := 'Hello world'
	^respuesta
```

El `^` vendria a remplazar el `return`.

Se asigna el valor a una variable temporal con `:=` o tambien con `_`.

Las variables se declaran entre `| |`

Podemos concatenar strings a traves de `,`

El punto separa las colaboraciones. Es una forma de decir que viene otra colaboración luego del `.`

## Heurísticas de diseño

- Relación 1:1 entre objeto y ente de la realidad.
- Buscamos que el conjunto de mensajes sea minimal -> Bajo acoplamiento, alta cohesión.
- Guiarnos por el aspecto funcional conduce a buenos modelos.
- Nombrar a los objetos (colaboradores externos e internos) según el rol que cumplen en cada contexto.
- Evitar romper encapsulamiento.
- Código repetido: Señal de que nos falta una abstracción.
- Evitar subclasificar de clases concretas.
- Pensar primero en composición/delegación por sobre subclasificación al momento de reutilizar código.
- Favorecer polimorfismo sobre el uso de IFs.
- Crear siempre objetos completos
- Crear siempre objetos válidos
- Favorecer objetos inmutables
- No usar `nil`

## Técnicas

### Quitar código repetido

1. Copiar lo repetido a "un lugar"
2. Parametrizar lo que cambia
3. Nombrar la nueva abstracción
4. Reemplazar lo repetido por la nueva abstracción

### Reemplazar if por polimorfismo

1. Crear una jerarquía de clases con una clase por cada condición del if (si es que no existen)
2. Mover el cuerpo del if de cada condición a cada abstracción del paso 1) utilizando un mensaje polimórfico.
3. Nombrar el mensaje polimórfico.
4. Nombrar las abstracciones generadas en el paso 1)
5. Reemplazar el if por el envío del mensaje polimórfico.
6. Buscar el objeto polimórfico (si es necesario)

### TDD

1. Escribir el test más sencillo que se me ocurra.
2. Correrlo para comprobar que falle y hacerlo pasar con la implementación más simple posible.
3. Reflexionar. ¿Se puede mejorar? Si es así, refactorizar.

## Patrones vistos en la materia

- Double Dispatch
- Method Object
- Null Object Pattern
- State
- Decorator
- Adapter (+ PluggableAdapter)
- Proxy
- Visitor
- Composite
- Object Recursion
- Observer

Consultar bibliografía de la materia para profundizar, junto con los [ejemplos vistos en clase](https://github.com/algoritmos-iii/ejercicios-en-clase-2021-1c)

## Buenas prácticas

- Definir mensajes abstractos de forma explícita (en Smalltalk: `self subclassResponsibility`)
- Categorizar mensajes de forma cohesiva, utilizando "private" para aquellos mensajes que no forman parte del protocolo escencial (público) del objeto.
