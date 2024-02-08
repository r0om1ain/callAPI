// dataService.js

export const fetchData = async () => {
    try {
      const response = await fetch('https://world.openfoodfacts.org/api/v2/product/737628064502.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  