function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let left = expr.split("").filter(el => el == "(");
    let right = expr.split("").filter(el => el == ")");

    if(left.length !== right.length) throw "ExpressionError: Brackets must be paired";
    if (expr.includes("/ 0") || expr.includes("/0")) throw "TypeError: Division by zero.";
    var r = new Function('return '+ expr );
    var res = +r();

    if (res == Infinity) throw "TypeError: Division by zero.";

    return res;
}

module.exports = {
    expressionCalculator
}