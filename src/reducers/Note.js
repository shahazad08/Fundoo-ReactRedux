import { INPUT_TITLE, INPUT_DESCRIPTION, INPUT_COLOR, INPUT_REMINDER, INPUT_ISPINNED, INPUT_ISARCHIVED, INPUT_ISTRASH, NOTE_SUCCESS, COLORNOTE_SUCCESS, COLORNOTE_ERROR, REMINDERNOTE_SUCCESS, REMINDERNOTE_ERROR } from "../constants/actionTypes";

export default (state={
    title:"",
    description:"",
    color:[],
    reminder:"",
    image: "",
    isArchived:false,
    isPined:false,
    isDeleted:false,
    resultNote:[],
    // colorNote:[],
    // errorColor:[],
    reminderNote:[],
    errorReminder:[],
    changeView:false
    },action)=>{
        switch(action.type){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            case INPUT_TITLE:
            return{
                ...state,
                title:action.payload
            }
            case INPUT_DESCRIPTION:
            return{
                ...state,
                description:action.payload
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            case INPUT_COLOR:
            return{
                ...state,
                color:action.payload
            }
            case INPUT_REMINDER:
            return{
                ...state,
                reminder:action.payload
            }
            case INPUT_ISPINNED:
            return{
                ...state,
                isPined:action.payload
            }
            case INPUT_ISARCHIVED:
            return{
                ...state,
                isArchived:action.payload
            }
            // case INPUT_ISTRASH:
            // return{
            //     ...state,
            //     isDeleted:action.payload
            // }
            case NOTE_SUCCESS:
            return{
                ...state,
                resultNote:action.payload,
                changeView:true
            }
            // case COLORNOTE_ERROR:
            // return{
            //     ...state,
            //     errorColor:action.payload
            // }
            // case COLORNOTE_SUCCESS:
            // return{
            //     ...state,
            //     colorNote:action.payload
            // }
            // case REMINDERNOTE_SUCCESS:
            // return{
            //     ...state,
            //     reminderNote:action.payload
            // }
            // case REMINDERNOTE_ERROR:
            // return{
            //     ...state,
            //     errorReminder:action.payload
            // }
            default:
            return state
        }
    }