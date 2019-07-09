import React,{Component} from 'react'
import Dashboard from '../components/Dashboard';
import Note from '../components/Note';
import GetNotes from '../components/AllNotes';
import newStyle from '../Style.less';
class DisplayReminders extends Component{
    render(){
        return(
            <div>
                <Dashboard/>
                <div className={newStyle.mainNote}>
                <Note/>
                </div>
                <GetNotes/>
                
            </div>
        )
    }
}
// }
export default DisplayReminders;