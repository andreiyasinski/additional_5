module.exports = function check(str, bracketsConfig) {

  let checkArr = str.split('');
  let a = 0, b = 1;

  let check = function ( array = checkArr ) {

    let tempArr = [array[a], array[b]];
    let openingBrackets = [];
    let closingBrackets = [];

    for ( let i = 0; i < bracketsConfig.length; i++ ) {
      openingBrackets.push(bracketsConfig[i][0])
      closingBrackets.push(bracketsConfig[i][1])
    }

    for ( let j = 0; j < bracketsConfig.length; j++ ) {

        if ( tempArr[0] == openingBrackets[j] && tempArr[1] == closingBrackets[j] ) {

            array.splice(a, 2);
            a = 0;
            b = 1;
            if (array.length == 0) return true;

            return check(array);

            }

        }
        if (array.length == 2 || b >= array.length) return false;
        a++;
        b++;

        return check(array);

  }

  return check();
}
