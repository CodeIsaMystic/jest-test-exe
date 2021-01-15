const googleSearch = require('./googleSearch');

const dbMock = [
  'dog.com',
  'cheese.com',
  'disney.com',
  'dogpictures.com'
];


/*   Entering all tests in describe   */
describe('googleSearch', () => {
  /*  Testing simple mode  */
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



  /*  Testing types with undefined and null  */
  it('work with undefined and null inputs', () => {
    expect(googleSearch(undefined, dbMock))
      .toEqual([])
    expect(googleSearch(null, dbMock))
      .toEqual([])
  });


  /*  Testing length of matches  */
  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
    //expect(googleSearch('.com', dbMock).length).toEqual(4);
  });

});
