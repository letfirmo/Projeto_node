function a() {
  console.log('Executing function a');
}

function b() {
  console.log('Executing function b');
}

function c() {
  console.log('Executing function c');
  a();
  b();
}

c();
