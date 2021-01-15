const fetch = require('node-fetch');
const swapi = require('./getSwapi');


/*  EXPECT ASSERTIONS WITH ASYNC
Expect Assertions method tells us how many assertions we are expected
   => And here only ONE assertion, data.count=87
   => problem with async, need to wait to be done

it('calls swapi to get people', (done) => {
  expect.assertions(1);
  
  swapi.getSwapi(fetch).then(data => {
    expect(data.count).toEqual(87);
    // Do not pass this tests until this is done 
    done();

  });
});
*/

/*  EXPECT ASSERTIONS WITH ASYNC
   => problem with async, need to wait to be done
2sd way to do with the 'return' key word
*/
it('calls swapi to get people', () => {
  expect.assertions(1);

  // returning the promise, it gonna wait...
  return swapi.getSwapi(fetch).then(data => {
    expect(data.count).toEqual(87);
  });
});



it('calls swapi to get people with a promise', () => {
  expect.assertions(2);

  return swapi.getSwapiPromise(fetch).then(data => {
    expect(data.count).toEqual(87)
    expect(data.results.length).toBeGreaterThan(5)
  });
});


