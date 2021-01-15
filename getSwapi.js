const fetch = require('node-fetch');


const getSwapiPeoplePromise = fetch => {
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

const getSwapiPeople = async fetch => {
  const getRequest = await fetch("https://swapi.py4e.com/api/people/");
  const getData = await getRequest.json();

  //console.log(getData);

  return {
    count: getData.count,
    results: getData.results
  }
}

//getSwapiPeople(fetch);
//getSwapiPeoplePromise(fetch);




module.exports = {
  getSwapiPeoplePromise,
  getSwapiPeople
};