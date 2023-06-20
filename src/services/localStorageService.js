function saveData({token, username}) {
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
}
function loadData() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  return {username, token}
}
function deleteData() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
}

export default {
  saveData,
  loadData,
  deleteData,
};
