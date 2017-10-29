var title = "Hello Nuclide";
console.log(title);



var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
};
a[7]();


var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
};
a[7]();

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
