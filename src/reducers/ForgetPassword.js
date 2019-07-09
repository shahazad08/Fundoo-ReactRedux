import {INPUT_EMAIL,FORGET_PASSWORD_SUCCESS, FORGET_PASSWORD_ERROR, CLOSE_ERROR_TOAST} from '../constants/actionTypes';
export default (state={
    email:"",
    success:[],
    error:[],
    errorFlag:false
    },action)=>{
        switch(action.type){
            case INPUT_EMAIL:
            return{
                ...state,
                email:action.payload
            }

            case FORGET_PASSWORD_SUCCESS:
            return{
                ...state,
                success:action.payload
            }
            case FORGET_PASSWORD_ERROR:
            return{
                ...state,
                error:action.payload,
                errorFlag:true,    
            }
            case CLOSE_ERROR_TOAST:
            return{
                ...state,
                errorFlag:false
            }
            default:
            return state

        }
    }