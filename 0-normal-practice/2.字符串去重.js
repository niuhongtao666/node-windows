// function removeRepeatStr(str) {
//     var newStr = '';
//     var flag;
//     var len = str.length;
//     for (var i = 0; i < len; i++) {
//         flag = 1;
//         var newLen = newStr.length;
//         for (var j = 0; j < newLen; j++) {
//             if (str[i] == newStr[j]) {
//                 flag = 0;
//                 break;
//             }
//         }
//         if (flag) {
//             newStr = newStr + str[i];
//         }
//     }
//     return newStr;
// }

// function removeRepeatStr(str) {
//     var newStr = '';
//     var len = str.length;
//     for (var i = 0; i < len; i++) {
//         if (newStr.indexOf(str[i]) == -1) {
//             newStr = newStr + str[i];
//         }
//     }
//     return newStr;
// }


// function removeRepeatStr(str) {
//     var newStr = '';
//     var len = str.length;
//     for (var i = 0; i < len; i++) {
//         if (newStr.search(str[i]) == -1) {
//             newStr = newStr + str[i];
//         }
//     }
//     return newStr;
// }



function removeRepeatStr(str) {
    var obj = {};
    var newStr = '';
    var len = str.length;
    for (var i = 0; i < len; i++) {
        if (!obj[str[i]]) {
            newStr = newStr + str[i];
            obj[str[i]] = 1;
        }
    }
    return newStr;
}
var str = "abcdefga";
console.log(removeRepeatStr(str));