import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import newStyle from '../Style.less';
import { TextField, Divider, Button } from '@material-ui/core';
import { INPUT_FIRST_NAME, INPUT_LAST_NAME, INPUT_EMAIL, INPUT_PASSWORD, INPUT_CONFIRMPASSWORD, LOGIN, REGISTER_USER, INPUT_SERVICE, CLOSE_ERROR_TOAST, CLOSE_SUCCESS_TOAST } from '../constants/actionTypes';
import { toast } from "react-toastify";
import Snackbar from '@material-ui/core/Snackbar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
const mapDispatchToProps=dispatch=>({
    inputFirstName:(value)=>dispatch({
        type:INPUT_FIRST_NAME,payload:value
    }),
    inputLastName:(value)=>dispatch({
        type:INPUT_LAST_NAME,payload:value
    }),
    inputEmail:(value)=>dispatch({
        type:INPUT_EMAIL,payload:value
    }),
    inputPassword:(value)=>dispatch({
        type:INPUT_PASSWORD,payload:value
    }),
    inputConfirmPassword:(value)=>dispatch({
        type:INPUT_CONFIRMPASSWORD,payload:value
    }),
    inputService:(value)=>dispatch({
        type:INPUT_SERVICE,payload:value
    }),
    Register:(data)=>dispatch({
        type:REGISTER_USER,payload:data
    }),
    closeToast:()=>dispatch({
        type:CLOSE_ERROR_TOAST
    }),
    successClose:()=>dispatch({
        type:CLOSE_SUCCESS_TOAST
    })

})

function mapStateToProps(state){
    console.log("Register Props",state.Register)
    return{
        firstName:state.Register.firstName,
        lastName:state.Register.lastName,
        email:state.Register.email,
        password:state.Register.password,
        confirmPassword:state.Register.confirmPassword,
        service:state.Register.service,
        success:state.Register.success.data,
        // error:state.Register.error,
        errorFlag:state.Register.errorFlag

    }
}
class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            firstNameError:"",
            lastNameError:"",
            emailError:"",
            serviceError:"",
            passwordError:"",
            confirmPasswordError:"",
            flag:false
        }
    }

    handleFirstNameChange(event){
        var a=event.target.value
        
        if (a.length===0){
            this.setState({
                firstNameError:"required"
            })}
        else if(a.length>=4  ){
            this.setState({
                firstNameError:""
            })}
        this.props.inputFirstName(event.target.value)
    }
    handleLastNameChange(event){
        var b=event.target.value
        
        if (b.length===0){
            this.setState({
                lastNameError:"required"
            })}
        else if(b.length>=4  ){
            this.setState({
                lastNameError:""
            })}
        this.props.inputLastName(event.target.value)
    }
    handleEmailChange(event){
        var c=event.target.value
        
        if (c.length===0){
            this.setState({
                emailError:"required"
            })}
        else if(c.length>=4  ){
            this.setState({
                emailError:""
            })}
            
        this.props.inputEmail(event.target.value)
    }
    handlePasswordChange(event){
        var d=event.target.value
        
        if (d.length===0){
            this.setState({
                passwordError:"required"
            })}
        else if(d.length<7  ){
            this.setState({
                passwordError:"Minumum 8 characters required"
            })}
        else{
            this.setState({
                passwordError:""
            })
        }
        this.props.inputPassword(event.target.value)
    }
    handleConfirmPasswordChange(event){
        var e=event.target.value
        
        if (e.length===0){
            this.setState({
               confirmPasswordError:"required"
            })}
        else if(e.length<7  ){
            this.setState({
                confirmPasswordError:"Minumum 8 characters required"
            })}
        else{
            this.setState({
                confirmPasswordError:""
            })
        }
        this.props.inputConfirmPassword(event.target.value)
    }
    handleServiceChange(event){
        this.props.inputService(event.target.value)
    }

    LoginClick(){
        if (this.props.firstName!=="" || this.props.lastName!=="" || this.props.email!=="" || this.props.password!=="" || this.props.confirmPassword!=="" || this.service!=="")
        {
            if(this.props.password!==this.props.confirmPassword)
            {
                alert("Password Not Match")
            }
            else{
            var data={
                firstName:this.props.firstName,
                lastName:this.props.lastName,
                email:this.props.email,
                password:this.props.password,
                confirmPassword:this.props.confirmPassword,
                service:this.props.service
            }
        }
        console.log("rrrr=>>",data);
        
        this.props.Register(data)
    }
        else{
                console.log("Fields are Empty");
                
        }
        
      }
      successClose(){
          this.props.successClose();
      }
      closeToast(){
          this.props.closeToast();
      }
    render() {
        // console.log("response"+JSON.stringify(this.props.success))
        var rSuccess=this.props.success
        // console.log("message in page ----"+ rSuccess);

        return (
            <div className={newStyle.registermaindiv}>
                <Card className={newStyle.registercard}>
                    <div className={newStyle.innerregister}>
                        <h2>Register</h2>
                        <div className={newStyle.regnames}>
                        <TextField
                            id="standard-name"
                            label="First Name"
                            value={this.props.firstName}
                            onChange={(event)=>this.handleFirstNameChange(event)}
                            margin="normal"
                            variant="outlined"
                            error={this.state.firstNameError}
                            helperText={this.state.firstNameError}
                        />
                        <TextField
                            id="standard-name"
                            label="Last Name"
                            value={this.props.lastName}
                            onChange={(event)=>this.handleLastNameChange(event)}
                            margin="normal"
                            variant="outlined"
                            error={this.state.lastNameError}
                            helperText={this.state.lastNameError}
                        />
                        </div>
                         <TextField
                            id="standard-name"
                            label="Service"
                            value={this.props.service}
                            onChange={(event)=>this.handleServiceChange(event)}
                            margin="normal"
                            variant="outlined"
                            // error={this.state.serviceError}
                            // helperText={this.state.serviceError}
                        />
                        <div  className={newStyle.emailname}>
                        <TextField  className={newStyle.textEmailame}
                            id="standard-name"
                            label="Email"
                            value={this.props.email}
                            onChange={(event)=>this.handleEmailChange(event)}
                            margin="normal"
                            variant="outlined"
                            error={this.state.emailError}
                            helperText={this.state.emailError}
                        />
                        </div>
                        <div  className={newStyle.regnames}>
                        <TextField
                            id="standard-name"
                            label="Password"
                            type="password"
                            value={this.props.password}
                            onChange={(event)=>this.handlePasswordChange(event)}
                            margin="normal"
                            variant="outlined"
                            error={this.state.passwordError}
                            helperText={this.state.passwordError}
                        />
                        <TextField
                            id="standard-name"
                            label="Confirm Password"
                            type="password"
                            value={this.props.confirmPassword}
                            onChange={(event)=>this.handleConfirmPasswordChange(event)}
                            margin="normal"
                            variant="outlined"
                            error={this.state.confirmPasswordError}
                            helperText={this.state.confirmPasswordError}
                        />
                        </div>
                        
                        <div className={newStyle.buttonregister}>
                        <Button variant="contained" color="secondary" onClick={()=>this.LoginClick()}>
                       Register
                        </Button>
                     
                        </div>


                    </div>

                </Card>
                <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={rSuccess}
        autoHideDuration={6000}
        onClose={()=>this.successClose()}
        message={"Register Succesfull"}
        />
         <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.props.errorFlag}
        autoHideDuration={6000}
        onClose={()=>this.closeToast()}
        message="registration unsuccesfull"
        />

            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);