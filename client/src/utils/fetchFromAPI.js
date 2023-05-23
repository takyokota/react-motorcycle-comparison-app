import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles',
//   params: { make: 'harley-davidson', model: 'sportster', year: '1999', offset: '2' },
//   headers: {
//     'X-RapidAPI-Key': process.env.API_KEY,
//     'X-RapidAPI-Host': 'motorcycles-by-api-ninjas.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

// export const BASE_URL = 'https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles';

// const options = {
//   headers: {
//     'X-RapidAPI-Key': process.env.API_KEY,
//     'X-RapidAPI-Host': 'motorcycles-by-api-ninjas.p.rapidapi.com'
//   }
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}${url}`, options);

//   return data[0];
// };

export const fetchFromAPI = async (make, model, year) => {
  const { data } = await axios({
    method: 'GET',
    url: 'https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles',
    params: { make, model, year },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'motorcycles-by-api-ninjas.p.rapidapi.com'
    }
  });

  // data.filter((data) => data.model === model);

  return data[0];
};