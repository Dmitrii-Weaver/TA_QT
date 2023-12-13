import { Container, Grid } from '@mui/material'
import './App.css';
import Form from "./components/form"
import Datascreen from "./components/datascreen"
import { useState } from 'react';


function App() {

  const [displayData, setDisplayData] = useState("default value")

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Form displayData={displayData} setDisplayData={setDisplayData} />
        </Grid>
        <Grid item xs >
          <Datascreen displayData={displayData} setDisplayData={setDisplayData}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
