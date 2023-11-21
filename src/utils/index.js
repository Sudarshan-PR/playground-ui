import axios from "axios";

// const base_url = "http://api.playground.com";
// const base_url_ws = "ws://ws.playground.com";

const base_url = "https://moral-factually-hermit.ngrok-free.app";
const base_url_ws = "wss://moral-factually-hermit.ngrok-free.app";

const compileCode = (data, callback, callbackError) => {
  axios
    .post(base_url + "/compile", {
      code: data.code,
      language: data.language,
      userid: data.userid,
    })
    .then((resp) => {
      callback(resp.data);
    })
    .catch((err) => {
      callbackError(err);
    });
};

const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";

  // Create an array of 32-bit unsigned integers
  const randomValues = new Uint32Array(length);

  // Generate random values
  window.crypto.getRandomValues(randomValues);
  randomValues.forEach((value) => {
    result += characters.charAt(value % charactersLength);
  });
  return result;
};

const registerNotifications = (userid, callback) => {
  const socket = new WebSocket(`${base_url_ws}/ws?user=${userid}`);
  socket.addEventListener("open", (event) => {
    socket.send("ping.");
  });

  socket.addEventListener("message", (event) => {
    callback(event.data);
  });
};

// Generate UserID
localStorage.setItem("userid", generateRandomString(20));

const getUserID = () => localStorage.getItem("userid");

export {
  compileCode,
  registerNotifications,
  generateRandomString,
  getUserID,
  base_url_ws,
};
