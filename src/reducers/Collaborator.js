import { INPUT_ADDCOLLABORATOR, COLLABORATOR_SUCCESS, SAVE_COLLABORATOR } from "../constants/actionTypes";

export default (state = {
    addCollab:"",
    resultCollab:"",
    userList:[]
}, action) => {
    switch (action.type) {
        case INPUT_ADDCOLLABORATOR:
            return {
                ...state,
                addCollab: action.payload
            }
        case COLLABORATOR_SUCCESS:
        return{
            ...state,
            resultCollab:action.payload
        }
        case SAVE_COLLABORATOR:
        return{
            ...state,
            userList:action.payload
        }
            default:
            return state
    }
}
