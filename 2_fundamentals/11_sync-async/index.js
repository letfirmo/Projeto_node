// Synchronous form: the code waits to be fully executed before proceeding.
// Asynchronous form: the code continues executing and handles the result later.

// Synchronous example
 const fs = require('fs');

console.log('Starting synchronous file creation...');

fs.writeFileSync('file_sync.txt', 'This is a synchronous file.');

console.log('Synchronous file created.');

// Asynchronous example
console.log('Starting asynchronous file creation...');

fs.writeFile('file_async.txt', 'This is an asynchronous file.', function (err) {
    setTimeout(function () {
        console.log('Asynchronous file created.');
    }, 1000)
});

console.log('This message appears before the asynchronous file is created.');