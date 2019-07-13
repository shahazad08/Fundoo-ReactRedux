import { OPEN_MENU, CLOSE_MENU, OPEN_PROFILE,UPDATE_TITLE, CLOSE_PROFILE, OPEN_NOTE, CLOSE_NOTE, HOME_NOTE, ARCHIVENOTES, PINNEDNOTES, REMINDERNOTES, OPEN_DIALOG, CLOSE_DIALOG, OPEN_POPPER, CLOSE_POPPER, UPDATE_DESCRIPTION, TRASHNOTES, OPENDIALOG_LABEL, CHANGE_GRID_VIEW, CHANGE_LIST_VIEW, OPEN_COLLABORATOR, CLOSED_COLLABORATOR } from "../constants/actionTypes";

export default (state={
    open:false,
    openProfile:false,
    openNote:false,
    allNotes:false,
    pinnedNotes:false,
    archiveNotes:false,
    reminderNotes:false,
    openDialog:false,
    note:[],
    title:"",
    description:"",
    openPopper:false,
    trashNotes:false,
    openDialoglabel:false,
    gridView:false,
    openCollab:false
    },action)=>{
        switch(action.type){
            case OPEN_MENU:
            return{
                ...state,
                open:true
            }
            case CLOSE_MENU:
            return{
                ...state,
                open:false
            }
            case OPEN_PROFILE:
            return{
                ...state,
                openProfile:true
            }
            case CLOSE_PROFILE:
            return{
                ...state,
                openProfile:false
            }
            case OPEN_NOTE:
            return{
                ...state,
                openNote:true
            }
            case CLOSE_NOTE:
            return{
                ...state,
                openNote:false
            }
            case HOME_NOTE:
            return{
                ...state,
                allNotes:action.payload
            }
            case ARCHIVENOTES:
            return{
                ...state,
                archiveNotes:action.payload
            }
            case PINNEDNOTES:
            return{
                ...state,
                pinnedNotes:action.payload
            }
            case REMINDERNOTES:
            return{
                ...state,
                reminderNotes:action.payload
            }
            case OPEN_DIALOG:
            return{
                ...state,
                openDialog:true,
                note:action.payload
            }
            case CLOSE_DIALOG:
            return{
                ...state,
                openDialog:false
               
            }
            case OPEN_POPPER:
            return{
                ...state,
                openPopper:true
            }
            case CLOSE_POPPER:
            return{
                ...state,
                openPopper:false
            }
            case UPDATE_TITLE:
            return{
                ...state,
                title:action.payload
            }
            case UPDATE_DESCRIPTION:
            return{
                ...state,
                description:action.payload
            }
            case TRASHNOTES:
            return{
                ...state,
                trashNotes:action.payload
            }
            case OPENDIALOG_LABEL:
            return{
                ...state,
                openDialoglabel:true
            }
            case CHANGE_GRID_VIEW:
            return{
                ...state,
                gridView:true
            }
            case CHANGE_LIST_VIEW:
            return{
                ...state,
                gridView:false
            }
            case OPEN_COLLABORATOR:
            return{
                ...state,
                openCollab:true
            }
            case CLOSED_COLLABORATOR:
            return{
                ...state,
                openCollab:false
            }
            default:
            return state
        }
    }

