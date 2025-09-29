const obj = {
  x: 1,
  a: function () { console.log(this.x); }, // this → obj
  b: () => { console.log(this.x); }        // this → از بیرون (نه obj)
};
obj.a(); // 1
obj.b();

















// 'use strict'
// function normal() {
//     console.log(this)
// }
// normal()

// class MyComponent extends React.Component {
//   handleClick = () => {
//     console.log(this); // همیشه همون instance کامپوننت
//   };

//   render() {
//     return <button onClick={this.handleClick}>Click</button>;
//   }
// }

// class MyComponent extends React.Component {
//   constructor() {
//     super();
//     this.handleClick = this.handleClick.bind(this); // بدون این خط کار نمی‌کرد
//   }

//   handleClick() {
//     console.log(this); // بدون bind → undefined
//   }

//   render() {
//     return <button onClick={this.handleClick}>Click</button>;
//   }
// }

// const obj = {
//   name: "Ali",
//   sayName: () => {
//     console.log(this.name);
//   },
// };
// obj.sayName(); // undefined (چون this از بیرون گرفته شده، نه obj)

// const obj = {
//   name: "Ali",
//   sayName: function() {
//     console.log(this.name);
//   }
// };
// obj.sayName(); // "Ali"

// var a; // اعلان گلوبال hoist می‌شود
// console.log(a); // undefined
// a = 10;
// console.log(a); // 10

// function f() {
//   var a = 5; // متغیر محلی؛ گلوبال را شَدو می‌کند
//   console.log(a); // 5
// }
// f();
// console.log(a); // 10  (گلوبال دست‌نخورده)

// function g() {
//   a = 99; // بدون var → گلوبال را تغییر می‌دهد (در non-strict)
// }
// g();
// console.log(a); // 99
