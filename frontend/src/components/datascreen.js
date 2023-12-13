import React from 'react'
import "./datascreen.css"
import { Grid, Typography } from '@mui/material'

const datascreen = (props) => {
  return (
    <Grid container>
      <Grid item>
          {JSON.stringify(props.displayData, null, 2)}
      </Grid>
    </Grid>
  )
}

export default datascreen