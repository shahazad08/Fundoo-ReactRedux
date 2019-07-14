import React,{Component} from 'react';
import { connect } from 'react-redux';
import { IconButton, Tooltip, Card} from '@material-ui/core';
import {MuiThemeProvider, createMuiTheme, withStyles } from "@material-ui/core/styles";
import { INPUT_ISARCHIVED, ARCHIVED_NOTE, CLOSE_ERROR_TOAST, CLOSE_SUCCESS_TOAST, GETNOTES } from '../constants/actionTypes';

import Snackbar from '@material-ui/core/Snackbar';
const mapDispatchToProps=dispatch=>({
    changeArchive:(value) => dispatch({
        type: INPUT_ISARCHIVED,payload:value
    }),
    updateArchive:(data)=>dispatch({
        type:ARCHIVED_NOTE,payload:data
    }),
    successClose:()=>dispatch({
        type:CLOSE_SUCCESS_TOAST
    }),
    GETNOTE:()=>dispatch({
        type:GETNOTES
    })

    // updatedArchive:(value)

})

function mapStateToProps(state){
    // console.log("Archive Position",state.Note.isArchived);
    // console.log("Titless",state.Note.title);
    // console.log("Deacription",state.Note.description);
    
    
    
    
    return({
        isArchived:state.Note.isArchived,
        errorFlag:state.Login.errorFlag,
        successFlag:state.Login.successFlag
       
    })
}

const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            paperAnchorBottom: {
              width:120,
              height:20
            },
        },
    }
})

class Archive extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            anchorEl:null,
            flag:false,
            unarchive:false
        }
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleToggle(event){
        const { currentTarget } = event;
        console.log("Event Handled",this.state.open);
        this.setState({
            open:!this.state.open,
            anchorEl:currentTarget
        })
    }
    successClose(){
        this.props.successClose();
    }
    handleClick(event){
        // this.setState({open:true});
        // setTimeout(()=>{
        // this.setState({open:false});

        // },5000)
        console.log("Arcdd",this.props.isArchived);
        if (this.props.isArchived===false){
            this.setState({
                isArchived:true,
                open:true   
            })
            setTimeout(()=>{
                this.setState({open:false});
        
                },5000)
            // this.props.isArchived=true
            this.props.changeArchive(true)
        }
        else if (this.props.isArchived===true){
            this.setState({
                isArchived:false,
                unarchive:true
            })
            setTimeout(()=>{
                this.setState({unarchive:false});
        
                },5000)
            this.props.changeArchive(false)
        }
        // let value
        // value=this.state.isArchived
        // console.log("caa",value);
        
        // console.log("Arc",this.state.isArchived);
        // console.log("AAA",this.props.isArchived);
      
    }


    handleUpdateclick(event,data){
        // this.setState({open:true});
        // setTimeout(()=>{
        // this.setState({open:false});

        // },5000)
        if (data.isArchived===false){
          data.isArchived=true
          this.setState({
              open:true
          })
          setTimeout(()=>{
            this.setState({open:false});
            },5000)
        }
        else if (data.isArchived===true){
            data.isArchived=false
            this.setState({
                unarchive:true
            })
            setTimeout(()=>{
              this.setState({unarchive:false});
              },5000)
        }
        // let value
        this.props.updateArchive(data)
        this.props.GETNOTE(data)
        

    }
    render(){
        // console.log("AAA",this.props.isArchived);
    
        // console.log("Arc",value);
        
        
        return(
            <MuiThemeProvider theme={theme}>
            {this.props.note?
            (
                <Tooltip title="Archive">
                 <img src={require('../assests/note_archive.svg')} alt="archive"
                 onClick={(event)=>{this.handleUpdateclick(event,this.props.note)}}
                 placement="bottom-end" anchorEl={this.state.anchorEl} 
                 />
                 </Tooltip>

            ):
                <Tooltip title="Archive">
                 <img src={require('../assests/note_archive.svg')} alt="archive"
                 onClick={(event)=>{this.handleClick(event)}}
                 placement="bottom-end" anchorEl={this.state.anchorEl} 
                 />
                 </Tooltip>
            }
            
    {/* {this.props.isArchived===true} */}
    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        
        open={this.state.open}
        autoHideDuration={6000} 
        onClose={()=>this.successClose()}  
        message="Note is Archived"
        />
         <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.state.unarchive}
        autoHideDuration={6000} 
        onClose={()=>this.successClose()}  
        message="Note is Unarchived"
        />
            </MuiThemeProvider>
        )
    }
}export default connect(mapStateToProps,mapDispatchToProps)(Archive)