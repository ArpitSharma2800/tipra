import { Typography } from 'core@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3)
  },
  barGrpah: {
    marginLeft: theme.spacing(2)
  },
  DougGrpah: {
    marginRight: theme.spacing(2)
  },
  DougGrpah2: {
    marginRight: theme.spacing(1)
  }
}))
function App () {
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        Dashboard
      </Typography>
    </div>
  )
}

export default App
