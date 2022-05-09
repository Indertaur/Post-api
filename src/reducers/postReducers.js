
const intialData = {
    list : [],
    item : ''
}

const postReducers = (state = intialData, action) => {
    switch(action.type){
        case "ADD_POST":
            const {id, title, desc} = action.payload;
            return{
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        title: title,
                        desc: desc
                    }
                ]
            }
        case "DELETE_POST":
            const newList = state.list.filter((item) => item.id !== action.id)
            return{
                ...state,
                list: newList
            }
        case "SELECT_POST":
            const viewPost = state.list.find((item) => item.id === action.id)
            return{
                ...state,
                item: viewPost
            }
        case "EDIT_POST":
            return{
                ...state,
                list: state.list.map((item) => 
                    item.id === action.payload.id ? {
                        id: action.payload.id,
                        title: action.payload.title,
                        desc: action.payload.desc,
                    } : item,
                )
            }
        default: return state;
    }
}

export default postReducers