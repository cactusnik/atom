import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import CssBaseline from '@material-ui/core/CssBaseline'

import Menu from '../Menu'
import { Clients } from '../Pages'
import {
    DashboardContainer,
    DashboardAppBar,
    DashboardDrawer,
    DashboardLogo,
    DashboardMain
} from './StyledDashboard'

const Dashboard = () => {
    const [open, handleDrawerOpen] = useState(true)

    return (
        <DashboardContainer>
            <CssBaseline />
            <DashboardAppBar open={open} drawerwidth="240">
                <Toolbar>
                    <IconButton onClick={() => {handleDrawerOpen(!open)}}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
            </DashboardAppBar>
            <DashboardDrawer open={open} drawerwidth="240" variant='permanent'>
                <DashboardLogo>
                    A<span>TOM.CRM</span>
                </DashboardLogo>
                <Divider />
                <Menu />
            </DashboardDrawer>
            <DashboardMain open={open} drawerwidth="240">
                <Switch>
                    <Route path="/clients" component={Clients} />
                </Switch>
            </DashboardMain>
        </DashboardContainer>
    )
}

export default connect()(Dashboard)
