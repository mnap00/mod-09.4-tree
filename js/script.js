/* eslint-disable no-console */

function arrayTree(level) {
    var array = [];
    for ( var i = 0 ; i < level ; i++ ) {
        array.push('*');
        console.log(array.join(''));
    }
}

arrayTree(4);
console.log('');
arrayTree(7);
console.log('');
