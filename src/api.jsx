const fetchCars = async () => {
    const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars');
    const data = await response.json();
    return data._embedded.cars;
      };
      const addCar = async (car) => {
        const options = {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(car)
        }
          const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars', options);
          const data = await response.json();
          console.log('Created:', data);
          return data;
      }
   
       const updateCar = async ({url, car}) => {
        const options = {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(car)
        }  
          const response = await fetch(url, options);
          const data = await response.json();
          console.log('Updated:', data);
            return data;
        }

       const deleteCar = async (url) => {
        const options ={
          method: 'DELETE'
        }
          if(window.confirm("do you want to delete this car")){
              return fetch(url, options);
          }
     };  

     export{ fetchCars, addCar, deleteCar, updateCar};