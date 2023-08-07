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
- [08 Intro al Clasificación](https://docs.google.com/presentation/d/1ebe5MFcd0oUxuFGC-WXm82JQkiOHcf1uU6Jy0TcRovA/edit?usp=sharing)
- [17 TDD](https://docs.google.com/presentation/d/1kcRgVbE9S8GBapNIBj04UyfRo3mIdpmERjni4cbrpu8/edit?usp=sharing)
- [23 Intro a Patrones de diseño](https://docs.google.com/presentation/d/1e3GMTIaXV1eXdE7RpFmjxOcaNp3UyYEe6JIZh3SgSVg/edit?usp=sharing)

## Ejercicios en clase <img alt="github icon" width="20px" src="./assets/icons/practica.svg" />

Pueden encontrarlos en el repo de [Ejercicios en clase](https://github.com/algoritmos-iii/ejercicios-en-clase-2023-1c)

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

-------------

Objeto: 
- Representación de un ente de un dominio de problema
- El conjunto de mensajes que sabe responder un objeto define su esencia / lo define como tal.
- Representación del ROL que tiene un ente de la realidad en un contexto determinado 

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
- "self" -> Pseudo-variable que hace referencia al objeto receptor (en el contexto de un método). Se llama "this" en otros lenguajes.
- Son objetos

Colaborador:
- Objeto que forma parte de una colaboración con otro objeto.
- También conocidos como variables.
- Externo: Participa sólo para una colaboración en particular. Se llama también "parámetro".
- Interno: Tiene una relación de cercancía, participando normalmente en múltiples colaboraciones.

doesNotUnderstand:
El propio objeto decide que hacer si no sabe qué le estan diciendo (similar a lo que ocurre en la realidad)

Closure:
- Objeto que representa un bloque de código
- Diferencia con método: No está asociado a un mensaje (es anónimo)
- Representan conjunto de colaboraciones.
- Las variables en los closures están léxicamente enlazadas (lexically-bounded) al alcance (scope) del método. Esto quiere decir que el closure recuerda el valor de las variables por el lugar donde fueron definidas.

Subclasificación:
- Clase: Objeto que representa un concepto. Ej: Número, Auto.
- Subclasificación: Nos sirve para organizar el conocimiento en jerarquías (Ontología de conocimientos)
- Clase abstracta -> No tiene realizaciones concretas -> No existen entes de la realidad que puedo relacionar exclusivamente a ese concepto -> No existen instancias de esa clase.
  - Tiene al menos un mensaje abstracto
  - Mensajes abstracto: No tiene método asociado (en Smalltalk, creamos el método pero lo implementamos con “self subclassResponsibility”)

Heurísticas de diseño
-------------

- Modelar 1:1 entre ente de la realidad y objeto.
- Buscamos que el conjunto de mensajes sea minimal -> Bajo acoplamiento, alta cohesión.
- Guiarnos por el aspecto funcional conduce a buenos modelos.
- Detectar y quitar código repetido para generar un nuevo conocimiento / hacer explícito un concepto (“reíficar”)
- Nombrar a los objetos (incluyendo colaboradores externos, internos, temporales) según el rol que cumplen en cada contexto.
- Evitar romper encapsulamiento.
- Favorecer composicion/delegacion por sobre subclasificacion/herencia.

Algoritmo para quitar código repetido
---
1. Copiar lo repetido a "otro lado"
2. Parametrizar lo cambia
3. Nombrar la abstracción
4. Reemplazar lo repetido por la nueva abstracción

Organización del conocimiento
-------------------

1. Clasica - Aristoteles
2. Moderna - Wittgenstein

Algoritmo para quitar if
---

Paso 0: Acomodar los ifs
1. Crear una jerarquía de clases con una clase por cada condición del if (si es que no existen).
2. Mover el cuerpo del if de cada condición a cada abstracción del paso 1) utilizando un mensaje polimórfico.
3. Nombrar el mensaje polimórfico.
4. Nombrar las abstracciones generadas en el paso 1.
5. Reemplazar el if por el envío del mensaje polimórfico (si es necesario).
6. Definir el mensaje como abstracto en la superclase y borrar lo que ya no se use.
7. Buscar el objeto polimórfico (si es necesario)

