import React, { useState } from 'react'
import "./form.css"
import { Button, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, TextField, SelectChangeEvent } from '@mui/material'



const Form = (props) => {

  const [action, setAction] = useState("GetAll")
  const [uid, setUid] = useState("")
  const [cid, setcid] = useState("")

  const handleChangeAction = (event) => {
    setAction(event.target.value)
    props.setDisplayData(action)
    console.log(action)
  }

  const handleChangeUid = (event) => {
    setUid(event.target.value)
  }

  const handleChangeCid = (event) => {
    setcid(event.target.value)
  }

  return (
    <Grid container>
      <Grid item>
        current action : {action} <br />
        current uid : {uid} <br />
        current cid : {cid}<br />
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
          <TextField size='small' onChange={handleChangeUid}></TextField>
          <Grid item className={action == "GetAll" ? "visible" : "invisible"}>
            <Button>Get All Vertificates</Button>
          </Grid>
          <Grid item className={action == "GetOne" ? "visible" : "invisible"}>
            <FormLabel>Certificate ID</FormLabel>
            <TextField size='small' onChange={handleChangeCid}></TextField>
            <Button>Get Certificate</Button>
          </Grid>
          <Grid item className={action == "MakeNew" ? "visible" : "invisible"}>
            <FormLabel>Certificade Code</FormLabel>
            <TextField size='small'></TextField>
            <Button>Create Certificate</Button>
          </Grid>
          <Grid item className={action == "Delete" ? "visible" : "invisible"}>
            <FormLabel>Certificate ID</FormLabel>
            <TextField size='small' onChange={handleChangeCid}></TextField>
            <Button>Delete Certificate</Button>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Form