import { ENPOINTS } from "./connect";
import { getResBD } from "../services";

class Auth {
  baseApi = ENPOINTS.BASE_API;

  async register(data) {
    let url = `${this.baseApi}${ENPOINTS.AUTH.REGISTER}`;
    let params = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      }),
    };
    let res = await getResBD({ url, method: "POST", params: params });
    return res;
  }

  async login(data) {
    let url = `${this.baseApi}${ENPOINTS.AUTH.LOGIN}`;
    let params = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      }),
    };
    let res = await getResBD({ url, method: "POST", params: params });
    return res;
  }
}

export { Auth };
