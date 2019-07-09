import { combineReducers } from "redux";
import Login from '../src/reducers/Login';
import Register from '../src/reducers/Register';
import DisplayPage from '../src/reducers/DisplayPage';
import ForgetPassword from '../src/reducers/ForgetPassword';
import ResetPassword from '../src/reducers/ResetPassword';
import Note from '../src/reducers/Note';
import AllNotes from '../src/reducers/AllNotes';
import Label from '../src/reducers/Label';
export default combineReducers({
Login,
Register,
DisplayPage,
ForgetPassword,
ResetPassword,
Note,
AllNotes,
Label
})