import { INPUT_RESET_PASSWORD, INPUT_RESET_CONFIRMPASSWORD } from "../constants/actionTypes";

export default (state={
    password:"",
    confirmPasssword:""
    },action)=>{
        switch(action.type){
            case INPUT_RESET_PASSWORD:
            return{
                ...state,
                password:action.payload
            }
            case INPUT_RESET_CONFIRMPASSWORD:
            return{
                ...state,
                confirmPasssword:action.payload
            }
            default:
            return state
        }
    }
