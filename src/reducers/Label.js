import { INPUT_LABEL, LABEL_ISDELETED, LABEL_SUCCESS, LABEL_ERROR, CLEAR_LABEL } from "../constants/actionTypes";

export default (state = {
    label: "",
    isDeleted: false,
    resultLabel: [],
    errorLabel: [],
    labelClear:""
}, action) => {
    switch (action.type) {
        case INPUT_LABEL:
            return {
                ...state,
                label: action.payload
            }
        case LABEL_ISDELETED:
            return {
                ...state,
                isDeleted: true
            }
        case LABEL_SUCCESS:
            return {
                ...state,
                resultLabel: action.payload
            }
        case LABEL_ERROR:
            return {
                ...state,
                errorLabel: action.payload
            }
        case CLEAR_LABEL:
        return{
            ...state,
            labelClear:""

        }
        default:
            return state
    }
}

