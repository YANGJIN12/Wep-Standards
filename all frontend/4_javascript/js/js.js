// // 두 배열끼리 결합(concat)
// const arr1 = ["저녁"]
// const arr2 = ["배가 고프다","난 데스까"]

// const stringplus = arr1.concat(arr2)
// document.write("<p>" + stringplus +"</p>")

// // 배열 생성자 가져오기
// const fruits = ["바나나","오렌지","사과","망고"];
// let text = fruits.constructor;
// document.write("<p>"+ text + "</p>")

// // 배열 요소복사
// const copy = ["복사","copy","반사","copy2"];
// document.write("<p>"+ copy.copyWithin(2,1) +"</p>");

// // 키 and 밸류
// const order = ["one","two","three","four","five"];
// const o = order.entries();
// for (let x of o){
//   document.write(x + "<br>");
// }

// // every
// const classAges = [19,18,24,21,47,23];
// document.write(classAges.every(checkAge)); 
// function checkAge(age){
//   return age > 19;
// }

// // fill
// const color = ["자마스","고쿠","자마스"];
// document.write("<br>" + color.fill("delete"))

// // filter
// const ca = [19,18,24,21,47,23];
// document.write("<br>" + ca.filter(checkAdult)); 
// function checkAdult(age){
//   return age >= 18;
// }

// class
// class Car{
//   constructor(brand){
//     this.carName = brand;
//   }
// }
// myCar = new Car("스텔라");
// document.write("내 자동차는" + myCar.carName + "입니다");

// // date 인스턴스화(생성)
// const d = new Date(); // 날짜객체 생성
// document.write("<br>" + "현재시간은 " + d + "입니다")

// // json
// let obj = {"name":"kyj","city":"seoul"};
// let myJson = JSON.stringify(obj);
// document.write(myJson);

// let ob = JSON.parse(`{"firstName":"John","lastName":"Doe"}`);
// document.write("<br>" + ob.firstName);

// 난수
let lotto = Math.floor(Math.random() * 46);
document.write(lotto + "<br>");