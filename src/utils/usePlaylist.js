import { useSelector, useDispatch } from "react-redux"
import { addTracksToPlaylist, audioSelector, destroyPlaylist, playlistConfSelector, volumeChange, playModeChange, removeAudio } from "flux/playlist"
import { allTrackSelector } from "flux/tracks";
import { imageSelector } from "flux/images";


export const usePlaylist = () => {
    /* Configuration */
    const playlistConf = useSelector(playlistConfSelector);
    /* Playlist */
    const playlist = useSelector(audioSelector);
    const tracks = useSelector(allTrackSelector);
    const images = useSelector(imageSelector);

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
    return [playlistConf, audioList]

}

export const usePlaylistActions = () => {
    const dispatch = useDispatch();
    
    function onVolumeChange(vol){
        dispatch(volumeChange(vol))
    }
    function addToPlaylist(trackIds){
        dispatch(addTracksToPlaylist(trackIds))
    }

    function onPlaylistDestroy(){
        dispatch(destroyPlaylist())
    }
    function onPlayModeChange(mode){
        dispatch(playModeChange(mode))
    }
    function handleAudioRemoved(id){
        if(!id) {
            dispatch(destroyPlaylist())
            return
        }
        dispatch(removeAudio(id))

    }

    return {onVolumeChange, addToPlaylist, onPlaylistDestroy, onPlayModeChange, handleAudioRemoved}
}