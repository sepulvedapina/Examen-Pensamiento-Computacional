// variables cajas donde se guarda información
let estado = 0; // empieza en 0 el puntaje
let xFigura; //posición de la figura en horizontal
let yFigura; // posición de la figura en vertical
let Velocidad = 5; //velocidad de las figuras en el plano
let puntos = 0; // el juego empieza con 0 puntos y sube mediante come figuras
let vidas = 3; // el juego tiene 3 vidas (oportunidades) para jugar
let tipoFigura; // guarda las figuras que caeran
let miVideo; // variable para guardar video
let sonidoFondo; // variable para iniciar musica

function preload() {
  //para cargar sonido
  sonidoFondo = loadSound("musica.mp3");
}
function setup() {
  //funcion que corre solo una vez al inciar
  createCanvas(700, 600); // tamaño de lienzo
  // video
  miVideo = createVideo("video n.mp4"); //cargar video
  miVideo.loop(); // Hace que el video se repita en bucle
  miVideo.hide(); // hace que se oculte el video y solo se vea el del lienzo
  nuevaFigura(); //funcion que crea la primera figura
  console.log("El sistema ha iniciado correctamente. Esperando al jugador"); //mensaje que reproduce la consola
}

function draw() {
  // definir los estados del juego
  if (estado == 0) {
    //primer valor
    iniciodeljuego(); //inicio del juego
  }

  if (estado == 1) {
    // segundo valor
    juego(); //juego
  }

  if (estado == 2) {
    //tercer valor
    finaldeljuego(); //termino del juego
  }
}

//ahora empezamos a programar parte por parte del juego.
function iniciodeljuego() {
  //inicio del juego
  background(240, 230, 255); // fondo del juego
  //bucle de circulos decorativos
  for (let i = 0; i < width; i += 80) {
    //let i =0 quiero que empiece desde el borde 0
    //i<width limite del lienzo hasta donde puede llegar
    //Cada vez que termines de dibujar una circulo agrega otro a 80 px de distancia
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(random(width), random(height), random(10, 40));
  }

  textAlign(CENTER); // centra el texto
  fill(0); //relleno del texto
  textSize(40); // tamaño de la letra
  text("TRAGA TRAGA", width / 2, 220); //escribe el texto

  textSize(30); //tamaño del segundo texto
  text("MUEVE LA BARRA CON EL MOUSE", width / 2, 300); //escribe el texto

  textSize(30); //tamaño del tercer texto
  text("Presiona ENTER para comenzar", width / 2, 350); //escribe el texto
}

function juego() {
  // parte del juego
  // en vez de colocar background que es para colores solidos, coloco image para tener el video de loop en fondo del juego.
  image(miVideo, 0, 0, width, height);
  // empieza desde el 0,0 estirandose hasta la altura y ancho de mi lienzo

  //segundo bucle
  for (let y = 0; y < height; y += 40) {
    //letY=0 pegado al techo y<height limite hasta abajo y+=40 distancia entre los guiones
    fill(255, 255, 255, 150); // Color blanco con opacidad
    noStroke();
    rect(width / 2 - 2, y, 4, 20); // Dibuja cada guion de la línea punteada y el -2 sirve para correr la mitad del rectangulo
  }

  fill(0);
  textSize(24);
  textAlign(LEFT); //alinear a la izquierda
  text("Puntos:" + puntos, 40, 40);
  text("Vidas:" + vidas, 40, 80);

  let tamaño = map(puntos, 0, 10, 50, 110);
  // pts min y max con tamaño min y max de fig

  //la barra del jugador que sigue al mouse
  fill(0); //color rectangulo
  rect(mouseX - 60, height - 40, 120, 20);
  // el rectangulo sigue al mouse x justo en el centro del rectangulo, esta alineado al fondo del lienzo -40 para que no quede pegado,ancho y alto

  fill(150, 100, 200); // color de la figura que caerá
  if (tipoFigura == 0) {
    // si sale la primera al azar sera circulo
    ellipse(xFigura, yFigura, tamaño, tamaño);
  }
  //si sale la segunda la figura que aparecerá será un rectangulo
  if (tipoFigura == 1) {
    rect(xFigura, yFigura, tamaño, tamaño);
  }
  //si sale la tercera variable la figura será un trianguulo
  if (tipoFigura == 2) {
    triangle(
      xFigura,
      yFigura - tamaño / 2,
      xFigura - tamaño / 2,
      yFigura + tamaño / 2,
      xFigura + tamaño / 2,
      yFigura + tamaño / 2
    );
  }

  yFigura += Velocidad; // hacemos que la figura baje aumentandole la velocidad, ejemplo; cae una figura, la "come" y luego cae otra más rapido.todas inician desde 0 de y

  //1- si la figura toca la barra del jugador (condiciones)
  if (yFigura > height - 60 && xFigura > mouseX - 60 && xFigura < mouseX + 60) { // si la figura bajo lo suficiente, esta dentro de mi lado derecho tanto como izquierdo.
    puntos++;
    Velocidad += 0.5; //aumenta la velocidad
    console.log("¡Figura atrapada! Llevas: " + puntos + " puntos.");
    nuevaFigura(); //reinicia la figura de arriba que cae
  }
  //2. si la figura cae al suelo sin que la atrape
  if (yFigura > height) {
    vidas--;
    console.log("¡Cuidado! Figura perdida. Te quedan: " + vidas + " vidas.");
    nuevaFigura();// reinicia la figura que cae de arriba
  }
  //3.condiciones para terminar el juego y pasar al estado 2
  if (puntos >= 10 || vidas <= 0) {
    estado = 2;
  }
}

function finaldeljuego() {
  background(30);
  fill(255);
  textAlign(CENTER);
  textSize(50);
  //1. ganas todos los puntos
  if (puntos >= 10) {
    // si los puntos son mayores o iguales a 10 saldra GANASTE con tu puntaje final
    text("¡GANASTE!", width / 2, 250); //width/2 para que quede centrado
    text("Puntaje Final:" + puntos, width / 2, 300);
  }

  // 2. te quedaste sin vidas
  if (vidas <= 0) {
    if (puntos <= 5) {
      // Si sacaste 5 o menos puntos
      text("CASI CASI...", width / 2, 250);
    } else {
      // de lo contrario si sacaste mas de 5 muestra esto:
      text("GAME OVER", width / 2, 250);
    }
    text("Puntaje Final:" + puntos, width / 2, 300);
  }
  textSize(30);
  text("Reiniciar con R", width / 2, 390);
}

function nuevaFigura() {
  //elige una posición x al azar
  xFigura = random(50, width - 50);
  yFigura = 0; //la vuelve arriba del todo
  tipoFigura = int(random(3)); //elige entre 0,1 o 2 de forma aleatoria y el int es para que quede como numero entero no decimal.
}

function keyPressed() {
  //si estoy en la pantalla de inicio y presiono ENTER
  if (estado == 0 && keyCode === ENTER) {
    estado = 1; //pasa de incio a juego
    sonidoFondo.loop(); //prende el sonido al apretar el ENTER
  }
  //si estoy en la pantalla final y presiono R vuelvo al inicio
  if (estado == 2 && (key == "r" || key == "R")) {
    //Resetea todos los valores al estado original con R o r
    puntos = 0; // vuelve a los o puntos
    vidas = 3; // reinicia las vidas
    Velocidad = 5; //vuelve a la velocidad incial
    estado = 0; //vuelve al incio
    nuevaFigura();
    sonidoFondo.stop(); // apaga el sonido
  }
}
