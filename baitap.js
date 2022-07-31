// lý thuyết
// câu 1 let/var/const
// 1.1 Var, let, const là gì trong Javascript ?
// Var, let, const là hàm để khai báo biến khởi tạo ,phạm vi và lưu trữ trong javascript
// 1.2 Sự khác nhau giữa let và var nằm ở đâu? 
//  var chúng ta có thể khai báo đa dạng các kiểu biến như number, string, boolean, et
//  còn có thêm tính chất hoisting nghĩa là dù khai báo ở đâu thì biến đều sẽ được đem lên đầu scope
//   trước khi code được thực hiện.
//   let cho phép chúng ta cập nhật giá trị của biến chứ không cho phép chúng ta tái khái báo lại biến đó
//   Giống với var, let cũng có tính hoisting tuy nhiên lại khác nhau ở chỗ thay vì var được khởi tạo với giá trị là undefined thì let sẽ không có bất kỳ giá trị khởi tạo nào.
//    Điều này dẫn đến việc nếu chúng ta sử dụng biến let trước khi khai báo thì sẽ gặp lỗi Reference Error.
// //boolean
//    Kiểu dữ liệu Boolean chỉ có 2 giá trị duy nhất là true hoặc false 
// Kiểu dữ liệu Boolean thông thường được dùng để lưu trữ các giá trị đúng hoặc sai của một mệnh đề so sánh nào đó
// Giá trị boolean chính là kết quả của một mệnh đề so sánh









// bài tập
// câu 1
// let a = Number(prompt('nhập số bất kì trong khoảng 0 đến 9'));
// if (a>=0 && a<=4) {
//     alert('lower halt of 9');
// } else if (a>=5 && a<= 9) {
//     alert('higher halt of 9');
// } else {
//     alert('mời nhập lại')
// }


// câu 2
// let a = Number(prompt('nhập số đầu tiên n ='));
// let b = Number(prompt('nhập số thứ 2 x ='));
// let c = a/2;
// if (b < c && b < a) {
//     alert(b + ' is in lower halt of ' + a);
// } else if (b > c && b < a) {
//     alert(b + ' is in higher halt of ' + a);
// } else {
//     alert(b +' không năm trong khoảng ' + a)
// }


// câu 3
// let x = Number(prompt('nhập số x = '));
// if (x % 2 === 0) {
//     alert(x + ' is an even number');
// } else {
//     alert(x + ' is an odd number');
// }


// câu 4
// let mass = Number(prompt('Your welght in kg ?'));
// let height = Number(prompt('your height in cm'));
// let a = height/100;
// let BMI = mass/(a*a);
// if (BMI < 16) {
//     alert('your BMI is ' + BMI);
//     alert('mày là bộ xương à');
// } else if (BMI >= 16 && BMI < 18.5) {
//     alert('your BMI is ' + BMI);
//     alert('mày là idol hàn quốc à');
// } else if (BMI >= 18.5 && BMI < 25) {
//     alert('your BMI is ' + BMI);
//     alert('mày đẹp zai đấy');
// } else if (BMI >= 25 && BMI < 30) {
//     alert('your BMI is ' + BMI);
//     alert('mày béo quá rồi đấy');
// } else {
//     alert('your BMI is ' + BMI);
//     alert('thôi ông không cần giảm cân nữa đâu');
// }


// câu 5
// let toan = Number(prompt('nhập điểm toán'));
// let ly = Number(prompt('nhập điểm lý'));
// let hoa = Number(prompt('nhập điểm hóa'));
// let van = Number(prompt('nhập điểm văn'));
// let anh = Number(prompt('nhập điểm anh'));
// let tb = (toan + ly + hoa + van + anh)/5;
// if (tb >= 9) {
//     alert('grade A');
// } else if (tb >= 8) {
//     alert('grade B');
// } else if (tb >= 7) {
//     alert('grade C');
// } else if (tb >= 6) {
//     alert('grade D');
// } else if (tb >= 4) {
//     alert('grade E');
// } else {
//     alert('grade F');
// }


// câu 6
// let year = Number(prompt("Enter a year"));
// if (Number.isInteger(year)) {
//     alert('số hợp lệ');
//     if (year % 4 == 0) {
//         if (year % 100 == 0) {
//           if (year % 400 == 0) {
//             alert(year + " is a leap year");
//           } else {
//             alert(year + " is NOT a leap year");
//           }
//         } else {
//           alert(year + " is a leap year");
//         }
//       } else {
//         alert(year + " is NOT a leap year");
//       }
      
// } else {
//     alert('số không hợp lệ');
// }

// cách 2
// let year = Number(prompt("Enter a year"));
// let isLeapYear = false;
// if (Number.isInteger(year)) {
//     alert('số hợp lệ');
//     if (year % 4 == 0) {
//         if (year % 100 == 0) {
//           if (year % 400 == 0) {
//             isLeapYear = true;
//           }
//         } else {
//           isLeapYear = true;
//         }
//       }
//       if (isLeapYear) {
//         alert(year + " is a leap year");
//       } else {
//         alert(year + " is NOT a leap year");
//       }
// } else {
//     alert('số không hợp lệ');
// }


// bài 7
// let height = Number(prompt('nhập chiều cao của bạn cm'));
// if (height < 150) {
//     alert('mày là người lùn à');
// } else if (height >= 150 && height <= 169) {
//     alert('mày trông cũng tàm tạm.cho 3 điểm');
// } else {
//     alert('mày trông cũng được đấy')
// }


// bài 8
// let a = Number(prompt('nhập số a'));
// let b = Number(prompt('nhập số b'));
// if (a > b) {
//     console.log('số a là số lớn ' + a);
// } else {
//     console.log('số b là số lớn ' + b);
// }


// bài 9
// let a = Number(prompt('nhập số a'));
// let b = Number(prompt('nhập số b'));
// let c = prompt('nhập phép tính');
// let tong;
// let tru;
// let chia;
// let nhan;
// let chialaydu;
// let binhphuong;
// switch (c) {
//     case '+':
//         tong = a + b;
//         alert(" tổng của 2 số a và b là " + tong);
//         break;
//     case '-':
//         tru = a - b;
//         alert(" hiệu của 2 số a và b là " + tru);
//         break;
//     case '/':
//         chia = a / b;
//         alert(" chia của 2 số a và b là " + chia);
//         break;
//     case '*':
//         nhan = a * b;
//         alert(" nhân của 2 số a và b là " + nhan);
//         break;
//     case '%':
//         chialaydu = a % b;
//         alert(" chia lấy dư của 2 số a và b là " + chialaydu);
//         break;
//     case '**':
//         binhphuong = a ** 2;
//         alert(" bình phương của 2 số a  là " + binhphuong);
//         binhphuong = b ** 2
//         alert(" bình phương của 2 số b là " + binhphuong);
//         break;
//     default :
//         alert("không tính được");
//         break;
// }



// câu 10
// let a = Number(prompt('nhập số a'));
// let b = Number(prompt('nhập số b'));
// let c = Number(prompt('nhập số c'));
// if (a > b && a > c) {
//     alert('a là số lớn nhất ' + a);
//     if (b < a && b < c) {
//         alert('b là số bé nhất ' + b);
//     } else if (c < a && c < b) {
//         alert('c là số bé nhất ' + c);
//     }   
// } else if (b > a && b > c) {
//     alert('b là số lớn nhất ' + b);
//     if (a < b && a < c) {
//         alert('a là số bé nhất ' + a);
//     } else if (c < a && c < b) {
//         alert('c là số bé nhất ' + c);
//     }
// } else if (c > a && c > b) {
//     alert('c là số lớn nhất ' + c);
//     if (a < b && a < c) {
//         alert('a là số bé nhất ' + a);
//     } else if (b < a && b < c) {
//         alert('b là số bé nhất ' + b);
//     }
// } else {
//     alert('không có trường hợp');
// }


// câu 11
// let a = Number(prompt('nhập số a'));
// let b = Math.sqrt(a);
// if (Number.isInteger(a)) {
//     alert('số a hợp lệ');
//     if (Number.isInteger(b)) {
//         alert('a là số chính phương ');
//     } else {
//         alert('a không phải số chính phương');
//     }
// } else {
//     alert('mời nhập lại');
// }


// // câu 12
// let date = Number(prompt('nhập ngày sinh của bạn'));
// let month = Number(prompt('nhập tháng sinh của bạn'));
// switch (month) {
//     case 1 :
//         if (date >= 20 && date <= 31) {
//             alert('bạn thuộc cung bảo bình');
//         } else if (date >= 1 && date <= 19) {
//             alert('bạn thuộc cung ma kết');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     break;
//     case 2 :
//         if (date >= 19 && date <= 30) {
//             alert('bạn thuộc cung song ngư');
//         } else if (date >= 1 && date <= 18) {
//             alert('bạn thuộc cung bảo bình');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     break;
//     case 3 :
//         if (date >= 21 && date <= 31) {
//             alert('bạn thuộc cung bạch dương');
//         } else if (date >= 1 && date <= 20) {
//             alert('bạn thuộc cung song ngư');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     break;
//     case 4 :
//         if (date >= 20 && date <= 30) {
//             alert('bạn thuộc cung kim ngưu');
//         } else if (date >= 1 && date <= 19) {
//             alert('bạn thuộc cung bạch dương');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     break;
//     case 5 :
//         if (date >= 21 && date <= 31) {
//             alert('bạn thuộc cung song tử');
//         } else if (date >= 1 && date <= 20) {
//             alert('bạn thuộc cung kim ngưu');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     break;
//     case 6 :
//         if (date >= 22 && date <= 30) {
//             alert('bạn thuộc cung cự giải');
//         } else if (date >= 1 && date <= 21) {
//             alert('bạn thuộc cung song tử');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     break;
//     case 7 :
//         if (date >= 23 && date <= 31) {
//             alert('bạn thuộc cung sư tử');
//         } else if (date >= 1 && date <= 22) {
//             alert('bạn thuộc cung cự giải');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     break;
//     case 8 :
//         if (date >= 23 && date <= 31) {
//             alert('bạn thuộc cung xử nữ');
//         } else if (date >= 1 && date <= 22) {
//             alert('bạn thuộc cung sư tử');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     break;
//     case 9 :
//         if (date >= 23 && date <= 30) {
//             alert('bạn thuộc cung thiên bình');
//         } else if (date >= 1 && date <= 22) {
//             alert('bạn thuộc cung xử nữ');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     case 10 :
//         if (date >= 24 && date <= 31) {
//             alert('bạn thuộc cung hổ cáp');
//         } else if (date >= 1 && date <= 23) {
//             alert('bạn thuộc cung thiên bình');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     break;
//     case 11 :
//         if (date >= 22 && date <= 30) {
//             alert('bạn thuộc cung nhân mã');
//         } else if (date >= 1 && date <=21) {
//             alert('bạn thuộc cung hổ cáp');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     break;
//     case 12 :
//         if (date >= 22 && date <= 31) {
//             alert('bạn thuộc cung ma kết');
//         } else if (date >= 1 && date <= 21) {
//             alert('bạn thuộc cung nhân mã');
//         } else {
//             alert('bạn đã hẹo');
//         }
//     break;
//     default :
//         alert('bạn đã hẹo');
//     break;
// }



// câu 13
// let a = Number(prompt('nhập số a'));
// let b = Number(prompt('nhập số b'));
// let c = Number(prompt('nhập số c'));
// let delta = b**2 - (4*a*c);
// let d = Math.sqrt(delta);
// let x = (-b + d)/(2*a);
// let y = (-b - d)/(2*a);
// let z = -b/(2*a);
// if (delta > 0) {
//     alert('phương trình có 2 nghiệm phân biệt ; ' + x +' ' + y);
// } else if (delta < 0) {
//     alert('phương trình vô nghiệm');
// } else if (delta === 0) {
//     alert('phương trình có 1 nghiệm : ' + z);
// }


// câu 14
// let a = Number(prompt('nhập vào  số a'));
// let b = Number(prompt('nhập vào số b'));
// let c =Number(prompt('nhập vào số c'));
// if (a +b > c && a +c > b && b + c > a){
//     alert('đây là 1 tam giác');
// }
// else{ 
//     alert('đây không phải là 1 tam giác xin hãy kiểm tra lại')
// }



