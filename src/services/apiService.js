import instance from "../utils/http";

function fetchGames(params) {
  return instance.get("/games", {
    params,
  });
}
function login(body) {
  return instance.post("/auth/signin", body);
}
function register(body) {
  return instance.post("/auth/signup", body);
}
function signout(token) {
  return instance.post(
    "/auth/signout",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}

function fetchGame(slug) {
  return instance.get("/games/" + slug);
}

export default {
  fetchGames,
  fetchGame,
  login,
  signout,
  register,
};
