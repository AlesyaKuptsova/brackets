module.exports = function check(str, bracketsConfig) {
    var brackets = {};
    for (var i = 0; i < bracketsConfig.length; i++) {
        var openingBracket = bracketsConfig[i][0];
        var closingBracket = bracketsConfig[i][1];
        brackets[openingBracket] = closingBracket;
    }
    var stack = new Array();
    for (var i = 0; i < str.length; i++) {
        var valid = true;
        if (stack.length === 0) {
            valid = false;
        } else {
            var openingBracket = stack[stack.length-1];
            var closingBracket = brackets[openingBracket];
            if (str[i] === closingBracket ) {
                stack.pop();
            } else {
                valid = false;
            }
        }
        if(!valid) {
            if(brackets[str[i]] !== undefined) {
                stack.push(str[i]);
            }else {
                return false;
            }
        }
    }
    if ( stack.length > 0) {
        return false;
    }
    return true;
}
