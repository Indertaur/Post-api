
const intialData = {
    list : []
}

const commentReducers = (state = intialData, action) => {
    switch(action.type){
        case "ADD_COMMENT":
            const {post_id, id, comment} = action.payload;
            return{
                ...state,
                list: [
                    ...state.list,
                    {
                        post_id: post_id,
                        id: id,
                        comment: comment
                    }
                ]
            }
        default: return state;
    }
}

export default commentReducers