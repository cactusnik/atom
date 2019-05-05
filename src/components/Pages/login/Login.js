import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import { userActions } from '../../../actions'
import {
    StyledLogin,
    StyledLoginPaper,
    StyledLoginForm,
    StyeldLoginSubmit
} from './StyledLogin'

class Login extends Component {
    state = {
        email: '',
        password: '',
        remember: false
    }

    handleChange = event => {
        const { name } = event.target

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { email, password } = this.state
        console.log(email, password)
        this.props.dispatch(userActions.login(email, password))

    }

    render () {
        const { email, password } = this.state

        return (
            <StyledLogin>
                <StyledLoginPaper>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <StyledLoginForm onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input onChange={this.handleChange} id="email" name="email" value={email} autoComplete="email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input onChange={this.handleChange} type="password" id="password" value={password} name="password" autoComplete="current-password" />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox onChange={this.handleChange} name="remember" value='remember' color="primary" />}
                            label="Remember me"
                        />
                        <StyeldLoginSubmit
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign in
                        </StyeldLoginSubmit>
                    </StyledLoginForm>
                </StyledLoginPaper>
            </StyledLogin>
        )
    }
}

export default connect()(Login)
