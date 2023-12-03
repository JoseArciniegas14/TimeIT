- -------------------------------------------------------9 NUEVOS ENDPOINTS------------------------------------------------

  Todos se encuentran en el archivo de comunicacion, aun asi, aqui los dejo:

  Los que faltaban de notas
  GET ---> http://localhost:3000/api/v1/notes/all
  DELETE ---> http://localhost:3000/api/v1/notes/

  Estos son de habitos
  POST ---> http://localhost:3000/api/v1/habits/
  PATCH ---> http://localhost:3000/api/v1/habits/
  GET ---> http://localhost:3000/api/v1/habits/all
  DELETE ---> http://localhost:3000/api/v1/habits/

  Estos van dentro de los habitos tambien
  POST ---> http://localhost:3000/api/v1/habits/task
  PATCH ---> http://localhost:3000/api/v1/habits/task
  DELETE ---> http://localhost:3000/api/v1/habits/task

- --------------------------------------------------ACTUALIZACION DE ENDPOINTS----------------------------------------------
  Todos los endpoints que recogen la informacion masiva de los usuarios se les cambio el path, añadiendo /all al final
  Todo con el fin de mejorar la legibilidad de las funciones.

  Endpoints actualizados/añadidos:

  GET http://localhost:3000/api/v1/notes/all
  GET http://localhost:3000/api/v1/habits/all
  GET http://localhost:3000/api/v1/alarms/all

- -----------------------------------------------------RESPUESTAS COMPACTAS-------------------------------------------------

  Se cambiaron las respuestas de algunas funciones, ahora devuelven informacion mas precisa y relevante,
  las nuevas respuestas se encuentran en el archivo Comunicacion

-------------------------------------------------------ARREGLOS DE BUGS-----------------------------------------------------

- Sesiones: Solo se crean sesiones por medio de login
- Notas: Mala creacion en las tareas

#GRACIAS GPT
