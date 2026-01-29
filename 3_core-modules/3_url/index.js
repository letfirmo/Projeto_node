const url = require('url');
const address = 'https://www.example.com.br/catalog?product=shirt';
const parsedUrl = new url.URL(address);

console.log(parsedUrl.host);      // www.example.com.br
console.log(parsedUrl.pathname);  // /catalog
console.log(parsedUrl.search);    // ?product=shirt
console.log(parsedUrl.searchParams); // URLSearchParams { 'product' => 'shirt' }
console.log(parsedUrl.searchParams.get('product')); // shirt