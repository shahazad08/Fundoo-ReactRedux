import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INPUT_ISPINNED, PINNED_NOTE } from '../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
    inputPinned: (value) => dispatch({
        type: INPUT_ISPINNED, payload: value
    }),
    updatePinned: (data) => dispatch({
        type: PINNED_NOTE, payload: data
    })
})


function mapStateToProps(state) {
    console.log("Note Event", state.Note.isPined);

    return ({
        isPined: state.Note.isPined
    })
}
class Pinned extends Component {
    handleClick(event) {
        console.log("Event", this.props.isPined);
        if (this.props.isPined === false) {
            this.setState({
                isPined: true
            })
            // console.log("New Value",this.state.isPinned);
            this.props.inputPinned(true)

        }
        else if (this.props.isPined === true) {
            this.setState({
                isPined: false
            })
            this.props.inputPinned(false)

        }
    }

    handleUpdateclick(event, data) {
        console.log("before set ==---->"+data.isPined);
        
        if (data.isPined === false) {
            data.isPined =true

        }
        else if (data.isPined === true) {
            data.isPined = false
        }
        console.log("Datata==--->", data.isPined);

        this.props.updatePinned(data)

    }



    render() {
        return (
            <div>
                {this.props.note ?
                    (

                        !this.props.note.isPined?
                            (
                                <img src={require('../assests/pinned.svg')} alt="pinned"
                                    onClick={(event) => this.handleUpdateclick(event, this.props.note)} />
                            ) :
                            (
                                <img src={require('../assests/unpinned.svg')} alt="unpinned"
                                    onClick={(event) => this.handleUpdateclick(event, this.props.note)} />
                            )

                    ) :
                    (

                        this.props.isPined === false ?
                            (
                                <img src={require('../assests/pinned.svg')} alt="pinned"
                                    onClick={(event) => this.handleClick(event)} />
                            ) :
                            (
                                <img src={require('../assests/unpinned.svg')} alt="unpinned"
                                    onClick={(event) => this.handleClick(event)} />
                            )
                    )
                }
                




                     {/* {this.props.isPined===false?
                        (
                            <img src={require('../assests/pinned.svg')} alt="pinned"
                                onClick={(event) => this.handleUpdateclick(event, this.props.note)} />
                        ):
                        (
                            <img src={require('../assests/unpinned.svg')} alt="pinned"
                                onClick={(event) => this.handleUpdateclick(event, this.props.note)} />
                        )
                    }
  */}

                {/* {this.props.isPined===false?
                (
                    <img src={require('../assests/pinned.svg')} alt="pinned"
                    onClick={(event)=>this.handleClick(event)}/>
                ):
                (
                    <img src={require('../assests/unpinned.svg')} alt="unpinned"
                    onClick={(event)=>this.handleClick(event)}/>
                )
                
                } 
                 */}
            </div>
        )
    }
} export default connect(mapStateToProps, mapDispatchToProps)(Pinned);