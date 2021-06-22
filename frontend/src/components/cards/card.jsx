import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    Button,
    ButtonGroup
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))


export default function AltCard() {
    const classes = useStyles()
    const grpahList = useSelector((state) => state.dashboard);
    const dispatch = useDispatch();
    const data = [
        { quarter: 1, earnings: grpahList.card1 },
        { quarter: 2, earnings: grpahList.card2 },
        { quarter: 3, earnings: grpahList.card3 },
        { quarter: 4, earnings: grpahList.card4 }
    ]

    async function increment(i) {
        await dispatch(menucard(i + 1))
    }
    async function decrement(i) {
        await dispatch(menucardDec(i + 1))
    }

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                hello
            </Grid>
        </div>
    )
}