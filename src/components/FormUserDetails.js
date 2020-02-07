import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'





class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='enter user details'>
                        <FlatButton >login</FlatButton>
                    </AppBar>
                    <TextField
                        hintText='enter your first name'
                        floatingLabelText='first name'
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                        hintText='enter your last name'
                        floatingLabelText='last name'
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        hintText='enter your email'
                        floatingLabelText='email'
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>

                    <RaisedButton
                        label='continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                        
                    

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        color: 'primary',
        variant: 'contained',
        margin: 15
    }
}


export default FormUserDetails

