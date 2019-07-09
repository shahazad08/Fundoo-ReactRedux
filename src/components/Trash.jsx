import React,{Component} from 'react';
import {connect} from 'react-redux';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { TRASHNOTE, INPUT_ISTRASH, DELETENOTE, RESTORE } from '../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
    // inputTrash:(value)=>dispatch({
    //     type:INPUT_ISTRASH,payload:value
    // }),

    moveTrash:(value) => dispatch({
        type:TRASHNOTE,payload:value
    }),
    deleteNote:(value)=>dispatch({
        type:DELETENOTE,payload:value
    }),
    restoreNote:(value)=>dispatch({
        type:RESTORE,payload:value
    })
})


function mapStateToProps(state){
    console.log("TRSS",state.AllNotes.isDeleted);
    console.log("Trasg",state.AllNotes.trashNote);
    
    
    
    return({
        // note:state.DisplayPage.note
        
        isDeleted:state.AllNotes.isDeleted,
        trashNote:state.AllNotes.trashNote,
        trashNotes:state.DisplayPage.trashNotes
    })
}
class Trash extends Component{
    constructor(props){
        super(props);
        this.state={
            openPopper:false
        }
    }
    OpenPopper(event){
        const { currentTarget } = event;
        this.setState({
            openPopper:!this.state.openPopper,
            anchorEl:currentTarget
            
        })
    }

    handleDelete(data){
        data.isDeleted=true
        // this.props.inputTrash(true)
        this.props.moveTrash(data)
        

        console.log("My dataaa",data.isDeleted);
        console.log("My IDDD",data.id);
    }

    handleDeleteForever(data){
        data.isDeleted=true
        this.props.deleteNote(data)

    }
    handleRestore(data){
        data.isDeleted=false
        this.props.restoreNote(data)
    }
    render(){
        console.log("Deletes Note",this.props.note);
        return(
            <div>
                <img style={{ width:'20px', marginTop: '1px'}} src={require('../assests/more.png')} alt="More"
                            onClick={(event)=>this.OpenPopper(event)}
                            />
                            {!this.props.trashNotes?
                             <Popper open={this.state.openPopper} placement="bottom" anchorEl={this.state.anchorEl}> 
                             <Paper>
                             <MenuList>
                         <MenuItem onClick={()=>this.handleDelete(this.props.note)}>Delete Note </MenuItem>
                         <MenuItem>Add Label</MenuItem>
                         </MenuList>
                             </Paper>
                             </Popper>
                             :
                             <Popper open={this.state.openPopper} placement="bottom" anchorEl={this.state.anchorEl}> 
                             <Paper>
                             <MenuList>
                         <MenuItem onClick={()=>this.handleDeleteForever(this.props.note)}>Delete Forever</MenuItem>
                         <MenuItem onClick={()=>this.handleRestore(this.props.note)}>Restore</MenuItem>
                         </MenuList>
                             </Paper>
                             </Popper>}

            </div>
        )
    }
}export default connect(mapStateToProps,mapDispatchToProps)(Trash);