/* eslint-disable no-console */

function arrayTree(level) {
    for ( var i = 0 ; i < level ; i++ ) {

        var array = [];

        for ( var j = (level - i) ; j > 0 ; j-- ) {
            array.push(' ');
        }

        for ( var k = 0 ; k <= (i * 2); k++ ) {
            array.push('*');
        }

        console.log(array.join(''));
    }
}

arrayTree(4);
console.log('');
arrayTree(7);
console.log('');
