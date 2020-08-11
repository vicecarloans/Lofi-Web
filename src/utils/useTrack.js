import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentTracks, isFetchingRecentTrackSelector, recentTrackSelector } from "flux/tracks";


export const useRecentTrack = (offset = 0, limit = 25) => {
 
    const dispatch = useDispatch()
    
    const data = useSelector(recentTrackSelector);

    function getTracks(offset = 0, limit = 25){
        dispatch(fetchRecentTracks(offset, limit))
    }

    useEffect(() => {
        getTracks(offset, limit)
    }, [offset, limit])


    return data
}