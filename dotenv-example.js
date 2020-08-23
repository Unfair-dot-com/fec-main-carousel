console.log('Now the value for FOO is:', process.env.FOO);
console.log('Now the value for NODE_ENV is:', process.env.NODE_ENV);
process.env.NODE_ENV = 'production';
process.env.mainCarouselURL = 'http://localhost:5001';
console.log('Now the value for NODE_ENV is:', process.env.NODE_ENV);

console.log('process.env ', process.env);
