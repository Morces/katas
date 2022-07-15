function narcissistic(value){
    let digits = (value + '').split('').map(Number);
    let narc = digits.reduce((a, c) => a + (c ** digits.length), 0)
    return narc === value
}
console.log(narcissistic(153))
console.log(narcissistic(201))
console.log(narcissistic(259))
console.log(narcissistic(371))
console.log(narcissistic(407))
console.log(narcissistic(595))
console.log(narcissistic(825))
console.log(narcissistic(1634))
