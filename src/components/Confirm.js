import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'





class Confirm extends Component {
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
        const { values: { firstName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='confirm user data'>
                        <RaisedButton color='#ffff'>login</RaisedButton>
                    </AppBar>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={ firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={ lastName}
                        />
                        <ListItem
                            primaryText="email"
                            secondaryText={ email}
                        />
                        
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={ occupation }
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={ city }
                        />
                        <ListItem
                            primaryText="bio"
                            secondaryText={ bio }
                        />
                    </List>
                    <RaisedButton
                        label='back'
                        primary={true}
                        style={styles.button1}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label='confirm & continue'
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


export default Confirm

