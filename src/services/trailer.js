import axios from "axios"

export function Trailer(titleTrailer){
    // let youtubeApi = "AIzaSyCZ8agHG0VVLTK-crHIyRwoAGv9O2jryWM"
    let youtubeApi = 'AIzaSyAhp1O2no-nMzzsH1deP9TLsqOS0X-eyRY'
    return axios.create({
        // baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeApi}q=${titleTrailer}&type=video&maxResults=1`
        baseURL:  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${titleTrailer}&key=${youtubeApi}`
    })
}
