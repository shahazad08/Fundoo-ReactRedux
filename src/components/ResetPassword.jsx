import React,{Component} from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import newStyle from '../Style.less';
import { TextField, Divider, Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import { INPUT_RESET_PASSWORD, INPUT_RESET_CONFIRMPASSWORD, RESET_PASSWORD_USER } from '../constants/actionTypes';



const mapDispatchToProps=dispatch=>({
    inputPassword:(value)=>dispatch({
        type:INPUT_RESET_PASSWORD,payload:value
    }),
    inputConfirmPassword:(value)=>dispatch({
        type:INPUT_RESET_CONFIRMPASSWORD,payload:value
    }),
    RESET_PASSWORD:(data)=>dispatch({
        type:RESET_PASSWORD_USER,payload:data
    })
}
)

function mapStateToProps(state){
    console.log("Reset Password Status",state.ResetPassword);
    return({
        password:state.ResetPassword.password,
        confirmPassword:state.ResetPassword.confirmPassword
    })  
    
}
class ResetPassword extends Component{
    handlePasswordChange(event){
        this.props.inputPassword(event.target.value)

    }
    handleConfirmPasswordChange(){
        this.props.inputConfirmPassword(event.target.value);

    }
    ResetPasswordClick(){
        if(this.props.password!=="" || this.props.confirmPassword!="")
        {
            var data={
                password:this.props.password,
                confirmPassword:this.props.confirmPassword
            }
            this.props.RESET_PASSWORD(data)
        }
    }
    render()
    {
     
        return(
            <div className={newStyle.resetmaindiv}>
                <Card className={newStyle.cardiv}>
                <div className={newStyle.innertext}>
                 <h2>Reset Password</h2>   
                 <TextField
                            id="standard-name"
                            label="New Password"
                            type="password"
                            value={this.props.password}
                            onChange={(event)=>this.handlePasswordChange(event)}
                            margin="normal" 
                        />
                 <TextField
                            id="standard-name"
                            label="Confirm Password"
                            type="password"
                            value={this.props.confirmPassword}
                            onChange={(event)=>this.handleConfirmPasswordChange(event)}
                            margin="normal"
                        />    
                       <div className={newStyle.btnreset}>
                        <Button variant="contained" color="secondary"  onClick={()=>this.ResetPasswordClick()}>
                       Reset!
                        </Button>
                     
                        </div>    
                        </div>
                </Card>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ResetPassword);