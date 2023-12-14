import React from 'react'
import "./datascreen.css"
import { Grid, Typography } from '@mui/material'

const datascreen = (props) => {
  function render(props) {
    if (typeof (props.displayData) == "string") {
      return (
        <Typography>{props.displayData}</Typography>
      )
    }
    else if (typeof (props.displayData) == "object") {
      if (Object.keys(props.displayData).length == 0) {
        let message = '{"error": "certificate not found"}'
        return (
          <Typography>{message}</Typography>
        )
      }
      else if (props.displayData[0] != undefined) {
        if ("key" in props.displayData[0]) {
          if ("owner" in props.displayData[0]) {
            return (
              props.displayData.map(entry => {
                return (
                  <Grid container className='data_certificates'>
                    <Grid item>
                      <Typography>id: {entry.id}</Typography>
                      <Typography>name: {entry.name}</Typography>
                      <Typography>owner: {entry.owner}</Typography>
                      <Typography>key: {entry.key}</Typography>
                      <Typography>-------------</Typography>
                    </Grid>
                  </Grid>
                )
              })
            )
          }
          return (
            props.displayData.map(entry => {
              return (
                <Grid container className='data_certificates'>
                  <Grid item>
                    <Typography>id: {entry.id}</Typography>
                    <Typography>name: {entry.name}</Typography>
                    <Typography>key: {entry.key}</Typography>
                    <Typography>-------------</Typography>
                  </Grid>
                </Grid>
              )
            })
          )
        }
      }
      else {
        return (
          <code>
            {JSON.stringify(props.displayData, null, 2)}
          </code>
        )
      }
    }
  }

  return (
    <Grid container className='data_container'>
      <Grid item className='data'>
        {
          render(props)
        }
      </Grid>
    </Grid>
  )
}

export default datascreen