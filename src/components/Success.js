import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'





class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='confirm user data'>
                        <RaisedButton color='#ffff'>login</RaisedButton>
                    </AppBar>
                    <br/>
                    <p>success!</p>
                    
                        
            
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}




export default Success
