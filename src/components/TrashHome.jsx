import React,{Component} from 'react'
import Dashboard from '../components/Dashboard';
import Note from '../components/Note';
import GetNotes from '../components/AllNotes';
import newStyle from '../Style.less';
import EditNote from '../components/EditNote';
class TrashHome extends Component{
    render(){
        return(
            <div>
                <Dashboard props={this.props}/>
                <div className={newStyle.mainNote}>
                <Note/>
                </div>
                <EditNote/>
                {!this.props.changeView?
                <GetNotes/>
                :
                <GetNotes newNote={this.props.resultNote}/>
                }
            </div>
        )
    }
}
// }
export default TrashHome;