import {INPUT_EMAIL,INPUT_PASSWORD, LOGIN_SUCCESS, LOGIN_ERROR, CLOSE_ERROR_TOAST} from '../constants/actionTypes';
export default (state={
    email:"",
    password:"",
    success:[],
    errorFlag:false
    },action)=>{
        switch(action.type){
            case INPUT_EMAIL:
            return{
                ...state,
                email:action.payload
            }

            case INPUT_PASSWORD:
            return{
                ...state,
                password:action.payload
            }
            case LOGIN_SUCCESS:
            return{
                ...state,
                success:action.payload
            }
            case LOGIN_ERROR:
            return{
                ...state,
                error:action.payload,
                errorFlag:true
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