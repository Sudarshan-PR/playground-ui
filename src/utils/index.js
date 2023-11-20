import axios from "axios";

const base_url = "http://api.playground.com";

const compileCode = (data, callback, callbackError) => {
  axios
    .post(base_url + "/compile", {
      code: data.code,
      language: data.language,
    })
    .then((resp) => {
      callback(resp.data);
    })
    .catch((err) => {
      callbackError(err);
    });
};

export { compileCode };
