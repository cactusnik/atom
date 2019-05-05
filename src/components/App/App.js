import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../private-route'

import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'

import Dashboard from '../Dashboard'
import { Login } from '../Pages'
import theme from '../../themes'

const generateClassName = createGenerateClassName()

const jss = create({
    ...jssPreset(),
    insertionPoint: document.getElementById('jss-insertion-point')
})

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/" component={Dashboard} />
                    </Switch>
                </BrowserRouter>
            </JssProvider>
        </MuiThemeProvider>
    )
}

export default App
