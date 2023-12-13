import React, { useState } from 'react'
import "./datascreen.css"
import { Grid, Typography } from '@mui/material'

const datascreen = (props) => {
  return (
    <Grid container className='data_container'>
      <Grid item>
        {
          typeof (props.displayData) == "string" ? <Typography>{props.displayData}</Typography> : <Grid item>
            <code>
              {JSON.stringify(props.displayData, null, 2)}
            </code>
          </Grid>
        }
      </Grid>
    </Grid>
  )
}

export default datascreen