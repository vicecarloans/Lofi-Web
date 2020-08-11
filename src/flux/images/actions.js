export const ADD_IMAGES = '@IMAGES/ADD_IMAGES'

export const addImages = (images) => ({
    type: ADD_IMAGES,
    payload: {
        images
    }
})
