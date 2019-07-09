import { COLORNOTE_ERROR, COLORNOTE_SUCCESS, UPDATE_COLOR, UPDATE_REMINDER, REMINDERNOTE_SUCCESS, REMINDERNOTE_ERROR, UPDATE_ARCHIVE, ARCHIVEDNOTE_SUCCESS, ARCHIVEDNOTE_ERROR, PINNEDNOTE_SUCCESS, PINNEDNOTE_ERROR,  UPDATE_DESCRIPTION, TRASHNOTE_ASYNC, TRASHNOTE_SUCCESS, TRASHNOTE_ERROR, INPUT_ISTRASH, DELETENOTE_SUCCESS, DELETENOTE_ERROR, RESTORE_SUCCESS, RESTORE_ERROR } from "../constants/actionTypes";

export default (state={
    color:[],
    colorNote:[],
    errorColor:[],
    reminder:[],
    reminderNote:[],
    errorReminder:[],
    isArchived:false,
    archiveNote:[],
    archiveError:[],
    pinnedNote:[],
    pinnedError:[],
    title:"",
    description:"",
    isDeleted:false,
    isDeleted:"",
    trashError:"",
    // isDeleted:[],
    deleteNote:[],
    deleteError:[],
    restoreNote:[],
    restoreError:[]
   
    },action)=>{
        switch(action.type){
            case UPDATE_COLOR:
            return{
                ...state,
                color:action.payload
            }
            case COLORNOTE_ERROR:
            return{
                ...state,
                errorColor:action.payload
            }
            case COLORNOTE_SUCCESS:
            return{
                ...state,
                colorNote:action.payload
            }
            case UPDATE_REMINDER:
            return{
                ...state,
                reminder:action.payload
            }
            case REMINDERNOTE_SUCCESS:
            return{
                ...state,
                reminderNote:action.payload
            }
            case REMINDERNOTE_ERROR:
            return{
                ...state,
                errorReminder:action.payload
            }
            case UPDATE_ARCHIVE:
            return{
                ...state,
                isArchived:action.payload
            }
            case ARCHIVEDNOTE_SUCCESS:
            return{
                ...state,
                archiveNote:action.payload
            }
            case ARCHIVEDNOTE_ERROR:
            return{
                ...state,
                archiveError:action.payload
            }
            case PINNEDNOTE_SUCCESS:
            return{
                ...state,
                pinnedNote:action.payload
            }
            case PINNEDNOTE_ERROR:
            return{
                ...state,
                pinnedError:action.payload
            }
            case INPUT_ISTRASH:
            return{
                ...state,
                isDeleted:action.payload
            }
            case TRASHNOTE_SUCCESS:
            return{
                ...state,
                trashNote:action.payload
            }
            case TRASHNOTE_ERROR:
            return{
                ...state,
                trashError:action.payload
            }
            case DELETENOTE_SUCCESS:
            return{
                ...state,
                deleteNote:action.payload
            }
            case DELETENOTE_ERROR:
            return{
                ...state,
                deleteError:action.payload
            }
            case RESTORE_SUCCESS:
            return{
                ...state,
                restoreNote:action.payload
            }
            case RESTORE_ERROR:
            return{
                ...state,
                restoreError:action.payload
            }
            default:
            return state
        }
    }