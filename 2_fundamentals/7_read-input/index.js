const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is your name? ', name => {
    if (!name) {
        console.log('You did not enter a name.');
        readline.close();
        return;
    }
    if (name === "Leticia") {
        console.log('Welcome back, Leticia! You have special access.');
    } else {
        console.log(`Hello, ${name}! Nice to meet you.`);
    }
  
  readline.close();
});