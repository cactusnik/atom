import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchClients } from '../../../actions/clients'

import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import SettingsIcon from '@material-ui/icons/Settings'
import AddIcon from '@material-ui/icons/Add'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'
import ListIcon from '@material-ui/icons/List'
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit'

import ClientViewList from '../../ClientsViewList'

import {
    StyledHeader,
    StyledTitle,
    StyledSearch,
    StyledCount,
    StyledContent
} from './StyledClients'

export class Clients extends Component {
    state = {
        tab: 1
    }

    handleChange = (event, value) => {
        this.setState({
            tab: value
        })
    }

    componentDidMount() {
        // this.props.dispatch(fetchClients())
    }

    render () {
        const { tab } = this.state

        return (
            <>
                <StyledHeader>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs={6}
                            container
                            alignItems="center"
                        >
                            <Grid item>
                                <StyledTitle variant="h1" >Клиенты</StyledTitle>
                            </Grid>
                            <Grid item>
                                <StyledSearch>
                                    <InputBase placeholder="Поиск" />
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </StyledSearch>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <SettingsIcon />
                            </IconButton>
                            <Button>
                                <AddIcon />
                                Новый клиент
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <StyledCount>
                                Всего клиентов: <span>70</span>
                            </StyledCount>
                        </Grid>
                        <Grid item>
                            <Tabs
                                value={tab}
                                onChange={this.handleChange}
                            >
                                <Tab icon={<ViewComfyIcon />} label="Канбан" />
                                <Tab icon={<ListIcon />} label="Список" />
                                <Tab icon={<VerticalSplitIcon />} label="Листинг" />
                            </Tabs>
                        </Grid>
                    </Grid>
                    <Divider />
                </StyledHeader>
                <StyledContent>
                    { tab === 1 && <ClientViewList /> }
                </StyledContent>
            </>
        )
    }
}

export default connect()(Clients)

