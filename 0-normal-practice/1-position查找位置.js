function singleCharPosition(char, string) {
    var str = string;
    var position = [];
    var pos = str.indexOf(char);
    while (pos > -1) {
        position.push(pos);
        pos = str.indexOf("d", pos + 1);
    };
    return position;
};
console.log(singleCharPosition('a', 'abcdeabda'));