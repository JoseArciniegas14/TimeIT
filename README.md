# Como para iniciar el proyecto

> [!IMPORTANT]
> Tener en cuenta las dependencias que se usan y las
> versiones de estas, tambien unas del lado
> del servidor y otras del lado del cliente.

## Dependencias del server:

- bcryptjs: 2.4.3
- body-parser: 1.20.0
- connect-multiparty: 2.2.0
- cors: 2.8.5
- express: 4.18.1
- jsonwebtoken: 8.5.1
- mongoose: 6.6.1
- nodemon: 2.0.20

## Dependencias actuales del Cliente:

> [!WARNING]
> El cliente esta construido con Vite y React.

- react: 18.2.0
- react-dom: 18.2.0

## Iniciar el servidor/cliente

- Entrar en la carpeta [server o client]
- Ejecutar: yarn dev [Siendo la carpeta principal alguna de las 2]

> [!Note]
> Esto se hace para no mezclar todas las dependencias cliente/servidor en un mismo Json

### Cosas a revisar:

- [ ] Crear modelos (Api/controller/router) para guardar informacion de las notas en la db
- [ ] Crear modelos (Api/controller/router) para guardar informacion de las alarmas en la db (??)
- [ ] Crear modelos (Api/controller/router) para guardar informacion de las rutinas en la db
- [ ] REVISAR LO DE LA PAGINACION **(158)**
- [ ] Frontend **(190)**
- [ ] El Pt responsive
- [ ] La logica del programa
- [ ] Gestion de errores

## Organizacion

Panas, tratemos de llevar un orden el el proyecto y no llenar de archivos/codigo inncesesario las carpetas ya que podemos comprometer todo.
