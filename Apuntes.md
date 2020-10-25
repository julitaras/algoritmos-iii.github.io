---
layout: page
title: Apuntes
permalink: /apuntes/
---

# Presentaciones

- [01 Introducción a la materia](https://docs.google.com/presentation/d/1YjjkbSAQfZFj9ImwWzJElRzqa977T91xWtUjM30K2O0/edit?usp=sharing)
- [01B Introducción al desarrollo de software](https://docs.google.com/presentation/d/1U5iGjwEVai199uzbqJWTYlGrsaeetaqJbcC1UbMaJc4/edit?usp=sharing)
- [02 (Breve) Historia de Smalltalk](https://docs.google.com/presentation/d/16lt6Rc56Evfoj8mUIZngeANHE1Yth-8lZ2GcyeMoSq0/edit?usp=sharing)

# Ejercicios en clase

Pueden encontrarlos en este repo https://github.com/algoritmos-iii/ejercicios-en-clase

# Apunte teórico

## Conceptos fundamentales

Software / Programa:
- Modelo computable de un dominio de problema de la realidad (vs Secuencia de instrucciones)
- Paradigma de Objetos: Objetos que colaboran entre sí mediante el envío de mensajes para resolver un problema.

Desarrollo de software:
- Proceso de aprendizaje, iterativo e incremental
- Eje descriptivo, funcional e implementativo. Foco en eje descriptivo y funcional.

### Conceptos del paradigma

Objeto: 
- Representación de un ente de un dominio de problema
- Se define a partir de los mensajes que sabe responder
- Nueva definición (más precisa): Representación del rol que desempeña un ente de la realidad en el contexto de un dominio de problema

Mensaje: 
- Define el QUÉ de un objeto
- Define una responsabilidad
- Comportamiento definido a través de un método asociado a un objeto con el mismo nombre que el mensaje
- Conjunto de mensajes define la escencia de un objeto
- Son objetos

Método:
- Implementación de un mensaje
- Representa un conjunto de colaboraciones
- Define el CÓMO
- 1 mensaje -> 1 o más métodos asociados
- Son objetos
- self: Pseudo-variable que hace referencia al objeto receptor en el contexto de un método.

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
- Decimos que 2 o más objetos son polimórficos entre sí respecto a un conjunto de mensajes si (y sólo si) dichos mensajes son semánticamente iguales en los objetos en cuestión. Semánticamente iguales:
  1. Mismo nombre
  2. Los resultados son polimorficos
  3. Los colaboradores sean polimorficos
  4. Hacen "lo mismo"
- Puedo reemplazar objetos por otros haciendo más fácil extender mi programa
- Simplifica el entendimiento / Reduce vocabulario

## Filosofía Smalltalk

- Meta circular
- Ambiente de aprendizaje
- Fundacional del paradigma
- Ambiente vivo
- Imagen + VM
- Feedback inmediato
- "Todo es un objeto"

## Heurísticas de diseño

- Relación 1:1 entre objeto y ente de la realidad
- Buscamos que el conjunto de mensajes sea minimal -> bajo acoplamiento, alta cohesión
- Guiarnos por el aspecto funcional conduce a buenos modelos
- Nombrar a los objetos (colaboradores externos e internos) según el rol que cumplen en cada contexto.
- Evitar romper encapsulamiento.

## Técnicas

### Quitar código repetido

1) Copiar lo repetido a "un lugar"
2) Parametrizar lo que cambia
3) Nombrar la nueva abstracción
4) Reemplazar lo repetido por la nueva abstracción
