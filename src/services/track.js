import Axios from "axios";
import api from "./domain";

export async function fetchRecentTrackService(offset, limit){
    const {data} = await Axios.get(api(`track?offset=${offset}&limit=${limit}`))
    return data
}