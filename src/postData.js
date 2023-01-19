import { default as axios } from "axios";

const URl = "http://192.168.0.249:3000/api";

const postData = ({
  url,
  method = "POST",
  data = {},
  responseType = "json",
}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: `${URl}${url}`,
      method,
      data,
      responseType,
    };
    axios(config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        let response = { status: -1, message: null };
        reject(response);
        console.error("el error:", error);
      });
  });
};

const _getUsuario = async () => {
  try {
    const RES = await postData({
      url: `/usuarioAll`,
      method: "GET",
    });
    return RES;
  } catch (error) {
    return error;
  }
};

const _postUsuario = async (data) => {
  console.log("my body: ", data);
  try {
    const RES = await postData({
      url: `/usuario`,
      method: "POST",
      data,
    });
    return RES;
  } catch (error) {
    return error;
  }
};

const _putUsuario = async ({ cedula, data }) => {
  try {
    const RES = await postData({
      url: `/usuario/${cedula}`,
      method: "PUT",
      data,
    });
    return RES;
  } catch (error) {
    return error;
  }
};

const _deleteUsuario = async (cedula) => {
  try {
    const RES = await postData({
      url: `/usuario/${cedula}`,
      method: "DELETE",
    });
    return RES;
  } catch (error) {
    return error;
  }
};

export { _getUsuario, _postUsuario, _putUsuario, _deleteUsuario };
