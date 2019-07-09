import React,{Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { MenuItem , MuiThemeProvider,createMuiTheme} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { HOME_NOTE, REMINDERNOTES, ARCHIVENOTES, TRASHNOTES, OPENDIALOG_LABEL } from '../constants/actionTypes';
import EditLabel from '../components/EditLabel';
// import { hashHistory } from 'react-router;'


const mapDispatchToProps = dispatch => ({
    inputNotes:(value) => dispatch({
        type: HOME_NOTE,payload:value
    }),
    inputReminder:(value)=>dispatch({
        type:REMINDERNOTES,payload:value
    }),
    inputArchive:(value)=>dispatch({
        type:ARCHIVENOTES,payload:value
    }),
    inputTrash:(value)=>dispatch({
        type:TRASHNOTES,payload:value
    }),
    inputLabel:()=>dispatch({
        type:OPENDIALOG_LABEL
    })
})
function mapStateToProps(state){
    // console.log("Maps to Open State",+state.DisplayPage.open)
    // console.log("Notes",state.DisplayPage.allNotes);
    // console.log("Archive",state.DisplayPage.allNotes);
    
    
    return({
        open:state.DisplayPage.open,
        allNotes:state.DisplayPage.allNotes,
        archiveNotes:state.DisplayPage.archiveNotes,
        reminderNotes:state.DisplayPage.reminderNotes
        
    })
    // console.log("Map... ",+state.DisplayPage.OPEN)

}




const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: 70,
                width: 240,
            },
        },
    }
})
class Sidebar extends Component{

    handleNotesClick(event){
        // var value=true
        this.props.inputNotes(true)
        this.props.inputReminder(false)
        this.props.inputArchive(false)
        this.props.inputTrash(false)
    }

    handleReminderClick(event){
       
        this.props.inputReminder(true)
        this.props.inputNotes(false)
        this.props.inputArchive(false)
        this.props.inputTrash(false)
        this.props.history.push('reminders')
       
       
    }
   
    handleArchiveClick(){
        this.props.inputArchive(true)
        this.props.inputNotes(false)
        this.props.inputReminder(false)
        this.props.inputTrash(false)
    }
    handleTrashClick(){
        this.props.inputTrash(true)
        this.props.inputArchive(false)
        this.props.inputNotes(false)
        this.props.inputReminder(false)
    }

    handleLabelClick(){
        this.props.inputLabel()
    }
    render(){
        return(
            <MuiThemeProvider theme={theme}>
            <Drawer
                variant="persistent"
                open={this.props.open}
                width={250}
            >
              <MenuItem id="noteMenu" onClick={(event)=>this.handleNotesClick(event)}>
                    Notes
                </MenuItem>
                <MenuItem id="noteReminder" onClick={(event)=>this.handleReminderClick(event)} >
                    Reminder 
                </MenuItem>
                <Divider/>
                
                <MenuItem id="labelMenu"  onClick={(event)=>this.handleLabelClick(event)}>
                
                    Edit Labels
                </MenuItem>
                <MenuItem id="archiveMenu" onClick={(event)=>this.handleArchiveClick(event)}>
                    Archive
                </MenuItem>
                <MenuItem id="trashMenu" onClick={(event)=>this.handleTrashClick(event)}>
                    Trash
                </MenuItem>
                </Drawer>
                <EditLabel />
                </MuiThemeProvider>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)