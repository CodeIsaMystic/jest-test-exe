const fetch = require('node-fetch');


const getSwapiPromise = fetch => {
  return fetch("https://swapi.py4e.com/api/people/")
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      return {
        count: data.count,
        results: data.results
      }
    })
}

const getSwapi = async fetch => {
  const getRequest = await fetch("https://swapi.py4e.com/api/people/");
  const getData = await getRequest.json();

  //console.log(getData);

  return {
    count: getData.count,
    results: getData.results
  }
}

//getSwapi(fetch);




module.exports = {
  getSwapiPromise,
  getSwapi
};