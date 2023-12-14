import { Container, Grid } from '@mui/material'
import './App.css';
import Form from "./components/form"
import Datascreen from "./components/datascreen"
import { useState } from 'react';


function App() {

  const [displayData, setDisplayData] = useState("")

  return (
    <Container>
      <Grid container className='main'>
        <Grid item className='content_holder'>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Form displayData={displayData} setDisplayData={setDisplayData} />
          </Grid>
          <Grid item xs className='data_field' >
            <Datascreen displayData={displayData} setDisplayData={setDisplayData} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
