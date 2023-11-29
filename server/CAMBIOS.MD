- --------------------------------------------------NUEVO SISTEMA DE GETME--------------------------------------------------

  Ahora, al hacer login automaticamente se obtienen los datos del
  usuario se envian como respuesta en formato Json

- --------------------------------------------------CAMBIOS EN LOS ENDPOINTS------------------------------------------------

  Ahora los enponits de User y Alarm junto con los futuros enponits,
  no necesitaran de apostillas (A menos que sea necesario), en su escritura:

  - LOGIN Y REGISTER SI tienen su distintivo.

  ANTES http://localhost:3000/api/v1/alarms/update
  AHORA http://localhost:3000/api/v1/alarms/

- ----------------------------------------------RESPUESTAS POR JSON, CONTENT-TYPE-------------------------------------------

  El backend manda la informacion necesaria para renderizar por medio de archivos JSON.
  Tambien la informacion recibida se hace por este medio, y se manejan los content-type.

- ------------------------------------------------------NUEVO ENDPOINT------------------------------------------------------

  getAllAlarms, esto se debe ejecutar desde el frontend para
  obtener todas las alarmas de un usuario y renderizarlas

- ----------------------------------------------------FUNNCIONES LOGICAS----------------------------------------------------

  Se agregaron las funciones que validan, verifican y ejecutan el funcionamiento de las alarmas

* ------------------------------------------ELIMINAR TODA LA INFROMACION DE USUARIO-----------------------------------------

  Se añadio la funcion de eliminar TODA la informacion relaionada al usuario en la base de datos ya que antes quedaban las alarmas registradas por este despues de eliminada su cuenta.
