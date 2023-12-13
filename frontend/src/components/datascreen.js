import React from 'react'
import "./datascreen.css"
import { Grid } from '@mui/material'

const datascreen = (props) => {
  return (
    <Grid container>
      <Grid item>
        data : {props.displayData}
      </Grid>
    </Grid>
  )
}

export default datascreen