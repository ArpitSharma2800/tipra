import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { green, grey } from '@material-ui/core/colors'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function Copyright () {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://arpitcodes.tech/">
          Tipra
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: green[700]
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: green[700],
    color: grey[50]
  }
}))

function Login () {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:1000px)')
  console.log(matches)
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  console.log(process.env.REACT_APP_API_BASE)

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box display="flex"
        flexDirection="column"
        alignItems="center"
        p={1}
        mt={10}>
          <Avatar border={0} className={classes.avatar} variant="square" >
            <AccountBoxIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
  )
}

export default Login
