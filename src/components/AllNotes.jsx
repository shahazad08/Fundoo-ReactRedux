import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import newStyle from '../Style.less';
import { getNotes } from '../services/noteservices';
import { noteArray } from '../services/noteservices';
import ShowCard from './ShowCards';
import { connect } from 'react-redux';
import { red } from '@material-ui/core/colors';

function mapStateToProps(state) {

    console.log("Get Color Note", state.Note.color);
    console.log("All Notes Reminder",state.DisplayPage.reminderNotes);
    console.log("Menuuu",state.DisplayPage.open);
    

    return ({
        color: state.Note.color,
        reminder: state.Note.reminder,
        reminder: state.AllNotes.reminder,
        isPined: state.Note.isPined,
        allNotes:state.DisplayPage.allNotes,
        archiveNotes:state.DisplayPage.archiveNotes,
        reminderNotes:state.DisplayPage.reminderNotes,
        archiveNotes:state.DisplayPage.archiveNotes,
        open:state.DisplayPage.open,
        isDeleted:state.AllNotes.isDeleted,
        trashNotes:state.DisplayPage.trashNotes,
        changeView:state.Note.changeView,
        resultNote:state.Note.resultNote,

        
        // color:state.AllNotes.color
    })
}
class GetNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: []
        }
    }
    componentDidMount() {
        getNotes((err, data) => {
            if (err) {
                console.log(err);

            } else {
                console.log("notes--->" + data.data)
                this.setState({
                    note: [...data.data.data.data,this.props.resultNote]
                })
            }
        })
    }

    render() {
        // console.log("get notes All Notes", this.state.note);  
        // console.log("Note Id",noteID);
        var noteID
        let notearray = noteArray(this.state.note)
        console.log("Exception Notess", notearray);
        let allArray = []
        Object.keys(notearray).map((key) => {
            var k = key

            allArray.push(notearray[key])
        })
        console.log("notes agetrf array==-->" + JSON.stringify(allArray));
        let archiveArray = []
        let pinnedArray=[]
        let array = [];
        array = Object.keys(allArray).map((item) => {


            console.log("Notess Map o0f addaarraa==-->", allArray[item]);
            // console.log("Keys", key);
            // if(this.props.allNotes==true && this.props.archiveNotes==false && this.props.reminderNotes==false){
                if(allArray[item].isPined!==true&& allArray[item].isArchived!==true && allArray[item].isDeleted!==true){
                    return (
                        // this.setState({allNotes:true})
                        this.props.changeView?
                        <ShowCard note={allArray[item]}/>
                        :
                        <ShowCard note={allArray[item]}/>

                    )
                }
              
            // }
           
        })
        //*******************Array for Pinned*********************** */
        pinnedArray = Object.keys(allArray).map((item) => {

            console.log("Notess Map o0f addaarraa==-->", allArray[item]);
            // console.log("My Pin Notes",pinnedArray);
            
            if (allArray[item].isPined)
                return (
                    <ShowCard note={allArray[item]} />
                )
                // console.log("My Pinff Notes",pinnedArray);
        })
        
        //*******************Array of Archived***************************** */

        archiveArray=Object.keys(allArray).map((item)=>{
            if(allArray[item].isArchived)
            return(
                <ShowCard note={allArray[item]}/>
            )
        })

        //*******************Array of Reminder ********************************/
        let reminderArray=[]
        reminderArray=Object.keys(allArray).map((item)=>{
            if(allArray[item].reminder!="")
            return(
                <ShowCard note={allArray[item]}/>
            )
        })
        //****************Array of Trash Notes***************************** */
        let trashArray=[]
        trashArray=Object.keys(allArray).map((item)=>{
            if(allArray[item].isDeleted)
            return(
                <ShowCard note={allArray[item]}/>
            )
        })


        if(this.props.allNotes===true){
            
            return (
                !this.props.open?
                <div className={newStyle.getmodifycard}>
                    {
                        array
                    }
                    </div>
                    :
                    <div className={newStyle.getmodifycard}>
                    {
                        array
                    }
                    </div>
                
            )     
        }
        else if (this.props.reminderNotes===true){
            return (
                !this.props.open?
            
                <div className={newStyle.getcard}>
                    {
                        reminderArray
                    }
                    </div>
                    :
                    <div className={newStyle.getmodifycard}>
                    {
                        reminderArray
                    }
                    </div>

                    )
        }
        else if(this.props.archiveNotes===true){
            return (
                !this.props.open?
            
                <div className={newStyle.getcard}>
                    {
                        archiveArray
                    }
                    </div>
                    :
                    <div className={newStyle.getmodifycard}>
                    {
                        archiveArray
                    }
                    </div>

            )
        }
        else if(this.props.trashNotes===true){
            return (
                !this.props.open?
            
                <div className={newStyle.getcard}>
                    {
                        trashArray
                    }
                    </div>
                    :
                    <div className={newStyle.getmodifycard}>
                    {
                        trashArray
                    }
                    </div>
            )
        }

        return (
            !this.props.open?
            <div className={newStyle.getcard}>
                {
                    array
                }
                </div>
                :
                <div className={newStyle.getmodifycard}>
                {
                    array
                }

               
                    {/* {
                        pinnedArray
                    }  */}
                    
                    {/* {
                        archiveArray
                    } */}
                    {/* {
                        reminderArray
                    } */}
            
            </div>

        )
        
    }
}
export default connect(mapStateToProps, null)(GetNotes);