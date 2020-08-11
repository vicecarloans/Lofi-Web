export const ADD_UPLOADS = '@UPLOAD/ADD_UPLOADS'

export const addUploads = (uploads) => ({
    type: ADD_UPLOADS,
    payload: {
        uploads
    }
})
