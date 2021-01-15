const fetch = require('node-fetch');
const swapi = require('./getSwapi');


/*  EXPECT ASSERTIONS WITH ASYNC
Expect Assertions method tells us how many assertions we are expected
   => And here only ONE assertion, data.count=87
   => problem with async, need to wait to be done

it('calls swapi to get people', (done) => {
  expect.assertions(1);
  
  swapi.getSwapiPeople(fetch).then(data => {
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
  return swapi.getSwapiPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  });
});



it('calls swapi to get people with a promise', () => {
  expect.assertions(2);

  return swapi.getSwapiPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87)
    expect(data.results.length).toBeGreaterThan(5)
  });
});



/*  MOCKS:
fake a function, pretend to have it running
  let us spy on the behavior of a function
  that its call indirectly  by some other quote
  Rather than just testing the output then waiting for
  the async code to complete
*/
it('getSwapiPeople returns count and results', () => {
  // jest.fn() & .mockReturnValue()
  const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
        count: 89,
        results: [0, 1, 2, 3, 4, , 5]
      })
    }))

  expect.assertions(4);

  // .mock , .calls , .toBe ... jest documentation
  return swapi.getSwapiPeoplePromise(mockFetch)
    .then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith("https://swapi.py4e.com/api/people/");
      expect(data.count).toEqual(89)
      expect(data.results.length).toBeGreaterThan(5)
    });
});


