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
  return instance.post("/auth/signin", body);
}

export default {
  fetchGames,
  login,
  register,
};
