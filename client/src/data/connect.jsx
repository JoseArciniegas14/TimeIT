const SERVER_IP = "localhost:3000";

const ENPOINTS = {
  BASE_PATH: `http://${SERVER_IP}`,
  BASE_API: `http://${SERVER_IP}/api/v1`,
  AUTH: {
    REGISTER: `/auth/register`,
    LOGIN: `/auth/login`,
  },
  ROUTES: {
    USER: `/user`,
    LOGOUT: `/user/logout`,
    DELETE: `/user/delete`,
    ALARM: `/alarms`,
    NOTES: `/notes`,
    ROUTINES: `/routines`,
    HOME: `/home`,
  },
};

export { ENPOINTS };
