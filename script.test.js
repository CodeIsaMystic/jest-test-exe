const googleSearch = require('./script');

const dbMock = [
  'dog.com',
  'cheese.com',
  'disney.com',
  'dogpictures.com'
];

it('is a silly test', () => {
  expect('hello').toBe('hello');
  //googleSearch('test', dbMock);
});


it('is searching google', () => {
  expect(googleSearch('test thus', dbMock))
    .toEqual([])
  expect(googleSearch('dog', dbMock))
    .toEqual(['dog.com', 'dogpictures.com'])
});

