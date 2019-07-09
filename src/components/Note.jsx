import React, { Component } from 'react';
import newStyle from '../Style.less';
import Card from '@material-ui/core/Card';
import { InputBase, Button, Chip } from '@material-ui/core';
import { connect } from 'react-redux';
import { OPEN_NOTE, CLOSE_NOTE, INPUT_TITLE, INPUT_DESCRIPTION, NOTES, OPEN_POPPER, CLOSE_POPPER } from '../constants/actionTypes';
import Color from './Color';
import Reminder from './Reminder';
import Archive from './Archive';
import Pinned from './Pinned';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
const mapDispatchToProps = dispatch => ({
    handleToggle:() => dispatch({
        type: OPEN_NOTE
    }),
    handleToggle1:()=>dispatch({
        type:CLOSE_NOTE
    }),
    
    inputTitle:(value)=>dispatch({
        type:INPUT_TITLE,payload:value
    }),
    inputDescription:(value)=>dispatch({
        type:INPUT_DESCRIPTION,payload:value
    }),
    NOTE:(data)=>dispatch({
        type:NOTES,payload:data
    }),
    openPopper:()=>dispatch({
        type:OPEN_POPPER
    }),
    closePopper:()=>dispatch({
        type:CLOSE_POPPER
    })
})
function mapStateToProps(state) {
    console.log("State of Open Note",+ state.DisplayPage.openNote)
    console.log("States of Notes" ,state.Note);
    console.log('Result',state.Note.resultNote);
    console.log("Color Note",state.Note.color);
    console.log("My Reminder Value",state.Note.reminder);
    console.log("Archive Positionsss",state.Note.isArchived);
    console.log("OPen Popper",state.DisplayPage.openPopper);
   
    
    
    
    // console.log("States of Notes" ,+state.Note.isPinned);
    
    
    return ({
        openNote: state.DisplayPage.openNote,
        title:state.Note.title,
        description:state.Note.description,
        color:state.Note.color,
        reminder:state.Note.reminder,
        image:state.Note.image,
        isPined:state.Note.isPined,
        isArchived:state.Note.isArchived,
        // isTrash:state.Note.isTrash,
        resultNote:state.Note.resultNote,
        openPopper:state.DisplayPage.openPopper,
        open:state.DisplayPage.open
    })
}
class Note extends Component {
    constructor(props){
        super(props);
        this.state={
            Note:{},
            open:false,
            anchorEl:null
           
        }
    }

    handleToggle() {
        this.props.handleToggle()
        }

    handleToggle1(){
        console.log("gjksdhkjs",this.props.reminder);
        console.log("Pinning Notes",this.props.isPined);
        
        
        // this.props.handleToggle1()
        if(this.props.title!=="" || this.props.description!=="")
        {
            var data={
                title:this.props.title,
                description:this.props.description,
                color:this.props.color,
                reminder:this.props.reminder,
                isArchived:this.props.isArchived,
                isPined:this.props.isPined
            }
            console.log("Title",+JSON.stringify(data));
            this.props.NOTE(data)
            // this.setState({
            //     Note:this.props.resultNote      
            // })
        }
    }

    handleTitleChange(event){
        this.props.inputTitle(event.target.value)
    }
    handleDescriptionChange(event){
        this.props.inputDescription(event.target.value)
    }

    handleclosePopper(){
        this.props.closePopper()
    }
    handleopenPopper(){
        this.props.openPopper()
    }
    OpenPopper(event){
        const { currentTarget } = event;
        this.setState({
            open:!this.state.open,
            anchorEl:currentTarget
        })
    }
    render() {
        // console.log("Open Note with Not",+!this.props.openNote)
        // console.log("Open Note",+this.props.openNote)
        var rSuccess=this.props.resultNote.status
    //     console.log("Result of My Note",rSuccess);
    //     console.log("Notesssa",Note);
    //    console.log("My Reminder",this.props.reminder);
       let rem=[];
       
       rem=this.props.reminder
       let reminder=JSON.stringify(rem)
       console.log("My Reminder--->  ",JSON.stringify(rem));
       console.log("Popop",this.state.open);
       

        return (
            !this.props.openNote?
                <div className={newStyle.mainnotediv}>
                
                    <Card  className={newStyle.cardd}style={{
                            backgroundColor:this.props.color,
                            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.27)'
                            }}>
                        
                        <div className={newStyle.inputnote}>
                            <InputBase onClick={()=>this.handleToggle()}
                                multiline
                                className='inputbase'
                                placeholder='Take a Note...' />
                        </div>
                        </Card>
                        </div>
                        :
                        <div className={newStyle.mainnotediv}>
               <Card  className={newStyle.cardd}style={{
                            backgroundColor:this.props.color,
                            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.27)'
                            }}>
                             <div className={newStyle.inputnote}>
                           
                         <div>
                                <InputBase
                                    multiline
                                    className='inputbase'
                                    value={this.props.title}
                                    onChange={(event)=>this.handleTitleChange(event)}
                                    placeholder='Title' />
                           
                            </div>
                            <div>
                            {/* <img src={require('../assests/pinned.svg')} alt="pinned"/> */}
                            <Pinned/>
                            </div>
                            </div>
                            <div className={newStyle.inputnote}>
                                <InputBase
                                    multiline
                                    className='inputbase'
                                    value={this.props.description}
                                    onChange={(event)=>this.handleDescriptionChange(event)}
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
                            <Reminder/>
                            
                            <div>
                            <Color/> 
                            </div>
                            {/* <img src={require('../assests/note_color.svg')} alt="color"/> */}
                            <div>
                            <img src={require('../assests/note_image.svg')} alt="Image"/>
                            </div>
                          
                            <div>
                            {/* <img src={require('../assests/note_archive.svg')} alt="archive"/> */}
                            <Archive/>
                            </div>
                            
                            <div>
                            
                            <img style={{ width:'20px', marginTop: '1px'}} src={require('../assests/more.png')} alt="More"
                            onClick={(event)=>this.OpenPopper(event)}
                            />
                            {/* {this.state.open? */}
                             <Popper open={this.state.open} placement="bottom" anchorEl={this.state.anchorEl}> 
                             <Paper>
                             <MenuList>
                         <MenuItem >Add Label</MenuItem>
                         <MenuItem>Delete Note</MenuItem>
                         </MenuList>
                             </Paper>
                             </Popper>
                             {/* :
                            null
                        } */}
                               
                            </div>
                          
                            
                            <div className={newStyle.btn}>
                            <Button onClick={()=>this.handleToggle1() }>Close</Button>
                            
                            </div>

                            </div>
                            {/* </div> */}
                            <div>
                               
                            </div>

                        
                    </Card>
                    </div> 
        )
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Note);