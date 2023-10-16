export const callService = async (
  endPointUrl,
  method = "POST",
  params,
  headers = null
) => {
  // eslint-disable-next-line no-undef
  const token = auth?.getToken() ?? "";
  try {
    // eslint-disable-next-line no-undef
    const fetch = await $fetch(
      !params?.urlFullPath ? config.BASE_API + endPointUrl : endPointUrl,
      {
        onRequest({ options }) {
          // Set the request headers
          options.headers = options.headers || {};
          options.method = method;
          if (method !== "PUT" && method !== "POST") {
            options.query = params;
          } else {
            if (params?.urlFullPath) {
              delete params?.urlFullPath;
            }
            options.body = params;
          }

          if (!headers) {
            options.headers["Content-Type"] = "application/json";
            options.headers.Accept = "application/json";
          }

          if (token) {
            options.headers.authorization = `Bearer ${token}`;
          }

          if (headers && headers.token) {
            options.headers.authorization = headers.token;
          }

          if (params?.noToken) {
            options.headers.authorization = "";
          }
          // options.headers['Access-Control-Allow-Origin'] = '*';
        },
        // eslint-disable-next-line no-unused-vars
        onRequestError({ request, options, error }) {},
        // eslint-disable-next-line no-unused-vars
        onResponse({ request, response, options }) {},
        onResponseError(resp) {
          throw resp;
        },
      }
    );

    if (fetch?.error?.value) {
      throw {
        statusCode: fetch?.error?.value?.status,
        message: fetch?.error?.value?.data?.error?.message,
        code: fetch?.error?.value?.data?.error?.code,
      };
    }

    if (typeof fetch === "string") {
      try {
        return JSON.parse(fetch);
      } catch (e) {
        return fetch;
      }
    }

    return fetch;
  } catch (e) {
    console.warn(e);
    throw {
      statusCode: e?.response?.status,
      message:
        e?.response?._data?.error?.message || e?.response?._data?.message,
      code: e?.response?._data?.error?.code || e?.response?._data?.error_code,
      data: e?.response?._data,
    };
  }
};

export const get = async (endPointUrl, params = {}) => {
  return await callService(endPointUrl, "GET", params);
};

export const post = async (endPointUrl, params = {}, headers = null) => {
  return await callService(endPointUrl, "POST", params, headers);
};

export const del = async (endPointUrl, params) => {
  return await callService(endPointUrl, "DELETE", params);
};

export const put = async (endPointUrl, params) => {
  return await callService(endPointUrl, "PUT", params);
};

export const useService = {
  get,
  post,
  del,
  put,
};
