import React,{Component} from 'react';
import { IconButton, Tooltip, Card} from '@material-ui/core';
import { connect } from 'react-redux';
import content from '../content';
import { INPUT_COLOR, COLORNOTES, UPDATE_COLOR } from '../constants/actionTypes';
import {MuiThemeProvider, createMuiTheme, withStyles } from "@material-ui/core/styles";
import obj from '../components/NoteController'
import newStyle from '../Style.less'

const mapDispatchToProps = dispatch => ({
    inputColor:(value) => dispatch({
        type: INPUT_COLOR,payload:value
    }),
    inputUpdatecolor:(value)=>dispatch({
        type:UPDATE_COLOR,payload:value
    }),
    updateColor:(data)=>dispatch({
        type:COLORNOTES,payload:data
    })
})

const colorCodesAndNames= content

function mapStateToProps(state){
    // console.log("Color Notess",state.Note.color);
    // console.log(("Update Color",state.AllNotes.color));
    
    return({
        color:state.Note.color,
        color:state.AllNotes.color
    })

}

const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            paperAnchorBottom: {
              width:131,
              height:40
            },
        },
    }
})

class Color extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            anchorEl:null
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    closePopper() {
        this.setState({
            open: false
        })
    }
    
    handleToggle() {
        const { currentTarget } = event;
        this.setState({ open: !this.state.open });
        anchorEl:currentTarget
    }

    handleClose(){
        this.setState({ open: false });
      };
    
    handleColor(event){
        // console.log("color selected--"+event.target.value);
        this.handleClose()
        
        this.props.inputColor(event.target.value)
       
    }
    updateColor(event,data){
        // console.log("color selected--"+event.target.value);
        this.handleClose()
        data.color=event.target.value;
        this.props.updateColor(data)

        this.props.inputUpdatecolor(event.target.value)
    
    }

    render(){
        // console.log("State Open",this.state.open);
        // console.log("Value",event.target.value);
        // console.log("Notes COlours",colorCodesAndNames);
        // console.log("Note Id",this.props.note);        
        
        const changeCardColor = colorCodesAndNames.map((colorKey) =>{
            return(
                this.props.note?
                (
                    <Tooltip title={colorKey.name}>
                    <IconButton style={{ backgroundColor: colorKey.hexCode, "margin": "2px", }}
                        value={colorKey.hexCode}
                        onClick={(event)=>this.updateColor(event,this.props.note)}>
                    </IconButton>
                </Tooltip>
                ):
                (
                    <Tooltip title={colorKey.name}>
                    <IconButton style={{ backgroundColor: colorKey.hexCode, "margin": "2px", }}
                        value={colorKey.hexCode}
        
                        onClick={(event)=>this.handleColor(event)}>
                    </IconButton>
                </Tooltip>
                )
            )
        }
    
    );

        return(
            
            <MuiThemeProvider theme={theme}>
                <Tooltip title="Change Color">
                <img src={require('../assests/note_color.svg')} alt="color"
                className="colorPalleteIcon"
                placement="bottom-end" anchorEl={this.state.anchorEl} 
                onMouseEnter={()=>this.handleToggle()}
              />
                </Tooltip>
              {this.state.open ?
                      <Card className={newStyle.colorPalleteCard}>
                          {changeCardColor}
                      </Card>
                  : null}
         
         </MuiThemeProvider>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Color)