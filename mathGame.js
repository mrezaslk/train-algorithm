// const intNumber = "621986190166990";

// // const
// function checkLuhn(cardNo) {
//   let nDigits = cardNo.length;

//   let nSum = 0;
//   let isSecond = false;
//   for (let i = nDigits - 1; i >= 0; i--) {
//     let d = cardNo[i].charCodeAt() - "0".charCodeAt();

//     if (isSecond == true) d = d * 2;
//     nSum += parseInt(d / 10, 10);
//     nSum += d % 10;
//     isSecond = !isSecond;
//   }
//   return nSum % 10 == 0;
// }

// let cardNo = "79927398713";
// let carNo2 = "621986190166990";
// console.log(checkLuhn(carNo2));
// // if (checkLuhn(cardNo)) document.write("This is a valid card");
// // else document.write("This is not a valid card");

// chatgot code
// validateLuhn(card) -> true/false
// قبول می‌کند رشته یا عدد (تبدیل به رشته می‌کند).
function validateLuhn(card) {
  const s = String(card).replace(/\s+/g, ""); // حذف فاصله‌ها
  let sum = 0;
  let doubleNext = false; // شروع از راست؛ اولین رقم (کنترل) ضرب نمی‌شود

  for (let i = s.length - 1; i >= 0; i--) {
    let d = s.charCodeAt(i) - 48; // سریع‌تر از parseInt
    if (d < 0 || d > 9) return false; // غیر رقمی
    if (doubleNext) {
      d = d << 1; // d * 2 (با shift سریع‌تر)
      if (d > 9) d -= 9; // معادل جمع ارقام یا -9
    }
    sum += d;
    doubleNext = !doubleNext;
  }
  return sum % 10 === 0;
}

// generateCheckDigit(prefix) -> رقم کنترلی (0-9) برای رشته‌ای از ارقام (مثلاً 15 رقم)
function generateCheckDigit(prefix) {
  const s = String(prefix).replace(/\s+/g, "");
  let sum = 0;
  let doubleNext = true; // وقتی می‌خواهیم رقم کنترل را تولید کنیم،
  // فرض می‌کنیم می‌خواهیم آن را به انتهای prefix اضافه کنیم،
  // بنابراین شروع از راستِ prefix باید طوری باشد که
  // رقم کنترل در جای "اول از راست" قرار گیرد؛
  // پس برای محاسبه برای prefix، اولین رقمی که ضرب می‌شود
  // بستگی به طول prefix دارد. ساده‌تر:
  // برای تولید دقیق‌تر: معکوس کردن منطق — محاسبه با فرض اینکه بعد از prefix یک رقم قرار می‌گیرد
  // راه ساده‌تر: محاسبه sum فعلی با همان قاعده Luhn طوری که وقتی کنترل را اضافه کنیم doubleNext هم درست باشد.
  // پیاده‌سازی زیر کاری می‌کند که رفتار درست باشد:
  for (let i = s.length - 1; i >= 0; i--) {
    let d = s.charCodeAt(i) - 48;
    if (d < 0 || d > 9) throw new Error("prefix must be digits");
    if (!doubleNext) {
      // توجه: هنا برعکس validate — به‌خاطر جاگذاری کنترل
      d = d << 1;
      if (d > 9) d -= 9;
    }
    sum += d;
    doubleNext = !doubleNext;
  }
  // حالا رقم کنترلی x را طوری انتخاب می‌کنیم که (sum + x) % 10 === 0
  const mod = sum % 10;
  return mod === 0 ? 0 : 10 - mod;
}

const intNumber = "6219861901669904";
console.log('1',generateCheckDigit(intNumber));
console.log('validateLuhn',validateLuhn(intNumber));