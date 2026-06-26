# Examen-Pensamiento-Computacional
# TRAGA TRAGA — Proyecto de Interacción

## Información Académica
•⁠  ⁠Estudiante: Martina Sepúlveda
•⁠  ⁠*Asignatura:* Pensamiento Computacional
•⁠  ⁠*Evaluación:* Entrega de Examen Final
•⁠  ⁠*Fecha de Entrega:* 26 de Junio, 2026

## Descripción del Proyecto
"TRAGA TRAGA" es un juego interactivo desarrollado en *p5.js* que evalúa la coordinación y el tiempo de reacción del usuario. El sistema funciona bajo el modelo de una Máquina de Estados , alternando entre diferentes pantallas y lógicas matemáticas dependiendo de las acciones del jugador.

## 1. Etapas de Interacción (Estados del Sistema)

El flujo del programa está estructurado en tres fases controladas por la variables de estados ⁠. Esta separación es útil porque permite separar las partes del juego.

•⁠  ⁠*Estado 0 (Inicio):* El sistema genera un entorno visual pasivo (decorado con un bucle ⁠ for ⁠ de elipses aleatorias). Su utilidad es preparar al usuario y esperar una confirmación (la tecla ⁠ ENTER ⁠) para activar la música e iniciar el juego.
•⁠  ⁠*Estado 1 (Juego Activo):* Es el núcleo de la interacción. Figuras geométricas descienden sobre un fondo de video en bucle. El usuario interactúa deslizando su ratón en el eje X para agarrar las figuras. Aquí el código calcula colisiones, suma puntos, resta vidas y aumenta la dificultad (velocidad) en tiempo real.
•⁠  ⁠*Estado 2 (final):* El sistema detiene el juego y evalúa las variables resultantes. Dependiendo de si ⁠ puntos >= 10 ⁠ (victoria) o ⁠ vidas <= 0 ⁠ (derrota), imprime un mensaje en pantalla. Permite reiniciar el ciclo devolviendo todas las variables a su valor inicial al presionar la tecla ⁠ R ⁠.

## 2. Comandos Principales y su Utilidad Operativa

La lógica del proyecto se sostiene sobre las siguientes funciones fundamentales de p5.js:

•⁠  ⁠*⁠ mouseX ⁠ y ⁠ keyPressed() ⁠:* * Utilidad: Son los puentes de comunicación entre el sistema del jugador y el software. ⁠ mouseX ⁠ actualiza constantemente la posición de la barra receptora, mientras que ⁠ keyPressed() ⁠ escucha eventos de teclado para las transiciones de estado.
•⁠  ⁠*Algoritmo de Colisión (Condicionales ⁠ if ⁠ con ⁠ && ⁠):*
    * Utilidad: El bloque ⁠ if  es el motor de las reglas del juego. Valida espacialmente si la figura descendente entró en el área exacta de la barra del jugador, permitiendo catalogar entre un "acierto" y un "fallo".
•⁠  ⁠*⁠ map(puntos, 0, 10, 50, 110) ⁠: Traduce el progreso del jugador en un cambio visual. Escala dinámicamente el tamaño de las figuras de 50 a 110 píxeles a medida que los puntos suben de 0 a 10. 
•⁠  ⁠*⁠ random() ⁠ e ⁠ int(random(3)) ⁠: Aportan la variabilidad necesaria para que el juego no sea predecible. Definen tanto la posición de aparición en el eje X (⁠ xFigura ⁠) como la selección aleatoria de la figura (círculo, rectángulo o triángulo).
•⁠  ⁠*⁠ image(miVideo) ⁠ y ⁠ sonidoFondo.loop() ⁠: Gestionan la carga multimedia. El video reemplaza el fondo sólido estático por una textura en movimiento, mientras que el sonido refuerza la inmersión de la etapa de juego activo.
<img width="2338" height="736" alt="image" src="https://github.com/user-attachments/assets/104c6cb9-740d-4d1f-b3df-bdbe2fbb8d70" />
<img width="3000" height="2400" alt="image" src="https://github.com/user-attachments/assets/a0eb2355-fae3-4d33-bab9-5aa04c27c9f5" />


 





