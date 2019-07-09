import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import { Chip } from '@material-ui/core';
import newStyle from '../Style.less';
import Color from './Color';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';
import { COLORNOTES, OPEN_DIALOG } from '../constants/actionTypes';
import Reminder from './Reminder';
import Archive from './Archive';
import Pinned from './Pinned';
import Dialog from '@material-ui/core/Dialog';
import EditNote from '../components/EditNote';
import Trash from '../components/Trash';
import { log } from 'util';

const mapDispatchToProps = dispatch => ({
    openDialog: (data) => dispatch({
        type: OPEN_DIALOG,payload: data
    }),
})

function mapStateToProps(state){
    // console.log("Get Color Note",state.Note.color);
    // console.log("Update Reminder",state.Note.reminder);
    console.log("Grid View", state.DisplayPage.gridView);
    
  
    
    
    
    return({
        color:state.Note.color,
        reminder:state.Note.reminder,
        color:state.AllNotes.color,
        open:state.DisplayPage.open,
        gridView:state.DisplayPage.gridView

        

    })
}


class ShowCard extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            hovered:false
        }
    }
    handleClose(){
        this.setState({
            open:true
        })
            
    }
    handleOpen(event,data){
        this.props.openDialog(data)
    }
    MouseInvisible(event){
        
        this.setState(
            {
                hovered:false
            }
        )
    }

    MouseVisible(event){
        this.setState({
            hovered:true
        })
    }

    render(){

        // console.log("note in card"+JSON.stringify(this.props.note));
        var noteID=this.props.note.id
        // console.log("Note Id",noteID);
        // console.log("Visibility Focus",!this.state.hovered);
     
        return(
                <div className={!this.props.gridView? 
               newStyle.cardsdiv:
                newStyle.cardds}>
                {/* // 'cardsdiv':'cardds'}> */}
               
                  {/* Close={()=<Dialog on>this.handleClose()}> */}
                        <Card style={{
                            backgroundColor:this.props.note.color ,
                            width:'100%'                           
                            }}>
                          
                          
                            <div onClick={()=>this.handleOpen(event,this.props.note)}>
                                <div> 
                            <div className={newStyle.head}>
                            <h3>{this.props.note.title}</h3>
                            <div className={newStyle.pinned}>
                            {/* <img src={require('../assests/pinned.svg')} alt="pinned"/> */}
                            <div>
                          
                            <Pinned note={this.props.note}/>
                            </div>
                            </div>
                            
                        </div>
                        
                            </div>
                            <div className={newStyle.head1}>
                            <h3>{this.props.note.description}</h3>
                            </div>
                            </div>
                           
                            <div>
                                 <Chip variant="outlined " label={this.props.note.reminder.slice(0,3)} className={newStyle.remindervalue}>
                                </Chip>
                                </div>
                                {/* <div>
                                {!this.props.note.reminder?(
                                    <Chip variant="outlined " label={this.props.note.reminder} className={newStyle.remindervalue}>
                                </Chip>
                                ):
                                (
                                    null
                                )                     
                                }
                            </div> */}
                            {/* {!this.state.hovered?
                            <div className={newStyle.cardiv} onMouseEnter={()=>this.MouseVisible()}>
                           A
                            </div>
                            : */}
                            <div className={newStyle.cardiv} >
                            <div >
                                {/* <img src={require('../assests/note_reminder.svg')} alt="reminder" /> */}
                                <Reminder note={this.props.note}/>
                                </div>
                                <div>
                                <img src={require('../assests/note_collab.svg')} alt="collaborator" />
                                </div>
                                {/* <img src={require('../assests/note_color.svg')} alt="color" /> */}
                                <div>
                                <Color note={this.props.note}/>
                                </div>
                                {/* <IconButton onClick={(event)=>this.handleUpdateColor(event,this.props.note)}>
                                </IconButton> */}
                                <div>
                                <img src={require('../assests/note_image.svg')} alt="image" />
                                </div>
                                <div>
                                {/* <img src={require('../assests/note_archive.svg')} alt="archive" /> */}
                                <Archive note={this.props.note} />
                                {/* listen emitter event */}
                                </div>
                                {/* <div>
                            <img style={{ width:'20px', marginTop: '1px',marginRight: '11px'}} src={require('../assests/more.png')} alt="More"/>
                            </div> */}
                            <Trash note={this.props.note}/>
                            </div>
                            
                            <div className={newStyle.displayNone}>
                           
                            </div>
                            
                            {/* } */}
                        </Card>
                        {/* </Dialog> */}
            </div>
          
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowCard);