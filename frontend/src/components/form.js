import React, { useState } from 'react'
import "./form.css"
import { Button, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, TextField, SelectChangeEvent } from '@mui/material'



const Form = () => {

  const [action, setAction] = useState("GetAll")

  const handleChangeAction = (event) => {
    setAction(event.target.value)
    console.log(action)
  }
  return (
    <Grid container>
      <Grid item>
        <FormLabel id="demo-simple-select-label">Action</FormLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={action}
          label="Action"
          onChange={handleChangeAction}
        >
          <MenuItem value={"GetAll"}>Get All Certificates</MenuItem>
          <MenuItem value={"GetOne"}>Get Certificate by ID</MenuItem>
          <MenuItem value={"MakeNew"}>Generate new Certificate</MenuItem>
          <MenuItem value={"Delete"}>Delete a Certificate</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <FormControl>
          <FormLabel>UID</FormLabel>
          <TextField size='small'></TextField>
          <Grid item className={action == "GetAll" ? "visible" : "invisible"}>
            <Button>Get All Vertificates</Button>
          </Grid>
          <Grid item className={action == "GetOne" ? "visible" : "invisible"}>
            <FormLabel>Certificate ID</FormLabel>
            <TextField size='small'></TextField>
            <Button>Get Certificate</Button>
          </Grid>
          <Grid item className={action == "MakeNew" ? "visible" : "invisible"}>
            <FormLabel>Certificade Code</FormLabel>
            <TextField size='small'></TextField>
            <Button>Create Certificate</Button>
          </Grid>
          <Grid item className={action == "Delete" ? "visible" : "invisible"}>
            <FormLabel>Certificate ID</FormLabel>
            <TextField size='small'></TextField>
            <Button>Delete Certificate</Button>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Form