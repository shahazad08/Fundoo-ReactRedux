import {INPUT_EMAIL,INPUT_PASSWORD, INPUT_FIRST_NAME, INPUT_LAST_NAME, INPUT_CONFIRMPASSWORD, REGISTER_SUCCESS, REGISTER_ASYNC, REGISTER_ERR0R, INPUT_SERVICE, CLOSE_ERROR_TOAST, CLOSE_SUCCESS_TOAST} from '../constants/actionTypes';

export default (state={
    firstName:"",
    lastName:"",
    service:"",
    email:"",
    password:"",
    confirmPassword:"",
    success:[],
    loading:false,
    error:[],
    errorFlag:false,
    successFlag:false
    },action)=>{
        switch(action.type){
            case INPUT_FIRST_NAME:
            return{
                ...state,
                firstName:action.payload
            }
            case INPUT_LAST_NAME:
            return{
                ...state,
                lastName:action.payload
            }
            case INPUT_SERVICE:
            return{
                ...state,
                service:action.payload
            }
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
            case INPUT_CONFIRMPASSWORD:
            return{
                ...state,
                confirmPassword:action.payload
            }
            case REGISTER_SUCCESS:
            return{
                ...state,
                success:action.payload,
                successFlag:true,
            }
            case REGISTER_ASYNC:
            return{
                ...state,
                loading:true
            }
            case REGISTER_ERR0R:
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
            case CLOSE_SUCCESS_TOAST:
            return{
                ...state,
                successFlag:false
            }
            
            default:
            return state

        }
    }