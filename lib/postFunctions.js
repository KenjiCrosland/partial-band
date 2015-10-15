'use strict';

module.exports.postWord = function postWord(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: 'We already have your awesome word, ' + word + ', in our list.'};
  }

  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: 'Thanks for submitting ' + word + '!'};
};

module.exports.postFavorite = function postFavorite(favorite, favoriteObject) {
  if (favoriteObject.hasOwnProperty(favorite)) {
    return {msg: 'We already have your awesome band name, ' + favorite + ', in our list.'};
  }

  favoriteObject[favorite] = true;
  console.dir(favoriteObject);
  return {msg: favorite + ' has been added to your Favorites!'};
};
