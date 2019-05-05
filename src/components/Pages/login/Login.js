import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import {
    StyledLogin,
    StyledLoginPaper,
    StyledLoginForm,
    StyeldLoginSubmit
} from './StyledLogin'

const Login = () => {
    return (
        <StyledLogin>
            <StyledLoginPaper>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <StyledLoginForm>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input type="password" id="password" name="password" autoComplete="current-password" />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
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

export default Login
