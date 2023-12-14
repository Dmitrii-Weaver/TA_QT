import React, { useState } from 'react'
import "./form.css"
import { Button, FormControl, FormLabel, Grid, MenuItem, Select, TextField } from '@mui/material'

const Form = (props) => {

  const [action, setAction] = useState("getall")
  const [uid, setUid] = useState("")
  const [cid, setcid] = useState("")
  const [cname, setCname] = useState("")

  const handleChangeAction = (event) => {
    setAction(event.target.value)
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
    if (action == "getone") {
      url = url + "&cid=" + cid
    }
    if (action == "delete") {
      url = url + "&cid=" + cid
      method = "POST"
    }
    if (action == "create") {
      url = url + "&cname=" + cname
      method = "POST"
    }
    fetch(url, { method: method, headers: { "Content-Type": "application/json" } })
      .then((res) => res.json())
      .then((data) => {
        props.setDisplayData(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const fetchAll = () => {
    let url = "http://localhost:5000/certs/list/"
    let method = "GET"
    fetch(url, { method: method, headers: { "Content-Type": "application/json" } })
      .then((res) => res.json())
      .then((data) => {
        props.setDisplayData(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <Grid container className='form_holder'>
      <Grid item>
        <FormLabel>Action</FormLabel><br />
        <Select
          className='selector inputField'
          id="demo-simple-select"
          value={action}
          label="Action"
          onChange={handleChangeAction}
        >
          <MenuItem value={"getall"}>Get All Certificates</MenuItem>
          <MenuItem value={"getone"}>Get Certificate by ID</MenuItem>
          <MenuItem value={"create"}>Generate Certificate</MenuItem>
          <MenuItem value={"delete"}>Delete Certificates</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <FormControl>
          <FormLabel>User ID</FormLabel>
          <TextField size='small' className='inputField' onChange={handleChangeUid}></TextField>
          <Grid item className={action == "getall" ? "visible" : "invisible"}>
            <br /><br />
            <Button variant="outlined"onClick={() => handleRequest()}>Get All Certificates</Button>
          </Grid>
          <Grid item className={action == "getone" ? "visible" : "invisible"}>
            <FormLabel>Certificate ID</FormLabel>
            <TextField size='small' className='inputField' onChange={handleChangeCid}></TextField>
            <br /><br />
            <Button variant="outlined"onClick={() => handleRequest()}>Get Certificate</Button>
          </Grid>
          <Grid item className={action == "create" ? "visible" : "invisible"}>
            <FormLabel>Certificade Name</FormLabel>
            <TextField size='small' className='inputField' onChange={handleChangeCname}></TextField>
            <br /><br />
            <Button variant="outlined"onClick={() => handleRequest()}>Create Certificate</Button>
          </Grid>
          <Grid item className={action == "delete" ? "visible" : "invisible"}>
            <FormLabel>Certificate ID</FormLabel>
            <TextField size='small' className='inputField' onChange={handleChangeCid}></TextField>
            <br /><br />
            <Button variant="outlined"onClick={() => handleRequest()}>Delete Certificate</Button>
          </Grid>
        </FormControl>
        <br /><br />
        <Button variant="outlined" onClick={() => fetchAll()}>Show full DB</Button>
      </Grid>
    </Grid>
  )
}

export default Form