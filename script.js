const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com'
];


const googleSearch = (searchInput) => {
  const matches = googleDatabase.filter(website => {
    return website.includes(searchInput);
  })
  return matches.length > 3 ? matches.slices(0, 3) : matches;
}

console.log(googleSearch('soup'));
console.log(googleSearch('cats'));



module.exports = googleSearch;