module.exports = function postFavorite (favorite, favoriteObject) {
  if (wordObject.hasOwnProperty(favorite)) {
    return {msg: 'You have already added, ' + favorite + ', to your list.'};
  }

  favoriteObject[favorite] = true;
  console.dir(wordObject);
  return {msg: 'Thanks for submitting ' + favorite + '!'};
};
