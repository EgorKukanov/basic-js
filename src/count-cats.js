const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
const countCats = backyard => {
  let count = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (x = 0; x < backyard.length; x++) {
      if (backyard[i][x] === '^^') {
        count++
      }
    }
  }
  return count
}

module.exports = {
  countCats
};
