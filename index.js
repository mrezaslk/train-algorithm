var a; // اعلان گلوبال hoist می‌شود
console.log(a); // undefined
a = 10;
console.log(a); // 10

function f() {
  var a = 5; // متغیر محلی؛ گلوبال را شَدو می‌کند
  console.log(a); // 5
}
f();
console.log(a); // 10  (گلوبال دست‌نخورده)

function g() {
  a = 99; // بدون var → گلوبال را تغییر می‌دهد (در non-strict)
}
g();
console.log(a); // 99
