import React from 'react'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export const ClientsViewList = () => {

    const createData = (name, company, manager, phone, count, averageCheck, totalPrice) => {
        return { name, company, manager, phone, count, averageCheck, totalPrice }
    }

    const rows = [
        createData('Авдеев. А. П.', 'ООО “Трансмагистраль”', 'Артемьева. О. Н.', '+7 (922) 555-1234', '2', '4100 грн', '41000 грн'),
        createData('Авдеев. А. П.', 'ООО “Трансмагистраль”', 'Артемьева. О. Н.', '+7 (922) 555-1234', '2', '4100 грн', '41000 грн'),
        createData('Авдеев. А. П.', 'ООО “Трансмагистраль”', 'Артемьева. О. Н.', '+7 (922) 555-1234', '2', '4100 грн', '41000 грн')
    ]

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Клиент</TableCell>
                    <TableCell>Менеджер</TableCell>
                    <TableCell>Телефон</TableCell>
                    <TableCell>Кол-во заказов</TableCell>
                    <TableCell>Средний чек</TableCell>
                    <TableCell>Сумма заказов</TableCell>
                    <TableCell>Связаться</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell>{row.name}{row.company}</TableCell>
                        <TableCell>{row.manager}</TableCell>
                        <TableCell>{row.phone}</TableCell>
                        <TableCell>{row.count}</TableCell>
                        <TableCell>{row.averageCheck}</TableCell>
                        <TableCell>{row.totalPrice}</TableCell>
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

export default ClientsViewList
