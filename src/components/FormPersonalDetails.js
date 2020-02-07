import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='enter personal details'/>
                    <TextField
                        hintText='enter your occupation'
                        floatingLabelText='occupation'
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField
                        hintText='enter your city'
                        floatingLabelText='city'
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br/>
                    <TextField
                        hintText='enter your bio'
                        floatingLabelText='bio'
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton
                        label='continue'
                        primary={true}
                        style={StyleSheet.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label='back'
                        primary={true}
                        style={styles.button2}
                        onClick={this.back}
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
    },
    button2: {
        color: 'secondary',
        variant: 'contained',
        margin: 15
    }
}

export default FormPersonalDetails

