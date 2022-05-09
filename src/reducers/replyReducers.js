
const intialData = {
    list : []
}

const replyReducers = (state = intialData, action) => {
    switch(action.type){
        case "ADD_REPLY":
            const {comment_id, id, reply} = action.payload;
            return{
                ...state,
                list: [
                    ...state.list,
                    {
                        comment_id: comment_id,
                        id: id,
                        reply: reply
                    }
                ]
            }
        default: return state;
    }
}

export default replyReducers