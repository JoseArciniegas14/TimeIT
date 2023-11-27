const SERVER_IP = "localhost:3000";

const ENPOINTS = {
  BASE: `http://${SERVER_IP}/api/v1`,
  AUTH: {
    REGISTER: `${BASE}/auth/register`,
    LOGIN: `${BASE}auth/login`,
  },
  USER_ROUTES: {
    GET: ``,
    PULL: ``,
    DELETE: ``,
    LOGOUT: ``,
  },
  ALARM: {
    GET: ``,
    CREATE: ``,
    PULL: ``,
    DELETE: ``,
  },
  NOTES: {
    GET: ``,
    CREATE: ``,
    PULL: ``,
    DELETE: ``,
  },
  ROUTINES: {
    GET: ``,
    CREATE: ``,
    PULL: ``,
    DELETE: ``,
  },
  RECENT: ``,
};
