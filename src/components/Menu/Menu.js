import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AllInBoxIcon from '@material-ui/icons/AllInbox'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import SettingsIcon from '@material-ui/icons/Settings'

const Menu = () => {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText>Дашборд</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText>Заказы</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText>Клиенты</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText>Задачи</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AllInBoxIcon />
                </ListItemIcon>
                <ListItemText>Товары</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AccountBalanceWalletIcon />
                </ListItemIcon>
                <ListItemText>Финансы</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText>Настройки</ListItemText>
            </ListItem>
        </List>
    )
}

export default Menu
