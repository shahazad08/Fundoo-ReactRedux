import React,{Component} from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import newStyle from '../Style.less';
import { TextField, Divider, Button } from '@material-ui/core';
import { INPUT_EMAIL, FORGET_PASSWORD_USER, CLOSE_ERROR_TOAST } from '../constants/actionTypes';
import Snackbar from '@material-ui/core/Snackbar';

const mapDispatchToProps=dispatch=>({
    inputForgetPassword:(value)=>dispatch({
        type:INPUT_EMAIL,payload:value
    }),
    FORGET_PASSWORD:(data)=>dispatch({
        type:FORGET_PASSWORD_USER,payload:data
    }),
    closeToast:()=>dispatch({
        type:CLOSE_ERROR_TOAST
    })


})
function mapStateToProps(state){
    console.log("Email Status",state.ForgetPassword)
    // console.log("Email Status Success",state.FORGET_PASSWORD.success)
    

    return({
        email:state.ForgetPassword.email,
        success:state.ForgetPassword.success.message,
        errorFlag:state.ForgetPassword.errorFlag
    })
}
class ForgetPassword extends Component{
    constructor(props){
        super(props);
        this.state={
            pass:false,
            fail:false
        }
    }
    handleFirstNameChange(event){
        this.props.inputForgetPassword(event.target.value)
    }
    ForgetPasswordClick(){
        if (this.props.email!=="")
        {
            var data={
                email:this.props.email
            }
            this.props.FORGET_PASSWORD(data)
            // this.setState({
            //     pass:true
            // })
            // window.location.href = '/resetpassword'
        }
        else{
            console.log("Enter valid Password");
       
            
        }
    }
    closeToast(){
        this.props.closeToast();
    }
render()
{
    console.log("Success Status",this.props.success);
    var rSuccess=this.props.success
    return(
        <div>
            <div className={newStyle.forgetcard}>
            <Card className={newStyle.innercard}>
            <div className={newStyle.cardcontent}>
            <div className={newStyle.headers}><h2>Forget Password</h2></div>
                <div className={newStyle.innertext}>
                <TextField 
                    id="standard-name"
                    label="Email"
                    value={this.props.email}
                    onChange={(event)=>this.handleFirstNameChange(event)}
                    margin="normal"
                />        
                <div className={newStyle.innerbtn}>
                <Button variant="contained" color="primary" onClick={()=>this.ForgetPasswordClick()}> Click</Button>
                </div>
            </div>
            </div>
            
            </Card>
            </div>
            <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={rSuccess}
        autoHideDuration={1000}
        // onClose={handleClose}
        message="Email Sent Successfully"
        />
         <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.props.errorFlag}
        autoHideDuration={6000}
        onClose={()=>this.closeToast()}
        message="Enter Valid Details"
        />

        </div>
        
       
    )
}}
export default connect(mapStateToProps,mapDispatchToProps)(ForgetPassword);