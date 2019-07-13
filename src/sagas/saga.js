
import {call,put,takeEvery,all} from 'redux-saga/effects'
import axios from 'axios';
import { REGISTER_ASYNC, REGISTER_SUCCESS, REGISTER_ERR0R, LOGIN_ASYNC, LOGIN_SUCCESS, LOGIN_ERROR, FORGET_PASSWORD_ASYNC, FORGET_PASSWORD_SUCCESS, FORGET_PASSWORD_ERROR, RESET_PASSWORD_ASYNC, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR, NOTE_ASYNC, NOTE_ERROR, NOTE_SUCCESS, GETNOTE_ASYNC, GETNOTE_SUCCESS, GETNOTE_ERROR, COLORNOTE_ASYNC, COLORNOTE_SUCCESS, COLORNOTE_ERROR, REMINDERNOTE_ASYNC, REMINDERNOTE_SUCCESS, REMINDERNOTE_ERROR, GETNOTES, ARCHIVEDNOTE_ASYNC, ARCHIVEDNOTE_SUCCESS, ARCHIVEDNOTE_ERROR, PINNEDNOTE_ASYNC, PINNEDNOTE_SUCCESS, PINNEDNOTE_ERROR, UPDATENOTE_ASYNC, UPDATENOTE_SUCCESS, UPDATENOTE_ERROR, TRASHNOTE_ASYNC, TRASHNOTE_SUCCESS, TRASHNOTE_ERROR, DELETENOTE_ASYNC, DELETENOTE_SUCCESS, DELETENOTE_ERROR, RESTORE_ASYNC, RESTORE_SUCCESS, RESTORE_ERROR, LABEL_ERROR, LABEL_SUCCESS, LABEL_ASYNC, COLLABORATOR_ASYNC, COLLABORATOR_SUCCESS, COLLABORATOR_ERROR } from '../constants/actionTypes';
import { getNotes } from '../services/noteservices';
import AllNotes from '../components/AllNotes';

const baseUrl = "http://34.213.106.173/api/"
var headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token'),
}

    
function* registerUser(action)
{
    var data=action.payload
    console.log("in data==>",data);

    try {
        console.log("data in  sag   " + JSON.stringify(data))
        yield put({ type: REGISTER_ASYNC });

       var response= yield call(register=>axios.post(baseUrl + "user/userSignUp", data))
        
            yield put({type:REGISTER_SUCCESS,payload:response.data})
            window.location.href = '/'
            
            // toast('Registered Successfully'+JSON.stringify(response));

    }
    catch (error) {
      
        console.log("error in saga--- " + error)
        yield put({ type: REGISTER_ERR0R, payload: error.response })
}


}
export function* fetchRegisterUser(){
    yield takeEvery('REGISTER_USER',registerUser);
}

/***********************Login API******************************************** */


function* loginUser(action){
    var data=action.payload
    console.log("Login data==>",data);
    try{
        console.log("data in  sag   " + JSON.stringify(data))
        yield put({type:LOGIN_ASYNC});

        var response=yield call(login=>axios.post(baseUrl+"user/login", data))
        yield put({type:LOGIN_SUCCESS,payload:response.data})
        console.log("Login token",response.data.userId);
        localStorage.setItem("token",response.data.id)
        window.location.href = '/home'

    }
    catch(error){
        console.log("error in saga--- " + error)
        console.log("Please Enter the Valid Details")
        yield put ({type:LOGIN_ERROR,payload:error});
    }
}

export function* fetchLoginUser(){
    yield takeEvery('LOGIN_USER',loginUser)
}


// ****************************Forget Password**********************************



function* forgetUser(action){
    var data=action.payload
    console.log("Data",data);
    

    try{
        console.log("data in  sagas   " + JSON.stringify(data))
        yield put({type:FORGET_PASSWORD_ASYNC});

        var response=yield call(login=>axios.post(baseUrl+"user/reset", data))
        yield put({type:FORGET_PASSWORD_SUCCESS,payload:response.data})
        window.location.href = '/resetpassword'
    }
    catch(error){
        console.log("error in saga--- " + error)
        yield put({type:FORGET_PASSWORD_ERROR,payload:error.response})
    }
}

export function* fetchForgetPasswordUser(){
    yield takeEvery('FORGET_PASSWORD_USER',forgetUser)
}

//********************************Reset Password******************************************************* */


function* resetUser(action){
    var data=action.payload
    console.log("Data",data);

    try{
        console.log("data in a saga"+JSON.stringify(data));
        yield put({type:RESET_PASSWORD_ASYNC});

        var response=yield call(reset=>axios.post(baseUrl + "user/reset-password",data))
        yield put({type:RESET_PASSWORD_SUCCESS,payload:response.data});
    }
    catch(error){
        console.log("Error in saga",error);
        yield put({type:RESET_PASSWORD_ERROR,payload:error})
    }
    
}

export function* fetchResetPasswordUser(){
    yield takeEvery('RESET_PASSWORD_USER',resetUser)
}




//********************************Create Note*********************************************** */


function* notes(action){
    var data=action.payload;
    console.log("Notes in saga"+JSON.stringify(data));
    console.log("Header"+JSON.stringify(headers));
    var formData = new FormData();
    formData.append('title', data.title); 
    formData.append('description', data.description); 
    formData.append("color",data.color)
    formData.append("reminder",data.reminder)
    formData.append("isArchived",data.isArchived);
    formData.append("isPined",data.isPined)
    console.log("Body Foorm Data",formData.title);
 
    
    try{

        yield put({type:NOTE_ASYNC})

        var response=yield call(note=>axios.post(baseUrl+'notes/addNotes',formData,{headers:headers}))
        yield put({type:NOTE_SUCCESS,payload:response.data})
        // getNotes()
        // AllNotes()
        
    }
    catch(error){
        console.log("Error in Note",error);
        yield put({type:NOTE_ERROR,payload:error})
        
    }
}

export function* fetchNote(){
    yield takeEvery('NOTES',notes)
}



//***********************************Get Note*********************************** */


// function* getnotes(action){
//     var data=action.payload;
//     var formData = new FormData();
//     formData.append('title', data.title); 
//     formData.append('description', data.description); 

//     console.log("Body Foorm Data",formData.title);

//     try{

//         yield put({type:GETNOTE_ASYNC})

//         var response=yield call(note=>axios.get(baseUrl+'notes/getNotesList',{headers:headers}))
//         yield put({type:GETNOTE_SUCCESS,payload:response.data})
        
//     }
//     catch(error){
//         console.log("Error in Get Note",error);
//         yield put({type:GETNOTE_ERROR,payload:error})
        
//     }
// }
    
// export function* getNotes(){
//     yield takeEvery('GETNOTES',getnotes)
// }

//****************************************************************************************** */
function* updateNote(action){
    var data=action.payload;
    // var formData=new FormData();
    // formData.append('color',data.color);
    // formData.append('noteID',data.noteID);
    // console.log("Body Foorm Data",formData.color);
    console.log("cccc",data.color);
    console.log("cccc",data.id);

    const reqData = {
        "color": data.color,
        "noteIdList": [data.id]
      }
    
    try{

        yield put({type:COLORNOTE_ASYNC})

        var response=yield call(note=>axios.post(baseUrl+'notes/changesColorNotes',reqData,{headers:headers}))
        yield put({type:COLORNOTE_SUCCESS,payload:response.data})
        console.log();
        yield put({type:GETNOTES})
    }
    catch(error){
        console.log("Error in Get Note",error);
        yield put({type:COLORNOTE_ERROR,payload:error})
        
    }
}

export function* fetchupdateColorNotes(){
    yield takeEvery('COLORNOTES',updateNote)
}

//*************************************************************************************** */

function* updateReminder(action){
    var data=action.payload
    console.log("My Note id list",data.id);
    console.log(("Reminder Value",data.reminder));
    
    const noteReminder={
        "reminder":data.reminder,
        "noteIdList":[data.id]
    }
    try{
        yield put({type:REMINDERNOTE_ASYNC})

        var response=yield call(note=>axios.post(baseUrl+'notes/addUpdateReminderNotes',noteReminder,{headers:headers}))
        yield put({type:REMINDERNOTE_SUCCESS,payload:response.data})
        console.log();
    }
    catch(error){
        console.log("Error in Get Note",error);
        yield put({type:REMINDERNOTE_ERROR,payload:error})
    }

}
export function* fetchupdateReminderNotes(){
    yield takeEvery('REMINDER_NOTE',updateReminder)
}







//*******************************Update Archived******************************************** */


function* updateArchived(action){
    var data=action.payload
    console.log("My Note id list",data.id);
    console.log(("Reminder Value",data.isArchived));
    
    const noteArchived={
        "isArchived":data.isArchived,
        "noteIdList":[data.id]
    }
    try{
        yield put({type:ARCHIVEDNOTE_ASYNC})

        var response=yield call(note=>axios.post(baseUrl+'notes/archiveNotes',noteArchived,{headers:headers}))
        yield put({type:ARCHIVEDNOTE_SUCCESS,payload:response.data})
        //event emmiter(call for a reference)
        console.log();
    }
    catch(error){
        console.log("Error in Get Note",error);
        yield put({type:ARCHIVEDNOTE_ERROR,payload:error})
    }

}

export function* fetchupdateArchivedNotes(){
    yield takeEvery('ARCHIVED_NOTE',updateArchived)
}


//************************************Pinned******************************************* */


function* updatePinned(action){
    var data=action.payload
    console.log("My Note id list",data.id);
    console.log(("Reminder Value",data.isPined));
    
    const notePinned={
        "isPined":data.isPined,
        "noteIdList":[data.id]  
    }
    try{
        yield put({type:PINNEDNOTE_ASYNC})

        var response=yield call(note=>axios.post(baseUrl+'notes/pinUnpinNotes',notePinned,{headers:headers}))
        yield put({type:PINNEDNOTE_SUCCESS,payload:response.data})
        console.log();
    }
    catch(error){
        console.log("Error in Get Note",error);
        yield put({type:PINNEDNOTE_ERROR,payload:error})
    }

}


export function* fetchupdatePinnedNotes(){
    yield takeEvery('PINNED_NOTE',updatePinned)
}




//***********************************Update Note**************************************** */


function* editNote(action){
    var data=action.payload
    console.log("My Note id list",data.id);
    console.log(("Data Value",data.title));
    var formData = new FormData();
    formData.append('noteId',data.id)
    formData.append('title', data.title); 
    formData.append('description', data.description); 
    try{
        yield put({type:UPDATENOTE_ASYNC})

        var response=yield call(note=>axios.post(baseUrl+'/notes/updateNotes',formData,{headers:headers}))
        yield put({type:UPDATENOTE_SUCCESS,payload:response.data})
        console.log();
    }
    catch(error){
        console.log("Error in Get Note",error);
        yield put({type:UPDATENOTE_ERROR,payload:error})
    }

}

export function* fetchupdateNote(){
    yield takeEvery("UPDATENOTE",editNote)
}

//*********************************Trash Note******************************************* */


function* moveTrash(action){
    var data=action.payload
    console.log("My Notessss id list",data.id);
    console.log(("Trash Value",data.isDeleted));
    
    const noteTrash={
        "isDeleted":data.isDeleted,
        "noteIdList":[data.id]
    }
    try{
        yield put({type:TRASHNOTE_ASYNC})

        var response=yield call(note=>axios.post(baseUrl+'notes/trashNotes',noteTrash,{headers:headers}))
        yield put({type:TRASHNOTE_SUCCESS,payload:response.data})
        console.log();
    }
    catch(error){
        console.log("Error in Get Note",error);
        yield put({type:TRASHNOTE_ERROR,payload:error})
    }

}


export function* fetchupdateTrashNote(){
    yield takeEvery('TRASHNOTE',moveTrash)

}

//************************************Delete Forever**************************************** */


function* deleteTrash(action){
    var data=action.payload
    console.log("My Notessss id list",data.id);
    console.log(("Trash Note Value",data.isDeleted));
    
    const noteDelete={
        "isDeleted":data.isDeleted,
        "noteIdList":[data.id]
    }
    try{
        yield put({type:DELETENOTE_ASYNC})

        var response=yield call(note=>axios.post(baseUrl+'notes/deleteForeverNOtes',noteDelete,{headers:headers}))
        yield put({type:DELETENOTE_SUCCESS,payload:response.data})
        console.log();
    }
    catch(error){
        console.log("Error in Get Note",error);
        yield put({type:DELETENOTE_ERROR,payload:error})
    }

}


export function* fetchupdateDeleteNote(){
    yield takeEvery('DELETENOTE',deleteTrash)

}


//********************************Restore Note********************************* */

function* restoreNote(action){
    var data=action.payload
    console.log("My Notessss id list",data.id);
    console.log(("Delete Note Value",data.isDeleted));
    
    const noteDelete={
        "isDeleted":data.isDeleted,
        "noteIdList":[data.id]
    }
    try{
        yield put({type:RESTORE_ASYNC})

        var response=yield call(note=>axios.post(baseUrl+'notes/trashNotes',noteDelete,{headers:headers}))
        yield put({type:RESTORE_SUCCESS,payload:response.data})
        console.log();
    }
    catch(error){
        console.log("Error in Get Note",error);
        yield put({type:RESTORE_ERROR,payload:error})
    }

}


export function* fetchupdateRestoreNote(){
    yield takeEvery('RESTORE',restoreNote)

}



//******************************************Label**************************************************** */



function* createLabel(action){
    var data=action.payload
    console.log("Label Name",data.label);
    console.log(("Delete Note Value",data.isDeleted));
    
    const labelCreate={
        "label":data.label,
        "isDeleted":data.isDeleted
    }
    try{
        yield put({type:LABEL_ASYNC})

        var response=yield call(label=>axios.post(baseUrl+'noteLabels',labelCreate,{headers:headers}))
        yield put({type:LABEL_SUCCESS,payload:response.data})
        console.log("My response",response);
    }
    catch(error){
        console.log("Error in Get Note",error);
        yield put({type:LABEL_ERROR,payload:error})
    }

}


export function* fetchcreateLabel(){
    yield takeEvery('LABELS',createLabel)

}

//**********************************Collaborator******************************************* */


function* addCollaborator(action){
    var data=action.payload
    console.log("Action",action);
    
    console.log("Collaborator Name",data);
    // console.log(("Delete Note Value",data.isDeleted));
    
    const collaboratorAdd={
        "searchWord":data
    }
    try{
        yield put({type:COLLABORATOR_ASYNC})

        var response=yield call(label=>axios.post(baseUrl+'user/searchUserList',collaboratorAdd,{headers:headers}))
        yield put({type:COLLABORATOR_SUCCESS,payload:response.data})
        console.log("My responsess",response);
    }
    catch(error){
        console.log("Error in Get Note",error);
        yield put({type:COLLABORATOR_ERROR,payload:error})
    }
}

export function* fetchsearchCollaborator(){
    yield takeEvery('ADD_COLLABORATOR',addCollaborator)
}

























export default function* rootSaga() {
    console.log('in root saga')
    yield all([
    fetchRegisterUser(),
    fetchLoginUser(),
    fetchForgetPasswordUser(),
    fetchResetPasswordUser(),
    fetchNote(),
    fetchupdateColorNotes(),
    fetchupdateReminderNotes(),
    fetchupdateArchivedNotes(),
    fetchupdatePinnedNotes(),
    fetchupdateNote(),
    fetchupdateTrashNote(),
    fetchupdateDeleteNote(),
    fetchupdateRestoreNote(),
    fetchcreateLabel(),
    fetchsearchCollaborator()
    ])
    }