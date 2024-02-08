import React, { useState, useEffect } from 'react';
import { fetchData } from './dataService';

function App() {
    const fetchData = async () => {
        try {
          const response = await fetch(
            "https://world.openfoodfacts.org/api/v2/product/737628064502.json"
          );
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
    }, []);
}

export default App;
