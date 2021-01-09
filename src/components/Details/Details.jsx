import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'
import {Doughnut} from 'react-chartjs-2'
import useTransactions from '../../useTransactions'

import useStyles from './styles'
// import { SportsRugbySharp } from '@material-ui/icons'

const Details = ({title}) => {
    const classes = useStyles();
    const {total, chartData} = useTransactions(title)
    return(
        <Card style = {{background:'rgba(255,255,255,0.65)'}} className={title === 'Income' ? classes.income : classes.expense} >
            <CardHeader title = {title} />
            <CardContent>
                <Typography variant = "h5">${total}</Typography>
                <Doughnut data = {chartData}/>
            </CardContent>
        </Card>
    )
}

export default Details