function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function displayPoint(pt) {
    console.log(`${pt.x}, ${pt.y}`)
}

module.exports = { add, subtract, displayPoint };