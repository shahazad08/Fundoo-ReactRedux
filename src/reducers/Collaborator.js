import { INPUT_ADDCOLLABORATOR, COLLABORATOR_SUCCESS } from "../constants/actionTypes";

export default (state = {
    addCollab:"",
    resultCollab:""
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
            default:
            return state
    }
}
