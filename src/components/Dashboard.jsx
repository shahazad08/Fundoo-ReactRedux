import { connect } from 'react-redux';
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import newStyle from '../Style.less';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {CLOSE_MENU,OPEN_MENU, OPEN_PROFILE, CLOSE_PROFILE, CHANGE_GRID_VIEW, CHANGE_LIST_VIEW} from '../constants/actionTypes';
import Sidebar from './Drawer';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Note from '../components/Note';
const mapDispatchToProps=dispatch=>({
    handleClose:()=>dispatch({
        type:CLOSE_MENU
    }),
    handleOpen:()=>dispatch({
        type:OPEN_MENU
    }),
    handleProfileOpen:()=>dispatch({
        type:OPEN_PROFILE
    }),
    handleProfileClose:()=>dispatch({
        type:CLOSE_PROFILE
    }),
    changeGridView:()=>dispatch({
        type:CHANGE_GRID_VIEW
    }),
    changeListView:()=>dispatch({
        type:CHANGE_LIST_VIEW
    })

})
function mapStateToProps(state){
    console.log("States of Menuuu",state.DisplayPage.open);
    
    return({
        open:state.DisplayPage.open,
        openProfile:state.DisplayPage.openProfile,
        gridView:state.DisplayPage.gridView
    })
}
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            anchorEl:null,
            search:""
        }
    }
    handleClose(){
        this.props.handleClose()
    }

    handleOpen(){
        this.props.handleOpen()
    }

    handleProfileOpen(event){
        const { currentTarget } = event;
        this.setState({
            anchorEl:currentTarget
        })
        console.log("anchor el----"+this.state.anchorEl)
        this.props.handleProfileOpen()
    }
    handleProfileClose(){
        this.props.handleProfileClose()
    }

    // DashboardClick(){
    //     this.props.history.push('')
    // }

    ChangeGridList(){
        this.props.changeGridView()
    }
    ChangeListList(){
        this.props.changeListView()
    }

    handleSearch(){
        
    }
    render() {
        console.log("Profile Status",this.props.openProfile)
        return (

            <div className={newStyle.maindashboard}>
            
                <AppBar position="static">
                    <Toolbar className={newStyle.toolbarcontain}>
                    <div className={newStyle.menuview}>
                    {this.props.open?
                      <IconButton>
                      <MenuIcon  onClick={()=>this.handleClose()}/>
                  </IconButton>
                  :
                  <IconButton>
                      <MenuIcon onClick={()=>this.handleOpen()}/>
                      </IconButton>
                    }
                    </div>
                      
                        <div className={newStyle.imgview}>
                            <img src={require('../assests/keep.png')}></img>
                        </div>
                        {/* <div className={newStyle.sizeicon}> */}
                        <div className={newStyle.keep}>Keep </div>
                        <div className={newStyle.keeps}></div>
                        <div className={newStyle.mainsearchdiv}>
                            <div className={newStyle.searchicon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                onChange={()=>this.handleSearch(event)}
                                classes={{
                                }}
                            />
                        </div>
                        {/* </div> */}
                        <div className={newStyle.accountstyle}></div>
                        <div className={newStyle.imgicon}>
                        {!this.props.gridView?(
                            <img src={require('../assests/view.svg')} onClick={(event)=>this.ChangeGridList(event)} />
                        ):
                        <img src={require('../assests/listview.svg')} onClick={(event)=>this.ChangeListList(event)} />
                        }
                            
                            
                            </div>
                           
                            <div className={newStyle.imgsicon}>
                           {this.props.openProfile?
                            <AccountCircle onClick={()=>this.handleProfileClose()}/>
                            :
                            <AccountCircle onClick={(event)=>this.handleProfileOpen(event)}/>
                           }
                            <Popper  open={this.props.openProfile} anchorEl={this.state.anchorEl}> 
                            <Paper>
                            <MenuList>
                        <MenuItem >Profile</MenuItem>
                        <MenuItem>My Account</MenuItem>
                        <MenuItem>Logout </MenuItem>
                        </MenuList>
                            </Paper>
                            </Popper>
                          
                                </div>
                                
                                 <Sidebar props={this.props} />       
                    </Toolbar>
                </AppBar>
               
            </div>


        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);