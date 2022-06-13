---
layout: page
title: Apuntes
---

* toc
{:toc}

## Presentaciones <img alt="github icon" width="20px" src="./assets/icons/presentacion.svg" />

- [01 Introducción a la materia](https://docs.google.com/presentation/d/1ST938Jz3ue72WwHPF8NED9oD8npSO91YCp-HT4ASvKk/edit?usp=sharing)
- [01B Introducción al desarrollo de software](https://docs.google.com/presentation/d/1RzytcrdgN8_kpnF4EwwvqYrsV1UaE-uayCYpLiK8D4s/edit?usp=sharing)
- [02 Historia de Smalltalk](https://docs.google.com/presentation/d/11n9qoshAkUwpw85IDaSIMsNzmMopCmdWh0ve0Vvotrg/edit?usp=sharing)
- [08 Organización del conocimiento](https://docs.google.com/presentation/d/1xO-XXfD3g2DhVYWm_Ux3YIDY_tCURWM_nAjVxYEHnDs/edit?usp=sharing)
- [16 Testing Funcional](https://drive.google.com/file/d/1E9AvAHDNfYs2KS8A8yzLZpXxQNe2VbxQ/view?usp=sharing) 

## Ejercicios en clase <img alt="github icon" width="20px" src="./assets/icons/practica.svg" />

Pueden encontrarlos en el repo de [Ejercicios en clase](https://github.com/algoritmos-iii/ejercicios-en-clase-2022-1c)

## Git <img alt="github icon" width="20px" src="https://icongr.am/devicon/git-plain.svg?size=148&color=currentColor" />

- [Tutorial de remotes para ejercicios](https://gist.github.com/iloyarte/2543280524166ad63f46ea326322cc1c)

- [Apunte del taller de Git](https://docs.google.com/document/d/1VwJUVTMz1psGqdaNR2NJWo8mtPoK2FvDB1cP9xQObcQ/edit?usp=sharing)

### Taller de git <img alt="github icon" width="22px" src="https://icongr.am/clarity/film-strip.svg?size=148&color=currentColor" />

<iframe width="360" height="215" src="https://www.youtube.com/embed/L0RHt3P6S94" title="Taller de git - 20202c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="360" height="215" src="https://www.youtube.com/embed/OgXfPAw2WoU" title="Taller de git" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Parciales viejos <img alt="exam icon" width="22px" src="./assets/icons/examen.png" />

Podes encontrar parciales de cuatrimestres anteriores en el siguiente [repo](https://github.com/algoritmos-iii/parciales-viejos) para poder practicarlos y llegar mejor a rendir.

## Apunte teórico <img alt="github icon" width="20px" src="https://icongr.am/clarity/library.svg?size=128&color=currentColor" />

<p class="text-muted">Esta sección se irá completando con el correr del cuatrimestre, a medida que vayamos aprendiendo conceptos nuevos :) </p>

### Conceptos fundamentales

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

### Conceptos del paradigma

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
- Define el **COMO**
- 1 mensaje -> 1 o más métodos asociados
- Son objetos
- `self`: Pseudo-variable que hace referencia al objeto receptor en el contexto de un método.

<p class="sub-h4 ">Colaboradores:</p>

- Otro objeto con el que voy a colaborar. Relación de conocimiento. Variables.
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

<p class="sub-h4 ">Closure:</p>

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

<p class="sub-h4 ">Acerca de los métodos y mensajes en smalltalk </p>

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

## Otros conceptos importantes del paradigma

### Subclasificación:

  - Clase: Objeto que representa un concepto. Ej: Número, Auto.
  - Subclasificación: Nos sirve para organizar el conocimiento en jerarquías (Ontología de conocimientos)
  - Clase abstracta -> No tiene realizaciones concretas -> No existen entes de la realidad que puedo relacionar exclusivamente a ese concepto -> No existen instancias de esa clase.
    - Tiene al menos un mensaje abstracto
    - Mensajes abstracto: No tiene método asociado (en Smalltalk, creamos el método pero lo implementamos con "self subclassResponsibility")

### Heurísticas de diseño:

  - Modelar 1:1 entre ente de la realidad y objeto.
  - Buscamos que el conjunto de mensajes sea minimal -> Bajo acoplamiento, alta cohesión.
  - Guiarnos por el aspecto funcional conduce a buenos modelos.
  - Detectar y quitar código repetido para generar un nuevo conocimiento / hacer explícito un concepto ("reíficar")
  - Nombrar a los objetos (incluyendo colaboradores externos, internos, temporales) según el rol que cumplen en cada contexto.
  - Evitar romper encapsulamiento.
  - Favorecer composicion/delegacion por sobre subclasificacion/herencia.

## Técnicas
### Algoritmo para Quitar código repetido

1. Copiar lo repetido a otro lado
2. Parametrizar lo que cambia
3. Nombrar la nueva abstraccion
4. Usar la nueva abstraccion

### Reemplazar if por polimorfismo

1. Crear una jerarquía de clases con una clase por cada condición del if (si es que no existen).
2. Mover el cuerpo del if de cada condición a cada abstracción del paso 1) utilizando un mensaje polimórfico.
3. Nombrar el mensaje polimórfico.
4. Nombrar las abstracciones generadas en el paso `1.`
5. Reemplazar el if por el envío del mensaje polimórfico.
6. Buscar el objeto polimórfico (si es necesario)

### TDD

1. Escribir el test más sencillo que se me ocurra.
2. Correrlo para comprobar que falle y hacerlo pasar con la implementación más simple posible.
3. Reflexionar. ¿Se puede mejorar? Si es así, refactorizar.

### Buenas prácticas

- Categorizar los mensajes
- Implementar mensajes abstractos con "self subclassResponsibility"
