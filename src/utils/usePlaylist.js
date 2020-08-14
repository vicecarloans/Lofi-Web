import { useSelector, useDispatch } from "react-redux"
import { playlistSelector, addTracksToPlaylist, audioSelector, destroyPlaylist } from "flux/playlist"
import { allTrackSelector } from "flux/tracks";
import { imageSelector } from "flux/images";

export const usePlaylist = () => {
    
    const playlist = useSelector(audioSelector);
    const tracks = useSelector(allTrackSelector);
    const images = useSelector(imageSelector);
    const dispatch = useDispatch();

    function addToPlaylist(trackIds){
        dispatch(addTracksToPlaylist(trackIds))
    }

    function onPlaylistDestroy(){
        dispatch(destroyPlaylist())
    }

    const audioList = playlist.map(tid => {        
        const track = tracks[tid]
        return {
            name: track.title,
            musicSrc: track.path,
            cover: images[track.image].path,
            singer: track.author,
            key: track.id
        }
    })
    return [audioList, addToPlaylist, onPlaylistDestroy]

}