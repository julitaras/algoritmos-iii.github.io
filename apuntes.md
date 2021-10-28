---
layout: page
title: Apuntes
---

* toc
{:toc}

## Presentaciones <img alt="github icon" width="20px" src="./assets/icons/presentacion.svg" />

- [01 Introducción a la materia](https://docs.google.com/presentation/d/1oXnG-KJhbHNy5SLdYjQetmHMcFLWkKBVTNywqR82Re0/edit?usp=sharing)
- [01B Introducción al desarrollo de software](https://docs.google.com/presentation/d/1X82-qzvCwKpHHTk1WhoQIxVXX7elN_stJ2Es82xxeGQ/edit?usp=sharing)

## Ejercicios en clase <img alt="github icon" width="20px" src="./assets/icons/practica.svg" />

Pueden encontrarlos en el repo de [Ejercicios en clase](https://github.com/algoritmos-iii/ejercicios-en-clase-2021-2c)

## Git <img alt="github icon" width="20px" src="https://icongr.am/devicon/git-plain.svg?size=148&color=currentColor" />

- [Tutorial de remotes para ejercicios](https://gist.github.com/iloyarte/2543280524166ad63f46ea326322cc1c)

- [Apunte del taller de Git](https://docs.google.com/document/d/1VwJUVTMz1psGqdaNR2NJWo8mtPoK2FvDB1cP9xQObcQ/edit?usp=sharing)

### Taller de git <img alt="github icon" width="22px" src="https://icongr.am/clarity/film-strip.svg?size=148&color=currentColor" /> 

<iframe width="360" height="215" src="https://www.youtube.com/embed/L0RHt3P6S94" title="Taller de git - 20202c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="360" height="215" src="https://www.youtube.com/embed/OgXfPAw2WoU" title="Taller de git" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Apunte teórico <img alt="github icon" width="20px" src="https://icongr.am/clarity/library.svg?size=128&color=currentColor" />

<p class="text-muted">Esta sección se irá completando con el correr del cuatrimestre, a medida que vayamos aprendiendo conceptos nuevos :) </p>

## Conceptos fundamentales

#### Software / Programa:

- Modelo computable de un dominio de problema de la realidad (vs Secuencia de instrucciones)
- Paradigma de Objetos: Objetos que colaboran entre sí mediante el envío de mensajes para resolver un problema.

#### Desarrollo de software:

- Proceso de aprendizaje, iterativo e incremental
- Eje descriptivo, funcional e implementativo. Foco en eje descriptivo y funcional.

#### Filosofía Smalltalk:

- Ambiente de aprendizaje
- Fundacional del paradigma
- Ambiente vivo
- Imagen + VM
- Feedback inmediato
- "Todo es un objeto"

#### Conceptos del paradigma

<p class="sub-h4 ">Objeto:</p>

- Representación de un ente de un dominio de problema
- Se define a partir de los mensajes que sabe responder.
- Nueva definición (más precisa): Representación del rol que desempeña un ente de la realidad en el contexto de un dominio de problema

<p class="sub-h4 ">Mensaje:</p>

- Define el **QUE** de un objeto
- Define una responsabilidad
- Comportamiento definido a través de un método asociado a un objeto con el mismo nombre que el mensaje
- Conjunto de mensajes define la escencia de un objeto
- Son objetos

<p class="sub-h4 ">Método:</p>

- Implementación de un mensaje
- Representa un conjunto de colaboraciones
- Define el **CóMO**
- 1 mensaje -> 1 o más métodos asociados
- Son objetos
- `self`: Pseudo-variable que hace referencia al objeto receptor en el contexto de un método.

<p class="sub-h4 ">Colaboradores:</p>

- Otro objeto con el que un objeto colabora
- También conocido como variables
- Interno: Lo conozco siempre, relación de cercanía (variable de instancia)
- Externo: Colabora para un mensaje puntual (parámetro)

<p class="sub-h4 "> 4 caracteristicas de una colaboración: </p>

- **Sincrónica:** Se envia un mensaje y esperamos que el mismo sea respondido. No continuamos con la siguiente colaboracion.

- **Dirigida:** Envio un mensaje que va a un objeto receptor. Al cual se a quien.

    Ejemplo:

    ```smalltalk
    AlanTuring dateOfBirth.
    ```

    | Receptor     | Mensaje       | Emisor            |
    | ------------ | ------------- | ----------------- |
    | `AlanTuring` | `dateOfBirth` | Yo en el ambiente |

- **Siempre tiene se responde un objeto:** En el caso de `smalltalk` si uno no pone el `return` explícito responde `self`.

- **Receptor desconoce al emisor:** La respuesta a una colaboración es independiente del emisor.

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

### Otros conceptos importantes del paradigma

<p class="sub-h4 ">Encapsulamiento:</p>

- El mismo se logra cuando el resto de los objetos no conocen a los colaboradores internos del objeto en cuestión. Decimos que rompemos encapsulamiento cuando compartimos a nuestro colaborador interno con otros objetos.

<p class="sub-h4 ">Subclasificación:</p>

- Forma de organizar conocimiento, derivado de las ideas de Aristóteles. La más común Smalltalk, Java, C++, Python, Ruby, etc.
- **Alternativa:** Prototipado, derivado de ideas de Wittgenstein (Lenguajes: Self, JavaScript, DenotativeObjects).
- **Clase:** Un objeto que representa un concepto presente en un dominio de problema.
- Todo objeto es instancia de una clase. Los métodos está definidos en las clases.
- **Métodos de instancia vs métodos de clase:** Los primeros definen el comportamiento de las instancias, mientras que los segundos, el comportamiento de la clase.
- **Objeto:** Un objeto es todo lo que su jerarquía define (+ complejo!)
- **Subclase:** Especialización. Ojo con el "_es un_". Es más bien un "_se comporta como_".
- **Clase abstracta (vs concreta):**
  - No tiene realizaciones concretas, es decir, no hay entes de la realidad que puedo relacionar de forma exclusiva. Ej: Todo Número (abstracto) es real, entero, fraccionario, imaginario, etc.
  - Tiene al menos un mensaje abstracto (es decir, sin implementación y que debe definirse en las subclases).

<p class="sub-h4 "> Algorítmo de Method Lookup: </p>

- Se encarga de buscar el método asociado a un mensaje enviado.
- **Prototipado:** Se busca en el objeto receptor un método con el mismo nombre que el del mensaje enviado. Si no está definido allí, se recorre hacia arriba la cadena de "padres".
- **Subclasificación:** Se busca primero en la clase de la cual el objeto es instancia. Si no se encuentra allí, se comienza a buscar en la jerarquía de superclases, comenzando por la superclase inmediata de la clase del objeto.
- `super`: Pseudo-variable que referencia a self dentro de un método. A diferencia de self, al enviarle un mensaje, el método asociado se comienza a buscar a partir de la superclase donde está definido el método.

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
- Evitar romper encapsulamiento.
- Nombrar a los objetos (colaboradores externos e internos) según el rol que cumplen en cada contexto.
- Evitar romper encapsulamiento
- Código repetido: Señal de que nos falta una abstracción.
- Evitar subclasificar de clases concretas.
- Pensar primero en composición/delegación por sobre subclasificación al momento de reutilizar código.

## Técnicas

#### Algoritmo de quitar codigo repetido:

1. Copiar lo repetido a "un lugar"
2. Parametrizar lo que cambia
3. Nombrar la nueva abstracción
4. Reemplazar lo repetido por la nueva abstracción

#### Reemplazar if por polimorfismo

1. Crear una jerarquía de clases con una clase por cada condición del if (si es que no existen).
2. Mover el cuerpo del if de cada condición a cada abstracción del paso 1) utilizando un mensaje polimórfico.
3. Nombrar el mensaje polimórfico.
4. Nombrar las abstracciones generadas en el paso `1.`
5. Reemplazar el if por el envío del mensaje polimórfico.
6. Buscar el objeto polimórfico (si es necesario)

## Buenas prácticas

- Definir mensajes abstractos de forma explícita (en Smalltalk: `self subclassResponsibility`)
