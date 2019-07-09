import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import { IconButton, Tooltip, Card, TextField } from '@material-ui/core';
import newStyle from '../Style.less';
import { INPUT_LABEL, LABELS, CLEAR_LABEL } from '../constants/actionTypes';
const mapDispatchToProps = dispatch => ({
    inputLabel: (value) => dispatch({
        type: INPUT_LABEL, payload: value
    }),
    resultLabel: (data) => dispatch({
        type: LABELS, payload: data
    }),
    clearLabel:()=>dispatch({
        type:CLEAR_LABEL
    })
})


function mapStateToProps(state) {
    console.log("My Edit Label", state.DisplayPage.openDialoglabel);

    return {
        openDialoglabel: state.DisplayPage.openDialoglabel,
        isDeleted: state.Label.isDeleted,
        label: state.Label.label
    }
}
class EditLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleChangeLabel(event) {
        // let value=event.target.value
        // console.log("INput Value",value);
        this.props.inputLabel(event.target.value)
    }
    handleClick12() {
        var data = {
            label: this.props.label,
            isDeleted: this.props.isDeleted
        }
        console.log("My label data", data);
        this.props.resultLabel(data)

    }
    handleClear(){
        this.props.clearLabel()
    }
    render() {
        return (
            <div>
                {/* {this.props.openDialoglabel? */}
                <Dialog open={this.props.openDialoglabel}>
                    <div className={newStyle.mainLabel}>
                        <Card>
                            <div className={newStyle.headerLabel}>
                                <h3>Edit labels</h3>
                            </div>
                            <div className={newStyle.newLabel}>
                                <img src={require('../assests/cross.svg')} alt="Cross" onClick={()=>this.handleClear()}/>
                                <TextField
                                    id="standard-with-placeholder"
                                    placeholder="Create New Label"
                                    margin="normal"
                                    onChange={(event) => this.handleChangeLabel(event)}
                                ></TextField>
                                 <div className={newStyle.rightClick}>
                                    <Tooltip title="Create Label"> 
                                         <img src={require('../assests/label_right.svg')} alt="LabelRight"
                                            onClick={() => this.handleClick12()} /> 
                                    </Tooltip>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Dialog>
                {/* :null} */}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditLabel);