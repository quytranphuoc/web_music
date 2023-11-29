import axios from "axios";
const key = "18d8dc115d954615a6fe8522598e8a97";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});
const getPopularGame = axiosCreate.get("/games?key=" + key);
const getMovieDetails = (id) => axiosCreate.get("./games/" + id + "/movies");
const getGameListByGenreId = (id) =>
  axiosCreate.get("./game?key=" + key + "&genres=" + id);
export default {
  getPopularGame,
  getMovieDetails,
  getGameListByGenreId,
};
