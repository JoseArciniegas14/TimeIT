const getEndpoint = async (url, urlOptions) => {
  try {
    let resUrl = url;
    let res = urlOptions
      ? await fetch(resUrl, urlOptions)
      : await fetch(resUrl);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    let json = await res.json();
    return json;
  } catch (err) {
    let message = err.statusText || "Ocurrio un Error Desconocido";
    return `Error ${err.status}: ${message}`;
  }
};

const getJson = async (endpoints) => {
  try {
    let res = await fetch(endpoints);
    if (!res.ok)
      throw {
        status: res.status,
        statusText: res.statusText,
        statusUrl: res.url,
      };
    let json = await res.json();
    return json;
  } catch (err) {
    let message = err.statusText || "Ocurrio un Error";
    return `Error ${err.status}: ${message} - Url: ${err.statusUrl}`;
  }
};

const getMultipleEndPoints = async (...endpoints) => {
  let res = endpoints.map(getJson);
  if (typeof res === "string") return res;
  let json = await Promise.all(res);
  return json;
};

export { getEndpoint, getMultipleEndPoints };
