const SERVER_IP = "localhost:3000";

const ENPOINTS = {
  BASE_PATH: `http://${SERVER_IP}`,
  BASE_API: `${BASE_PATH}/api/v1`,
  AUTH: {
    REGISTER: `/auth/register`,
    LOGIN: `/auth/login`,
  },
  ROUTES: {
    USER: `/user`,
    ALARM: `/alarms`,
    NOTES: `/notes`,
    ROUTINES: `/routines`,
    HOME: `/home`,
  },
};

export { ENPOINTS };
// ? AL final de cada endpoint de rutas se coloca la accion a realizar
// ? EN usuario se coloca el id de usuario y la accion
