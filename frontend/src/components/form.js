import React, { useEffect, useState } from 'react'
import "./form.css"
import { Button, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, TextField, SelectChangeEvent } from '@mui/material'



const Form = (props) => {

  const [action, setAction] = useState("getall")
  const [uid, setUid] = useState("")
  const [cid, setcid] = useState("")
  const [cname, setCname] = useState("")

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

  const handleChangeCname = (event) => {
    setCname(event.target.value)
  }

  const handleRequest = () => {
    let url = "http://localhost:5000/certs/" + action + "?user=" + uid
    let method = "GET"
    if (action == "getone" ) {
      url = url + "&" + cid
    }
    if (action == "delete") {
      url = url + "&" + cid
      method = "POST"
    }
    if (action == "create") {
      url = url + cname
      method = "POST"
    }
    console.log(url)
    fetch(url,  {method: method, headers: {"Content-Type": "application/json"}})
      .then((res) => res.json())
      .then((data) => {
        console.log("the data received is :")
        console.log(data);
        props.setDisplayData(data)
      })
      .catch((err) => {
        console.log(err.message);
      });


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
          <MenuItem value={"getall"}>Get All Certificates</MenuItem>
          <MenuItem value={"getone"}>Get Certificate by ID</MenuItem>
          <MenuItem value={"create"}>Generate new Certificate</MenuItem>
          <MenuItem value={"delete"}>Delete a Certificate</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <FormControl>
          <FormLabel>UID</FormLabel>
          <TextField size='small' onChange={handleChangeUid}></TextField>
          <Grid item className={action == "getall" ? "visible" : "invisible"}>
            <Button onClick={() => handleRequest()}>Get All Vertificates</Button>
          </Grid>
          <Grid item className={action == "getone" ? "visible" : "invisible"}>
            <FormLabel>Certificate ID</FormLabel>
            <TextField size='small' onChange={handleChangeCid}></TextField>
            <Button onClick={() => handleRequest()}>Get Certificate</Button>
          </Grid>
          <Grid item className={action == "create" ? "visible" : "invisible"}>
            <FormLabel>Certificade Name</FormLabel>
            <TextField size='small' onChange={handleChangeCname}></TextField>
            <Button onClick={() => handleRequest()}>Create Certificate</Button>
          </Grid>
          <Grid item className={action == "delete" ? "visible" : "invisible"}>
            <FormLabel>Certificate ID</FormLabel>
            <TextField size='small' onChange={handleChangeCid}></TextField>
            <Button onClick={() => handleRequest()}>Delete Certificate</Button>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Form