import axios from "axios";

export default function getMovie(type) {
    let movieApi = "b8357d1e"
    return axios.create({
        baseURL: `https://www.omdbapi.com/?apikey=${movieApi}&${type}`
    })
}