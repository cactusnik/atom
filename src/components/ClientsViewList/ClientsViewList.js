import React from 'react'
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export const ClientsViewList = ({ contacts = [] }) => {

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Клиент</TableCell>
                    <TableCell>Связаться</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                        <TableCell>{contact.name}</TableCell>
                        <TableCell>
                            <span>Почта</span>
                            <span>Сообщения</span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

const mapStateToProps = ({contacts}) => {
    return {
        contacts: contacts.items
    }
}

export default connect(mapStateToProps)(ClientsViewList)
