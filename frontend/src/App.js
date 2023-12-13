import { Container, Grid } from '@mui/material'
import './App.css';
import Form from "./components/form"
import Datascreen from "./components/datascreen"
import { useState } from 'react';


function App() {

  const [displayData, setDisplayData] = useState("")

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Form/>
        </Grid>
        <Grid item xs >
          <Datascreen/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
