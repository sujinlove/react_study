/*
변수 선언
*/

/* ------------ ES5 ------------- */

// 특별히 선언하지 않고 변수 사용 가능
name = "Hello World";
console.log(name);

// 선언한다면 var 키워드 사용
var age = 19;
console.log(age);

var age = 20;
console.log(age);

// if나 for안에서 선언된 변수를 밖에서 식별 가능

if (true) {
  var foo = 1234;
}

console.log(foo);

// 선언을 나중에 해도 에러 발생하지 않는다.
// --> 값을 할당되지 않은 변수를 출력하므로 undefned가 실행됨.
console.log(bar);
var bar = 1;

/* ------------ ES6 ------------- */

// let 키워드를 사용하면 일반적인 프로그래밍 언어의 변수규칙을 따름
// 1) 중복선언 x
// 2) 변수를 사용하기 위해서는 반드시 선언이 먼저 이루어져야한다,
// 3) if, for 등의 블록 안에서 생성된 변수는 블록 밖으로 나오지 못함.
let yourName = "js 학생";
// let yourName = "js 학생"; -> 중복선언 에러

console.log(yourName);

if (true) {
  let nickName = "123";
}

//console.log(nickName);

// 읽기 전용 변수를 생성함.
// --> 선언과 동시에 최초 1회만 값을 할당하고 내용을 수정할 수 없는 변수
// --> 상수
const URL = "http://www.naver.com";

// 배열이나 객체가 상수로 정의되더라도 원소는 변경할 수 있다.
const data = { a: 123, b: 456 };
console.log(data);

data.a = 100;
data.b = 200;

console.log(data);
