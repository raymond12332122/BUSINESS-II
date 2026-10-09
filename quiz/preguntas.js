// ============================================================
//  ¿Me conoces? — edita este archivo con tus propias preguntas
// ============================================================
//  "respuesta" es el índice (empezando en 0) de la opción correcta.
//  Ejemplo: en ["Pizza", "Sushi", "Tacos", "Hamburguesa"], "Tacos" es 2.
//  Las preguntas de abajo son de ejemplo: cámbialas por datos reales.

const NOMBRE_QUIZ = "¿Me conoces?";

const PREGUNTAS = [
  {
    pregunta: "¿Cuál es mi comida favorita?",
    opciones: ["Pizza", "Sushi", "Tacos", "Hamburguesa"],
    respuesta: 2,
  },
  {
    pregunta: "¿Cuál es mi canción favorita ahora mismo?",
    opciones: ["Una canción de rock", "Una de reguetón", "Una balada", "Una de jazz"],
    respuesta: 1,
  },
  {
    pregunta: "¿Qué hago cuando tengo un día libre?",
    opciones: ["Duermo todo el día", "Salgo con amigos", "Juego videojuegos", "Veo series"],
    respuesta: 0,
  },
  {
    pregunta: "¿Cuál es mi color favorito?",
    opciones: ["Azul", "Verde", "Rojo", "Negro"],
    respuesta: 0,
  },
  {
    pregunta: "¿Cuál es mi mayor miedo?",
    opciones: ["Las alturas", "Las arañas", "La oscuridad", "Perder el celular"],
    respuesta: 3,
  },
  {
    pregunta: "¿Cuál es mi película favorita?",
    opciones: ["Titanic", "El Padrino", "Coco", "Interestelar"],
    respuesta: 3,
  },
];

// Mensajes según el porcentaje de aciertos (de mayor a menor "min").
const MENSAJES_RESULTADO = [
  { min: 90, titulo: "¡Eres mi mejor amigo/a!", texto: "Me conoces mejor que nadie. Nada se te escapa." },
  { min: 70, titulo: "¡Muy bien!", texto: "Me conoces bastante bien. Casi no tienes secretos para ti." },
  { min: 50, titulo: "Vas por buen camino", texto: "Algunas cosas sí, otras no. Hay que pasar más tiempo juntos." },
  { min: 25, titulo: "Ups…", texto: "Creo que necesitamos quedar para un café y ponernos al día." },
  { min: 0,  titulo: "¿Quién eres tú?", texto: "Hora de conocernos de nuevo desde cero." },
];
