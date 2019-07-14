import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OPEN_COLLABORATOR, CLOSED_COLLABORATOR, INPUT_ADDCOLLABORATOR, ADD_COLLABORATOR, SAVE_COLLABORATOR } from '../constants/actionTypes';
import { Card, Tooltip, Button, TextField, Chip } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import newStyle from '../Style.less';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import {MuiThemeProvider, createMuiTheme, withStyles } from "@material-ui/core/styles";
const mapDispatchToProps = dispatch => ({
    inputCollaborator: () => dispatch({
        type: OPEN_COLLABORATOR
    }),
    closeCollaborator: () => dispatch({
        type: CLOSED_COLLABORATOR
    }),
    addCollaborator: (value) => dispatch({
        type: INPUT_ADDCOLLABORATOR, payload: value
    }),
    addOncollaborator: (data) => dispatch({
        type: ADD_COLLABORATOR, payload: data
    }),
    userCollab:(data)=>dispatch({
        type:SAVE_COLLABORATOR,payload:data
    })

})

const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            paperAnchorBottom: {
              width:131,
              height:'100%'
            },
        },
    }
})
function mapStateToProps(state) {
    console.log("States of Collaborator", state.DisplayPage.resultCollab);
    // console.log("My result",state.Collaborator.resultCollab);

    return ({
        openCollab: state.DisplayPage.openCollab,
        resultCollab: state.Collaborator.resultCollab
    })

}
class Collaborator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectedArray: [],
            anchorEl:null,
           
        }
    }

    handleCollabDialog() {
        console.log("OPen Log");

        this.props.inputCollaborator()
    }
    handleCloseCollab() {
        this.props.closeCollaborator()
    }
    handleCollaboratorchange(event) {
        console.log("Words Change");

        let searchWord = event.target.value
        this.props.addCollaborator(searchWord)
        this.props.addOncollaborator(searchWord)


    }
    selectCollabator(value) {
        // var array = []
        const old = this.state.selectedArray
        old.push(value)
        // array.push(value);
        this.setState({
            selectedArray: old
        })

    }
    handleSave(){
            console.log("Selec sss",this.state.selectedArray);
            var data=this.state.selectedArray
            this.props.userCollab(data)

            
    }

    // handlesaveCollaborator() {
    //     var data = {
    //         x: this.props.openCollab
    //     }
    //     this.props.saveCollaborator(data)
    // }

    render() {

        console.log("Daaaa", this.props.resultCollab == '');

        if (this.props.resultCollab === '')
            console.log("My resultsss", this.props.resultCollab);
        else
            var collaboratorArray = this.props.resultCollab.data.details
        console.log("My resultsssffffff", collaboratorArray);
        var lastArray = []
        if (collaboratorArray !== undefined) {
            collaboratorArray.map((key) => {
                console.log("key=====>" + JSON.stringify(key));
                lastArray.push(key)

            })
        }
        console.log("last array -->" + JSON.stringify(lastArray));


        var newArray = lastArray.map((key) => {
            console.log("new value" + key.email);
            
            return (
                // <Chip variant="outlined " label={key.name} style={{width:100}}></Chip>
                <div onClick={() => this.selectCollabator(key.email)}>
                    {key.email}
                </div>

            )
        })
        //   var  array=Object.keys(collaboratorArray).map((keys)=>{
        //        console.log("My array",array[keys]);
        //     });





        var selected = this.state.selectedArray.map((item) => {
          
            console.log("Selected Array",item);
            console.log("Selected Array------",);
            
            
            
            return (

                <div>
                    {item}
                </div>


            )
        })
      







        // let i;
        // for(i=0;i<collaboratorArray;i=i+1){
        //     console.log("My Collaborator array",collaboratorArray[i]);

        // }


        // collaboratorArray.map(keys)=>{

        // }

        // // let allArray=[]
        // const array=collaboratorArray.map(key)=>{
        //     console.log("Collaborator array",key);
        // }
        // array = Object.keys(collaboratorArray).map((keys) => {

        //     console.log("Notess Map o0f addaarraa==-->", collaboratorArray[keys]);
        //     return(
        //         <div>
        //             {collaboratorArray[keys]}
        //         </div>
        //     )
        // }


        //     )

        // }
        // const array=collaboratorArray.map(keys)=>{(
        //     return(
        //         console.log(array[keys])
        //     )

        // )
        // }


        // Object.keys(collaboratorArray).map((key) => {
        //     var k = key
        //     console.log("Collaborator Arrays",collaboratorArray[key]);

        // allArray.push(notearray[key])
        // })

        // x=Object.keys(collaboratorArray).map((key)=>{
        //     // console.log("Collaborator Arrays",collaboratorArray[key]);

        // })

        return (
            <MuiThemeProvider theme={theme}>
            
                <Tooltip title="Collaborator">
                    <img src={require('../assests/note_collab.svg')} alt="collab"
                    placement="bottom-end" anchorEl={this.state.anchorEl} 
                        onClick={() => this.handleCollabDialog()
                        }
                    />
                </Tooltip>
                <Dialog open={this.props.openCollab}>
                    <Card className={newStyle.collaborator}>
                        <h2 className={newStyle.collabHeaders}>Collaborators</h2>
                        <Divider />
                        <div className={newStyle.myCollab}>
                            <div className={newStyle.imgtext}>
                                <div className={newStyle.imgesCollaborator}>
                                    <img src={require('../assests/circleCollab.svg')} alt="collabr" />
                                </div>




                                <div className={newStyle.collaboratorText}>
                                    <TextField
                                        id="standard-name"
                                        type="text"
                                        margin="normal"
                                        placeholder="Person / email to share with"
                                        onChange={(event) => this.handleCollaboratorchange(event)}
                                    />

                                </div>
                            </div>
                            <div className={newStyle.addCollab}>
                                <Tooltip title="Add Collaborator">
                                    <img src={require('../assests/label_right.svg')} alt="LabelRight"
                                        onClick={(event) => this.handlesaveCollaborator(event)} />
                                </Tooltip>
                            </div>
                        </div>
                        <div >
                     
                            selected
                            {selected}
                   
                        </div>
                        <Divider></Divider>
                        <div className={newStyle.paper}>
                        <Paper>
                        {
                            newArray
                        }
                        </Paper>
                        </div>


                        <div className={newStyle.collabButtons}>
                            <Button onClick={() => this.handleCloseCollab()}>Cancel</Button>
                            <Button onClick={()=>this.handleSave()}>Save </Button>
                        </div>

                    </Card>

                </Dialog>
                </MuiThemeProvider>
        )
    }
} export default connect(mapStateToProps, mapDispatchToProps)(Collaborator);