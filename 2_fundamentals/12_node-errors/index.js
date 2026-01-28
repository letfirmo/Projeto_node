const x = 10;

//throw
//check if x is a integer number 
if (!Number.isInteger(x)) {
    throw new Error('The value of x is not a integer number');
}

console.log('Continuing execution...');

//try...catch
try {
    x = 2
}catch (err) {
    console.log(`Error: ${err}`)
}