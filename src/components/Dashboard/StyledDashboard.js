import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'

const DashboardContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
`

const DashboardAppBar = styled(({open, drawerwidth, ...other}) => <AppBar {...other}/>)`
  margin-left: ${props => props.open ? `${props.drawerwidth}px` : '72px'};
  width: ${props => props.open ? `calc(100% - ${props.drawerwidth}px)` : 'calc(100% - 72px)'}
`

const DashboardDrawer = styled(({open, drawerwidth, ...other}) => <Drawer {...other} classes={{paper: 'paper'}} />)`
  .paper {
      position: relative;
      width: ${props => props.open ? `${props.drawerwidth}px` : '72px'};
      overflow-x: ${props => !props.open && 'hidden'};
  }
`

const DashboardLogo = styled.div`
  min-height: 64px;
  line-height: 30px;
`

export {
    DashboardContainer,
    DashboardAppBar,
    DashboardDrawer,
    DashboardLogo
}


