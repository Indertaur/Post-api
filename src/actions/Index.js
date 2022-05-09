export const addPost = (title, desc) => {
    return{
        type: "ADD_POST",
        payload: {
            id: new Date().getTime().toString(),
            title: title,
            desc: desc
        }
    }   
}

export const editPost = (id, title, desc) => {
    return{
        type: "EDIT_POST",
        payload: {
            id: id,
            title: title,
            desc: desc
        }
    }   
}

export const selectPost = (id) => {
    return{
        type: "SELECT_POST",
        id: id
    }   
}

export const deletePost = (id) => {
    return{
        type: "DELETE_POST",
        id: id
    }   
}

export const addComment = (post_id ,comment) => {
    return{
        type: "ADD_COMMENT",
        payload: {
            post_id: post_id,
            id: new Date().getTime().toString(),
            comment: comment
        }
    }   
}


export const addReply = (comment_id ,reply) => {
    return{
        type: "ADD_REPLY",
        payload: {
            comment_id: comment_id,
            id: new Date().getTime().toString(),
            reply: reply
        }
    }   
}
