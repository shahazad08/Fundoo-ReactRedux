import React,{Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import ShowCards from './ShowCards';
import newStyle from '../Style.less';
import { InputBase, Button, Chip } from '@material-ui/core';
import Color from './Color';
import Reminder from './Reminder';
import Archive from './Archive';
import Pinned from './Pinned';
import {connect} from 'react-redux';
import { UPDATE_TITLE, UPDATE_DESCRIPTION, CLOSE_DIALOG, UPDATENOTE } from '../constants/actionTypes';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const mapDispatchToProps = dispatch => ({
    // handleToggle:() => dispatch({
    //     type: OPEN_NOTE
    // }),
    updateTitle:(value)=>dispatch({
        type:UPDATE_TITLE,payload:value
    }),
    updateDescription:(value)=>dispatch({
        type:UPDATE_DESCRIPTION,payload:value
    }),
    closeDialog: () => dispatch({
        type: CLOSE_DIALOG
    }),
    noteEdit:(data)=>dispatch({
        type:UPDATENOTE,payload:data
    })
    
})



function mapStateToProps(state){
    console.log("My Valuews",state.DisplayPage.note);
    
    return({
        // title:state.Note.title,
        // description:state.Note.description,
        openNote:state.DisplayPage.openNote,
        openDialog:state.DisplayPage.openDialog,
        title:state.DisplayPage.title,
        description:state.DisplayPage.description,
        note:state.DisplayPage.note

        // closeDialog:
        

    })
}
class EditNote extends Component{
    constructor(props){
        super(props);
        this.state={
            // open:false,
            openNote:false
        }
    }
    // handleOpen(event,data){
    //     this.setState({
    //         open:true
    //     })
    // }
    handleTitleUpdateChange(event,data){
        data.title=event.target.value
        // console.log("Data Title",data.title);
        this.props.updateTitle(data.title)

    }
    handleDescriptionUpdateChange(event,data){
        data.description=event.target.value
        
        this.props.updateDescription(data.description)
    }

    
   
    handleToggle1(data){
        // var x={
        //     title:this.props.title,
        //     description:this.props.description
        // }
        // console.log("Titlesssdadda",+JSON.stringify(data));
        console.log("NoteRing",data);
        console.log("NoteRingss",data.id);
        
        
        
        this.props.noteEdit(data)
        this.props.closeDialog()
        
    }
    render(){
        console.log("Notessss-----",this.props.note);
        console.log("OPen Notesssss",this.props.openDialog);
        
        
        return(
            <ClickAwayListener onClickAway={()=>this.handleToggle1()}>
                   
                                <Dialog open={this.props.openDialog}>  
                                <Card  className={newStyle.cardd}style={{
                               backgroundColor:this.props.color
                               }}>
                                <div className={newStyle.inputnote}>
                                
                            <div>
                                   <InputBase
                                       multiline
                                       className='inputbase'
                                       value={this.props.note.title}
                                       onChange={(event)=>this.handleTitleUpdateChange(event,this.props.note)}
                                       placeholder='Title' />
                            
                               </div>
                              
                               <div>
                               {/* <img src={require('../assests/pinned.svg')} alt="pinned"/> */}
                               <Pinned note={this.props.note}/>
                               </div>
                               </div>
                               <div className={newStyle.inputnote}>
                                   <InputBase
                                       multiline
                                       className='inputbase'
                                       value={this.props.note.description}
                                       onChange={(event)=>this.handleDescriptionUpdateChange(event,this.props.note)}
                                       placeholder='Take a Note...' />
                               </div>
   
                               <div>
                                   {
                                       this.props.reminder?
                                       (
                                           
                                           <Chip  variant="outlined " label={reminder} className={newStyle.remindervalue}>
                                           </Chip>
                                       ):
                                       (
                                           null
                                       )
                                   }
                               </div>
                               
                               <div className={newStyle.imagesnotes}>
                               <div>
                               <img src={require('../assests/note_collab.svg')} alt="collab" />
                               </div>
                               {/* <img src={require('../assests/note_reminder.svg')} alt="reminder"/> */}
                               <Reminder note={this.props.note}/>
                               <div>
                               <Color note={this.props.note}/>
                               </div>
                               {/* <img src={require('../assests/note_color.svg')} alt="color"/> */}
                               <div>
                               <img src={require('../assests/note_image.svg')} alt="Image"/>
                               </div>
                               <div>
                               <Archive note={this.props.note}/>
                               </div>
                               <div className={newStyle.btn}>

                               <Button onClick={()=>this.handleToggle1(this.props.note) }>Close</Button>
                               </div>
   
                               </div>
                               {/* </div> */}
                               <div>
                                   </div>
                                   </Card>
                                   </Dialog>
                                  
                   
                </ClickAwayListener>
               
        
        )
    }
}export default connect(mapStateToProps,mapDispatchToProps)(EditNote);