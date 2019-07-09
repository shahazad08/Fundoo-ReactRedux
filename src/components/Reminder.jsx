import React,{Component} from 'react';
import { connect } from 'react-redux';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { IconButton, Tooltip, Card, TextField} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import { deflateSync } from 'zlib';
import { INPUT_REMINDER, REMINDER_NOTE, UPDATE_REMINDER } from '../constants/actionTypes';
import DatePicker from "react-datepicker";
const mapDispatchToProps = dispatch => ({
    inputReminder:(date) => dispatch({
        type: INPUT_REMINDER,payload:date
    }),
    inputUpdatereminder:(data)=>dispatch({
        type:UPDATE_REMINDER,payload:data
    }),
    updateReminder:(data)=>dispatch({
        type:REMINDER_NOTE,payload:data
    })
})
function mapSateToProps(state){
    // console.log("Reminder",state.Note.reminder);
    
    return({
        reminder:state.Note.reminder,
        reminder:state.AllNotes.reminder
    })
}

const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            paperAnchorBottom: {
                width:150,
                height:10
            },
        },
    }
})

class Reminder extends Component{
   constructor(props){
       super(props);
       this.state={
           open:false,
           anchorEl:null, 
           date:"", 
           time:""
       }
    //    this.handleReminder = this.handleColor.bind(this);
    this.handleClick=this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this);
    
    // this.handleTimeChange=this.handleTimeChange.bind(this)
   }
   handleChange(event) {
       console.log("Today Date",event.target.value);
    this.setState({
      date:event.target.value
    });
  }

  handleTimeChange(event){
    console.log("Today Date",event.target.value);
    this.setState({
        time:event.target.value
      });


  }
  async handleClick(event){
    const { currentTarget } = event;
       console.log("i open toggle")
      await  this.setState({
            open:!this.state.open,
            anchorEl:currentTarget
        })
        console.log("after set state"+this.state.anchorEl);
        console.log("after set state"+this.state.open);

   }

   handleClose(){
    this.setState({ open: false });
  };

   setTodayReminder(event){
    // var rem=event.target.value;
    // console.log("Payload Value= for Update.....=>",rem);
    try
    {
        // this.handleClose();
        // let ampm = parseInt(new Date().getHours()) >= 8 ? "PM" : "AM";
        // var date = new Date().toDateString();
        var date=new Date();
        // var dt  = date.split(/\-|\s/);
        // dates=dt.slice(0,3).reverse().join('-') + ' ' + dt[3]
        // var date = new Date().toDateString()
        // date.setHours(20,0,0);
        // let value = date + ", 8:00 "+ampm;
        console.log("in reminder1==>",date);
        // var rem=event.target.value;
        // console.log("Payload Value",rem);
        this.props.inputReminder(date);
    }
    catch(err)
    {
        console.log("error in set reminder for today",err);
    }
  }
  setTodayReminderWithUpdate(event,data){
    try
    {
        this.handleClose();
        var date = new Date().toDateString()
        data.reminder=date
        this.props.updateReminder(data)
        this.props.inputUpdatereminder(date);

console.log("Date GMT",date);

        // let ampm = parseInt(new Date().getHours()) >= 8 ? "PM" : "AM";
        // var date = new Date().toDateString();
        // let value = date + ", 8:00 "+ampm;
        // console.log("in reminder1==>",value);
        // // var rem=event.target.value;
        // // console.log("Payload Value",rem);
        // data.reminder=value
        this.props.updateReminder(date);
        // this.props.inputReminder(value);
    }
    catch(err)
    {
        console.log("error in set reminder for today",err);
    }

  }


    render(){
        
        return(
            this.props.note?
            (
                <div>
                <Tooltip title="Reminder">
                    <img src={require('../assests/note_reminder.svg')} alt="reminder"  
                    onClick={(event)=>this.handleClick(event)}/>
                   </Tooltip>
    
                          
                          <Popper  placement="bottom-end" open={this.state.open} anchorEl={this.state.anchorEl} >
                          <Paper>
                            <MenuList>
                          <MenuItem  onClick={(event)=>{this.setTodayReminderWithUpdate(event,this.props.note)}}>  Later today:8:00</MenuItem>
                          <MenuItem onClick={(event)=>this.setTo}>List of reminder 2</MenuItem>
                          <MenuItem>List of reminder 3</MenuItem>
                          <MenuItem>
                         <TextField type="date"
                          value={this.state.date}
                         onChange={()=>this.handleChange(event)}
                         />
          </MenuItem>
          <MenuItem>
          <TextField type="time"
          onChange={()=>this.handleTimeChange(event)}
          value={this.state.time}/>

          
          </MenuItem>
                          </MenuList>
                          </Paper>
                          </Popper>
                      
                  
                          </div>
            ):
            (
                <div>
                <Tooltip title="Reminder">
                    <img src={require('../assests/note_reminder.svg')} alt="reminder"  
                    onClick={(event)=>this.handleClick(event)}/>
                   </Tooltip>
    
                          
                          <Popper  placement="bottom-end" open={this.state.open} anchorEl={this.state.anchorEl} >
                          <Paper>
                            <MenuList>
                          <MenuItem  onClick={(event)=>{this.setTodayReminder(event)}}>  Later today:8:00</MenuItem>
                          
                          <MenuItem onClick={(event)=>this.setTo}>List of reminder 2</MenuItem>
                          <MenuItem>List of reminder 3</MenuItem>
                          <MenuItem>
                         <TextField type="date"
                          value={this.state.date}
                         onChange={()=>this.handleChange(event)}
                         />
          </MenuItem>
          <MenuItem>
          <TextField type="time"
          onChange={()=>this.handleTimeChange(event)}
          value={this.state.time}/>

          
          </MenuItem>
                          </MenuList>
                          </Paper>
                          </Popper>
                      
                  
                          </div>
            )
          
        )
    }
}
export default connect(mapSateToProps,mapDispatchToProps)(Reminder);

// April: 30 days, May: 20 days.