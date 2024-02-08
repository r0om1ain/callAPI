import React, { useState, useEffect } from 'react';
import { Container, CircularProgress, Typography, Card, CardContent, CardMedia, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://world.openfoodfacts.org/api/v2/product/737628064502.json');
        const jsonData = await response.json();
        setData(jsonData.product);
        setIsLoading(false);
        setOpenSnackbar(true); // Ouvrir le snackbar une fois les données chargées
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Product Information
      </Typography>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Card>
            <CardMedia
              component="img"
              height="200"
              width="600"
              image={data.image_front_url}
              alt="Product Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Product Code: {data.code}
              </Typography>
              <Typography variant="body1" component="div">
                Brand: {data.brands}
              </Typography>
            </CardContent>
          </Card>
          <Snackbar open={openSnackbar} onClose={handleSnackbarClose}>
            <Alert onClose={handleSnackbarClose} severity="success">
              Product code: {data.code} | Brand: {data.brands}
            </Alert>
          </Snackbar>
        </>
      )}
    </Container>
  );
}

export default App;
