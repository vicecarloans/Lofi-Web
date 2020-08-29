import Axios from "axios";
import api from "./domain";

export async function fetchRecentAlbumService(offset, limit){
    const {data} = await Axios.get(api(`album?offset=${offset}&limit=${limit}`))
    return data
}

export async function fetchPopularAlbumService(offset, limit){
    const {data} = await Axios.get(api(`album/popular?offset=${offset}&limit=${limit}`))
    return data
}