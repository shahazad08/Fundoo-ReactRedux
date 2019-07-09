import React,{Component} from 'react';
import {connect} from 'react-redux';
const mapDispatchToProps = dispatch => ({
    updateColor:(data)=>dispatch({
        type:COLORNOTES,payload:data
    })
})
class NoteController extends Component{
    constructor(props){
        super(props);
        this.updateColor=this.updateColor.bind(this);
    }
    

  updateColor(color,note)
{

    console.log("hnj--==>"+note);
    
    note.color=color;
    this.props.updateColor
}
render(){
    return null
}
}
export default connect((null,mapDispatchToProps)(NoteController));
