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
function fetchGameScores(slug) {
  return instance.get("/games/" + slug+'/scores');
}

function fetchUser(username) {
  return instance.get("/users/" + username);
}

export default {
  fetchGames,
  fetchGame,
  fetchGameScores,
  fetchUser,
  login,
  signout,
  register,
};
