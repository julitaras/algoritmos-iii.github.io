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

<p class="sub-h4 "> Closure:</p>

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
